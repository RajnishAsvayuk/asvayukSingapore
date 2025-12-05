"use client";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import reviewGoogle from "@/assets/Images/review_google.webp";
import GoodFirms from "@/assets/Images/GoodFirms.webp";
import Glassdoor from "@/assets/Images/Glassdoor.webp";
import work1 from "@/assets/Images/work1.png";
import work2 from "@/assets/Images/blockchainwork1.png";
import work3 from "@/assets/Images/work3.png";
import ReactNativeSmallBan2 from "@/assets/Images/blockImg.png";
import ReactNativeSmallBan3 from "@/assets/Images/blockImg2.jpg";
import Link from "next/link";
import BannerButton from "@/components/BannerBtn/BannerButton";
import {
  FaBullseye,
  FaMugHot,
  FaQuestionCircle,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaShopify,
} from "react-icons/fa";
import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";
import { FaComputer } from "react-icons/fa6";
import { IoIosStopwatch } from "react-icons/io";
import { BsFiletypePsd } from "react-icons/bs";
import {
  MdIntegrationInstructions,
  MdMiscellaneousServices,
} from "react-icons/md";
import { GrSupport } from "react-icons/gr";
import ContactForm from "../Contactus/ContactFrom";

const BlockchainDevPage = () => {
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
                        The Best
                        <span className="fw-bold" style={{ color: "#ffbf0b" }}>
                          {" "}
                          Blockchain Developers
                        </span>{" "}
                        in Singapore
                      </Link>
                    </h1>
                    <p className="text-white">
                      At Asvayuk Technologies, we specialize in delivering
                      innovative blockchain solutions customized to meet your
                      business needs in Singapore. Our team of expert developers
                      is dedicated to building secure, scalable, and
                      forward-thinking blockchain applications across a wide
                      range of industries in the competitive SG region. We
                      offer: *Blockchain Solutions Development
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
                          *Premium Customization <span className="mx-1"></span>{" "}
                          | <span className="mx-1"></span>*Industry-Leading
                          Security Standards<span className="mx-1"></span> |{" "}
                          <span className="mx-1"></span> *24/7 Expert Technical
                          Support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={5} sm={12} lg={5} md={6} className="bannerAreaTop">
                <div className="overflow-hidden w-100 h-100">
                  {/* <iframe
                    width="100%"
                    height="480px"
                    src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca"
                    allowFullScreen
                    className="mb-0 rounded-4"
                    style={{ background: "transparent" }}
                  ></iframe> */}
                  <ContactForm/>
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
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                  BLOCKCHAIN SOLUTIONS
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section>
          <div
            className="project-count-sec top_style"
            style={{
              paddingBottom: "120px",
              paddingTop: "50px",
              marginBottom: "20px",
            }}
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
                      Blockchain <br /> Projects Delivered
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

        <section
          className="section-box"
          id="feature"
          aria-label="Full-stack React Native developers Singapore"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-65 col-sm-12 ">
                <div className="mt-5">
                  <h2>Empower Your Business with Our Blockchain Solutions!</h2>
                  <p className="my-3">
                    Asvayuk Technologies is a leader in blockchain development,
                    offering custom solutions to transform businesses. From
                    smart contracts to decentralized applications, we bring
                    innovation and security to every project.
                  </p>
                </div>
                <div className="my-5">
                  <BannerButton
                    btnTitle="Explore Blockchain Solutions!"
                    blockChainClass="blue_btn"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-65 col-sm-12">
                <div>
                  <Image
                    src={ReactNativeSmallBan3}
                    alt="React Native app development experts Singapore"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-box"
          id="feature"
          aria-label="Blockchain Development Solutions"
        >
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424 mt-2">
                Why Singapore Businesses Trust Asvayuk Technologies
              </h2>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape text-center">
                      <FaShieldAlt
                        className="secondary-color"
                        alt="Singapore-Based Blockchain Experts"
                      />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Singapore-Based Blockchain Experts</a>
                    </h3>
                    <p>
                      Our expert team understands Singapore’s tech ecosystem and
                      builds secure, scalable blockchain solutions aligned with
                      local market needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <IoIosStopwatch alt="Tailored Solutions for Singapore Businesses" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Tailored Solutions for Singapore Businesses</a>
                    </h3>
                    <p>
                      We develop custom blockchain platforms designed for
                      Singapore’s finance, logistics, education, and corporate
                      sectors for high efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaQuestionCircle alt="Reliable Singapore Support" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>24/7 Reliable Support in Singapore</a>
                    </h3>
                    <p>
                      Our dedicated support team ensures smooth deployment and
                      quick assistance for all blockchain services across
                      Singapore.
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
                  src={ReactNativeSmallBan2}
                  alt="Custom React Native development Singapore"
                  className="img-fluid pt-3"
                />
              </div>
              <div className="col-lg-6 mt-2">
                <div className="section-title">
                  <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-1 text-white text-start">
                    Why Choose Asvayuk Technologies for Blockchain Development
                    in Singapore?
                  </h2>
                </div>
                <div className="about-item text-white">
                  <p className="font_16 text-white pb-2">
                    Asvayuk Technologies is recognized as one of the top
                    blockchain development companies in Singapore. Our team has
                    been pioneering blockchain solutions since 2013, delivering
                    secure, scalable, and high-performance blockchain
                    applications that give your business a competitive edge in
                    the APAC region.
                  </p>
                  <p className="font_16 text-white pt-1">
                    We specialize in creating advanced blockchain platforms that
                    are fully customizable, secure, and optimized for
                    scalability. Whether you need to develop decentralized
                    applications (DApps), cryptocurrency solutions, or
                    blockchain-based business platforms, we are your go-to
                    partner in Singapore.
                  </p>
                  <ul>
                    <li>Custom Blockchain Solutions for Business</li>
                    <li>High-Level Security and Scalability</li>
                    <li>Expert Blockchain Developers</li>
                    <li>24/7 Support and Maintenance</li>
                    <li>Seamless Blockchain Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box col-12 pl-0 pr-0" id="services">
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                Types of Expert Blockchain Developers in Singapore
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <BsFiletypePsd alt="Core Blockchain Developers" />
                  </div>
                  <h3 className="color_343a40">Core Blockchain Developers</h3>
                  <p>
                    Focus on the architecture and design of blockchain systems.
                    Responsible for developing and maintaining the blockchain
                    protocol. Work on consensus algorithms, network
                    architecture, and security features.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdMiscellaneousServices alt="Blockchain Software Developers" />
                  </div>
                  <h3 className="color_343a40">
                    Blockchain Software Developers
                  </h3>
                  <p>
                    We provide seamless blockchain integration with your
                    existing systems, ensuring enhanced security, scalability,
                    and performance for your business in Singapore.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaShopify alt="Blockchain Security Engineers" />
                  </div>
                  <h3 className="color_343a40">
                    Blockchain Security Engineers
                  </h3>
                  <p>
                    Focus on securing blockchain platforms and applications.
                    Perform audits, penetration tests, and vulnerability
                    assessments. Expertise in cryptography, secure coding
                    practices, and risk mitigation.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdIntegrationInstructions alt="Smart Contract Developers" />
                  </div>
                  <h3 className="color_343a40">Smart Contract Developers</h3>
                  <p>
                    Specialize in writing, testing, and deploying smart
                    contracts. Ensure contracts are secure, efficient, and
                    error-free.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaComputer alt="Frontend Blockchain Developers" />
                  </div>
                  <h3 className="color_343a40">
                    Frontend Blockchain Developers
                  </h3>
                  <p>
                    Focus on user interfaces for blockchain applications. Ensure
                    seamless interaction between users and the blockchain
                    interface.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <GrSupport alt="Backend Blockchain Developers" />
                  </div>
                  <h3 className="color_343a40">
                    Backend Blockchain Developers
                  </h3>
                  <p>
                    Manage servers, databases, and APIs connecting to the
                    blockchain. Ensure smooth integration of blockchain
                    functionalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box col-12 pl-0 pr-0" id="portfolio">
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                Our Work in Blockchain Development
              </h2>
            </div>
            <div className="row d-flex align-items-center flex-wrap">
              <PortfolioItem
                workImage={work1}
                altText="Best Crypto Exchange Development Company in Singapore"
                projectTitle="Crypto Exchange"
                projectCategory="Crypto Exchange Development"
                projectLink="#"
              />
              <PortfolioItem
                workImage={work2}
                altText="Secure Cryptocurrency Exchange Solutions in Singapore"
                projectTitle="Crypto Exchange"
                projectCategory="Crypto Exchange Development"
                projectLink="#"
              />
              <PortfolioItem
                workImage={work3}
                altText="Custom Crypto Trading Software Development in Singapore"
                projectTitle="Crypto Exchange"
                projectCategory="Crypto Exchange Development"
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
                Our Blockchain Development Process
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
                            alt="Custom Blockchain App Development in Singapore"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            1
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Consultation & Requirements Gathering
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We start by thoroughly understanding your business
                            needs, objectives, and technology requirements to
                            ensure we craft the perfect blockchain solution.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaBullseye
                            className="icon-md text-white"
                            alt="Expert Blockchain Solutions in Singapore"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            2
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Blockchain Architecture Design
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We design a secure, scalable, and high-performance
                            blockchain architecture, aligning it with your
                            specific business requirements.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaMugHot
                            className="icon-md text-white"
                            alt="Leading Blockchain Development Company in Singapore"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            3
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Development & Smart Contract Integration
                          </h3>
                          <p className="mb-0 font_weight_light">
                            Our expert developers build the blockchain solution,
                            integrating secure smart contracts for transparency,
                            efficiency, and security.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaRocket
                            className="icon-md text-white"
                            alt="Best Blockchain Developers in Singapore"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            4
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Testing, Deployment & Support
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We rigorously test the blockchain solution for
                            functionality, followed by smooth deployment and
                            continuous support to ensure its optimal
                            performance.
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
  )
}

export default BlockchainDevPage
