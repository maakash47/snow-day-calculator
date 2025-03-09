import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "How accurate is the Snow Day Calculator?",
    answer:
      "Our calculator uses real-time data from the National Weather Service and considers multiple factors including temperature, snowfall, wind speed, and more. While we strive for accuracy, weather predictions are inherently uncertain, and final decisions rest with school administrators.",
  },
  {
    question: "How do you calculate the snow day probability?",
    answer:
      "We analyze multiple weather parameters including expected snowfall, temperature, wind speed, visibility, and other factors. These are combined using our algorithm that considers historical patterns of school closures.",
  },
  {
    question: "Why do you need my ZIP code?",
    answer:
      "Your ZIP code helps us fetch local weather data from the National Weather Service for your specific area. We don't store this information after providing your calculation.",
  },
  {
    question: "How often is the weather data updated?",
    answer:
      "We fetch real-time data from the National Weather Service each time you make a calculation, ensuring you get the most current prediction possible.",
  },
  {
    question: "Can I use this for any location in the US?",
    answer:
      "Yes, our calculator works for any US ZIP code where National Weather Service data is available.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[hsl(213,94%,68%)] to-blue-400 bg-clip-text text-transparent mb-8 mt-3">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-left text-lg font-medium text-gray-800 bg-gray-100 hover:bg-[hsl(213,94%,85%)] focus:outline-none focus-visible:ring focus-visible:ring-[hsl(213,94%,68%)] focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={`w-6 h-6 transition-transform ${
                      open ? "rotate-180 transform" : ""
                    } text-[hsl(213,94%,68%)]`}
                  />
                </Disclosure.Button>
                {open && (
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
