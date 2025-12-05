"use client";
import React from "react";
import Image from "next/image";
import arVrBanner from "@/assets/Images/Ar_Vr.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
import Group_989 from "@/assets/Images/Group-989.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Col, Container, Row } from "react-bootstrap";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import { VscCircleLargeFilled } from "react-icons/vsc";

const arvrDev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"AR/VR Development"}
          pageHeading={
            "AR/VR Development Services Expertise Transforming Realities."
          }
          pagePara={
            "Join forces with us for unmatched AR/VR services. Make your company future-proof with technology that makes a big impression."
          }
          pageImg={arVrBanner}
          pageAlt={"Website banners-52-1Company in Singapore"}
        />

        <section className="Ar-sec">
          <Container>
            <Row>
              <div className="Ar-sec-heading text-center text-dark">
                <h2 className=" text-dark">Services We Offer</h2>
                <p className="py-3 text-dark">
                  Explore our premier range of services designed to harness the
                  power of augmented and virtual reality.
                </p>
              </div>
              <div className="Ar-sec-card px-5 ">
                <Row className="gy-2">
                  <div className="col-lg-6 col-12 ">
                    <div className="Ar-sec-card1 d-block d-md-flex">
                      <div className="col-lg-6 col-md-7">
                        <h2>Virtual Reality (VR) </h2>
                        <ul className="ms-0 px-0 list-unstyled">
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>VR App Development</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>VR Game Development</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>VR Product Prototyping</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>VR Training Simulations</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>360-Degree Video Production</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>Enterprise VR Solutions</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-5 d-flex align-content-center justify-content-center">
                        <Image
                          src={Group_989}
                          alt="Best AR/VR Development Services in Singapore, Panchkula & Mohali"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="Ar-sec-card2 Ar-sec-card1 d-block d-md-flex">
                      <div className="col-lg-6 col-md-7">
                        <h2>Augmented Reality (AR)</h2>
                        <ul className="ms-0 px-0 list-unstyled">
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>AR App Development</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>AR UI/UX Design</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>AR in Training &amp; Education</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>AR for E-commerce Solutions</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>AR-Based Testing</span>
                          </li>
                          <li className="d-flex gap-2">
                            <span>
                              <VscCircleLargeFilled />
                            </span>
                            <span>Location-Based AR Apps</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-5 d-flex align-content-center justify-content-center">
                        <Image
                          src={Group_989}
                          alt="AR/VR Development Services in Singapore & Panchkula"
                        />
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Row>
          </Container>
        </section>

        <Experience
          expTitle="Why Choose Us?"
          point1="Proven Expertise"
          pointPara1="Enhance your e-commerce strategy with our proven WooCommerce development prowess."
          point2="Commitment to Quality"
          pointPara2="Our dedicated quality assurance team guarantees a flawless, high-performance WooCommerce platform."
          point3="Client-centric Approach"
          pointPara3="We prioritize your needs, ensuring a personalized and effective development journey."
          point4="Transparent Communication"
          pointPara4="We uphold transparent communication throughout your project, keeping you informed at every step."
          altTags={{
            group1: "AR/VR Development Services in Singapore & Panchkula",
            group2: "Best Virtual Reality Solutions in Panchkula & Mohali",
            group3: "Top Augmented Reality Developers in Mohali & Singapore",
            group4: "Custom AR/VR Software Development in Panchkula",
            mockups: "Future-Ready AR/VR Application Development in Singapore",
            whiteLogo: "AR/VR Development Services in Singapore & Panchkula",
          }}
        />

        <KeyPointSection
          keyHeading={<>Redefine Reality with Our AR/VR Development Services</>}
          keyPara={
            <>
              Investigate all of the possibilities with our advanced AR/VR
              development services. For unmatched innovation and immersive
              experiences, collaborate with us. Let's work together to create a
              future shaped by immersive technologies.
            </>
          }
          keyPoint1="Innovative Solutions"
          keyPoint2="Expert Development Team"
          keyPoint3="Tailored Experiences"
          keyPoint4="Transparent Communication"
          keyPoint5="Continuous Quality Enhancement"
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Process
          heading="Our Process of Expertise"
          para="Our team of expert mobile app developers plan, design, develop, test, optimize, and launch mobile apps that redefine user experiences."
          col1Img={AppImages.processImg.container}
          col1Alt="Top Augmented Reality Developers in Mohali & Singapore"
          col1head="Product Design"
          col1para="Crafting innovative and user-centric design strategies for a captivating app experience."
          col2Img={AppImages.processImg.planning}
          col2Alt="Best Virtual Reality Solutions in Panchkula & Mohali"
          col2head="Mobile App Consulting"
          col2para="Tailored guidance and strategies to shape your app concept into a successful product."
          col3Img={AppImages.processImg.pen}
          col3Alt="Immersive AR/VR App Development in Singapore"
          col3head="UI/UX Compatibility"
          col3para="Seamless integration of compelling design and intuitive user experiences for enhanced engagement."
          col4Img={AppImages.processImg.development}
          col4Alt="Custom AR/VR Software Development in Panchkula"
          col4head="Development"
          col4para="Utilizing cutting-edge technologies to build robust, scalable, and high-performance mobile applications."
          col5Img={AppImages.processImg.test}
          col5Alt="Leading AR/VR Company in Mohali & Singapore"
          col5head="QA & Testing"
          col5para="Our team of mobile testing experts performs testing and debugging to ensure a reliable and optimal functioning app."
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default arvrDev;
