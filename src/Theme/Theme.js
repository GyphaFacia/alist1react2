export const darkTheme = {
    themeName: 'Dark theme',
    colorBody: '#333',
    colorText: '#aaa',
    colorTextPlus: '#eee',
    colorBright: '#fa5',
}

export function setTheme(newTheme){
    const docStyle = document.documentElement.style
    for (let varName in newTheme){
        docStyle.setProperty(`--${varName}`, newTheme[varName])
    }
}

let defaultTheme = darkTheme
setTheme(darkTheme)




































