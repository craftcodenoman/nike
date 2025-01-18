import React from "react";

const Help = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Help Center</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded shadow">
            <h3 className="font-medium">How do I track my order?</h3>
            <p>You can track your order by visiting the Order Tracking section on our website and entering your order number.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-medium">What is your return policy?</h3>
            <p>We offer a 30-day return policy for unworn and unused items. Please visit our Returns page for more details.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-medium">How can I contact customer service?</h3>
            <p>You can reach our customer service team via the Contact Us page or by calling our support number.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have any questions or need further assistance, feel free to reach out to us:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Email: support@nike.com</li>
          <li>Phone: 1-800-123-4567</li>
          <li>Live Chat: Available on our website from 8 AM to 10 PM EST</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="/shipping" className="text-blue-600 hover:underline">Shipping Information</a>
          </li>
          <li>
            <a href="/returns" className="text-blue-600 hover:underline">Returns & Exchanges</a>
          </li>
          <li>
            <a href="/size-guide" className="text-blue-600 hover:underline">Size Guide</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Help;

