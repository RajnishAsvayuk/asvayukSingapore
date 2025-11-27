"use client";
import React from "react";
import Image from "next/image";
import digitalBanner from "../../../public/Images/banners-14.webp";
import service1 from "../../../public/Images/services1.webp";
import service2 from "../../../public/Images/services2.webp";
import service3 from "../../../public/Images/services3.webp";
import service4 from "../../../public/Images/services4.webp";
import service5 from "../../../public/Images/services5.webp";
import service6 from "../../../public/Images/services6.webp";
import localBz from "../../../public/Images/localBz2.jpg";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";

const socialMarketing = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Marketing"}
          pageName={"Social Media Marketing"}
          pageHeading={"Social Media Marketing Agency in Singapore"}
          pagePara={
            "In today’s digital world, having a strong online presence is crucial for business growth, and social media marketing plays a key role in achieving that. If you're looking for an award-winning social media marketing agency in Singapore, Asvayuk Technologies Private Ltd. is your go-to partner. We specialize in elevating your brand through targeted strategies and innovative social media marketing solutions tailored to your unique business needs.Whether you need a social media marketing project in Singapore, or are looking for the best social media marketing services in Singapore, our expert team has got you covered. We help businesses connect with their audience, enhance brand awareness, and drive sales through customized social media marketing in Singapore strategies."
          }
          pageImg={digitalBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section
          className="magento_service_card"
          aria-label="Social Media marketing Company in Singapore"
        >
          <Container>
            <div className="card_heading text-center">
              <h2 className="px-3 mx-5">
                Our Social Media Marketing Services in Singapore
              </h2>
              <p className="p-1">
                At Asvayuk Technologies, we offer comprehensive social media
                marketing services to help you thrive in the digital landscape.
                <br />
                Our range of services includes :
              </p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    cardHeading="Social Media Strategy Development"
                    cardPara="We begin with understanding your business and goals, followed by creating a custom social media strategy that drives results."
                    altText="award-winning SEO agency in Singapore"
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    cardHeading="Content Creation and Management"
                    cardPara="Our content creation team designs engaging posts, infographics, and videos to captivate your target audience."
                    altText="social media company in Singapore"
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    cardHeading="Social Media Ads Management"
                    cardPara="We run highly targeted ad campaigns on Facebook, Instagram, LinkedIn, and Google to enhance visibility and sales"
                    altText="social media marketing in Singapore"
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    cardHeading="Community Engagement"
                    cardPara="We focus on building strong relationships with your audience through consistent and meaningful engagement."
                    altText="smo company in Singapore"
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    cardHeading="Analytics and Reporting"
                    cardPara="We provide you with detailed reports to measure the performance of your campaigns and continuously optimize strategies for better results."
                    altText="Social media marketing provider in Singapore"
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    cardHeading="100% Plagiarism-Free Content"
                    cardPara={
                      <>
                        We ensure original and
                        <br /> high-quality content tailored to your brand,
                        maintaining authenticity and
                        <br /> credibility
                      </>
                    }
                    altText="best social media marketing services in Singapore"
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="bg-section" aria-label="SMM agency in Singapore">
          <Container>
            <div className="main-bg p-3">
              <div className="inside-main mt-1">
                <h1 className="conclusion_title mb2">
                  Boost Your Brand with the Best Social Media Marketing Agency
                  in Singapore
                </h1>
                <div>
                  <p className="fs-6 pt-3 text-white">
                    If you're looking for a social media marketing agency in
                    Singapore that combines creativity, expertise, and results,
                    Asvayuk Technologies Private Ltd. is the perfect choice. We
                    offer the best social media marketing services in
                    Singapore, providing tailored strategies that help your
                    brand shine online. Get in touch with us today and start
                    your journey to online success!
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          className="supercharge-section mb-0"
          aria-label="best social media marketing services in Singapore"
        >
          <div className="container">
            <div className="row">
              <div className="choice pb-5">
                <h2 className="fw-semibold">
                  Benefits of Hiring a Social Media Marketing Provider in
                  Singapore
                </h2>
                <p className="pt-2">
                  In today’s competitive market, choosing a local social media
                  company in Singapore can give you a significant advantage.
                  Here's why partnering with a Social media marketing provider
                  in Singapore is a smart move:
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">Local Expertise : </span>We
                    have an in-depth understanding of the Singapore market,
                    which allows us to create strategies that resonate with
                    local audiences and improve your brand’s visibility.
                  </li>
                  <li>
                    <span className="fw-bold h6">Cost-Effective : </span>By
                    working with us, you get top-notch social media marketing in
                    Singapore services at competitive prices, ensuring you get
                    the best ROI on your marketing efforts.
                  </li>
                  <li>
                    <span className="fw-bold h6">Quick Response Time : </span>
                    Being based in Singapore means faster communication and
                    quicker turnaround times for all your social media marketing
                    needs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-study-section"
          style={{ backgroundColor: "#E3FBF5" }}
          aria-label="Digital Marketing Companies in Singapore"
        >
          <Container>
            <h1 className="fw-semibold mb-5 ps-5">
              Case Study : How We Helped a Local Business Grow
            </h1>
            <Row className="align-items-center case-study">
              <Col lg={6}>
                <div className="case-study-text">
                  <p className="case-study-content">
                    One of our clients, a local retail store in Singapore,
                    approached us to improve their online visibility. By
                    implementing a strategic social media campaign, we increased
                    their follower base by 40% in just two months. Through
                    targeted ads and creative content, we also boosted their
                    sales by 25% within the first quarter. This is just one
                    example of how our social media marketing services in
                    Singapore can help you achieve similar success.
                  </p>
                </div>
              </Col>

              <Col lg={6} className="d-flex justify-content-center">
                <Image
                  src={localBz}
                  alt="Top Social Media Agencies in Singapore"
                  className="case-study-img"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default socialMarketing;
