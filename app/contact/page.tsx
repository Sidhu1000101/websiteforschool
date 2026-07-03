import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        buttonText="Send Message"
        buttonLink="#contact-form"
      />

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Contact Information"
            subtitle="Reach out to us through any of these channels."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                ZPHS Chinaganjam<br />
                Chinaganjam Village<br />
                Bapatla District<br />
                Andhra Pradesh, India
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                +91 XXXXX XXXXX<br />
                +91 XXXXX XXXXX
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                zphschinaganjam@example.com<br />
                info@zphschinaganjam.com
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Sat: 9:00 AM - 4:30 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Send us a Message"
            subtitle="Fill out the form below and we'll get back to you shortly."
            centered
          />
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Find Us on Map"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Google Maps Placeholder</p>
                <p className="text-sm text-gray-500 mt-2">Chinaganjam, Bapatla District, Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Additional Information"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="font-bold text-gray-900 mb-4">Admission Enquiries</h3>
                <p className="text-gray-600 mb-4">
                  For admission-related queries, please visit the school office during working hours or contact us via phone.
                </p>
                <p className="text-sm text-gray-500">
                  Documents required: Birth certificate, Transfer certificate, Aadhaar card, and passport-size photographs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="font-bold text-gray-900 mb-4">General Enquiries</h3>
                <p className="text-gray-600 mb-4">
                  For general information about the school, facilities, or programs, please use the contact form above.
                </p>
                <p className="text-sm text-gray-500">
                  We typically respond to all enquiries within 2-3 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
