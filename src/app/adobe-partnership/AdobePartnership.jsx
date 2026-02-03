"use client";
import React from "react";
import adobeicon from "@/assets/Images/adobe.webp";
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

const AdobePartnership = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Adobe Partnership"}
          pageHeading={"Elevate Your Digital Experience with Adobe & Layerex"}
          pagePara={
            "Layerex is proud to be a certified Adobe Partner, bringing world-class creative and marketing technology to Singapore’s most ambitious brands. We bridge the gap between imagination and execution by leveraging Adobe’s powerhouse suite of tools—from Creative Cloud to Experience Manager. Together, we empower your business to deliver stunning visuals and seamless digital journeys that captivate your audience."
          }
          pageImg={adobeicon}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Premium Creative & Marketing Ecosystems</h2>
              <p>Our Adobe partnership allows us to deploy industry-standard tools that redefine how you communicate with your customers:</p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Creative Cloud Mastery"
                    cardPara="High-end design, video production, and brand asset creation using Adobe’s professional suite."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Experience Manager (AEM)"
                    cardPara="Building enterprise-grade websites with a focus on personalized content delivery."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="Adobe Commerce (Magento)"
                    cardPara="Scaling your e-commerce platform with the most flexible and robust architecture available."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Document Cloud & Sign"
                    cardPara="Modernizing your workflow with secure, cloud-based digital signatures and PDF automation."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Marketing Cloud Insights"
                    cardPara="Using deep data analytics to understand customer behavior across every touchpoint."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="Asset Management"
                    cardPara="Organizing your brand's digital library for seamless collaboration across your entire team."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Designing the Future of Customer Engagement
            </>
          }
          keyPara={
            <>
              In a world driven by aesthetics and speed, Adobe provides the foundation for excellence. Layerex integrates these tools into your daily workflow, ensuring your business stays agile, professional, and visually superior.
            </>
          }
          keyPoint1="Seamless Workflow Integration Across Departments"
          keyPoint2="Advanced Personalization for Marketing Campaigns"
          keyPoint3="Enterprise-Level Security for Digital Documents"
          keyPoint4="Scalable Content Creation for Multi-Channel Reach"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Start Your Transformation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Partner with an Adobe-Certified Agency?</>}
        //   ExpPara={
        //     <>
        //       Delivering market-ready Shopify products that drive real business value.
        //     </>
        //   }
          point1="Certified Creative Experts"
          pointPara1={
            <>
              Our team is trained in the latest Adobe updates, ensuring your projects utilize the most efficient features.
            </>
          }
          point2="Enterprise Scalability"
          pointPara2={
            <>
              We don't just design; we build systems that grow with your company using Adobe’s cloud infrastructure.
            </>
          }
          point3="Precision Design Standards"
          pointPara3={
            <>
              We maintain the highest level of brand consistency across every digital and print medium.
            </>
          }
          point4="Efficiency & Automation"
          pointPara4={
            <>
              We use Adobe’s AI-powered tools (Sensei) to speed up production and lower your operational costs.
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
          heading="Your Path to Digital Excellence"
        //   para="At Layerex, we are dedicated to bridging the gap between sophisticated technology and seamless retail. Our mission is to provide local businesses with the agile Shopify tools they need to achieve sustainable, global-scale growth."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Creative Audit"
          col1para="Reviewing your current design and marketing stack to identify gaps and opportunities."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Cloud Integration"
          col2para="Setting up and syncing Adobe Creative and Document clouds with your existing team workflow."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Strategic Design"
          col3para="Creating high-impact brand assets and digital experiences tailored to the Singaporean market."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="System Deployment"
          col4para="Launching AEM or Commerce platforms with a focus on speed, UX, and SEO."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Continuous Support"
          col5para="Providing ongoing training and updates to ensure your team stays ahead of creative trends."
        />

        {/* <ServicesCaseStudy /> */}

        {/* <Industry /> */}
      </main>
    </>
  );
};

export default AdobePartnership;
