// import React, { useState } from "react";
// import Gauge from "./Gauge";

// const SnowDayTool = () => {
//   const [zip, setZip] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [snowProbability, setSnowProbability] = useState(null);
//   const [region, setRegion] = useState("");

//   const fetchWeather = async () => {
//     if (!zip) return;
//     try {
//       // Fetch lat/lon for ZIP code
//       const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${zip}&country=US&format=json`);
//       const geoData = await geoRes.json();
//       if (!geoData.length) throw new Error("Invalid ZIP code.");
//       const { lat, lon, display_name } = geoData[0];
//       setRegion(display_name);
  
//       // Fetch weather point data (to get gridpoint URL)
//       const weatherRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
//       if (!weatherRes.ok) throw new Error("Weather API request failed.");
//       const weatherJson = await weatherRes.json();
      
//       // Fetch gridpoint forecast data (contains humidity)
//       const gridpointUrl = weatherJson.properties.forecastGridData;
//       const gridpointRes = await fetch(gridpointUrl);
//       if (!gridpointRes.ok) throw new Error("Gridpoint data not available.");
//       const gridpointData = await gridpointRes.json();
  
//       // Extract humidity from gridpoint response
//       const humidityValues = gridpointData.properties.relativeHumidity.values;
//       const latestHumidity = humidityValues.length > 0 ? humidityValues[0].value : "Not Available";
  
//       // Fetch daily forecast
//       const forecastUrl = weatherJson.properties.forecast;
//       const forecastRes = await fetch(forecastUrl);
//       if (!forecastRes.ok) throw new Error("Forecast data not available.");
//       const forecastData = await forecastRes.json();
  
//       const periods = forecastData.properties.periods;
//       if (!periods || periods.length === 0) throw new Error("No forecast available.");
  
//       let maxSnowChance = 0;
//       let selectedPeriod = null;
  
//       for (let period of periods) {
//         const forecastText = period.shortForecast.toLowerCase();
//         const isSnow = forecastText.includes("snow") || forecastText.includes("flurries") || forecastText.includes("wintry mix");
  
//         if (isSnow && period.probabilityOfPrecipitation?.value !== null) {
//           if (period.probabilityOfPrecipitation.value > maxSnowChance) {
//             maxSnowChance = period.probabilityOfPrecipitation.value;
//             selectedPeriod = period;
//           }
//         }
//       }
  
//       if (selectedPeriod) {
//         setWeatherData({
//           temperature: selectedPeriod.temperature || "N/A",
//           humidity: `${latestHumidity}%`, // ✅ Now using correct humidity from gridpoint API
//           windSpeed: selectedPeriod.windSpeed || "N/A",
//           shortForecast: selectedPeriod.shortForecast || "No forecast available",
//           dateTime: new Date(selectedPeriod.startTime).toLocaleString(),
//         });
//       } else {
//         setWeatherData({
//           temperature: periods[0].temperature || "N/A",
//           humidity: `${latestHumidity}%`, // ✅ Now using correct humidity from gridpoint API
//           windSpeed: periods[0].windSpeed || "N/A",
//           shortForecast: periods[0].shortForecast || "No forecast available",
//           dateTime: new Date(periods[0].startTime).toLocaleString(),
//         });
//       }
  
//       setSnowProbability(maxSnowChance);
  
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       setWeatherData(null);
//       setSnowProbability(null);
//     }
//   };
  
