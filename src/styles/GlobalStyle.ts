import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp);
    @import url(https://fonts.googleapis.com/css?family=Bebas+Neue|Roboto);

    @media print
    {    
        .no-print, .no-print *
        {
            display: none !important;
        }
    }
    
    @page
    {
        size: 21cm 29.7cm;
    }

    body
    {
        display: block;
        margin: 0;
        padding: 0;
        
        color: ${props => props.theme.color.text};
        font-size: 12px;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        
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
`;
 
export default GlobalStyle;