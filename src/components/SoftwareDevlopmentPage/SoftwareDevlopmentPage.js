"use client";
import React from "react";
import Image from "next/image";
import softwareBanner from "@/assets/Images/banners-39.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
import java1 from "@/assets/Images/java1.webp";
import js from "@/assets/Images/js.webp";
import c from "@/assets/Images/c++.webp";
import python from "@/assets/Images/python.webp";
import react1 from "@/assets/Images/react1.webp";
import angular1 from "@/assets/Images/angular1.webp";
import rails1 from "@/assets/Images/rails1.webp";
import asp from "@/assets/Images/asp.webp";
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
import work3 from "@/assets/Images/exmp2.webp";
import work2 from "@/assets/Images/larawk3.jpg";
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

const SoftwareDevlopmentPage = () => {
  return (
    <>
        <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Software Development"}
          pageHeading={"Expert Custom Software Development in Singapore"}
          pagePara={
            "Asvayuk Technologies delivers tailored, high-performance applications that streamline operations and drive digital transformation. We build scalable solutions for the unique challenges of the SG market."
          }
          pageImg={softwareBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-section ">
          <Container>
            <div className="main-bg p-3">
              <div className="tool-heading py-5">
                <h2 className="conclusion_title mb-2">
                  Why Choose Asvayuk Technologies for Software Development in
                  Singapore
                </h2>
                <div>
                  <p className="text-white lh-lg fs-6 pt-3">
                    Asvayuk Technologies, a trusted software development company
                    in Singapore, delivers secure, scalable, and innovative
                    solutions including AI, mobile, and custom software tailored
                    for startups, enterprises, and growing businesses across
                    industries.
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
                <h2>Powerful Mobile and AI-Driven Development Solutions</h2>
                <p className="mt-3">
                  We specialize in mobile app development, AI software
                  solutions, and enterprise applications that help you grow and
                  scale digitally through next-generation technologies and
                  industry-driven solutions.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom SaaS Development  
"
                      cardHeading="Get Industry-Specific Software"
                      cardParaGraph={
                        <>
                          We design software solutions tailored to your
                          industry, ensuring your workflows are optimized,
                          processes streamlined, and goals achieved with
                          technology built specifically for your business
                          operations.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Stay in Control with Agile Delivery"
                      cardParaGraph={
                        <>
                          {" "}
                          Our agile development process keeps you fully
                          informed, involved, and in control, providing
                          continuous feedback loops, frequent updates, and
                          real-time collaboration throughout every phase of your
                          project.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="Launch Apps Across All Platforms"
                      cardParaGraph={
                        <>
                          Develop high-performance applications for Android,
                          iOS, and the web, ensuring consistent user experience,
                          responsive design, and full functionality across all
                          modern platforms and devices used by your audience.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="Use Advanced AI & Cloud Technologies"
                      cardParaGraph="Leverage artificial intelligence and secure cloud-based systems to automate tasks, enhance decision-making, reduce operational costs, and future-proof your business with cutting-edge software features."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Mobile Responsive Design
"
                      cardHeading="Experience End-to-End Development"
                      cardParaGraph="From initial planning and UI/UX design to development, testing, deployment, and maintenance, we handle the full software lifecycle with precision, speed, and client-focused delivery."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="Receive Continuous Maintenance & Support"
                      cardParaGraph="We offer proactive support, security updates, system monitoring, and ongoing improvements, ensuring your software remains stable, up-to-date, and perfectly aligned with your growing business needs."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="software-sec">
          <Container>
            <Row>
              <div className="software-sec-heading text-center">
                <h2>Our Tech Stack : The Engine Behind the Excellence</h2>
                <p>
                  Our software development arsenal comprises state-of-the-art
                  tools and technologies meticulously chosen to craft
                  high-performance, innovation-driven solutions for your
                  business.
                </p>
              </div>
              <div className="software-sec-card">
                <Row className="gy-4">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="software-sec-card1 rounded-4">
                      <h3 className="text-center fw-bold">
                        Programming Languages
                      </h3>
                      <div className="languages row pt-4">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                          <Image
                            src={java1}
                            alt="software development company in Singapore"
                          />
                          <h2 className="software-names pt-3">Java</h2>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                          <Image src={js} alt="software developers near me" />
                          <h2 className="software-names pt-3">JavaScript</h2>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                          <Image
                            src={c}
                            alt="custom software development companies"
                          />
                          <h2 className="software-names pt-3">C++</h2>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                          <Image
                            src={python}
                            alt="software development companies near me"
                          />
                          <h2 className="software-names pt-3">Python</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="software-sec-card2 rounded-4">
                      <h3 className="text-center fw-bold">Frameworks </h3>
                      <div className="languages row pt-4">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                          <Image src={react1} alt="ai software development" />
                          <h2 className="software-names pt-3">React</h2>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                          <Image
                            src={angular1}
                            alt="software development agency"
                          />
                          <h2 className="software-names pt-3">Angular</h2>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                          <Image
                            src={rails1}
                            alt="software development services"
                          />
                          <h2 className="software-names pt-3">
                            Ruby on
                            <br /> Rails
                          </h2>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                          <Image
                            src={asp}
                            alt="application development companies"
                          />
                          <h2 className="software-names pt-3">ASP.NET</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Row>
          </Container>
        </section>

        <section className="laravel-projects-section py-5">
          <div className="container">
            <div className="text-center Experienceg_title">
              <h2>Leading Software Development Company in Singapore</h2>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Custom Software for E-commerce
                    </h3>
                    <p className="project-description">
                      One of our clients, an e-commerce startup, approached us
                      for a scalable solution to manage their growing customer
                      base. Our Custom Software Development in Singaporeteam
                      built an AI-powered recommendation engine that boosted
                      sales by 35%.
                    </p>
                  </div>
                  <div className="project-image">
                    <Image
                      src={work2}
                      alt="custom software development agency"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Enterprise Software for Healthcare
                    </h3>
                    <p className="project-description">
                      A leading hospital required an advanced patient management
                      system. Our Enterprise Software Solutions in Singaporeteam
                      developed a secure, cloud-based platform that streamlined
                      operations and improved patient care.
                    </p>
                  </div>
                  <div className="project-image">
                    <Image src={work3} alt="it software development company" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Technologies & Services We Provide"
          ExpPara="Asvayuk Technologies builds future-ready software using the latest tools and frameworks across custom and mobile application development platforms."
          point1="AI-Powered Apps"
          pointPara1="Smart and automated AI software solutions."
          point2="iOS Development"
          pointPara2="Native Apple apps with sleek performance."
          point3="CRM & ERP Systems"
          pointPara3="Custom platforms to manage business ops."
          point4="Android Software"
          pointPara4=" Scalable apps for Android smartphones."
        />

        <Process
          heading="Our Process of Expertise"
          para="Our team of expert mobile app developers plan, design, develop, test, optimize, and launch mobile apps that redefine user experiences."
          col1Img={AppImages.processImg.container}
          col1Alt="top application development companies"
          col1head="Product Design"
          col1para="Crafting innovative and user-centric design strategies for a captivating app experience"
          col2Img={AppImages.processImg.planning}
          col2Alt="android app development agency"
          col2head="Mobile App Consulting"
          col2para="Tailored guidance and strategies to shape your app concept into a successful product."
          col3Img={AppImages.processImg.pen}
          col3Alt="mobile software development company"
          col3head="UI/UX Compatibility"
          col3para="Seamless integration of compelling design and intuitive user experiences for enhanced engagement."
          col4Img={AppImages.processImg.development}
          col4Alt="custom mobile application development"
          col4head="Development"
          col4para="Utilizing cutting-edge technologies to build robust, scalable, and high-performance mobile applications."
          col5Img={AppImages.processImg.test}
          col5Alt="ios mobile app development company"
          col5head="QA & Testing"
          col5para="Our team of mobile testing experts performs testing and debugging to ensure a reliable and optimal functioning app."
        />

        <Industry />
        <ServicesCaseStudy />
      </main>
    </>
  )
}

export default SoftwareDevlopmentPage
