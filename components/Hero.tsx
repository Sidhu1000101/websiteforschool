'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const Hero = ({
  title,
  subtitle,
  description,
  buttonText = 'Learn More',
  buttonLink = '/about',
  backgroundImage = '/hero-bg.jpg',
}: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-4 text-primary-100">
              {subtitle}
            </p>
            {description && (
              <p className="text-lg text-primary-100 mb-8 max-w-2xl">
                {description}
              </p>
            )}
            <a
              href={buttonLink}
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              <span>{buttonText}</span>
              <ArrowRight size={20} />
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="/hero-image.png"
                alt="School Building"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
