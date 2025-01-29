import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContent"
const PlaceOrder = () => {

    const [method, setMethod] = useState('')

    const { navigate } = useContext(ShopContext)

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 pt-5 sm:pt-14 min-h-[80vh]">
            {/* left side */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                   <Title text1={'Delivery'} text2={'Information'} />
                </div>
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="First name" type="text" />
                    <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="Lastname" type="text" />
                </div>
                <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="Email address" type="email" />
                <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="Street" type="text" />
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="City" type="text" />
                    <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="State" type="text" />
                </div>
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="Zipcode" type="number" />
                    <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="Country" type="text" />
                </div>
                <input className="border border-gray-300 rounded py-1.5  px-3.5 w-full" placeholder="Phone" type="number" />
            </div>

            {/* right side */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title text1={'Payment'} text2={'Method'} />
                    {/* payment method selection */}
                    <div className="flex gap-3 flex-col lg:flex-row">
                        <div onClick={() => setMethod('paypal')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-zinc-900' : ''}`}></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">PayPal</p>
                        </div>
                        <div onClick={() => setMethod('credit')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'credit' ? 'bg-zinc-900' : ''}`}></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">Credit Card</p>
                        </div>
                        <div onClick={() => setMethod('debit')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'debit' ? 'bg-zinc-900' : ''}`}></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">Debit Card</p>
                        </div>
                    </div>
                    
                    <div className="w-full text-end mt-8">
                        <button onClick={() => navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm cursor-pointer">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder