"use client";
import React from "react";
import salesforceicon from "@/assets/Images/salesforce-icon.webp";
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

const SalesforcePartnership = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Salesforce Partnership"}
          pageHeading={"Redefine Customer Success with Singapore’s Salesforce Experts"}
          pagePara={
            "Layerex is proud to be a strategic Salesforce Partner, empowering Singaporean enterprises to build deeper, more meaningful relationships with their customers. We combine the world’s #1 CRM with our local market expertise to help you unify your sales, service, and marketing efforts. By leveraging the power of Salesforce, we turn your raw data into actionable insights that drive sustainable revenue growth."
          }
          pageImg={salesforceicon}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Intelligent CRM Solutions for Scalable Growth</h2>
              <p>Through our partnership, we implement a 360-degree view of your customer journey using specialized Salesforce clouds:</p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Sales Cloud"
                    cardPara="Automating your sales pipeline to close deals faster and track team performance in real-time."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Service Cloud"
                    cardPara="Delivering world-class customer support with AI-powered ticketing and self-service portals."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="Marketing Cloud"
                    cardPara="Creating hyper-personalized journeys that engage your audience across email, mobile, and social."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Experience Cloud"
                    cardPara="Building secure, branded portals for your partners, customers, and employees to collaborate."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Tableau Analytics"
                    cardPara="Visualizing complex data to make informed business decisions with lightning speed."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="MuleSoft Integration"
                    cardPara="Connecting Salesforce seamlessly with your existing legacy systems and third-party apps."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Empower Your Team with Unified Cloud Intelligence
            </>
          }
          keyPara={
            <>
              In a competitive digital landscape, information is your greatest asset. Layerex customizes the Salesforce platform to fit your specific business logic, ensuring your teams spend less time on manual entry and more time on high-value strategy.
            </>
          }
          keyPoint1="Single Source of Truth for all customer interactions."
          keyPoint2="AI-Powered Forecasting for smarter budget allocation."
          keyPoint3="Mobile-First Accessibility for your global sales force."
          keyPoint4="Enterprise-Grade Security for sensitive business data."
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Schedule a Demo"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Trust Layerex for Your CRM Journey?</>}
        //   ExpPara={
        //     <>
        //       Delivering market-ready Shopify products that drive real business value.
        //     </>
        //   }
          point1="Local Implementation Experts"
          pointPara1={
            <>
             We understand the unique operational needs of businesses operating in Singapore and the APAC region.
            </>
          }
          point2="Custom Configuration"
          pointPara2={
            <>
              We don't believe in "out of the box"—we tailor Salesforce fields, workflows, and objects to your exact needs.
            </>
          }
          point3="High Adoption Rates"
          pointPara3={
            <>
              We provide comprehensive training to ensure your team actually loves and uses the new system.
            </>
          }
          point4="ROI-Centric Approach"
          pointPara4={
            <>
              Our focus is on increasing your lead-to-deal conversion rates through smart automation.
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
          heading="Our 5-Phase Deployment Blueprint"
        //   para="At Layerex, we are dedicated to bridging the gap between sophisticated technology and seamless retail. Our mission is to provide local businesses with the agile Shopify tools they need to achieve sustainable, global-scale growth."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Discovery & Audit"
          col1para="Identifying your existing pain points and defining clear KPIs for your CRM success."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="System Architecture"
          col2para="Designing a custom Salesforce environment that maps to your unique business processes."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Data Migration"
          col3para="Safely cleaning and moving your historical data from old systems into Salesforce."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Testing & Training"
          col4para="Rigorous UAT (User Acceptance Testing) followed by hands-on workshops for your staff."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Post-Launch Scaling"
          col5para="Ongoing optimization to ensure your Salesforce instance evolves with your business."
        />

        {/* <ServicesCaseStudy /> */}

        {/* <Industry /> */}
      </main>
    </>
  );
};

export default SalesforcePartnership;
