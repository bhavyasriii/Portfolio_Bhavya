import React from "react";
import prototypeGif from "../../../assets/case-studies/healthcare-booking/prototype/prototype-demo.gif";

const FinalUIPrototypeSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FFF4] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-green-600">
            Final UI & Prototype
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            A guided booking experience designed for clarity and confidence
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600">
            The final interface brings together high-fidelity design and
            interaction flow into a seamless experience. Each step is carefully
            structured to reduce confusion, guide decision-making, and help
            patients complete bookings with confidence.
          </p>
        </div>

        {/* PROTOTYPE DISPLAY */}
        <div className="mt-20 flex justify-center">

          <div className="relative group">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-green-200/40 blur-3xl rounded-full scale-110 opacity-70 group-hover:opacity-90 transition duration-500"></div>

            {/* GIF CONTAINER */}
            <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border border-gray-200">

              <img
                src={prototypeGif}
                alt="Healthcare booking prototype demo"
                className="w-[260px] md:w-[320px] rounded-[2rem] shadow-xl transition duration-500 group-hover:scale-[1.03]"
              />

            </div>

          </div>

        </div>

        {/* INSIGHT CARDS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-green-600 uppercase">
              Guided Flow
            </p>
            <p className="mt-3 text-gray-700 leading-7">
              Users are guided step-by-step from symptoms to confirmation,
              reducing decision fatigue and confusion.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-green-600 uppercase">
              Smart Decisions
            </p>
            <p className="mt-3 text-gray-700 leading-7">
              AI-driven recommendations help users select the right specialist
              without needing prior medical knowledge.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-green-600 uppercase">
              Trust & Clarity
            </p>
            <p className="mt-3 text-gray-700 leading-7">
              Clear review and confirmation steps ensure users feel confident
              before completing their appointment booking.
            </p>
          </div>

        </div>

        {/* FINAL OUTCOME */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-green-700">
            Outcome
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-800">
            The final solution transforms a fragmented booking experience into a
            structured, intuitive flow where users can move confidently from
            identifying symptoms to confirming their appointment.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalUIPrototypeSection;