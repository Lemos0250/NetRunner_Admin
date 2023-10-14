import '../styles/globals.css'
import  { AppProvider } from '../data/context/AppContext'
import  { AuthProvider } from '../data/context/AuthContext'
import { AppProps } from 'next/app'


function App({ Component, pageProps }: AppProps) {
  return (
  <AuthProvider>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </AuthProvider>
  )
}


export default App