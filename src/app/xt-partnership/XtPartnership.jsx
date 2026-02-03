"use client";
import React from "react";
import xticon from "@/assets/Images/xt-icon.webp";
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

const XtPartnership = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"XT Partnership"}
          pageHeading={"Singapore’s Gateway to Global Digital Asset Liquidity"}
          pagePara={
            "Layerex is proud to announce its strategic partnership with XT.COM, the world’s first social-infused digital asset trading platform. This collaboration empowers Singaporean blockchain projects and investors with institutional-grade liquidity and a global reach spanning millions of users. Together, we are bridging the gap between traditional finance and the decentralized future, providing a secure, high-speed ecosystem for Web3 innovation."
          }
          pageImg={xticon}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Comprehensive Digital Asset Infrastructure    </h2>
              <p>Through our XT.COM alliance, we provide a robust framework for projects looking to scale in the digital economy:</p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Project Listing Support"
                    cardPara="Expert guidance on navigating the listing process for the XT.COM ecosystem."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Liquidity Management"
                    cardPara="Ensuring deep market depth and stable trading environments for digital assets."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="OTC Desk Services"
                    cardPara="Facilitating large-scale institutional trades with minimal slippage and maximum security."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Fiat-to-Crypto Gateways"
                    cardPara="Seamlessly connecting Singaporean banking rails to global digital markets."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Staking & Yield Optimization"
                    cardPara="Accessing high-tier rewards and decentralized finance (DeFi) opportunities."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="Web3 Incubation"
                    cardPara="Providing the technical and marketing support needed to launch successful blockchain ventures."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Empowering the Next Generation of Finance
            </>
          }
          keyPara={
            <>
              In the rapidly evolving world of blockchain, security and speed are non-negotiable. Layerex leverages XT.COM’s high-performance matching engine to provide our clients with a trading and listing experience that is both reliable and scalable.
            </>
          }
          keyPoint1="Social-Infused Trading for enhanced community engagement."
          keyPoint2="High-Concurrency Engine handling millions of transactions per second."
          keyPoint3="Multi-Layer Security to protect institutional and retail assets."
          keyPoint4="24/7 Global Market Access across hundreds of trading pairs."
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Connect with Web3 Experts"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Partner with Layerex & XT.COM?</>}
        //   ExpPara={
        //     <>
        //       Delivering market-ready Shopify products that drive real business value.
        //     </>
        //   }
          point1="Global Market Reach"
          pointPara1={
            <>
             Tap into a massive international user base through our direct exchange partnership.
            </>
          }
          point2="Regulatory Awareness"
          pointPara2={
            <>
              We guide projects through the complexities of the Singaporean and global digital asset landscape.
            </>
          }
          point3="Technical Integration"
          pointPara3={
            <>
              Our developers ensure your project’s smart contracts and APIs sync perfectly with exchange protocols.
            </>
          }
          point4="Strategic Growth"
          pointPara4={
            <>
              We don't just list; we provide the marketing and social support to build long-term token utility.
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
          heading="Your Path to Digital Asset Leadership"
        //   para="At Layerex, we are dedicated to bridging the gap between sophisticated technology and seamless retail. Our mission is to provide local businesses with the agile Shopify tools they need to achieve sustainable, global-scale growth."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Project Audit"
          col1para="Reviewing your whitepaper, tokenomics, and technical readiness for the global market."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Ecosystem Integration"
          col2para="Setting up the necessary infrastructure to connect with XT.COM’s liquidity pools."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Community Building"
          col3para="Leveraging social-trading tools to grow an active and engaged supporter base."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Live Launch"
          col4para="Coordinating a high-impact debut on the exchange with full technical oversight."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Liquidity Maintenance"
          col5para="Ongoing monitoring to ensure a healthy and sustainable trading environment."
        />

        {/* <ServicesCaseStudy /> */}

        {/* <Industry /> */}
      </main>
    </>
  );
};

export default XtPartnership;
