import React, { useState, useRef, useEffect } from "react";
import star from "../assets/Recommendations/Star.png";
import cards from "../assets/Recommendations/recommendationsData.js";

const Recommendations = () => {
  // State to keep track of the current carousel item
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Total number of items in the carousel
  const totalItems = cards.length; // Change this based on the number of items

  // Function to handle right button click
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % totalItems;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Function to handle left button click
  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + totalItems) % totalItems;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Function to scroll to the selected index
  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const scrollLeftValue =
        index * (carouselRef.current.scrollWidth / totalItems);
      carouselRef.current.scrollTo({
        left: scrollLeftValue,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / totalItems;
      const newIndex = Math.round(
        (carouselRef.current.scrollLeft + itemWidth / 2) / itemWidth
      );
      setCurrentIndex(newIndex % totalItems);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      id="recommendations"
      className="flex flex-col items-center my-11 px-[100px]"
    >
      <div className="text-center pb-8">
        <h1 className="text-[34px] font-bold pt-2">Recommendations</h1>
        <p className="text-center text-[15px] text-customGrey">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet{" "}
          <br />
          Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </p>
      </div>
      <div className="relative w-full">
        {/* Carousel Container */}
        <div
          className="carousel h-[350px] carousel-center rounded-box w-full space-x-4 p-4"
          ref={carouselRef}
        >
          {/* 
          MAPPING THE DATA FOR INDIVIDUAL PROJECTS */}
          {cards.map((card) => (
            <div
              style={{ boxshadow: "5px 5px 10px 0px #0000001A" }}
              key={card.id}
              className="carousel-item box-border w-[340px] h-full bg-white flex flex-col justify-between px-7 py-5"
            >
              <div className="flex items-center gap-x-2">
                {Array.from({ length: card.stars }).map((_, index) => (
                  <img key={index} src={star} alt="s" />
                ))}
              </div>
              <div className="font-semibold text-lg leading-wide">
                {card.title}
              </div>
              <div className="text-customGrey">{card.description}</div>
              <div className="flex items-center gap-x-3">
                <div className="avatar">
                  <div className="w-[80px] rounded-full">
                    <img src={card.image} alt="pix" />
                  </div>
                </div>
                <div className="flex flex-col align-middle">
                  <div className="font-bold">{card.name}</div>
                  <div className="text-sm text-customGrey">
                    {card.designation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Recommendations;
