"use client";
import React from "react";
import Image from "next/image";
import hospitalBanner from "@/assets/Images/hosImg.png";
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

const hospital = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Products"}
          pageName={"Hospital Management Software"}
          pageHeading={"Expert Hospital Management Software in Singapore"}
          pagePara={
            "Asvayuk Technologies provides advanced hospital management software solutions in Singapore, offering highly customizable and scalable systems to optimize administrative processes and enhance patient care efficiency."
          }
          pageImg={hospitalBanner}
          pageAlt={"Hospital Management Software in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                LEADING HOSPITAL MANAGEMENT SOFTWARE SOLUTIONS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies offers reliable hospital management systems
                in Singapore. Our solutions are tailored for hospitals and
                clinics to help manage patient data, billing, scheduling, and
                more.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Custom Healthcare Solutions">
                      Custom Healthcare Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Patient Management Systems">
                      Patient Management Systems
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Billing and Invoice Management">
                      Billing and Invoice Management
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Doctor Scheduling Solutions">
                      Doctor Scheduling Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Real-Time Patient Tracking">
                      Real-Time Patient Tracking
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Patient-Doctor Communication Tools">
                      Patient-Doctor Communication Tools
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Healthcare Data Security Solutions">
                      Healthcare Data Security Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Hospital App UI/UX Design">
                      Hospital App UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Hospital Management System Security Features"
                    >
                      Hospital Management System Security Features
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
              <h2>Hospital Management Software Solutions We Offer</h2>
              <p>
                Asvayuk Technologies provides end-to-end hospital management
                software development services in Singapore, focusing on
                automating hospital operations and enhancing communication
                between staff, patients, and administrators.
              </p>
            </div>

            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Custom Hospital Management Software Singapore"
                    cardHeading="Custom Hospital Management Software"
                    cardPara="Tailor-made software designed to meet the unique needs of your hospital or clinic."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Patient & Staff Management Singapore"
                    cardHeading="Patient & Staff Management"
                    cardPara="Seamlessly manage patient and staff data to improve healthcare service quality."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Real-Time Communication Tools Singapore"
                    cardHeading="Real-Time Communication Tools"
                    cardPara="Integrate communication tools for efficient interaction between doctors, staff, and patients."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Billing & Payment Management Singapore"
                    cardHeading="Billing & Payment Management"
                    cardPara="Automate billing, track payments, and generate invoices with ease."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Appointment Scheduling Software Singapore"
                    cardHeading="Appointment Scheduling & Management"
                    cardPara="Efficient scheduling tools for doctors, patients, and hospital staff."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Medical Records Management Singapore"
                    cardHeading="Medical Records & Data Management"
                    cardPara="Manage electronic medical records securely, improving data access and protection."
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
                BENEFITS OF ASVAYUK'S HOSPITAL MANAGEMENT SOFTWARE{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies provides hospitals in Singapore with top
                hospital management software solutions, offering unmatched
                features for efficient healthcare operations and improved
                patient care.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Efficient Hospital Management Software">
                      Efficient Hospital Management Software
                    </a>
                  </li>
                  <li>
                    <a href="#" title="User-Friendly Interface for Hospitals">
                      User-Friendly Interface
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Customizable Hospital Management Features"
                    >
                      Customizable Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Mobile Compatibility">
                      Mobile Compatibility
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Comprehensive Patient Data Management">
                      Comprehensive Patient Data Management
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Secure Payment Integration">
                      Secure Payment Integration
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Advanced Reporting Features">
                      Advanced Reporting Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Real-Time Updates and Notifications">
                      Real-Time Updates and Notifications
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Online Appointment Management">
                      Online Appointment Management
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Comprehensive Data Security">
                      Comprehensive Data Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="supercharge-section">
          <Container>
            <Row>
              <div className="choice pb-5">
                <h2 className="fw-semibold">
                  Enhance Your Hospital Management with Asvayuk Technologies'
                  Custom Solutions in Singapore
                </h2>
                <p className="pt-2">
                  Empower your hospital with scalable, customizable, and
                  user-friendly management software. Asvayuk Technologies is
                  your trusted partner for optimizing healthcare operations.
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">
                      Tailored Hospital Management Software Solutions:
                    </span>{" "}
                    Custom solutions designed to meet your healthcare facility’s
                    unique needs.
                  </li>
                  <li>
                    <span className="fw-bold h6">Scalable & Robust:</span> Our
                    solutions grow with your institution, ensuring long-term
                    sustainability.
                  </li>
                  <li>
                    <span className="fw-bold h6">
                      Enhanced User Engagement:
                    </span>{" "}
                    A seamless experience for administrators, doctors, staff,
                    and patients.
                  </li>
                  <li>
                    <span className="fw-bold h6">Data Security & Privacy:</span>{" "}
                    We prioritize data security with the latest technologies and
                    standards.
                  </li>
                </ul>
              </div>
            </Row>
          </Container>
        </section>

        <Experience
          expTitle="Why Choose Asvayuk for Hospital Management Software in Singapore?"
          point1="Expert Hospital Management Software Solutions"
          pointPara1="We provide tailor-made solutions for healthcare institutions."
          point2="Innovative & User-Centric Design"
          pointPara2="Our hospital management software is designed for ease of use and efficiency."
          point3="Customizable Features"
          pointPara3="We offer a range of customizable features to fit your specific needs."
          point4="Clear Communication & Support"
          pointPara4="We provide ongoing support and transparent communication throughout the development process."
          altTags={{
            group1: "Best Hospital Management Software in Singapore",
            group2: "Advanced Healthcare Software Solutions in Singapore",
            group3: "Custom Hospital Software Development in Singapore",
            group4: "Secure & Reliable Hospital Management System",
            mockups: "Medical Records & Data Management",
            whiteLogo: "Patient & Staff Management Software",
          }}
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default hospital;
