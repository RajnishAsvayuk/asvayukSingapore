"use client";
import React from "react";
import Image from "next/image";
import multiVendorBanner from "@/assets/Images/EcomImg.png";
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

const multiVendor = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Services"}
          pageName={"Multi-Vendor E-commerce"}
          pageHeading={
            "Expert Multi-Vendor E-commerce Development in Singapore"
          }
          pagePara={
            "Build a successful multi-vendor e-commerce platform with Asvayuk Technologies in Singapore. We offer customized solutions to streamline vendor management, optimize online sales, and create a seamless shopping experience for your business."
          }
          pageImg={multiVendorBanner}
          pageAlt={"Multi-Vendor E-commerce Development in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                MULTI-VENDOR E-COMMERCE SOLUTIONS BY ASVAYUK TECHNOLOGIES{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies provides expert multi-vendor e-commerce
                solutions for businesses in Singapore. Our platforms support
                seamless vendor management, enhance user experiences, and
                optimize sales channels.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Multi-Vendor Marketplace Features">
                      Multi-Vendor Marketplace Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="E-commerce Platform Development">
                      E-commerce Platform Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Vendor Management System">
                      Vendor Management System
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Payment Gateway Integration">
                      Payment Gateway Integration
                    </a>
                  </li>
                  <li>
                    <a href="#" title="E-commerce Analytics">
                      E-commerce Analytics
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Mobile App Development">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Product Catalog Management">
                      Product Catalog Management
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Order Management System">
                      Order Management System
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Secure E-commerce Solutions">
                      Secure E-commerce Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="E-commerce Automation Services">
                      E-commerce Automation Services
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
              <h2>Multi-Vendor E-commerce Development Services We Offer</h2>
              <p>
                Asvayuk Technologies delivers end-to-end multi-vendor e-commerce
                development services in Singapore, focusing on scalable,
                secure, and user-friendly platforms for both vendors and
                customers.
              </p>
            </div>

            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Multi-Vendor Platform Development Singapore"
                    cardHeading="Multi-Vendor Platform"
                    cardPara="Develop a unique multi-vendor platform tailored to your business needs, including vendor management, product listings, and payment processing."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Vendor Management System Singapore"
                    cardHeading="Vendor Management System"
                    cardPara="Efficiently manage multiple vendors, their products, and orders on a centralized platform to streamline operations."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Secure Payment Integration Singapore"
                    cardHeading="Secure Payment Integration"
                    cardPara="Ensure a secure shopping experience with seamless payment gateway integration supporting multiple methods."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Mobile-Friendly E-commerce Singapore"
                    cardHeading="Mobile-Friendly E-commerce"
                    cardPara="Offer a responsive and mobile-friendly platform to enhance the shopping experience across all devices."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Product Catalog Management Singapore"
                    cardHeading="Product Catalog Management"
                    cardPara="Easily organize, manage, and update product listings to ensure accurate and updated information."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Analytics & Insights Singapore"
                    cardHeading="Analytics & Insights"
                    cardPara="Gain actionable insights with analytics tools that track performance, sales, and customer behavior to optimize your platform."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default multiVendor;
