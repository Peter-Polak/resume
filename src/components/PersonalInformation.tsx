import { Component } from "react";
import styled from "styled-components";

import { IContactInformation } from "../utilities/Types";
import MaterialIcon, { MaterialIconsType } from "./MaterialIcon";

interface IContactInformationProps extends IContactInformation
{
    className? : string
}

interface IContactInformationState
{
    
}

class ContactInformation extends Component<IContactInformationProps, IContactInformationState>
{  
    constructor(props : IContactInformationProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }
    
    getIconComponent(icon : string)
    {
        return <MaterialIcon icon={icon} color="white" size="25px" type={MaterialIconsType.OUTLINED}/>;
    }
    
    render() : JSX.Element
    {
        const { className, address, phoneNumber, emailAddress, websiteUrl, birthday } = this.props;
        
        return (
            <Container className={className}>
                <WrapGroup>
                    <Info>{this.getIconComponent("home")}{address.Translate()}</Info>
                    <Info>{this.getIconComponent("phone")}{phoneNumber}</Info>
                </WrapGroup>
                <WrapGroup>
                    <Info>{this.getIconComponent("alternate_email")}<Link href={`mailto:${emailAddress}`}>{emailAddress}</Link></Info>
                    <Info>{this.getIconComponent("public")}<Link href={websiteUrl} target="_blank">{websiteUrl}</Link></Info>
                </WrapGroup>
                { birthday ? <Info>{this.getIconComponent("cake")}{birthday}</Info> : null }
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`;

const WrapGroup = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`;

const Info = styled.div`
    display: flex;
    align-items: center;

    color: white;
`;

const Link = styled.a`
    color: white;
`;

export default ContactInformation;