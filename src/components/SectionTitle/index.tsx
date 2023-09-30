import { ReactNode } from "react";
import { SectionTitleContainer } from "./styles";
import { RegularText } from "../Typograph";

interface SectionTitleProps{
    icon: ReactNode,
    title: string,
    subtitle: string
}
export default function  SectionTitle({title, subtitle,icon}: SectionTitleProps) {
    return (
        <SectionTitleContainer>
            {icon}
            <div>
                <RegularText  $color="subtitle">{title}</RegularText>
                <RegularText $size="s" $color="subtitle">{subtitle}</RegularText>
            </div>
        </SectionTitleContainer>
    )
}