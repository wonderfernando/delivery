 
import {BrowserRouter} from "react-router-dom"
import Router from "./Router"
import {defaultTheme} from "./styles/theme/DefaultTheme"
import {ThemeProvider} from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyles"
import {  CartContextProvider } from "./hooks/Context/CartContext"
function App() {
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
          <CartContextProvider>
            <Router/>
          </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
  }
export default App
