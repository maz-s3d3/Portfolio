import { useState, useEffect } from "react";
import { Mail, User, MessageCircle, Send, CheckCircle, Clock } from "lucide-react";

export default function ContactForm({ theme, reversetheme }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [emailError, setEmailError] = useState(null);
  
  // Add state for received messages
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
    // In a real application, you would fetch this data from your server or API
    const mockReceivedMessage = {
      name: "othman",
      email: "othmanrmaili@gmail.com",
      message: "czdcjnkzdc",
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
    e.preventDefault();
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
        // In a real app, you wouldn't do this as the recipient would get the email
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

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold text-${reversetheme} text-center mb-12`}>
          Contact Me
        </h2>
        
        <div className={`max-w-md mx-auto transition-all duration-500 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         
          
          {/* Contact Form */}
          <div className={`p-8 bg-${reversetheme} rounded-lg shadow-xl`}>
            <div className={`flex items-center justify-center mb-6 text-${theme}`}>
              <MessageCircle size={28} className="mr-2" />
              <h3 className="text-2xl font-semibold">Get In Touch</h3>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
                <h4 className={`text-xl font-semibold text-${theme} mb-2`}>Message Sent!</h4>
                <p className="text-gray-600">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {emailError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{emailError}</span>
                  </div>
                )}
                
                {/* Name Field */}
                <div>
                  <label className={`block text-sm font-medium text-${theme} mb-1`}>Name</label>
                  <div className="relative">
                    <User className={`absolute left-3 top-3 text-${theme} opacity-70`} size={18} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-2 pl-10 border text-${theme} rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : `border-${theme} border-opacity-20`} bg-transparent`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className={`block text-sm font-medium text-${theme} mb-1`}>Email</label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-3 text-${theme} opacity-70`} size={18} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 pl-10 border rounded-md focus:outline-none text-${theme} focus:ring-2 ${errors.email ? 'border-red-500' : `border-${theme} border-opacity-20`} bg-transparent`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label className={`block text-sm font-medium text-${theme} mb-1`}>Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md text-${theme} focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500' : `border-${theme} border-opacity-20`} bg-transparent`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-${theme} text-${reversetheme} p-3 rounded-md transition-all hover:opacity-90 flex items-center justify-center gap-2 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {submitting ? (
                    <>Processing <span className="animate-pulse">...</span></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className={`mt-8 p-6 bg-${reversetheme} rounded-lg shadow-lg text-${theme}`}>
            <h4 className="font-bold text-lg mb-4">Other ways to reach me:</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-3" />
                <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-3" />
                <span>OFPPT, Morocco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}