import { useState, useEffect } from "react";
import { Mail, User, MessageCircle, Send, CheckCircle, Clock, MessageSquare, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactForm({ theme = "gray-800", reversetheme = "white" }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [showReceivedMessages, setShowReceivedMessages] = useState(false);

  useEffect(() => {
    // Add animation effect on component mount
    const timer = setTimeout(() => setFormVisible(true), 300);
    
    // Load EmailJS SDK
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with your user ID
      window.emailjs.init("w6j85OuJBl47dqf30"); // Your EmailJS user ID
    };
    document.body.appendChild(script);
    
    // Mock received message for demo
    const mockReceivedMessage = {
      name: "othman",
      email: "othmanrmaili@gmail.com",
      message: "Example message",
      time: "20:00",
      date: new Date().toLocaleDateString()
    };
    
    setReceivedMessages([mockReceivedMessage]);
    
    return () => {
      clearTimeout(timer);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when field is being edited
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setEmailError(null);
    
    if (validateForm()) {
      setSubmitting(true);
      
      // Check if EmailJS is loaded
      if (!window.emailjs) {
        setEmailError("Email service not available. Please try again later.");
        setSubmitting(false);
        return;
      }
      
      // Important: Match these parameter names to your EmailJS template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      // Send email using EmailJS
      window.emailjs.send(
        'service_8nx27wi',  // Your EmailJS service ID
        'template_4js1llc', // Your EmailJS template ID
        templateParams
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitting(false);
        setSubmitted(true);
        
        // Add to received messages for demo purposes
        const newMessage = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: templateParams.time,
          date: new Date().toLocaleDateString()
        };
        setReceivedMessages([newMessage, ...receivedMessages]);
        
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setEmailError("Failed to send your message. Please try again later.");
        setSubmitting(false);
      });
    }
  };

  const toggleReceivedMessages = () => {
    setShowReceivedMessages(!showReceivedMessages);
  };

  const openWhatsApp = () => {
    const phoneNumber = "212644796181"; // Replace with your number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const openSocialMedia = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="contact" className="backdrop-blur-sm py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-lg mx-auto">
          Have a question or want to work together? Drop me a message!
        </p>
        
        <div className={`transition-all duration-500 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Flex Layout for Side by Side */}
          <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
            {/* Contact Form - Left Side */}
            <div className="lg:w-2/3 bg-white dark:bg-gray-800 opacity-90 rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5">
                <div className="flex items-center justify-center text-white">
                  <MessageCircle size={28} className="mr-3" />
                  <h3 className="text-2xl font-semibold">Get In Touch</h3>
                </div>
              </div>

              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {emailError && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
                        <span className="block sm:inline">{emailError}</span>
                      </div>
                    )}
                    
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" size={18} />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" size={18} />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</label>
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg font-medium transition-all hover:opacity-90 flex items-center justify-center gap-2 ${submitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg transform hover:-translate-y-1'}`}
                    >
                      {submitting ? (
                        <>Processing <span className="animate-pulse">...</span></>
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column - Contact Options */}
            <div className="lg:w-1/3 flex flex-col space-y-6">
              {/* Contact Info Card - Enhanced */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-white flex items-center">
                  <MessageCircle size={20} className="mr-2 text-blue-500" />
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all duration-200">
                    <Mail size={18} className="mr-3 text-blue-500" />
                    <a href="mailto:mazozisaad@gmail.com" className="hover:underline">mazozisaad@gmail.com</a>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all duration-200">
                    <Phone size={18} className="mr-3 text-blue-500" />
                    <a href="tel:+212600000000" className="hover:underline">+212 60 000 0000</a>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all duration-200">
                    <MapPin size={18} className="mr-3 text-blue-500" />
                    <span>Casablanca, Morocco</span>
                  </div>
                </div>
              </div>
              
              {/* Social Media Card - New */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-white flex items-center">
                  <User size={20} className="mr-2 text-blue-500" />
                  Connect With Me
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => openSocialMedia("https://www.linkedin.com/in/saad-es-safryouy-171930176/")}
                    className="flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-200"
                  >
                    <Linkedin size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-800 dark:text-gray-200">LinkedIn</span>
                  </button>
                  <button 
                    onClick={() => openSocialMedia("https://github.com/maz-s3d3")}
                    className="flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-all duration-200"
                  >
                    <Github size={20} className="mr-2 text-gray-800 dark:text-gray-300" />
                    <span className="text-gray-800 dark:text-gray-200">GitHub</span>
                  </button>
                  <button 
                    onClick={() => openSocialMedia("https://x.com/MrDarkn70829936")}
                    className="flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-all duration-200"
                  >
                    <Twitter size={20} className="mr-2 text-blue-400" />
                    <span className="text-gray-800 dark:text-gray-200">Twitter</span>
                  </button>
                  <button 
                    onClick={openWhatsApp}
                    className="flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 transition-all duration-200"
                  >
                    <MessageSquare size={20} className="mr-2 text-green-600 dark:text-green-400" />
                    <span className="text-gray-800 dark:text-gray-200">WhatsApp</span>
                  </button>
                </div>
              </div>
              
              {/* Call to Action Card - New */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
                <h4 className="font-bold text-lg mb-2">Looking for a developer?</h4>
                <p className="mb-4 text-white/80">I'm available for freelance projects and full-time positions.</p>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg w-full hover:bg-blue-50 transition-colors duration-200"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}