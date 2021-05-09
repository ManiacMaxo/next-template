import Head from 'next/head'
import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    title?: string
}

const Layout = (props: Props): JSX.Element => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            {props.children}
        </div>
    )
}

export default Layout
