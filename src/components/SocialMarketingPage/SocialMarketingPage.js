"use client";
import React from "react";
import Image from "next/image";
import digitalBanner from "@/assets/Images/seoMarketing.webp";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import localBz from "@/assets/Images/localBz2.jpg";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";

const SocialMarketingPage = () => {
  return (
    <>
     <main>
        <HeroServices
          home={"Home"}
          pageParent={"Marketing"}
          pageName={" Social Media Marketing "}
          pageHeading={"Top Social Media Marketing Agency in Singapore"}
          pagePara={
            "In today’s digital world, a strong online presence is vital for any Singapore business. Asvayuk Technologies Pvt. Ltd. is an award-winning social media marketing agency that helps brands grow through smart, targeted SMM strategies. We boost your brand awareness, audience engagement, and sales with customized solutions made for Singapore’s market. Connect with us today and take your online success to the next level!"
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
                marketing services to help you thrive in the digital landscape
                of Singapore. Our range of services includes:
              </p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    cardHeading="Social Media Strategy Development"
                    cardPara="We analyze your business goals and create a customized social media strategy for impactful results in Singapore."
                    altText="award-winning SEO agency in Singapore"
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    cardHeading="Content Creation and Management"
                    cardPara="We craft engaging posts, graphics, and videos tailored to connect with your Singapore target audience."
                    altText="social media company in Singapore"
                  />
                </Col>

                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    cardHeading="Social Media Ads Management"
                    cardPara="We run targeted ad campaigns across major platforms to boost visibility and conversions in Singapore."
                    altText="social media marketing in Singapore"
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    cardHeading="Community Engagement"
                    cardPara="We build strong customer relationships through active engagement on popular Singapore social platforms."
                    altText="smo company in Singapore"
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    cardHeading="Analytics and Reporting"
                    cardPara="We deliver clear performance reports with insights into your brand’s growth and ROI."
                    altText="Social media marketing provider in Singapore"
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    cardHeading="100% Plagiarism-Free Content"
                    cardPara="We create original, high-quality content tailored specifically for your Singapore audience."
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
                    Singapore that combines creativity, local expertise, and
                    measurable results, Asvayuk Technologies Pvt. Ltd. is the
                    perfect choice. We offer the best social media marketing
                    services in Singapore, providing tailored strategies that
                    help your brand shine online and connect with the
                    Singaporean audience. Get in touch with us today and start
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
                  In today's competitive market, choosing a local social media
                  company in Singapore can give you a significant advantage.
                  Here's why partnering with a Social Media marketing provider
                  in Singapore is a smart move:
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">Local Expertise : </span>We
                    have an in-depth understanding of the Singapore market,
                    local trends, and consumer behavior, which allows us to
                    create SMM strategies that resonate with local audiences and
                    improve your brand's visibility in the SG region.
                  </li>
                  <li>
                    <span className="fw-bold h6">Cost-Effective : </span>By
                    working with us, you get top-notch social media marketing
                    services in Singapore at competitive prices, ensuring you
                    get the best Return on Investment (ROI) on your marketing
                    efforts.
                  </li>
                  <li>
                    <span className="fw-bold h6">Quick Response Time : </span>
                    Being locally focused in Singapore means faster
                    communication and quicker turnaround times for all your
                    social media marketing needs and campaign adjustments.
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
  )
}

export default SocialMarketingPage
