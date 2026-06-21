import localFont from 'next/font/local'

export const InriaSans = localFont({ 
    src: [
        {
            path: './InriaSans-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
    ],
    variable: '--inria-sans', display: 'swap'
 })

 export const InriaSerif = localFont({ 
    src: [
        {
            path: './InriaSerif-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
    ],
    variable: '--inria-serif', display: 'swap'
 })

 export const Bilderberg = localFont({ 
    src: [
        {
            path: './Bilderberg OTF.otf',
            weight: '400',
            style: 'normal'
        },
    ],
    variable: '--bilderberg', display: 'swap'
 })