import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "@/assets/Images/SpiceTribe_logo.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/cs7.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const spicetribe = () => {
  return (
    <>
      <main>
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#fff0dc" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={moonLight}
                      alt="website development in Singapore"
                      style={{
                        mixBlendMode: "darken",
                        height: "unset !important",
                      }}
                      width={100}
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2
                      className="fw-semibold fs-1"
                      style={{
                        textTransform: "uppercase",
                        lineHeight: "3.2rem",
                      }}
                    >
                      {" "}
                      Add Flavors to Your Recipes with the Favorite Spice-Brand
                      of top Chefs.
                    </h2>
                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>UI/UX</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>E-commerce</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Shopify</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center px-0">
                <div className="fullCaseStudy_img w-75">
                  <Image
                    src={AppImages.casestudySliderImg.caseStu1}
                    alt="WooCommerce Development Services in Singapore"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section style={{ background: "#ECFFFA" }}>
          <Container className="py-5">
            <Row>
              <Col lg={6}>
                <h1 className="fw-bold mb-3">Spicetribe</h1>
                <p>
                  Spicetribe is a gourmet spice brand renowned for its
                  high-quality, single-origin spices sourced directly from farms
                  worldwide. Committed to sustainability and fair-trade
                  practices, Spicetribe offers unique blends that bring vibrant
                  flavors to any kitchen, transforming everyday cooking into
                  culinary adventures. With spices like Smoked Pimenton and
                  Chili Blend, the brand caters to chefs, food enthusiasts, and
                  home cooks alike, providing products that make every dish
                  extraordinary.
                </p>
              </Col>
              <Col lg="6" md="12" xm="12">
                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                  <div className="head">
                    <h4 className="titletext text-white mb-3 border-bottom pb-2">
                      Problem Statement
                    </h4>
                  </div>
                  <div className="content">
                    <p className="text-white">
                      The Spicetribe website needs to reflect the brand&#39;s
                      passion for flavor and quality through an inviting,
                      engaging design. It should provide an easy-to-navigate and
                      mobile-optimized experience that allows users to explore
                      the story behind each spice, while enabling effortless
                      purchases and a deeper connection to the origins of each
                      product.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section style={{ background: "#ECFFFA" }}>
          <Container className="py-5">
            <Row>
              <h2 className="stategy_title fw-bold">
                Strategy and{" "}
                <span style={{ color: "#249F81" }}>Implementation</span>
              </h2>
            </Row>

            <Row className="py-4">
              {/* Card 1 — Visual Storytelling */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={optimization}
                      alt="Best Magento Developers in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Visual Storytelling
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Develop a visually compelling interface with rich imagery
                    that highlights each spice’s essence, using interactive
                    visuals to tell the product story and create an immersive
                    brand experience.
                  </p>
                </div>
              </div>

              {/* Card 2 — Streamlined Checkout */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={backlink}
                      alt="Magento Website Development Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Streamlined Checkout
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Simplify the checkout process with minimal steps and
                    multiple secure payment options, ensuring users enjoy a
                    convenient and frictionless purchasing journey.
                  </p>
                </div>
              </div>

              {/* Card 3 — Responsive Design */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={technicalseo}
                      alt="Ecommerce Developers in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">Responsive Design</h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Ensure the website adapts seamlessly across all devices,
                    delivering a smooth, mobile-friendly experience that makes
                    SpiceTribe’s products accessible anytime, anywhere.
                  </p>
                </div>
              </div>

              {/* Card 4 — Personalized Recommendations */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={content}
                      alt="blockchain web development Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Personalized Recommendations
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Use data-driven insights and AI tools to deliver
                    personalized spice recommendations, boosting customer
                    engagement and creating a tailored shopping experience.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section>
          <Container className="py-5">
            <Row>
              <Col lg={7}>
                <h2 className="sectitle mb-3 fw-bold">Project Goals</h2>
                <p>
                  The Spicetribe website aims to provide an inviting, visually
                  rich, and functionally efficient platform that showcases the
                  brand&#39;s unique spices and blends. With a focus on engaging
                  storytelling, mobile optimization, and personalized
                  suggestions, Spicetribe seeks to build a digital experience
                  that resonates with customers and brings flavor exploration to
                  life.
                </p>
                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span className="mb-0">Immersive Storytelling</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span className="mb-0">Mobile Accessibility</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span className="mb-0">Data Personalization</span>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col
                lg={5}
                className="Tech_stack overflow-hidden d-none d-lg-block"
              >
                <h2 className="fw-bold text-center">Tech Stack</h2>
                <div className="wrapper">
                  <div className="mongo">
                    <p className="mongo-text">JS</p>
                  </div>
                  <div className="express">
                    <p className="express-text">CSS</p>
                  </div>
                  <div className="react">
                    <p className="react-text">Html</p>
                  </div>
                  <div className="node">
                    <p className="node-text">Shopify</p>
                  </div>
                  <div className="circle"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container className="py-5">
            <h2 className="sectitle mb-3 fw-bold">
              Results After Implementation
            </h2>
            <p>
              Following the launch of the redesigned Spicetribe website, the
              visually immersive, mobile-optimized interface and personalized
              recommendations have significantly enhanced the user experience.
              The brand has seen increased engagement, improved conversion
              rates, and a strengthened market presence.
            </p>
            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li>
                    <p>
                      <strong>Enhanced User Experience:</strong> Clear, vibrant
                      visuals and easy navigation make it simple for customers
                      to explore and select spices.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Effortless Checkout:</strong> Streamlined checkout
                      process for quick and secure purchases.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Responsive Across Devices:</strong> Optimal
                      performance across all devices, including mobile.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Personalized Suggestions:</strong> AI-powered
                      recommendations boost customer engagement and
                      satisfaction.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <Image
                  src={cs1}
                  alt="Blockchain web development provider in Singapore"
                  className="img-fluid h-100 object-fit-cover"
                />
              </div>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="py-5">
            <Row>
              <Col lg={4}>
                <Image
                  src={conclusion}
                  alt="Shopify website design company in Singapore"
                  width={"100%"}
                />
              </Col>
              <Col lg={8}>
                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                <p className="text-black">
                  By integrating visually rich design, smooth navigation, mobile
                  accessibility, and AI-powered personalization, Spicetribe’s
                  website offers a high-quality online shopping experience. This
                  strategic approach has strengthened customer engagement,
                  loyalty, and aligns seamlessly with Spicetribe's mission to
                  bring global flavors into every kitchen.
                </p>
                <p>
                  These enhancements drive conversions, elevate brand appeal,
                  and provide an exceptional online shopping experience that
                  supports Spicetribe’s mission.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <CaseStudySlider />
      </main>
    </>
  );
};

export default spicetribe;
