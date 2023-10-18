import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="p-10 flex items-center justify-center flex-col">
      <Component {...pageProps} />
    </main>
  )
}
