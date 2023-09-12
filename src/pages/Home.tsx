import Hero from "../images/hero.jpg";
import { Link } from "react-router-dom";
import { FaShippingFast, FaUndo, FaHeadset, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import shoes from '../data/shoes.json'
import ProductCarousel from "../components/product/ProductCarousel";
import bg2 from "../images/bg-2.jpeg";


const shoesSample = shoes.slice(0, 6);

function Home() {
  return (
    <>
      <section className="relative">
        <img src={Hero} alt="hero" className="w-full" />
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

      <section className="mx-auto flex justify-around py-16">
        <Link
          to="/men"
          className="w-36 rounded bg-gray-400 py-2 text-center text-lg uppercase tracking-wide text-white transition-all hover:bg-primary"
        >
          All men
        </Link>
        <Link
          to="/women"
          className="w-36 rounded bg-gray-400 py-2 text-center text-lg uppercase tracking-wide text-white transition-all hover:bg-primary"
        >
          All women
        </Link>
      </section>

      {/*
        scrollable horizontal list of products 
       */}
      <section className="flex flex-col items-center justify-around py-16">
        <h2 className="mb-8 text-2xl font-semibold">New arrivals</h2>
        <ProductCarousel data={shoesSample} />
      </section>

      <section className="flex flex-col items-center justify-around py-16 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <FaShippingFast className="mb-4 text-4xl text-primary" />
          <h2 className="mb-4 text-2xl font-semibold">Free shipping</h2>
          <p className="text-gray-500">Free shipping on all orders over $99</p>
        </div>
        <div className="mt-8 flex flex-col items-center lg:mt-0 lg:items-start">
          <FaUndo className="mb-4 text-4xl text-primary" />
          <h2 className="mb-4 text-2xl font-semibold">Free returns</h2>
          <p className="text-gray-500">
            Free returns within 30 days of purchase
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center lg:mt-0 lg:items-start">
          <FaHeadset className="mb-4 text-4xl text-primary" />
          <h2 className="mb-4 text-2xl font-semibold">Customer support</h2>
          <p className="text-gray-500">24/7 customer support</p>
        </div>
      </section>

      <section className="relative">
        <img src={bg2} alt="bg2" className="w-full h-96 object-cover" />
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-90"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
          <h5 className="mb-4 font-bold sm:text-lg md:text-2xl lg:text-4xl">
            connect with us
          </h5>
          <p className="mb-4 text-gray-300">
            Follow us on social media for special offers
          </p>
          <div className="flex justify-center gap-4">
            <FaFacebook className="text-2xl text-gray-300 hover:text-white transition-all duration-500" />
            <FaInstagram className="text-2xl text-gray-300 hover:text-white transition-all duration-500" />
            <FaTwitter className="text-2xl text-gray-300 hover:text-white transition-all duration-500" />
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
