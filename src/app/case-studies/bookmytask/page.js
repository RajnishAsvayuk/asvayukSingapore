import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "@/assets/Images/bookmytask_logo.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/cs7.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const bookmytask = () => {
  return (
    <>
      <main>
            <section>
                    <Container fluid>
                        <div className="row align-items-center" style={{ background: "#fff0dc" }}>
                            <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                                <div className="fullcase_details">
                                    <div className="fullCaseStudy_slider_logo">
                                        <Image src={moonLight} alt="Website development services in Singapore" style={{ mixBlendMode: "darken", width: '200px !important' }} />
                                    </div>
                                    <div className="fullCaseStudy_textContent py-4">
                                        <h2 className="fw-semibold fs-1" style={{ textTransform: 'uppercase', lineHeight: '3.2rem' }}> Connecting you with skilled professionals for every task, big or small.</h2>
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
                                    <Image src={AppImages.casestudySliderImg.caseStu8} alt="Web developers for website portal development in Singapore" width={500} height={500} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

           <section style={{ background: '#ECFFFA' }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="fw-bold mb-3">BookMyTask</h1>
                                <p>
                                    BookMyTask is a leading online service platform, designed to streamline and simplify task management for individuals and businesses. We connect you with skilled professionals for various needs, ranging from home repairs to digital services. With a focus on quality and reliability, BookMyTask is your trusted partner for all types of tasks, making it easier than ever to get things done efficiently.
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
                                            The BookMyTask website needs to reflect the platform's focus on convenience and efficiency through an inviting, engaging design. It should provide an easy-to-navigate, mobile-optimized experience, allowing users to find and book services effortlessly.
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
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-7">
                                <h2 className="sectitle mb-3 fw-bold">Project Goals</h2>
                                <p>The BookMyTask website aims to provide an inviting, visually rich, and functionally efficient platform that showcases the wide range of services. With a focus on engaging storytelling, mobile optimization, and personalized suggestions, BookMyTask seeks to build a digital experience that resonates with users and simplifies task management.</p>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                        <div className="pr_goals"><span>Immersive Storytelling</span></div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                        <div className="pr_goals"><span>Mobile Accessibility</span></div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                        <div className="pr_goals"><span>Data Personalization</span></div>
                                    </div>
                                </div>
                            </div>
                            <Col lg={5} className='Tech_stack overflow-hidden d-none d-lg-block'>
                                <h2 className='fw-bold text-center'>Tech Stack</h2>
                                <div className="wrapper">
                                    <div className="mongo">
                                        <p className="mongo-text">HTML</p>
                                    </div>
                                    <div className="express">
                                        <p className="express-text">CSS</p>
                                    </div>
                                    <div className="react">
                                        <p className="react-text">JS</p>
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
                        <h2 className="sectitle mb-3 fw-bold">Results After Implementation</h2>
                        <p>
                            Following the launch of the redesigned BookMyTask website, the visually immersive, mobile-optimized interface and personalized recommendations have significantly enhanced user experience. The platform has seen increased engagement, improved conversion rates, and strengthened market presence.
                        </p>
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <ul>
                                    <li><p><strong>Enhanced User Experience:</strong> Clear, vibrant visuals and easy navigation make it simple for customers to find and book services.</p></li>
                                    <li><p><strong>Effortless Checkout:</strong> Streamlined booking process for quick and secure reservations.</p></li>
                                    <li><p><strong>Responsive Across Devices:</strong> Optimal performance across all devices, including mobile.</p></li>
                                    <li><p><strong>Personalized Suggestions:</strong> AI-powered recommendations boost user engagement and satisfaction.</p></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <Image src={AppImages.casestudySliderImg.caseStu8} alt="Shopify website development Singapore" width={200} height={300}/>
                            </div>
                        </div>
                    </div>
                </section>
     <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <Image src={conclusion} alt="Digital marketing services in Singapore" width="100%" />
                            </div>
                            <div className="col-lg-8">
                                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                                <p>
                                    By integrating visually rich design, smooth navigation, mobile accessibility, and AI-powered personalization, BookMyTask’s website offers a high-quality online service experience. These enhancements have driven conversions, elevated brand appeal, and provided an exceptional online experience that aligns with BookMyTask’s mission.
                                </p>
                                <p>
                                    By integrating visually rich design, smooth navigation, mobile accessibility, and AI-powered personalization, BookMyTask’s website offers a high-quality online service experience. These enhancements have driven conversions, elevated brand appeal, and provided an exceptional online experience that aligns with BookMyTask’s mission.
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

export default bookmytask;
