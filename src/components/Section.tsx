import { Component } from "react";
import styled from "styled-components";
import { EmptySection } from "../data/Translations";
import { TranslatableText } from "../utilities/TranslatableText";
import MaterialIcon from "./MaterialIcon";


interface ISectionProps
{
    icon : string
    title : TranslatableText
}

interface ISectionState
{
    
}

class Section extends Component<ISectionProps, ISectionState>
{
    constructor(props : ISectionProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { icon, title, children } = this.props;
        
        return (
            <Container>
                <Heading>
                    <StyledIcon icon={icon} size="20px" color="white"/>
                    <Text>{title.Translate()}</Text>
                </Heading>
                
                <Content>
                    {children ? children : EmptySection.Translate()}
                </Content>
            </Container>
        );
    }
}

const Container = styled.section`
    margin-bottom: 15px;
`;

const StyledIcon = styled(MaterialIcon)`
    margin: 0 10px 0 0;
    background-color: ${props => props.theme.color.primary.normal};
    border-radius: 50px;
    padding: 7px;
`;

const Heading = styled.h2`
    display: flex;
    align-items: center;
    
    margin: 0 0 10px 0;
`;

const Text = styled.span`
    position: relative;
    flex: 1;
    
    &:after
    {
        content: "";
        
        position: absolute;
        left: 0;
        bottom: -10px;
        
        height: 2px;
        width: 100%;
        
        background: ${props => props.theme.color.primary.normal};
    }
`;

const Content = styled.div`
    margin-left: 60px;
`;
export default Section;