"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone, MessageCircle, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import { buildWhatsAppURL, type EnquiryFormData } from "@/lib/whatsapp";
import {
  OFFICES,
  FOUNDERS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  SECONDARY_PHONE,
} from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Please select a service"),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const inputClasses =
  "w-full bg-bg-surface border border-bg-surface-border rounded-xl px-4 py-3 min-h-[48px] text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-colors text-base";

const SERVICE_OPTIONS = [
  "Design & Drawing",
  "Turnkey Solutions",
  "Manufacturing",
  "Maintenance",
  "Other",
] as const;

export default function BookAppointment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    const url = buildWhatsAppURL(data as EnquiryFormData);
    window.open(url, "_blank");
  };

  return (
    <section id="contact" aria-label="Book an Appointment" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Get In Touch"
          title="Book an Appointment"
          description="Fill the form below and we'll connect with you on WhatsApp"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <AnimateOnScroll direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className={inputClasses}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClasses}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-muted mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClasses}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text-muted mb-2">
                  Service
                </label>
                <select
                  id="service"
                  className={inputClasses}
                  defaultValue=""
                  {...register("service")}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-text-muted mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className={inputClasses}
                  {...register("description")}
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                icon={<Send className="w-4 h-4" />}
                className="w-full md:w-auto"
              >
                Send Enquiry via WhatsApp
              </Button>
            </form>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll direction="right" className="lg:col-span-2">
            <div className="bg-bg-surface border border-bg-surface-border rounded-2xl p-6 md:p-8">
              {/* Head Office */}
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="text-accent-cyan w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-text-primary font-medium text-sm mb-1">{OFFICES.head.label}</p>
                  <address className="not-italic text-text-muted text-sm leading-relaxed">
                    {OFFICES.head.street}, {OFFICES.head.city}, {OFFICES.head.state} — {OFFICES.head.zip}
                  </address>
                </div>
              </div>

              {/* Branch Office */}
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="text-accent-cyan w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-text-primary font-medium text-sm mb-1">{OFFICES.branch.label}</p>
                  <address className="not-italic text-text-muted text-sm leading-relaxed">
                    {OFFICES.branch.street}, {OFFICES.branch.city}, {OFFICES.branch.state} — {OFFICES.branch.zip}
                  </address>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 mb-6">
                <Mail className="text-accent-cyan w-5 h-5 mt-1 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-text-muted text-sm hover:text-accent-cyan transition-colors"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>

              {/* Phone - Fenil */}
              <div className="flex items-start gap-3 mb-6">
                <Phone className="text-accent-cyan w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-text-primary font-medium text-sm">{FOUNDERS[0].name}</p>
                  <a
                    href={`tel:+${BUSINESS_PHONE}`}
                    className="text-text-muted text-sm hover:text-accent-cyan transition-colors"
                  >
                    {FOUNDERS[0].phone}
                  </a>
                </div>
              </div>

              {/* Phone - Yash */}
              <div className="flex items-start gap-3 mb-6">
                <Phone className="text-accent-cyan w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-text-primary font-medium text-sm">{FOUNDERS[1].name}</p>
                  <a
                    href={`tel:+${SECONDARY_PHONE}`}
                    className="text-text-muted text-sm hover:text-accent-cyan transition-colors"
                  >
                    {FOUNDERS[1].phone}
                  </a>
                </div>
              </div>

              {/* Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.0266!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDEnMzUuOCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                className="rounded-xl border border-bg-surface-border mt-6"
                loading="lazy"
                title="Synergy Projects office location"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
