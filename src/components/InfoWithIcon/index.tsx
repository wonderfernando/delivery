import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps{
    icon: React.ReactNode,
    iconBg: string,
    text: string| React.ReactNode
}
export default function InfoWithIcon({icon, iconBg, text} : InfoWithIconProps) {

 return <InfoWithIconContainer>
        <IconContainer $iconBg={iconBg}>{icon}</IconContainer>
        {typeof text==="string"? <p>{text}</p>: text}
    </InfoWithIconContainer>
}