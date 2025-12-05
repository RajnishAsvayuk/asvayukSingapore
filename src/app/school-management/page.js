"use client";
import React from "react";
import Image from "next/image";
import schoolBanner from "@/assets/Images/schoolM.png";
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

const schoolManagement = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Services"}
          pageName={"School Management Solutions"}
          pageHeading={"School Management in Singapore "}
          pagePara={
            "Asvayuk Technologies specializes in developing comprehensive school management software solutions in Singapore. Our scalable and customizable solutions help educational institutions automate and streamline administrative tasks."
          }
          pageImg={schoolBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                LEADING SCHOOL MANAGEMENT SOLUTIONS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies offers reliable school management solutions
                in Singapore. Our systems are designed to help schools
                efficiently manage student data, exams, schedules,
                communication, and more.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a
                      href="#"
                      title="School Management App Development Singapore"
                    >
                      School Management App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom School Solutions Singapore">
                      Custom School Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Student Management Systems Singapore">
                      Student Management Systems
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Exam and Result Management Singapore">
                      Exam and Result Management
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Timetable and Scheduling Solutions">
                      Timetable and Scheduling Solutions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Real-Time Student Tracking Singapore">
                      Real-Time Student Tracking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Parent-Teacher Communication System Singapore"
                    >
                      Parent-Teacher Communication System
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Online Fee Management Solutions Singapore"
                    >
                      Online Fee Management Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="School App UI/UX Design Singapore">
                      School App UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="School Management System Security Features Singapore"
                    >
                      School Management System Security Features
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
              <h2>School Management Services We Offer in Singapore</h2>
              <p>
                Asvayuk Technologies provides end-to-end school management
                software solutions to automate operations, enhance
                student–teacher communication, and streamline administrative
                workflows in Singapore.
              </p>
            </div>

            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Best School Management Software Company in Singapore"
                    cardHeading="Custom School Management Software"
                    cardPara="We create custom school management solutions tailored to meet your institution's unique needs and goals."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Student & Faculty Management System Singapore"
                    cardHeading="Student & Faculty Management"
                    cardPara="Manage student and faculty data seamlessly to improve academic and administrative efficiency."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Real-Time Communication Tools for Schools Singapore"
                    cardHeading="Real-Time Communication Tools"
                    cardPara="Integrate real-time communication tools for smooth interaction between teachers, students, and parents."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Fee & Payment Management System Singapore"
                    cardHeading="Fee & Payment Management"
                    cardPara="Automated fee collection, payment tracking, and invoice generation to simplify financial operations."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Timetable & Scheduling Software Singapore"
                    cardHeading="Timetable & Scheduling Features"
                    cardPara="Easy-to-manage timetables and scheduling tools for students, teachers, and school staff."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Exam & Result Management System Singapore"
                    cardHeading="Exam & Result Management"
                    cardPara="Efficiently manage exams, results, and grade books to streamline academic processes."
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
                BENEFITS OF ASVAYUK'S SCHOOL MANAGEMENT SOFTWARE{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies provides schools in Singapore with the best
                management software solutions, offering unmatched features for
                efficient school operations, improved student experience, and
                growth.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Efficient School Management Software">
                      Efficient School Management Software
                    </a>
                  </li>
                  <li>
                    <a href="#" title="User-Friendly Interface for Schools">
                      User-Friendly Interface
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Customizable School Management Features">
                      Customizable Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Mobile Compatibility">
                      Mobile Compatibility
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Comprehensive Student Data Management">
                      Comprehensive Student Data Management
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
                    <a href="#" title="Online Exam Management">
                      Online Exam Management
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
          <div className="container">
            <div className="row">
              <div className="choice pb-5">
                <h2 className="fw-semibold">
                  Supercharge Your School Management System with Asvayuk
                  Technologies' Custom Solutions in Singapore
                </h2>
                <p className="pt-2">
                  Empower your school with our scalable, customizable, and
                  user-friendly school management software. Asvayuk Technologies
                  is your trusted partner for optimizing educational management
                  and ensuring streamlined operations.
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">
                      Tailored School Management Solutions:
                    </span>{" "}
                    Custom solutions designed to meet your school’s unique
                    needs.
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
                    A seamless experience for administrators, teachers,
                    students, and parents.
                  </li>
                  <li>
                    <span className="fw-bold h6">Data Security & Privacy:</span>{" "}
                    We prioritize your data security with the latest
                    technologies and standards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Asvayuk for School Management Software?"
          point1="Expert School Management Solutions"
          pointPara1="We provide tailor-made solutions for educational institutions."
          point2="Innovative & User-Centric Design"
          pointPara2="Our school management software is designed for ease of use and efficiency."
          point3="Customizable Features"
          pointPara3="We offer a range of customizable features to fit your specific needs."
          point4="Ongoing Support & Maintenance"
          pointPara4="We ensure continuous support and regular updates for your software."
          altTags={{
            group1: "Secure & Scalable School Management System",
            group2: "Affordable School Management Software for Institutes",
            group3: "All-in-One School Administration Software",
            group4: "Best School Management Software Solutions",
            mockups: "Advanced School Management Software Solutions",
            whiteLogo: "Student Attendance & Fee Management Software",
          }}
        />

        <ServicesCaseStudy />
        <section className="Industries">
          <div className="container">
            <div className="header-section">
              <h1 className="fw-semibold">
                Our School Management Solutions with Asvayuk
              </h1>
              <p>
                At Asvayuk Technologies, we offer customizable and feature-rich
                school management solutions tailored to your educational
                institution’s needs. Whether you're managing students,
                streamlining fee processes, or improving administrative
                workflows, our solutions deliver a seamless experience for
                staff, teachers, parents, and students.
              </p>
            </div>

            <div className="row pt-3">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                  <h6 className="mb-0">Student Management System</h6>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                  <h6 className="mb-0">Fee Management</h6>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                  <h6 className="mb-0">Class Timetable Management</h6>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                  <h6 className="mb-0">Teacher & Staff Management</h6>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                  <h6 className="mb-0">Communication Portal</h6>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                  <h6 className="mb-0">Examination & Grading System</h6>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                  <h6 className="mb-0">Library Management</h6>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                  <h6 className="mb-0">Reports & Analytics</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default schoolManagement;
