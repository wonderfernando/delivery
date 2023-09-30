import {defaultTheme} from "../styles/theme/DefaultTheme"

type DefaultThemeType = typeof defaultTheme


declare module "styled-components" {
    export interface DefaultTheme extends DefaultThemeType {}
}