export const darkTheme = {
    themeName: 'Dark theme',
    colorBody: '#3a3a3a',
    colorText: '#ccc',
    colorTextPlus: '#eee',
    colorBright: '#0af',
    colorTransparent: '#000a',
    
    pictureFilter: 'sepia(1) invert(1) saturate(1.5) brightness(1.25)',
    
    colorStars: '#fa0',

    shadowColorPanel: '#0005',
    shadowColorA: '#0005',
    shadowColorB: '#fff2',
}

export const lightTheme = {
    themeName: 'Light theme',
    colorBody: '#eee',
    colorText: '#333',
    colorTextPlus: '#111',
    colorBright: '#0af',
    colorTransparent: '#fffa',
    
    pictureFilter: 'sepia(1) hue-rotate(180deg)',
    
    colorStars: '#fa0',

    shadowColorPanel: '#0002',
    shadowColorA: '#0002',
    shadowColorB: '#fff',
}

export function setTheme(newTheme){
    const docStyle = document.documentElement.style
    for (let varName in newTheme){
        docStyle.setProperty(`--${varName}`, newTheme[varName])
    }
}

let defaultTheme = darkTheme
defaultTheme = lightTheme
setTheme(defaultTheme)

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


































