import Typography from 'typography'
const typography = new Typography({
    googleFonts: [
        {
            name: 'Anton',
            styles: ['400'],
        },
        {
            name: 'Lora',
            styles: ['400', '400i', '700', '700i'],
        },
    ],
    baseFontSize: '18px',
})
const {rhythm, scale} = typography
export {rhythm, scale, typography as default}
