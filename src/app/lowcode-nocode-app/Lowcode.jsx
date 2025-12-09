"use client";
import HeroServices from "@/components/HeroServices/HeroServices";
import React from "react";
import Image from "next/image";
import lowcodeBanner from "@/assets/Images/banners-14.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import lowcodeImg from "@/assets/Images/lowcode.webp";
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
            "Unlocking Innovation with the Power of LowCode NoCode App"
          }
          pagePara={
            "With Asvayuk Technologies' future-oriented low-code development services, you can create scalable, customized, and enterprise-grade web, mobile, and intranet applications in Singapore, becoming a pioneer of digital transformation."
          }
          pageImg={lowcodeBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Our Low-Code/No-Code App Development Services</h2>
                <p className="mt-3">
                  Our OutSystems and Mendix certified developers, consultants, and MVPs are adept at implementing low-code and no-code solutions in Singapore, ensuring your project is in capable hands.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Website Design
"
                      cardHeading="Outsytems Consulting Services
"
                      cardParaGraph={
                        <>
                          We conduct a comprehensive evaluation of your existing infrastructure to define the scope for OutSystems app development or optimization, strategically planning the SDLC.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="E-commerce Website Development Singapore
"
                      cardHeading="Low-Code Application Development
"
                      cardParaGraph={
                        <>
                          {" "}
                          We craft bespoke web, mobile, and intranet applications aligned with your business growth objectives, using expertise in OutSystems or Mendix.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Static Website Design Singapore
"
                      cardHeading="Enterprise Application Integration

"
                      cardParaGraph={
                        <>
                         Unlock the full potential of your applications and establish a connected and agile digital ecosystem with our dedicated integration specialists in Singapore.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Shopify Website Development Singapore
"
                      cardHeading="Platform Upgrades and Migrations

"
                      cardParaGraph="We manage the entire lifecycle of platform upgrades and migrations seamlessly, ensuring minimal downtime and zero data loss, safeguarding your business continuity in Singapore.

"
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Mobile Responsive Design
"
                      cardHeading="Support and Maintenance Solutions
"
                      cardParaGraph="We provide round-the-clock support, on-demand maintenance, and technical assistance to keep your apps running smoothly and securely."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="SEO-Optimized Web Design
"
                      cardHeading="Resource Augmentation Services
"
                      cardParaGraph="Scale your development capabilities and accelerate project timelines by leveraging our flexible outsourcing solutions for OutSystems Champions, Mendix consultants, or MVPs."
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
                      Exploring the Tools of Low-Code and No-Code Development
                    </h2>
                    <p className="mt-4">
                      At Asvayuk Technologies, we utilize advanced tools to expedite the development process and empower our clients in Singapore to realize their ideas effortlessly.
                    </p>
                  </div>
                  <div className="tool-heading-list mt-3">
                    <h6 className="fw-bold">1. OutSystems</h6>
                    <p className="mt-3">
                      OutSystems, a leading low-code platform, allows us to
                      develop and deploy enterprise-grade applications with
                      minimal coding. Its user-friendly visual development
                      environment enables rapid application design,
                      construction, and iteration. The platform's extensive
                      collection of pre-built components and integrations
                      accelerates development, boosting productivity.
                    </p>
                    <h6 className="fw-bold">2. Mendix</h6>
                    <p className="mt-3">
                      Mendix is another robust low-code platform we employ for
                      swift and efficient custom application creation. Featuring
                      a drag-and-drop interface and model-driven development
                      approach, Mendix facilitates building and deploying
                      applications up to ten times faster than traditional
                      methods. Its comprehensive collaboration tools and
                      integrated version control ensure seamless teamwork and
                      timely project delivery.
                    </p>
                  </div>
                  <BannerButton
                    btnTitle="Free Consultation"
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
          expTitle={<>Why Choose Us For Website Development?</>}
          ExpPara={
            <>
              As a leading web development company, we craft websites that align
              with your goals and inspire your customers. Here is why you should
              choose us.
            </>
          }
          point1="Unmatched Expertise


"
          pointPara1={
            <>
              Our developers excel in low-code and no-code development, crafting
              tailored, high-performance solutions to meet your specific needs.
            </>
          }
          point2="Client-Centric Approach"
          pointPara2={
            <>
              We craft tailored websites to ensure seamless user experiences,
              prioritizing your needs and preferences every step of the way.
            </>
          }
          point3="Adaptive Solutions

"
          pointPara3={
            <>
              Specializing in dynamic and future-proof websites that seamlessly
              adapt to the ever-evolving digital landscape.
            </>
          }
          point4="Robust Support
"
          pointPara4={
            <>
              Count on us for prompt and efficient assistance for tech support,
              updates, or enhancements anytime you need it.
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
