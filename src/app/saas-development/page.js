"use client";
import React from "react";
import Image from "next/image";
import saasBanner from "@/assets/Images/saas.png";
import Group105518 from "@/assets/Images/Group-105518.webp";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import reactNative from "@/assets/Images/react.webp";
import swift from "@/assets/Images/js2.webp";
import php from "@/assets/Images/php.webp";
import react from "@/assets/Images/react.webp";
import java from "@/assets/Images/java.webp";
import google from "@/assets/Images/google.webp";
import rail from "@/assets/Images/rail.webp";
import node from "@/assets/Images/node.webp";
import aws from "@/assets/Images/aws.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Feature from "@/components/FeatureSec/Feature";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import BannerButton from "@/components/BannerBtn/BannerButton";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";

const saasDev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Saas Development"}
          pageHeading={"Top-Tier SaaS Application Engineering in Singapore"}
          pagePara={
            "In the fast-evolving digital era, forward-thinking enterprises are pivoting toward cloud-centric ecosystems to refine operations and elevate user engagement. Layerex, a premier SaaS development partner in Singapore, specializes in architecting high-velocity software solutions tailored for diverse industry verticals. Whether you are launching a disruptive startup platform or scaling an enterprise-grade application, our elite engineering team ensures frictionless deployment, robust security, and continuous platform evolution."
          }
          pageImg={saasBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <Feature
          featurepoint1="Easy To Use"
          featurepoint2="Fully Customized"
          featurepoint3="Feature Rich"
          featurepoint4="Highly Secured"
          featurepoint5="Extremely Affordable"
        />

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Our Proficiency in SaaS Product Development</h2>
                <p className="mt-3">
                  At Layerex, we deliver world-class SaaS engineering services across Singapore, focusing on :
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom SaaS Development  
"
                      cardHeading="Bespoke Enterprise Design & Build"
                      cardParaGraph={
                        <>Tailored cloud environments designed to empower both emerging startups and established corporate leaders.</>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Unified Mobile & Web SaaS Portals"
                      cardParaGraph={
                        <> Cross-platform digital products featuring high-responsiveness and intuitive UI/UX for a global user base.</>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="Scalable Multi-Tenant Architecture"
                      cardParaGraph={
                        <>Robust, secure frameworks engineered to support business growth and handle high-volume user traffic.</>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="Advanced API & System Connectivity"
                      cardParaGraph="Creating a cohesive tech stack through seamless, secure integrations with essential third-party business tools."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Mobile Responsive Design
"
                      cardHeading="Integrated AI & Predictive Analytics"
                      cardParaGraph="Leveraging machine learning to provide actionable, data-driven insights for smarter business decisions."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="Strategic Growth Software Solutions"
                      cardParaGraph="High-performance platforms built to support complex organizational structures and multi-level operational needs."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <KeyPointSection
          keyHeading={<>Why Invest in Modern SaaS Architecture?</>}
          keyPara={
            <>
              Cloud-native SaaS applications provide unparalleled flexibility, data protection, and vertical scalability. By removing the friction of local installations, these platforms allow your clients to access tools via any browser or mobile interface. Across Singapore’s tech landscape, businesses are rapidly transitioning to SaaS models to benefit from cost efficiency and simplified long-term maintenance.
            </>
          }
          keyPoint1="Drastically Reduced Time-to-Market"
          keyPoint2="Frictionless Third-Party Ecosystem Integration"
          keyPoint3="Future-Ready Elastic Scalability"
          keyPoint4="Optimized Total Cost of Ownership (TCO)"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request a Strategic Quote"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <section className="bg-section">
          <Container>
            <div className="main-bg p-3">
              <div className="tool-heading py-5">
                <h2 className="conclusion_title mb-2">
                  Get Started with the Best SaaS App Development Company in
                  Singapore
                </h2>
                <div>
                  <p className="text-white lh-lg fs-6 pt-3">
                    If you’re looking for a SaaS App Maker in Singapore that
                    delivers high-performance solutions, Asvayuk Technologies
                    Private Ltd. is your trusted partner. We specialize in
                    building SaaS applications that enhance productivity,
                    efficiency, and user engagement.
                  </p>
                  <p className="text-white fs-6 pt-1">
                    Contact us today to discuss your project and take your
                    business to the next level!
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Experience
          expTitle={<>Why Choose Asvayuk Technologies for SaaS Development?</>}
          ExpPara={
            <>
              As a SaaS App Development provider in Singapore, Panchkula, and
              Mohali, we prioritize innovation, security, and scalability.
              Here’s why clients trust us :
            </>
          }
          point1="Experienced SaaS Developers"
          pointPara1={<>A skilled team with hands-on experience.</>}
          point2="Advanced Security Measures"
          pointPara2={
            <>Data encryption, secure APIs, and authentication protocols.</>
          }
          point3="Bespoke solutions"
          pointPara3={<>designed to meet your business's unique needs.</>}
          point4="Affordable Pricing"
          pointPara4={<>Cost-effective plans for startups and enterprises</>}
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
                <div className="saas_content col-lg-3 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={php}
                      alt="Website development company Singapore and mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>PHP</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-3 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={reactNative}
                      alt="Website development services in Singapore"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>React Native </h5>
                  </div>
                </div>

                <div className="saas_content col-lg-3 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={java}
                      alt="website designers Singapore, mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>JAVA</h5>
                  </div>
                </div>
                <div className="saas_content col-lg-3 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={google}
                      alt="website designers Singapore, mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Objective-C</h5>
                  </div>
                </div>
              </div>
              <div className="row pt-5 text-center justify-content-center">
                <div className="saas_content col-lg-3 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={rail}
                      alt="website development company mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Kotlin</h5>
                  </div>
                </div>
                <div className="saas_content col-lg-3 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={node}
                      alt="website development company mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Node</h5>
                  </div>
                </div>
                <div className="saas_content col-lg-3 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image src={aws} alt="website development company mohali" />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>AWS</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-3 col-md-4 col-sm-12 col-12">
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

        <Process
          heading="SaaS App Development Process We Follow"
          para="Our trusted SaaS App Development in Singapore follows a structured approach to ensure seamless development and deployment :"
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Requirement Analysis"
          col1para="Understanding your business needs and defining goals."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Planning & Wireframing"
          col2para="Crafting user-friendly UI/UX designs."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Development"
          col3para="Agile development methodologies for robust solutions."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Testing & Quality Assurance"
          col4para="Testing the app for smooth performance, security, and reliability."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Deployment & Maintenance"
          col5para="Launching with continuous support, updates, and scalability."
        />
        <Industry />
        {/* <ServicesCaseStudy /> */}
      </main>
    </>
  );
};

export default saasDev;
