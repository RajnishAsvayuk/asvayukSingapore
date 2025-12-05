"use client";
import React from "react";
import shopifyBanner from "@/assets/Images/Group-105527.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";

const shopifyDev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Shopify Development"}
          pageHeading={"Shopify Website Design Company in Singapore"}
          pagePara={
            "We take pride in being a leading provider of Shopify Development Services, offering customized solutions to meet unique business requirements."
          }
          pageImg={shopifyBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Our Shopify Development Services</h2>
              <p>Crafting Exceptional Shopify Experiences</p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Custom Shopify Store Development"
                    cardPara="Craft bespoke Shopify stores aligned with your business objectives to deliver a unique shopping experience."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Shopify Theme Development"
                    cardPara="Develop responsive Shopify themes tailored to match your brand identity and enhance user engagement."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="Shopify App Development"
                    cardPara="Expand your store's capabilities with custom app development, integrating innovative features and optimizing performance."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Migration to Shopify"
                    cardPara="Effortlessly migrate from other platforms to Shopify, ensuring a seamless transition without sacrificing functionality."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Technology Migration"
                    cardPara="Ensure smooth transitions to advanced SaaS infrastructures with minimal disruptions and maximum technological advancement."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="Shopify Store Setup and Configuration"
                    cardPara="Expert setup and configuration of your Shopify store to ensure optimal performance and functionality from day one."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Use Our Shopify Solutions to Revolutionize Your E-Commerce
              Experience
            </>
          }
          keyPara={
            <>
              Explore the transformative impact of advanced Shopify solutions to
              revolutionize your online store. Enhance your digital commerce
              experience with our specialized expertise. Partner with us for an
              exceptional journey toward success.
            </>
          }
          keyPoint1="Custom Smart Contract Development"
          keyPoint2="Cross-Platform Integration"
          keyPoint3="Data Privacy and Encryptiont"
          keyPoint4="Seamless Blockchain Migration"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Choose Our Shopify Development Services?</>}
          ExpPara={
            <>
              From sparking innovative ideas to transforming them into
              market-ready products, our extensive range of solutions is crafted
              to enhance your business value.
            </>
          }
          point1="Proven Expertise"
          pointPara1={
            <>
              Enhance your e-commerce strategy with our proven WooCommerce
              development prowess.
            </>
          }
          point2="Client-centric Approach"
          pointPara2={
            <>
              We prioritize your needs, ensuring a personalized and effective
              development journey.
            </>
          }
          point3="Commitment to Quality"
          pointPara3={
            <>
              Our dedicated quality assurance team guarantees a flawless,
              high-performance WooCommerce platform.
            </>
          }
          point4="Transparent Communication"
          pointPara4={
            <>
              We uphold transparent communication throughout your project,
              keeping you informed at every step.
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
          heading="Our Process of Expertise"
          para="Our team of expert mobile app developers plan, design, develop, test, optimize, and launch mobile apps that redefine user experiences."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Product Design"
          col1para="Crafting innovative and user-centric design strategies for a captivating app experience"
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Mobile App Consulting"
          col2para="Tailored guidance and strategies to shape your app concept into a successful product."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="UI/UX Compatibility"
          col3para="Seamless integration of compelling design and intuitive user experiences for enhanced engagement."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Development"
          col4para="Utilizing cutting-edge technologies to build robust, scalable, and high-performance mobile applications."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="QA & Testing"
          col5para="experts performs testing and debugging to ensure a reliable and optimal functioning app."
        />

        <ServicesCaseStudy />

        <Industry />
      </main>
    </>
  );
};

export default shopifyDev;
