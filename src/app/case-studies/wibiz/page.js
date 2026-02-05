import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import brandlogo from "@/assets/Images/wibizlogo.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/wibiz1.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const wibizai = () => {
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
                      alt="WiBiz AI Platform"
                      style={{ mixBlendMode: "darken" }}
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2 className="fw-semibold lh-base fs-1">
                      AUTOMATING THE FUTURE OF CUSTOMER ENGAGEMENT
                    </h2>
                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>AI Workforce</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Omnichannel Automation</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Lead Management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end align-items-center px-0">
                <div className="fullCaseStudy_img w-75">
                  <Image
                    src={AppImages.casestudySliderImg.caseStu6}
                    alt="WiBiz AI Case Study Hero"
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
                <h1 className="fw-bold mb-3">WiBiz AI</h1>
                <p>
                  WiBiz AI was developed as a comprehensive AI workforce designed
                  to manage front-line customer interactions for businesses
                  across Southeast Asia. The platform operates 24/7, handling
                  complex enquiries, bookings, and follow-ups without human
                  intervention.
                </p>
                <p>
                  By supporting multiple channels—including WhatsApp, voice, and
                  web chat—WiBiz AI ensures no lead is ever missed, regardless of
                  time zone, language, or business hours.
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
                      We believe human potential should be focused on strategy,
                      not repetitive conversations. For WiBiz AI, we engineered
                      a high-performance conversational engine that blends
                      automation with personalized customer care.
                    </p>
                    <p className="text-white">
                      Every interaction is designed to capture intent, qualify
                      leads, and turn conversations into measurable growth
                      opportunities for businesses.
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
                    Omnichannel Synchronization
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Built a unified communication layer allowing the AI to
                    maintain context and personality across WhatsApp, web chat,
                    and voice calls.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={backlink} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Industry-Specific Intelligence
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Developed a modular configuration system enabling businesses
                    to train the AI on their services, pricing, and workflows.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={technicalseo} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Automated Booking Engine
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Integrated deep calendar and CRM synchronization so the AI
                    can schedule appointments and confirm bookings instantly.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={content} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Proactive Follow-Ups
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Engineered smart reminder workflows that re-engage dormant
                    leads and reduce no-show rates automatically.
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
                  The primary objective was to deploy an AI workforce that acts
                  as a seamless extension of sales and support teams—capturing,
                  qualifying, and converting leads in real time without adding
                  operational overhead.
                </p>

                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>24/7 Lead Capture</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Industry Customization</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Operational Efficiency</span>
                    </div>
                  </div>
                </Row>
              </Col>

              <Col lg={5} className="Tech_stack d-none d-lg-block">
                <h2 className="fw-bold text-center">Tech Stack</h2>
                <div className="wrapper">
                  <div className="mongo"><p className="mongo-text">NLP</p></div>
                  <div className="express"><p className="express-text">Omnichannel</p></div>
                  <div className="react"><p className="react-text">AI</p></div>
                  <div className="node"><p className="node-text">Cloud</p></div>
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
              WiBiz AI transformed customer service from a cost center into an
              automated revenue engine—setting a new standard for lead
              management across Southeast Asia.
            </p>

            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li><strong>24/7 Availability:</strong> 100% uptime for enquiries and bookings.</li>
                  <li><strong>Increased Lead Capture:</strong> Instant engagement across WhatsApp and web.</li>
                  <li><strong>Operational Time Savings:</strong> Automated over 80% of routine conversations.</li>
                  <li><strong>Localized AI Success:</strong> Deployed across multiple SEA languages.</li>
                  <li><strong>Seamless CRM Sync:</strong> Real-time data flow with zero lead loss.</li>
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
                  WiBiz AI demonstrates how artificial intelligence can
                  practically revolutionize everyday business operations by
                  automating the most time-consuming aspects of customer
                  engagement.
                </p>
                <p>
                  This project highlights our ability to build industry-ready AI
                  systems that don’t just converse—but actively drive
                  measurable business growth.
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

export default wibizai;