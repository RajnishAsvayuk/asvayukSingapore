"use client";
import React from "react";
import Image from "next/image";
import seoBanner from "@/assets/Images/seo.webp";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import c18 from "@/assets/Images/c18.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import Google_logo from "@/assets/Images/Google-logo.webp";
import ahrefs from "@/assets/Images/ahrefs.webp";
import c20 from "@/assets/Images/c20.webp";
import adobe from "@/assets/Images/adobe (1).webp";
import Semrush from "@/assets/Images/Semrush.webp";
import Moz_logo from "@/assets/Images/Moz_logo.webp";
import Bing_1 from "@/assets/Images/Bing-1.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Card, Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import BannerButton from "@/components/BannerBtn/BannerButton";

const SearchEngineOptiPage = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Marketing"}
          pageName={"SEO"}
          pageHeading={"Dominate the Singapore Market with Premium SEO"}
          pagePara={
            "Stop losing leads to your competitors. At Layerex, we engineer aggressive search strategies designed to put your brand on the first page of Google. By combining data science with creative content, we scale your organic visibility and turn searchers into long-term customers. Whether you are a local SME or a global enterprise, our Singapore-based experts build the authority your business deserves."
          }
          pageImg={seoBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>
                Comprehensive SEO Solutions for Scalable Growth
              </h2>
              <p>
                We deploy a multi-layered approach to ensure your website outperforms the competition in every category:
              </p>
            </div>
            <div className="game_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="SEO Company in Singapore"
                    cardHeading="Hyper-Local SEO"
                    cardPara="Capture high-intent traffic in Singapore by ranking for geo-specific keywords and Google Map results."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="search engine optimization Services Singapore"
                    cardHeading="E-commerce Growth"
                    cardPara="Drive transactional traffic to your storefront with advanced schema markup and product-level optimization."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="OFF Page SEO agency Singapore"
                    cardHeading="Deep Technical Audits"
                    cardPara="We eliminate crawl errors, optimize Core Web Vitals, and ensure your site architecture is flawless."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="best seo expert in Singapore"
                    cardHeading="Authority-Driven Content"
                    cardPara="High-value copywriting that satisfies user intent while ranking for competitive industry terms."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="Website SEO provider in Singapore"
                    cardHeading="Premium Link Acquisition"
                    cardPara="Ethical outreach to secure high-DA backlinks that strengthen your domain’s trust signal."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="high rank seo website creator in Singapore"
                    cardHeading="Conversion Intelligence"
                    cardPara="Granular tracking and GA4 reporting to ensure every click contributes to your bottom line."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                Unlock Business Growth with SEO {" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  in Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                SEO is not just about higher rankings; it’s about connecting with the right audience and driving meaningful business growth
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a
                      href="#"
                      title="School Management App Development Panchkula"
                    >
                      Improves brand visibility and builds strong credibility
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom School Solutions Singapore">
                      Increases website traffic and customer engagement
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Student Management Systems Panchkula">
                      Generates high-quality leads and better conversions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Real-Time Student Tracking">
                      Enhances user experience and overall website performance
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Parent-Teacher Communication System">
                      Supports long-term growth and sustainable success with Layerex
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-section" aria-label="SMM agency in Singapore">
          <Container>
            <div className="main-bg p-3">
              <div className="inside-main mt-1">
                <h1 className="conclusion_title mb2">
                  Start your journey with professional SEO services in Singapore.
                </h1>
                <div>
                  <p className="fs-6 pt-3 text-white">
                    If you're searching for a trusted website SEO partner in Singapore, Layerex is your reliable choice. Contact us today and elevate your business with our expert SEO solutions designed for higher rankings, traffic, and growth.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="search-engine">
          <Container>
            <div className="search-engine-heading">
              <h2>Tools &amp; Technologies</h2>
            </div>

            <div className="search-engine-imgs">
              <Row className="gy-5 mt-3 text-center">
                <Col lg={3} md={6}>
                  <Image src={Google_logo} alt="SEO Companies of Singapore" />
                </Col>
                <Col lg={3} md={6}>
                  <Image src={ahrefs} alt="search engine optimizer" />
                </Col>
                <Col lg={3} md={6}>
                  <Image src={c20} alt="best seo expert in Singapore" />
                </Col>
                <Col lg={3} md={6}>
                  <Image src={adobe} alt="Website SEO provider in Singapore" />
                </Col>
              </Row>
              <div className="text-center  search-engine_last_row ">
                <Row className="gy-5 gx-5 gap-3">
                  <Col lg={3} md={6}>
                    <Image
                      src={Semrush}
                      alt="high rank seo website creator in Singapore"
                    />
                  </Col>
                  <Col lg={3} md={6}>
                    <Image
                      src={Moz_logo}
                      alt="Digital marketing services in Singapore"
                    />
                  </Col>
                  <Col lg={3} md={6}>
                    <Image src={Bing_1} alt="Top seo companies in Singapore" />
                  </Col>
                </Row>
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center align-items-center">
              <BannerButton
                btnTitle="Get A Free SEO Audit"
                blockChainClass="d-inline-block search-engine-button mt-5 text-center"
              />
            </div>
          </Container>
        </section>

        <Container className="py-5">
          <Row className="align-items-center mb-4 text-center">
            <Col lg={10} className="mx-auto">
              <h2 className="fw-bold display-4">
                Why Leading Brands Partner with Layerex
              </h2>
              <p>
                We don't just deliver rankings; we deliver revenue through a transparent and ethical framework.
                
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col md={6}>
              <Card
                className="p-4 shadow-lg position-relative card"
                style={{ borderRadius: "12px", background: "#f9f9f9" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <Image
                      src={c11}
                      alt="SEO Company in Singapore"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Data-Backed Roadmap
                    </h6>
                    <p className="mb-0 text-muted">
                      Every move is based on real-time competitor intelligence and deep keyword gap analysis.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#ff7b00",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>

              <Card
                className="p-4 shadow-lg position-relative ms-md-n3 mt-4 card"
                style={{
                  borderLeft: "5px solid #6c63ff",
                  borderRadius: "12px",
                }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <Image
                      src={c12}
                      alt="SEO services in Singapore"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      360° Optimization
                    </h6>
                    <p className="mb-0 text-muted">
                      A holistic strategy covering everything from backend code to front-facing digital PR and outreach.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#6c63ff",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>
            </Col>

            <Col md={6}>
              <Card
                className="p-4 shadow-lg position-relative mt-md-4 card"
                style={{
                  borderLeft: "5px solid #6c63ff",
                  borderRadius: "12px",
                }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <Image
                      src={c14}
                      alt="search engine optimization Services Singapore"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      White-Hat Integrity
                    </h6>
                    <p className="mb-0 text-muted">
                      We follow strict Google guidelines to ensure your growth is sustainable and safe from future algorithm updates.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#6c63ff",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>

              <Card
                className="p-4 shadow-lg position-relative mt-4 card"
                style={{ background: "#f9f9f9", borderRadius: "12px" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <Image
                      src={c13}
                      alt="OFF Page SEO agency Singapore"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Performance-First Architecture: 
                    </h6>
                    <p className="mb-0 text-muted">
                      We build fast, responsive web environments that search engines prioritize and users love.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#ff7b00",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>
            </Col>
          </Row>
        </Container>

        <section className="software-sec">
          <Container>
            <Row>
              <div className="software-sec-heading text-center">
                <h2>Proven Success in the Singaporean Landscape</h2>
              </div>
              <div className="software-sec-card">
                <Row className="gy-4">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="software-sec-card2 rounded-4">
                      <h3 className="text-center fw-bold">
                        Local Restaurant Success in Singapore
                      </h3>
                      <div className="languages row pt-4">
                        <p>
                          A Singaporean service provider achieved a 150% boost in organic leads within 4 months through localized keyword targeting and technical fixes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex">
                    <div className="software-sec-card2 rounded-4">
                      <h3 className="text-center fw-bold">
                        IT Company Lead Generation in Singapore{" "}
                      </h3>
                      <div className="languages row pt-4">
                        <p>
                           An enterprise B2B platform secured top-3 rankings for high-competition industry terms, resulting in a 3x increase in monthly organic revenue.
                        </p>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default SearchEngineOptiPage
