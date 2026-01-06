import React from "react";
import useProductes from "../../Hooks/useProductes";
import { useParams } from "react-router";
import ratingImg from "../../assets/icon-ratings.png";
import BookServiceForm from "../BookServiceForm/BookServiceForm";

const ServiceDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProductes();
  console.log(products, loading)

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error loading service</p>;

  const service = products.find((item) => item.serviceId === parseInt(id));

  if (!service) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  const { image, serviceName, rating, price, description } = service;
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h2 className="text-3xl font-bold mt-6">{serviceName}</h2>

      <div className="flex gap-6 mt-4">
        <div className="flex justify-center items-center gap-2">
          <img className="w-6" src={ratingImg} alt="" />
          <p className="font-semibold text-lg"> {rating}</p>
        </div>
        <div>
          <p className="font-bold text-primary text-lg">${price}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-600">{description}</p>

      <BookServiceForm></BookServiceForm>
    </div>
  );
};

export default ServiceDetails;
