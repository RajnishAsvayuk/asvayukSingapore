"use client";
import React from "react";
import Image from "next/image";
import cryptoBanner from "@/assets/Images/CryptoWallet.webp";
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

const cryptoWallet = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Products"}
          pageName={"Crypto Wallet Solutions"}
          pageHeading={"Crypto Wallet Solutions in Singapore "}
          pagePara={
            "Discover Asvayuk Technologies' crypto wallet solutions in Singapore , designed to enhance security, decentralization, and user control over digital assets. Our wallets offer seamless management of cryptocurrencies with robust blockchain integration and user-friendly interfaces."
          }
          pageImg={cryptoBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                Customized Crypto Wallet Solutions{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  In Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Asvayuk Technologies offers tailor-made crypto wallet solutions
                in Singapore that prioritize security, ease of use, and
                blockchain integration. Our wallets are designed to protect your
                digital assets while offering a seamless experience for both
                individuals and businesses.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Crypto Wallet Development in Singapore">
                      Crypto Wallet Development in Singapore
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Decentralized Wallet Solutions Singapore"
                    >
                      Decentralized Wallet Solutions Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Secure Wallet Features Singapore">
                      Secure Wallet Features Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Blockchain-Based Security Singapore">
                      Blockchain-Based Security Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Customizable Wallet Solutions Singapore">
                      Customizable Wallet Solutions Singapore
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Multi-Currency Wallets Singapore">
                      Multi-Currency Wallets Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Smart Wallet Technology Singapore">
                      Smart Wallet Technology Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#" title="User-Friendly Crypto Wallets Singapore">
                      User-Friendly Crypto Wallets Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Crypto Asset Management Singapore">
                      Cryptocurrency Asset Management Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Blockchain Wallet Integration Singapore">
                      Blockchain Wallet Integration Singapore
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
              <h2 className="px-5 mx-5">
                Crypto Wallet Solutions We Offer in Singapore
              </h2>
              <p className="mt-3 pb-3">
                Asvayuk Technologies provides advanced crypto wallet solutions
                designed to ensure secure, decentralized, and seamless
                management of digital assets across multiple platforms in
                Singapore. Our wallet systems offer high-level encryption,
                multi-currency support, and Web3 compatibility to power
                next-generation blockchain applications.
              </p>
            </div>

            <div>
              <Row className="gy-4">
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service1}
                    altText="Crypto Wallet Development Company in Singapore"
                    cardHeading="Crypto Wallet Development"
                    cardPara="Develop secure and scalable crypto wallets designed to store, send, and manage digital assets effortlessly."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service2}
                    altText="Blockchain Wallet Integration Services in Singapore"
                    cardHeading="Blockchain Wallet Integration"
                    cardPara="Integrate blockchain functionalities into your wallet for improved security, decentralized control, and seamless asset management."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service3}
                    altText="Multi-Currency Crypto Wallet Solutions in Singapore"
                    cardHeading="Multi-Currency Support"
                    cardPara="Support multiple cryptocurrencies in one wallet, enabling unified and efficient management of diverse digital assets."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="Mobile Crypto Wallet Development in Singapore"
                    cardHeading="Mobile Crypto Wallets"
                    cardPara="Build mobile-optimized crypto wallets enabling users to access and manage their digital assets anytime, anywhere."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="Smart Wallet Development Company in Singapore"
                    cardHeading="Smart Wallet Features"
                    cardPara="Implement intelligent wallet functionalities such as automated transactions, enhanced security layers, and seamless Web3 interactions."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="Blockchain Analytics Solutions in Singapore"
                    cardHeading="Blockchain Analytics"
                    cardPara="Enable transaction monitoring, performance insights, and secure activity tracking across crypto wallets using advanced blockchain analytics."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                Benefits of{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  Crypto Wallet Solutions in Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                Our crypto wallet solutions provide advanced security, complete
                user control, seamless digital asset management, and
                blockchain-backed transparency. Designed for individuals and
                businesses in Singapore, our wallets ensure decentralized,
                secure, and future-ready digital currency operations.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Secure Crypto Wallets in Singapore">
                      Secure and Private Crypto Wallets
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title="Decentralized Asset Management Singapore"
                    >
                      Decentralized Asset Management
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title="Smart Contract Wallet Integration Singapore"
                    >
                      Smart Contract Wallet Integration
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Blockchain Transparency Singapore">
                      Blockchain-Based Transparency
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title="User-Controlled Wallet Features Singapore"
                    >
                      User-Controlled Wallet Features
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Multi-Currency Wallets Singapore">
                      Multi-Currency Wallets
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Wallet Security Features Singapore">
                      Wallet Security Features
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Customizable Wallet Designs Singapore">
                      Customizable Wallet Designs
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Real-Time Wallet Tracking Singapore">
                      Real-Time Wallet Tracking
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title="Scalable Crypto Wallet Solutions Singapore"
                    >
                      Scalable Crypto Wallet Solutions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="supercharge-section">
          <div className="container">
            <div className="row">
              <div className="choice pb-5">
                <h2 className="fw-semibold">
                  Supercharge Your Digital Asset Management with Crypto Wallet
                  Solutions from Asvayuk Technologies
                </h2>

                <p className="pt-2">
                  Unlock the full potential of your cryptocurrency assets with
                  Asvayuk Technologies' advanced crypto wallet solutions. Our
                  decentralized wallets provide enhanced security, seamless
                  usability, scalability, and complete user control over digital
                  assets.
                </p>

                <ul>
                  <li>
                    <span className="fw-bold h6">
                      Custom Crypto Wallet Development:
                    </span>{" "}
                    Tailored wallet solutions designed to meet your business
                    needs with strong security and blockchain integration.
                  </li>

                  <li>
                    <span className="fw-bold h6">Multi-Currency Support:</span>{" "}
                    Seamlessly manage multiple cryptocurrencies within a single,
                    unified wallet.
                  </li>

                  <li>
                    <span className="fw-bold h6">Blockchain Transparency:</span>{" "}
                    Enjoy transparent, decentralized, and tamper-proof digital
                    asset management powered by blockchain.
                  </li>

                  <li>
                    <span className="fw-bold h6">Security-Centric Design:</span>{" "}
                    Built-in encryption, authentication layers, and advanced
                    security protocols to protect your digital assets.
                  </li>

                  <li>
                    <span className="fw-bold h6">User-Friendly Interface:</span>{" "}
                    Smooth and intuitive UI/UX for effortless crypto
                    transactions and asset tracking.
                  </li>

                  <li>
                    <span className="fw-bold h6">Ongoing Support:</span>{" "}
                    Reliable post-launch maintenance and updates to ensure your
                    wallet remains secure, efficient, and future-ready.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Asvayuk for Crypto Wallet Solutions?"
          point1="Blockchain Expertise"
          pointPara1="We have deep experience in blockchain-based crypto wallet development for maximum security and functionality."
          point2="Secure and Reliable"
          pointPara2="Our crypto wallets are designed with the highest security standards to protect your digital assets."
          point3="Tailored Solutions"
          pointPara3="We customize our wallet solutions to meet the specific needs of your business or personal use."
          point4="Clear Communication"
          pointPara4="We maintain transparency throughout the development process, keeping you informed at every stage."
          altTags={{
            group1: "Crypto Wallet Development Company",
            group2: "Crypto Payment Gateway & Wallet Integration",
            group3: "Affordable Crypto Wallet Development Services",
            group4: "Secure Blockchain Wallet Development Services",
            mockups: "Best Cryptocurrency Wallet Development",
            whiteLogo: "Crypto Wallet Solutions",
          }}
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default cryptoWallet;
