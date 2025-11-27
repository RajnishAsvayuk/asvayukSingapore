"use client";
import HeroServices from "@/components/HeroServices/HeroServices";
import React from "react";
import AppImages from "@/config/constant/app.images";
import { Container } from "react-bootstrap";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Image from "next/image";
// imgs
import mobileAppBanner from "../../../public/Images/mobileBanner.webp";
import c11 from "../../../public/Images/c11.webp";
import c12 from "../../../public/Images/c12.webp";
import c13 from "../../../public/Images/c13.webp";
import c14 from "../../../public/Images/c14.webp";
import c15 from "../../../public/Images/c15.webp";
import c16 from "../../../public/Images/c16.webp";
import Group105518 from "../../../public/Images/mad.webp";
import html from "../../../public/Images/fltr.webp";
import react from "../../../public/Images/react.webp";
import objective from "../../../public/Images/android.webp";
import kotlin from "../../../public/Images/java.webp";
import swift from "../../../public/Images/swift.webp";
import Process from "@/components/ProcessSection/Process";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";

const mobileApp = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Mobile App Development"}
          pageHeading={"Web Portal Development Singapore"}
          pagePara={
            "In today’s digital era, having a robust and user-friendly web portal is essential for businesses looking to strengthen their online presence. Asvayuk Technologies Private Ltd, a leading web portal development company in Singapore, specializes in building dynamic and highly functional portals tailored to diverse business needs. Whether you require a classified website, an eCommerce platform, or a corporate portal, we deliver customized solutions that boost engagement, streamline operations, and drive business success."
          }
          pageImg={mobileAppBanner}
          pageAlt={"web portal development Singapore"}
        />

        <section className="bg-section pt-2 pb-2">
          <Container>
            <div className="main-bg">
              <div className="tool-heading pt-5 pb-2">
                <h2 className="conclusion_title mb-2">
                  Why Our App Development Service Singapore Stands Out
                </h2>
                <div>
                  <p className="text-white lh-md fs-6 pt-3 text-start pb-2">
                    We are a trusted mobile app development company with a
                    strong presence in Singapore. Our approach blends
                    creativity, advanced technology, and strategic planning to
                    deliver mobile applications that engage users, elevate brand
                    experiences, and accelerate business growth.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Our Core App Development Services</h2>
                <p className="mt-3">
                  At Asvayuk Technologies, we provide end-to-end mobile app
                  development services Singapore that cater to all types of
                  businesses. Here’s a brief overview of our expertise:
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Mobile App Development Services"
                      cardHeading="Custom Mobile App Development Services"
                      cardParaGraph={
                        <>
                          We offer custom mobile app development services in
                          Singapore, crafting tailored solutions that align
                          perfectly with your brand and business goals—delivered
                          by expert mobile app developers committed to top
                          performance and innovation.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="Best Mobile App Development Company In Singapore"
                      cardHeading="iOS App Development"
                      cardParaGraph={
                        <>
                          {" "}
                          Our healthcare app development services are secure,
                          scalable, and HIPAA-compliant. As a leading mobile
                          application company, we build apps for hospitals and
                          wellness platforms that meet medical standards and
                          performance.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="mobile App Developers in Singapore"
                      cardHeading="E-commerce App Development Services"
                      cardParaGraph={
                        <>
                          We provide powerful e-commerce app development
                          services that drive conversions, increase loyalty, and
                          enhance shopping experiences—making us one of the top
                          app making companies for retail and online businesses.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="mobile app development companies in Singapore"
                      cardHeading="Cloud App Development Services"
                      cardParaGraph="Our cloud app development services deliver scalable and secure mobile solutions with real-time data access. Trusted among top mobile software companies, we enable seamless integration across platforms and devices."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Singapore's Leading Mobile App Development Company"
                      cardHeading="Custom Android App Development Services"
                      cardParaGraph="As a skilled android app development company, we deliver custom android app development services using Java and Kotlin for high-performance, reliable Android apps that meet your business goals effectively."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="Singapore's Most Trusted Mobile App Development Company"
                      cardHeading="Mobile Application Development Service"
                      cardParaGraph=" We provide end-to-end mobile application development services—from design to deployment. As a leading mobile app development company in Singapore, we ensure smooth project delivery along with reliable post-launch support and continuous optimization."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <KeyPointSection
          keyHeading={
            <> Why Asvayuk Technologies is Among the Top App Making Companies</>
          }
          keyPara={
            <>
              As a seasoned kotlin app development company, we’ve earned a spot
              among top mobile software companies in Singapore. Our apps are
              known for their intuitive design and flawless performance.
            </>
          }
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={
            <>
              Best <span style={{ color: "#249f81" }}>App Development </span>{" "}
              Company For Diverse Industries
            </>
          }
          ExpPara={
            <>
              We serve clients across industries with our expert team of{" "}
              <b> mobile app developers </b>, delivering custom solutions for
              retail, healthcare, logistics, and more.
            </>
          }
          point1="Mobile Application Company
"
          pointPara1={
            <>
              We build intuitive mobile applications with modern design, secure
              architecture, and seamless functionality across platforms.
            </>
          }
          point2="Android App Development Service"
          pointPara2={
            <>
              We develop secure, high-performance Android apps using Kotlin,
              Java, and the latest frameworks for scalability.
            </>
          }
          point3="Best App Development Services
"
          pointPara3={
            <>
              We’re recognized for delivering reliable, innovative, and timely
              mobile app development services tailored to business needs.
            </>
          }
          point4="Top Mobile Software Companies"
          pointPara4={
            <>
              Ranked among top mobile software companies in Singapore, known for
              performance, design, and business-driven development.
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
                      alt="Mobile app development service chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Flutter</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={react}
                      alt="Software Development Company in Chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>React Native</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={objective}
                      alt="Chandigarh's Most Trusted Mobile App Development Company"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Android</h5>
                  </div>
                </div>
              </div>
              <div className="row pt-5 text-center justify-content-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={kotlin}
                      alt="Chandigarh's Leading Mobile App Development Company"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Java</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={swift}
                      alt="mobile app development companies in Chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Swift</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Process
          heading="Our Web Portal Development Process
"
          para="At Asvayuk Technologies, we follow a structured and transparent development process to ensure the delivery of high-quality apps.
"
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Requirement Analysis"
          col1para="We take time to understand your specific requirements, business objectives, and target audience. This helps us design the perfect app strategy."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN CHANDIGARH"
          col2head="Design & Development
"
          col2para="Our designers craft intuitive and engaging designs. We create wireframes and prototypes to give you an idea of how the final app will function.

"
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in chandigarh"
          col3head="Testing & Deployment"
          col3para="Using cutting-edge technologies, our development team brings your app to life, ensuring it is optimized for speed, security, and scalability.

"
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in chandigarh"
          col4head="Quality Assurance & Testing"
          col4para="Our rigorous testing procedures help ensure that your app is bug-free and functions as expected on all devices and platforms."
          col5Img={AppImages.processImg.test}
          col5Alt="Responsive web development chandigarh"
          col5head="Maintenance & Support
"
          col5para="Our team of mobile testing experts performs testing and debugging to ensure a reliable and optimal functioning app.."
        />

        <ServicesCaseStudy />
      </main>
    </>
  );
};

export default mobileApp;
