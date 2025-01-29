import { useLocation } from "react-router-dom"
import { assets } from "../assets/assets"
import { ShopContext } from "../context/ShopContent"
import { useContext, useEffect, useState } from "react"

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

    return showSearch && visible ? (
        <div className="border-t border-b text-center">
            <div className="inline-flex items-center justify-center border border-zinc-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none text-sm" type="text" placeholder="Search" />
                <img src={assets.search_icon} alt="" className="w-4" />
            </div>
            <img onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="" className="inline w-3 cursor-pointer" />
        </div>
    ) : null
}

export default SearchBar