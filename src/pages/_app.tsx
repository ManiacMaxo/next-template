import { AppProps } from 'next/app'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Layout } from '../components'
import '../styles/global.scss'

const AppWrapper = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default AppWrapper
