'use client';
import LoginForm from '@/components/auth/LoginForm'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if there's a token in cookies
    const hasToken = document.cookie.includes('access_token')
    if (hasToken) {
      router.replace('/dashboard')
    }
  }, [router])

  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Use these demo credentials:
          <br />
          Email: eko22@gmail.com
          <br />
          Password: Password12345
        </p>
      </div>
      <LoginForm />
    </div>
  )
}
