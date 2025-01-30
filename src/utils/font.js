import {Poppins} from 'next/font/google'
import {Lexend} from 'next/font/google'


const bodytext = Poppins({
    variable: '--font-bodytext',
    subsets: ['latin'],
    display: 'swap',
    weight: '300'
})

const header1 = Lexend({

    variable: '--font-header',
    subsets: ['latin'],
    display: 'swap',
    weight: '600'

})

const fonts = ({
    bodytext,
    header1,
    className: `${bodytext.variable} ${header1.variable}`,

})
export default {fonts}