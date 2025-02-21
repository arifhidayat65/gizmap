import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Use these demo credentials:
          <br />
          Email: john@mail.com
          <br />
          Password: Password12345
        </p>
      </div>
      <LoginForm />
    </div>
  )
}
