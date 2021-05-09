import { NextApiRequest, NextApiResponse } from 'next'

const hello = (req: NextApiRequest, res: NextApiResponse): any => {
    return res.send('hello world')
}

export default hello
