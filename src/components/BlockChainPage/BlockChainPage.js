"use client";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import reviewGoogle from "@/assets/Images/review_google.webp";
import GoodFirms from "@/assets/Images/GoodFirms.webp";
import Glassdoor from "@/assets/Images/Glassdoor.webp";
import blockchainSmallBanner from "@/assets/Images/blockchainSmallBanner.webp";
import BlockChainBan4 from "@/assets/Images/BlockChainBan4.png";
import work1 from "@/assets/Images/crypotoImg1.png";
import work2 from "@/assets/Images/crypotoImg2.png";
import work3 from "@/assets/Images/crypotoImg3.png";
import Link from "next/link";
import BannerButton from "@/components/BannerBtn/BannerButton";
import {
  FaBullseye,
  FaEnvelopeOpenText,
  FaMugHot,
  FaRecycle,
  FaRocket,
  FaSearch,
} from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import {
  MdHealthAndSafety,
  MdLocalGroceryStore,
  MdRealEstateAgent,
} from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";
import ContactForm from "../Contactus/ContactFrom";

const BlockChainPage = () => {
  return (
    <>
      <main>
        <section
          className="bannerMlm blockChainDevMainBanner"
          aria-label="Blockchain Web Development in Singapore"
        >
          <Container>
            <Row className="align-items-center">
              <Col xm={7} sm={12} lg={7} md={6}>
                <div className="bannerAreaTop">
                  <div className="logoArea pb-4"></div>
                  <div className="bannerAreaTop_content">
                    <h1 className="h1 mb-5 text-white">
                      <Link href="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">
                        <span className="fw-bold" style={{ color: "#ffbf0b" }}>
                          Pioneering Blockchain Engineering{" "}
                        </span>
                        for the Singapore Digital Economy
                      </Link>
                    </h1>
                    <p className="text-white">
                      Accelerate your transition to Web3 with decentralized, ultra-secure, and transparent ledger solutions. At LayerEx, we specialise in high-calibre blockchain architecture in Singapore, empowering enterprises to build trust-less systems, crypto-assets, and specialized dApps tailored to unique commercial goals.
                    </p>
                  </div>
                  <div className="review_section mb-5">
                    <div className="review_img">
                      <Image
                        src={reviewGoogle}
                        alt="blockchain development company in Singapore"
                      />
                    </div>
                    <div className="review_img mx-2">
                      <Image
                        src={GoodFirms}
                        alt="blockchain app development services Singapore"
                      />
                    </div>
                    <div className="review_img">
                      <Image
                        src={Glassdoor}
                        alt="Singapore blockchain development agency"
                      />
                    </div>
                  </div>
                  <div className="lst_text_banner">
                    <div className="item1">
                      <div className="ml-0">
                        <p className="text-white">
                          *Elite Customisation <span className="mx-1"></span>{" "}
                          | <span className="mx-1"></span>*Global Security Benchmarks<span className="mx-1"></span> |{" "}
                          <span className="mx-1"></span> *Round-the-clock Technical Governance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={5} sm={12} lg={5} md={6} className="bannerAreaTop">
                <div className="overflow-hidden w-100 h-100">
                  <div className='overflow-hidden w-100 h-100 bg-light rounded-4'>
                    {/* <iframe
                    width="100%"
                    height="480px"
                    src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca"
                    allowfullscreen
                    className="mb-0 rounded-4"
                    style={{ background: "transparent" }}
                  ></iframe> */}
                    <ContactForm />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <div
            className="container-fluid"
            style={{ position: "relative", backgroundColor: "#2acda814" }}
          >
            <div className="animation_section">
              <svg viewBox="0 0 1320 300">
                <text
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                  style={{ fontSize: "85px" }}
                >
                  BLOCKCHAIN DEVELOPMENT
                </text>
              </svg>
            </div>
          </div>
        </section>
        <section>
          <div
            className="project-count-sec top_style"
            style={{ paddingBottom: "120px", paddingTop: "50px" }}
          >
            <div className="container">
              <div className="row">
                <div
                  className="col-12 d-flex mobile_device"
                  style={{ justifyContent: "center" }}
                >
                  <div className="pro-box text-center">
                    <span className="pro-head">300+</span>
                    <p>
                      Blockchain Development <br /> Projects Delivered
                    </p>
                  </div>
                  <div
                    className="pro-box text-center mobile_padding_set"
                    style={{ paddingLeft: "0px" }}
                  >
                    <span className="pro-head">12+</span>
                    <p>
                      Years of <br /> Excellence
                    </p>
                  </div>
                  <div
                    className="pro-box text-center team_Experts"
                    style={{
                      border: "unset !important",
                      padding: "0px 0px 0px 10px",
                    }}
                  >
                    <span className="pro-head">80+</span>
                    <p>
                      Team of <br />
                      Specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box" id="feature">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-65 col-sm-12 ">
                <div className="mt-5">
                  <h2>
                   Revolutionise Your<br />
                     Operations with 
                    <br /> LayerEx Blockchain Expertise
                  </h2>
                  <p className="my-3">
                    If you are searching for a premier blockchain consultancy in Singapore, LayerEx is your dedicated strategic partner. Contact our technical team today to discover how distributed ledger technology can future-proof your business model.
                  </p>
                </div>
                <div className="my-5">
                  <BannerButton
                    btnTitle="Discover Our Web3 Solutions"
                    blockChainClass="blue_btn"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-65 col-sm-12">
                <div>
                  <Image
                    src={blockchainSmallBanner}
                    alt="blockchain web development Singapore"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box" id="feature">
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                Why Choose Our Blockchain Development Services?
              </h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape text-center">
                      <FaEnvelopeOpenText
                        className="secondary-color"
                        alt="Best Blockchain Web Development Company in Singapore"
                      />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Master Blockchain Architects</a>
                    </h3>
                    <p>
                      Our Singapore-based engineering team possesses deep-domain expertise in crafting high-performance, scalable decentralised applications that integrate flawlessly with your existing infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaBullseye alt="Top Blockchain Technology Solutions in Singapore" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Tailored Decentralised Frameworks</a>
                    </h3>
                    <p>
                      We recognise that every enterprise has distinct hurdles. Our blockchain app services in Singapore are engineered to provide custom-coded environments for finance, healthcare, and logistics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaRocket alt="Secure & Decentralized Blockchain Apps in Singapore" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>End-to-End Web3 Engineering</a>
                    </h3>
                    <p>
                      From private chain development to decentralized application (dApp) deployment, we ensure local businesses can leverage smart contracts to automate complex digital operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box col-12 pl-0 pr-0" id="image-with-text">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap">
              <div className="col-lg-6">
                <Image
                  src={BlockChainBan4}
                  alt="blockchain development company in Singapore"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-3 text-white text-start">
                   Why Leading Brands Trust LayerEx for Blockchain Innovation
                  </h2>
                </div>
                <div className="about-item text-white">
                  <p className="text-white">
                    As a top-tier blockchain developer in Singapore, we provide robust, immutable, and high-efficiency technical roadmaps. Our specialists excel in dApps, DeFi protocols, NFT ecosystems, and private consortium networks, ensuring your project is ready for the 2026 digital landscape.
                  </p>
                 
                  <div className="list_view_text">
                    <ul>
                      <li>Bespoke Decentralised Engineering</li>
                      <li>Hardened & Audit-Ready Smart Contracts</li>
                      <li>Decentralised Application (dApp) Ecosystems</li>
                      <li>Enterprise-Grade Distributed Ledgers</li>
                      <li>Dedicated 24/7 Node Support & Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box col-12 pl-0 pr-0 mt-3" id="services">
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                Cross-Sector Blockchain Integration
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <RiMoneyRupeeCircleFill alt="Custom Blockchain Solutions for Businesses in Singapore" />
                  </div>
                  <h3 className="color_343a40">Banking & Fintech</h3>
                  <p>
                    Facilitate instantaneous, borderless transactions and eliminate manual compliance overhead through automated, secure smart contracts.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdHealthAndSafety alt="Expert Web3 Development Services in Singapore" />
                  </div>
                  <h3 className="color_343a40">Modern Healthcare</h3>
                  <p>
                    Protect sensitive patient data with immutable records, ensuring seamless interoperability and privacy across regional provider networks.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaRecycle alt="Blockchain-Powered Platform Development in Singapore" />
                  </div>
                  <h3 className="color_343a40">Logistics & Supply Chain</h3>
                  <p>
                    Achieve total visibility with real-time asset tracking and transparent verification of global transaction histories.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdRealEstateAgent alt="Leading Blockchain App Developers in Singapore" />
                  </div>
                  <h3 className="color_343a40">Secure Real Estate</h3>
                  <p>
                    Streamline property transfers and mitigate title fraud using transparent ownership ledgers and smart escrow protocols.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <IoSchool alt="Advanced Smart Contract & Blockchain Integration in Singapore" />
                  </div>
                  <h3 className="color_343a40">Academic Credentials</h3>
                  <p>
                    Issue tamper-proof digital certificates and simplify qualification verification for employers throughout Singapore.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdLocalGroceryStore alt="Best Blockchain Web Development Company in Singapore" />
                  </div>
                  <h3 className="color_343a40">Web3 E-commerce</h3>
                  <p>
                    Build decentralised marketplaces with lower fees, secure native payment gateways, and fraud-resistant tracking systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box col-12 pl-0 pr-0" id="portfolio">
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424 pt-3">
                Our Work in Blockchain Development
              </h2>
            </div>
            <div className="row d-flex align-items-center flex-wrap">
              <PortfolioItem
                workImage={work1}
                altText="Best Blockchain Web Development Company in Singapore"
                projectTitle="Blockchain"
                projectCategory="Blockchain Development"
                projectLink="#"
              />
              <PortfolioItem
                workImage={work2}
                altText="Custom Blockchain Solutions for Businesses in Singapore"
                projectTitle="Blockchain"
                projectCategory="Blockchain Development"
                projectLink="#"
              />
              <PortfolioItem
                workImage={work3}
                altText="Crypto Web Development Company in Singapore"
                projectTitle="Blockchain"
                projectCategory="Blockchain Development"
                projectLink="#"
              />
            </div>
          </div>
        </section>

        <section
          className="section-box col-12 pl-0 pr-0 bg_f8f8ff"
          id="our_work"
        >
          <Container>
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                Our Precision Approach to Web3 Development
              </h2>
            </div>
            <Row>
              <Col md={12}>
                <div className="work-process-wrap d-flex flex-wrap justify-content-start align-items-start">
                  <Row>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaSearch
                            className="icon-md text-white"
                            alt="Enterprise Blockchain Development Company in Singapore"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            1
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Strategic Discovery
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We evaluate your specific business logic to select the ideal blockchain protocol and consensus mechanism for your goals.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaBullseye
                            className="icon-md text-white"
                            alt="Decentralized Application (DApp) Development in Singapore"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            2
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Infrastructure Blueprinting
                          </h3>
                          <p className="mb-0 font_weight_light">
                            Designing a scalable architecture that prioritises high throughput, security, and long-term network stability.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaMugHot
                            className="icon-md text-white"
                            alt="Leading NFT Marketplace Development in Singapore"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            3
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Smart Contract Engineering
                          </h3>
                          <p className="mb-0 font_weight_light">
                            Developing sophisticated, self-executing agreements that handle complex logic without the need for human intervention.{" "}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaRocket
                            className="icon-md text-white"
                            alt="Ethereum & Binance Smart Chain Development in Singapore"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            4
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Deployment & Governance
                          </h3>
                          <p className="mb-0 font_weight_light">
                            Launching your solution to the mainnet and providing the continuous monitoring required to ensure 100% uptime.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default BlockChainPage;
