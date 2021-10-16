import { createGlobalStyle } from 'styled-components'

//global styles
export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #fff;
        --blue-dark: #020316;
        --blue-light: #3C408E;
        --green: #33CC95;
        --red: #E52E4D;
        --shape: #f5f5f5;
        --text-title: #d7d7d7;
        --text-body: #AAAAAA;
        --link-color: #666CDE
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html {
        /* font-size = 16px */

        @media(max-width: 1080px){
            font-size: 93.75%; /* font-size = 15px */
        }
        @media(max-width: 720px){
            font-size: 87.5%; /* font-size = 14px */
        }
        @media(max-width: 480px){
            font-size: 81.25%; /* font-size = 13px */
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

`