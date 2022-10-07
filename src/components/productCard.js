import { useContext } from "react"
import { EshopContext } from "./pages/Context"


export default function ProductCard (props) {
    const {name, image, price , rating} = props.product
    const {dispatchState} = useContext(EshopContext)
    const handleAddToCart = () => {
        dispatchState({
            type: 'addToCart',
            payload: props.product
        })
    }
    return(
 
        <div className="productCard">
            {name}
            <img className='phoneImg' src={image} alt=""/>
            <p>Price: {price} </p>
            <p>Rating: {rating} </p> 
            <p><button 
            className='bg-orange-600'
            onClick={handleAddToCart}>Add To Cart </button>  </p>
        </div>
     
  )
}


