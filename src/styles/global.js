import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    ul, ol, li{
        list-style: none;
    }

    input, select{
        display: flex;
        padding-left:16px ;
        
        background: var(--color-grey2);
        border: 1.2182 solid var(--color-grey0); 
        align-items: center;   
        
        color: var(--color-white);
        
        min-width: 280px;
        width: 22.793606671299514vw;    
        height: 48px;

        border-radius: 4px;


    } 
    :root{
        --color-primary: #ff577f;
        --color-primary-Focus: #ff427f;
        --color-primary-Negative: #59323f;
        --color-white: #FBFEFF;

        --color-grey4: #121214;
        --color-grey3: #212529;
        --color-grey2: #343b41;
        --color-grey1: #868e96;
        --color-grey0: #f8f9fa;

        --color-sucess: #3fe864;
        --color-negative: #e83f5b
    }
    body{
        background: var(--color-grey4);
    }
    h1, h2, h3, h4, h5, h6, p, span, li{
    font-family: 'Roboto', sans-serif;
    color: var(--color-white);
}
`;