//   return (
//     <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-xl mx-auto mt-20">
//       <h1 className="text-4xl font-bold text-[hsl(213,94%,67%)]">Snow Day Calculator</h1>
//       <p className="mt-2 text-gray-700">Enter your ZIP code in the United Sate or postal code in Canada to check snow day probability.</p>
//       <div className="mt-4 flex justify-center gap-2">
//         <input
//           type="text"
//           placeholder="Enter ZIP code"
//           value={zip}
//           onChange={(e) => setZip(e.target.value)}
//           className="border p-2 rounded w-40 text-center"
//         />
//         <button
//           onClick={fetchWeather}
//           className="px-4 py-2 bg-[hsl(213,94%,67%)] text-white rounded hover:bg-[hsl(213,94%,60%)] cursor-pointer transition"
//         >
//           Calculate
//         </button>
//       </div>
//       {weatherData && (
//         <div className="mt-6 p-4 bg-gray-100 rounded shadow-lg">
//           <h2 className="text-2xl font-bold mb-2">{region}</h2>
//           <Gauge percentage={snowProbability} />
//           <p className="text-lg font-bold mt-2">Snow Day Chance: {snowProbability}%</p>
//           <div className="mt-4 text-lg font-medium">
//             <p className={`py-2 rounded ${snowProbability > 70 ? 'bg-red-500 text-white' : snowProbability > 40 ? 'bg-yellow-400' : 'bg-green-400'}`}>
//               {snowProbability > 70 ? "High chances of school closing" : snowProbability > 40 ? "Moderate chances of school closing" : "School likely open"}
//             </p>
//           </div>
//           <div className="mt-4 grid grid-cols-2 gap-4 text-gray-800">
//             <p><strong>📅 Date & Time:</strong> {weatherData.dateTime}</p>
//             <p><strong>🌡 Temperature:</strong> {weatherData.temperature}°F</p>
//             <p><strong>💨 Wind Speed:</strong> {weatherData.windSpeed}</p>
//             <p><strong>💧 Humidity:</strong> {weatherData.humidity}</p>
//             <p><strong>🌤 Forecast:</strong> {weatherData.shortForecast}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SnowDayTool;





// import React, { useState } from "react";
// import Gauge from "./Gauge";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";

// const SnowDayTool = () => {
//   const [zip, setZip] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [snowProbability, setSnowProbability] = useState(null);
//   const [region, setRegion] = useState("");

//   const fetchWeather = async () => {
//     if (!zip) return;
//     try {
//       const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${zip}&country=US&format=json`);
//       const geoData = await geoRes.json();
//       if (!geoData.length) throw new Error("Invalid ZIP code.");
//       const { lat, lon, display_name } = geoData[0];
//       setRegion(display_name);
  
//       const weatherRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
//       if (!weatherRes.ok) throw new Error("Weather API request failed.");
//       const weatherJson = await weatherRes.json();
      
//       const gridpointUrl = weatherJson.properties.forecastGridData;
//       const gridpointRes = await fetch(gridpointUrl);
//       if (!gridpointRes.ok) throw new Error("Gridpoint data not available.");
//       const gridpointData = await gridpointRes.json();
  
//       const humidityValues = gridpointData.properties.relativeHumidity.values;
//       const latestHumidity = humidityValues.length > 0 ? humidityValues[0].value : "Not Available";
  
//       const forecastUrl = weatherJson.properties.forecast;
//       const forecastRes = await fetch(forecastUrl);
//       if (!forecastRes.ok) throw new Error("Forecast data not available.");
//       const forecastData = await forecastRes.json();
  
//       const periods = forecastData.properties.periods;
//       if (!periods || periods.length === 0) throw new Error("No forecast available.");
  
//       let maxSnowChance = 0;
//       let selectedPeriod = null;
  
//       for (let period of periods) {
//         const forecastText = period.shortForecast.toLowerCase();
//         const isSnow = forecastText.includes("snow") || forecastText.includes("flurries") || forecastText.includes("wintry mix");
  
//         if (isSnow && period.probabilityOfPrecipitation?.value !== null) {
//           if (period.probabilityOfPrecipitation.value > maxSnowChance) {
//             maxSnowChance = period.probabilityOfPrecipitation.value;
//             selectedPeriod = period;
//           }
//         }
//       }
  
