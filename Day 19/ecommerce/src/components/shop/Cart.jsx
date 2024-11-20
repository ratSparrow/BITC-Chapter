export default function Cart({ cart }) {

    let total = 0

    if (cart.length > 0) {
        for (let product of cart) {
            console.log(product.price)
            total += product?.price
           
        }
    }

    return (
        <div className="drawer">
            <input id="cart" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side">
                <label htmlFor="cart" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {
                        cart?.map(product => <div className="grid grid-cols-3 gap-4 py-2" key={product.id}>
                            <li className=" ">{product.name}</li>
                            <li >{product.price}$</li>
                         
                        </div>)
                    }

                    
                        <div className="grid grid-cols-2 gap-4">
                            <li>Total </li>
                            <li>{total} </li>
                        </div>
                    
                </ul>

            </div>

        </div>
    )
}
