import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    message:
      "This recipe book has changed my life! I've discovered so many amazing dishes and shared them with my friends and family.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    message:
      "I love the variety of recipes available here. The instructions are clear, and the results are always delicious!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    message: "The recipes are amazing! I always find something new to try.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    message: "A must-have for every food lover. The variety is incredible.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Emily Davis",
    message: "Cooking has never been so easy and fun! Thanks to this site.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "David Wilson",
    message: "The best collection of recipes I've ever come across.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    message: "A great resource for finding new and exciting recipes.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "James Taylor",
    message: "These recipes are always a hit at my dinner parties.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden  h-80 shadow-md shadow-green-800">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="flex flex-col items-center 
           
            justify-center h-full bg-jetBlack bg-opacity-50 p-8"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className=" w-24 h-24 rounded-full mb-4 border-2 border-white"
            />
            <p className="text-white text-lg  mb-4">"{testimonial.message}"</p>
            <p className="text-white font-semibold">{testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
