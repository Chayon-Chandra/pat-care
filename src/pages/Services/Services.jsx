import React from "react";
import useProductes from "../../Hooks/useProductes";
import ServiceCard from "../../Componentes/ServiceCard/ServiceCard";

const Services = () => {
  const { products, loading, error } = useProductes();
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error loading services</p>;
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ServiceCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Services;
