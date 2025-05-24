import { useState } from "react";
import { BiLike } from "react-icons/bi";



const FetchAllPets = ({pets}) => {
 
    const [imgstore,setImgstore] = useState([])

    const imgHandeler = img => {
        const newImg = [...imgstore,img]
        setImgstore(newImg)    
    }

  return (

    <>
        <div className="mx-0 sm:mx-4 md:mx-10 lg:mx-15 flex">
            <div className="w-full flex flex-col lg:flex-row">
                    {/* Left Section (Cards) */}
                    <div className="w-full lg:w-9/12 px-4">
                        <div className="container mx-auto my-10 p-4 sm:p-6 lg:p-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pets.map((item, i) => (
                            <div
                                key={i}
                                className="card w-full glass transform transition-transform duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg"
                            >
                                <figure className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="object-cover h-48 w-full transition-transform duration-500 hover:scale-110"
                                />
                                </figure>
                                <div className="mt-3 px-4 ">
                                <h2 className="card-title text-lg font-semibold">
                                    Breed: {item.breed}
                                </h2>
                                <p className="text-sm ">Birth: {item.date_of_birth}</p>
                                <p className="text-sm">Gender: {item.gender}</p>
                                <p className="text-sm pb-3 font-bold">Price: {item.price}</p>
                                <hr className="mx-auto" />
                                </div>
                                <div className="flex justify-around items-center mt-4 mb-6 px-4">
                                <div className="flex gap-1">
                                    <button className="btn" onClick={()=>imgHandeler(item.image)}>
                                    <BiLike className="text-xl" />
                                </button>
                                <button
                                    className="btn text-white"
                                    style={{ backgroundColor: "#0e7a81" }}
                                >
                                    Adopt
                                </button>
                                <button
                                    className="btn text-white"
                                    style={{ backgroundColor: "#0e7a81" }}
                                >
                                    Details
                                </button>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* Right Section (Empty Box for now) */}
                    <div className="hidden lg:block w-full lg:w-3/12 px-4 mt-8 lg:mt-10">
                       <div className="h-full  border border-red-200 p-4 rounded shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                                {imgstore.map((ite, i) => (
                                <img
                                    key={i}
                                    src={ite}
                                    alt=""
                                    className="w-full h-24 object-cover transition-transform duration-500 hover:scale-90 rounded shadow"
                                />
                                ))}
                            </div>
                            </div>

                    </div>
             </div>


        </div>
    </>
       
  )
}

export default FetchAllPets