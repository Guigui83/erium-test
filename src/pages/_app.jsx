import '@/styles/tailwind.css'
import 'focus-visible'

import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
