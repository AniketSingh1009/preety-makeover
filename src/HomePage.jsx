import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Updated import for Navigation
import 'swiper/swiper-bundle.css';

const PreetyMakeover = () => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const photos = [
    //add the link from the public folder
'../public/b25.jpg?height=600&width=600',
'../public/b6.jpg?height=600&width=600',
'../public/b9.jpg?height=600&width=600',
'../public/b10.jpg?height=600&width=600',
'../public/b1.jpg?height=600&width=600',
'../public/b2.jpg?height=400&width=600',
'../public/b3.jpg?height=400&width=600',
'../public/b4.jpg?height=400&width=600',
'../public/b5.jpg?height=400&width=600',
'../public/b9.jpg?height=400&width=600',
'../public/b10.jpg?height=400&width=600',
'../public/b12.jpg?height=400&width=600',
'../public/b13.jpg?height=400&width=600',
'../public/b14.jpg?height=400&width=600',
'../public/b16.jpg?height=400&width=600',
'../public/b17.jpg?height=400&width=600',
'../public/b18.jpg?height=400&width=600',
'../public/b19.jpg?height=400&width=600',
'../public/b20.jpg?height=400&width=600',
'../public/b21.jpg?height=400&width=600',
'../public/b24.jpg?height=400&width=600',
'../public/b25.jpg?height=400&width=600',
'../public/b5.jpg?height=400&width=600',

  ];

  const products = [
    { brand: 'Lakme', link: 'https://shop.lakmesalon.in/collections/lakme?utm_source=google&utm_medium=cpc&utm_campaign=ET-007-PMax-Schwarzkopf&utm_content=&gad_source=1&gclid=Cj0KCQjwveK4BhD4ARIsAKy6pMJ50maFccI49H81JywLEMAcfILYAYz-otAQY0jyHhAKCZztxtd0SYgaAhXrEALw_wcB' },
    { brand: 'Mac', link: 'https://www.maccosmetics.in/' },
    { brand: 'Forever52', link: 'https://www.dailylifeforever52.in/?utm_source=google_ads&utm_medium=savit_ppc&utm_campaign=5thjune2024&gad_source=1&gclid=Cj0KCQjwveK4BhD4ARIsAKy6pMJdiwa8F1fc_TBQnctgag34D6G4XnNPWQlpBxthpx1WlWdU9chqm20aAnVMEALw_wcB' },
    { brand: 'Nars', link: 'https://sephora.in/products?brand=nars&utm_source=Google&utm_medium=google-performancemax&utm_campaign=Vib_PerformanceMax_NARS_Benefit-21533464236&utm_content=-&gad_source=1&gclid=Cj0KCQjwveK4BhD4ARIsAKy6pMKBs9QUcdu-6XZPKkAxZWr5JMQ5Rse34_Z_gg1USMh_hR96H5gKuxsaAvIEEALw_wcB' },
    { brand: 'Makeup Revolution', link: 'https://www.hokmakeup.com/collections/makeup-revolution?pmax&cmp_id=15944873683&adg_id=&kwd=&device=c&gad_source=1&gclid=Cj0KCQjwveK4BhD4ARIsAKy6pMLvY7SHsC03xiQ1vIR7w9ld5UY3Q54tr_xV6KyKTafEJx8b6ONKG8waAovYEALw_wcB' },
    { brand: 'Huda Beauty', link: 'https://hudabeauty.com/us/en_US/home' },
  ];

  const services = [
    { type: ' HD Bridal Makeup', price: 'Rs 10000', description: 'Complete bridal look with touch-ups', image: '../public/b25.jpg?height=200&width=300' },
    { type: 'Party Makeup', price: 'Rs 3500', description: 'Glamorous look for special events', image: '../public/b16.jpg?height=200&width=300' },
    { type: 'Airbrush  Makeup', price: 'Rs 15000', description: 'Enhance your natural beauty', image: '../public/t1.jpeg?height=200&width=300' },
    { type: ' Premium Makeup', price: 'Rs 20000', description: 'Camera-ready looks for all types of shoots', image: '../public/t2.jpeg?height=200&width=300' },
    { type: ' All type Makeup', price: 'Rs 3500-30000', description: 'All types of group or solo makeup', image: '../public/b6.jpg?height=200&width=300' },
  
  ];

  const bookings = [
    { date: 'November', booked: false },
    { date: 'December', booked: false },
    { date: 'January', booked: false },
    { date: 'February', booked: false },
    { date: 'March', booked: false },
    { date: 'April', booked: false },
    { date: 'May', booked: false },
    { date: 'June', booked: false },
    { date: 'July', booked: false },
  
  ];

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);

    return () => {
      clearInterval(photoInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="../public/logo.jpg?height=40&width=40"
              alt="Preety Makeover Logo"
              className="rounded-full w-10 h-10"
            />
            <h1 className="text-3xl font-bold  from-pink-500 to-purple-600">Preety Makeover</h1>
          </div>
          <div className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#bookings" className="hover:underline">Bookings</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 from-pink-500 text-purple-800">About Preety Makeover</h2>
              <p className="mb-4 text-gray-700">
                Preety Makeover is your go-to destination for stunning makeup transformations. With years of experience and a passion for beauty, we specialize in bringing out your inner radiance for any occasion.
              </p>
              <p className="mb-6 text-gray-700">
                From bridal makeup to glamorous party looks, we use high-quality products and cutting-edge techniques to ensure you look and feel your absolute best.
              </p>
              <a
                href="https://wa.me/message/Z4XHJBSZ2LW4K1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-xl "
              >
                Book Now 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo and Video Gallery */}
      {/* Photo and Video Gallery */}
<section id="gallery" className="py-12 bg-gradient-to-r from-purple-100 to-pink-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Our Previous Works</h2>
    <Swiper
      navigation
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={30}
      slidesPerView={1}
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[60vh] overflow-hidden flex justify-center items-center">
            <img
              src={photo}
              alt={`Makeup example ${index + 1}`}
              className="object-contain w-full h-full" // Ensures the whole image fits
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>



      {/* Products Used */}
      <section id="products" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Products We Use</h2>
          <div className="flex flex-col items-center text-xl font-bold ">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-500 mb-2"
              >
                {product.brand}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Makeup Types with Charges Slider */}
      <section id="services" className="py-12 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Our Services</h2>
          <div className="flex justify-center">
            <div className="w-[350px] bg-white shadow-lg">
              <div className="p-6">
                <img
                  src={services[serviceIndex].image}
                  alt={services[serviceIndex].type}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2 text-purple-700">{services[serviceIndex].type}</h3>
                <p className="text-xl font-bold text-pink-600">{services[serviceIndex].price}</p>
                <p className="text-gray-600 mt-2">{services[serviceIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Booking Dates */}
      <section id="bookings" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Upcoming Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-purple-700">{booking.date}</h3>
                  <p className={`text-lg font-semibold ${booking.booked ? 'text-red-500' : 'text-green-500'}`}>
                    {booking.booked ? 'Fully Booked' : 'Available'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gradient-to-b from-purple-200 to-pink-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Contact Us</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/preetty1710?igsh=Z29zdXI4cmwzNWNh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 text-4xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/message/Z4XHJBSZ2LW4K1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 text-4xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2023 Preety Makeover. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PreetyMakeover;
