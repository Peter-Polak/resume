import { Component } from "react";
import styled from "styled-components";

import MaterialIcon from "./MaterialIcon";

interface IPrintButtonProps
{
    fileName : string
}

interface IPrintButtonState
{
    
}

class PrintButton extends Component<IPrintButtonProps, IPrintButtonState>
{
    constructor(props : IPrintButtonProps)
    {
        super(props);
        this.state = 
        {
            
        }
        
        this.print = this.print.bind(this);
    }
    
    print()
    {
        const { fileName } = this.props;
        
        const originalTitle = document.title;
        const newTitle = fileName;
        
        document.title = newTitle;
        window.print();
        document.title = originalTitle;
    }

    render() : JSX.Element
    {
        return (
            <Bubble className="no-print" onClick={this.print}>
                <MaterialIcon icon="download" color="white" size="20px"/>
            </Bubble>
        );
    }
}

const Bubble = styled.button`
    position: fixed;
    right: 0;
    bottom: 0;
    
    margin: 10px;
    padding: 10px;
    
    border-radius: 50%;
    
    background-color: ${props => props.theme.color.primary.normal};
    cursor: pointer;
`;

export default PrintButton;