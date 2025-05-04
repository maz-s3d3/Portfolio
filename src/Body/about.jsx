import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="backdrop-blur-md py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          About Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-lg mx-auto">
          Passionate developer crafting digital experiences
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/your-image.jpg"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Code2 className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Developer Journey</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Your journey description here...
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Brain className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Passion for Learning</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Your learning philosophy here...
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Rocket className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Goals & Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Your goals and vision here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}