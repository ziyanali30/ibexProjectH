import { Helmet } from 'react-helmet';

function Hero() {

    return (
        <>
<Helmet>
        <title>🏠Home - Ibex 🐐</title>
      </Helmet>
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Background overlay */} 
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
          Welcome to Ibex
        </h1>
        <p className="text-white mt-4 text-xl md:text-2xl max-w-2xl">
          The global leader in customer engagement solutions.
        </p>
        <a href="#services" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md">
          Learn More
        </a>
      </div>
    </section>
        </>
    );
};
export default Hero;