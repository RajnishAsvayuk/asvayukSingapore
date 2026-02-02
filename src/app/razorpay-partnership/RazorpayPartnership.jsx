"use client";
import React from "react";
import razorpayicon from "@/assets/Images/Razorpay-icon.webp";
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

const RazorpayPartnership = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Shopify Development"}
          pageHeading={"Singapore’s Gateway to Frictionless Global Payments"}
          pagePara={
            "Layerex is proud to be a strategic partner of Razorpay Singapore, the region’s powerhouse for digital finance. This partnership allows us to equip your business with a unified payment infrastructure that supports 100+ currencies and local payment methods like PayNow. Together, we bridge the gap between complex financial tech and seamless customer checkouts, ensuring your revenue flows without borders."
          }
          pageImg={razorpayicon}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Next-Gen Fintech Tools for Modern Merchants</h2>
              <p>Through our Razorpay collaboration, we deploy a high-performance stack that automates your entire financial workflow:</p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Unified Payment Gateway"
                    cardPara="Accept everything from international credit cards to regional wallets via a single, secure integration."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Hyper-Fast Checkout"
                    cardPara="Reduce cart abandonment with a mobile-optimized interface designed for one-click conversions."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="Cross-Border Intelligence"
                    cardPara="Slash transaction fees by up to 40% with smart routing for international settlements."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Real-Time Payouts"
                    cardPara="Automate vendor payments and employee payroll with 24/7 instant fund transfers."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Smart Subscription Billing"
                    cardPara="Manage recurring revenue effortlessly with automated invoicing and dunning management."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="Advanced Fraud Shield"
                    cardPara="Protect your bottom line with AI-driven security that detects and blocks suspicious activity in real-time."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Experience the Future of Business Banking
            </>
          }
          keyPara={
            <>
              Why settle for slow traditional banking? Layerex and Razorpay provide Singaporean SMEs with the agility to scale. Our integrated dashboard gives you total control over your money movement, from the first click to the final settlement.
            </>
          }
          keyPoint1="Instant Onboarding with Zero Paperwork"
          keyPoint2="Deep Analytics for Data-Driven Growth"
          keyPoint3="Seamless Integration with Shopify & WooCommerce"
          keyPoint4="Optimized Success Rates for Global Cards"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Audit My Payment Flow"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Partner with a Razorpay-Certified Agency?</>}
        //   ExpPara={
        //     <>
        //       Delivering market-ready Shopify products that drive real business value.
        //     </>
        //   }
          point1="The India-Singapore Corridor"
          pointPara1={
            <>
              We are experts in facilitating seamless trade and payments between these two massive digital economies.
            </>
          }
          point2="Developer-First Integration"
          pointPara2={
            <>
              Our technical team uses Razorpay’s robust APIs to build custom, bug-free payment experiences.
            </>
          }
          point3="Priority Compliance"
          pointPara3={
            <>
              We ensure your payment flow meets all PCI DSS and Singaporean financial regulations automatically.
            </>
          }
          point4="Revenue-First Approach"
          pointPara4={
            <>
              Our strategies focus on increasing your "Success Rate" so you never lose a sale to a technical glitch.
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
          heading="Your Seamless Integration Journey"
        //   para="At Layerex, we are dedicated to bridging the gap between sophisticated technology and seamless retail. Our mission is to provide local businesses with the agile Shopify tools they need to achieve sustainable, global-scale growth."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Financial Audit"
          col1para="We analyze your current payment costs and identify areas to save on transaction fees."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Custom Stack Setup"
          col2para="Configuring your gateway, links, and subscriptions to match your specific business model."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Sandbox Testing"
          col3para="Rigorous dry-runs to ensure every payment mode works perfectly before you go live."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Launch & Sync"
          col4para="Activating your live environment and syncing it with your accounting software for auto-reconciliation."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Scaling Support"
          col5para="Ongoing monitoring to optimize conversion rates as your transaction volume grows."
        />

        {/* <ServicesCaseStudy /> */}

        {/* <Industry /> */}
      </main>
    </>
  );
};

export default RazorpayPartnership;
