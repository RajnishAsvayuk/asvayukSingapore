"use client";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import reviewGoogle from "@/assets/Images/review_google.webp";
import GoodFirms from "@/assets/Images/GoodFirms.webp";
import Glassdoor from "@/assets/Images/Glassdoor.webp";
import work1 from "@/assets/Images/crypotoImg1.png";
import work2 from "@/assets/Images/crypotoImg2.png";
import work3 from "@/assets/Images/crypotoImg3.png";
import ReactNativeSmallBan2 from "@/assets/Images/bgcrimg2.png";
import ReactNativeSmallBan3 from "@/assets/Images/crypotoImg.svg";
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

const CryptoDevloperPage = () => {
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
                          Crypto Exchange
                        </span>{" "}
                        Developers in Singapore
                      </Link>
                    </h1>
                    <p className="text-white">
                      Asvayuk Technologies specializes in developing reliable
                      and scalable crypto exchange platforms, providing
                      customized solutions that are tailored to meet your
                      business's specific needs and ensure smooth, secure
                      trading operations in Singapore. We ensure Premium
                      Customization, adhere to Industry-Leading Security
                      Standards, and provide 24/7 Expert Technical Support for
                      the dynamic SG cryptocurrency market.
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
                    allowfullscreen
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
            aria-label="React Native development agency Singapore"
          >
            <div className="animation_section">
              <svg viewBox="0 0 1320 300">
                <text
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                  style={{ fontSize: "115px" }}
                >
                  CRYPTO EXCHANGE
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
                      Crypto Exchange <br /> Projects Delivered
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
                  <h2>
                    Streamline Your Crypto Exchange Business with Our Solutions!
                  </h2>
                  <p className="my-3">
                    At Asvayuk Technologies, we specialize in building
                    customized crypto exchange platforms that cater to your
                    unique needs. Our secure and scalable solutions are designed
                    to help you manage and grow your cryptocurrency business
                    with ease.
                  </p>
                </div>
                <div className="my-5">
                  <BannerButton
                    btnTitle="Explore Crypto Exchange Solutions!"
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
          aria-label="Crypto Exchange Solutions"
        >
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424 mt-2">
                Why Choose Our Crypto Exchange Solutions?
              </h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape text-center">
                      <FaShieldAlt
                        className="secondary-color"
                        alt="Customized Crypto Exchange Solutions"
                      />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Customized Crypto Exchange Solutions</a>
                    </h3>
                    <p>
                      We create custom cryptocurrency exchange platforms that
                      are designed to meet your business's specific needs in
                      Singapore, ensuring a smooth and secure trading
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <IoIosStopwatch alt="Efficient Delivery of Crypto Exchange Platform" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Efficient Delivery</a>
                    </h3>
                    <p>
                      Our team ensures the efficient delivery of your
                      cryptocurrency exchange platform, enabling you to launch
                      your business smoothly and without delay in the
                      competitive SG market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaQuestionCircle alt="Complete Support for Crypto Exchange" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Complete Support</a>
                    </h3>
                    <p>
                      Our expert support team is available around the clock to
                      provide assistance with any questions or concerns related
                      to your cryptocurrency exchange platform in Singapore.
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
                    Why Choose Asvayuk Technologies For Crypto Exchange
                    Development in Singapore?
                  </h2>
                </div>
                <div className="about-item text-white">
                  <p className="font_16 text-white pb-2">
                    Asvayuk Technologies is the top choice for custom crypto
                    exchange development in Singapore. Since 2013, we've
                    empowered businesses with secure, scalable, and
                    high-performance blockchain-based solutions, helping them
                    stay ahead in the fast-evolving cryptocurrency market in the
                    APAC region.
                  </p>

                  <ul>
                    <li> Custom Crypto Exchange Development</li>
                    <li>Secure Blockchain Integration</li>
                    <li>Cost-Effective Development Solutions</li>
                    <li>24/7 Technical Support</li>
                    <li>Compliance with Singapore Regulatory Standards</li>
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
                Main Types of Crypto Exchanges
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <BsFiletypePsd alt="Smart Contract-Based Crypto Exchange Singapore" />
                  </div>
                  <h3 className="color_343a40">Centralized Exchanges (CEX)</h3>
                  <p>
                    Centralized exchanges are managed by a centralized entity.
                    They provide high liquidity, fast transactions, and customer
                    support but require users to trust the exchange with their
                    funds.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdMiscellaneousServices alt="Top Blockchain Developers for Crypto Exchange Singapore" />
                  </div>
                  <h3 className="color_343a40">
                    Decentralized Exchanges (DEX)
                  </h3>
                  <p>
                    Decentralized exchanges operate without a central authority,
                    offering greater control and privacy to users. However, they
                    often have lower liquidity and slower transaction times.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaShopify alt="Crypto Exchange Software Development Company Singapore" />
                  </div>
                  <h3 className="color_343a40">Hybrid Exchanges</h3>
                  <p>
                    Hybrid exchanges combine features of both centralized and
                    decentralized exchanges. They offer the security and privacy
                    of DEXs with the speed and liquidity of CEXs.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdIntegrationInstructions alt="Best Crypto Exchange Development Company in Singapore" />
                  </div>
                  <h3 className="color_343a40">Peer-to-Peer (P2P) Exchanges</h3>
                  <p>
                    Peer-to-peer exchanges allow users to trade directly with
                    each other. They provide an added layer of privacy and
                    control, but can be less user-friendly and more
                    time-consuming.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaComputer alt="Crypto Exchange Developers in Singapore" />
                  </div>
                  <h3 className="color_343a40">Crypto-to-Crypto Exchanges</h3>
                  <p>
                    Crypto-to-crypto exchanges focus solely on the exchange of
                    one cryptocurrency for another, rather than integrating fiat
                    currencies. They often serve more experienced traders.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <GrSupport alt="Best Crypto Trading Platform Development Singapore" />
                  </div>
                  <h3 className="color_343a40">Fiat-to-Crypto Exchanges</h3>
                  <p>
                    Fiat-to-crypto exchanges allow users to buy and sell
                    cryptocurrencies using traditional fiat currencies, such as
                    USD, EUR, or GBP, providing greater accessibility for
                    newcomers.
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
                Our Work in Crypto Exchange Development
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
                Our Crypto Exchange Software Development Process
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
                            alt="Top Crypto Exchange Developers in Singapore"
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
                            We begin by understanding your business
                            requirements, goals, and vision for the crypto
                            exchange, ensuring a tailored solution that aligns
                            with your objectives.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaBullseye
                            className="icon-md text-white"
                            alt="Blockchain-Powered Crypto Exchange Solutions in Singapore"
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
                            We strategize a clear plan, selecting the best
                            crypto exchange architecture and defining key
                            features to maximize transaction efficiency and
                            security.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaMugHot
                            className="icon-md text-white"
                            alt="Leading Cryptocurrency Exchange Development Services in Singapore"
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
                            Our team creates visually engaging and user-friendly
                            designs, followed by developing secure and scalable
                            crypto exchange software tailored to your needs.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaRocket
                            className="icon-md text-white"
                            alt="Top Crypto Exchange Developers in Singapore"
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
                            We perform rigorous testing to ensure the
                            platform&#39;s functionality, followed by the final
                            launch, ensuring a smooth experience for your users.
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

export default CryptoDevloperPage
