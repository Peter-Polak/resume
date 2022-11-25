import { Component } from "react";
import styled from "styled-components";

import { LanguageProficiencies, LanguageSkills as Title } from "../../data/Translations";
import { ILanguage, ISectionComponent } from "../../utilities/Types";
import Section from "../Section";

interface ILanguageSkillsProps extends ISectionComponent<ILanguage>
{
    
}

interface ILanguageSkillsState
{
    
}

class LanguageSkills extends Component<ILanguageSkillsProps, ILanguageSkillsState>
{
    constructor(props : ILanguageSkillsProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }
    
    getLanguageListItems()
    {
        const { data } = this.props;
        
        return data.map(
            (language) =>
            {
                return (
                    <ListItem key={language.name.Translate()}>
                        <Language>
                            <LanguageName>{language.name.Translate()}</LanguageName>
                            <LanguageDetails>
                                <LanguageProficiencyText>{LanguageProficiencies[language.proficiency].Translate()}</LanguageProficiencyText> ({language.proficiency})
                            </LanguageDetails>
                        </Language>
                    </ListItem>
                );
            }
        );
    }

    render() : JSX.Element
    {
        return (
            <Section icon="translate" title={Title}>
                <ul>
                    {this.getLanguageListItems()}
                </ul>
            </Section>
        );
    }
}

const ListItem = styled.li`
    margin-bottom: 10px;
`;

const Language = styled.div`
    display: flex;
`;
    
const LanguageName = styled.span`
    width: 125px;
`;

const LanguageDetails = styled.div`
    
`;

const LanguageProficiencyText = styled.span`
    font-style: italic;
`;

export default LanguageSkills;