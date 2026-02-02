"use client";
import React from "react";
import Image from "next/image";
import laravelBanner from "@/assets/Images/banners-52-1.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
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
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";


const LaravelDev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Laravel Development"}
          pageHeading={"Premier Laravel Development Agency in Singapore"}
          pagePara={
            "Layerex specializes in engineering secure, high-performance, and enterprise-grade web applications. From custom APIs to complex SaaS platforms, we deliver robust PHP solutions tailored to your unique business logic and scalability needs."
          }
          pageImg={laravelBanner}
          pageAlt={"Website banners-52-1Company in Singapore"}
        />

        <section className="Empowering pt-5 py-4">
          <div className="container">
            <div className="Empowering_title text-center pb-2 pb-md-5">
              <h1 className="fw-semibold">
                Our Specialized  Laravel Ecosystem
              </h1>
              <p>
                Scalable backend engineering
                for modern digital enterprises.
              </p>
            </div>
            <div className="row pt-2">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 pb-3 pb-lg-0 pt-md-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c11}
                  altText="Laravel website development Mohali"
                  cardHeading="Custom Laravel Web Development"
                  cardParaGraph={
                    <>
                      Tailored web applications built with clean,
                      <br />
                      maintainable code to meet specific Singaporean business objectives.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0 d-flex">
                <ServicesCard
                  ServiceCardImg={c12}
                  altText="Laravel Development Partner in Singapore"
                  cardHeading="Laravel eCommerce Solutions"
                  cardParaGraph={
                    <>
                      Developing feature-rich, high-security online stores with seamless inventory and payment gateway integrations.
                    </>
                  }
                />
              </div>
            </div>
            <div className="row pt-0 pt-lg-3 pt-md-3">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c13}
                  altText="Laravel PHP development services in Singapore"
                  cardHeading="Restful API Development"
                  cardParaGraph={
                    <>
                      Engineering secure and scalable APIs for seamless communication between mobile apps and web backends.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c14}
                  altText="Laravel eCommerce development services Singapore"
                  cardHeading="Enterprise App Development"
                  cardParaGraph={
                    <>
                      Building complex, high-traffic internal systems and SaaS platforms with a focus on performance.
                    </>
                  }
                />
              </div>
            </div>
            <div className="row pt-0 pt-lg-3 pt-md-3 pb-5">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c15}
                  altText="Best Laravel development company under budget in Singapore"
                  cardHeading="Laravel Outsourcing & Staff Augmentation"
                  cardParaGraph={
                    <>
                      Providing expert local developers to accelerate your project timelines and technical capabilities.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c16}
                  altText="Hire Laravel developer in Singapore"
                  cardHeading="Maintenance & Performance Tuning"
                  cardParaGraph={
                    <>
                      Proactive 24/7 support and optimization to ensure your Laravel application remains fast and secure.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section">
          <Container>
            <div className="main-bg">
              <div className="tool-heading pt-5 pb-3">
                <h2 className="conclusion_title mb-2 text-center">
                  Your Trusted Laravel Development Partner in Singapore
                </h2>
                <div>
                  <p className="text-white lh-base fs-6 pt-3 text-center">
                    If you are seeking a professional Laravel development company in Singapore to develop your next web application,
                    <br /> Layerex delivers tailored solutions with a focus on quality, security, and scalability.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={<>Leading Laravel Engineering in Singapore</>}
          keyPara={
            <>
              Partner with Layerex to leverage the full power of the Laravel framework, ensuring your digital products are safe, smooth, and ready for the 2026 market.
            </>
          }
          keyPoint1="Innovative MVC Architecture"
          keyPoint2="High Performance & Logic Flexibility"
          keyPoint3="Enterprise-Level Scalability"
          keyPoint4="Hardened Security Protocols"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <section className="laravel-projects-section py-5">
          <div className="container">
            <div className="text-center Experienceg_title">
              <h2>Real-World Laravel Success Stories</h2>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Multi-Vendor Enterprise Marketplace
                    </h3>
                    <p className="project-description">
                      We architected a robust Laravel platform for a regional retail leader, featuring real-time logistics sync, secure multi-currency payments, and automated vendor tracking.
                    </p>
                  </div>
                  <div className="project-image">
                    <Image
                      src={work2}
                      alt="Laravel Web Development in Singapore"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Fintech API & Backend Synchronization
                    </h3>
                    <p className="project-description">
                      Layerex engineered a custom API ecosystem for a rising Singaporean fintech, ensuring flawless data synchronization between their mobile interface and secure web backend.
                    </p>
                  </div>
                  <div className="project-image">
                    <Image
                      src={work3}
                      alt="Laravel website development Mohali"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Laravel for Your Business?"
          point1="Rapid Deployment"
          pointPara1="Built-in tools that accelerate the development cycle without compromising quality."
          point2="Limitless Scalability"
          pointPara2="Architecture designed to grow alongside your user base and data requirements."
          point3="Hardened Security"
          pointPara3="Native protection against SQL injection, cross-site request forgery, and other cyber threats."
          point4="Elegant Database Mapping"
          pointPara4="Utilizing Eloquent ORM for simplified, high-speed database management."
          altTags={{
            group1: "Laravel PHP development services in Singapore",
            group2: "Laravel website development agency Singapore",
            group3: "laravel website development services Singapore",
            group4: "Laravel website development agency Singapore",
            mockups: "Laravel eCommerce development services Singapore",
            whiteLogo: "Laravel API development in Singapore",
          }}
        />

        <Process
          heading="Our Structured Laravel Development Roadmap"
          // para="To ensure high-quality Laravel solutions, we follow a structured development process."
          col1Img={AppImages.processImg.container}
          col1Alt="Laravel developers in Singapore"
          col1head="Discovery"
          col1para="In-depth requirement analysis and project scoping."
          col2Img={AppImages.processImg.planning}
          col2Alt="Laravel Development Partner in Singapore"
          col2head="Strategy"
          col2para="Choosing the optimal architectural approach for long-term success."
          col3Img={AppImages.processImg.pen}
          col3Alt="laravel website development services Singapore"
          col3head="Engineering"
          col3para="Developing user-centric, high-performance solutions with clean code."
          col4Img={AppImages.processImg.development}
          col4Alt="Laravel PHP development services in Singapore"
          col4head="Validation"
          col4para="Rigorous bug-testing and performance optimization before launch.  "
          col5Img={AppImages.processImg.test}
          col5Alt="Laravel website development agency Singapore"
          col5head="Application Maintenance & Support"
          col5para="Ensuring application stability through proactive maintenance, regular updates, and expert technical support."
        />

        {/* <ServicesCaseStudy />
        <Industry /> */}
      </main>
    </>
  );
};

export default LaravelDev;
