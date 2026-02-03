"use client";
import React from "react";
import googleicon from "@/assets/Images/google-icon.webp";
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

const GooglePartnership = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Google Partnership"}
          pageHeading={"Singapore’s Elite Google Strategic Partner"}
          pagePara={
            "Layerex is proud to be a verified Google Partner, delivering high-performance digital solutions across the Singapore market. This official collaboration gives us direct access to Google’s latest technology, advanced training, and exclusive product betas. We utilize these resources to ensure your brand maintains a competitive edge with search strategies that drive measurable business growth."
          }
          pageImg={googleicon}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Certified Search Solutions Powered by Google Expertise</h2>
              <p>As an official partner, we offer specialized services backed by Google’s rigorous certification standards:</p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Advanced Search Strategy"
                    cardPara="Using partner-level data to dominate high-intent keywords in the Singapore market."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Verified Display Network"
                    cardPara="Scaling your brand presence with authorized ad placements across premium websites."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="Smart Shopping Ecosystem"
                    cardPara="Expertly configuring product feeds for maximum visibility and higher conversion rates."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Precision Retargeting"
                    cardPara="Leveraging Google’s audience intelligence to re-engage your most valuable site visitors."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Strategic Video Out reach"
                    cardPara="Crafting YouTube campaigns that resonate with the local audience using certified techniques."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="Mobile Growth Optimization"
                    cardPara="Implementing Google-approved mobile strategies to drive quality app installs and engagement."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Elevate Your Search Performance with Layerex
            </>
          }
          keyPara={
            <>
              Take control of your digital growth with a strategy built on official Google benchmarks. Our Singaporean experts analyze real-time search trends to build a roadmap that ensures your business stays ahead of the competition.
            </>
          }
          keyPoint1="Direct Priority Support for Fast Issue Resolution"
          keyPoint2="Exclusive Access to Upcoming Google Ad Features"
          keyPoint3="Strategies Aligned with the Latest Algorithm Updates"
          keyPoint4="Full Transparency with Certified Reporting Tools"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Claim Your Free Audit"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Our Google Partnership is Your Advantage?</>}
        //   ExpPara={
        //     <>
        //       Delivering market-ready Shopify products that drive real business value.
        //     </>
        //   }
          point1="Beta Access"
          pointPara1={
            <>
              We give our clients first-to-market access to new Google tools before their competitors see them.
            </>
          }
          point2="Proven Expertise"
          pointPara2={
            <>
              Your accounts are managed by professionals who have cleared Google’s strict certification exams.
            </>
          }
          point3="Direct Channel Support"
          pointPara3={
            <>
              We have a dedicated link to Google’s technical team to resolve any hurdles instantly.
            </>
          }
          point4="Performance Standards"
          pointPara4={
            <>
              Google monitors our client success rates to ensure we consistently deliver high-tier ROI.
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
          heading="Our Blueprint for Search Excellence"
        //   para="At Layerex, we are dedicated to bridging the gap between sophisticated technology and seamless retail. Our mission is to provide local businesses with the agile Shopify tools they need to achieve sustainable, global-scale growth."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Strategic Planning"
          col1para="Aligning your business goals with Google’s official performance benchmarks."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Expert Deployment"
          col2para="Building campaigns using the latest tools and best practices from our partner training."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Continuous Optimization"
          col3para="Real-time data monitoring to identify areas for growth and budget efficiency."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Quality Assurance"
          col4para="Rigorous testing to ensure flawless ad performance and user-friendly landing pages."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Launch & Scale"
          col5para="Expanding your reach with confidence, backed by verified data and direct partner support."
        />

        {/* <ServicesCaseStudy /> */}

        {/* <Industry /> */}
      </main>
    </>
  );
};

export default GooglePartnership;
