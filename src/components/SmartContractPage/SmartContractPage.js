"use client";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import reviewGoogle from "@/assets/Images/review_google.webp";
import GoodFirms from "@/assets/Images/GoodFirms.webp";
import Glassdoor from "@/assets/Images/Glassdoor.webp";
import work1 from "@/assets/Images/crypotoImg1.png";
import work2 from "@/assets/Images/crypotoImg3.png";
import work3 from "@/assets/Images/crypotoImg2.png";
import ReactNativeSmallBan2 from "@/assets/Images/SmartContractImg3.svg";
import ReactNativeSmallBan3 from "@/assets/Images/SmartContractImg2.svg";
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

const SmartContractPage = () => {
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
                        Hire the Best
                        <span className="fw-bold" style={{ color: "#ffbf0b" }}>
                          {" "}
                          Smart Contract Developers
                        </span>{" "}
                        in Singapore
                      </Link>
                    </h1>
                    <p className="text-white">
                      At Asvayuk Technologies, our team specializes in smart
                      contract development, ensuring secure, efficient, and
                      innovative blockchain solutions tailored to your business
                      goals. Unlock the potential of decentralized technology
                      with our trusted expertise in the Singapore market. We
                      offer: *Smart Contract Development
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
                          *Smart Contract Development{" "}
                          <span className="mx-1"></span> |{" "}
                          <span className="mx-1"></span>*Blockchain Security
                          Experts <span className="mx-1"></span> |{" "}
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
                  SMART CONTRACT
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
                      Smart Contract <br /> Projects Completed
                    </p>
                  </div>
                  <div
                    className="pro-box text-center mobile_padding_set"
                    style={{ paddingLeft: "0px" }}
                  >
                    <span className="pro-head">12+</span>
                    <p>
                      Years of <br /> Blockchain Expertise
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
                      Certified <br />
                      Developers
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
                  <h2>
                    Revolutionize Your Business with Expert Smart Contract
                    Development
                  </h2>
                  <p className="my-3">
                    Asvayuk Technologies offers top-tier smart contract
                    solutions to automate processes and ensure secure,
                    transparent transactions. Our developers craft custom
                    blockchain applications that drive innovation and
                    efficiency.
                  </p>
                </div>
                <div className="my-5">
                  <BannerButton
                    btnTitle="Explore Smart Contract Solutions!"
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
          aria-label="Smart Contract Development Features"
        >
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424 mt-2">
                Your Trusted Partner for Smart Contract Development
              </h2>
            </div>

            <div className="row">
              {/* Feature 1 */}
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape text-center">
                      <FaShieldAlt
                        className="secondary-color"
                        alt="Tailored Smart Contract Solutions"
                      />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Tailored Smart Contract Solutions</a>
                    </h3>
                    <p>
                      We develop fully customized smart contract solutions that
                      ensure automation, accuracy, transparency, and enhanced
                      operational efficiency for your blockchain ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <IoIosStopwatch alt="On-Time Project Delivery" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>On-Time Project Delivery</a>
                    </h3>
                    <p>
                      Our expert blockchain developers follow a streamlined and
                      efficient development cycle, ensuring your smart contract
                      project is delivered on time without compromising quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaQuestionCircle alt="Comprehensive Support" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Comprehensive Support</a>
                    </h3>
                    <p>
                      From initial consulting to deployment and ongoing
                      maintenance, we offer complete support to ensure your
                      smart contract solution functions flawlessly at all times.
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
                  src={ReactNativeSmallBan2} // Replace with Smart Contract image if available
                  alt="Smart Contract Development Singapore"
                  className="img-fluid pt-3"
                />
              </div>

              <div className="col-lg-6 mt-2">
                <div className="section-title">
                  <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-1 text-white text-start">
                    Why Choose Asvayuk Technologies for Smart Contract
                    Development?
                  </h2>
                </div>

                <div className="about-item text-white">
                  <p className="font_16 text-white pb-2">
                    Asvayuk Technologies is a trusted name in smart contract
                    development, helping businesses in Singapore and beyond
                    leverage blockchain technology. Our team specializes in
                    creating secure, automated, and highly efficient smart
                    contracts to streamline your operations.
                  </p>

                  <p className="font_16 text-white pt-1">
                    From concept to deployment, we offer end-to-end smart
                    contract solutions tailored to your specific needs, ensuring
                    transparency, security, and accuracy for your blockchain
                    applications in the SG region.
                  </p>

                  <ul>
                    <li>Custom Smart Contract Development</li>
                    <li>Smart Contract Auditing & Testing</li>
                    <li>
                      Deployment on Multiple Blockchain Platforms (Ethereum,
                      Binance Smart Chain, Polygon, etc.)
                    </li>
                    <li>24/7 Technical Support</li>
                    <li>Seamless Integration with Existing Systems</li>
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
                Key Topics In Smart Contract Development Expertise
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <BsFiletypePsd alt="Core Concepts of Smart Contracts" />
                  </div>
                  <h3 className="color_343a40">
                    Core Concepts of Smart Contracts
                  </h3>
                  <p>
                    Understanding the fundamentals of smart contracts, including
                    their definition, purpose, and how they function on
                    blockchain networks.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdMiscellaneousServices alt="Blockchain Platforms" />
                  </div>
                  <h3 className="color_343a40">Blockchain Platforms</h3>
                  <p>
                    Exploring various blockchain platforms such as Ethereum,
                    Binance Smart Chain, Solana, and others for deploying smart
                    contracts.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaShopify alt="Smart Contract Programming Languages" />
                  </div>
                  <h3 className="color_343a40">
                    Smart Contract Programming Languages
                  </h3>
                  <p>
                    Expertise in programming languages like Solidity, Vyper,
                    Rust, and their application in developing smart contracts.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdIntegrationInstructions alt="Development Tools and Frameworks" />
                  </div>
                  <h3 className="color_343a40">
                    Development Tools & Frameworks
                  </h3>
                  <p>
                    Familiarity with tools like Remix, Truffle, and Hardhat for
                    writing, testing, and deploying smart contracts.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaComputer alt="Security and Auditing" />
                  </div>
                  <h3 className="color_343a40">Security & Auditing</h3>
                  <p>
                    Understanding how to audit and secure smart contracts to
                    prevent vulnerabilities and ensure reliability and safety.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <GrSupport alt="Smart Contract Deployment and Maintenance" />
                  </div>
                  <h3 className="color_343a40">Deployment & Maintenance</h3>
                  <p>
                    Learning about the deployment process, including testnets,
                    mainnet deployment, and post-deployment support and upgrades
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
                Our Work in Smart Contract Development
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
                Our Smart Contract Development Process In Singapore
              </h2>
            </div>
            <Row>
              <Col md={12}>
                <div className="work-process-wrap d-flex flex-wrap justify-content-start align-items-start">
                  <Row>
                    {/* Step 1 */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaSearch
                            className="icon-md text-white"
                            alt="Discovery Phase"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            1
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Discovery
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We begin by understanding your specific smart
                            contract requirements, analyzing your business use
                            case, and selecting the optimal blockchain platform
                            for your project.
                          </p>
                        </div>
                      </div>
                    </Col>

                    {/* Step 2 */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaBullseye
                            className="icon-md text-white"
                            alt="Planning Phase"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            2
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Planning
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We create a strategic plan for your smart contract,
                            carefully selecting the right blockchain network and
                            structuring the contract to meet your business
                            goals, ensuring security, scalability, and
                            performance.
                          </p>
                        </div>
                      </div>
                    </Col>

                    {/* Step 3 */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaMugHot
                            className="icon-md text-white"
                            alt="Design & Development Phase"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            3
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Design & Development
                          </h3>
                          <p className="mb-0 font_weight_light">
                            Our team designs and develops robust, secure, and
                            scalable smart contracts tailored to your business
                            needs, ensuring they are efficient and
                            user-friendly.
                          </p>
                        </div>
                      </div>
                    </Col>

                    {/* Step 4 */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaRocket
                            className="icon-md text-white"
                            alt="Testing & Launch"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            4
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Testing & Launch
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We conduct thorough testing to ensure your smart
                            contract performs as expected. Once validated, we
                            assist in launching the contract and ensure smooth
                            execution and security.
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

export default SmartContractPage
