"use client";
import HeroServices from "@/components/HeroServices/HeroServices";
import React from "react";
import Image from "next/image";
import lowcodeBanner from "@/assets/Images/lowcode-banner.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import lowcodeImg from "@/assets/Images/lowcodeimg.webp";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import BannerButton from "@/components/BannerBtn/BannerButton";
import Experience from "@/components/Experience/Experience";
import Industry from "@/components/Industry/Industry";

const Lowcode = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"lowCode/noCode-app"}
          pageHeading={
            "Accelerate Digital Transformation with Top-Tier Low-Code/No-Code Solutions"
          }
          pagePara={
            "At Layerex, we deliver high-performance, enterprise-grade web and mobile applications through agile low-code frameworks. Empower your business in Singapore with scalable, custom-built software that drives innovation and secures your position as a local industry leader."
          }
          pageImg={lowcodeBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Comprehensive Low-Code & No-Code Development Services in Singapore</h2>
                <p className="mt-3">
                  Our team of certified OutSystems and Mendix specialists provides end-to-end consultancy and technical execution, ensuring your digital products are robust, secure, and market-ready.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Website Design
"
                      cardHeading="OutSystems Strategic Consulting
"
                      cardParaGraph={
                        <>
                          We analyze your current IT landscape to architect a roadmap for OutSystems implementation, ensuring every phase of the SDLC is optimized for maximum efficiency and local compliance.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Bespoke Low-Code App Creation
"
                      cardParaGraph={
                        <>
                          {" "}
                          From internal portals to customer-facing mobile apps, we build tailored software using Mendix and OutSystems that aligns perfectly with your Singapore business growth targets.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="Seamless Enterprise Integration

"
                      cardParaGraph={
                        <>
                         Bridge the gap between your legacy systems and modern tech. Our Singapore-based integration experts create a unified digital ecosystem that enhances data flow and operational agility.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="Modernization & Platform Migration

"
                      cardParaGraph="Upgrade your existing platforms with zero data loss. We handle complex migrations with precision, maintaining business continuity for Singaporean firms while future-proofing your tech stack.

"
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Mobile Responsive Design
"
                      cardHeading="24/7 Managed Support & Maintenance
"
                      cardParaGraph="Keep your applications running at peak performance with our dedicated local support team. We offer proactive monitoring, security updates, and rapid troubleshooting whenever you need it."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="Flexible Resource Augmentation
"
                      cardParaGraph="Scale your internal tech team instantly. Access our pool of elite Mendix consultants and OutSystems developers to accelerate your project timelines without the overhead of full-time hiring."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="low-code-sec-tool p-5">
          <div className="container">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                  <div className="tool-heading lowCodeExp">
                    <h2>
                      Mastering Leading-Edge Low-Code Platforms for Rapid Delivery
                    </h2>
                    <p className="mt-4">
                      leverages world-class development tools to slash time-to-market, allowing Singaporean enterprises to transition from concept to deployment in record time.
                    </p>
                  </div>
                  <div className="tool-heading-list mt-3">
                    <h6 className="fw-bold">1. OutSystems</h6>
                    <p className="mt-3">
                      As a premier low-code platform, OutSystems enables us to engineer sophisticated, enterprise-level apps with visual modeling. Its vast library of pre-integrated modules ensures your project is both high-quality and highly adaptable.
                    </p>
                    <h6 className="fw-bold">2. Mendix</h6>
                    <p className="mt-3">
                      We utilize Mendix for its superior collaborative features and model-driven approach. It allows for development speeds up to 10x faster than traditional coding, fostering seamless teamwork and ensuring your Singapore business stays ahead of the curve.
                    </p>
                  </div>
                  <BannerButton
                    btnTitle="Get Expert Advice"
                    url="/contact-us"
                  />
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                  <div className="tool-img">
                    <Image
                      src={lowcodeImg}
                      className="img-fluid h-100 rounded-4"
                      alt="Low-Code No-Code App Development Services in Chandigarh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle={<>Why Partner with Layerex for Your Next Digital Project?</>}
          ExpPara={
            <>
              As a premier technology partner in Singapore, we don't just build apps; we create digital experiences that captivate your audience and solve real business challenges.
            </>
          }
          point1="Top-Tier Technical Prowess


"
          pointPara1={
            <>
              Our developers are masters of low-code environments, delivering high-utility solutions that are custom-engineered for your specific operational needs.
            </>
          }
          point2="Agile & Adaptive Strategy"
          pointPara2={
            <>
              In the fast-moving Singapore tech landscape, we provide future-ready solutions that evolve alongside your business and the latest industry trends.
            </>
          }
          point3="User-First Philosophy

"
          pointPara3={
            <>
              Every app we design focuses on the end-user. We prioritize intuitive navigation and seamless UX to ensure your Singaporean customers stay engaged and satisfied.
            </>
          }
          point4="Reliable Local Assistance
"
          pointPara4={
            <>
              Benefit from dependable, localized technical support. Whether it's an urgent update or a routine enhancement, our team is always ready to assist your SG operations.
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

       <Industry />
      </main>
    </>
  );
};

export default Lowcode;
