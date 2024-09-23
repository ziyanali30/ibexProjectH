import { Helmet } from 'react-helmet';

function Hero() {

    return (
        <>
<Helmet>
        <title>🏠Home - Ibex 🐐</title>
      </Helmet>
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('bgLogo.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="container mx-auto relative z-10 text-center text-white flex flex-col justify-center h-full">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Ibex</h1>
            <p className="text-xl md:text-2xl mb-8">Exceptional customer engagement solutions.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg inline-block">
            Get Started
            </button>
        </div>
        </section>
        </>
    );
};
export default Hero;