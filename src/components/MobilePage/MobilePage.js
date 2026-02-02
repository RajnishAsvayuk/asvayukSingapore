"use client";
import HeroServices from "@/components/HeroServices/HeroServices";
import React from "react";
import AppImages from "@/config/constant/app.images";
import { Container } from "react-bootstrap";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Image from "next/image";
// imgs
import mobileAppBanner from "@/assets/Images/mobileBanner.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import Group105518 from "@/assets/Images/mad.webp";
import html from "@/assets/Images/fltr.webp";
import react from "@/assets/Images/react.webp";
import objective from "@/assets/Images/android.webp";
import kotlin from "@/assets/Images/java.webp";
import swift from "@/assets/Images/swift.webp";
import Process from "@/components/ProcessSection/Process";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";

const MobilePage = () => {
  return (
    <>
        <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Mobile App Development"}
          pageHeading={"Singapore’s Elite Mobile Application Architects"}
          pagePara={
            "Unlock new revenue streams with high-impact digital products. At LayerEx, we engineer sophisticated iOS and Android applications that redefine user engagement for the modern Singaporean enterprise."
          }
          pageImg={mobileAppBanner}
          pageAlt={"Leading Mobile App Development Company Serving Singapore"}
        />

        <section className="bg-section pt-2 pb-2">
          <Container>
            <div className="main-bg">
              <div className="tool-heading pt-5 pb-2">
                <h2 className="conclusion_title mb-2">
                  What Sets Our Singapore App Development Apart?
                </h2>
                <div>
                  <p className="text-white lh-md fs-6 pt-3 text-start pb-2">
                    LayerEx stands as a premier technology partner in the heart of Singapore. We merge bold creative vision with rigorous technical execution to build mobile platforms that don’t just function—they dominate their market niche and scale effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Specialized Mobile Solutions for Every Ambition</h2>
                <p className="mt-3">
                  From streamlined startups to complex multi-national corporations, LayerEx provides the specialized technical depth required to succeed in Singapore’s fast-paced digital economy.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Bespoke Application Engineering:"
                      cardHeading="Bespoke Application Engineering:"
                      cardParaGraph={
                        <>
                          We move beyond "off-the-shelf" solutions to build custom software that mirrors your specific business logic and brand DNA.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="Premium iOS Craftsmanship"
                      cardHeading="Premium iOS Craftsmanship"
                      cardParaGraph={
                        <>
                          {" "}
                          As a top iPhone app development firm in Singapore, we build native Apple experiences that are sleek, secure, and incredibly fast.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Next-Gen Mobile Commerce"
                      cardHeading="Next-Gen Mobile Commerce"
                      cardParaGraph={
                        <>
                          Capture the SG retail market with high-converting e-commerce apps featuring integrated local payment gateways and smart inventory sync.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Secure Cloud Architectures"
                      cardHeading="Secure Cloud Architectures"
                      cardParaGraph="We build the 'brains' behind the app, ensuring real-time data synchronisation and military-grade security for your users."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="High-Performance Android Hubs"
                      cardHeading="High-Performance Android Hubs"
                      cardParaGraph="Our developers utilise the latest frameworks to reach the vast Android user base with stability and fluid performance."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="Total Lifecycle Partnership"
                      cardHeading="Total Lifecycle Partnership"
                      cardParaGraph=" We stay with you long after the launch, providing the continuous optimisation and support needed to stay ahead of the competition."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <KeyPointSection
          keyHeading={
            <>Why LayerEx Ranks Among the Best</>
          }
          keyPara={
            <>
              With a track record of excellence, LayerEx has become the best app development company in Singapore for brands that refuse to settle. We build for the future, ensuring every pixel and line of code serves a purpose.
            </>
          }
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={
            <>
              Delivering <span style={{ color: "#249f81" }}>Excellence Across  </span>{" "}
              Every Sector 
            </>
          }
          ExpPara={
            <>
              We serve a diverse range of clients with our elite team of {" "}
              <b> mobile app developers in Singapore,</b> providing custom-engineered software solutions for retail, healthcare, fintech, logistics, and beyond.
            </>
          }
          point1="Strategic Mobile Consulting
"
          pointPara1={
            <>
              We create intuitive, cross-platform tools designed to solve real-world operational bottlenecks.
            </>
          }
          point2="Award-Winning App Services"
          pointPara2={
            <>
              LayerEx is celebrated for delivering dependable, forward-thinking mobile tech on time and within budget.
            </>
          }
          point3="Specialised Tech Stacks
"
          pointPara3={
            <>
              We leverage Kotlin, Swift, and Flutter to ensure your application is built on a foundation of modern scalability.
            </>
          }
          point4="Localised Digital Strategy"
          pointPara4={
            <>
              As a leading tech consultancy in Singapore, we understand the local consumer behaviour better than anyone else.
            </>
          }
          altTags={{
            group1: "mobile app development company",
            group2: "android app development company",
            group3: "mobile app development companies in Singapore",
            group4: "best app development company",
            mockups: "e commerce app development services",
            whiteLogo: "android application development services",
          }}
        />

        <section className="saas-technology">
          <div className="container">
            <div className="px-5 mx-5">
              <div className="saas-technology-heading text-center">
                <h2>
                  Our Arsenal of Powerful Tech Stack To Fuel Your Mobile App
                </h2>
              </div>
              <div className="row pt-5 text-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={html}
                      alt="Mobile app development service chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Flutter</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={react}
                      alt="Software Development Company in Chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>React Native</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={objective}
                      alt="Chandigarh's Most Trusted Mobile App Development Company"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Android</h5>
                  </div>
                </div>
              </div>
              <div className="row pt-5 text-center justify-content-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={kotlin}
                      alt="Chandigarh's Leading Mobile App Development Company"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Java</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <Image
                      src={swift}
                      alt="mobile app development companies in Chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Swift</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Process
          heading="Our Proven Development Methodology
"
          para="Success isn't accidental. At LayerEx, we follow a precision-engineered process to ensure your digital product is world-class.
"
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Strategic Discovery"
          col1para="We dissect your goals to create a roadmap that targets the right Singaporean keywords and user demographics."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN CHANDIGARH"
          col2head="Creative Visualisation
"
          col2para="Our designers build interactive prototypes so you can experience the flow of your app before a single line of code is written.

"
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in chandigarh"
          col3head="Advanced Coding"
          col3para="Our engineering team builds the core engine of your app, focusing on rapid load times and rock-solid security.

"
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in chandigarh"
          col4head="Exhaustive Quality Control"
          col4para="We break things so your users don't have to. Every feature undergoes rigorous stress testing across dozens of devices."
          col5Img={AppImages.processImg.test}
          col5Alt="Responsive web development chandigarh"
          col5head="Strategic Deployment
"
          col5para="We manage the entire store submission process and provide the analytical tools to track your growth from day one."
        />

        {/* <ServicesCaseStudy /> */}
      </main>
    </>
  )
}

export default MobilePage
