"use client";
import React from "react";
import Image from "next/image";
import zomatoBanner from "@/assets/Images/ZomatoUrbanUp.png";
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

const zomaoUrban = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Services"}
          pageName={"Zomato/UrbanUp Clone"}
          pageHeading={
            "Zomato/UrbanUp Clone App Development Services in Singapore "
          }
          pagePara={
            "Asvayuk Technologies specializes in developing Zomato/UrbanUp clone apps in Chandigarh. Our scalable and feature-packed on-demand food delivery app solutions cater to the ever-growing needs of businesses in the food and logistics sector."
          }
          pageImg={zomatoBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                LEADING FOOD DELIVERY APP DEVELOPMENT SERVICES
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies provides reliable Zomato/UrbanUp clone app
                development services designed for businesses looking to create a
                top-tier food delivery platform with robust functionality and
                seamless user experience.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Zomato Clone App Development">
                      Zomato Clone App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="UrbanUp Clone Solutions">
                      UrbanUp Clone Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="On-Demand Food Delivery App Development">
                      On-Demand Food Delivery App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Restaurant Ordering App Solutions">
                      Restaurant Ordering App Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Food Delivery Platform Development">
                      Food Delivery Platform Development
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Food Delivery App Monetization">
                      Food Delivery App Monetization
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cross-Platform App Development">
                      Cross-Platform App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Food Delivery App UI/UX Design">
                      Food Delivery App UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Real-Time Order Tracking Features">
                      Real-Time Order Tracking Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Admin Panel for Food Delivery Apps">
                      Admin Panel for Food Delivery Apps
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
              <h2>Food Delivery App Development Services We Offer</h2>
              <p>
                Asvayuk Technologies provides end-to-end food delivery app
                development solutions to help businesses launch feature-rich and
                scalable on-demand delivery platforms.
              </p>
            </div>

            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Zomato Clone App Development Company"
                    cardHeading="Custom Zomato/UrbanUp Clone Development"
                    cardPara="We build custom food delivery platforms designed to match your business model and unique requirements."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Mobile Food Delivery App Development Services"
                    cardHeading="Mobile Food Delivery App Development"
                    cardPara="Deliver a smooth and engaging experience with intuitive mobile apps for customers, restaurants, and delivery partners."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Cross-Platform Food Delivery App Solutions"
                    cardHeading="Cross-Platform Solutions"
                    cardPara="Launch your app on both Android and iOS with a unified cross-platform codebase for reduced cost and development time."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Admin Panel for Food Delivery Application"
                    cardHeading="Comprehensive Admin Panel"
                    cardPara="Easily manage restaurants, orders, payments, delivery agents, and analytics from a powerful admin dashboard."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Real-Time Food Delivery Tracking System"
                    cardHeading="Real-Time Order Tracking"
                    cardPara="Our advanced GPS tracking system helps customers and delivery partners track orders in real-time."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="On-Demand Food Delivery Features"
                    cardHeading="On-Demand Delivery Features"
                    cardPara="Enable seamless ordering, scheduling, delivery assignment, payments, and more with on-demand delivery automation."
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
                BENEFITS OF ASVAYUK'S CUSTOM FOOD DELIVERY SOLUTIONS
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  {" "}
                  FOR BUSINESSES
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies offers the most efficient, scalable, and
                user-friendly food delivery app solutions, helping businesses
                grow with enhanced customer loyalty, better engagement, and
                improved market presence.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Engaging Food Delivery Apps">
                      Engaging Food Delivery Apps
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom App Features">
                      Custom App Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Multi-Device Compatibility">
                      Multi-Device Compatibility
                    </a>
                  </li>
                  <li>
                    <a href="#" title="User-Friendly Interfaces">
                      User-Friendly Interfaces
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
                    <a href="#" title="Order History and Analytics">
                      Order History and Analytics
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
                    <a href="#" title="Driver and Restaurant Management">
                      Driver and Restaurant Management
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
                  Supercharge Your Food Delivery Business with Asvayuk
                  Technologies' Custom Solutions
                </h2>
                <p className="pt-2">
                  Unlock the full potential of your food delivery business with
                  our advanced, scalable, and user-friendly Zomato/UrbanUp clone
                  app solutions. Asvayuk Technologies is your trusted partner in
                  the on-demand food delivery market.
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">
                      Tailored Food Delivery Solutions:
                    </span>
                    Custom apps designed for your business and customer needs.
                  </li>
                  <li>
                    <span className="fw-bold h6">Scalable & Robust:</span>
                    Solutions that scale with your business, ensuring
                    future-proof development.
                  </li>
                  <li>
                    <span className="fw-bold h6">
                      Enhanced Customer Engagement:
                    </span>
                    Seamless experiences to improve user retention.
                  </li>
                  <li>
                    <span className="fw-bold h6">Secure & Safe:</span>
                    Prioritizing app security to protect both users and delivery
                    partners.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Asvayuk for Zomato/UrbanUp Clone App Development?"
          point1="Expert On-Demand App Development"
          pointPara1="We create scalable, customizable Zomato/UrbanUp clones for your business."
          point2="Innovative & Quality Solutions"
          pointPara2="We deliver cutting-edge, feature-rich food delivery apps."
          point3="Customer-Centric Design"
          pointPara3="Our apps are designed to enhance user engagement and satisfaction."
          point4="Clear Communication & Support"
          pointPara4="We provide ongoing support and transparent communication throughout the development process."
          altTags={{
            group1: "Affordable Zomato & UrbanClap Clone App Developers",
            group2:
              "End-to-End Mobile App Development for Startups & Enterprises",
            group3: "Custom Zomato-Like App Development Solutions",
            group4: "Scalable Food Delivery App Development",
            mockups: "Multi-Vendor Marketplace App Development Services",
            whiteLogo: "Best Zomato Clone App Development Company",
          }}
        />

        <ServicesCaseStudy />
        <section className="Industries">
          <div className="container">
            <div className="header-section">
              <h1 className="fw-semibold">
                Our Zomato/UrbanUp Clone App Development Solutions
              </h1>
              <p>
                At Asvayuk Technologies, we specialize in customizable and
                feature-rich Zomato/UrbanUp clone app solutions, designed to
                meet your business needs in the food delivery industry. Whether
                you're launching a food delivery platform, restaurant ordering
                system, or a complete on-demand service, our clone solutions
                ensure seamless user experiences and efficient order management.
              </p>
            </div>

            <div className="row pt-3">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-2 mb-lg-0 mb-md-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 d-flex justify-content-center align-items-center py-3">
                  <h5 style={{ fontSize: "13px" }} className="mb-0">
                    Food Delivery App
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-2 mb-lg-0 mb-md-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 d-flex justify-content-center align-items-center py-3">
                  <h5 style={{ fontSize: "13px" }} className="mb-0">
                    Restaurant Ordering System
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-2 mb-lg-0 mb-md-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 d-flex justify-content-center align-items-center py-3">
                  <h5 style={{ fontSize: "13px" }} className="mb-0">
                    On-Demand Food Ordering
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-2 mb-lg-0 mb-md-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 d-flex justify-content-center align-items-center py-3">
                  <h5 style={{ fontSize: "13px" }} className="mb-0">
                    Grocery Delivery App
                  </h5>
                </div>
              </div>
            </div>

            <div className="row pt-0 pt-lg-3 pt-md-3">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-2 mb-lg-0 mb-md-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 d-flex justify-content-center align-items-center py-3">
                  <h5 style={{ fontSize: "13px" }} className="mb-0">
                    Food Delivery Clone App
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-2 mb-lg-0 mb-md-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 d-flex justify-content-center align-items-center py-3">
                  <h5 style={{ fontSize: "13px" }} className="mb-0">
                    Restaurant Admin Panel
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-2 mb-lg-0 mb-md-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 d-flex justify-content-center align-items-center py-3">
                  <h5 style={{ fontSize: "13px" }} className="mb-0">
                    Delivery Driver App
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-2 mb-lg-0 mb-md-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 d-flex justify-content-center align-items-center py-3">
                  <h5 style={{ fontSize: "13px" }} className="mb-0">
                    Order Tracking System
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default zomaoUrban;
