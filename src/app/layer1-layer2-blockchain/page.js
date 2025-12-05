"use client";
import React from "react";
import Image from "next/image";
import layerBanner from "@/assets/Images/BlockchainImg.png";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Card, Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Experience from "@/components/Experience/Experience";

const layer = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Services"}
          pageName={"Layer 1 & Layer 2 Blockchain"}
          pageHeading={
            "Expert Layer 1 & Layer 2 Blockchain Development in Singapore "
          }
          pagePara={
            "Asvayuk Technologies specializes in Layer 1 & Layer 2 blockchain solutions in Singapore. Our scalable, secure blockchain solutions empower businesses with next-generation technology for secure and efficient data management."
          }
          pageImg={layerBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                LEADING Layer 1 & Layer 2 BLOCKCHAIN SOLUTIONS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies provides robust Layer 1 & Layer 2
                blockchain solutions designed to enhance data security and
                efficiency. Ideal for businesses aiming to streamline operations
                and secure transactions across sectors.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a
                      href="#"
                      title="Layer 1 Blockchain Development Singapore"
                    >
                      Layer 1 Blockchain Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Layer 2 Scaling Solutions Singapore">
                      Layer 2 Scaling Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Secure Blockchain Applications">
                      Secure Blockchain Applications
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Smart Contract Development">
                      Smart Contract Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cross-Chain Interoperability">
                      Cross-Chain Interoperability
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Blockchain for Data Privacy">
                      Blockchain for Data Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Decentralized App Development">
                      Decentralized App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Secure Payment Solutions">
                      Secure Payment Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Tokenization Services">
                      Tokenization Services
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Blockchain Audit and Security">
                      Blockchain Audit and Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Layer 1 & Layer 2 Blockchain Solutions We Offer</h2>
              <p>
                Asvayuk Technologies provides comprehensive blockchain
                development services, delivering secure, scalable, and
                high-performance Layer 1 & Layer 2 solutions for businesses in
                Singapore.
              </p>
            </div>

            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Custom Layer 1 Blockchain Development Singapore"
                    cardHeading="Custom Layer 1 Blockchain Development"
                    cardPara="Build secure, custom blockchain infrastructures designed to meet your business goals and architecture."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Layer 2 Scaling Solutions Singapore"
                    cardHeading="Layer 2 Scaling Solutions"
                    cardPara="Enhance transaction speed and reduce costs with advanced Layer 2 blockchain scaling technologies."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Smart Contract Development Singapore"
                    cardHeading="Smart Contract Development"
                    cardPara="Develop secure and automated smart contracts that power decentralized and trustless operations."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Blockchain for Secure Data Management Singapore"
                    cardHeading="Blockchain for Secure Data Management"
                    cardPara="Protect sensitive business data with blockchain-backed privacy, security, and verification systems."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Tokenization & Asset Management Singapore"
                    cardHeading="Tokenization & Asset Management"
                    cardPara="Tokenize digital or real-world assets to improve liquidity, transparency, and flexible asset management."
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Cross-Chain Interoperability Solutions Singapore"
                    cardHeading="Cross-Chain Interoperability"
                    cardPara="Enable seamless communication and data exchange between different blockchain networks."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="supercharge-section">
          <Container>
            <Row>
              <div className="choice pb-5">
                <h2 className="fw-semibold">
                  Empower Your Business with Asvayuk Technologies' Blockchain
                  Expertise in Singapore
                </h2>
                <p className="pt-2">
                  Leverage our expertise to enhance your blockchain
                  infrastructure with scalable, secure Layer 1 & Layer 2
                  solutions.
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">
                      Customized Blockchain Solutions:
                    </span>
                    Tailored to meet unique business requirements.
                  </li>
                  <li>
                    <span className="fw-bold h6">Scalable & Robust:</span>
                    Solutions that evolve with your business needs.
                  </li>
                  <li>
                    <span className="fw-bold h6">Data Security Focused:</span>
                    Prioritizing secure data management and compliance.
                  </li>
                </ul>
              </div>
            </Row>
          </Container>
        </section>

        <Experience
          expTitle="Why Choose Asvayuk for Layer 1 & Layer 2 Blockchain Development in Singapore?"
          point1="Expert Blockchain Team"
          pointPara1="Experienced in developing secure, scalable blockchain solutions."
          point2="Innovative & Industry-Ready"
          pointPara2="Solutions designed to meet industry-specific requirements."
          point3="Customer-Focused Design"
          pointPara3="User-friendly designs that maximize efficiency and engagement."
          point4="Communication & Support"
          pointPara4="Ongoing support with clear, consistent updates."
          altTags={{
            group1: "Best Layer 1 & Layer 2 Blockchain Developers in Singapore",
            group2: "Scalable Blockchain Solutions in Singapore",
            group3: "Custom Blockchain Development Company in Singapore",
            group4: "Secure Layer 1 Blockchain Development Services",
            mockups: "Layer 2 Blockchain Scaling Solutions",
            whiteLogo: "End-to-End Blockchain Consulting & Development",
          }}
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default layer;
