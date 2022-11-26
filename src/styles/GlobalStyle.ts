import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @media print
    {    
        body
        {
            height: calc(29.7cm * 2 - 1px);
        }

        .no-print, .no-print *
        {
            display: none !important;
        }
        
        a
        {
            text-decoration: none;
        }
    }

    @page
    {
        size: 21cm 29.7cm;
        /* size: A4; */
        background-color: ${props => props.theme.color.background};
        margin: 0;
        padding: 2mm;  
    }

    body
    {
        display: block;
        margin: 0;
        padding: 0;
        
        color: ${props => props.theme.color.text};
        font-size: 10.5px;
        font-family: Roboto Mono, Arial, Helvetica, sans-serif;
        word-spacing: -1px;
        
        background-color: ${props => props.theme.color.background};
    }
    
    ul
    {
        padding: 0 10px;
    }
    
    button
    {
        padding: 0;
        margin: 0;
        
        text-decoration: none;
    
        border: none;
        outline: none;
        
        background-color: transparent;
        
        cursor: pointer;
        user-select: none;
    }

    p
    {
        margin: 0 0 10px 0;
    }
    
    a
    {
        color: ${props => props.theme.color.primary.light};
    }
    
    /* width */
    ::-webkit-scrollbar
    {
        /* height: 7px; */
        width: 10px;
        /* margin: 10px; */
    }
    
    /* Track */
    ::-webkit-scrollbar-track
    {
        background: #161616;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb
    {
        background: ${props => props.theme.color.primary.normal};
        border: 1px solid #161616;
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover
    {
        background: ${props => props.theme.color.primary.dark};
    }
    
    #react-logo
    {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        margin-right: 2.5px;
    }

    #footer
    {
        /* position: absolute; */
        display: flex;
        flex-direction: column;

        margin: 50px 0;

        text-align: center;
        font-size: smaller;
        font-weight: bold;
    }

    #loading-overlay
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: fixed;
        width: 100vw;
        height: 100vh;

        font-size: xx-large;
        color: ${props => props.theme.color.primary.light};
        
        background-color: ${props => props.theme.color.background};
        z-index: 9999;
    }
`;
 
export default GlobalStyle;