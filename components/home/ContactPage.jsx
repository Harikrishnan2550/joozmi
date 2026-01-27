"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const easePremium = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easePremium },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-24 pb-24 sm:pt-32 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(16,185,129,0.22) 0%,
                rgba(255,255,255,1) 50%,
                rgba(16,185,129,0.14) 100%
              )
            `,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.35em] text-black/55 uppercase"
          >
            Contact Us
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black"
          >
            Let’s talk about <span className="italic text-black/70">premium pulp</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg leading-relaxed text-black/60"
          >
            Have a business enquiry, bulk order request, or want to partner with
            us? Send a message — we’ll respond quickly.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: easePremium }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Card */}
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_30px_80px_-55px_rgba(0,0,0,0.25)] p-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.35em] text-black/45 uppercase">
                  Company Info
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-black">
                Gusto Frozen Foods Pvt Ltd
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-black/60">
                Manufactured & Marketed By
              </p>

              <div className="mt-8 space-y-4 text-sm text-black/70">
                <InfoRow
                  label="Address"
                  value="SDF Building Kinfra Mega Food Park, Kozhippara, Palakkad, Kerala."
                />
                <InfoRow label="Customer Care" value="0492 323 59 82" />
              </div>
            </div>
          </motion.div>
          <motion.div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_30px_80px_-55px_rgba(0,0,0,0.25)] p-8 sm:p-10">
              <div className="relative">
                <form
                  className="mt-10 grid gap-5"
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const loading = toast.loading("Sending message...");

                    try {
                      const res = await fetch("/api/send-email", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData),
                      });

                      toast.dismiss(loading);

                      if (res.ok) {
                        toast.success("Message sent successfully!");
                        setFormData({ name: "", phone: "", email: "", message: "" });
                      } else {
                        toast.error("Failed to send message.");
                      }
                    } catch {
                      toast.dismiss(loading);
                      toast.error("Something went wrong.");
                    }
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                    <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>

                  <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" required />

                  <div className="grid gap-2">
                    <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-sm text-black/75 outline-none transition focus:border-emerald-500/40 focus:ring-4 focus:ring-emerald-500/15"
                    />
                  </div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.35, ease: easePremium }}
                    type="submit"
                    className="mt-3 inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white/80 px-10 py-4 text-sm font-semibold tracking-[0.25em] uppercase text-black shadow-[0_20px_55px_-40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                  >
                    Send Message →
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
        {label}
      </label>
      <input
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-sm text-black/75 outline-none transition focus:border-emerald-500/40 focus:ring-4 focus:ring-emerald-500/15"
      />
    </div>
  );
}


function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-xs tracking-[0.25em] uppercase text-black/40">
        {label}
      </span>
      <span className="text-sm font-semibold text-black/70 text-right">
        {value}
      </span>
    </div>
  );
}
