import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Login() {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>Sign In - ZeroRisk</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Se connecter à son compte
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Vous n'avez pas encore de compte?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                S'inscrire
              </Link>{' '}
              pour obtenir une soumission.
            </p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Mot de passe"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Se connecter <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
