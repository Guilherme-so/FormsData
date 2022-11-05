import { createGlobalStyle, DefaultTheme } from 'styled-components'


export const theme:DefaultTheme = {
    fontColor: '#686868',
    color : {
        primary: '#502E88',
        second: '#F6F6F6',
        tertiary: '#5C197C',
    },
}


export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Epilogue', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        align-items: center;
        text-decoration: none;
        overflow-x: hidden;
        overflow: visible;
          z-index: 1;
    }
    
`

