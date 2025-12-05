"use client";
import React from "react";
import Image from "next/image";
import jobPortalBanner from "@/assets/Images/jobPortal.png";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
// import CryptoWalletImg from "@/assets/Images/CryptoWalletImg.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Card, Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Experience from "@/components/Experience/Experience";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";

const jobPortal = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Services"}
          pageName={"Job Portal in Singapore"}
          pageHeading={"Job Portal Solutions in Singapore "}
          pagePara={
            "Asvayuk Technologies offers cutting-edge job portal solutions in Singapore, enabling businesses and job seekers to connect seamlessly. Our platforms are designed to provide an intuitive, efficient, and user-friendly experience for recruitment and hiring needs."
          }
          pageImg={jobPortalBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                Customized Job Portal Solutions{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  by Asvayuk Technologies
                </span>{" "}
                in Singapore
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies specializes in creating job portal
                platforms tailored to the specific needs of employers and job
                seekers in Singapore. Our solutions are designed to streamline
                the hiring process, optimize job search, and improve recruitment
                efficiency.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Job Portal Development">
                      Job Portal Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Automated Recruitment Solutions">
                      Automated Recruitment Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI-Powered Job Portals">
                      AI-Powered Job Portals
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Job Matching Algorithms">
                      Job Matching Algorithms
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Employer Solutions">
                      Employer Solutions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Job Seekers Portal">
                      Job Seekers Portal
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Customizable Job Listings">
                      Customizable Job Listings
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Applicant Tracking System">
                      Applicant Tracking System
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Resume Builder Tools">
                      Resume Builder Tools
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Job Alerts & Notifications">
                      Job Alerts & Notifications
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
                Our Job Portal Solutions in Singapore
              </h2>
              <p className="mt-3 pb-3">
                Asvayuk Technologies offers innovative job portal solutions in
                Singapore, helping businesses hire the right talent while
                offering job seekers a smooth and efficient job search
                experience.
              </p>
            </div>

            <div>
              <Row className="gy-4">
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service1}
                    altText="Job Portal Development Company in Singapore"
                    cardHeading="Custom Job Portal Development"
                    cardPara="Develop job portals tailored to your unique business needs, ensuring effective and efficient recruitment."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service2}
                    altText="AI-Powered Job Matching in Singapore"
                    cardHeading="AI-Powered Job Matching"
                    cardPara="Leverage AI to provide intelligent job matches for both candidates and employers."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service3}
                    altText="Applicant Tracking System in Singapore"
                    cardHeading="Applicant Tracking System"
                    cardPara="Streamline your hiring process with a powerful and automated applicant tracking system (ATS)."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="Resume Builder Tools in Singapore"
                    cardHeading="Resume Builder Tools"
                    cardPara="Enable candidates to create professional resumes directly through your job portal."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="Job Alerts and Notifications Singapore"
                    cardHeading="Job Alerts & Notifications"
                    cardPara="Keep job seekers engaged with instant job alerts and personalized notifications."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="Advanced Analytics for Job Portals in Singapore"
                    cardHeading="Advanced Analytics"
                    cardPara="Use real-time analytics to understand hiring trends and improve recruitment strategies."
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
                Benefits of Job Portal Solutions in Singapore
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies' job portal solutions provide a range of
                benefits in Singapore, including automated job matching, 24/7
                job search availability, real-time job alerts, and seamless
                application management. Our platforms enhance the recruitment
                process, improving efficiency and productivity for both
                employers and candidates.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Automated Job Matching">
                      Automated Job Matching
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI-Driven Job Portals">
                      AI-Driven Job Portals
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Advanced Resume Search">
                      Advanced Resume Search
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Real-Time Job Alerts">
                      Real-Time Job Alerts
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Employer Dashboard">
                      Employer Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Applicant Tracking System (ATS)">
                      Applicant Tracking System (ATS)
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Job Portal Customization">
                      Job Portal Customization
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Job Seekers Dashboard">
                      Job Seekers Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Intuitive Job Search">
                      Intuitive Job Search
                    </a>
                  </li>
                  <li>
                    <a href="#" title="24/7 Job Portal Access">
                      24/7 Job Portal Access
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
                  Supercharge Your Recruitment with Asvayuk Technologies' Job
                  Portal Solutions in Singapore
                </h2>
                <p className="pt-2">
                  Maximize recruitment efficiency and improve job matching with
                  Asvayuk Technologies' advanced job portal solutions in
                  Singapore. Our platforms offer intelligent automation,
                  real-time job alerts, and powerful employer tools to
                  streamline the hiring process.
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">AI Job Matching:</span>{" "}
                    Intelligent systems that match candidates with the right
                    jobs based on skills and experience.
                  </li>
                  <li>
                    <span className="fw-bold h6">Real-Time Job Alerts:</span>{" "}
                    Notify job seekers instantly about job openings that match
                    their profile.
                  </li>
                  <li>
                    <span className="fw-bold h6">Employer Dashboard:</span>{" "}
                    Provide employers with a central dashboard to manage
                    candidates and job applications efficiently.
                  </li>
                  <li>
                    <span className="fw-bold h6">Resume Builder Tools:</span>{" "}
                    Allow job seekers to create professional resumes directly on
                    the portal.
                  </li>
                  <li>
                    <span className="fw-bold h6">
                      Customizable Job Listings:
                    </span>{" "}
                    Customize job listings to suit your business or recruitment
                    needs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Asvayuk for Job Portal Solutions in Singapore?"
          point1="Expertise in AI & Job Portals"
          pointPara1="We specialize in creating intelligent job portals using AI technologies for optimal job matching."
          point2="Advanced Recruitment Tools"
          pointPara2="Our solutions come with advanced recruitment features, including ATS, job alerts, and analytics."
          point3="Tailored Solutions for Your Business"
          pointPara3="We customize job portal solutions to meet your unique recruitment and hiring needs."
          point4="Ongoing Support & Optimization"
          pointPara4="Our team provides continuous support to ensure your job portal performs seamlessly at all times."
          altTags={{
            group1: "Job Search Platform Development Services in Singapore",
            group2: "Advanced Job Board Solutions in Singapore",
            group3: "Custom Job Portal Solutions in Singapore",
            group4: "Job Portal Website & App Development in Singapore",
            mockups: "Top Hiring & Recruitment Software in Singapore",
            whiteLogo: "Online Job Marketplace Development in Singapore",
          }}
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default jobPortal;
