import  { AppProvider } from '@/data/context/AppContext'
import '@/styles/globals.css'
import { AppContext }  from '@/data/context/AppContext'
import { AppProps } from 'next/app'


function App({ Component, pageProps }: AppProps) {
  return (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
  )
}


export default App