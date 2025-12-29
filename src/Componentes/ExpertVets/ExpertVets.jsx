import React from "react";

const ExpertVets = () => {
  return (
    <div className="py-10">
      <div className="text-center ">
        <h1 className="font-bold text-3xl mb-10 border-b-2 border-red-500 inline-block pb-3">
        Meet Our Expert Vets
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-gray-100 p-5 rounded-lg shadow-xl hover:scale-105 transition ease-in-out">
          <div className="flex justify-center">
            <img
              className="w-60 h-60 rounded-full "
              src="https://i.ibb.co.com/ccSWc7Tq/10021.png"
              alt=""
            />
          </div>
          <div className="py-5">
            <h2 className="font-medium text-2xl ">
              Name: <span className="text-green-400">Dr. Sarah Akter</span>
            </h2>
            <p className="font-medium text-2xl">
              Specialization:{" "}
              <span className="text-green-400 text-xl">
                Small Animal Specialist
              </span>
            </p>
            <p className="font-medium text-2xl ">
              Experience:{" "}
              <span className="text-green-400 text-xl">
                8+ Years Experience
              </span>
            </p>
            <p className="font-medium text-2xl ">
              Email:{" "}
              <span className="text-green-400 text-xl">sarah@petcare.com</span>
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg shadow-xl hover:scale-105 transition ease-in-out">
          <div className="flex justify-center">
            <img
              className="w-60 h-60 rounded-full"
              src="https://i.ibb.co.com/cc8VTKcV/10022.png"
              alt=""
            />
          </div>
          <div className="py-5">
            <h2 className="font-medium text-2xl ">
              Name: <span className="text-green-400">Dr. James Wilson</span>
            </h2>
            <p className="font-medium text-2xl">
              Specialization:{" "}
              <span className="text-green-400 text-xl">
                Veterinary Surgeon
              </span>
            </p>
            <p className="font-medium text-2xl ">
              Experience:{" "}
              <span className="text-green-400 text-xl">
                10+ Years Experience
              </span>
            </p>
            <p className="font-medium text-2xl ">
              Email:{" "}
              <span className="text-green-400 text-xl">james@petcare.com</span>
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg shadow-xl hover:scale-105 transition ease-in-out">
          <div className="flex justify-center">
            <img
              className="w-60 h-60 rounded-full"
              src="https://i.ibb.co.com/8LGSfvZ7/10023.png"
              alt=""
            />
          </div>
          <div className="py-5">
            <h2 className="font-medium text-2xl ">
              Name: <span className="text-green-400">Dr. Ayesha Khan</span>
            </h2>
            <p className="font-medium text-2xl">
              Specialization:{" "}
              <span className="text-green-400 text-xl">
                Pet Nutrition
              </span>
            </p>
            <p className="font-medium text-2xl ">
              Experience:{" "}
              <span className="text-green-400 text-xl">
                6+ Years Experience
              </span>
            </p>
            <p className="font-medium text-2xl ">
              Email:{" "}
              <span className="text-green-400 text-xl">ayesha@petcare.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertVets;
