import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/LandingPage/Layout'
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from 'next/router'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import 'tailwindcss/tailwind.css';
config.autoAddCss = false



function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>

  )
}

export default MyApp
