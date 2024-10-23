import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Updated import for Navigation
import 'swiper/swiper-bundle.css';

const PreetyMakeover = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

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
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [photos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 size-full">
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
      <section id="about" className="py-12 bg-white">
  <div className="max-w-4xl mx-auto px-4">
  <div className="flex flex-col items-center gap-8">
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-6 text-purple-800 text-center">About Us</h2>
    <p className="text-lg mb-4 text-gray-600 text-center">
      At Preety Makeover, we believe that beauty is not just about looks; it's about feeling confident and empowered. Our dedicated team of professionals is passionate about enhancing your natural beauty while providing exceptional service.
    </p>
    <p className="text-lg mb-4 text-gray-600 text-center">
      With years of experience in the beauty industry, we offer a wide range of services tailored to meet your unique needs. From bridal makeovers to everyday glam, our goal is to make you feel special on every occasion.
    </p>
    <p className="text-lg mb-4 text-gray-600 text-center">
      Our philosophy centers around using high-quality products and techniques to ensure that you receive the best possible results.
    </p>
    <p className="text-lg mb-4 text-gray-600 text-center">
      Join us at Preety Makeover, and let us help you discover the beauty within. Whether it’s a special occasion or a desire for a new look, we are here to support you every step of the way.
    </p>
    <p className="text-lg mb-4 text-gray-600 text-center">
      Thank you for considering Preety Makeover as your beauty partner. We can’t wait to help you shine!
    </p>
    <a
                href="https://wa.me/message/Z4XHJBSZ2LW4K1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-xl  allign-items-center"
              >
                Book Now 
              </a>
  </div>
  </div>
  </div>
</section>

      

      {/* Photo and Video Gallery */}
      <section id="gallery" className="py-12 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center"> {/* Centered Flexbox */}
        <div className="max-w-4xl w-full px-4 flex flex-col items-center"> {/* Centered flex container */}
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Our Previous Works</h2>
          <div className="relative w-[60vh] h-[70vh] mb-4"> {/* Set to fixed height */}
            <img
              src={photos[galleryIndex]}
              alt={`Gallery Image ${galleryIndex + 1}`}
              className="object-cover w-full h-full rounded-lg" // Ensure image covers the container
            />
          </div>
          {/* <p className="text-lg text-center text-gray-600">Image {galleryIndex + 1} of {photos.length}</p> */}
        </div>
      </section>




      {/* Products Used */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Products We Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-purple-700">{product.brand}</h3>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 mt-2 hover:underline"
                >
                  Buy Now
                </a>
              </div>
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

      {/* Bookings Section */}
      <section id="bookings" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Available Bookings</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bookings.map((booking, index) => (
              <li key={index} className={`p-4 text-center border rounded-lg ${booking.booked ? 'bg-red-200' : 'bg-green-200'}`}>
                <span className="font-bold">{booking.date}</span>
                <span className={`block ${booking.booked ? 'text-red-600' : 'text-green-600'}`}>
                  {booking.booked ? 'Booked' : 'Available'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Get in Touch</h2>
          <p className="mb-4 text-gray-700">
            For any inquiries or to book our services, feel free to contact us on our social media platforms!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/preetymakeover/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-purple-700 hover:text-purple-500" />
            </a>
            <a href="https://wa.me/message/Z4XHJBSZ2LW4K1" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-3xl text-green-600 hover:text-green-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
        <p>&copy; 2024 Preety Makeover. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PreetyMakeover;
