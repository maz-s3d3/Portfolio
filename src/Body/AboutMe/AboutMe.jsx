import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";
import Me from "../../assets/Me5.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="backdrop-blur-md py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          About Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-lg mx-auto">
          Full-stack developer with a passion for building smart, scalable solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden ">
              <img
                src={Me}
                alt="Profile"
                className="max-w-md h-auto object-cover"
              />
              <div className="absolute inset-0 "></div>
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
                I'm ES-SAFRYOUY Saad, a dedicated full-stack developer with strong foundations in both frontend and backend technologies. I’m known for being meticulous, resourceful, and quick to adapt to new challenges. I thrive on solving problems and turning ideas into polished digital experiences.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Brain className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Passion for Learning</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I'm a naturally curious person who embraces lifelong learning. Whether it's mastering a new JavaScript framework, experimenting with microcontrollers, or refining clean code practices, I'm always pushing myself to grow. I enjoy diving deep into both technical details and creative solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Rocket className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Goals & Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                My goal is to become a developer who not only writes quality code but also understands user needs and delivers intuitive solutions. I value teamwork, continuous improvement, and building technology that makes a positive impact. I'm focused, resilient, and always ready for the next challenge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
