import Typography from 'typography'
const typography = new Typography({
    googleFonts: [
        {
            name: 'Anton',
            styles: ['400'],
        },
        {
            name: 'Lora',
            styles: ['400', '400i'],
        },
    ],
    headerFontFamily: ['Anton', 'sans-serif'],
    bodyFontFamily: ['Lora', 'serif'],
    headerWeight: 'normal',
})
const {rhythm, scale} = typography
export {rhythm, scale, typography as default}
