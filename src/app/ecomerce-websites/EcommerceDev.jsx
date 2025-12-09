"use client";
import React from "react";
import Image from "next/image";
import ecomerceBanner from "@/assets/Images/Group-591.webp";
import Group_558 from "@/assets/Images/Group-558.webp";
import Group_168 from "@/assets/Images/Group-168.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import Group105518 from "@/assets/Images/mad.webp";
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
import BannerButton from "@/components/BannerBtn/BannerButton";

const Ecommerce = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"E-commerce Development"}
          pageHeading={"eCommerce Website Designing Company Singapore"}
          pagePara={
            "In today's digital world, establishing a strong online presence is crucial. Asvayuk Technologies is a leading eCommerce Website Designing Company Singapore, committed to delivering top-notch solutions that drive sales and enhance customer engagement."
          }
          pageImg={ecomerceBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <Feature
          featurepoint1="Easy To Use"
          featurepoint2="Fully Customized"
          featurepoint3="Feature Rich"
          featurepoint4="Highly Secured"
          featurepoint5="Extremely Affordable"
        />

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Our eCommerce Development Services</h2>
                <p className="mt-3">
                  We offer end-to-end eCommerce Development Services in Singapore, crafting digital success tailored for your business.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Website Design
"
                      cardHeading="Custom eCommerce Design & Development"
                      cardParaGraph={
                        <>
                          Tailored eCommerce solutions that reflect your brand's identity, enhance user experience, and maximize conversions.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Shopify and Magento Store Setup"
                      cardParaGraph={
                        <>
                          {" "}
                          Seamless Shopify and Magento store setup, crafted for efficient operations and a smooth shopping experience.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="WooCommerce & OpenCart Solutions"
                      cardParaGraph={
                        <>
                          Scalable WooCommerce and OpenCart solutions, designed to give you complete control over your online store.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="Multi-Vendor Marketplace Development"
                      cardParaGraph="Build a robust multi-vendor marketplace, enabling you to manage multiple sellers while optimizing business growth."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Mobile Responsive Design
"
                      cardHeading="Mobile App Integration for eCommerce"
                      cardParaGraph="Boost customer engagement by seamlessly integrating your eCommerce platform with user-friendly mobile apps."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="Speed Optimization & Performance Enhancement"
                      cardParaGraph="Enhance your store's speed with cutting-edge optimization strategies, ensuring fast load times and a smooth browsing experience.e."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex justify-content-center">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="Secure Hosting & Domain Services"
                      cardParaGraph="Reliable, secure hosting and domain services that guarantee your website’s uptime and protect customer data."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex justify-content-center">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="Sitecore Commerce Development"
                      cardParaGraph="Engage shoppers with omnichannel buying experiences across touchpoints and moments using Sitecore commerce solutions."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="readTransform bgdark">
          <Container>
            <Row>
              <div className="readTransform_content text-center">
                <h1 className="pb-4 mb-0 fw-semibold">
                  Want Clean, Attractive, and Seamless eCommerce Solutions?
                </h1>
                <div>
                  <BannerButton
                    btnTitle="Let's Discuss"
                    blockChainClass="btnHome bg-white d-inline-block text-dark px-4 py-3 fs-5 rounded-1 fw-medium"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <Experience
          expTitle={
            <>Why Choose Us as Your eCommerce Website Provider in Singapore?</>
          }
          ExpPara={
            <>
              From sparking innovative ideas to transforming them into
              market-ready products, our extensive range of solutions is crafted
              to enhance your business value.
            </>
          }
          point1="Custom eCommerce Solutions"
          pointPara1={
            <>
              We offer personalized website development that suits your business
              model and target audience.
            </>
          }
          point2="Mobile-Friendly Designs"
          pointPara2={
            <>
              We create responsive designs to enhance user experience on all
              devices
            </>
          }
          point3="SEO-Optimized Websites"
          pointPara3={
            <>
              Our websites are built with SEO best practices, ensuring higher
              search rankings and better visibility.
            </>
          }
          point4="24/7 Support & Maintenance"
          pointPara4={
            <>
              Reliable support and updates to keep your website running
              smoothly.
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

        <KeyPointSection
          keyHeading={<>Benefits of eCommerce Development for Your Business</>}
          keyPara={
            <>
              The e-commerce industry is growing rapidly, and businesses need a
              professional e-commerce development business in Singapore to
              thrive. As a leading eCommerce Website Designing Company
              Singapore, here are some benefits of having an online store :
            </>
          }
          keyPoint1="Global Reach"
          keyPoint2="24/7 Availability"
          keyPoint3="Cost-Effective"
          keyPoint4="Better Customer Insights"
          keyPoint5="Higher Conversion Rates"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>
                  Transform Your Business with a Leading eCommerce Website
                  Designing Company in Singapore
                </h2>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Website Design
"
                      cardHeading="Best eCommerce Website Designing Company in Singapore"
                      cardParaGraph={
                        <>
                          Asvayuk Technologies Private Ltd. is a top-rated
                          eCommerce Website Designing Company in Singapore,
                          providing cutting-edge solutions to help businesses
                          build a strong online presence. Whether a startup or
                          an established brand, our expert team ensures a
                          seamless shopping experience for your customers.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Expert eCommerce Website Designing & Development in Singapore"
                      cardParaGraph={
                        <>
                          {" "}
                          We design and develop feature-rich, secure, and
                          user-friendly eCommerce websites tailored to your
                          business needs. As a trusted eCommerce Website
                          Designing Company in Singapore, we specialize in
                          Shopify, Magento, WooCommerce, and custom-built
                          platforms for maximum scalability and performance.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="Leading eCommerce Website Development Company in Singapore"
                      cardParaGraph={
                        <>
                          Looking for a reliable eCommerce Website Development
                          Company in Singapore? Asvayuk Technologies Private
                          Ltd. specializes in creating high-performance, secure,
                          and scalable online stores. Let’s build your dream
                          eCommerce website with seamless functionality, mobile
                          responsiveness, and advanced features to elevate your
                          business to new heights.
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesCaseStudy />

        <Process
          heading="Our E-Commerce Website Development Process"
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Consultation & Planning"
          col1para="Understanding your business goals and requirements."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Design & Development"
          col2para="Creating an engaging and functional eCommerce website."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Integration & Testing"
          col3para="Implementing payment gateways, security features, and testing the website."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Launch & Marketing"
          col4para="Making your site live with SEO and digital marketing strategies"
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="Support & Maintenance"
          col5para="Regular updates and performance monitoring."
        />
      </main>
    </>
  );
};

export default Ecommerce;
