"use client";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import reviewGoogle from "@/assets/Images/review_google.webp";
import GoodFirms from "@/assets/Images/GoodFirms.webp";
import Glassdoor from "@/assets/Images/Glassdoor.webp";
import work1 from "@/assets/Images/NativeImg1.jpg";
import work2 from "@/assets/Images/NativeImg2.jpg";
import work3 from "@/assets/Images/NativeImg3.jpg";
import ReactNativeSmallBan2 from "@/assets/Images/ReactNativeSmallBan2.png";
import ReactNativeSmallBan3 from "@/assets/Images/ReactNativeSmallBan3.png";
import Link from "next/link";
import BannerButton from "@/components/BannerBtn/BannerButton";
import {
  FaApple,
  FaBullseye,
  FaEnvelopeOpenText,
  FaRocket,
} from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";
import { TbBrandReactNative } from "react-icons/tb";
import { PiMonitorPlayFill } from "react-icons/pi";
import { FaBuildingUser } from "react-icons/fa6";
import { GiUpgrade } from "react-icons/gi";
import ContactForm from "@/components/Contactus/ContactFrom";

const reactNative = () => {
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
                        React
                        <span className="fw-bold" style={{ color: "#ffbf0b" }}>
                          {" "}
                          Native
                        </span>{" "}
                        Developers Singapore
                      </Link>
                    </h1>
                    <p className="text-white">
                      In today’s fast-paced world, mobile applications are
                      crucial for businesses to reach and engage with their
                      target audience. At Asvayuk Technologies Private Ltd., we
                      specialize in providing top-tier React Native development
                      in Singapore. Our team of expert React Native developers
                      Singapore is committed to delivering exceptional mobile
                      apps that offer seamless performance across platforms.
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
                  <div className='overflow-hidden w-100 h-100 bg-light rounded-4'>
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
                  REACT NATIVE
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
                      React Native <br /> Projects Delivered
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
                    Transform Your Business <br />
                    with React Native Development
                    <br /> in Singapore
                  </h2>
                  <p className="my-3">
                    If you are looking to hire React Native developers
                    Singapore, look no further than Asvayuk Technologies Private
                    Ltd . Our team of <br />
                    React Native app development experts Singapore will work
                    closely with you to bring your mobile app ideas to life,
                    ensuring that your app is both innovative and functional.
                    Reach out to us today and start building the next big app
                    with one of the best React Native development agencies
                    Singapore.
                  </p>
                </div>
                <div className="my-5">
                  <BannerButton
                    btnTitle="Explore React Native Solutions!"
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
          aria-label="React Native app development experts Singapore"
        >
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424 mt-2">
                Why Asvayuk Technologies is Among the Top React Native
                Development Companies in Singapore
              </h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape text-center">
                      <FaEnvelopeOpenText
                        className="secondary-color"
                        alt="React Native app development experts Singapore"
                      />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Expertise and Experience</a>
                    </h3>
                    <p>
                      Our team of experienced React Native developers Singapore
                      brings a wealth of knowledge to the table. We stay updated
                      with the latest trends in the tech world to deliver the
                      most innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaBullseye alt="React Native app development services in Singapore" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Customer-Centric Approach</a>
                    </h3>
                    <p>
                      We put our clients first and strive to understand their
                      specific needs. This customer-centric approach has helped
                      us build long-lasting relationships with businesses across
                      various industries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaRocket alt="React Native development Singapore" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Support and Maintenance</a>
                    </h3>
                    <p>
                      We offer post-launch support and maintenance to ensure
                      that your app continues to function smoothly and stays
                      up-to-date with the latest software versions.
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
                    Affordable React Native Developers Singapore
                  </h2>
                </div>
                <div className="about-item text-white">
                  <p className="font_16 text-white pb-2">
                    One of the major advantages of opting for React Native
                    developers Singapore is the cost-effectiveness it offers. At
                    Asvayuk Technologies, we provide high-quality app
                    development services at affordable prices. By choosing us,
                    you can significantly reduce the overall development cost
                    compared to hiring separate developers for iOS and Android
                    platforms.
                  </p>
                  <p className="font_16 text-white pt-1">
                    Moreover, our developers use a single codebase for both
                    platforms, ensuring quicker delivery times. This makes React
                    Native development in Singapore a great choice for
                    businesses looking to scale their operations without
                    exceeding their budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box col-12 pl-0 pr-0 mt-3" id="services">
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                Top React Native App Development Services in Singapore
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaApple alt="Full-stack React Native developers Singapore" />
                  </div>
                  <h3 className="color_343a40">
                    Cross-Platform Mobile App Development
                  </h3>
                  <p>
                    Secure and fast transactions, fraud prevention, and
                    automated compliance through smart contracts.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <TbBrandReactNative alt="React Native craetors in Singapore" />
                  </div>
                  <h3 className="color_343a40">
                    Custom React Native Development
                  </h3>
                  <p>
                    Improved patient data security, seamless record management,
                    and interoperability between providers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <PiMonitorPlayFill alt="React Native development agency Singapore" />
                  </div>
                  <h3 className="color_343a40">App UI/UX Design</h3>
                  <p>
                    Real-time tracking, transparency, and efficient management
                    of logistics and transactions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <IoRocketSharp alt="Affordable React Native developers Singapore" />
                  </div>
                  <h3 className="color_343a40">App Testing and Optimization</h3>
                  <p>
                    Secure property transactions, reduced fraud through smart
                    contracts, and transparent ownership records for buyers and
                    sellers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaBuildingUser alt="10 React Native development companies in India." />
                  </div>
                  <h3 className="color_343a40">Enterprise App Development</h3>
                  <p>
                    Tamper-proof academic credentials, secure digital
                    certificates, and streamlined verification for employers and
                    institutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <GiUpgrade alt="React Native development solutions Singapore" />
                  </div>
                  <h3 className="color_343a40">
                    React Native Migration & Upgrades
                  </h3>
                  <p>
                    We provide React Native migration services to help
                    businesses transition from legacy systems or upgrade
                    existing apps for better functionality and scalability.
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
                Our Work in React Native
              </h2>
            </div>
            <div className="row d-flex align-items-center flex-wrap">
              <PortfolioItem
                workImage={work1}
                altText="React Native developers Singapore"
                projectTitle="React Native"
                projectCategory="React Native Development"
                projectLink="#"
              />
              <PortfolioItem
                workImage={work2}
                altText="React Native app development experts Singapore"
                projectTitle="React Native"
                projectCategory="React Native Development"
                projectLink="#"
              />
              <PortfolioItem
                workImage={work3}
                altText="Top React Native development companies Singapore"
                projectTitle="React Native"
                projectCategory="React Native Development"
                projectLink="#"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default reactNative;
