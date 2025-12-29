import React from "react";

const WinterCare = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="font-bold text-3xl  mb-10 border-b-2 border-red-500 inline-block pb-3">
          Winter Care Tips for Pets
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-lg shadow-xl hover:scale-105 transition ease-in-out">
          <div className="flex justify-center">
            <img
              className="w-60 h-60 rounded-full "
              src="https://i.ibb.co.com/xtzH0bMt/10034.png"
              alt=""
            />
          </div>
          <div className="py-5">
            <h2 className="font-medium text-2xl text-center">Keep Pets Warm</h2>
            <p className="font-normal text-xl text-center">
              Use warm clothing like sweaters or coats for pets, especially for
              short-haired breeds during cold weather.
            </p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-xl hover:scale-105 transition ease-in-out">
          <div className="flex justify-center">
            <img
              className="w-60 h-60 rounded-full"
              src="https://i.ibb.co.com/FLbHw6CR/10033.png"
              alt=""
            />
          </div>
          <div className="py-5">
            <h2 className="font-medium text-2xl text-center">Protect Paws</h2>
            <p className="font-normal text-xl text-center">
              Cold surfaces and salt can harm pet paws. Clean their paws after
              walks and use paw balm if needed.
            </p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-xl hover:scale-105 transition ease-in-out">
          <div className="flex justify-center">
            <img
              className="w-60 h-60 rounded-full"
              src="https://i.ibb.co.com/KRVK9VP/10039.png"
              alt=""
            />
          </div>
          <div className="py-5">
            <h2 className="font-medium text-2xl text-center">
              Provide a Cozy Bed
            </h2>
            <p className="font-normal text-xl text-center">
              Ensure pets have a warm, dry, and comfortable sleeping place away
              from cold floors and drafts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterCare;
