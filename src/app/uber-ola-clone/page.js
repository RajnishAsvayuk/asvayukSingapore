"use client";
import React from "react";
import Image from "next/image";
import uberBanner from "@/assets/Images/olaUber.png";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Card, Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Experience from "@/components/Experience/Experience";

const uberOla = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Product"}
          pageName={"Uber/Ola Clone App Development"}
          pageHeading={"Uber/Ola Clone App Development Services in Singapore "}
          pagePara={
            "Asvayuk Technologies specializes in developing Uber/Ola clone apps in Singapore. We provide scalable and feature-rich ride-hailing app solutions to meet the growing demands of businesses in the transport and mobility sector."
          }
          pageImg={uberBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                LEADING RIDE-HAILING APP DEVELOPMENT SERVICES
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  {" "}
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies offers reliable Uber/Ola clone app
                development services in Singapore, tailored for businesses
                seeking to launch a feature-rich and user-friendly ride-hailing
                platform.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Uber Clone App Development Singapore">
                      Uber Clone App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom Ride-Hailing Solutions Singapore">
                      Custom Ride-Hailing Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Mobile App Development for Ride-Hailing">
                      Mobile App Development for Ride-Hailing
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Taxi Booking App Development">
                      Taxi Booking App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="On-Demand Ride-Hailing App Development">
                      On-Demand Ride-Hailing App Development
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Ride-Hailing App Monetization">
                      Ride-Hailing App Monetization
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cross-Platform App Development">
                      Cross-Platform App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Ride-Hailing App UI/UX Design">
                      Ride-Hailing App UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Real-Time Ride Tracking Features">
                      Real-Time Ride Tracking Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Admin Panel for Ride-Hailing Apps">
                      Admin Panel for Ride-Hailing Apps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2 className="px-5 mx-5">
                Uber/Ola Clone App Development Services in Singapore
              </h2>
              <p className="mt-3 pb-3">
                At Asvayuk Technologies, we offer a wide range of scalable
                Uber/Ola clone app development services. From feature
                integration to seamless mobile app development, our solutions
                are customized to help you launch a successful ride-hailing
                platform.
              </p>
            </div>

            <div>
              <Row className="gy-4">
                {/* Custom Uber Clone Development */}
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service1}
                    altText="Best Uber/Ola Clone App Developers in Singapore"
                    cardHeading="Custom Uber Clone Development"
                    cardPara="We provide custom development services for Uber clone apps, tailored to your business model and requirements."
                  />
                </Col>

                {/* Mobile Ride-Hailing App Development */}
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service2}
                    altText="Taxi Booking App Development Company Singapore"
                    cardHeading="Mobile Ride-Hailing App Development"
                    cardPara="Our mobile app development services ensure a smooth and seamless user experience for your ride-hailing platform."
                  />
                </Col>

                {/* Cross-Platform App Solutions */}
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service3}
                    altText="Affordable Taxi App Development Services Singapore"
                    cardHeading="Cross-Platform App Solutions"
                    cardPara="Our cross-platform app development ensures your ride-hailing app functions seamlessly on both iOS and Android."
                  />
                </Col>

                {/* Admin Panel Integration */}
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="Uber/Ola Clone Development Company Singapore"
                    cardHeading="Admin Panel Integration"
                    cardPara="We integrate comprehensive admin panel features for easy management of users, drivers, and rides."
                  />
                </Col>

                {/* Real-Time Ride Tracking */}
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="Uber Like App Development for Startups in Singapore"
                    cardHeading="Real-Time Ride Tracking"
                    cardPara="Our app solutions include advanced ride tracking and notifications for both drivers and passengers."
                  />
                </Col>

                {/* On-Demand Ride Booking */}
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="Customizable Taxi App Development for Businesses Singapore"
                    cardHeading="On-Demand Ride Booking"
                    cardPara="We offer on-demand ride-booking features for users, ensuring a smooth and efficient booking experience."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                BENEFITS OF USING ASVAYUK'S CUSTOM RIDE-HAILING SOLUTIONS
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  {" "}
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies provides businesses in Singapore with the
                best ride-hailing app solutions, offering unmatched features for
                better customer experience, increased brand loyalty, and
                scalable growth.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Engaging Ride-Hailing Apps">
                      Engaging Ride-Hailing Apps
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Multi-Device Compatibility">
                      Multi-Device Compatibility
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom App Features">
                      Custom App Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="User-Friendly Interface">
                      User-Friendly Interface
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Scalable Solutions">
                      Scalable Solutions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Real-Time Notifications">
                      Real-Time Notifications
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Ride History and Analytics">
                      Ride History and Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Advanced Payment Integration">
                      Advanced Payment Integration
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Automated Fare Calculation">
                      Automated Fare Calculation
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Driver Management Features">
                      Driver Management Features
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="supercharge-section">
          <div className="container">
            <div className="row">
              <div className="choice pb-5">
                <h2 className="fw-semibold">
                  Supercharge Your Ride-Hailing Business with Asvayuk
                  Technologies' Custom Solutions in Singapore
                </h2>

                <p className="pt-2">
                  Unlock the full potential of your ride-hailing business with
                  our feature-rich, scalable, and user-friendly Uber/Ola clone
                  app solutions. Asvayuk Technologies is your trusted partner
                  for success in the on-demand transportation market.
                </p>

                <ul>
                  <li>
                    <span className="fw-bold h6">
                      Tailored Ride-Hailing Solutions:
                    </span>
                    Custom apps designed to fit your business and customer
                    needs.
                  </li>

                  <li>
                    <span className="fw-bold h6">Scalable & Robust:</span>
                    Our solutions scale as your business grows, ensuring
                    future-proof development.
                  </li>

                  <li>
                    <span className="fw-bold h6">
                      Enhanced User Engagement:
                    </span>
                    Improve customer retention with a seamless and engaging app
                    experience.
                  </li>

                  <li>
                    <span className="fw-bold h6">Secure & Safe:</span>
                    We prioritize app security, protecting both users and
                    drivers with advanced features.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Asvayuk for Uber/Ola Clone App Development in Singapore?"
          point1="Expert On-Demand App Development"
          pointPara1="We create scalable, customizable Uber/Ola clones for your business."
          point2="Innovative & Quality Solutions"
          pointPara2="We deliver top-notch, tech-driven ride-hailing apps."
          point3="Customer-Centric Design"
          pointPara3="Our apps are designed for maximum user engagement."
          point4="Clear Communication & Support"
          pointPara4="We ensure ongoing support and transparent communication."
          altTags={{
            group1: "Best Uber/Ola Clone App Development in Singapore",
            group2: "Taxi Booking App Development in Singapore",
            group3: "Custom Ride-Hailing App Development Singapore",
            group4: "Uber Clone App Developers in Singapore",
            mockups: "Ola Clone App Solutions in Singapore",
            whiteLogo: "On-Demand Taxi App Development in Singapore",
          }}
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default uberOla;
