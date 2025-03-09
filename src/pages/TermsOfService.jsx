import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[hsl(213,94%,68%)] mb-8 mt-3">
        Terms of Services
      </h1>
      <p className="text-gray-600 text-sm text-center mb-6">
        <strong>Last updated:</strong> March 10, 2025
      </p>

      <div className="space-y-6 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Terms of Use</h2>
          <p>
            By accessing and using the Snow Day Calculator website, you agree to abide by these
            Terms of Service. If you do not agree with any part of these terms, please refrain from using our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Service Description</h2>
          <p>
            Snow Day Calculator provides predictions regarding the likelihood of school closures due to snow.
            These predictions are based on real-time weather data and historical trends but should not be considered absolute.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Disclaimer</h2>
          <p>
            Our predictions are estimates based on publicly available weather data. While we strive for accuracy,
            we do not guarantee precise outcomes. Users should rely on official school announcements for closure decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>
            All content, including text, graphics, logos, and software, is the property of Snow Day Calculator and
            is protected under applicable copyright laws. Unauthorized use of our content is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            We are not responsible for any decisions made based on our predictions. By using our website,
            you acknowledge that Snow Day Calculator shall not be held liable for any inaccuracies or missed school closures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms of Service at any time. Continued use of the website
            following changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms of Service, please contact us through our
            <a href="/contact" className="text-[hsl(213,94%,68%)] font-semibold hover:underline">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
