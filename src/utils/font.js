import { Inter } from 'next/font/google'
import { Lexend } from 'next/font/google'


const bodytext = Inter({
    variable: '--font-bodytext',
    subsets: ['latin'],
    display: 'swap',
})

const fontVariables = [
    bodytext.variable,
].join(' ');

export default fontVariables;