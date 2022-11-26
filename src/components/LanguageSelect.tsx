import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Language } from "../data/Translations";
import { TranslatableText } from "../utilities/TranslatableText";
import { SupportedLanguage } from "../utilities/Types";

import MaterialIcon from "./MaterialIcon";

interface ILanguageSelectProps extends RouteComponentProps<{}>
{
    
}

interface ILanguageSelectState
{
    
}

class LanguageSelect extends Component<ILanguageSelectProps, ILanguageSelectState>
{
    constructor(props : ILanguageSelectProps)
    {
        super(props);
        this.state = 
        {
            
        }
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(event : any)
    {
        const newValue = event.target.value;
        this.props.history.push(`/${newValue}`);
    }
    
    getOptions()
    {
        let options : Array<JSX.Element> = [];
        
        for(const language in SupportedLanguage)
        {
            const option = <option value={language} key={language}>{language}</option>;
            options.push(option);
        }
        
        return options;
    }
    
    render() : JSX.Element
    {
        
        
        return (
            <Container className="no-print">
                <MaterialIcon icon="g_translate" color="white"/>
                <Label htmlFor="language">{Language.Translate()}</Label>
                <select name="language" onChange={this.onChange} value={TranslatableText.currentLanguage.toString()}>
                    { this.getOptions() }
                </select>
            </Container>
        );
    }
}

const Container = styled.div`
    position: fixed;
    left: 50%;
    bottom: 0;
    
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px 25px;
    
    color: ${props => props.theme.color.background};
    
    border-radius: 5px;
    background-color: ${props => props.theme.color.primary.normal};
    
    transform: translateX(-50%); 
`;

const Label = styled.label`
    margin-right: 5px;
    color: white;
`;

export default withRouter(LanguageSelect);