import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  UserGroupIcon,
  PhoneIcon,
  ChartBarIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  useEffect(() => {
    document.title = "LearnHub | Specialized Learning Support";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1E1E1E] transition-colors duration-300">
      {/* Hero Section with Purple Gradient */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#800080] to-[#4B0082] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Unlock Your <span className="text-[#FFD700]">Learning Potential</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Specialized support for dyslexia and ADHD to help you thrive in education and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/providers" 
                  className="px-8 py-4 bg-[#FFD700] hover:bg-[#FFC000] text-[#800080] font-bold rounded-lg text-center transition-all"
                >
                  Explore Services
                </Link>
                <Link 
                  to="/providers" 
                  className="px-8 py-4 border-2 border-white hover:bg-white/10 font-bold rounded-lg text-center transition-all"
                >
                  Meet Our Experts
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-2 transform rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Students learning together" 
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#FFD700] p-4 rounded-xl shadow-lg">
                <AcademicCapIcon className="h-12 w-12 text-[#800080]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "95%", label: "Success Rate", icon: <ChartBarIcon className="h-10 w-10 text-[#800080]" /> },
              { value: "500+", label: "Students Helped", icon: <UserGroupIcon className="h-10 w-10 text-[#800080]" /> },
              { value: "10+", label: "Years Experience", icon: <ShieldCheckIcon className="h-10 w-10 text-[#800080]" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {stat.icon}
                  <span className="ml-4 text-4xl font-bold text-[#800080]">{stat.value}</span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#800080] mb-4">Our Specialized Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored support designed to meet the unique needs of neurodiverse learners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dyslexia Support",
                description: "Evidence-based interventions to improve reading, writing, and comprehension skills.",
                icon: <AcademicCapIcon className="h-12 w-12 text-[#800080]" />
              },
              {
                title: "ADHD Coaching",
                description: "Strategies to enhance focus, organization, and executive functioning skills.",
                icon: <LightBulbIcon className="h-12 w-12 text-[#800080]" />
              },
              {
                title: "Parent Consultation",
                description: "Guidance for families to better support their child's learning journey.",
                icon: <PhoneIcon className="h-12 w-12 text-[#800080]" />
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-[#800080]">
                <div className="mb-6">
                  <div className="bg-[#800080]/10 p-3 rounded-full inline-block">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#800080] mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <Link 
                  to="/" 
                  className="text-[#800080] font-semibold hover:underline flex items-center"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F5F3FF] dark:bg-[#2A1E2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#800080] mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from students and families who've transformed their learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "LearnHub's dyslexia program helped my daughter gain confidence in reading. She's now performing at grade level for the first time!",
                author: "Sarah M., Parent"
              },
              {
                quote: "The ADHD coaching gave me practical tools to stay organized and focused in college. I went from barely passing to making the Dean's List.",
                author: "James T., Student"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-md">
                <div className="mb-6 text-[#800080]">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
                <p className="font-semibold text-[#800080]">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#800080] to-[#4B0082]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Learning?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Our team of specialists is here to help you or your child succeed. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-[#FFD700] hover:bg-[#FFC000] text-[#800080] font-bold rounded-lg transition-all"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all"
            >
              Learn About Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-300 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <AcademicCapIcon className="h-8 w-8 text-[#800080]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#800080] to-[#FF00FF] bg-clip-text text-transparent">
                LearnHub
              </span>
            </Link>
            <p className="mt-4 text-black">
              Empowering neurodiverse learners to achieve their full potential.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#800080] mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-black hover:text-white transition-colors">Dyslexia Support</Link></li>
              <li><Link to="/services" className="text-black hover:text-white transition-colors">ADHD Coaching</Link></li>
              <li><Link to="/services" className="text-black hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#800080] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-black hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/providers" className="text-black hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-black hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#800080] mb-4">Connect</h3>
            <div className="flex gap-2 flex-wrap flex-row
            ">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-black hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
            <p className="mt-4 text-black">
              123 Learning St.<br />
              Education City, EC 12345
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}