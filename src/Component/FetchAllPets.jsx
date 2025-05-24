import { useState, } from "react";
import { BiLike } from "react-icons/bi";

const FetchAllPets = ({ pets }) => {
  const [imgstore, setImgstore] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const imgHandeler = (img) => {
    const newImg = [...imgstore, img];
    setImgstore(newImg);
  };

  const handleAdopt = () => {
    setShowPopup(true);
    setCountdown(3);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setShowPopup(false);
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <>
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-700">Adopting in...</h2>
            <p className="text-4xl text-red-500 mt-4">{countdown}</p>
          </div>
        </div>
      )}

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
                    <div className="mt-3 px-4">
                      <h2 className="card-title text-lg font-semibold">
                        Breed: {item.breed}
                      </h2>
                      <p className="text-sm">Birth: {item.date_of_birth}</p>
                      <p className="text-sm">Gender: {item.gender}</p>
                      <p className="text-sm pb-3 font-bold">
                        Price: {item.price}
                      </p>
                      <hr className="mx-auto" />
                    </div>
                    <div className="flex justify-around items-center mt-4 mb-6 px-4">
                      <div className="flex gap-1">
                        <button
                          className="btn"
                          onClick={() => imgHandeler(item.image)}
                        >
                          <BiLike className="text-xl" />
                        </button>
                        <button
                          className="btn text-white"
                          onClick={handleAdopt}
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

          {/* Right Sidebar */}
          <div className="hidden lg:block w-full lg:w-3/12 px-4 mt-8 lg:mt-10">
            <div className="h-full border border-red-200 p-4 rounded shadow-sm">
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
  );
};

export default FetchAllPets;
