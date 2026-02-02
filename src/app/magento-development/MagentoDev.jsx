"use client";
import React from "react";
import magentoBanner from "@/assets/Images/Group-900.webp";
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

const MagentoDev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Magento Development"}
          pageHeading={"Leading Magento Development Experts in Singapore"}
          pagePara={
            "In the competitive digital retail space, your e-commerce platform needs more than just a presence—it needs a performance edge. Layerex is a premier Magento development agency in Singapore, specializing in architecting scalable, secure, and feature-rich online storefronts. From complex B2B ecosystems to high-traffic B2C marketplaces, we leverage Adobe Commerce to accelerate your growth and dominate the local market."
          }
          pageImg={magentoBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Comprehensive Magento Development Solutions </h2>
              <p>
                Our certified developers in Singapore provide specialized end-to-end services to ensure your Magento store is optimized for the 2026 digital economy.
              </p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Custom Magento Store Engineering"
                    cardPara="We build bespoke e-commerce platforms from the ground up, ensuring every feature is tailored to your specific business model and Singaporean customer base."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Adobe Commerce Cloud Management"
                    cardPara="Leverage the full power of the cloud. We handle setup, optimization, and scaling for Adobe Commerce to ensure 99.9% uptime during peak SG shopping festivals."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="Seamless Third-Party Integrations"
                    cardPara="Connect your store with local payment gateways like PayNow and GrabPay, plus ERP, CRM, and logistics providers for a fully automated workflow."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Platform Migration & Upgrades"
                    cardPara="Smoothly transition from Magento 1 or other platforms to the latest Adobe Commerce version with zero data loss and minimal downtime for your operations."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Performance & Speed Optimization"
                    cardPara="In the fast-paced SG market, every second counts. We optimize your store’s code and assets to deliver lightning-fast load times and improve SEO rankings."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="24/7 Managed Support & Maintenance"
                    cardPara="Keep your business running around the clock. Our local support team provides security patches, bug fixes, and performance monitoring whenever you need it."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              The Layerex Advantage for E-Commerce Success.
            </>
          }
          keyPara={
            <>
              Choosing Layerex means partnering with a team that understands the intersection of high-end engineering and the unique shopping behaviors of the Singaporean audience. We don't just build websites; we build high-converting sales engines that drive measurable ROI.
            </>
          }
          keyPoint1="Certified Adobe Commerce Experts"
          keyPoint2="Security & PDPA Compliance"
          keyPoint3="Omnichannel Growth Strategy"
          keyPoint4="Data-Driven UX Design"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Choose the Best Magento Developers in Singapore ?</>}
          ExpPara={
            <>
              At Asvayuk Technologies, we specialize in Magento eCommerce
              development, delivering customized, high-performance, and scalable
              solutions for businesses.
            </>
          }
          point1="Certified Magento Experts"
          pointPara1={
            <>
              Our developers have extensive experience in building, customizing,
              and optimizing Magento-based online stores.
            </>
          }
          point2="Global Trust, Local Impact"
          pointPara2={
            <>
              Combining local insights with global expertise, we ensure seamless
              technological excellence.
            </>
          }
          point3="SEO & Mobile-Optimized Store"
          pointPara3={
            <>
              We create SEO-friendly and mobile-responsive Magento websites to
              boost traffic and sales.
            </>
          }
          point4="24/7 Support & Maintenance"
          pointPara4={
            <>
              Our dedicated support team ensures your store runs smoothly with
              regular updates and security patches.
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
          heading="Our Strategic Magento Development Roadmap"
          // para="Our team of expert mobile app developers plan, design, develop, test, optimize, and launch mobile apps that redefine user experiences."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Discovery & Architecture"
          col1para="Defining your business goals and mapping out the technical store structure."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Custom Design & Prototyping"
          col2para="Crafting a high-conversion UI/UX tailored for the Singaporean shopper."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Agile Core Development"
          col3para="Building your store with clean, scalable code and essential integrations."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Rigorous Quality Assurance"
          col4para="Exhaustive testing for security, speed, and mobile responsiveness."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Launch & Continuous Growth"
          col5para="Deploying your platform and providing ongoing updates to stay ahead."
        />

        {/* <ServicesCaseStudy /> */}

        <Industry />

        <section className="performance_card2">
          <div className="container magentoCon">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>
                  Build a Scalable & High-Performance eCommerce Store
                </h2>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service1}
                      altText="Custom Website Design
"
                      cardHeading="
Elite Magento Engineering Specialists in Singapore"
                      cardParaGraph={
                        <>
                          Partnering with the right technical team is the foundation of your e-commerce success. Layerex houses a team of certified Magento architects in Singapore with deep expertise in Adobe Commerce’s robust ecosystem. We stay ahead of 2026’s digital trends, ensuring your platform is equipped with cutting-edge tools to outperform competitors. As a premier SG agency, we don’t just build websites; we engineer high-performance environments focused on speed, superior user experience, and maximum conversion rates.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service2}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Scalable & High-Value Adobe Commerce Solutions"
                      cardParaGraph={
                        <>
                          {" "}
                          Layerex is a leading provider of efficient, enterprise-grade Magento development services tailored for the Singaporean business landscape. Whether you are a rising SME or a large-scale enterprise ready to scale globally, we deliver solutions that align with your strategic budget and long-term goals. Our developers ensure quality is baked into every line of code, utilizing the latest cloud technologies to drive online sales growth. With Layerex, you get world-class functionality and localized expertise that maximizes your digital ROI.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service3}
                      altText="Static Website Design Singapore
"
                      cardHeading="Comprehensive Consultation & Magento Support SG"
                      cardParaGraph={
                        <>
                          Securing the best Magento developers in Singapore is vital for building a future-proof, scalable e-commerce platform. Layerex offers end-to-end expertise, helping businesses harness the full power of Adobe Commerce to create iconic online stores. From bespoke custom development and complex third-party integrations to seamless migrations and proactive 24/7 maintenance, our local team has the technical mastery to deliver exceptional, result-oriented digital products.
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MagentoDev;
