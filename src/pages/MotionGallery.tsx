import React from "react";
import heroImage from "../assets/case-studies/healthcare-booking/hero/hero-visual-desktop.png";
const HeroSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div className="space-y-6">
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Guided Appointment Booking for a patient portal
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            A guided healthcare booking experience that helps patients find the right specialist in under 60 seconds.
          </p>

          {/* Metadata Chips */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              UX/UI Designer
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              4 Weeks
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              Figma
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              Healthcare App
            </span>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={heroImage}
            alt="Healthcare booking app UI"
            className="w-full max-w-lg md:max-w-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;