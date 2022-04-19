import React from 'react'
import { Layout } from '@/components'
import { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <Layout>
            <main className='flex h-screen w-screen items-center justify-center dark:bg-slate-800'>
                <span className='text-3xl text-slate-600 dark:text-slate-100'>
                    Hello index
                </span>
            </main>
        </Layout>
    )
}

export default Home
