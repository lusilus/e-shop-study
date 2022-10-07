import { useReducer } from 'react'
import { createContext } from 'react'
import { data } from '../eshopData'

export const EshopContext = createContext()

export default function Context({children}){

    const reducer = (state ,action) => {

        switch (action.type) {
            case 'addProduct':
                return {...state, products: [...state.products, action.payload]}
            case 'editProduct':
                const editProduct = [...state.product]
                editProduct[action.payload.idx] = {...action.payload.product}           
                     return  {...state, products: [...editProduct]}
            case 'deleteProduct':
                const oldProducts = [...state.products]
                oldProducts.splice(action.payload, 1)
                return  {...state, products: [...oldProducts]}
            case 'addToCart':
                return {...state, cart: [...state.cart, action.payload]}
            case 'deleteFromCart':
                const oldCartProducts = [...state.cart]
                oldCartProducts.splice(action.payload, 1)

                return {...state, cart: oldCartProducts}
            default:
                return
        }
    }

     const [globalState, dispatchState] = useReducer(reducer , {
        products: data,
        user: {
            name:"",
            email: ""
        },
        cart: []
     })

     console.log('global state is', globalState)
     return <EshopContext.Provider value={{globalState, dispatchState}}>
        {children}
     </EshopContext.Provider>
}