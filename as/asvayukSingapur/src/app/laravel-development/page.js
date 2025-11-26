"use client";
import React from "react";
import Image from "next/image";
import laravelBanner from "../../../public/Images/banners-52-1.webp";
import Group105518 from "../../../public/Images/Group-105518.webp";
import c11 from "../../../public/Images/c11.webp";
import c12 from "../../../public/Images/c12.webp";
import c13 from "../../../public/Images/c13.webp";
import c14 from "../../../public/Images/c14.webp";
import c15 from "../../../public/Images/c15.webp";
import c16 from "../../../public/Images/c16.webp";
import work3 from "../../../public/Images/exmp2.webp";
import work2 from "../../../public/Images/larawk3.jpg";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";


const laravelDev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Laravel Development"}
          pageHeading={"Laravel Development Company in Singapore"}
          pagePara={
            "Asvayuk Technologies Private Ltd. is a top-rated Laravel Development Company in Singapore, specializing in building high-performance, scalable, and secure web applications. With years of expertise in Laravel web development in Singapore, we deliver custom solutions tailored to your business needs. Whether you need a Laravel eCommerce website, API integration, or enterprise web applications, our expert Laravel developers in Singaporeensure seamless, feature-rich, and optimized solutions."
          }
          pageImg={laravelBanner}
          pageAlt={"Website banners-52-1Company in Singapore"}
        />

        <section className="Empowering pt-5 py-4">
          <div className="container">
            <div className="Empowering_title text-center pb-2 pb-md-5">
              <h1 className="fw-semibold">
                Our Laravel Development Services
                <br /> in Singapore
              </h1>
              <p>
                At Asvayuk Technologies Private Ltd., we offer a wide range of
                Laravel website development services in Singapore
                <br /> to cater different business requirements.
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
                      Tailored solutions to match your unique business goals.
                      <br />
                      High-speed and optimized web applications.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0 d-flex">
                <ServicesCard
                  ServiceCardImg={c12}
                  altText="Laravel Development Partner in Singapore"
                  cardHeading="Laravel eCommerce Development Services Singapore"
                  cardParaGraph={
                    <>
                      Feature-rich, scalable, and secure eCommerce
                      websites.Integration with payment gateways, inventory, and
                      order management.
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
                  cardHeading="Laravel API Development in Singapore"
                  cardParaGraph={
                    <>
                      Custom API development for seamless integrations. Secure
                      and scalable API solutions for mobile and web
                      applications.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c14}
                  altText="Laravel eCommerce development services Singapore"
                  cardHeading="Laravel Web Application Development Singapore"
                  cardParaGraph={
                    <>
                      Enhance app performance with consistent user experiences
                      across platforms using React Native, supported by Asvayuk
                      Technologies
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
                  cardHeading="Laravel Development Outsourcing in Singapore"
                  cardParaGraph={
                    <>
                      Leveraging Flutter, Google’s UI toolkit, Asvayuk
                      Technologies creates visually stunning, natively compiled
                      applications for mobile and web platforms.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c16}
                  altText="Hire Laravel developer in Singapore"
                  cardHeading="Laravel Website Maintenance and Support"
                  cardParaGraph={
                    <>
                      Integrating web technologies efficiency with native app
                      performance Asvayuk Technologies offers robust hybrid app
                      development solutions.
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
                  Get Started with The Best Laravel Development Company in
                  Singapore
                </h2>
                <div>
                  <p className="text-white lh-base fs-6 pt-3 text-center">
                    Looking for a Laravel development partner in Singapore to
                    build your next web application?
                    <br /> Asvayuk Technologies Private Ltd. is here to provide
                    expert solutions.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={<>Leading Laravel Development Company in Singapore</>}
          keyPara={
            <>
              Get in touch with us to learn about our cutting-edge development
              solutions that leverage Laravel's capabilities to create safe,
              scalable, and smooth online solutions. Select Laravel for
              unrivaled proficiency.
            </>
          }
          keyPoint1="Innovative Architecture"
          keyPoint2="High Performance with Flexibility"
          keyPoint3="Scalability at its Core"
          keyPoint4="Optimized Performance"
          keyPoint5="Security Assurance"
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
              <h2>Real-Life Examples of Our Laravel Projects</h2>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Laravel-Based eCommerce Website
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
                      alt="Laravel Web Development in Singapore"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Laravel API Integration for a Mobile App
                    </h3>
                    <p className="project-description">
                      We built a custom Laravel API for a fintech startup,
                      ensuring smooth synchronization between their mobile
                      application and web backend.
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
          expTitle="Why Choose Laravel for Web Development?"
          point1="Fast Development"
          pointPara1="Laravel simplifies complex tasks, reducing development time."
          point2="High Security"
          pointPara2="Built-in security features protect websites from threats."
          point3="Scalability"
          pointPara3="Suitable for startups to large enterprises."
          point4="Eloquent ORM"
          pointPara4="Simplifies database management."
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
          heading="Laravel Development Process We Follow"
          para="To ensure high-quality Laravel solutions, we follow a structured development process."
          col1Img={AppImages.processImg.container}
          col1Alt="Laravel developers in Singapore"
          col1head="Requirement Analysis"
          col1para="Understanding client needs and project scope."
          col2Img={AppImages.processImg.planning}
          col2Alt="Laravel Development Partner in Singapore"
          col2head="Planning & Strategy"
          col2para="Choosing the right development approach."
          col3Img={AppImages.processImg.pen}
          col3Alt="laravel website development services Singapore"
          col3head="Design & Development"
          col3para="Creating user-friendly and high-performance solutions."
          col4Img={AppImages.processImg.development}
          col4Alt="Laravel PHP development services in Singapore"
          col4head="Testing & Deployment"
          col4para="Ensuring bug-free and optimized website launch."
          col5Img={AppImages.processImg.test}
          col5Alt="Laravel website development agency Singapore"
          col5head="Maintenance & Support"
          col5para="Providing ongoing technical support and updates."
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default laravelDev;
