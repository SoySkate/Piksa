import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import DataContextProvider from '@/context/DataContext';
import { useRouter } from 'next/router';
//const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
//const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export default function App({ Component, pageProps }: AppProps) {
 
  return(
    <div>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </div>
  )
}