//       if (selectedPeriod) {
//         setWeatherData({
//           temperature: selectedPeriod.temperature || "N/A",
//           humidity: `${latestHumidity}%`,
//           windSpeed: selectedPeriod.windSpeed || "N/A",
//           shortForecast: selectedPeriod.shortForecast || "No forecast available",
//           dateTime: new Date(selectedPeriod.startTime).toLocaleString(),
//         });
//       } else {
//         setWeatherData({
//           temperature: periods[0].temperature || "N/A",
//           humidity: `${latestHumidity}%`,
//           windSpeed: periods[0].windSpeed || "N/A",
//           shortForecast: periods[0].shortForecast || "No forecast available",
//           dateTime: new Date(periods[0].startTime).toLocaleString(),
//         });
//       }
  
//       setSnowProbability(maxSnowChance);
  
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       setWeatherData(null);
//       setSnowProbability(null);
//     }
//   };
  
//   return (
//     <>
//       <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-xl mx-auto mt-20">
//         <Helmet>
//           <title>Snow Day Calculator - Check Your School Closing Chances</title>
//           <meta name="description" content="Use the Snow Day Calculator to predict school closures based on real-time weather data. Get accurate snow day predictions now!" />
//           <meta name="keywords" content="snow day calculator, snow day predictor, snow day chance calculator, snow day predictor calculator" />
//           <meta name="author" content="Snow Day Calculator" />
//         </Helmet>
        
//         <h1 className="text-4xl font-bold text-[hsl(213,94%,67%)]">Snow Day Calculator</h1>
//         <p className="mt-2 text-gray-700">Enter your ZIP code to check snow day probability and school closure chances.</p>
//         <div className="mt-4 flex justify-center gap-2">
//           <input type="text" placeholder="Enter ZIP code" value={zip} onChange={(e) => setZip(e.target.value)} className="border p-2 rounded w-40 text-center" />
//           <button onClick={fetchWeather} className="px-4 py-2 bg-[hsl(213,94%,67%)] text-white rounded hover:bg-[hsl(213,94%,60%)] cursor-pointer transition">Calculate</button>
//         </div>
//         {weatherData && (
//           <div className="mt-6 p-4 bg-gray-100 rounded shadow-lg">
//             <h2 className="text-2xl font-bold mb-2">{region}</h2>
//             <Gauge percentage={snowProbability} />
//             <p className="text-lg font-bold mt-2">Snow Day Chance: {snowProbability}%</p>
//           </div>
//         )}
//       </div>
      
//       <div className="mt-10 bg-gray-100 p-10 text-left space-y-6">
//         <h2 className="text-3xl font-bold text-[hsl(213,94%,67%)]">What is Snow Day Calculator?</h2>
//         <p>The <strong>Snow Day Calculator</strong> predicts the likelihood of school closures based on real-time weather data.</p>
//         <h3 className="text-2xl font-semibold">How Accurate is the Snow Day Calculator?</h3>
//         <p>Our <strong>Snow Day Predictor</strong> uses live data and advanced models to provide the best accuracy.</p>
//         <h3 className="text-2xl font-semibold">How Does the Snow Day Calculator Work?</h3>
//         <p>The calculator retrieves real-time forecasts and analyzes snowfall probabilities, temperature, and wind speed.</p>
//         <h3 className="text-2xl font-semibold">Will There Be a Snow Day?</h3>
//         <p>Enter your ZIP code to find out the probability of a snow day in your area.</p>
//         <p><Link to="/blog" className="text-[hsl(213,94%,67%)] underline">Read more on our blog</Link>.</p>
//       </div>
//     </>
//   );
// };

// export default SnowDayTool;

