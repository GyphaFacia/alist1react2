export const darkTheme = {
    themeName: 'Dark theme',
    colorBody: '#333',
    colorMain: '#444',
    colorText: '#ccc',
    colorTextPlus: '#eee',
    colorBright: '#fa5',

    shadowColorPanel: '#0005',
    shadowColorA: '#000a',
    shadowColorB: '#fff3',
}

export function setTheme(newTheme){
    const docStyle = document.documentElement.style
    for (let varName in newTheme){
        docStyle.setProperty(`--${varName}`, newTheme[varName])
    }
}

let defaultTheme = darkTheme
setTheme(darkTheme)




































