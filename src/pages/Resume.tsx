import { Component } from "react";

import Header from "../components/Header";
import Education from "../components/sections/Education";
import LanguageSkills from "../components/sections/LanguageSkills";
import WorkExperience from "../components/sections/WorkExperience";
import TechnicalSkills from "../components/sections/TechnicalSkills";
import styled from "styled-components";
import PrintButton from "../components/PrintButton";
import LanguageSelect from "../components/LanguageSelect";
import Projects from "../components/sections/Projects";
import { IPerson } from "../utilities/Types";
import { SupportedLanguage } from "../utilities/Types";
import { TranslatableText } from "../utilities/TranslatableText";

interface IResumeProps
{
    person : IPerson
    language : SupportedLanguage
}

interface IResumeState
{
    
}

class Resume extends Component<IResumeProps, IResumeState>
{
    constructor(props : IResumeProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { person , language } = this.props;
        TranslatableText.currentLanguage = language;
        
        return (
            <div>
                <Header personalInformation={person.personalInformation} contactInformation={person.contactInformation}/>
                <Content>
                    <Main>
                        <Education data={person.education}/>
                        <LanguageSkills data={person.languageSkills}/>
                        <WorkExperience data={person.workExperience}/>
                        <Projects data={person.projects}/>
                    </Main>
                    <Sidebar>
                        <TechnicalSkills data={person.technicalSkills}/>
                    </Sidebar>
                                
                </Content>
                
                <LanguageSelect/>
                <PrintButton fileName={`${person.personalInformation.surname}-${person.personalInformation.name}_Resume_${language}`}/>
                
            </div>
        );
    }
}

const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 20px;

    @media only screen and (max-width: 768px)
    {
        flex-direction: column;
    }
`;

const Main = styled.main`
    margin-right: 15px;
    width: 70%;

    @media only screen and (max-width: 768px)
    {
        width: auto;
    }
`;

const Sidebar = styled.div`
    width: auto;
`;

export default Resume;