import { Component } from 'react';
import styled from 'styled-components';

import { IContactInformation, IPersonalInformation } from '../utilities/Types';
import ContactInformation from './PersonalInformation';

interface IHeaderProps
{
    personalInformation : IPersonalInformation
    contactInformation : IContactInformation
}

interface IHeaderState
{
    
}

class Header extends Component<IHeaderProps, IHeaderState>
{
    constructor(props : IHeaderProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { name, surname } = this.props.personalInformation;
        const { address, phoneNumber, emailAddress, websiteUrl } = this.props.contactInformation;
        
        return (
            <Container>
                <Heading>{name} {surname}</Heading>

                <StyledContactInformation 
                address={address} 
                phoneNumber={phoneNumber} 
                emailAddress={emailAddress} 
                websiteUrl={websiteUrl}/>
            </Container>
        );
    }
}

const Container = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 20px 25px;
    
    background-color: ${props => props.theme.color.primary.normal};
`;

const Heading = styled.h1`
    flex: 6;
    margin: 0 0 5px 0;
    
    color: white;
    font-size: 50px;
    font-family: "Bebas Neue";
    letter-spacing: 10px;
    word-spacing: 10px;
`;

const StyledContactInformation = styled(ContactInformation)`
    
`;

export default Header;