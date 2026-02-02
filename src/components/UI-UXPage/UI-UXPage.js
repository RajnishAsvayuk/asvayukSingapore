"use client";
import React from "react";
import Image from "next/image";
import seoBanner from "@/assets/Images/c18.webp";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
import work2 from "@/assets/Images/larawk3.jpg";
import container from "@/assets/Images/container.webp";
import planning from "@/assets/Images/planning.webp";
import pen from "@/assets/Images/pen.webp";
import development from "@/assets/Images/development.webp";
import test from "@/assets/Images/test.webp";

import HeroServices from "@/components/HeroServices/HeroServices";
import { Card, Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";

const UIUXPage = () => {
  return (
    <>
       <main>
        <HeroServices
          home={"Home"}
          pageParent={"Design"}
          pageName={"UI/UX Design"}
          pageHeading={"Leading UI/UX Specialists Driving Digital Excellence in Singapore"}
          pagePara={
            "In today's fast-paced digital landscape, a captivating user interface (UI) blended with a frictionless user experience (UX) is the cornerstone of any successful Singaporean enterprise. At Layerex, we excel at delivering human-centric, high-converting digital designs. Our team creates sophisticated interfaces tailored to the unique behavioral trends of the SG market, ensuring your brand achieves peak engagement and operational success."
          }
          pageImg={seoBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-section">
          <div className="">
            <Container>
              <div className="main-bg p-3">
                <div className="tool-heading py-5">
                  <h2 className="conclusion_title mb-2">
                    Elevating E-Commerce Performance through Strategic Design
                  </h2>
                  <div>
                    <p className="text-white lh-lg fs-6 pt-3">
                      We recently transformed a multi-vendor retail platform for a major Singaporean client, integrating hyper-intuitive navigation and secure, localized payment flows. This resulted in a significant boost in user retention and a total overhaul of their digital growth trajectory.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2 className="px-5 mx-5">
                Our Comprehensive UI/UX Design Suite in Singapore
              </h2>
              <p className="mt-3 pb-3">
                Layerex offers a full spectrum of creative and analytical design services to help businesses across Singapore dominate their digital niche: 
              </p>
            </div>
            <div>
              <Row className="gy-4">
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service1}
                    altText="Top UI UX development companies in Singapore"
                    cardHeading="Mobile-First Experience Engineering"
                    cardPara="We architect mobile app interfaces that prioritize speed and ease of use, ensuring your Singaporean users enjoy a seamless journey from the first tap to the final conversion."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service2}
                    altText="Affordable UI UX design company in Singapore"
                    cardHeading="Responsive Web Design Hub"
                    cardPara="Our studio builds visually immersive and adaptive websites optimized for the diverse device landscape in Singapore, ensuring a premium look on both desktop and mobile."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service3}
                    altText="Best UI UX designers in Singapore"
                    cardHeading="Strategic UX Consultancy SG"
                    cardPara="Get expert guidance on refining your digital product’s flow. Our consultants use data-driven insights to enhance user satisfaction and align your design with local market demands."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="Custom UI UX solutions in Singapore"
                    cardHeading="Conversion-Led E-Commerce Design"
                    cardPara="We design high-performance online storefronts that streamline the path to purchase, a critical factor for thriving in Singapore’s competitive e-retail sector."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="User experience design company Singapore"
                    cardHeading="End-to-End Design Agency Services"
                    cardPara="From deep-dive user research and interactive prototyping to final visual polish, we provide a holistic design journey that guarantees measurable results."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="Mobile app UI UX development Singapore"
                    cardHeading="Seamless Checkout & UI Optimization"
                    cardPara="We focus on the fine details of the user journey, creating intuitive navigation and frictionless checkout experiences that maximize your sales potential."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className="ui-ux-projects-section py-4 bg-section">
          <div className="container py-4">
            <div className="text-center Experienceg_title">
              <h2 className="text-white">
                Transform Your Digital Experience with the Best UI/UX Designers
                in Singapore
              </h2>
            </div>

            <div className="row mt-5 pt- pb-3">
              <div className="col-md-12">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      UI/UX Design Boosts E-Commerce Success
                    </h3>
                    <p className="project-description">
                      UI/UX Design Boosts E-Commerce Success in SG: We developed
                      a robust multi-vendor E-commerce platform for a retail
                      client in Singapore, integrating features like real-time
                      inventory updates, secure payment gateways, and seamless
                      customer tracking, resulting in significant user
                      satisfaction and growth.
                    </p>
                  </div>
                  <div className="project-image">
                    <Image
                      src={work2}
                      alt="Top UI/UX development companies in Singapore"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <KeyPointSection
          keyHeading="The Business Impact of Superior UI/UX in Singapore"
          // keyPara={
          //   <>
          //     A well-structured UI/UX design plays a crucial role in the success
          //     of any digital platform. Here's why investing in UI/UX design
          //     services in Singapore can transform your business:
          //   </>
          // }
          keyPoint1="Intensified User Loyalty: Hook your Singaporean audience with meaningful, fluid interactions."
          keyPoint2="Peak Conversion Performance: Design flows engineered to turn visitors into long-term customers."
          keyPoint3="Fortified Brand Authority: Establish market trust with professional, world-class digital aesthetics."
          keyPoint4="Reduced Bounce Rates: Keep users engaged with a logical, effortless, and fast-loading digital path."
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            check1: "UI UX development company in Singapore",
            check2: "Custom UI UX solutions in Singapore",
            check3: "User experience design company Singapore",
            check4: "Mobile app UI UX development Singapore",
            check5: "Best UI UX designers in mohali",
            Group105518: "Affordable UI UX design company in Singapore",
          }}
        />

        <Experience
          expTitle="Why Partner with Layerex for UI/UX Innovation?"
          ExpPara="If you're searching for top UI/UX development companies in Singapore, here's why we stand out:"
          point1="Elite Local Talent"
          pointPara1="Our designers possess a deep understanding of Singaporean user preferences and evolving 2026 design trends."
          point2="Future-Ready Methodology"
          pointPara2="We merge the latest creative tech with proven psychological principles to build interfaces that perform flawlessly."
          point3="High-Value Creative Solutions"
          pointPara3="We deliver premium design quality at competitive rates, ensuring you get the best ROI for your project in the SG region."
          point4="Bespoke, Result-Oriented Design"
          pointPara4="No templates—just custom-built experiences designed to solve your specific business challenges."
          altTags={{
            group1: "Top UI UX development companies in Singapore",
            group2: "Affordable UI UX design company in Singapore",
            group3: "Mobile app UI UX design Singapore",
            group4: "UI UX consulting services Singapore",
            mockups: "Website UI UX design company in Singapore",
            whiteLogo: "Best UI UX designers in Singapore",
          }}
        />

        <section className="bg-section">
          <Container className="process_container">
            <Row className="d-flex flex-column text-center">
              <div className="main-bg w-100">
                <div className="inside-main py-5">
                  <h1>Our Strategic 5-Step Design Framework</h1>
                  <div>
                    {/* <p className="text-white fs-5 pt-2 pb-4">
                      Our approach to UI/UX design follows a strategic and
                      user-centered methodology:
                    </p> */}
                  </div>
                  <Row className="curly-img curley-img mt-2">
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image
                          src={container}
                          alt="Affordable UI/UX design company in Singapore"
                        />
                        <h6 className="mt-3">Discovery & User Analysis</h6>
                        <p className="text-light">
                          Identifying your audience’s core needs to build a solid design foundation.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image
                          src={planning}
                          alt="Mobile app UI/UX design Singapore"
                        />
                        <h6 className="mt-3">
                         Architecture & Wireframing{" "}
                        </h6>
                        <p className="text-light">
                          Mapping out a logical structural flow to ensure intuitive navigation.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image
                          src={pen}
                          alt="UI/UX consulting services Singapore"
                        />
                        <h6 className="mt-3">
                          Interactive Prototyping
                        </h6>
                        <p className="text-light">
                          Developing functional models to visualize the experience before final build.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image
                          src={development}
                          alt="Website UI/UX design company in Singapore"
                        />
                        <h6 className="mt-3">User Validation & Feedback</h6>
                        <p className="text-light">
                          Gathering real-world insights to fine-tune the interface for maximum impact.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image
                          src={test}
                          alt="UI/UX development agency in Singapore"
                        />
                        <h6 className="mt-3">Final High-Fidelity Launch</h6>
                        <p className="text-light">
                          Crafting a polished, high-performance visual product that reflects your brand’s excellence.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <Industry />
        {/* <ServicesCaseStudy /> */}
      </main>
    </>
  )
}

export default UIUXPage;
