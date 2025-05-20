import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Globe, Loader2, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SuccessDialog from '@/components/ui/success-dialog';
import { useToast } from '@/components/ui/use-toast';

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS configuration is missing');
      }

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Ecomotech Team',
          reply_to: formData.email,
        }
      );

      if (result.status === 200) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setShowSuccessDialog(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please check your connection and try again. If the problem persists, please contact us directly via phone or email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-eco-green/5 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Get in touch with our team to learn more about our renewable energy solutions, 
                electric mobility products, or to discuss your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Contact Information */}
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-eco-green mt-0.5" />
                        <div>
                          <h3 className="font-medium">Headquarters Address</h3>
                          <p className="text-gray-600 mt-1">
                            Ecomotech Headquarters<br />
                            Marina Parade<br />
                            Banjul, The Gambia<br />
                            West Africa
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-eco-green mt-0.5" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <a href="mailto:info@ecomotech.com" className="text-gray-600 hover:text-eco-green mt-1 block">
                            info@ecomotech.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-eco-green mt-0.5" />
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <a href="tel:+2201234567" className="text-gray-600 hover:text-eco-green mt-1 block">
                            +220 123 4567
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-eco-green mt-0.5" />
                        <div>
                          <h3 className="font-medium">Business Hours</h3>
                          <ul className="text-gray-600 mt-1 space-y-1">
                            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                            <li>Saturday: 10:00 AM - 4:00 PM</li>
                            <li>Sunday: Closed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input 
                            id="name" 
                            required 
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input 
                            id="email" 
                            type="email" 
                            required 
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input 
                          id="subject" 
                          required 
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          required
                          placeholder="Your message"
                          value={formData.message}
                          onChange={handleChange}
                          className="h-32"
                          disabled={isSubmitting}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-eco-green hover:bg-eco-green-dark text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With offices across multiple continents, we bring sustainable energy solutions closer to our clients worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* China Office */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <img 
                    src="https://flagcdn.com/w320/cn.png" 
                    alt="China Flag" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Ecomotech China</h3>
                  <p className="text-gray-600 mb-4">
                    Suite 2001, Fortune Plaza<br />
                    7 Dong San Huan Zhong Lu<br />
                    Chaoyang District<br />
                    Beijing, 100020
                  </p>
                  <a 
                    href="https://bamamou.github.io/EcoMoTechWeb/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-eco-green hover:text-eco-green-dark font-medium"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Tanzania Office */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <img 
                    src="https://flagcdn.com/w320/tz.png" 
                    alt="Tanzania Flag" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Ecomotech Tanzania</h3>
                  <p className="text-gray-600 mb-4">
                    Plot 123, Haile Selassie Road<br />
                    Oysterbay<br />
                    Dar es Salaam<br />
                    Tanzania
                  </p>
                  <a 
                    href="https://tanzania.ecomotech.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-eco-green hover:text-eco-green-dark font-medium"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Guinea Office */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <img 
                    src="https://flagcdn.com/w320/gn.png" 
                    alt="Guinea Flag" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Ecomotech Guinea</h3>
                  <p className="text-gray-600 mb-4">
                    Immeuble Le Palmier<br />
                    Boulevard du Commerce<br />
                    Conakry<br />
                    Guinea
                  </p>
                  <a 
                    href="https://ecomotech.github.io/ecomotech-guinea/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-eco-green hover:text-eco-green-dark font-medium"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* DR Congo Office */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <img 
                    src="https://flagcdn.com/w320/cd.png" 
                    alt="DR Congo Flag" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Ecomotech DR Congo</h3>
                  <p className="text-gray-600 mb-4">
                    Avenue du Commerce 456<br />
                    Commune de la Gombe<br />
                    Kinshasa<br />
                    Democratic Republic of Congo
                  </p>
                  <a 
                    href="https://drc.ecomotech.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-eco-green hover:text-eco-green-dark font-medium"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Our Headquarters Location</h2>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0!2d-16.5777778!3d13.4530556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI3JzExLjAiTiAxNsKwMzQnMzQuMCJX!5e0!3m2!1sen!2sgm!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ecomotech Headquarters Location in Banjul, The Gambia"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Visit our headquarters in the heart of Banjul, The Gambia's capital city.<br />
                  Located along the scenic Marina Parade, overlooking the Atlantic Ocean.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success Dialog */}
      <SuccessDialog 
        isOpen={showSuccessDialog} 
        onClose={() => setShowSuccessDialog(false)} 
      />
    </div>
  );
};

export default ContactPage; 