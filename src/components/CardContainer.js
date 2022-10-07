import ProductCard from './productCard'


export default function CardContainer({title, products, handleCart, max, displayAll}) {
   
  return (
    <div className='flex justify-center items-center flex-col max-w-full '>
         <h3>{title}</h3>
            <div className='flex justify-center items-center overflow-x-auto max-w-7xl p-[10px] gap-[20px] h-[450px]'>
                {
                    products.map((item, idx) => {

                        if (idx < max || displayAll) return <ProductCard key={idx} product={item} cb={handleCart}/>
                    })
                }
           
     
            
            </div>
        </div> 
    )};
       
      
           
      


