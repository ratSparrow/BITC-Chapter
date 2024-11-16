import { useEffect } from "react"
import { useState } from "react"

export default function Products() {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetch("./products.JSON").then(data=>data.json())
    .then(data=>setProducts(data))
  },[])

  console.log("products", products)

  return (
    <div>
      <h1 className="text-3xl text-center text-red-5000">Our Products</h1>

      <div className="grid grid-cols-3 gap-4">
        {
          products.map(product=><div key={product.id} className="card bg-base-100 my-4 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"> {product.name} </h2>
                <h2 className="card-subtitle">Brand {product.brand} </h2>
                <h2 className="card-subtitle">Category {product.category} </h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>)
        }
      </div>
    </div>
  )
}
