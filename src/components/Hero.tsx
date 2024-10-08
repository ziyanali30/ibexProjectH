import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>🏠Home - AXIMO 🐐</title>
      </Helmet>
      <section className="w-full h-screen bg-gray-100 dark:bg-darkBg flex items-center justify-center ">
        
        <div className="container flex flex-wrap justify-between items-center mx-auto p-8">
          {/* Left Side - Video */}
          <div className="w-full lg:w-1/2 p-4" data-aos="fade-right">
            <video
              className="w-full h-auto rounded-lg shadow-lg dark:shadow-xl"
              controls
              autoPlay
              loop
              muted
            >
<<<<<<< HEAD
              <source src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/sample.mp4?t=2024-09-30T01%3A57%3A53.489Z" type="video/mp4" />
=======
              <source src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/sample.mp4?t=2024-10-08T01%3A39%3A34.499Z" type="video/mp4" />
>>>>>>> b07b170c0495b7d7ba6996b7ab0d4be60ed3f3cd
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Side - Icons and Text */}
          <div
            className="w-full lg:w-1/2 p-4 text-center lg:text-left dark:text-darkText"
            data-aos="fade-left"
          >
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-darkText">
              Transform Your Digital Experience
            </h1>
            <p className="text-lg text-gray-600 mb-6 dark:text-darkText">
              We offer cutting-edge technology and exceptional customer
              experiences.
            </p>
            <div className="flex justify-center lg:justify-start space-x-6">
              {/* Sample Icons */}
              <div className="flex flex-col items-center">
                <img
                  src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/big-triangle.svg?t=2024-09-30T02%3A03%3A00.416Z"
                  alt="Icon 1"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-gray-600 dark:text-darkText">Innovation</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/down-arrow.svg?t=2024-09-30T02%3A02%3A29.925Z"
                  alt="Icon 2"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-gray-600 dark:text-darkText">Reduced Costs</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/dollar.svg?t=2024-09-30T02%3A02%3A06.821Z" alt="Icon 3" className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-darkText">More revenue</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
