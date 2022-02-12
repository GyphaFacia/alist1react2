export const darkTheme = {
    themeName: 'Dark theme',
    colorBody: '#3a3a3a',
    colorText: '#ccc',
    colorTextPlus: '#eee',
    colorBright: '#af0',
    
    colorStars: '#fa0',

    shadowColorPanel: '#0005',
    shadowColorA: '#0005',
    shadowColorB: '#fff2',
}

export function setTheme(newTheme){
    const docStyle = document.documentElement.style
    for (let varName in newTheme){
        docStyle.setProperty(`--${varName}`, newTheme[varName])
    }
}

let defaultTheme = darkTheme
setTheme(darkTheme)

export const Motions = {
    glowIn:{
        color: 'var(--colorBright)',
        borderColor: 'var(--colorBright)',
        scale: 1.1,
    },
    glowOut:{
        color: 'var(--colorText)',
        borderColor: '#0000',
        scale: 1,
    },
    
    glowInText:{
        color: 'var(--colorBright)',
        borderColor: 'var(--colorBright)',
    },
    glowOutText:{
        color: 'var(--colorText)',
        borderColor: '#0000',
    },
}


































