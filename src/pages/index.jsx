
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{`ZeroRisk - ${t('meilleursTaux')}`}</title>
        <meta
          name="description"
          content="Obtenez les meilleurs taux du marché sur vos assurances auto, immo, crédit."
        />
        <link rel="icon" type="image/x-icon" href="src/images/logos/favicon.ico"></link>
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}


export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}