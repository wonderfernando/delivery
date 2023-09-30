import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import CompleteOrder from "./pages/CompleteOrder"
import OrderConfirmed from "./pages/OrderConfirmed"
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/order" element={<CompleteOrder/>}/>
                <Route path="/order-confirmed" element={<OrderConfirmed/>}/>
            </Route>
        </Routes>
    )
}