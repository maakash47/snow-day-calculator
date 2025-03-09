import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[hsl(213,94%,68%)] mb-8 mt-3.5">
        Privacy Policy
      </h1>
      <p className="text-gray-600 text-sm text-center mb-6">
        <strong>Last updated:</strong> March 10, 2025
      </p>

      <div className="space-y-6 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <p>
            Snow Day Calculator collects minimal data necessary to provide our service. 
            We temporarily process ZIP codes to retrieve weather data but do not store or share this information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <p>
            We use ZIP codes only to fetch real-time weather data from the National Weather Service API 
            and calculate snow day probabilities. No personal data is stored.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Cookies and Tracking</h2>
          <p>
            We use essential cookies to ensure the website functions correctly. 
            Analytics tools help us improve user experience by analyzing site interactions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
          <p>
            We integrate with the National Weather Service API to provide real-time weather updates. 
            ZIP codes entered by users are only used to fetch relevant weather predictions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p>
            We take reasonable security measures to protect any processed data. However, as with any online service, 
            absolute security cannot be guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Your Privacy Rights</h2>
          <p>
            Users have the right to request information regarding data collection and opt out of certain tracking technologies. 
            We maintain transparency and respect user privacy.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. The latest version will always be available on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us via our 
            <a href="/contact" className="text-[hsl(213,94%,68%)] font-semibold hover:underline">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
