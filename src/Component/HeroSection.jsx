import { GiSelfLove } from "react-icons/gi";
import heroImg from '../assets/img/pet.webp'

const HeroSection = () => {
  return (
    <div>
        <section>
            <p className="text-center font-medium my-6 text-gray-600 flex justify-center items-center"> Bringing Families Together <span className="ml-3 text-red-500"><GiSelfLove /></span></p>
            <h1 className="text-4xl text-center  md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Your Path to Adoption <br /> Starts Here
            </h1>
            <p className="text-gray-600 text-center px-4  max-w-xl mx-auto mb-8">
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a.
            </p>
            <div className="flex justify-center mt-6">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2 rounded-md shadow">
                    View More
                </button>
            </div>
            <div className="flex justify-center items-center  mt-9">
                <img src={heroImg} alt="" />
            </div>
            <div>
                <h1 className="text-4xl text-center my-9 font-bold">
                    Adopt Your <span className="ml-2">Best Friend</span>
                </h1>
                <p className="text-gray-600 text-center px-4  max-w-xl mx-auto mb-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a.
                </p>
            </div>
        </section>
    </div>
  )
}

export default HeroSection