"use client";
import HeroServices from "@/components/HeroServices/HeroServices";
import React from "react";
import AppImages from "@/config/constant/app.images";
import designingBanner from "@/assets/Images/banners-7-1.webp";
import Group_558 from "@/assets/Images/Group-558.webp";
import Group_168 from "@/assets/Images/Group-168.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import html from "@/assets/Images/html.webp";
import react from "@/assets/Images/react.webp";
import objective from "@/assets/Images/objective.webp";
import kotlin from "@/assets/Images/kotlin.webp";
import swift from "@/assets/Images/js2.webp";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import Experience from "@/components/Experience/Experience";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Process from "@/components/ProcessSection/Process";
import Industry from "@/components/Industry/Industry";
const websiteDesigning = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Website Development"}
          pageHeading={"Website Designing Company in Singapore"}
          pagePara={
            "Looking for a trusted and creative website designing company in Singapore? Asvayuk Technologies Private Ltd. is here to bring your digital vision to life with precision and style."
          }
          pageImg={designingBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2>
                  <span style={{ color: "#249f81" }}>
                    {" "}
                    Best Website Designing Services
                  </span>
                  <br />
                  in Singapore
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
                <h2>What We Offer in Website Design & Development</h2>
                <p className="mt-3">
                  At Asvayuk Technologies, we offer a comprehensive range of
                  website development services in Singapore,ensuring customized
                  solutions for diverse business needs.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Website Design
"
                      cardHeading="Custom Website Design
"
                      cardParaGraph={
                        <>
                          We create tailored websites based on your brand
                          identity, industry standards, and business goals,
                          delivering high-performance solutions that reflect
                          your vision and engage your target audience
                          effectively.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="E-commerce Website Development Singapore
"
                      cardParaGraph={
                        <>
                          {" "}
                          We develop scalable and secure online stores for
                          singapore businesses, offering powerful features,
                          intuitive layouts, and seamless user experiences that
                          boost conversions and grow online revenue rapidly.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="Static Website Design Singapore
"
                      cardParaGraph={
                        <>
                          We craft fast, efficient, and lightweight static
                          websites for singapore businesses with limited
                          content, ensuring a professional look, smooth
                          navigation, and responsive design across all devices.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="Shopify Website Development Singapore
"
                      cardParaGraph="We build Shopify-powered websites for Singapore businesses, offering customized designs, secure payment setups, SEO-ready features, and responsive layouts to boost visibility and online store success.

"
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Mobile Responsive Design
"
                      cardHeading="Mobile Responsive Design
"
                      cardParaGraph="We design websites that flawlessly adapt across all screen sizes, ensuring consistent user experience, fast load times, and smooth interactions on mobile, tablet, laptop, and desktop devices.

"
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="SEO-Optimized Web Design
"
                      cardParaGraph=" We develop websites that follow Google’s SEO guidelines, incorporating keyword-rich content, fast loading speed, and user-friendly layouts to help your website rank better on search engines."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle={<>Web Development Company in Singapore</>}
          ExpPara={
            <>
              At Asvayuk Technologies Private Ltd., we also offer end-to-end web
              development services in Singapore, delivered by our expert team of
              professional website developers. We ensure high-quality, scalable,
              and future-ready digital solutions tailored to meet your business
              needs.
            </>
          }
          point1="Website Development Company in Singapore

"
          pointPara1={
            <>
              Delivering quality development for growing businesses in
              Singapore.
            </>
          }
          point2="Website Development Company in Singapore"
          pointPara2={
            <>
              Helping local businesses go online with effective web solutions.
            </>
          }
          point3="Website Development Company in Singapore
"
          pointPara3={
            <>
              From design to deployment, we support all stages of development.
            </>
          }
          point4="Website Development Company in Singapore"
          pointPara4={
            <>Experienced developers to handle both static and dynamic needs.</>
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

        <section className="saas-technology">
          <div className="container">
            <div className="px-5 mx-5">
              <div className="saas-technology-heading text-center">
                <h2>
                  Our Arsenal of Powerful Tech Stack To Fuel Your Mobile App
                </h2>
              </div>
              <div className="row pt-5 text-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={html}
                      alt="Website development company Singapore and mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>HTML/CSS</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={react}
                      alt="Website development services in Singapore"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>React </h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={objective}
                      alt="website designers Singapore, mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Objective-C</h5>
                  </div>
                </div>
              </div>
              <div className="row pt-5 text-center justify-content-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={kotlin}
                      alt="website development company mohali"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Kotlin</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image src={swift} alt="web development agency Singapore" />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Java Script</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesCaseStudy />

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>
                  {" "}
                  The Best
                  <span style={{ color: "#249f81" }}>
                    {" "}
                    Web Developers in Singapore
                  </span>
                </h2>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Website Design
"
                      cardHeading="Top Web Development Wizards of Singapore , Unleashing Digital Brilliance!
"
                      cardParaGraph={
                        <>
                          Our team of skilled website designers in Singapore
                          works with the latest technologies, including HTML,
                          CSS, JavaScript, PHP, Python, and frameworks like
                          React, Angular, and Laravel, ensuring high-performance
                          websites tailored to your business goals.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Why Invest in Professional Website Development
"
                      cardParaGraph={
                        <>
                          {" "}
                          A professionally designed website boosts credibility,
                          improves user engagement, and enhances search engine
                          rankings. By partnering with a website development
                          company in Singapore, like Asvayuk Technologies, you
                          gain a competitive edge in the digital landscape.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="Contact Us for Website Development Services in Singapore
"
                      cardParaGraph="If you're looking for a website development provider in Singapore , Asvayuk Technologies Private Ltd. is here to help. Contact us today for a free consultation and take your business online with a powerful website!

"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Process
          heading="Our Method of Specialization

"
          para="Our team of expert website developers plan, design, develop, test, optimize, and launch website that redefine user experiences.
"
          col1Img={AppImages.processImg.container}
          col1Alt="Product Design
"
          col1head="Product Design
"
          col1para="We specialize in crafting innovative and user-centric design strategies to deliver a captivating app experience.

"
          col2Img={AppImages.processImg.planning}
          col2Alt="Website Consulting"
          col2head="Website Consulting
"
          col2para="Tailored guidance and strategic insights to shape your app concept into a successful product.

"
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="UI/UX Compatibility"
          col3para="Seamlessly integrate compelling design with intuitive user experiences for enhanced engagement.."
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
          col5para="Our team of mobile testing experts conducts rigorous testing and debugging to ensure a reliable and optimal-functioning app.

"
        />

        <Industry />
      </main>
    </>
  );
};

export default websiteDesigning;
