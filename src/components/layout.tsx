import Head from 'next/head'
import React from 'react'

interface Props {
    title?: string
    description?: string
    className?: string
}

const Layout: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const {
        children,
        title = 'Next.js application',
        description = 'Next.js application'
    } = props

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='title' content={title} />
                <meta name='description' content={description} />
            </Head>
            {children}
        </>
    )
}

export { Layout }
