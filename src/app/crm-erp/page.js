"use client";
import React from "react";
import Image from "next/image";
import crmBanner from "@/assets/Images/Crm.webp";
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

const crmErp = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Product"}
          pageName={"CRM and ERP Solutions"}
          pageHeading={"CRM and ERP Solutions in Singapore"}
          pagePara={
            "Enhance your business operations in Singapore with Asvayuk Technologies' tailor-made CRM and ERP solutions. We specialize in developing integrated systems that improve customer relationship management, streamline workflows, and provide real-time insights to drive business success."
          }
          pageImg={crmBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                Customized CRM and ERP Solutions{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  by Asvayuk Technologies
                </span>{" "}
                in Singapore
              </h1>
              <p className="powered_php pt-3">
                <strong>Asvayuk Technologies</strong> is a leading provider of
                CRM and ERP solutions in Singapore. Our systems are designed to
                automate processes, improve data management, and optimize
                customer relationships, enhancing business productivity with
                real-time reporting, data analytics, and seamless integration
                with existing tools.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="CRM and ERP Features">
                      CRM and ERP Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ERP System Development">
                      ERP Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="CRM Integration">
                      CRM System Integration
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ERP for Business Automation">
                      ERP for Business Process Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ERP Analytics">
                      ERP Data Analytics
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="CRM for Sales Management">
                      CRM for Sales Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Mobile CRM Solutions">
                      Mobile CRM Systems
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ERP for Inventory Management">
                      ERP for Inventory Control
                    </a>
                  </li>
                  <li>
                    <a href="#" title="CRM Security">
                      Secure CRM Systems
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ERP Customization">
                      ERP Development
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
                CRM and ERP Solutions We Offer in Singapore
              </h2>
              <p className="mt-3 pb-3">
                Our team at Asvayuk Technologies provides tailored CRM and ERP
                solutions in Singapore, streamlining business operations,
                improving customer engagement, and automating workflows.
              </p>
            </div>

            <div>
              <Row className="gy-4">
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service1}
                    altText="CRM Development Company in Singapore"
                    cardHeading="CRM Development"
                    cardPara="Develop a fully customized CRM system to manage customer relationships, automate sales, and enhance customer satisfaction."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service2}
                    altText="Best ERP Software Development"
                    cardHeading="ERP for Business Automation"
                    cardPara="Implement an ERP system to automate key business processes, improve efficiency, and integrate all functions into one unified platform."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service3}
                    altText="Affordable CRM & ERP Software Development"
                    cardHeading="CRM and ERP Integration"
                    cardPara="Seamlessly integrate CRM and ERP systems for a holistic view of your business, ensuring streamlined operations and improved data accuracy."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="Sales & Marketing CRM Development Services"
                    cardHeading="Mobile CRM Solutions"
                    cardPara="Equip your sales team with mobile CRM access to manage customer data, track leads, and boost productivity from anywhere."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="Cloud-Based ERP Software Development"
                    cardHeading="ERP for Inventory Management"
                    cardPara="Optimize your supply chain and manage inventory efficiently with a customized ERP system built for your business needs."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="ERP Data Analytics"
                    cardHeading="ERP Data Analytics"
                    cardPara="Leverage real-time ERP data analytics to gain insights, track performance, and make smarter business decisions."
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
                Benefits of{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  CRM and ERP Solutions in Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Investing in CRM and ERP solutions offers multiple benefits for
                businesses in Singapore. Our systems provide advanced
                automation, analytics, and integration to optimize business
                processes and improve decision-making.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="CRM System Customization">
                      CRM Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ERP for Efficiency">
                      ERP for Operational Efficiency
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Sales and Marketing Automation">
                      CRM for Sales and Marketing Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Business Process Automation">
                      ERP for Business Process Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" title="CRM Security Features">
                      Secure CRM Solutions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="ERP System Integration">
                      Seamless ERP Integration
                    </a>
                  </li>
                  <li>
                    <a href="#" title="CRM for Sales Management">
                      CRM for Sales Team Management
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Personalized CRM Solutions">
                      Tailored CRM Systems
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ERP Analytics and Reporting">
                      Advanced ERP Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Scalable ERP Systems">
                      Scalable ERP Solutions
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
                  Transform Your Business in Singapore with Asvayuk's CRM and
                  ERP Solutions
                </h2>
                <p className="pt-2">
                  Leverage powerful CRM and ERP technology to streamline
                  operations, improve customer engagement, and drive business
                  growth. Asvayuk Technologies offers personalized and scalable
                  CRM and ERP solutions tailored to meet your needs.
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">
                      Tailored CRM and ERP Solutions:
                    </span>
                    Development to optimize business operations and improve
                    customer relationship management in Singapore.
                  </li>
                  <li>
                    <span className="fw-bold h6">Scalable and Flexible:</span>
                    Our systems are designed to grow with your business and
                    adapt to your evolving needs.
                  </li>
                  <li>
                    <span className="fw-bold h6">Advanced Data Analytics:</span>
                    Real-time reporting and analytics to help you make
                    data-driven decisions and optimize performance.
                  </li>
                  <li>
                    <span className="fw-bold h6">Security-Focused Design:</span>
                    Robust security features to protect sensitive business data.
                  </li>
                  <li>
                    <span className="fw-bold h6">User-Friendly Interface:</span>
                    Easy-to-use systems that streamline processes and enhance
                    user experience.
                  </li>
                  <li>
                    <span className="fw-bold h6">Post-Launch Support:</span>
                    Ongoing support and maintenance to ensure your systems
                    perform seamlessly.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Experience
          expTitle="Why Choose Asvayuk for CRM and ERP Solutions in Singapore?"
          point1="Proven Expertise"
          pointPara1="Asvayuk offers years of experience delivering tailored CRM and ERP solutions in Singapore that streamline operations and improve customer relationships."
          point2="Quality and Security"
          pointPara2="Our systems are secure, reliable, and optimized to meet your business needs."
          point3="Business-Specific Customization"
          pointPara3="We design solutions that fit your business processes, enhancing efficiency and supporting growth."
          point4="Clear Communication"
          pointPara4="We ensure transparent communication throughout the process, keeping you informed at every stage."
          altTags={{
            group1: "CRM ERP Development Company in Singapore",
            group2: "CRM and ERP Solutions in Singapore",
            group3: "Cloud-Based ERP Software Development",
            group4: "AI-Powered CRM & ERP Solutions",
            mockups: "Enterprise Resource Planning Solutions",
            whiteLogo: "Custom CRM Software Development Services",
          }}
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default crmErp;
