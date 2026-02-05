import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "@/assets/Images/aryanslogo.png";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/cs1.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const aryans = () => {
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
                      src={moonLight}
                      alt="Aryans Group of Colleges Website"
                      style={{ mixBlendMode: "darken" }}
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2 className="fw-semibold lh-base fs-1">
                      EMPOWERING STUDENTS THROUGH ACCESSIBLE, FUTURE-READY
                      EDUCATION.
                    </h2>
                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Education</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>University Website</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Lead Generation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end align-items-center px-0">
                <div className="fullCaseStudy_img w-75">
                  <Image
                    src={AppImages.casestudySliderImg.caseStu2}
                    alt="Aryans Group of Colleges Campus Website"
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
                <h1 className="fw-bold mb-3 ">
                  Aryans Group of Colleges
                </h1>
                <p>
                  Aryans Group of Colleges, located in Rajpura near Chandigarh,
                  is a leading educational institution offering a wide range of
                  undergraduate, postgraduate, and professional programs across
                  multiple disciplines. The institution focuses on delivering
                  quality education supported by modern infrastructure and
                  career-oriented learning.
                </p>
                <p>
                  With multiple colleges and departments under one umbrella,
                  Aryans required a centralized digital platform that enables
                  students to easily explore courses, understand admission
                  processes, and connect with the institution through a reliable
                  and informative online experience.
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
                      Aryans Group of Colleges needed a modern and scalable
                      website that could effectively represent its multi-college
                      structure while serving as a comprehensive information
                      portal for students.
                    </p>
                    <p className="text-white">
                      The challenge was to improve navigation, mobile usability,
                      and performance while creating clear pathways for students
                      to explore courses and submit admission enquiries. The
                      platform had to balance institutional credibility with a
                      student-friendly user experience.
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
                    Structured Information Architecture
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Designed a clear structure to organize multiple colleges,
                    departments, and courses, enabling students to find academic
                    information quickly and without confusion.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={backlink} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Enquiry-Focused Navigation
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Implemented clear calls-to-action, intuitive menus, and
                    strategically placed enquiry forms to guide students from
                    course discovery to admission enquiries.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={technicalseo} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Mobile-First Development
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Built a fully responsive website optimized for mobile
                    devices, ensuring smooth performance and accessibility for
                    students browsing on smartphones and tablets.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={content} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    SEO & Performance Optimization
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Optimized site speed, SEO structure, and content hierarchy
                    to improve visibility, reduce load times, and increase user
                    engagement.
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
                  The primary goal of the project was to create a reliable and
                  student-focused digital platform that enhances institutional
                  credibility while driving admission enquiries. The website
                  needed to effectively showcase courses, simplify navigation,
                  and deliver a fast, mobile-optimized experience.
                </p>
                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Student-Centric Experience</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Mobile Optimization</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Lead Generation</span>
                    </div>
                  </div>
                </Row>
              </Col>

              <Col lg={5} className="Tech_stack d-none d-lg-block">
                <h2 className="fw-bold text-center">Tech Stack</h2>
                <div className="wrapper">
                  <div className="mongo"><p className="mongo-text">JS</p></div>
                  <div className="express"><p className="express-text">CSS</p></div>
                  <div className="react"><p className="react-text">HTML</p></div>
                  <div className="node"><p className="node-text">WordPress</p></div>
                  <div className="circle"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* RESULTS */}
        <section>
          <Container className="py-5">
            <h2 className="sectitle mb-3 fw-bold">
              Results After Launch
            </h2>
            <p>
              The redesigned website significantly improved Aryans Group of
              Colleges’ digital presence, offering a fast, intuitive, and
              student-friendly platform. Enhanced performance, better
              navigation, and optimized enquiry flows resulted in measurable
              improvements across key metrics.
            </p>
            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li><strong>Increased Enquiries:</strong> Admission enquiries increased by approximately 20%.</li>
                  <li><strong>Improved Mobile Performance:</strong> Faster load times and smoother interactions.</li>
                  <li><strong>Better Navigation:</strong> Clear course and college structure.</li>
                  <li><strong>Stronger Brand Trust:</strong> Professional design enhanced credibility.</li>
                  <li><strong>Higher Engagement:</strong> Improved content accessibility boosted user interaction.</li>
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
                  The Aryans Group of Colleges website successfully bridges
                  academic excellence with digital accessibility. Through
                  structured content, responsive design, SEO optimization, and
                  seamless enquiry mechanisms, the platform delivers a trusted
                  and engaging experience for prospective students.
                </p>
                <p>
                  This transformation empowers Aryans Group of Colleges to
                  connect more effectively with students, strengthen admissions,
                  and reinforce its position as a leading multi-disciplinary
                  educational institution near Chandigarh.
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

export default aryans;
