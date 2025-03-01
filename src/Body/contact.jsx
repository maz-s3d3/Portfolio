import { useState } from "react";
import { Mail, User, MessageCircle, Send } from "lucide-react";

export default function ContactForm({theme,reversetheme}) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className={`max-w-md mx-auto p-6 bg-${reversetheme} rounded-lg shadow-lg transition-all`}>
      <h2 className={`text-xl font-semibold text-${theme} mb-4 flex items-center gap-2`}>
        <MessageCircle className={`text-${theme}`} size={24} /> Contact Me
      </h2>

      {successMessage && <p className="text-green-600 text-sm mb-3">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className={`block text-sm font-medium text-${theme}`}>Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className={`block text-sm font-medium text-${theme}`}>Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label className={`block text-sm font-medium text-${theme}`}>Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-${theme} text-${reversetheme} p-2 rounded-md hover:bg-gray-300 transition flex items-center justify-center gap-2`}
        >
          Send Message <Send size={18} />
        </button>
      </form>
    </div>
  );
}
