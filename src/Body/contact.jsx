import { useState, useEffect } from "react";
import { Mail, User, MessageCircle, Send, CheckCircle, Clock, MessageSquare } from "lucide-react";

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
            
            {/* Right Column - Contact Options (1/3 of the space) */}
            <div className="lg:w-1/3 flex flex-col space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex-1">
                <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">Other ways to reach me:</h4>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Mail size={18} className="mr-3 text-blue-500" />
                    <a href="mailto:your.email@example.com" className="hover:underline hover:text-blue-500 transition-colors">your.email@example.com</a>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <User size={18} className="mr-3 text-blue-500" />
                    <span>OFPPT, Morocco</span>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Button Card */}
              <div 
                onClick={openWhatsApp} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-center cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-green-500 text-white p-4 rounded-full flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-white">WhatsApp Me</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Quick response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}