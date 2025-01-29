import { useContext } from "react"
import { ShopContext } from "../context/ShopContent"
import { Link } from "react-router-dom"

const ProductItem = ({ id, image, name, price}) => {
    
    const { currency } = useContext(ShopContext)
    
    return (
        <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
                <img src={image[0]} alt="product image" className="hover:scale-110 object-cover transition ease-in-out h-70 w-60" />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-mediums">{currency}{price}</p>
        </Link>
    )
}

export default ProductItem