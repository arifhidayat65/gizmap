import { type BlogPost } from '@/types/blog'
import { type PostConfig } from '../PostConfig'

/**
 * Test environment configuration
 */
export const TEST_ENV = {
  enabled: process.env.NODE_ENV === 'test',
  debug: process.env.DEBUG === 'true',
  coverage: process.env.COVERAGE === 'true'
}

/**
 * Test configuration options
 */
export interface TestConfig {
  autoValidate: boolean
  autoA11y: boolean
  logLevel: 'error' | 'warn' | 'info' | 'debug'
  throwOnError: boolean
  simulateEvents: boolean
}

/**
 * Default test configuration
 */
export const DEFAULT_TEST_CONFIG: TestConfig = {
  autoValidate: true,
  autoA11y: true,
  logLevel: 'warn',
  throwOnError: false,
  simulateEvents: true
}

/**
 * Test logger utility
 */
export const testLogger = {
  error: (...args: any[]) => {
    if (TEST_ENV.enabled) {
      console.error('[PostTest]', ...args)
    }
  },
  warn: (...args: any[]) => {
    if (TEST_ENV.enabled && DEFAULT_TEST_CONFIG.logLevel !== 'error') {
      console.warn('[PostTest]', ...args)
    }
  },
  info: (...args: any[]) => {
    if (TEST_ENV.enabled && ['info', 'debug'].includes(DEFAULT_TEST_CONFIG.logLevel)) {
      console.info('[PostTest]', ...args)
    }
  },
  debug: (...args: any[]) => {
    if (TEST_ENV.enabled && DEFAULT_TEST_CONFIG.logLevel === 'debug') {
      console.debug('[PostTest]', ...args)
    }
  }
}

/**
 * Test result interface
 */
export interface TestResult {
  passed: boolean
  errors: string[]
  warnings: string[]
  info: string[]
}

/**
 * Test suite configuration
 */
export interface TestSuite {
  name: string
  tests: Array<{
    name: string
    run: (post: BlogPost, config: PostConfig) => TestResult
  }>
}

/**
 * Default test suites
 */
export const DEFAULT_TEST_SUITES: TestSuite[] = [
  {
    name: 'Validation',
    tests: [
      {
        name: 'Required Fields',
        run: (post) => {
          const errors: string[] = []
          const requiredFields = ['id', 'title', 'content', 'author', 'readTime']
          
          requiredFields.forEach((field) => {
            if (!post[field as keyof BlogPost]) {
              errors.push(`Missing required field: ${field}`)
            }
          })

          return {
            passed: errors.length === 0,
            errors,
            warnings: [],
            info: []
          }
        }
      }
    ]
  },
  {
    name: 'Accessibility',
    tests: [
      {
        name: 'Heading Structure',
        run: () => {
          const errors: string[] = []
          const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
          let lastLevel = 0

          headings.forEach((heading) => {
            const level = parseInt(heading.tagName[1])
            if (level - lastLevel > 1) {
              errors.push(`Incorrect heading hierarchy: ${heading.tagName}`)
            }
            lastLevel = level
          })

          return {
            passed: errors.length === 0,
            errors,
            warnings: [],
            info: [`Found ${headings.length} headings`]
          }
        }
      }
    ]
  }
]

/**
 * Run all test suites
 */
export const runTestSuites = (
  post: BlogPost, 
  config: PostConfig,
  suites = DEFAULT_TEST_SUITES
): TestResult[] => {
  return suites.flatMap(suite => 
    suite.tests.map(test => {
      const result = test.run(post, config)
      testLogger.info(`Running ${suite.name} - ${test.name}:`, result)
      return result
    })
  )
}

/**
 * Test coverage report
 */
export const generateCoverageReport = (results: TestResult[]) => {
  const total = results.length
  const passed = results.filter(r => r.passed).length
  const coverage = (passed / total) * 100

  return {
    total,
    passed,
    failed: total - passed,
    coverage: Math.round(coverage * 100) / 100,
    results
  }
}
