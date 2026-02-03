"use client";
import React from "react";
import grabpayicon from "@/assets/Images/grabpay-icon.webp";
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

const GrabpayPartnership = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"GrabPay Partnership"}
          pageHeading={"Unlock Growth with Singapore’s Preferred Digital Wallet"}
          pagePara={
            "Layerex has joined forces with GrabPay to bring your business into the heart of the everyday Everything App. As a strategic partner, we help Singaporean merchants tap into a massive ecosystem of active users who prefer cashless, reward-driven transactions. We don’t just integrate a button; we connect your brand to the most trusted mobile wallet in Southeast Asia to drive loyalty and repeat sales."
          }
          pageImg={grabpayicon}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Seamless Integration into the Grab Ecosystem</h2>
              <p>Leverage our partnership to access a suite of tools designed for the modern Singaporean consumer:</p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="GrabPay Online"
                    cardPara="Provide a frictionless checkout experience for web and mobile shoppers using their Grab balance."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="GrabRewards Integration"
                    cardPara="Boost customer retention by allowing users to earn points with every transaction at your store."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="PayLater by Grab"
                    cardPara="Increase your average order value by offering interest-free installments to your customers."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Unified QR Solutions"
                    cardPara="Simplify in-person payments with a single QR code that captures the GrabPay user base instantly."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Merchant Marketing"
                    cardPara="Gain visibility through Grab-exclusive promotions and in-app marketing opportunities."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="Real-Time Settlement"
                    cardPara="Improve your cash flow with rapid fund transfers and transparent digital bookkeeping."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Capture the Pulse of Southeast Asian Commerce
            </>
          }
          keyPara={
            <>
              In a mobile-first market, convenience is your biggest currency. Layerex optimizes your storefront to speak the language of the Grab user, ensuring your business is ready for the "cashless society" shift.
            </>
          }
          keyPoint1="Access to Millions of Verified Grab Users"
          keyPoint2="High-Security Encryption for Every Transaction"
          keyPoint3="Seamless Sync with Local POS Systems"
          keyPoint4="Accelerated Checkout with Auto-Fill Capabilities"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="View Integration Plans"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Trust Layerex for Your GrabPay Strategy?</>}
        //   ExpPara={
        //     <>
        //       Delivering market-ready Shopify products that drive real business value.
        //     </>
        //   }
          point1="Deep Local Insight"
          pointPara1={
            <>
             We understand the Singaporean consumer behavior better than anyone, ensuring your payment flow feels native.
            </>
          }
          point2="Frictionless Onboarding"
          pointPara2={
            <>
              Our team handles the technical heavy lifting, getting your business "Grab-ready" in record time.
            </>
          }
          point3="Omnichannel Expertise"
          pointPara3={
            <>
              We bridge the gap between your online store and physical locations for a unified payment experience.
            </>
          }
          point4="Growth Analytics"
          pointPara4={
            <>
              Use Grab-specific transaction data to understand your customers' spending habits and tailor your offers.
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
          heading="Your 5-Step Path to Going Mobile"
        //   para="At Layerex, we are dedicated to bridging the gap between sophisticated technology and seamless retail. Our mission is to provide local businesses with the agile Shopify tools they need to achieve sustainable, global-scale growth."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Ecosystem Review"
          col1para="Evaluating how GrabPay and PayLater can best serve your specific customer demographic."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Technical API Link"
          col2para="Flawless integration of Grab’s payment gateway into your existing website or app."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="UX Optimization"
          col3para="Refining your checkout UI to ensure the GrabPay option is prominent and easy to use."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Promotional Launch"
          col4para="Coordinating with Grab’s marketing tools to announce your new payment flexibility to the public."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Performance Tuning"
          col5para="Monitoring transaction success rates and loyalty engagement to maximize your partnership ROI."
        />

        {/* <ServicesCaseStudy /> */}

        {/* <Industry /> */}
      </main>
    </>
  );
};

export default GrabpayPartnership;
