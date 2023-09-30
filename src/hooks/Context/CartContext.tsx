import { ReactNode, createContext, useState,useEffect } from "react";
import { ICoffeeProps } from "../../components/CoffeCard";

export interface ICartItem extends ICoffeeProps{
    quantity: number
}
interface ICartContext{
    cartItems: ICartItem[],
    addCoffeeToCart: (coffee: ICartItem) => void,
    quantityItemsCart: number,
    changeCartItemQuantity: ( id: number , type: "decrease" | "add",) => void,
    removeCartItem: (id: number) => void,
    totalValue: number,
    cleanCart: ()=>void

}

export const CartContext  = createContext({} as ICartContext)


export function CartContextProvider({children} : {children: ReactNode}) {
    const KEY = "delivery:cartitems"
   
    const [cartItems, setItems] = useState<ICartItem[]>(()=>{
        const itemLocalStorage = window.localStorage.getItem(KEY)
        if (itemLocalStorage) {
           return JSON.parse(itemLocalStorage) 
        }
        return []
    })
    const quantityItemsCart = cartItems.length;
    const totalValue = cartItems.reduce((acc, item)=>{
            return acc + item.price * item.quantity
    },0)
     function addCoffeeToCart(coffee:ICartItem) {
        const coffeeAlreadExists = cartItems.findIndex(cart => cart.id === coffee.id)
        const newItemsCart = [...cartItems];

        if (coffeeAlreadExists>=0) {
          newItemsCart[coffeeAlreadExists].quantity += coffee.quantity;
        }else{
          newItemsCart.push(coffee)
        }
        setItems(newItemsCart)      
   }
   function removeCartItem(id: number) {
        const newCartItem = cartItems.filter(cartItem => cartItem.id != id)
        setItems(newCartItem)
   }
function cleanCart() {
    setItems([])
}
   function changeCartItemQuantity(id:number, type: "add" | "decrease") {
        if (type=== "add") {
            
            const coffee = cartItems.find(cartItem => cartItem.id === id)
            console.log(coffee)
            const coffeeIndex = cartItems.findIndex(cart => cart.id === coffee?.id)
            const newItemsCart = [...cartItems];
            newItemsCart[coffeeIndex].quantity += 1;
            
            setItems(newItemsCart)        
        }else{
            
            const coffee = cartItems.find(cartItem => cartItem.id === id)
            const coffeeIndex = cartItems.findIndex(cart => cart.id === coffee?.id)
            const newItemsCart = [...cartItems];
            newItemsCart[coffeeIndex].quantity -= 1;
            setItems(newItemsCart)
        }
   }

   useEffect(() => {
        window.localStorage.setItem(KEY, JSON.stringify(cartItems))
   },[cartItems])
    return (
        <CartContext.Provider value={{cleanCart,totalValue, removeCartItem,changeCartItemQuantity,cartItems,addCoffeeToCart,quantityItemsCart}}>
            {children}
        </CartContext.Provider>
    )
}

 