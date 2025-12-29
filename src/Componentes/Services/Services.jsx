import services from "/data.json";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Winter Pet Care Services ❄️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard
            key={service.serviceId}
            service={service}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
