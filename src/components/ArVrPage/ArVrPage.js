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

const ArVrPage = () => {
  return (
    <>
       <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"AR/VR Development"}
          pageHeading={"Driving the Future of AR/VR Development in Singapore"}
          pagePara={
            "Layerex stands as a premier AR/VR innovation hub, delivering deep-tech immersive solutions for the modern Singaporean enterprise. We engineer bespoke AR/VR environments that revolutionize industrial workflows, professional training, and high-impact digital marketing."
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
          expTitle="The Layerex Advantage"
          point1="Deep-Tech Mastery"
          pointPara1="Enhance your digital presence with our proven track record in sophisticated AR/VR engineering."
          point2="Localized Client Focus"
          pointPara2="We prioritize your specific operational needs, ensuring a transparent and results-oriented development journey."
          point3="Uncompromising Performance"
          pointPara3="Our dedicated SG-based QA team ensures every AR/VR asset is optimized for speed and visual clarity."
          point4="Clear & Open Partnership"
          pointPara4="We maintain constant, honest communication throughout the project, keeping you updated at every milestone."
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
          keyHeading={
            <>Why Singapore Enterprises Partner with Layerex for AR/VR Excellence?</>
          }
          keyPara={
            <>
              We merge state-of-the-art spatial engineering with a deep understanding of the local market to provide highly secure, scalable, and custom AR/VR frameworks. Our mission is to ensure your investment in immersive tech yields measurable ROI within Singapore’s competitive digital economy.
            </>
          }
          keyPoint1="Strategic AR/VR roadmaps built specifically for Singaporean business goals."
          keyPoint2="Elite development team proficient in Unity, Unreal Engine, ARKit, and ARCore."
          keyPoint3="Focus on high-conversion outcomes and data-driven results for the SG market."
          keyPoint4="Reliable, localized technical assistance for deployment and long-term maintenance."
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request a Custom Quote"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Process
          heading="Our Strategic Framework for AR/VR Success"
          para="Our specialized AR/VR architects plan, prototype, build, and deploy immersive applications that redefine how users interact with your brand."
          col1Img={AppImages.processImg.container}
          col1Alt="Top Augmented Reality Developers in Mohali & Singapore"
          col1head="Immersive Strategy & Design"
          col1para="Developing creative and user-focused spatial concepts for a truly engaging AR/VR experience."
          col2Img={AppImages.processImg.planning}
          col2Alt="Best Virtual Reality Solutions in Panchkula & Mohali"
          col2head="AR/VR Technical Consulting"
          col2para="Expert guidance to transform your initial ideas into a technically viable and successful product."
          col3Img={AppImages.processImg.pen}
          col3Alt="Immersive AR/VR App Development in Singapore"
          col3head="Cross-Platform UI/UX Optimization"
          col3para="Designing intuitive interfaces that ensure seamless user navigation within 3D environments."
          col4Img={AppImages.processImg.development}
          col4Alt="Custom AR/VR Software Development in Panchkula"
          col4head="Advanced AR/VR Development"
          col4para="Utilizing the latest 2026 rendering engines to build high-performance and stable immersive apps."
          col5Img={AppImages.processImg.test}
          col5Alt="Leading AR/VR Company in Mohali & Singapore"
          col5head="Rigorous Quality Assurance"
          col5para="Our local testing experts perform exhaustive debugging to guarantee a flawless, high-fidelity final launch."
        />

        {/* <ServicesCaseStudy /> */}
        <Industry />
      </main>
    </>
  )
}

export default ArVrPage
