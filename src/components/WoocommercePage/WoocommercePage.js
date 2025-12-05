"use client";
import React from "react";
import Image from "next/image";
import woocomerceBanner from "@/assets/Images/banners-33-1.webp";
import Group_558 from "@/assets/Images/Group-558.webp";
import Group_168 from "@/assets/Images/Group-168.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Container, Row } from "react-bootstrap";
import Link from "next/link";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Feature from "@/components/FeatureSec/Feature";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";


const WoocommercePage = () => {
  return (
   <>
       <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"WooCommerce Development"}
          pageHeading={"WooCommerce Development Services in Singapore"}
          pagePara={
            "In Singapore's fast-growing e-commerce landscape, businesses need robust and scalable online stores to stay competitive. Asvayuk Technologies Pvt. Ltd. provides top-tier WooCommerce Development Services in Singapore, making us a trusted e-commerce partner in the region. Our expertise ensures that your online store is feature-rich, secure, and optimized for conversions, helping your business build a strong digital presence."
          }
          pageImg={woocomerceBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2>
                  We ensure <br />
                  <span style={{ color: "#249f81" }}> WooCommerce Development</span>
                  <br />
                  best Practices
                </h2>
                <div className="woocomerce-imgs d-flex justify-content-center d-none d-md-block">
                  <Image
                    src={Group_558}
                    className="position-absolute woocomerce-imgs-left"
                    alt="Website development services in Singapore"
                  />
                  <Image
                    src={Group_168}
                    className="position-absolute woocomerce-imgs-right"
                    alt="website designers Singapore, mohali"
                  />
                </div>
              </div>
              <div className="woocomerce-buttons d-flex flex-column flex-md-row justify-content-center gap-3 text-center">
                <Link href="#">
                  <span>
                    Responsiveness <br />
                    Web Designs
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    Mobile Friendly &amp;
                    <br />
                    Optimized
                  </span>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>
                  Our Comprehensive WooCommerce Development Services in Singapore
                </h2>
                <p className="mt-3">
                  We offer a comprehensive range of WooCommerce Development Services in Singapore to help businesses build, manage, and scale their online stores efficiently.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Website Design
"
                      cardHeading="Custom WooCommerce Website Development

"
                      cardParaGraph={
                        <>
                          Our WooCommerce website experts in Singapore create fully customized online stores that reflect your brand identity and meet your business requirements.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="WooCommerce Theme Design and Development

"
                      cardParaGraph={
                        <>
                          {" "}
                          We design and develop visually appealing and user-friendly WooCommerce themes that enhance the shopping experience and improve customer engagement.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="WooCommerce Plugin Development and Integration
"
                      cardParaGraph={
                        <>
                          Extend the functionality of your online store with custom plugin development and seamless third-party integrations.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="WooCommerce Migration Services"
                      cardParaGraph="If you are looking to migrate your existing store to WooCommerce, our WooCommerce website makers in Singapore ensure a smooth and hassle-free transition with minimal downtime."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Mobile Responsive Design
"
                      cardHeading="WooCommerce SEO and Performance Optimization"
                      cardParaGraph="Our WooCommerce website creators in Singapore implement best SEO practices to improve search engine rankings and enhance website speed for better user experience."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="WooCommerce Maintenance and Support

"
                      cardParaGraph="We provide ongoing support and maintenance to keep your WooCommerce store secure, up-to-date, and running smoothly."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <KeyPointSection
          keyHeading={<>Why Choose WooCommerce for Your Online Store ?</>}
          keyPara={
            <>
              WooCommerce is one of the most powerful and flexible e-commerce
              platforms available today. It is built on WordPress,offering a
              user-friendly interface, extensive customization options, and a
              vast array of plugins to enhance functionality.Whether you are a
              startup or an established business, WooCommerce provides a
              cost-effective solution for selling products online.
            </>
          }
          keyPara2={
            <>
              At <b>Asvayuk Technologies Private Ltd.</b>, we specialize in{" "}
              <b>WooCommerce Development Services in Singapore</b>, ensuring
              seamless integration,mobile responsiveness, and high-performance
              solutions tailored to your business needs.
            </>
          }
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Feature
          featureheading="Features of WooCommerce"
          featurepoint1="Flexibility and Customization"
          featurepoint2="Wide Range of Extensions"
          featurepoint3="Mobile Responsiveness"
          featurepoint4="Robust Inventory Management"
          featurepoint5="Secure Payment Processing"
        />

        <Experience
          expTitle={
            <>
              Why Choose Asvayuk Technologies Private Ltd for WooCommerce Development?
            </>
          }
          ExpPara={
            <>
              At Asvayuk Technologies Private Ltd., we specialize in WooCommerce
              Development Services in Singapore, ensuring seamless integration,
              mobile responsiveness, and high-performance solutions tailored to
              your business needs.
            </>
          }
          point1="Experienced Developers



"
          pointPara1={
            <>
              Experienced Developers: Our team has the best developers in Singapore with years of expertise in building successful e-commerce stores.
            </>
          }
          point2="SEO-Optimized Stores"
          pointPara2={
            <>
              Tailored Solutions: We offer customized WooCommerce solutions to meet your unique business requirements.
            </>
          }
          point3="Tailored Solutions


"
          pointPara3={
            <>
             SEO-Optimized Stores: Our WooCommerce development in Singapore city ensures that your store is search engine friendly, driving more traffic and sales.
            </>
          }
          point4="Affordable Pricing

"
          pointPara4={
            <>
              Affordable Pricing: We provide cost-effective WooCommerce solutions without compromising on quality.
            </>
          }
          altTags={{
            group1: "mobile app development company",
            group2: "android app development company",
            group3: "mobile app development companies in Singapore",
            group4: "best app development company",
            mockups: "e commerce app development services",
            whiteLogo: "android application development services",
          }}
        />

        <Process
          heading="Our Method of Specialization
"
          para="Our team of expert mobile app developers meticulously plan, design, develop, test, optimize, and launch mobile apps that redefine user experiences.
"
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Product Design"
          col1para="We specialize in crafting innovative and user-centric design strategies to deliver a captivating app experience
"
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Mobile App Consulting
"
          col2para="Tailored guidance and strategic insights to shape your app concept into a successful product.
"
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="UI/UX Compatibility
"
          col3para="Seamlessly integrate compelling design with intuitive user experiences for enhanced engagement.

"
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Development
"
          col4para="Leveraging cutting-edge technologies to build robust, scalable, and high-performance mobile applications.

"
          col5Img={AppImages.processImg.test}
          col5Alt="Responsive web development Singapore"
          col5head="QA & Testing

"
          col5para="Our team of mobile testing experts conducts rigorous testing and debugging to ensure a reliable and optimal-functioning app."
        />

        <Industry />
        <ServicesCaseStudy />

          <section className="bg-section">
                <Container>
                    <div className="main-bg p-3">
                    <div className="tool-heading py-5">
                        <h2 className="conclusion_title mb-2">
                          Get Started with <br/>WooCommerce Development Today!
                        </h2>
                        <div>
                        <p className="text-white lh-lg fs-6 pt-3">
                            If you are looking for a reliable WooCommerce website provider in Singapore, Asvayuk Technologies Private Ltd. is here to help.
                            Our expert team  ensures that your e-commerce store is designed for success. Contact us today to discuss your 
                            <Link href="https://maps.app.goo.gl/9F1yq767vCJtZM2q7"> WooCommerce Development Services in Singapore.</Link> 
                        </p>
                        </div>
                    </div>
                    </div>
                </Container>
            </section>
      </main>
   </>
  )
}

export default WoocommercePage
