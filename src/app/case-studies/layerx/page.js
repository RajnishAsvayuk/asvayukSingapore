import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "@/assets/Images/layerLogo.jpg";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import layerXImg from "@/assets/Images/layerX.webp";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const layerX = () => {
  return (
    <>
      <main>
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#e1c42563" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={moonLight}
                      alt="Website development services in Singapore"
                      style={{ mixBlendMode: "darken" }}
                      width={200}
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
                      Fast, Secure, and Reliable Crypto Platform
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
                <div className="fullCaseStudy_img ">
                  <Image
                    src={layerXImg}
                    alt="Web developers for website portal development in Singapore"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section style={{ background: "#ECFFFA" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="fw-bold mb-3">LayerX</h1>
                <p>
                  LayerEx is your all-in-one crypto trading platform, designed
                  for both beginners and professionals. Buy, sell, and trade
                  your favorite digital assets with ease and confidence.
                  Experience lightning-fast transactions, advanced security, and
                  seamless trading tools. Step into the future of digital
                  finance and unlock new earning opportunities today.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                  <div className="head">
                    <h4 className="titletext text-white mb-3 border-bottom pb-2">
                      Problem Statement
                    </h4>
                  </div>
                  <div className="content">
                    <p className="text-white">
                      LayerEx is built to make crypto trading effortless and
                      secure. With a sleek, mobile-optimized interface, users
                      can buy, sell, and trade assets in just a few clicks. The
                      platform is designed for speed, simplicity, and
                      reliability to enhance every transaction. From instant
                      trades to advanced security, LayerEx ensures a seamless
                      digital finance experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              {/* Card 1 — User-Centric Design */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={optimization}
                      alt="Singapore's Most Trusted Mobile App Development Company"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    User-Centric Design
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    A clean, mobile-optimized interface ensures effortless
                    navigation and accessibility for both beginners and
                    professionals, delivering a smooth user experience.
                  </p>
                </div>
              </div>

              {/* Card 2 — Advanced Trading Infrastructure */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={backlink}
                      alt="Singapore's Most Trusted Mobile App Development Company"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Advanced Trading Infrastructure
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Integration of high-speed trading engines, low-latency
                    transactions, and multi-layer security protocols ensures a
                    smooth and secure trading experience.
                  </p>
                </div>
              </div>

              {/* Card 3 — Comprehensive Service Ecosystem */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={technicalseo}
                      alt="Magento Ecommerce Development in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Comprehensive Service Ecosystem
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Offering spot trading, staking, and DeFi solutions within a
                    unified ecosystem to simplify digital asset management for
                    users.
                  </p>
                </div>
              </div>

              {/* Card 4 — Scalable Growth Approach */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={content}
                      alt="Magento Development Services Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Scalable Growth Approach
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Leveraging blockchain innovation, strategic partnerships,
                    and continuous feature upgrades to drive platform adoption
                    and long-term growth.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="sectitle mb-3 fw-bold">Project Goals</h2>
                <p>
                  LayerEx aims to revolutionize the digital finance landscape by
                  making crypto trading simple, secure, and accessible for
                  everyone.
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                    <div className="pr_goals">
                      <span>Simplify Crypto Trading</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                    <div className="pr_goals">
                      <span>Ensure Security & Trust</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                    <div className="pr_goals">
                      <span>Deliver Seamless User Experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <Col
                lg={5}
                className="Tech_stack overflow-hidden d-none d-lg-block"
              >
                <h2 className="fw-bold text-center">Tech Stack</h2>
                <div className="wrapper">
                  <div className="mongo">
                    <p className="mongo-text">Laravel</p>
                  </div>
                  <div className="express">
                    <p className="express-text">TypeS</p>
                  </div>
                  <div className="react">
                    <p className="react-text">React</p>
                  </div>
                  <div className="node">
                    <p className="node-text">Media</p>
                  </div>
                  <div className="circle"></div>
                </div>
              </Col>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-5">
            <h2 className="sectitle mb-3 fw-bold">
              Results After Implementation
            </h2>
            <p>
              Following the launch of the enhanced LayerEx platform, the secure,
              mobile-optimized interface and high-speed trading capabilities
              have significantly improved user experience. The platform has seen
              higher trading activity, increased user retention, and
              strengthened market credibility.{" "}
            </p>
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <ul>
                  <li>
                    <p>
                      <strong>Seamless Trading Experience:</strong> Intuitive
                      interface and fast execution make crypto trading
                      effortless for all users.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Enhanced Security & Trust:</strong> Multi-layered
                      protection builds user confidence and safeguards digital
                      assets.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Optimized for All Devices:</strong> Smooth,
                      responsive performance across desktop, tablet, and mobile
                      devices.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>AI-Driven Insights:</strong> Smart analytics and
                      personalized market suggestions improve decision-making
                      and engagement.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4">
                <Image
                  src={layerXImg}
                  alt="Shopify website development Singapore"
                  className="img-fluid  object-fit-cover"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <Image
                  src={conclusion}
                  alt="Digital marketing services in Singapore"
                  width="100%"
                />
              </div>
              <div className="col-lg-8">
                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                <p>
                  LayerEx successfully bridges the gap between complex crypto
                  trading and user-friendly digital finance.{" "}
                </p>
                <p>
                  By offering a secure, mobile-optimized, and high-speed trading
                  platform, it simplifies digital asset management for beginners
                  and professionals alike.
                </p>
                <p>
                  With AI-driven insights, seamless transactions, and
                  multi-layered security, LayerEx is positioned to drive mass
                  adoption and establish a strong presence in the global crypto
                  market.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CaseStudySlider />
      </main>
    </>
  );
};

export default layerX;
