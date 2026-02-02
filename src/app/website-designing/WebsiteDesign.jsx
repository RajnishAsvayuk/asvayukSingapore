"use client";
import HeroServices from "@/components/HeroServices/HeroServices";
import React from "react";
import AppImages from "@/config/constant/app.images";
import designingBanner from "@/assets/Images/banners-7-1.webp";
import Group_558 from "@/assets/Images/Group-558.webp";
import Group_168 from "@/assets/Images/Group-168.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import html from "@/assets/Images/html.webp";
import react from "@/assets/Images/react.webp";
import objective from "@/assets/Images/objective.webp";
import kotlin from "@/assets/Images/kotlin.webp";
import swift from "@/assets/Images/js2.webp";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import Experience from "@/components/Experience/Experience";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Process from "@/components/ProcessSection/Process";
import Industry from "@/components/Industry/Industry";
const WebsiteDesign = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Website Development"}
          pageHeading={"Premier Website Development Agency in Singapore"}
          pagePara={
            "Elevate your digital presence with high-performance, conversion-optimised websites. As a leading web design company in Singapore, we blend creative aesthetics with robust engineering to turn your vision into a powerful business asset."
          }
          pageImg={designingBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2>
                  <span style={{ color: "#249f81" }}>
                    {" "}
                    Delivering the Gold Standard of Web Design 
                  </span>
                  <br />
                  in Singapore
                </h2>
                {/* <div className="woocomerce-imgs d-flex justify-content-center d-none d-md-block">
                  <Image
                    src={Group_558}
                    className="position-absolute woocomerce-imgs-left"
                    alt="Website development services in Singapore"
                  />
                  <Image
                    src={Group_168}
                    className="position-absolute woocomerce-imgs-right"
                    alt="website designers Singapore, mohali"
                  />
                </div> */}
              </div>
              <div className="woocomerce-buttons d-flex flex-column flex-md-row justify-content-center gap-3 text-center">
                <Link href="#">
                  <span>
                    Adaptive Responsive  <br />
                    Layouts
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    Mobile-First  
                    <br />
                    Performance
                  </span>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Comprehensive Web Engineering for Every Industry</h2>
                <p className="mt-3">
                  From agile startups to established enterprises, we provide bespoke web solutions in Singapore that drive measurable results.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Corporate Web Design
"
                      cardHeading="Custom Corporate Web Design
"
                      cardParaGraph={
                        <>
                          Unique brand-aligned interfaces that establish authority and trust in the local market.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="Enterprise E-commerce Architectures
"
                      cardHeading="Enterprise E-commerce Architectures
"
                      cardParaGraph={
                        <>
                          {" "}
                          Scalable online storefronts equipped with secure payment gateways and seamless inventory management for SG retailers.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Performance-Led Static Sites
"
                      cardHeading="Performance-Led Static Sites
"
                      cardParaGraph={
                        <>
                          Ultra-fast, lightweight web presences perfect for portfolios and information-driven business hubs.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Expert Shopify Development
"
                      cardHeading="Expert Shopify Development
"
                      cardParaGraph="Customised Shopify ecosystems designed to maximise ROI and streamline the checkout experience.

"
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Fluid Mobile-First Design
"
                      cardHeading="Fluid Mobile-First Design
"
                      cardParaGraph="Engineering websites that load instantly and interact smoothly on all handheld devices.

"
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Centric Development
"
                      cardHeading="SEO-Centric Development
"
                      cardParaGraph="Every line of code is written with search visibility in mind, ensuring you rank for top local Singapore keywords."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle={<>Your Trusted Partner for Digital Growth in Singapore</>}
          ExpPara={
            <>
              We don’t just build websites; we build engines for business expansion through technical mastery.
            </>
          }
          point1="Scalable Growth Support

"
          pointPara1={
            <>
              Tailored development for rapidly expanding Singaporean companies looking to future-proof their tech stack.
            </>
          }
          point2="End-to-End Lifecycle Management"
          pointPara2={
            <>
              From the initial blueprint to final deployment, we handle every technical hurdle for you.
            </>
          }
          point3="Local Market Expertise:
"
          pointPara3={
            <>
              Deep understanding of the Singapore digital landscape to help local SMEs dominate their niche.
            </>
          }
          point4="Versatile Development Talent"
          pointPara4={
            <>A dedicated team of senior developers proficient in both static architectures and complex dynamic applications.</>
          }
          altTags={{
            group1: "mobile app development company",
            group2: "android app development company",
            group3: "mobile app development companies in Singapore",
            group4: "best app development company",
            mockups: "e commerce app development services",
            whiteLogo: "android application development services",
          }}
        />

        <section className="saas-technology">
          <div className="container">
            <div className="px-5 mx-5">
              <div className="saas-technology-heading text-center">
                <h2>
                  Our Arsenal of Powerful Tech Stack To Fuel Your Mobile App
                </h2>
              </div>
              <div className="row pt-5 text-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={html}
                      alt="Website development company Singapore and mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>HTML/CSS</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={react}
                      alt="Website development services in Singapore"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>React </h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={objective}
                      alt="website designers Singapore, mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Objective-C</h5>
                  </div>
                </div>
              </div>
              <div className="row pt-5 text-center justify-content-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={kotlin}
                      alt="website development company mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Kotlin</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image src={swift} alt="web development agency Singapore" />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Java Script</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <ServicesCaseStudy /> */}

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>
                  {" "}
                  The Top-Rated 
                  <span style={{ color: "#249f81" }}>
                    {" "}
                    Web Developers in Singapore
                  </span>
                </h2>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Technical Mastery
"
                      cardHeading="Technical Mastery
"
                      cardParaGraph={
                        <>
                          Our "digital wizards" utilise React, Angular, and Node.js to create high-speed, interactive experiences tailored to your goals.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="Strategic Investment
"
                      cardHeading="Strategic Investment
"
                      cardParaGraph={
                        <>
                          {" "}
                          A professional website is your #1 sales tool. We focus on enhancing credibility and user retention to give you a competitive edge.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Localised Support
"
                      cardHeading="Localised Support
"
                      cardParaGraph="Contact our Singapore web consultancy today for a transparent, result-oriented approach to your next digital project.

"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Process
          heading="Method of Specialisation

"
          para="Our team of expert website developers plan, design, develop, test, optimize, and launch website that redefine user experiences.
"
          col1Img={AppImages.processImg.container}
          col1Alt="Strategic Blueprinting
"
          col1head="Strategic Blueprinting
"
          col1para="Crafting a roadmap based on user-centric design principles.

"
          col2Img={AppImages.processImg.planning}
          col2Alt="Digital Consulting"
          col2head="Digital Consulting
"
          col2para="Expert guidance to refine your concept into a market-ready product.

"
          col3Img={AppImages.processImg.pen}
          col3Alt="UI/UX Synchronisation"
          col3head="UI/UX Synchronisation"
          col3para="Merging stunning visuals with intuitive user journeys."
          col4Img={AppImages.processImg.development}
          col4Alt="Advanced Engineering"
          col4head="Advanced Engineering
"
          col4para="Building robust, scalable, and secure web applications.

"
          col5Img={AppImages.processImg.test}
          col5Alt="Rigorous QA & Launch"
          col5head="Rigorous QA & Launch

"
          col5para="Intensive testing to ensure a bug-free, high-performance debut.

"
        />

        <Industry />
      </main>
    </>
  );
};

export default WebsiteDesign;
