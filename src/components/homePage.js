import { useContext, useState } from 'react'
// import {BsCart} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
// import ProductCard from './productCard';
// import {data} from '../eshopData.js'
// import Tab from './Tab';
// import MyMap from './MyMap';
import 'leaflet/dist/leaflet.css'
import CardContainer from './CardContainer';
import  {EshopContext}  from './pages/Context';



export default function HomePage (){
    const {globalState} = useContext(EshopContext)
    // let [counter, setCounter] = useState([])
    // let [dataSet, setData] = useState(data)
    let [searchText, setSearchText] = useState('')
   function hendleOnClick () {
        console.log('button was clicked')
    }

    // function hendleCartCounter(item){
    // const copyCounter = [...counter]
    //    copyCounter.push(item)
    //    setCounter(copyCounter)   
    // }

    //  const totalItems = () => {
    //     const sumItems = 
    //      dataSet.value(counter).reduce((total,value) => total + value, 0)
    //      setCounter(sumItems)
    //  }
     const handleOnChange = e => setSearchText(e.target.value)

     const filterSearch = item => {
        const lowercased = item.name.toLowerCase()
        const searchLower = searchText.toLowerCase()
            return lowercased.inculdes(searchLower)
        
     }
   
    return(

        <>
       
        <div className='bg-orange-600 flex justify-center items-center flex-row gap-3 text-lg h-16'>
            <input type='text' placeholder='search' value={searchText} onChange={handleOnChange}></input>
                <button onClick={hendleOnClick}>
                    <BsSearch/>
                </button>
             
        </div>
        {
            searchText.length > 0 ? null :
            <>
            <CardContainer 
                title="Best Sellers" 
                max={3} 
                products={globalState.products.filter(item => item).sort((a,b)=> b.sold - a.sold)} 
                // totalItems={totalItems}
                />
            <CardContainer 
                title="Most Popular" 
                max={3} 
                products={globalState.products.filter(item => item).sort((a,b)=> b.rating - a.rating)} 
                // hendleCartCounter={hendleCartCounter} 
                // totalItems={totalItems}
                />
            </>
        }
        
         {/* <CardContainer 
            title="All Products" 
            max={globalState.products.name.length} 
            displayAll = {true}
            counter={searchText.length > 0 ? globalState.filter(filterSearch):globalState} 
            // hendleCartCounter={hendleCartCounter} 
            /> */}



        {/* <ProductCard counter={counter} hendleCartCounter={hendleCartCounter} totalItems={totalItems}/> 
        <Tab/>
        <MyMap/>
         */}
        
        </>
    );
}
