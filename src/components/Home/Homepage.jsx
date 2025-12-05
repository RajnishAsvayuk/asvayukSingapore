"use client";
import BannerButton from "@/components/BannerBtn/BannerButton";
import AppImages from "@/config/constant/app.images";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/css";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

// image
import ISO from "@/assets/Images/ISO.webp";
import sitecore from "@/assets/Images/sitecore.webp";
import Unicommerce from "@/assets/Images/Unicommerce.webp";
import Odoo from "@/assets/Images/Odoo.webp";
import Vinculum from "@/assets/Images/Vinculum.webp";
import life from "@/assets/Images/life.webp";
import ShopifyImg from "@/assets/Images/ShopifyImg.webp";
import awsPartner from "@/assets/Images/aws-partner.webp";
import googlePartner from "@/assets/Images/google-partner.webp";
import aster from "@/assets/Images/aster.webp";
import coinGecko from "@/assets/Images/coinGecko.webp";
import coinMarketCap from "@/assets/Images/coinMarketCap.webp";
import meydan from "@/assets/Images/meydan.webp";
import rezorpay from "@/assets/Images/rezorpay.webp";
import koinBx from "@/assets/Images/koinBx.webp";
import koi from "@/assets/Images/koi.webp";
import PaisaPay from "@/assets/Images/PaisaPay.webp";
import strapi from "@/assets/Images/strapi.webp";
import Solutions1 from "@/assets/Images/Solutions1.webp";
import Solutions2 from "@/assets/Images/Solutions2.webp";
import Solutions3 from "@/assets/Images/Solutions3.webp";
import Solutions4 from "@/assets/Images/Solutions4.webp";
import Solutions5 from "@/assets/Images/Solutions5.webp";
import Solutions6 from "@/assets/Images/Solutions6.webp";
import rel1 from "@/assets/Images/rel1.webp";
import rel2 from "@/assets/Images/rel2.webp";
import rel3 from "@/assets/Images/rel3.webp";
import rel5 from "@/assets/Images/rel5.webp";
import rel6 from "@/assets/Images/rel6.webp";
import rel7 from "@/assets/Images/rel7.webp";
import rel9 from "@/assets/Images/rel9.webp";
import rel10 from "@/assets/Images/rel10.webp";
import rel11 from "@/assets/Images/rel11.webp";
import rel12 from "@/assets/Images/rel12.webp";
import rel13 from "@/assets/Images/rel13.webp";
import rel14 from "@/assets/Images/rel14.webp";
import rel15 from "@/assets/Images/rel15.webp";
import rel16 from "@/assets/Images/rel16.webp";
import rel17 from "@/assets/Images/rel17.webp";
import rel18 from "@/assets/Images/rel18.webp";
import rel20 from "@/assets/Images/rel20.png";
import w4 from "@/assets/Images/w4.webp";
import w5 from "@/assets/Images/w5.webp";
import w6 from "@/assets/Images/w1.webp";
import w9 from "@/assets/Images/w-8.webp";
import w10 from "@/assets/Images/w-9.webp";
import w11 from "@/assets/Images/w-10.webp";
import w12 from "@/assets/Images/w-11.webp";
import l1 from "@/assets/Images/l1.webp";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import Experience from "@/components/Experience/Experience";
import FullCaseStudy from "@/components/FullCaseStudy/FullCaseStudy";
import Discuss from "../Discuss/Discuss";

