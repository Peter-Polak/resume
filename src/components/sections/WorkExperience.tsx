import { Component } from "react";

import { ISectionComponent, IWorkExperience } from "../../utilities/Types";
import { WorkExperience as Title } from "../../data/Translations";
import Section from "../Section";

interface IWorkExperienceProps extends ISectionComponent<IWorkExperience>
{
    
}

interface IWorkExperienceState
{
    
}

class WorkExperience extends Component<IWorkExperienceProps, IWorkExperienceState>
{
    constructor(props : IWorkExperienceProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
            <Section icon="work" title={Title}>
                
            </Section>
        );
    }
}

export default WorkExperience;