import { NextApiRequest, NextApiResponse } from 'next'

const hello = (_req: NextApiRequest, res: NextApiResponse) => {
    return res.send('hello world')
}

export default hello
