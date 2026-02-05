import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "@/assets/Images/layerextechlogo.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/cs1.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const layerex = () => {
  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#2a2930" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={moonLight}
                      alt="Layerex Ecosystem Platform"
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2 className="fw-semibold lh-base fs-1 text-white">
                      ENGINEERING THE FUTURE OF CONNECTED ECOSYSTEMS
                    </h2>
                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>AI Ecosystem</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Fintech & SaaS</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Smart City Infrastructure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end align-items-center px-0">
                <div className="fullCaseStudy_img w-75">
                  <Image
                    src={AppImages.casestudySliderImg.caseStu3}
                    alt="Layerex Case Study Hero"
                    width={507}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CONCEPT + PROBLEM */}
        <section style={{ background: "#ECFFFA" }}>
          <Container className="py-5">
            <Row>
              <Col lg={6}>
                <h1 className="fw-bold mb-3">Layerex</h1>
                <p>
                  Layerex is a technology-driven ecosystem built to solve complex
                  modern challenges using artificial intelligence and advanced
                  infrastructure. The platform was designed to power fintech
                  solutions, including intelligent lending systems, while also
                  supporting large-scale SaaS deployment.
                </p>
                <p>
                  By integrating IoT and smart-city initiatives, Layerex delivers
                  a unified technical foundation that enhances efficiency across
                  both financial and urban infrastructures, enabling smarter
                  decision-making at scale.
                </p>
              </Col>

              <Col lg="6" md="12" xm="12">
                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                  <div className="head">
                    <h4 className="titletext text-white mb-3 border-bottom pb-2">
                      Our Statement
                    </h4>
                  </div>
                  <div className="content">
                    <p className="text-white">
                      At Layerex, we don’t just build software — we engineer the
                      infrastructure of tomorrow. This project represents our
                      commitment to using AI and smart connectivity to streamline
                      how businesses and cities operate.
                    </p>
                    <p className="text-white">
                      The goal was to ensure a faster, smarter, and more secure
                      digital future by seamlessly connecting fintech systems,
                      SaaS platforms, and urban infrastructure.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* STRATEGY */}
        <section style={{ background: "#ECFFFA" }}>
          <Container className="py-5">
            <Row>
              <h2 className="stategy_title fw-bold">
                Strategy and{" "}
                <span style={{ color: "#249F81" }}>Implementation</span>
              </h2>
            </Row>

            <Row className="py-4">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={optimization} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    AI-Powered Fintech
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Implemented advanced AI models to automate lending workflows,
                    reducing approval times while improving risk assessment
                    accuracy.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={backlink} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    SaaS Acceleration
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Engineered a high-speed deployment pipeline enabling
                    near-instant SaaS delivery for businesses at scale.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={technicalseo} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    IoT Data Management
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Built a centralized command layer for real-time monitoring
                    and control of smart-city IoT infrastructure.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={content} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Modular Smart Infrastructure
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Designed a flexible ecosystem allowing new AI and IoT
                    capabilities to be integrated without service disruption.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* GOALS */}
        <section>
          <Container className="py-5">
            <Row>
              <Col lg={7}>
                <h2 className="sectitle mb-3 fw-bold">Project Goals</h2>
                <p>
                  The primary objective of Layerex was to build a high-performance,
                  AI-driven infrastructure capable of supporting fintech,
                  large-scale SaaS deployments, and smart-city ecosystems with
                  minimal operational friction.
                </p>

                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>AI-Driven Fintech</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Rapid SaaS Scaling</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Smart-City Integration</span>
                    </div>
                  </div>
                </Row>
              </Col>

              <Col lg={5} className="Tech_stack d-none d-lg-block">
                <h2 className="fw-bold text-center">Tech Stack</h2>
                <div className="wrapper">
                  <div className="mongo"><p className="mongo-text">Next js</p></div>
                  <div className="express"><p className="express-text">Typescript</p></div>
                  <div className="react"><p className="react-text">Tailwind</p></div>
                  <div className="node"><p className="node-text">SaaS</p></div>
                  <div className="circle"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* RESULTS */}
        <section>
          <Container className="py-5">
            <h2 className="sectitle mb-3 fw-bold">Results After Launch</h2>
            <p>
              The Layerex ecosystem successfully unified artificial intelligence
              with physical infrastructure, delivering a powerful platform for
              fintech innovation and smart-city operations.
            </p>

            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li><strong>Fintech Efficiency:</strong> Significant reduction in lending processing time.</li>
                  <li><strong>Rapid SaaS Scaling:</strong> Hundreds of businesses deployed instantly.</li>
                  <li><strong>Smart-City Connectivity:</strong> Real-time IoT data integration.</li>
                  <li><strong>Infrastructure Stability:</strong> 99.9% uptime under high-load conditions.</li>
                  <li><strong>AI Adoption Growth:</strong> Increased trust in AI-driven systems.</li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4 col-12">
                <Image src={cs1} alt="" className="img-fluid h-100 object-fit-cover" />
              </div>
            </Row>
          </Container>
        </section>

        {/* CONCLUSION */}
        <section>
          <Container className="py-5">
            <Row>
              <Col lg={4}>
                <Image src={conclusion} alt="" width={"100%"} />
              </Col>

              <Col lg={8}>
                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                <p>
                  Layerex demonstrates how artificial intelligence and advanced
                  infrastructure can redefine modern technology ecosystems. By
                  combining fintech, SaaS, and IoT into a single platform, the
                  project sets a new benchmark for intelligent connectivity.
                </p>
                <p>
                  This case study highlights our ability to manage technical
                  complexity while delivering scalable, secure, and
                  user-friendly solutions that improve both digital and urban
                  life.
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

export default layerex;
