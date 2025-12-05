"use client";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import reviewGoogle from "@/assets/Images/review_google.webp";
import GoodFirms from "@/assets/Images/GoodFirms.webp";
import Glassdoor from "@/assets/Images/Glassdoor.webp";
import work1 from "@/assets/Images/mlmwork2.png";
import work2 from "@/assets/Images/mlmwork1.png";
import work3 from "@/assets/Images/mlmwork3.png";
import ReactNativeSmallBan2 from "@/assets/Images/mlmgImg2.png";
import ReactNativeSmallBan3 from "@/assets/Images/shopify_store_app.webp";
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

const MLMDevPage = () => {
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
                          MLM
                        </span>{" "}
                        Software Developers in Singapore
                      </Link>
                    </h1>
                    <p className="text-white">
                      Asvayuk Technologies is one of the leading names in MLM
                      software development, known for providing innovative and
                      tailored solutions for multi-level marketing businesses
                      across the APAC region. We ensure your platform meets the
                      highest standards for High-end Customization, Top Security
                      Standards, and provide 24/7 Technical Support for your
                      operations in Singapore.
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
                          *High-end Customization <span className="mx-1"></span>{" "}
                          | <span className="mx-1"></span>*Top Security
                          Standards<span className="mx-1"></span> |{" "}
                          <span className="mx-1"></span> *24/7 Expert Technical
                          Support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={5} sm={12} lg={5} md={6} className="bannerAreaTop ">
                <div className="overflow-hidden w-100 h-100">
                  {/* <iframe
                    width="100%"
                    height="480px"
                    src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca"
                    allowFullScreen
                    className="mb-0 rounded-4"
                    style={{ background: "transparent" }}
                  ></iframe> */}
                  <ContactForm />
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
                  MLM EXPERTS
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
                      MLM Software <br /> Projects Delivered
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
                  <h2>Streamline Your Business with Our MLM Solutions!</h2>
                  <p className="my-3">
                    At Asvayuk Technologies, we specialize in creating
                    customized MLM software tailored to meet your unique
                    requirements. Our solutions are designed to help businesses
                    automate processes, enhance transparency, and improve
                    efficiency in multi-level marketing.
                  </p>
                </div>
                <div className="my-5">
                  <BannerButton
                    btnTitle="Explore MLM Solutions!!"
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
          aria-label="MLM Platform Solutions"
        >
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424 mt-2">
                Discover the Benefits of Our MLM Platform
              </h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape text-center">
                      <FaShieldAlt
                        className="secondary-color"
                        alt="Personalized Features"
                      />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Personalized Features</a>
                    </h3>
                    <p>
                      Design your MLM software with features tailored to meet
                      your unique goals and strategies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <IoIosStopwatch alt="Swift Implementation" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Swift Implementation</a>
                    </h3>
                    <p>
                      Launch your MLM business quickly with our efficient
                      development and deployment process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaQuestionCircle alt="Expert Assistance" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Expert Assistance</a>
                    </h3>
                    <p>
                      Rely on our team of professionals for round-the-clock
                      guidance and troubleshooting support.
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
                  src={ReactNativeSmallBan2} // You can replace this with an MLM-related image if available
                  alt="Custom MLM Software Development Singapore"
                  className="img-fluid pt-3"
                />
              </div>
              <div className="col-lg-6 mt-2">
                <div className="section-title">
                  <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-1 text-white text-start">
                    Why Choose Asvayuk Technologies For MLM Software Development
                    in Singapore?
                  </h2>
                </div>
                <div className="about-item text-white">
                  <p className="font_16 text-white pb-2">
                    With unmatched expertise, a dedicated team, and a commitment
                    to delivering excellence, Asvayuk Technologies stands out as
                    the leading MLM software development company in Singapore.
                    Since 2013, we have empowered businesses with cutting-edge
                    solutions tailored to their specific needs.
                  </p>
                  <p className="font_16 text-white pt-1">
                    Our team provides feature-rich, scalable, and secure MLM
                    software solutions to streamline your operations and
                    maximize growth in the SG market.
                  </p>
                  <ul>
                    <li>
                      Custom MLM Software Solutions tailored to complex
                      compensation plans.
                    </li>
                    <li>
                      Scalable and Reliable Architecture designed for rapid
                      member growth in the Singapore region.
                    </li>
                    <li>
                      Cost-Effective Pricing Models to maximize your
                      profitability.
                    </li>
                    <li>24/7 Technical Support and maintenance.</li>
                    <li>
                      Compliance with Local Standards and Industry Standards.
                    </li>
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
                Types of Advanced MLM Software Solutions
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <BsFiletypePsd alt="Binary MLM" />
                  </div>
                  <h3 className="color_343a40">Binary MLM</h3>
                  <p>
                    One of the most popular compensation plans where
                    participants are rewarded based on two teams (left and
                    right). Ideal for balanced team-building strategies.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdMiscellaneousServices alt="Unilevel MLM" />
                  </div>
                  <h3 className="color_343a40">Unilevel MLM</h3>
                  <p>
                    Offers a straightforward structure where every distributor
                    can have unlimited direct recruits, allowing easier
                    management of large networks.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaShopify alt="Matrix MLM" />
                  </div>
                  <h3 className="color_343a40">Matrix MLM</h3>
                  <p>
                    Limits the number of recruits per level, promoting a
                    balanced business network with set placement positions that
                    avoid overcrowding.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdIntegrationInstructions alt="Hybrid MLM" />
                  </div>
                  <h3 className="color_343a40">Hybrid MLM</h3>
                  <p>
                    Combines features from different MLM structures (Binary and
                    Unilevel) for flexibility and scalability in compensation
                    models.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaComputer alt="Board MLM" />
                  </div>
                  <h3 className="color_343a40">Board MLM</h3>
                  <p>
                    Focuses on creating teams within a "board" or "matrix,"
                    perfect for incentivizing rapid growth and leadership.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <GrSupport alt="Stairstep MLM" />
                  </div>
                  <h3 className="color_343a40">Stairstep MLM</h3>
                  <p>
                    Rewards participants based on their performance and rank
                    advancement, promoting gradual growth and long-term
                    incentives.
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
                Our Work in MLM Software Development
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
                Our MLM Software Development Process
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
                            alt="Requirement Analysis for MLM Software"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            1
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Requirement Analysis
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We begin by understanding your MLM business model,
                            goals, and specific needs to provide a solution
                            tailored to your objectives.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaBullseye
                            className="icon-md text-white"
                            alt="Planning & Design for MLM Software"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            2
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Planning & Design
                          </h3>
                          <p className="mb-0 font_weight_light">
                            A detailed roadmap is created, including
                            user-friendly designs and scalable database
                            architecture for long-term success.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaMugHot
                            className="icon-md text-white"
                            alt="MLM Software Development"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            3
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Development
                          </h3>
                          <p className="mb-0 font_weight_light">
                            Our team develops secure, scalable MLM software,
                            integrating all necessary features like payment
                            gateways and e-wallets.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaRocket
                            className="icon-md text-white"
                            alt="Testing & Deployment for MLM Software"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            4
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Testing & Deployment
                          </h3>
                          <p className="mb-0 font_weight_light">
                            We rigorously test the software for functionality
                            and deploy it on your chosen platform, ensuring a
                            seamless launch.
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

export default MLMDevPage
