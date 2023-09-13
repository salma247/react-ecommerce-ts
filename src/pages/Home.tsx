import Hero from "../images/hero.jpg";
import { Link } from "react-router-dom";
import {
  FaShippingFast,
  FaUndo,
  FaHeadset,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaStar,
} from "react-icons/fa";
import shoes from "../data/shoes.json";
import ProductCarousel from "../components/product/ProductCarousel";
import bg2 from "../images/bg-2.jpeg";
import allMen from "../images/all-men.jpg";
import allWomen from "../images/all-women.jpg";
import allCollections from "../images/all-collection.jpg";

const shoesSample = shoes.slice(0, 6);

function Home() {
  return (
    <>
      <section className="relative" style={{ height: "60vh" }}>
        {/* scrollable image */}
        <img src={Hero} alt="hero" className="h-full w-full object-cover" />
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-90"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
          <h1 className="mb-4 font-bold sm:text-lg md:text-2xl lg:text-4xl">
            Rise to the challenge, power your potential
          </h1>
          <Link
            to="/collection"
            className="mt-4 rounded-full bg-white px-8 py-2 font-semibold text-black transition-all duration-500 hover:bg-primary hover:text-white"
          >
            Shop now
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center lg:items-start">
          <FaShippingFast className="mb-4 text-4xl text-primary" />
          <h2 className="mb-4 text-2xl font-semibold">Free shipping</h2>
          <p className="text-gray-500">Free shipping on all orders over $99</p>
        </div>
        <div className=" flex flex-col items-center lg:items-start">
          <FaUndo className="mb-4 text-4xl text-primary" />
          <h2 className="mb-4 text-2xl font-semibold">Free returns</h2>
          <p className="text-gray-500">
            Free returns within 30 days of purchase
          </p>
        </div>
        <div className=" flex flex-col items-center lg:items-start">
          <FaHeadset className="mb-4 text-4xl text-primary" />
          <h2 className="mb-4 text-2xl font-semibold">Customer support</h2>
          <p className="text-gray-500">24/7 customer support</p>
        </div>

        <div className=" flex flex-col items-center lg:items-start">
          <FaStar className="mb-4 text-4xl text-primary" />
          <h2 className="mb-4 text-2xl font-semibold">Quality guarantee</h2>
          <p className="text-gray-500">Our products are made with care</p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-around gap-8 py-16 md:flex-row">
        <Link
          to="/collection"
          className="h-48 w-48 overflow-hidden rounded-full bg-cover bg-center hover:bg-primary"
          style={{ backgroundImage: `url(${allCollections})` }}
        >
          <div className="flex h-full items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white transition-all hover:bg-opacity-70">
            See Collections
          </div>
        </Link>
        <Link
          to="/men"
          className="h-48 w-48 overflow-hidden rounded-full bg-cover bg-center hover:bg-primary"
          style={{ backgroundImage: `url(${allMen})` }}
        >
          <div className="flex h-full items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white transition-all hover:bg-opacity-70">
            All Men
          </div>
        </Link>
        <Link
          to="/women"
          className="h-48 w-48 overflow-hidden rounded-full bg-cover bg-center hover:bg-primary"
          style={{ backgroundImage: `url(${allWomen})` }}
        >
          <div className="flex h-full items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white transition-all hover:bg-opacity-70">
            All Women
          </div>
        </Link>
      </section>

      <section className="flex flex-col items-center justify-around py-16">
        <h2 className="mb-8 text-2xl font-semibold">New arrivals</h2>
        <ProductCarousel data={shoesSample} />
      </section>

      <section className="relative">
        <img src={bg2} alt="bg2" className="h-96 w-full object-cover" />
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-90"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
          <h5 className="mb-4 font-bold sm:text-lg md:text-2xl lg:text-4xl">
            connect with us
          </h5>
          <p className="mb-4 text-gray-300">
            Follow us on social media for special offers
          </p>
          <div className="flex justify-center gap-4">
            <FaFacebook className="text-2xl text-gray-300 transition-all duration-500 hover:text-white" />
            <FaInstagram className="text-2xl text-gray-300 transition-all duration-500 hover:text-white" />
            <FaTwitter className="text-2xl text-gray-300 transition-all duration-500 hover:text-white" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
