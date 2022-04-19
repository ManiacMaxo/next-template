import { ThemeProvider } from '@/contexts'
import '@/styles/global.scss'
import { AppProps } from 'next/app'
import React from 'react'

const AppWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default AppWrapper
