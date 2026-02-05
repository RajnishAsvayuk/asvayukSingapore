import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import s5logo from "@/assets/Images/s5logo.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/s5podcast1.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const s5podcaststudio = () => {
  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#ffffee" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={s5logo}
                      alt="S5 Podcast Studio Logo"
                    //   style={{ mixBlendMode: "darken" }}
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2 className="fw-semibold lh-base fs-1">
                      ELEVATING MEDIA PRODUCTION IN THE GTA
                    </h2>
                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Podcast Studio</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Media Production</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Broadcast Quality</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end align-items-center px-0">
                <div className="fullCaseStudy_img w-75">
                  <Image
                    src={AppImages.casestudySliderImg.caseStu5}
                    alt="S5 Podcast Studio Case Study Hero"
                    width={507}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CONCEPT + STATEMENT */}
        <section style={{ background: "#ffffff" }}>
          <Container className="py-5">
            <Row>
              <Col lg={6}>
                <h1 className="fw-bold mb-3">S5 Podcast Studio</h1>
                <p>
                  Located in Brampton, Ontario, S5 Podcast Studio was created to
                  bridge the gap between amateur recording setups and expensive
                  downtown production facilities. The studio delivers a
                  professional, commercial-grade environment for creators,
                  educators, and brands across the Greater Toronto Area.
                </p>
                <p>
                  Built to broadcast standards with acoustic optimization and
                  multi-camera capabilities, the space enables stress-free,
                  high-quality audio and video production for every type of
                  creator.
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
                      Content quality defines brand authority. For S5 Podcast
                      Studio, we focused on showcasing a space that balances
                      technical sophistication with creator accessibility.
                    </p>
                    <p className="text-white">
                      From first-time podcasters to established brands, every
                      client has access to tools designed to produce
                      world-class media.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* STRATEGY */}
        <section style={{ background: "#ffffff" }}>
          <Container className="py-5">
            <Row>
              <h2 className="stategy_title fw-bold">
                Strategy and{" "}
                <span style={{ color: "#4F46E5" }}>Implementation</span>
              </h2>
            </Row>

            <Row className="py-4">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={optimization} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Acoustic Excellence
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Implemented professional-grade soundproofing and acoustic
                    optimization to ensure broadcast-standard audio quality.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={backlink} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Multi-Camera Integration
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Configured a dynamic multi-camera setup for professional
                    video podcasts and branded content creation.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={technicalseo} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Flexible Service Model
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Designed modular rental options including self-operated and
                    fully managed production experiences.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={content} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Creator-Centric Design
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Designed lighting, interiors, and layouts that enhance
                    visual storytelling and on-camera presence.
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
                  The goal was to create a versatile, commercial-grade studio
                  that supports creators from recording through
                  post-production—without the complexity or cost of large
                  downtown facilities.
                </p>

                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Broadcast Standards</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Flexible Rentals</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>End-to-End Support</span>
                    </div>
                  </div>
                </Row>
              </Col>

              <Col lg={5} className="Tech_stack d-none d-lg-block">
                <h2 className="fw-bold text-center">Tech Stack</h2>
                <div className="wrapper">
                  <div className="mongo"><p className="mongo-text">Figma</p></div>
                  <div className="express"><p className="express-text">Wordpress</p></div>
                  <div className="react"><p className="react-text">Elementor</p></div>
                  <div className="node"><p className="node-text">PHP</p></div>
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
              S5 Podcast Studio has become a premier media destination in
              Ontario—delivering downtown-quality production in a more
              accessible location.
            </p>

            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li><strong>Broadcast-Standard Quality:</strong> High-fidelity audio and video delivery.</li>
                  <li><strong>Streamlined Content Journey:</strong> Recording through post-production support.</li>
                  <li><strong>Versatile Production:</strong> Podcasts, interviews, and branded content.</li>
                  <li><strong>High Client Retention:</strong> Flexible rental and service options.</li>
                  <li><strong>Regional Leadership:</strong> Go-to studio in Brampton and GTA.</li>
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
                  S5 Podcast Studio represents the perfect balance between
                  technical precision and creative freedom—lowering the barrier
                  to professional media production.
                </p>
                <p>
                  This project highlights our ability to design specialized,
                  high-performance environments that empower creators to
                  produce content that lasts.
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

export default s5podcaststudio;
