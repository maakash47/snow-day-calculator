import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    const mailtoLink = `mailto:info.snowdaycalculator@gmail.com?subject=Contact Form Submission&body=Name: ${data.name}%0AEmail: ${data.email}%0AMessage: ${data.message}`;
    window.location.href = mailtoLink;
    form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[hsl(213,94%,68%)] to-blue-400 bg-clip-text text-transparent mb-8 mt-3">
        Contact Us
      </h1>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              {...form.register("name")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your name"
            />
            {form.formState.errors.name && <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...form.register("email")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
            />
            {form.formState.errors.email && <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              {...form.register("message")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
            {form.formState.errors.message && <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-[hsl(213,94%,68%)] text-white py-2 rounded hover:bg-[hsl(213,94%,60%)] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
