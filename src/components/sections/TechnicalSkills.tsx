import { Component } from "react";
import styled from "styled-components";
import { ExpertSkill, FamiliarSkill, FluentSkill, TechnicalSkills as Title } from "../../data/Translations";

import { ISectionComponent, ITechnicalSkill, ITechnicalSkills } from "../../utilities/Types";
import Section from "../Section";

interface ITechnicalSkillsProps extends ISectionComponent<ITechnicalSkills>
{
    
}

interface ITechnicalSkillsState
{
    
}

class TechnicalSkills extends Component<ITechnicalSkillsProps, ITechnicalSkillsState>
{
    constructor(props : ITechnicalSkillsProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }
    
    getTechnicalSkills(data : Array<ITechnicalSkills>)
    {   
        return data.map(
            (category) =>
            {
                return (
                    <Category key={category.name.Translate()}>
                        <h3>{category.name.Translate()}</h3>
                        <ul>
                         {
                            category.skills.expert !== undefined ? 
                            <li>
                                <h4>{ExpertSkill.Translate()}</h4>
                                <ul>
                                    {
                                        this.getTechnicalSkillsListItems(category.skills.expert)
                                    }
                                </ul> 
                            </li>
                            : null
                        }
                        
                        {
                            category.skills.fluent !== undefined ? 
                            this.getTechnicalSkillsListItems(category.skills.fluent)
                            // <li>
                            //     <h4>{translate(FluentSkill)}</h4>
                            //     <ul>
                            //     {
                            //         this.getTechnicalSkillsListItems(category.skills.fluent)
                            //     }
                            //     </ul> 
                            // </li>
                            : null
                        } 

                        {/*{
                            category.skills.familiar !== undefined ? 
                            <>
                                {translate(FamiliarSkill)}
                                <FamiliarSkillList>
                                    {
                                        this.getTechnicalSkillsListItems(category.skills.familiar)
                                    }
                                </FamiliarSkillList> 
                            </>
                            
                            : null
                        }*/}

                        {
                            category.skills.nocategory !== undefined ? 
                            <>
                                {
                                    this.getTechnicalSkillsListItems(category.skills.nocategory)
                                }
                            </> 
                            : null
                        }
                        </ul>
                        {/* {
                            category.skills.familiar !== undefined ? 
                            <>
                                {translate(FamiliarSkill)}
                                <FamiliarSkillsContainer>
                                    {
                                        category.skills.familiar.map(
                                            (skill) =>
                                            {
                                                return skill.name;
                                            })
                                    }
                                </FamiliarSkillsContainer> 
                            </>
                            
                            : null
                        } */}
                    </Category>
                );
            }
        );
    }
    
    getTechnicalSkillsListItems(skills : Array<ITechnicalSkill>)
    {
        return skills.map(
            (skill) =>
            {
                return (
                    <SkillItem key={skill.name}>
                        {skill.name}
                    </SkillItem>
                );
            }
        );
    }
    
    render() : JSX.Element
    {
        const { data } = this.props;
        
        return (
            <Section icon="code" title={Title}>
                <Content>
                    { this.getTechnicalSkills(data) }
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

const Lists = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const FamiliarSkillsContainer = styled.ul`
    display: inline;

    & li
    {
        float: left;
    }
`;



const Category = styled.div`
    margin-right: 10px;
`;

const SkillItem = styled.li`
    margin-bottom: 5px;
`;

export default TechnicalSkills;