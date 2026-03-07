"use client";


import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiUser,
} from "react-icons/fi";

export default function SchedulePage() {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    startTime: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const startTime = new Date(formData.startTime);
      const endTime = new Date(startTime.getTime() + 30 * 60000); // Default 30 min duration

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/meetings/public`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clientName: formData.clientName,
            clientEmail: formData.clientEmail,
            startTime,
            endTime,
          }),
        },
      );

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(
          result.error?.message ||
          "Failed to schedule meeting. Please try a different time or contact us directly.",
        );
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white text-black min-h-screen">
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50/50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl text-center border border-gray-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheckCircle className="text-4xl text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Confirmed!
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              We've scheduled your meeting,{" "}
              <span className="font-semibold">{formData.clientName}</span>. A
              calendar invitation with the details has been sent to{" "}
              <span className="font-semibold">{formData.clientEmail}</span>.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Return Home
            </button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Background decorations */}
          <div className="absolute -top-24 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40 animate-pulse delay-700" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left side: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
                <FiCalendar className="animate-bounce" /> BOOK AN APPOINTMENT
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Let's Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                  Great Together
                </span>
              </h1>
              <p className=" sm:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Ready to transform your vision into reality? Schedule a
                30-minute discovery call to discuss your project and how
                Brainexia can help you grow.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "30-Minute Intro",
                    desc: "A brief session to understand your goals.",
                  },
                  {
                    title: "Strategic Roadmap",
                    desc: "Initial thoughts on your project trajectory.",
                  },
                  {
                    title: "Sync to Calendar",
                    desc: "Automated invites and mobile reminders.",
                  },
                ].map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition group cursor-default"
                  >
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-500 text-sm font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-[32px] shadow-2xl border border-gray-100 flex flex-col h-full"
            >
              <h2 className="text-[28px] font-bold mb-8 text-gray-800">
                Fill in the details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 uppercase tracking-wider">
                    Your Name
                  </label>
                  <div className="relative group">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white focus:border-blue-500 outline-none transition font-medium"
                      value={formData.clientName}
                      onChange={(e) =>
                        setFormData({ ...formData, clientName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 uppercase tracking-wider">
                    Work Email
                  </label>
                  <div className="relative group">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition" />
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white focus:border-blue-500 outline-none transition font-medium"
                      value={formData.clientEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          clientEmail: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 uppercase tracking-wider">
                    Date & Time
                  </label>
                  <div className="relative group">
                    <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition" />
                    <input
                      required
                      type="datetime-local"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white focus:border-blue-500 outline-none transition font-medium appearance-none"
                      value={formData.startTime}
                      onChange={(e) =>
                        setFormData({ ...formData, startTime: e.target.value })
                      }
                    />
                  </div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-red-600 text-sm bg-red-50 p-4 rounded-2xl border border-red-100 flex items-center gap-3"
                  >
                    <FiCheckCircle className="rotate-45" /> {error}
                  </motion.div>
                )}

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-xl shadow-blue-200 disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Confirm Booking <FiClock className="text-xl" />
                    </>
                  )}
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                <p className="text-xs text-gray-400 font-medium">
                  Privacy guaranteed • No spam • Google Calendar Sync
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
