
import HeroSlider from "../../Componentes/HeroSlider/HeroSlider";
import useProductes from "../../Hooks/useProductes";
import ServiceCard from "../../Componentes/ServiceCard/ServiceCard";
import Container from "../../Componentes/Container/Container";
import { Link } from "react-router";
import WinterCare from "../../Componentes/WinterCare/WinterCare";
import ExpertVets from "../../Componentes/ExpertVets/ExpertVets";
import Breeds from "../../Componentes/Breeds/Breeds";

const Home = () => {
  const { products } = useProductes();
  const sliceService = products.slice(0, 6);
  return (
    <div className="bg-gray-200 min-h-screen">
      <HeroSlider></HeroSlider>
      <div className="my-9 text-center">
        <h3 className="font-medium text-4xl  py-5 border-b-2 border-red-500 inline-block pb-3">
          Popular Winter Care Services
        </h3>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sliceService.map((product) => (
            <ServiceCard
              key={product.serviceId}
              product={product}
            ></ServiceCard>
          ))}
        </div>
        <div className="text-center pt-10 ">
          <Link to="/services" className="btn btn-outline btn-primary">Show All</Link>
        </div>
        <WinterCare></WinterCare>
        <ExpertVets></ExpertVets>
      </Container>
      <Breeds></Breeds>
    </div>
  );
};

export default Home;
