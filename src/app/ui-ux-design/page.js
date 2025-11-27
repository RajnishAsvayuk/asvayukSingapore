"use client";
import React from "react";
import Image from "next/image";
import seoBanner from "/public/Images/c18.webp";
import service1 from "/public/Images/services1.webp";
import service2 from "/public/Images/services2.webp";
import service3 from "/public/Images/services3.webp";
import service4 from "/public/Images/services4.webp";
import service5 from "/public/Images/services5.webp";
import service6 from "/public/Images/services6.webp";
import Group105518 from "/public/Images/Group-105518.webp";
import work2 from "/public/Images/larawk3.jpg";
import container from "/public/Images/container.webp";
import planning from "/public/Images/planning.webp";
import pen from "/public/Images/pen.webp";
import development from "/public/Images/development.webp";
import test from "/public/Images/test.webp";

import HeroServices from "@/components/HeroServices/HeroServices";
import { Card, Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";

const uiUx = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Design"}
          pageName={"UI/UX Design"}
          pageHeading={"Best UI/UX Designers in Singapore"}
          pagePara={
            "In today’s digital era, an intuitive and visually appealing user interface (UI) combined with a seamless user experience (UX) is essential for any business. At Asvayuk Technologies Private Ltd., we take pride in being one of the best UI/UX designers in Singapore, delivering innovative and user-friendly digital solutions tailored to your business needs."
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
                    Elevate Your Brand with Expert UI/UX Design Solutions in
                    Singapore
                  </h2>
                  <div>
                    <p className="text-white lh-lg fs-6 pt-3">
                      A well-crafted UI/UX design is the key to a successful
                      digital presence. As one of the best UI/UX designers in
                      Singapore, Asvayuk Technologies Private Ltd. is committed
                      to delivering top-notch UI/UX solutions for businesses
                      looking to enhance their online platforms. Contact us
                      today and take your digital experience to the next level!
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
                Our UI/UX Design Services in Singapore
              </h2>
              <p className="mt-3 pb-3">
                At Asvayuk Technologies Private Ltd., we offer a wide range of
                UI/UX design services to cater to different industries and
                business needs.
              </p>
            </div>
            <div>
              <Row className="gy-4">
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service1}
                    altText="Top UI UX development companies in Singapore"
                    cardHeading="Mobile App UI/UX Design Singapore"
                    cardPara="Our team specializes in mobile app UI/UX development in Singapore, ensuring that your app delivers an engaging and effortless user experience. From wireframing to interactive prototypes, we design mobile apps that captivate and convert."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service2}
                    altText="Affordable UI UX design company in Singapore"
                    cardHeading=" Website UI/UX Design Company in Singapore"
                    cardPara="We create responsive, visually stunning, and user-friendly website designs. Our website UI/UX design company in Singapore ensures that your website is optimized for both desktop and mobile users."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service3}
                    altText="Best UI UX designers in Singapore"
                    cardHeading="UI/UX Consulting Services Singapore"
                    cardPara="Looking for expert advice on improving your digital product’s design? Our UI/UX consulting services in Singapore help businesses enhance their UI/UX strategies through research-driven insights and data analysis."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="Custom UI UX solutions in Singapore"
                    cardHeading="Custom UI/UX Solutions in Singapore"
                    cardPara="Our custom UI/UX solutions in Singapore are tailored to meet specific client requirements, ensuring a personalized user experience."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="User experience design company Singapore"
                    cardHeading="UI/UX Development Agency in Singapore"
                    cardPara="As a full-service UI /X development agency in Singapore, we offer end-to-end solutions, including UX research, UI design, prototyping, and testing to deliver the best results."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="Mobile app UI UX development Singapore"
                    cardHeading="E-Commerce UI/UX Design in Singapore"
                    cardPara="We design conversion-focused e-commerce UI/UX for seamless navigation, engaging product displays, and a smooth checkout experience."
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
                      We developed a Laravel-powered multi-vendor eCommerce
                      platform for a retail client, integrating features like
                      real-time inventory updates, secure payment gateways, and
                      customer tracking.
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
          keyHeading="Why UI/UX Design Matters?"
          keyPara={
            <>
              A well-structured UI/UX design plays a crucial role in the success
              of any digital platform. Here’s why investing in UI/UX design
              services in Singapore can transform your business.
              <br />
              <br />
              As a leading UI/UX development company in Singapore, we craft
              engaging designs that improve customer interactions, boost
              conversions, and enhance brand credibility. Whether you need UI/UX
              services for a website, mobile app, or custom software, our expert
              designers ensure a flawless digital journey for your users.
            </>
          }
          keyPoint1="Enhanced User Engagement"
          keyPoint2="Higher Conversion Rates"
          keyPoint3="Brand Credibility"
          keyPoint4="Lower Bounce Rates"
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
          expTitle="Why Choose Asvayuk Technologies Private Ltd. for UI/UX Design?"
          ExpPara="If you're searching for top UI/UX development companies in Singapore, here’s why we stand out:'"
          point1="Experienced Designers"
          pointPara1="Our team comprises highly skilled designers with years of experience in UI/UX design."
          point2="Affordable UI/UX Design Company in Singapore"
          pointPara2="We offer cost-effective UI/UX solutions without compromising on quality."
          point3="Innovative Approach"
          pointPara3="We integrate the latest design trends and technologies to create future-ready solutions."
          point4="Client-Centric Solutions"
          pointPara4="Our UI/UX designs are tailored to meet the unique needs of our clients."
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
                  <h1>How We Ensure Exceptional UI/UX Design</h1>
                  <div>
                    <p className="text-white fs-5 pt-2 pb-4">
                      Our approach to UI/UX design follows a strategic and
                      user-centered methodology:
                    </p>
                  </div>
                  <Row className="curly-img curley-img mt-2">
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image
                          src={container}
                          alt="Affordable UI/UX design company in Singapore"
                        />
                        <h6 className="mt-3">User Research & Analysis</h6>
                        <p className="text-light">
                          Understanding your target audience, their needs, and
                          pain points to create a user-focused design.
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
                          Information Architecture & Wireframing{" "}
                        </h6>
                        <p className="text-light">
                          Structuring content and designing wireframes to ensure
                          seamless navigation and user flow.
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
                          Prototyping & Interaction Design
                        </h6>
                        <p className="text-light">
                          Developing interactive prototypes to visualize
                          functionality before final implementation.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image
                          src={development}
                          alt="Website UI/UX design company in Singapore"
                        />
                        <h6 className="mt-3">User Testing & Feedback</h6>
                        <p className="text-light">
                          Gathering real user insights to refine and optimize
                          the design for the best experience.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image
                          src={test}
                          alt="UI/UX development agency in Singapore"
                        />
                        <h6 className="mt-3">Visual Design & Development</h6>
                        <p className="text-light">
                          Crafting an aesthetically pleasing, high-performing,
                          and responsive UI for a polished final product.
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
        <ServicesCaseStudy />
      </main>
    </>
  );
};

export default uiUx;