const Homepage = () => {
  return (
    <>
      {/* banner section */}
      <section className="banner p-0 p-lg-5">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-7">
              <div className="banner_textInfo pe-0 pe-lg-5 pe-md-5">
                <h1>Custom Software & Web Development Company in Singapore</h1>
                <h2
                  className="py-3"
                  style={{
                    fontSize: "16px",
                    color: "#494949",
                    fontWeight: "500",
                    lineHeight: "1.5rem",
                  }}
                >
                  Asvayuk Technologies expertly blends cutting-edge web design &
                  app design, state-of-the-art technology solutions, and digital
                  marketing and SEO strategies to boost your business's online
                  visibility and fuel remarkable growth in the Singapore market.
                </h2>
                <div className="row justify-content-center justify-content-xl-start mb-4">
                  <div className="col col-auto mi-count-col mb-3 mb-md-0 mb-lg-2">
                    <div className="text-center ">
                      <div className="value text-success fw-bold mi-value d-flex align-items-center justify-content-center justify-content-md-start fs-5 gap-1">
                        17<span className="fs-5">+</span>
                      </div>
                      <div className="label fw-semibold  mi-lable-count">
                        Years of Presence
                      </div>
                    </div>
                  </div>
                  <div className="col col-auto mi-count-col mb-3 mb-md-0 mb-lg-2">
                    <div className="text-center ">
                      <div className="value text-success fw-bold mi-value d-flex align-items-center justify-content-center justify-content-md-start fs-5 gap-1">
                        23,00<span className="fs-5">+</span>
                      </div>
                      <div className="label fw-semibold  mi-lable-count">
                        Active Clients
                      </div>
                    </div>
                  </div>
                  <div className="col col-auto mi-count-col mb-3 mb-md-0 mb-lg-2">
                    <div className="text-center ">
                      <div className="value text-success fw-bold mi-value d-flex align-items-center justify-content-center justify-content-md-start fs-5 gap-1">
                        500<span className="fs-5">+</span>
                      </div>
                      <div className="label fw-semibold  mi-lable-count">
                        Dedicated Staff
                      </div>
                    </div>
                  </div>
                </div>
                <BannerButton btnTitle="Book Your Free Singapore Consultation" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bannerImg  ">
                <Image
                  src={AppImages.home.bannerImg}
                  alt="design-development-marketing"
                  width={546}
                  height={546}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* affiliation */}
      <section className="affiliation border-bottom border-top">
        <div className="container d-none d-lg-block">
          <div className="row align-items-center">
            <div className="col-lg-3 border-end py-4">
              <h2 className="mb-0 fw-semibold">Our Affiliations</h2>
            </div>
            <div className="col-lg-9 ">
              <Swiper
                key={"ltr"}
                dir="ltr"
                spaceBetween={50}
                slidesPerView={5}
                navigation={false}
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 2400,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Scrollbar, Autoplay]}
                className="AffiliationsSwiper"
              >
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={Vinculum}
                      alt="Our Affiliations 1"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={ISO}
                      alt="Our Affiliations 2"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={sitecore}
                      alt="Our Affiliations 3"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={Odoo}
                      alt="Our Affiliations 4"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={ShopifyImg}
                      alt="Our Affiliations 5"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={awsPartner}
                      alt="Our Affiliations 6"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={googlePartner}
                      alt="Our Affiliations 7"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={aster}
                      alt="Our Affiliations 8"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={coinGecko}
                      alt="Our Affiliations 9"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={coinMarketCap}
                      alt="Our Affiliations 10"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={meydan}
                      alt="Our Affiliations 11"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={rezorpay}
                      alt="Our Affiliations 12"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={koinBx}
                      alt="Our Affiliations 13"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={koi}
                      alt="Our Affiliations 14"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={PaisaPay}
                      alt="Our Affiliations 15"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={strapi}
                      alt="Our Affiliations 16"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="affiliationImg">
                    <Image
                      src={Unicommerce}
                      alt="Our Affiliations 17"
                      className="img-fluid"
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="affiliationResponsive container d-block d-lg-none">
          <div className="affiliation_title text-center">
            <h2 className="mb-0 fw-semibold">Our Affiliations</h2>
          </div>
          <Row className="pt-4 gx-2 gy-2">
            <Col xs={6} sm={6} className>
              <div className="affiliationImg_mobile">
                <Image
                  src={ISO}
                  alt="Website development company chandigarh and mohali"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={Odoo}
                  alt="Mobile app development chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={life}
                  alt="web portal development Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={ShopifyImg}
                  alt="WooCommerce Development Services in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={awsPartner}
                  alt="Ecommerce Website designing Company Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={googlePartner}
                  alt="Best Magento Developers in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={aster}
                  alt="blockchain web development chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={coinGecko}
                  alt="Shopify website design company in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={coinMarketCap}
                  alt="React Native developers Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={meydan}
                  alt="Digital marketing services in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={rezorpay}
                  alt="Digital marketing services in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={koinBx}
                  alt="Laravel Development Company Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={koi}
                  alt="social media marketing agency in chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={PaisaPay}
                  alt="best SEO Services in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={strapi}
                  alt="SaaS App Development Company in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={Unicommerce}
                  alt="Software Development Company in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={Vinculum}
                  alt="Best UI UX designers in Chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} className="">
              <div className="affiliationImg_mobile">
                <Image
                  src={sitecore}
                  alt="Website development company in chandigarh"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* <!-- Case Studies --> */}
      <CaseStudySlider />

      {/* <!-- Empowering  --> */}
      <section className="Empowering py-4 py-lg-0 py-md-0 pb-md-5">
        <div className="container">
          <div className="Empowering_title text-center pb-2 pb-md-5">
            <h2 className="fw-semibold">
              Fueling Your Growth with Customized Solutions for Singapore
            </h2>
          </div>
          <div className="row pt-0 pt-lg-3 pt-md-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
              <div className="bg_empowering rounded-4 p-4">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="Empowering_content text-white servicetype">
                      <Link href="/ui-ux-design">
                        <h5>
                          UI/UX Design
                          <MdNavigateNext />
                        </h5>
                      </Link>
                      <p className="text-white py-1">
                        {" "}
                        At Asvayuk Technologies, we design captivating and
                        user-centric interfaces that enhance usability and
                        engagement. Our UI/UX experts blend creativity and
                        functionality to strengthen your digital brand identity.
                      </p>
                    </div>
                  </div>
                  <div className="col-4 d-none">
                    <div className="solution_img ">
                      <Image
                        src={Solutions1}
                        alt="best digital marketing company in chandigarh"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
              <div className="bg_empowering h-100 rounded-4 p-4">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="Empowering_content text-white servicetype">
                      <Link href="/website-designing">
                        {" "}
                        <h5>
                          Web Development <MdNavigateNext />
                        </h5>
                      </Link>
                      <p className="text-white py-1">
                        {" "}
                        Our comprehensive web development suite delivers secure eCommerce, scalable corporate portals, and high-performance Progressive Web Apps (PWAs) built for the future.
                      </p>
                    </div>
                  </div>
                  <div className="col-4 d-none">
                    <div className="solution_img ">
                      <Image
                        src={Solutions2}
                        alt="Laravel PHP development services in Chandigarh"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-0 pt-lg-3 pt-md-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
              <div className="bg_empowering rounded-4 p-4">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="Empowering_content text-white servicetype">
                      <Link href="/mobile-app-development">
                        <h5>
                          Mobile App Development <MdNavigateNext />
                        </h5>
                      </Link>
                      <p className="text-white py-1">
                        {" "}
                        Leveraging extensive experience to transform your vision into user-centric mobile applications (iOS & Android) that drive high conversions and brand loyalty in Singapore.
                      </p>
                    </div>
                  </div>
                  <div className="col-4 d-none">
                    <div className="solution_img ">
                      <Image
                        src={Solutions3}
                        alt="Best Laravel development company under budget in Chandigarh"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
              <div className="bg_empowering rounded-4 p-4">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="Empowering_content text-white servicetype">
                      <Link href="/search-engine-optimization">
                        <h5>
                          Search Engine Optimization(SEO)
                          <MdNavigateNext />
                        </h5>
                      </Link>
                      <p className="text-white py-1">
                        {" "}
                       A strategic blend of SEO techniques and digital marketing services to dramatically increase organic website traffic, boost lead conversions, and solidify your brand authority in the region.
                      </p>
                    </div>
                  </div>
                  <div className="col-4 d-none">
                    <div className="solution_img ">
                      <Image
                        src={Solutions4}
                        alt="award-winning SEO agency in Chandigarh"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-0 pt-lg-3 pt-md-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
              <div className="bg_empowering rounded-4 p-4">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="Empowering_content text-white servicetype">
                      <Link href="/ecomerce-websites">
                        <h5>
                          eCommerce Solutions
                          <MdNavigateNext />
                        </h5>
                      </Link>
                      <p className="text-white py-1">
                        {" "}
                        At Asvayuk Technologies, we create secure and scalable
                        eCommerce platforms that drive sales and deliver smooth
                        user experiences. Our conversion-focused approach helps
                        your business grow faster online.
                      </p>
                    </div>
                  </div>
                  <div className="col-4 d-none">
                    <div className="solution_img ">
                      <Image
                        src={Solutions5}
                        alt="SaaS App Development Company in Chandigarh"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
              <div className="bg_empowering rounded-4 p-4">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="Empowering_content text-white servicetype">
                      <Link href="/enterprise-portal-development">
                        <h5>
                          Enterprise Portal Development <MdNavigateNext />
                        </h5>
                      </Link>
                      <p className="text-white py-1">
                        {" "}
                        Asvayuk Technologies offers robust enterprise portal
                        solutions designed to streamline workflows and enhance
                        collaboration. Our custom portals integrate data,
                        systems, and teams to boost productivity and digital
                        efficiency.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-4 d-none">
                    <div className="solution_img ">
                      <Image
                        src={Solutions6}
                        alt="ENTERPRISE SOFTWARE SOLUTIONS IN CHANDIGARH"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Experience   --> */}
      <Experience
        expTitle="Discover Custom Technology Solutions for Dynamic Businesses in Singapore"
        ExpPara="From sparking innovative ideas to transforming them into market-ready products, Asvayuk Technologies offers an extensive range of solutions crafted to enhance your business value.."
        point1="Innovative Minds"
        pointPara1="Our engineers approach problems with a visionary mindset, crafting bespoke software solutions that move beyond conventional boundaries."
        point2="Craft Engaging Experiences"
        pointPara2="We engineer visually stunning interfaces that elevate user engagement."
        point3="Global Trust, Local Impact"
        pointPara3="By blending global expertise with crucial insights from the Singaporean market, we ensure a seamless technological experience."
        point4="Client-Centric Approach"
        pointPara4="Engineers with a visionary approach craft solutions beyond conventional boundaries."
        altTags={{
          group1: "Best IT Solutions Company in Chandigarh",
          group2: "Custom Software Development in Panchkula",
          group3: "Top Website Design Company in Mohali",
          group4: "Custom Magento Development Chandigarh",
          mockups: "Best SaaS Development Company in Chandigarh",
          whiteLogo: "Reliable E-commerce Development Services in Mohali",
        }}
      />

      {/* <!-- Industries  --> */}
      <section className="Industries">
        <div className="container ">
          <div className=" mx-auto mb-5">
            <div className="row center-div">
              <div className="col-md-12 col-lg-8 mb-5 mb-lg-0 text-center text-lg-left text-md-center">
                <h2 className="display-4 mi-text-primary mb-3 fs-1 fw-semibold text-start">
                  Get Up to 50% Grant Support{" "}
                </h2>
                <p className=" mx-auto mb-3 text-start">
                  SMEs are eligible for up to 50% Productivity Solutions Grant{" "}
                  <a href="productivity-solutions-grant fs-5"> (PSG)</a> support
                  for the adoption of Info-Tech HRMS and{" "}
                  <a href="cloud-accounting-software">Accounting Software</a>, a
                  Pre-Approved Solution under the IMDA SMEs Go Digital
                  programme.
                </p>
                <p className=" mx-auto mb-0 ">
                  Streamline your operations and save on our HRMS and accounting
                  software.
                </p>
                <br />
                <div className="heroBtn mx-auto w-100">
                  <a
                    className="d-flex justify-content-between align-items-center text-decoration-none"
                    href="#"
                  >
                    <div className="btnText px-3 py-3 text-light">
                      <span>Apply for 50% PSG Support</span>
                    </div>
                    <div className="btn_icon px-4 py-2 align-content-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                {/* <button className="btn mi-btn-warning" data-toggle="modal" data-target="#enquireModal">Schedule a demo</button> */}
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="position-relative">
                  <Link className="hide-url" href="#" target="_blank">
                    <img
                      width={300}
                      src="/Images/PSG_Support.webp"
                      className="mx-auto d-block custom-width-lg"
                      alt="Get Up to 50% PSG Support"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="fw-semibold fs-1">Industries We Serve</h2>
            <p>
              Staying attuned to diverse industries, Asvayuk Technologies serves
              a wide range of sectors, providing customized solutions that set
              new benchmarks and drive innovation.
            </p>
          </div>
          <div className="row pt-3">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
              <div className="industries_info border border-2 border-dark rounded-3 text-center">
                <h3 className="mb-0">eCommerce</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
              <div className="industries_info border border-2 border-dark rounded-3 text-center">
                <h3 className="mb-0">Blockchain</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
              <div className="industries_info border border-2 border-dark rounded-3 text-center">
                <h3 className="mb-0">Healthtech </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
              <div className="industries_info border border-2 border-dark rounded-3 text-center">
                <h3 className="mb-0">AI Bots</h3>
              </div>
            </div>
          </div>
          <div className="row pt-0 pt-lg-3 pt-md-3">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
              <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 align-content-center">
                <h3 className="mb-0">Traveltech</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
              <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 align-content-center">
                <h3 className="mb-0">Realtech</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
              <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 align-content-center">
                <h3 className="mb-0">tecFintechh</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
              <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 align-content-center">
                <h3 className="mb-0">Edtech</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- fullCaseStudy --> */}
      <FullCaseStudy />

      {/* <!-- Relationships --> */}
      <section className="Our_Relationships">
        <div className="container">
          <div className="Relationships_title text-center">
            <h2 className="fw-semibold">Our Relationships</h2>
          </div>
          <div className="row pt-3 gx-2 gy-2 gx-md-0 gy-md-0e">
            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
              <div className="rel-img">
                <Image
                  src={rel1}
                  alt="Magento Website maker in mohali and chandigarh"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
              <div className="rel-img">
                <Image
                  src={rel2}
                  alt="React Native developers Chandigarh"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
              <div className="rel-img">
                <Image
                  src={rel3}
                  alt="Digital marketing experts in Chandigarh"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
              <div className="rel-img">
                <Image
                  src={rel5}
                  alt="Software Development Company in Chandigarh"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
              <div className="rel-img">
                <Image
                  src={rel6}
                  alt="SOFTWARE TESTING COMPANY IN CHANDIGARH"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
              <div className="rel-img">
                <Image
                  src={rel7}
                  alt="social media marketing in chandigarh"
                  className="img-fluid"
                />
              </div>
            </div>

                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel9} alt="Magento Development Services Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel10} alt="best WooCommerce Developers in Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel11} alt="Best SEO company in Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel12} alt="Digital marketing experts in Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel13} alt="Social Media marketing Company in Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel14} alt="Saas App Development provider in chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel15} alt="mlm software developer in chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel16} alt="UI UX development agency in Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel17} alt="Custom UI UX solutions in Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel18} alt="Mobile app UI UX development Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={l1} alt="Mobile app UI UX development Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                        <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                            <div className='rel-img'>
                                <Image src={rel20} alt="Mobile app UI UX development Chandigarh" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Discuss heading={"Ready to partner with a trusted technology expert? Let's discuss how our custom solutions can accelerate your growth in the Singapore market."} btn={"Get a Free Project Estimate"} />


        </>
    )
}

export default Homepage;
