import {Outlet} from "react-router-dom"
import { LayoutContainer } from "./styles"
import Header from "../Header"
export default function Layout() {
    return (
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
        
    )
}