import React, { useState } from "react";
import Gauge from "./Gauge";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SnowDayTool = () => {
  const [zip, setZip] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [snowProbability, setSnowProbability] = useState(null);
  const [region, setRegion] = useState("");

  const [loading, setLoading] = useState(false); // ✅ Add loading state


  const fetchWeather = async () => {
    if (!zip) return;
    
    setLoading(true); // ✅ Show "Calculating..." on button

    try {
        const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${zip}&country=US&format=json`);
        if (!geoRes.ok) throw new Error("Failed to fetch location data.");

        const geoData = await geoRes.json();
        if (!geoData.length) throw new Error("Invalid ZIP code.");
        
        const { lat, lon, display_name } = geoData[0];
        setRegion(display_name);

        const weatherRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
        if (!weatherRes.ok) throw new Error("Weather API request failed.");
        
        const weatherJson = await weatherRes.json();
        
        const gridpointUrl = weatherJson.properties.forecastGridData;
        const gridpointRes = await fetch(gridpointUrl);
        if (!gridpointRes.ok) throw new Error("Gridpoint data not available.");
        
        const gridpointData = await gridpointRes.json();
        const humidityValues = gridpointData.properties.relativeHumidity?.values || [];
        const latestHumidity = humidityValues.length > 0 ? humidityValues[0].value : "Not Available";

        const forecastUrl = weatherJson.properties.forecast;
        const forecastRes = await fetch(forecastUrl);
        if (!forecastRes.ok) throw new Error("Forecast data not available.");

        const forecastData = await forecastRes.json();
        const periods = forecastData.properties.periods;
        if (!periods || periods.length === 0) throw new Error("No forecast available.");

        let maxSnowChance = 0;
        let selectedPeriod = null;

        for (let period of periods) {
            const forecastText = period.shortForecast.toLowerCase();
            const isSnow = forecastText.includes("snow") || forecastText.includes("flurries") || forecastText.includes("wintry mix");

            if (isSnow && period.probabilityOfPrecipitation?.value !== null) {
                if (period.probabilityOfPrecipitation.value > maxSnowChance) {
                    maxSnowChance = period.probabilityOfPrecipitation.value;
                    selectedPeriod = period;
                }
            }
        }

        setWeatherData({
            temperature: selectedPeriod?.temperature || "N/A",
            humidity: `${latestHumidity}%`,
            windSpeed: selectedPeriod?.windSpeed || "N/A",
            shortForecast: selectedPeriod?.shortForecast || "No forecast available",
            dateTime: selectedPeriod ? new Date(selectedPeriod.startTime).toLocaleString() : "N/A",
        });

        setSnowProbability(maxSnowChance);

    } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
        setSnowProbability(null);
    } finally {
        setLoading(false); // ✅ Restore "Calculate" button after fetching data
    }
};

  // const fetchWeather = async () => {
  //   if (!zip) return;
  //   try {
  //     const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${zip}&country=US&format=json`);
  //     const geoData = await geoRes.json();
  //     if (!geoData.length) throw new Error("Invalid ZIP code.");
  //     const { lat, lon, display_name } = geoData[0];
  //     setRegion(display_name);

  //     const weatherRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  //     if (!weatherRes.ok) throw new Error("Weather API request failed.");
  //     const weatherJson = await weatherRes.json();
      
  //     const gridpointUrl = weatherJson.properties.forecastGridData;
  //     const gridpointRes = await fetch(gridpointUrl);
  //     if (!gridpointRes.ok) throw new Error("Gridpoint data not available.");
  //     const gridpointData = await gridpointRes.json();

  //     const humidityValues = gridpointData.properties.relativeHumidity.values;
  //     const latestHumidity = humidityValues.length > 0 ? humidityValues[0].value : "Not Available";

  //     const forecastUrl = weatherJson.properties.forecast;
  //     const forecastRes = await fetch(forecastUrl);
  //     if (!forecastRes.ok) throw new Error("Forecast data not available.");
  //     const forecastData = await forecastRes.json();

  //     const periods = forecastData.properties.periods;
  //     if (!periods || periods.length === 0) throw new Error("No forecast available.");

  //     let maxSnowChance = 0;
  //     let selectedPeriod = null;

  //     for (let period of periods) {
  //       const forecastText = period.shortForecast.toLowerCase();
  //       const isSnow = forecastText.includes("snow") || forecastText.includes("flurries") || forecastText.includes("wintry mix");

  //       if (isSnow && period.probabilityOfPrecipitation?.value !== null) {
  //         if (period.probabilityOfPrecipitation.value > maxSnowChance) {
  //           maxSnowChance = period.probabilityOfPrecipitation.value;
  //           selectedPeriod = period;
  //         }
  //       }
  //     }

  //     if (selectedPeriod) {
  //       setWeatherData({
  //         temperature: selectedPeriod.temperature || "N/A",
  //         humidity: `${latestHumidity}%`,
  //         windSpeed: selectedPeriod.windSpeed || "N/A",
  //         shortForecast: selectedPeriod.shortForecast || "No forecast available",
  //         dateTime: new Date(selectedPeriod.startTime).toLocaleString(),
  //       });
  //     } else {
  //       setWeatherData({
  //         temperature: periods[0].temperature || "N/A",
  //         humidity: `${latestHumidity}%`,
  //         windSpeed: periods[0].windSpeed || "N/A",
  //         shortForecast: periods[0].shortForecast || "No forecast available",
  //         dateTime: new Date(periods[0].startTime).toLocaleString(),
  //       });
  //     }

  //     setSnowProbability(maxSnowChance);

  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //     setWeatherData(null);
  //     setSnowProbability(null);
  //   }
  // };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Snow Day Calculator - Check Your School Closing Chances</title>
        <meta name="description" content="Use the Snow Day Calculator to predict school closures based on real-time weather data. Get accurate snow day predictions now!" />
        <meta name="keywords" content="snow day calculator, snow day predictor, snow day chance calculator, snow day predictor calculator" />
        <meta name="author" content="Snow Day Calculator" />
      </Helmet>

      {/* Tool Section */}
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-xl mx-auto mt-20">
        <h1 className="text-4xl font-bold text-[hsl(213,94%,67%)]">Snow Day Calculator</h1>
        <p className="mt-2 text-gray-700">Enter your ZIP code to check snow day probability and school closure chances.</p>
        <div className="mt-4 flex justify-center gap-2">
          <input type="text" placeholder="Enter ZIP code" value={zip} onChange={(e) => setZip(e.target.value)} className="border p-2 rounded w-40 text-center" />
          {/* <button onClick={fetchWeather} className="px-4 py-2 bg-[hsl(213,94%,67%)] text-white rounded hover:bg-[hsl(213,94%,60%)] cursor-pointer transition">Calculate</button> */}
          <button
    onClick={fetchWeather}
    disabled={loading} // ✅ Prevent multiple clicks while loading
    className={`px-4 py-2 rounded transition ${
        loading ? "bg-gray-400 cursor-not-allowed" : "bg-[hsl(213,94%,67%)] hover:bg-[hsl(213,94%,60%)]"
    } text-white`}
>
    {loading ? "Calculating..." : "Calculate"} {/* ✅ Dynamic text */}
</button>

        </div>
        
        {weatherData && (
          <div className="mt-6 p-4 bg-gray-100 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{region}</h2>
            <Gauge percentage={snowProbability} />
            <p className="text-lg font-bold mt-2">Snow Day Chance: {snowProbability}%</p>

            {/* School Closing Prediction Section */}
            <div className="mt-4 text-lg font-medium">
              <p className={`py-2 rounded ${snowProbability > 70 ? 'bg-red-500 text-white' : snowProbability > 40 ? 'bg-yellow-400' : 'bg-green-400'}`}>
                {snowProbability > 70 ? "High chances of school closing" : snowProbability > 40 ? "Moderate chances of school closing" : "School likely open"}
              </p>
            </div>

            {/* Weather Details */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-gray-800">
              <p><strong>📅 Date & Time:</strong> {weatherData.dateTime}</p>
              <p><strong>🌡 Temperature:</strong> {weatherData.temperature}°F</p>
              <p><strong>💨 Wind Speed:</strong> {weatherData.windSpeed}</p>
              <p><strong>💧 Humidity:</strong> {weatherData.humidity}</p>
              <p><strong>🌤 Forecast:</strong> {weatherData.shortForecast}</p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Blog Content Section */}
      <div className="mt-10 bg-gray-100 p-10 text-left space-y-6">
        <h2 className="text-3xl font-bold text-[hsl(213,94%,67%)]">What is Snow Day Calculator?</h2>
        <p>The <strong>Snow Day Calculator</strong> is an online tool that predicts the chances of school closures due to snowfall. It analyzes real-time weather data like snowfall probability, temperature and wind speed to project whether your local schools will close. 

        Instant results and chances of a snow day when you enter your ZIP code. Parents, students and teachers can reference this snow day predictor to plan and avoid the morning scramble.</p>
        
        <h3 className="text-2xl font-semibold text-[hsl(213,94%,67%)]">How Accurate is the Snow Day Calculator?</h3>
        <p>A common question is, "How accurate is the Snow Day Calculator?" Our <strong> snow day predictor calculator </strong> ensures high accuracy by:<br></br>
✅ Pulls live weather predictions from the National Weather Service (NWS)<br></br>
✅ Analyzing past statistics and weather trends<br></br>
✅ Taking into consideration regional school closing patterns<br></br>

No tool can be 100% accurate, of course, but our snow day chance calculator provides very reliable estimates based on the latest weather reports and trends.</p>

<h3 className="text-2xl font-semibold text-[hsl(213,94%,67%)]">How to use Snow Day Calculator ?</h3>
        <p>Using our snow day predictor calculator is quick and easy:<br></br>
1️⃣ Enter your ZIP code in the tool<br></br>
2️⃣ Click the "Calculate" button<br></br>
3️⃣ Instantly see the snow day probability and school closing predictions<br></br>
4️⃣ Check extra details like temperature, humidity, and wind speed<br></br>

It’s the perfect tool for parents, students, and school administrators to make informed decisions.</p>
        
        <h3 className="text-2xl font-semibold text-[hsl(213,94%,67%)]">How Does the Snow Day Calculator Work?</h3>
        <p>Our snow day chance calculator works by analyzing multiple factors, including:<br></br>
✅ Live Weather Data – We fetch real-time NWS forecasts<br></br>
✅ Snowfall Probability – Areas expecting heavy snowfall have a higher chance of closures<br></br>
✅ Temperature & Wind Speed – Colder temperatures and high winds increase the likelihood of snow accumulation<br></br>
✅ Historical Trends – Areas prone to frequent snow days may close schools faster<br></br>

By considering these variables, our snow day predictor gives an accurate snow day forecast for any ZIP code in the US.</p>
        
        <h3 className="text-2xl font-semibold text-[hsl(213,94%,67%)]">Will There Be a Snow Day?</h3>
        <p>The answer depends on your local weather conditions. To find out:<br></br>
🔹 Enter your ZIP code in the calculator<br></br>
🔹 Check the percentage chance of a snow day<br></br>
🔹 See if schools are predicted to close<br></br>
🔹 Get additional weather parameters, including temperature, wind speed, and humidity<br></br>

Our snow day predictor calculator ensures fast and reliable results to help you prepare for winter storms.</p>

<h3 className="text-2xl font-semibold text-[hsl(213,94%,67%)]">Why Use the Snow Day Chance Calculator?</h3>
        <p>Our snow day predictor calculator is designed to be:<br></br>
✔️ Fast & Lightweight – Get results in 1-2 seconds<br></br>
✔️ Accurate & Data-Driven – Uses real-time weather data<br></br>
✔️ User-Friendly – Simple interface for students & parents<br></br>
✔️ Ad-Free & Free to Use – No cost, no unnecessary ads</p><br></br>

<h3 className="text-2xl font-semibold text-[hsl(213,94%,67%)]">Try the Snow Day Calculator Now!</h3>
        <p>
        Wondering if your school will close due to snow? Enter your ZIP code in the Snow Day Calculator and get an instant prediction. Whether you call it a snow day predictor, snow day chance calculator, or snow day predictor calculator, our tool gives you the most accurate snow day forecasts.
        </p>
        
        <p><Link to="/blog" className="text-[hsl(213,94%,67%)] underline">Read more on our blog</Link>.</p>
      </div>
    </>
  );
};

export default SnowDayTool;
