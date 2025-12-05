"use client";
import React from "react";
import magentoBanner from "@/assets/Images/Group-900.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";

const magentoDev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Magento Development"}
          pageHeading={"Best Magento Developers in Singapore"}
          pagePara={
            "When it comes to developing highly efficient and scalable eCommerce websites, Magento stands out as one of the most powerful platforms. For businesses in Singapore and Mohali seeking to build or improve their online stores, finding the Best Magento Developers in Singapore is crucial. Asvayuk Technologies Private Ltd. is your trusted partner for Magento development, offering expert solutions to help businesses establish a robust digital presence. Our team of skilled professionals is well-versed in Magento’s capabilities and ready to deliver high-quality, customized Magento websites that align with your business goals."
          }
          pageImg={magentoBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Comprehensive Magento Development Services</h2>
              <p>
                At Asvayuk Technologies, we understand that every business has
                unique requirements. That’s why we offer a range of website
                designing services that are fully customizable to meet your
                specific business needs. Our expertise extends across :
              </p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Magento Custom Development"
                    cardPara="We create custom Magento themes and extensions to enhance the functionality and design of your website, making it stand out in the crowded eCommerce space."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Magento Migration Services"
                    cardPara="If you are looking to migrate your website from another platform to Magento, our experts make this seamless, ensuring data integrity and minimal downtime."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="Magento Integration"
                    cardPara="We integrate third-party applications and services with your Magento store to enhance functionality and provide a smoother shopping experience for your customers."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="eCommerce Development"
                    cardPara="We ensure a swift and secure migration to Magento with our expert migration services, transferring data, performance-driven design elements and functionality seamlessly."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Magento Maintenance and Support"
                    cardPara="We offer ongoing support and maintenance services to keep your Magento store running smoothly, with regular updates, security patches, and performance enhancements."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="Headless Development"
                    cardPara="Future-proof your eCommerce store with headless architecture, ensuring enhanced flexibility, faster performance, seamless integrations, and a scalable online shopping experience"
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Transform your eCommerce experience with our innovative solutions.
            </>
          }
          keyPara={
            <>
              Explore the synergy of cutting-edge Magento solutions. Enhance
              your online store's performance with our expertise. Connect with
              us for a transformative journey in eCommerce.
            </>
          }
          keyPoint1="Seamless Integration with Latest Technologies"
          keyPoint2="Tailored Solutions for Your Unique Needs"
          keyPoint3="Proven Track Record of Successful Implementations"
          keyPoint4="Dedicated Support and Maintenance Services"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Choose the Best Magento Developers in Singapore ?</>}
          ExpPara={
            <>
              At Asvayuk Technologies, we specialize in Magento eCommerce
              development, delivering customized, high-performance, and scalable
              solutions for businesses.
            </>
          }
          point1="Certified Magento Experts"
          pointPara1={
            <>
              Our developers have extensive experience in building, customizing,
              and optimizing Magento-based online stores.
            </>
          }
          point2="Global Trust, Local Impact"
          pointPara2={
            <>
              Combining local insights with global expertise, we ensure seamless
              technological excellence.
            </>
          }
          point3="SEO & Mobile-Optimized Store"
          pointPara3={
            <>
              We create SEO-friendly and mobile-responsive Magento websites to
              boost traffic and sales.
            </>
          }
          point4="24/7 Support & Maintenance"
          pointPara4={
            <>
              Our dedicated support team ensures your store runs smoothly with
              regular updates and security patches.
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
          heading="Our Process of Expertise"
          para="Our team of expert mobile app developers plan, design, develop, test, optimize, and launch mobile apps that redefine user experiences."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Product Design"
          col1para="Crafting innovative and user-centric design strategies for a captivating app experience"
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Mobile App Consulting"
          col2para="Tailored guidance and strategies to shape your app concept into a successful product."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="UI/UX Compatibility"
          col3para="Seamless integration of compelling design and intuitive user experiences for enhanced engagement."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Development"
          col4para="Utilizing cutting-edge technologies to build robust, scalable, and high-performance mobile applications."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="QA & Testing"
          col5para="experts performs testing and debugging to ensure a reliable and optimal functioning app."
        />

        <ServicesCaseStudy />

        <Industry />

        <section className="performance_card2">
          <div className="container magentoCon">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>
                  Top Magento Developers in Singapore Build a Scalable &
                  High-Performance eCommerce Store
                </h2>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service1}
                      altText="Custom Website Design
"
                      cardHeading="
Expert Magento Developers in Singapore"
                      cardParaGraph={
                        <>
                          Finding the right team of developers is key to the
                          success of your eCommerce website. Asvayuk
                          Technologies offers the best Magento development
                          services in Singapore, with a team of certified
                          developers who have years of experience working with
                          Magento’s robust features. Our team stays up-to-date
                          with the latest trends and updates in the Magento
                          ecosystem, ensuring that your website is equipped with
                          the best tools to succeed in the competitive online
                          market. As the best web development agency in
                          Singapore, we are committed to delivering results that
                          matter. We focus on building Magento websites that are
                          not only visually appealing but also optimized for
                          performance, user experience, and conversion.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service2}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Affordable Magento Development Services in Singapore"
                      cardParaGraph={
                        <>
                          {" "}
                          Asvayuk Technologies is a leading website development
                          provider in Singapore that offers affordable and
                          efficient Magento development services. Whether you're
                          a small business just starting out or a large
                          enterprise looking to scale, we provide solutions that
                          fit your budget and goals. Our developers ensure that
                          your Magento website is built with quality at its
                          core, using the latest technologies to drive growth
                          and increase online sales. With our best Magento
                          developers in Singapore, you don’t need to compromise
                          on quality or affordability. We help you get the most
                          out of your investment by building a highly functional
                          Magento eCommerce store that brings value to your
                          business
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service3}
                      altText="Static Website Design Singapore
"
                      cardHeading="Contact Us for Magento Development Services in Singapore"
                      cardParaGraph={
                        <>
                          Choosing the Best Magento Developers in Singapore is
                          essential for building a successful and scalable
                          eCommerce platform. Asvayuk Technologies Private Ltd.
                          offers expert Magento development services in
                          Singapore and Mohali, helping businesses harness the
                          power of Magento to create outstanding online stores.
                          Our team of certified Magento developers provides
                          customized solutions to meet your specific needs,
                          ensuring that your eCommerce website performs at its
                          best. Whether you need custom development,
                          integration, migration, or ongoing maintenance, we
                          have the expertise to deliver exceptional results.
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default magentoDev;
