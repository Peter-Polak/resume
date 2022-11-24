import { Component } from "react";
import styled from "styled-components";

import { Projects as Title } from "../../data/Translations";
import { IProject, ISectionComponent } from "../../utilities/Types";
import Section from "../Section";

interface IProjectsProps extends ISectionComponent<IProject>
{
    
}

interface IProjectsState
{
    
}

class Projects extends Component<IProjectsProps, IProjectsState>
{
    // constructor(props : IProjectsProps)
    // {
    //     super(props);
    //     this.state = 
    //     {
            
    //     }
    // }
    
    render() : JSX.Element
    {
        const { data } = this.props;
        
        return (
            <Section icon="terminal" title={Title}>
                <Content>
                    
                </Content>
            </Section>
        );
    }
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export default Projects;