import React from "react";
import BannerImage from "../assets/about-banner.jpg";
import AboutTwo from "../assets/about-second.jpg";
import NavBar from "../components/NavBar";

const AboutUs = () => {
  return (
    <div className="bg-black text-white">
      <NavBar />
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-200">
        <h1 className="text-center text-6xl font-semibold pb-12">About Us</h1>
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed mb-6">
          Founded with a passion for fitness and well-being, NizzFit began as a
          small gym in a local neighborhood. Over the years, we've grown into a
          thriving fitness community known for our dedication to excellence and
          personalized approach to fitness training.
        </p>
        <div className="relative  mx-auto items-center pb-4">
          <img
            src={BannerImage}
            alt="About Us Banner"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-lg leading-relaxed mb-6">
          At NizzFit, we believe in the power of fitness to transform lives.
          Whether you're a beginner or an experienced athlete, our team of
          certified trainers and instructors are here to support you every step
          of the way.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Join us at NizzFit and discover a place where fitness meets community.
          From yoga and strength training to nutrition counseling and group
          classes, we offer a variety of programs tailored to meet your
          individual needs and goals.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our commitment to our members goes beyond the gym floor. We foster a
          supportive environment where everyone, regardless of fitness level,
          feels empowered to pursue their health and wellness goals. Whether
          you're looking to lose weight, build muscle, or simply improve your
          overall well-being, NizzFit provides the tools and motivation you need
          to succeed.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          As a community-focused fitness center, we understand that fitness is
          not just about physical strength, but also mental and emotional
          well-being. That's why we offer holistic wellness programs that
          include mindfulness practices, stress management techniques, and
          nutritional guidance to support your journey to a healthier lifestyle.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-6">
          Our mission at NizzFit is to inspire and empower individuals to lead
          healthier lives through fitness and wellness. We strive to create a
          supportive environment where everyone feels welcome and motivated to
          achieve their personal best.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          By promoting a culture of inclusivity and positivity, we aim to break
          down barriers to fitness and make exercise accessible and enjoyable
          for all. Whether you're young or old, a beginner or a seasoned
          athlete, NizzFit is here to help you reach your full potential and
          live your healthiest life.
        </p>

        <div className="relative  mx-auto items-center pb-4">
          <img
            src={AboutTwo}
            alt="Happy Customers"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-lg leading-relaxed">
          Join us on this journey to better health and fitness. Together, we can
          make positive changes that not only benefit ourselves but also inspire
          those around us to embrace a healthier lifestyle. Welcome to NizzFit,
          where fitness meets community, and every step forward is a step
          towards a better you.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
