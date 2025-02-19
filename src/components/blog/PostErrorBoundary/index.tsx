'use client'

import { Component, type ErrorInfo, type ReactNode } from 'react'
import PostError from '../PostError'
import { ERROR_MESSAGES } from '../PostConstants'
import { Button } from '@/components/common/Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

/**
 * Post Error Boundary Component
 * 
 * Catches and handles errors in blog post components.
 * Provides fallback UI and error recovery options.
 */
class PostErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Post error:', error, errorInfo)
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined
    })
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <PostError 
          title="Something Went Wrong"
          message={ERROR_MESSAGES.loadError}
          code={this.state.error?.message}
          action={
            <div className="space-x-4">
              <Button 
                onClick={this.handleReset}
                variant="primary"
              >
                Try Again
              </Button>
              <Button 
                onClick={() => window.location.href = '/blog'}
                variant="secondary"
              >
                Back to Blog
              </Button>
            </div>
          }
        />
      )
    }

    return this.props.children
  }
}

export default PostErrorBoundary
