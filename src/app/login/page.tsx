import LoginForm from '../../components/auth/LoginForm'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="w-full flex flex-col items-center">
        <div className="mb-8">
          <Image
            src="/izmap.svg"
            alt="GizMap Logo"
            width={200}
            height={47}
            priority
            className="mx-auto"
          />
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
