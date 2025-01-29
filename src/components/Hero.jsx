import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-zinc-200 rounded-sm">
            {/* Hero Left Side */}

            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-zinc-950">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
                    </div>
                    <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}

            <img src={assets.hero_img} alt="" className='w-full max-h-[520px] object-cover sm:w-1/2' />

            {/* Eu parei aqui - vídeo: 1h02 */}
        </div>
    )
}

export default Hero