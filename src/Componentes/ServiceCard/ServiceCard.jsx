import { Link } from "react-router";
import ratingImg from "../../assets/icon-ratings.png";

const ServiceCard = ({ product }) => {
  console.log(product);
  const {serviceId, image, serviceName, rating, price } = product;

  return (
    <div className="rounded-lg bg-base-100 shadow-xl hover:scale-105 transition ease-in-out">
      <figure className="p-5">
        <img
          src={image}
          alt={serviceName}
          className="h-64 w-full object-cover rounded-lg "
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{serviceName}</h2>

        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <img className="w-6" src={ratingImg} alt="" />
            <p className="font-semibold text-lg"> {rating}</p>
          </div>
          <div>
            <p className="font-bold text-primary text-lg">${price}</p>
          </div>
        </div>

        <div className="card-actions mt-4">
          <Link to={`/services/${serviceId}`} className="btn btn-outline btn-primary w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
