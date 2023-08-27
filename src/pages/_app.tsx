import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { init } from '@amplitude/analytics-node';
import { useEffect, useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { Auth } from '@supabase/auth-ui-react'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import DataContextProvider from '@/context/DataContext';
//const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
//const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export default function App({ Component, pageProps }: AppProps) {
  //const[supabase] =createClient(supabaseUl, supabaseKey)
 
  return(
    <div>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </div>
  )
}
