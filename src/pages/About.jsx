import React from "react";
// import snowabout from "../images/sowabout.jpg"; // ✅ Add correct extension


const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[hsl(213,94%,68%)] to-blue-400 bg-clip-text text-transparent mb-8 mt-3">
        About Snow Day Calculator
      </h1>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        
        <img src="/images/sowabout.jpg" 
        alt="About Snow Day Calculator" 
        className="w-full h-56 object-cover"/>

        <div className="p-6 space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to the <span className="font-semibold">Snow Day Calculator</span>—your go-to platform for predicting school closings due to snowfall. 
            Using real-time data from the National Weather Service, we analyze key weather factors such as snowfall, wind speed, and temperature 
            to provide an accurate snow day probability for your area.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[hsl(213,94%,95%)] p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-[hsl(213,94%,68%)]">🔍 Accurate Predictions</h2>
              <p className="text-gray-600">We utilize live weather data and historical trends to calculate snow day probabilities.</p>
            </div>

            <div className="bg-[hsl(213,94%,95%)] p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-[hsl(213,94%,68%)]">📡 Real-Time Data</h2>
              <p className="text-gray-600">All predictions are based on up-to-the-minute data from the National Weather Service.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            Whether you're a student, parent, or teacher, our goal is to help you stay prepared for unexpected snow days.
            Simply enter your ZIP code into our tool, and we'll handle the rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
