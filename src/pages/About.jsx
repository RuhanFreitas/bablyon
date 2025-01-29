import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8">
                <Title text1={'About'} text2={'Us'} />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quod sint, voluptas fuga, natus rerum ab, enim impedit commodi vero dicta quibusdam itaque tenetur illo dignissimos sit in eum! Temporibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam exercitationem ullam facere illo saepe, deleniti tempore nulla error perferendis, maxime eaque? Illo, sequi earum? Fugit ea consequuntur illum sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae rem, deleniti quis minus, tempora officiis dolor porro iste quidem hic labore corporis optio? Ratione inventore praesentium error necessitatibus libero!</p>
                    <strong className="text-gray-800">Our Mission</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, alias voluptas animi omnis et cum asperiores explicabo delectus! Ipsa officiis, eaque ullam corporis consequatur modi cum obcaecati iure aliquid. Consequatur!</p>
                </div>
            </div>

            <div className="text-xl py-4">
                <Title text1={'Why'} text2={'Choose Us'} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <strong>Quality Assurance:</strong>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et quisquam doloremque voluptatem illum soluta enim, quo quia laudantium qui pariatur praesentium, saepe necessitatibus, architecto debitis repellat quaerat magni hic!</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <strong>Convenience</strong>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et quisquam doloremque voluptatem illum soluta enim, quo quia laudantium qui pariatur praesentium, saepe necessitatibus, architecto debitis repellat quaerat magni hic!</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <strong>Exceptional Customer Service</strong>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et quisquam doloremque voluptatem illum soluta enim, quo quia laudantium qui pariatur praesentium, saepe necessitatibus, architecto debitis repellat quaerat magni hic!</p>
                </div>
            </div>

            <NewsLetterBox />
        </div>
    )
}

export default About