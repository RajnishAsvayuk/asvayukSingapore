"use client";
import React from "react";
import Image from "next/image";
import woocomerceBanner from "@/assets/Images/banners-33-1.webp";
import Group_558 from "@/assets/Images/Group-558.webp";
import Group_168 from "@/assets/Images/Group-168.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Container, Row } from "react-bootstrap";
import Link from "next/link";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Feature from "@/components/FeatureSec/Feature";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";


const WoocommercePage = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"WooCommerce Development"}
          pageHeading={"Elevate Your Retail Game with Custom WooCommerce Engineering"}
          pagePara={
            "We build more than just stores; we create high-performance WordPress ecosystems. From boutique brands to enterprise retailers, Layerex delivers the technical edge needed to dominate the Singaporean market."
          }
          pageImg={woocomerceBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        {/* <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2>
                  We ensure <br />
                  <span style={{ color: "#249f81" }}> WooCommerce Development</span>
                  <br />
                  best Practices
                </h2>
                <div className="woocomerce-imgs d-flex justify-content-center d-none d-md-block">
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
                </div>
              </div>
              <div className="woocomerce-buttons d-flex flex-column flex-md-row justify-content-center gap-3 text-center">
                <Link href="#">
                  <span>
                    Responsiveness <br />
                    Web Designs
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    Mobile Friendly &amp;
                    <br />
                    Optimized
                  </span>
                </Link>
              </div>
            </Row>
          </Container>
        </section> */}

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>
                  Our WooCommerce Mastery
                </h2>
                <p className="mt-3">
                  Technical precision for every stage of your e-commerce journey.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Website Design
"
                      cardHeading="Bespoke Development

"
                      cardParaGraph={
                        <>
                          Moving beyond templates to build original, scalable digital storefronts that reflect your brand’s DNA.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="UI/UX Architecture

"
                      cardParaGraph={
                        <>
                          {" "}
                          Designing interfaces that don't just look good but are psychologically mapped to drive Singaporean shoppers to checkout.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="Functional Extensions
"
                      cardParaGraph={
                        <>
                          Custom-coding plugins and API bridges to connect your store with ERPs, CRMs, and local logistics.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="Seamless Data Migration"
                      cardParaGraph="Expertly shifting your legacy data to WooCommerce with zero downtime and preserved SEO rankings."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Mobile Responsive Design
"
                      cardHeading="Speed & Search Visibility"
                      cardParaGraph="Hardened performance tuning to ensure your store passes Core Web Vitals and outranks competitors in local search."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="Reliability & Security

"
                      cardParaGraph="Continuous monitoring and proactive security patching to keep your business running 24/7 without interruption."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <KeyPointSection
          keyHeading={<>Why Smart Retailers Choose WooCommerce</>}
          keyPara={
            <>
              Flexibility meets power. We leverage the open-source nature of WooCommerce to give you total control over your business data and customer experience without monthly subscription "success taxes."
            </>
          }
          // keyPara2={
          //   <>
          //     At <b>Asvayuk Technologies Private Ltd.</b>, we specialize in{" "}
          //     <b>WooCommerce Development Services in Singapore</b>, ensuring
          //     seamless integration,mobile responsiveness, and high-performance
          //     solutions tailored to your business needs.
          //   </>
          // }
          keyPoint1="Ownership of Data & Platform"
          keyPoint2="Native Mobile Optimisation"
          keyPoint3="Regional Payment Versatility"
          keyPoint4="Enterprise-Grade Reliability"
          // hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Book a Technical Deep-Dive"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Feature
          featureheading="Features of WooCommerce"
          featurepoint1="Flexibility and Customization"
          featurepoint2="Wide Range of Extensions"
          featurepoint3="Mobile Responsiveness"
          featurepoint4="Robust Inventory Management"
          featurepoint5="Secure Payment Processing"
        />

        <Experience
          expTitle={
            <>
              What Sets Our Engineering Apart?
            </>
          }
          ExpPara={
            <>
             We focus on the architecture that supports your growth, not just the pixels on the screen.
            </>
          }
          point1="Code Integrity



"
          pointPara1={
            <>
              We write clean, lightweight PHP that ensures your site remains fast as you scale.
            </>
          }
          point2="Conversion Intelligence"
          pointPara2={
            <>
              Every element we build is tested against real-world user behavior in the SG market.
            </>
          }
          point3="Boutique Support


"
          pointPara3={
            <>
              You work directly with senior architects who understand your 2026 business milestones.
            </>
          }
          point4="Transparent Value

"
          pointPara4={
            <>
              High-end results without the hidden costs of proprietary SaaS platforms.
            </>
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

        <Process
          heading="Our Vision: Democratising High-End E-commerce
"
          para="At Layerex, we believe every Singaporean business deserves a world-class digital storefront. Our mission is to combine the flexibility of WordPress with enterprise-grade engineering to help you scale without limits.
"
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Discovery"
          col1para="Analysing your market position and technical requirements.
"
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Prototyping
"
          col2para="Crafting high-conversion wireframes and user flows.
"
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Development
"
          col3para="Engineering your store with a focus on security and speed.

"
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Validation
"
          col4para="Rigorous stress-testing across all devices and browsers.

"
          col5Img={AppImages.processImg.test}
          col5Alt="Responsive web development Singapore"
          col5head="Comprehensive QA & Testing

"
          col5para="Delivering bug-free, high-performance applications through thorough testing, validation, and continuous improvement."
        />

        <Industry />
        {/* <ServicesCaseStudy /> */}

        <section className="bg-section">
          <Container>
            <div className="main-bg p-3">
              <div className="tool-heading py-5">
                <h2 className="conclusion_title mb-2">
                 Launch Your WooCommerce  <br />Store Today!
                </h2>
                <div>
                  <p className="text-white lh-lg fs-6 pt-3">
                    Searching for a trusted WooCommerce development company in Singapore? Layerex delivers powerful, scalable, and high-performance eCommerce websites tailored for your business growth. Get in touch with us today to explore our expert WooCommerce development services in Singapore and take your online store to the next level.
                    {/* <Link href="https://maps.app.goo.gl/9F1yq767vCJtZM2q7"> WooCommerce Development Services in Singapore.</Link> */}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}

export default WoocommercePage
