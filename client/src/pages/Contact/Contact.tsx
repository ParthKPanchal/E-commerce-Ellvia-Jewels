import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { sendMessage } from "../../services/contactService";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
} from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await sendMessage(formData);

      alert(response.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="py-20 bg-[#FFF6E8]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}

          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A] mb-5">
              Contact Us
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-[#1A5C5A] leading-tight">
              Let's Connect
            </h1>

            <p className="mt-8 text-gray-700 leading-8 text-lg">
              We'd love to hear from you —
              whether it's about your order,
              styling questions,
              collaborations, or simply to
              say hello.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-16 mt-24">

            {/* Contact Form */}

            <div className="bg-white rounded-[40px] p-8 sm:p-10">

              <h2 className="text-3xl font-semibold text-[#1A5C5A] mb-8">
                Send A Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                />

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    bg-[#1A5C5A]
                    text-white
                    px-10
                    py-4
                    rounded-full
                    hover:opacity-90
                    transition
                  "
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </form>

            </div>

            {/* Contact Details */}

            <div className="space-y-8">

              {/* Email */}

              <div className="bg-white rounded-[40px] p-8 flex items-start gap-5">

                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#FFF6E8]
                  flex
                  items-center
                  justify-center
                  text-[#1A5C5A]
                  text-2xl
                ">
                  <FiMail />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#1A5C5A]">
                    Email
                  </h3>

                  <p className="mt-3 text-gray-700">
                    hello@ellviajewels.com
                  </p>
                </div>

              </div>

              {/* Phone */}

              <div className="bg-white rounded-[40px] p-8 flex items-start gap-5">

                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#FFF6E8]
                  flex
                  items-center
                  justify-center
                  text-[#1A5C5A]
                  text-2xl
                ">
                  <FiPhone />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#1A5C5A]">
                    Phone
                  </h3>

                  <p className="mt-3 text-gray-700">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              {/* Studio */}

              <div className="bg-white rounded-[40px] p-8 flex items-start gap-5">

                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#FFF6E8]
                  flex
                  items-center
                  justify-center
                  text-[#1A5C5A]
                  text-2xl
                ">
                  <FiMapPin />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#1A5C5A]">
                    Studio
                  </h3>

                  <p className="mt-3 text-gray-700">
                    Mumbai, India
                  </p>
                </div>

              </div>

              {/* Instagram */}

              <div className="bg-[#1A5C5A] text-white rounded-[40px] p-8">

                <div className="flex items-center gap-4 text-3xl">

                  <FiInstagram />

                  <h3 className="text-2xl font-semibold">
                    Instagram
                  </h3>

                </div>

                <p className="mt-5 leading-8 text-gray-200">
                  Follow EllviaJewels for
                  styling inspiration,
                  new arrivals, and
                  everyday luxury moments.
                </p>

                <button
                  className="
                    mt-8
                    bg-white
                    text-[#1A5C5A]
                    px-8
                    py-3
                    rounded-full
                  "
                >
                  Follow Us
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;