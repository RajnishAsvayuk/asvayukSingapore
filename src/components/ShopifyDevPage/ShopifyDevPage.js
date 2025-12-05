"use client";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import reviewGoogle from "@/assets/Images/review_google.webp";
import GoodFirms from "@/assets/Images/GoodFirms.webp";
import Glassdoor from "@/assets/Images/Glassdoor.webp";
import work1 from "@/assets/Images/shopifyworkImg1.png";
import work2 from "@/assets/Images/shopifyworkImg2.png";
import banShopSml from "@/assets/Images/banSY.png";
import work3 from "@/assets/Images/work3.png";
import ReactNativeSmallBan2 from "@/assets/Images/shopifyImgbg.png";
import ReactNativeSmallBan3 from "@/assets/Images/shopifyImgbg2.png";
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

const ShopifyDevPage = () => {
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
                        Leading
                        <span className="fw-bold" style={{ color: "#ffbf0b" }}>
                          {" "}
                          Shopify Website Design & Development
                        </span>{" "}
                        Company in Singapore
                      </Link>
                    </h1>
                    <p className="text-white">
                      As one of the top Shopify website design companies in
                      Singapore, Asvayuk Technologies Private Ltd. offers
                      unparalleled expertise in Shopify development. Whether
                      you're looking to build a new E-commerce store, revamp
                      your existing one, or need expert assistance in Shopify
                      development, we are here to help. Our team of skilled
                      Shopify web developers in Singapore is committed to
                      delivering high-quality, user-friendly, and SEO-optimized
                      Shopify stores that help your business thrive in the
                      competitive online marketplace.
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
                          *Top-notch Shopify Proficiency{" "}
                          <span className="mx-1"></span> |{" "}
                          <span className="mx-1"></span>*100% Confidentiality{" "}
                          <span className="mx-1"></span> |{" "}
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
        <section aria-label="Shopify development agency in Singapore">
          <div
            className="container-fluid"
            style={{ position: "relative", backgroundColor: "#2acda814" }}
          >
            <div className="">
              <div className="animation_section">
                <svg viewBox="0 0 1320 300">
                  <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    SHOPIFY EXPERTS
                  </text>
                </svg>
              </div>
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
                    <span className="pro-head">500+</span>
                    <p>
                      Shopify <br /> Projects Completed
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
                    <span className="pro-head">100+</span>
                    <p>
                      Team of <br />
                      Experts
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
                  <h2>Shopify Website Development in Singapore</h2>
                  <p className="my-3">
                    When it comes to Shopify website development in Singapore,
                    Asvayuk Technologies stands out as a trusted provider. We
                    offer comprehensive Shopify development services in
                    Singapore, from initial design to ongoing store maintenance.
                    Whether you need a custom Shopify store, theme
                    modifications, or app integrations, our Shopify development
                    agency in Singapore has the expertise to deliver it all. We
                    understand that every business is unique, and that's why we
                    provide tailored Shopify development solutions that align
                    with your business goals.
                  </p>
                </div>
                <div className="my-5">
                  <BannerButton
                    btnTitle="Hire Shopify Developers!"
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
          aria-label="Shopify App Development Features"
        >
          <div className="container">
            <div className="section-title">
              <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424 mt-2">
                What Features Do We Offer?
              </h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape text-center">
                      <FaShieldAlt
                        className="secondary-color"
                        alt="Quality Service"
                      />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Quality Service</a>
                    </h3>
                    <p>
                      We offer the most amazing and quality service for Shopify
                      app development. Our motive is to provide services that
                      bring a smile on our client’s face.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <IoIosStopwatch alt="On-Time Delivery" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>On-Time Delivery</a>
                    </h3>
                    <p>
                      We complete the project at the given time, offering
                      on-time delivery so that you can begin your online
                      business ASAP.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="single-features-light text-center">
                  <div className="move">
                    <div className="shape">
                      <FaQuestionCircle alt="Support" />
                    </div>
                    <h3 className="font_22 font_weight_extra_bold">
                      <a>Support</a>
                    </h3>
                    <p>
                      We take care of our clients even after development,
                      providing great and easy support and assistance services
                      post development.
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
                    Why Choose Asvayuk Technologies For Shopify Web Development
                    In Singapore?
                  </h2>
                </div>
                <div className="about-item text-white">
                  <p className="font_16 text-white pb-2">
                    Our Shopify website design services in Singapore are crafted
                    to enhance the shopping experience, boost conversions, and
                    help your online store grow. With a strong focus on mobile
                    responsiveness, SEO optimization, and user experience, we
                    ensure that your store stands out in the competitive
                    E-commerce landscape.
                  </p>
                  <p className="font_16 text-white pt-1">
                    As a leading Shopify website design company in Singapore,
                    Asvayuk Technologies offers the perfect blend of creativity
                    and technical expertise to build exceptional Shopify stores.
                  </p>
                  <ul>
                    <li>Expert Shopify Developers</li>
                    <li>Tailored Solutions</li>
                    <li>SEO-Optimized Stores</li>
                    <li>Mobile-Friendly Design</li>
                    <li>Affordable and Reliable</li>
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
                Our Shopify Website Development Services in Singapore
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <BsFiletypePsd alt="Shopify Store Design & Development" />
                  </div>
                  <h3 className="color_343a40">
                    Shopify Store Design & Development
                  </h3>
                  <p>
                    Irrespective of the size and category, our Shopify
                    specialists build a highly responsive, user and SEO-friendly
                    store. Hire dedicated Shopify developers now!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdMiscellaneousServices alt="Shopify Theme Customization" />
                  </div>
                  <h3 className="color_343a40">Shopify Theme Customization</h3>
                  <p>
                    Hire responsive Shopify developers to develop responsive,
                    interactive, and user-friendly themes explicit to your
                    retail industry and business needs.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaShopify alt="Shopify App Development" />
                  </div>
                  <h3 className="color_343a40">Shopify App Development</h3>
                  <p>
                    We have the best Shopify Apps development team, mastered in
                    all the latest tools and technologies. They ensure
                    high-class Shopify App development, tailored for the SG
                    market.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <MdIntegrationInstructions alt="Shopify Store Setup" />
                  </div>
                  <h3 className="color_343a40">Shopify Store Setup</h3>
                  <p>
                    Hire Shopify Expert to seamlessly integrate multiple payment
                    gateways, CMS, or other third-party APIs relevant to your
                    business model and requirements.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <FaComputer alt="Shopify Store Maintenance" />
                  </div>
                  <h3 className="color_343a40">Shopify Store Maintenance</h3>
                  <p>
                    Anytime you believe the need for your store migration to
                    Shopify, count on us. Our Shopify experts will see that your
                    Shopify migration will be smooth and seamless.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="service-box position-relative">
                  <div className="service-icon">
                    <GrSupport alt="Shopify SEO Services" />
                  </div>
                  <h3 className="color_343a40">Shopify SEO Services</h3>
                  <p>
                    Do not worry about Shopify-related queries. We have the most
                    skilled and experienced Shopify development team to guide
                    you throughout your project development, ensuring high
                    visibility in Singapore.
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
                Our Work
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
          className="section-box333 col-12 pl-0 pr-0"
          id="image-with-text"
          aria-label="Shopify development agency in Singapore"
        >
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap">
              <div className="col-lg-6">
                <Image
                  alt="Top Shopify Development Companies in Singapore"
                  className="img-fluid"
                  src={banShopSml}
                />
              </div>
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-3 text-white text-start">
                    "Leading Shopify Website Design & Development Company in
                    Singapore – Asvayuk Technologies&#34;
                  </h2>
                </div>
                <div className="about-item text-white">
                  <p className="text-white">
                    As one of the top Shopify website design companies in
                    Singapore, Asvayuk Technologies Private Ltd. offers
                    unparalleled expertise in Shopify development. Whether
                    you’re looking to build a new e-commerce store, revamp your
                    existing one, or need expert assistance in Shopify
                    development, we are here to help. Our team of Shopify web
                    developers in Singapore is committed to delivering
                    high-quality, user-friendly, and SEO-optimized Shopify
                    stores that help your business thrive in the competitive
                    online marketplace.
                  </p>
                  <p className="font_16 text-white">
                    Contact us today to get started with your Shopify
                    development project and elevate your online store with
                    professional Shopify web development services in Singapore!
                  </p>
                </div>
              </div>
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
                How Do We Work?
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
                            This is the first step where the client shares their
                            ideas with us, and we discover what needs to be done
                            to develop a website, app, or store.
                          </p>
                        </div>
                      </div>
                    </Col>
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
                            After understanding the client’s idea, we begin the
                            planning process to ensure everything goes smoothly
                            and the project objectives are met.
                          </p>
                        </div>
                      </div>
                    </Col>
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
                            We design and develop your website, app, or store
                            using the latest technology and customized designs
                            to bring your vision to life.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div className="single-work-process position-relative">
                        <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                          <FaRocket
                            className="icon-md text-white"
                            alt="Final UAT & Launch"
                          />
                          <span className="process-step bg_white color-primary shadow-sm color_blue">
                            4
                          </span>
                        </div>
                        <span className="work-process-divider"></span>
                        <div className="work-process-content mt-4">
                          <h3 className="color_343a40 font_weight_semi_bold">
                            Final UAT & Launch
                          </h3>
                          <p className="mb-0 font_weight_light">
                            Testing is conducted via UAT, and after final
                            approval, the website or store is launched, ensuring
                            a smooth and successful rollout.
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

export default ShopifyDevPage
