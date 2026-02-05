import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import brandlogo from "@/assets/Images/kamconlogo.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/kamcon1.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const kamcon = () => {
  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#fff4f4" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={brandlogo}
                      alt="Kamcon Design & Build"
                      style={{ mixBlendMode: "darken" }}
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2 className="fw-semibold lh-base fs-1">
                      PRECISION-ENGINEERED DESIGN AND ACOUSTIC SOLUTIONS
                    </h2>
                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Design & Build</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Acoustic Engineering</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Commercial & Residential</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end align-items-center px-0">
                <div className="fullCaseStudy_img w-75">
                  <Image
                    src={AppImages.casestudySliderImg.caseStu4}
                    alt="Kamcon Case Study Hero"
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
                <h1 className="fw-bold mb-3">Kamcon Design & Build</h1>
                <p>
                  Kamcon is a premier design, construction, and renovation firm
                  delivering high-precision solutions for both commercial and
                  residential sectors. The mission was to establish an end-to-end
                  service model that transforms conceptual visions into expertly
                  crafted physical spaces.
                </p>
                <p>
                  By seamlessly integrating architecture, construction, and
                  technical execution, Kamcon ensures a smooth journey from
                  initial site assessment to final handover—where every space
                  reflects the client’s identity while meeting the highest
                  standards of durability and style.
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
                      We believe great design must be matched by flawless
                      execution. For Kamcon, our focus was to digitally represent
                      their “Vision Meets Precision” philosophy.
                    </p>
                    <p className="text-white">
                      The platform highlights Kamcon’s ability to balance
                      aesthetic luxury with the technical rigor of advanced
                      construction and studio-grade acoustic engineering.
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
                    End-to-End Design Integration
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Implemented a unified design-and-build approach to eliminate
                    friction between architects and contractors while preserving
                    the original creative vision.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={backlink} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Workspace Functionality
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Designed high-engagement layouts with custom furnishings to
                    enhance comfort, productivity, and professional appeal.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={technicalseo} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Advanced Acoustic Engineering
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Developed noise-control systems based on detailed site
                    assessments for conference rooms, theaters, and AV studios.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={content} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Refined Finishing & Furnishing
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Curated bespoke finishes and furnishings that balance
                    sophisticated aesthetics with long-term comfort and
                    durability.
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
                  The primary goal was to deliver customized environments where
                  architectural beauty meets functional performance—supported by
                  expert craftsmanship and data-driven site assessments.
                </p>

                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Design Excellence</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Acoustic Precision</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Built-to-Last Quality</span>
                    </div>
                  </div>
                </Row>
              </Col>

              <Col lg={5} className="Tech_stack d-none d-lg-block">
                <h2 className="fw-bold text-center">Tech Stack</h2>
                <div className="wrapper">
                  <div className="mongo"><p className="mongo-text">Figma</p></div>
                  <div className="express"><p className="express-text">PHP</p></div>
                  <div className="react"><p className="react-text">Elementor</p></div>
                  <div className="node"><p className="node-text">Wordpress</p></div>
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
              The Kamcon project redefined the standard for multifunctional
              spaces—merging luxury design with high-performance technical
              execution.
            </p>

            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li><strong>Superior Acoustic Performance:</strong> Studio-grade sound isolation in high-traffic spaces.</li>
                  <li><strong>Operational Excellence:</strong> 100% on-time project completion.</li>
                  <li><strong>Enhanced Productivity:</strong> High-engagement workspace transformations.</li>
                  <li><strong>Durability & Quality:</strong> Premium materials with expert craftsmanship.</li>
                  <li><strong>Versatile Portfolio Growth:</strong> Expanded across clinics, education, theaters, and luxury homes.</li>
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
                  Kamcon Design & Build exemplifies the synergy between technical
                  expertise and creative vision. From structural renovations to
                  advanced soundproofing, every solution was crafted with
                  precision and purpose.
                </p>
                <p>
                  This project stands as a benchmark for high-quality design and
                  construction—proving that when precision meets vision, the
                  results are timeless, functional, and built to perform.
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

export default kamcon;
