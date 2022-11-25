import React, { Component } from "react";
import styled from "styled-components";

import Section from "../Section";
import { Education as Title } from "../../data/Translations";
import { ISchool, ISectionComponent } from "../../utilities/Types";


interface IEducationProps extends ISectionComponent<ISchool>
{
    
}

interface IEducationState
{
    
}

class Education extends Component<IEducationProps, IEducationState>
{
    constructor(props : IEducationProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }
    
    getEducationListItems()
    {
        const { data } = this.props;
        
        return data.map(
            (school) =>
            {
                return (
                    <ListItem key={school.name.Translate()}>
                        <School>
                            <SchoolYears>{school.attendanceYears.start} - {school.attendanceYears.end}</SchoolYears>
                            <SchoolDetails>
                                <SchoolName>{school.name.Translate()}</SchoolName>
                                <SchoolFaculty>{school.faculty?.Translate()}</SchoolFaculty>
                                <SchoolStudy>{school.study?.Translate()}</SchoolStudy>
                                <SchoolProgram>{school.program?.Translate()}</SchoolProgram>
                            </SchoolDetails>
                        </School>
                    </ListItem>
                );
            }
        );
    }

    render() : JSX.Element
    {
        return (
            <Section icon="school" title={Title}>
                <ul>
                    {this.getEducationListItems()}
                </ul>
            </Section>
        );
    }
}

const ListItem = styled.li`
    margin-bottom: 15px;
`;

const School = styled.div`
    display: flex;
`;
    
const SchoolYears = styled.span`
    width: 100px;
`;

const SchoolDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const SchoolName = styled.span`
    font-weight: 700;
    color: ${ p => p.theme.color.primary.light };
`;

const SchoolFaculty = styled.span`
    font-style: italic;
`;

const SchoolStudy = styled.span`
    font-style: italic;
`;

const SchoolProgram = styled.span`
    font: "Roboto Thin";
`;

export default Education;