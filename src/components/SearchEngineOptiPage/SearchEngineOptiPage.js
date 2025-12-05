"use client";
import React from "react";
import Image from "next/image";
import seoBanner from "@/assets/Images/c18.webp";
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
          pageHeading={"Best SEO Services in Singapore"}
          pagePara={
            "Having trouble improving your website's Google ranking in Singapore? Asvayuk Technologies Private Ltd. offers the best SEO Services in Singapore, ensuring your business reaches its target audience effectively. With our expert search engine optimization services, we enhance your online visibility, drive organic traffic, and improve conversion rates. Whether you're a startup or an established enterprise, our customized SEO solutions are designed to fit your specific needs in the competitive Singapore market."
          }
          pageImg={seoBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>
                Elevate Your Online Presence with the Best SEO Services in
                Singapore
              </h2>
              <p>
                We provide a wide range of search engine optimization services
                in Singapore, including:
              </p>
            </div>
            <div className="game_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="SEO Company in Singapore"
                    cardHeading="Local SEO for Singapore"
                    cardPara="Targeting Singapore and surrounding areas to improve visibility in local searches, Google Maps rankings, and local business directories (GMB, Yelp SG, etc.)."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="search engine optimization Services Singapore"
                    cardHeading="E-commerce SEO"
                    cardPara="Optimizing product pages and categories for better rankings on online stores, maximizing visibility in the highly competitive Singapore e-commerce space."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="OFF Page SEO agency Singapore"
                    cardHeading="Technical SEO"
                    cardPara="Fixing website speed, mobile responsiveness, and indexing issues to ensure a clean site architecture that search engines love, crucial for the SG mobile-first market."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="best seo expert in Singapore"
                    cardHeading="Content Marketing & Blogging"
                    cardPara="Creating high-quality, keyword-rich content using Singapore-specific search intent to attract organic traffic and establish authority in the region."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="Website SEO provider in Singapore"
                    cardHeading="Link Building & Authority Development"
                    cardPara="Building authoritative backlinks from reputable websites in Singapore and the wider APAC region for domain credibility."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="high rank seo website creator in Singapore"
                    cardHeading="Analytics & Performance Tracking"
                    cardPara="Monitoring site performance and user behavior to refine SEO strategies for better results and maximum ROI in Singapore."
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
                The Importance of SEO for Your Business in Singapore{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  in Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                SEO is about more than just achieving rankings; it's about
                reaching and engaging the right audience in the Singapore
                market.
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
                      Improves brand visibility and credibility within the SG
                      market
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom School Solutions Singapore">
                      Enhances user experience and website performance.
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Student Management Systems Panchkula">
                      Increases website traffic and engagement from qualified
                      Singaporean users.
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Real-Time Student Tracking">
                      Boosts Long-Term Growth and Competitive Advantage in the
                      region.
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Parent-Teacher Communication System">
                      Generates high-quality leads and conversions specific to
                      Singapore.
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
                  Begin your journey with top-notch SEO services in Singapore.
                </h1>
                <div>
                  <p className="fs-6 pt-3 text-white">
                    If you're looking for a trusted Website SEO provider in
                    Singapore, Asvayuk Technologies Private Ltd. is your go-to
                    partner. Contact us today and take your business to the next
                    level with our expert SEO solutions.
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
                Why Choose Our Expert SEO Services in Singapore?
              </h2>
              <p>
                At Asvayuk Technologies Private Ltd., we specialize in SEO
                services in Singapore that align with the latest search engine
                algorithms. Our approach focuses on ethical and data-driven SEO
                techniques that yield long-term results in the SG region. Here's
                what sets us apart:
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
                      High-Ranking SEO Website Creation
                    </h6>
                    <p className="mb-0 text-muted">
                      Our services also include designing SEO-optimized websites
                      for the Singapore market that load faster, offer seamless
                      navigation, and strictly comply with Google's ranking
                      factors for the APAC region.
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
                      Comprehensive On-Page and Off-Page SEO
                    </h6>
                    <p className="mb-0 text-muted">
                      On-Page SEO: Keyword optimization, meta tags, content
                      optimization, and technical SEO improvements, all focused
                      on Singaporean search terms.Off-Page SEO: High-quality
                      link building, guest blogging, social bookmarking, and
                      influencer outreach within the SG digital landscape.
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
                      Tailored SEO Strategy for Every Singapore Business
                    </h6>
                    <p className="mb-0 text-muted">
                      Every business in Singapore is unique, and so should its
                      SEO strategy. Our experts conduct in-depth keyword
                      research, competitor analysis, and website audits to
                      develop a tailored SEO plan that ensures your website
                      ranks higher in Singapore search results.
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
                      Expert Search Engine Optimizers
                    </h6>
                    <p className="mb-0 text-muted">
                      As a leading SEO Company in Singapore, our team comprises
                      experienced search engine optimizers who follow ethical
                      practices to boost rankings without risking penalties,
                      ensuring long-term success.
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
                <h2>How Our SEO Services Improve Your Business?</h2>
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
                          A local restaurant in Singapore wasn't getting online
                          orders due to poor search rankings. After implementing
                          our SEO strategies, including Local SEO and content
                          optimization, the business saw a 60% Increase in
                          online reservations within three months.
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
                          An IT company in Singapore struggled with lead
                          generation. Our OFF Page SEO agency in Singapore
                          helped them gain 200% more leads by improving their
                          domain authority and ranking for competitive keywords
                          in the B2B tech sector.
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
