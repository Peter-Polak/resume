import { Component } from "react";
import styled from 'styled-components';

export enum MaterialIconsType
{
    REGULAR = "material-icons",
    OUTLINED = "material-icons-outlined",
    TWO_TONE = "material-icons-two-tone",
    ROUND = "material-icons-round",
    SHARP = "material-icons-sharp",
}

interface IMaterialIconProps
{
    icon : string,
    color? : "foreground" | "theme" | "background" | string,
    size? : string,
    type? : MaterialIconsType
    className? : string
}

class MaterialIcon extends Component<IMaterialIconProps>
{
    render() : JSX.Element
    {
        const { icon, color, size, type, className } = this.props;
        
        return (
            <Icon color={color} size={size} className={`${type ? type : MaterialIconsType.REGULAR} ${className}`}>{icon}</Icon>
        );
    }
}

const Icon = styled.span<{color : "foreground" | "theme" | "background" | string | undefined, size : string | undefined}>`
    user-select: none;
    margin: 5px;
    
    font-size: ${props =>
    {
        if(props.size === undefined)
        {
            return "1.3em";
        }
        else
        {
            return props.size;
        }
    }};
    
    color: ${props => 
        {
            switch(props.color)
            {
                case "foreground":
                    return props.theme.color.text;
                    
                case "background":
                    return props.theme.color.background;

                case "theme":
                    return props.theme.color.primary.normal;
                default:
                    return props.color;
            }
        }
    };
`;

export default MaterialIcon;