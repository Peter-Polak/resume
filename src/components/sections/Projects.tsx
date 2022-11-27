import { Component } from "react";
import styled from "styled-components";

import { Languages, Projects as Title, ProjectsAll, Link, Technologies, Programs, Description, For } from "../../data/Translations";
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
    
    getProject(project : IProject) : JSX.Element
    {
        return (
            <div key={project.name}>
                {project.pagebreak ? <PageBreak/> : null}
                <ProjectContainer>
                    <Name>{project.name}</Name>
                    <P><Label>{Link.Translate()}:</Label> <StyledLink href={project.link} target="_blank">{project.link}</StyledLink></P>
                    <P><Label>{For.Translate()}:</Label>{project.for}</P>
                    <P><Label>{Languages.Translate()}:</Label>{project.languages.join(", ")}</P>
                    <P><Label>{Technologies.Translate()}:</Label>{project.technologies.join(", ")}</P>
                    <P><Label>{Programs.Translate()}:</Label>{project.programs.join(", ")}</P>
                    <P><Label>{Description.Translate()}:</Label>{project.description.Translate()}</P>
                </ProjectContainer>
            </div>
        );
    }

    getProjects(projects : Array<IProject>): Array<JSX.Element>
    {
        return projects.map(
            (project) => this.getProject(project)
        );
    }

    render() : JSX.Element
    {
        const { data } = this.props;
        
        return (
            <Section icon="terminal" title={Title}>
                <ProjectsContent>
                    { this.getProjects(data) }
                </ProjectsContent>
                <Footer href="https://github.com/Peter-Polak?tab=repositories" target="_blank">{ProjectsAll.Translate()}</Footer>
            </Section>
        );
    }
}

const ProjectsContent = styled.div`
`;

const ProjectContainer = styled.div`
    padding: 15px 25px;
    margin: 20px 0px;
    border: 2px solid ${p => p.theme.color.primary.normal};
    border-radius: 10px;
    
    /* page-break-inside: avoid; */

    /* &:nth-of-type(2n)
    {
        border-style: dashed;
    } */
`;

const PageBreak = styled.div`
     @media print 
     {
        height: 40px;
        page-break-before: always;
     }
`;

const P = styled.p`
    margin: 0 0 5px 0;
`;

const Label = styled.span`
    font-weight: bold;
    margin-right: 5px;
    color: ${ p => p.theme.color.primary.light };
`;

const Name = styled.p`
    margin: 0 0 10px 0;
    font-size: medium;
    font-weight: bold;
    color: ${ p => p.theme.color.primary.light };
`;

const StyledLink = styled.a`
    color: ${ p => p.theme.color.text };
`;

const Footer = styled.a`
    display:block;
    text-align: center;
    font-size: smaller;
    font-style: italic;
    width: 100%;
    color: ${ p => p.theme.color.text };
`;

export default Projects;