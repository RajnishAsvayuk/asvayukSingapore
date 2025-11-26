"use client";
import React from "react";
import digitalBanner from "../../../public/Images/banners-14.webp";
import C17 from "../../../public/Images/c17.webp";
import c11 from "../../../public/Images/c11.webp";
import c12 from "../../../public/Images/c12.webp";
import c13 from "../../../public/Images/c13.webp";
import c14 from "../../../public/Images/c14.webp";
import c15 from "../../../public/Images/c15.webp";
import c16 from "../../../public/Images/c16.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";

const digitalMarketing = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Marketing"}
          pageName={"Performance Marketing"}
          pageHeading={"Digital Marketing Services in Singapore"}
          pagePara={
            "Asvayuk Technologies Private Ltd. offers top-notch digital marketing services in Singapore, helping businesses thrive in the digital world. Whether you are a startup or an established company, our customized strategies will boost your online visibility, increase leads, and enhance your brand reputation."
          }
          pageImg={digitalBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Our Digital Marketing Services in Singapore</h2>
                <p className="mt-3">
                  We offer a comprehensive range of services to cater to your
                  online marketing needs and help your business grow with
                  high-quality digital strategies:
                </p>
              </div>

              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="online marketing company in Singapore"
                      cardHeading="SEO Services Singapore (Search Engine Optimization)"
                      cardParaGraph={
                        <>
                          Want to rank higher on Google? Our Best SEO company in
                          Singapore ensures your website appears on the first
                          page. We optimize structure, speed, and build
                          high-quality backlinks to enhance visibility.
                        </>
                      }
                    />
                  </div>

                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="PPC Service Singapore"
                      cardHeading="PPC Service Singapore (Pay-Per-Click Advertising)"
                      cardParaGraph={
                        <>
                          Attract high-intent customers through targeted Google
                          and social media ads. We manage PPC campaigns to
                          ensure maximum ROI and measurable results.
                        </>
                      }
                    />
                  </div>

                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="Digital Marketing Agency in Singapore"
                      cardHeading="SMM Service Singapore (Social Media Marketing)"
                      cardParaGraph={
                        <>
                          Leverage the power of Facebook, Instagram, and
                          LinkedIn. We create engaging posts, run powerful ad
                          campaigns, and grow your brand’s social presence
                          effectively.
                        </>
                      }
                    />
                  </div>

                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Best SEO company in Singapore"
                      cardHeading="Content Marketing & Blogging"
                      cardParaGraph={
                        <>
                          Quality content builds trust. Our team writes blogs,
                          articles, and website content that establish your
                          brand as an industry authority.
                        </>
                      }
                    />
                  </div>

                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Digital marketing experts in Singapore"
                      cardHeading="Online Reputation Management"
                      cardParaGraph={
                        <>
                          Your online image matters. We monitor and manage brand
                          reviews to build and maintain a positive reputation
                          across all platforms.
                        </>
                      }
                    />
                  </div>

                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="Digital Marketers in Singapore"
                      cardHeading="Email Marketing & Automation"
                      cardParaGraph={
                        <>
                          Use personalized email campaigns to engage your
                          audience. We create compelling newsletters and
                          automated sequences that boost conversions.
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Our Digital Marketing Services in Singapore?"
          ExpPara="At Asvayuk Technologies Private Ltd., we understand that every business has unique goals. Our team of digital marketing experts in Singapore creates data-driven strategies that ensure measurable results. With years of experience, we have helped businesses across different industries achieve success through SEO, PPC, social media marketing, and content marketing."
          point1="Leading App Pioneers"
          pointPara1="Drawing on our years of experience, we specialize in transforming ideas into exceptional, user-centric mobile applications."
          point2="Craft Engaging Experiences"
          pointPara2="Our mobile apps are meticulously designed to be visually stunning and deliver a seamless, intuitive user experience."
          point3="Global Trust, Local Impact"
          pointPara3="Combining local insights with global expertise, we ensure seamless technological excellence."
          point4="Your App, Our Expertise"
          pointPara4="Together, we collaborate to create a digital masterpiece that aligns with your goals and exceeds your expectations."
          altTags={{
            group1: "Digital Marketing Agency in Singapore",
            group2: "Digital marketing consultant in Singapore",
            group3: "Social media marketing in Singapore",
            group4: "Digital marketing services in Singapore",
            mockups:
              "100% guaranteed digital marketing services in Singapore.",
            whiteLogo: "Digital Marketers in Singapore",
          }}
        />
        <KeyPointSection
          keyHeading="Benefits of Our Digital Marketing Services in Singapore"
          keyPara="If you are looking for the best digital marketing company in Singapore, Asvayuk Technologies Private Ltd. is your one-stop solution. Our expert team ensures your business achieves maximum online visibility and growth."
          keyPoint1="Customized strategies tailored to your business."
          keyPoint2="Increased brand awareness and website traffic."
          keyPoint3="Higher engagement and conversions."
          keyPoint4="100% Guaranteed Digital Marketing Services in Singapore for effective results."
          keyPoint5="Expert consultation with a Digital Marketing Consultant in Singapore.."
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={C17}
          altTags={{
            check1: "best digital marketing company in Singapore",
            check2: "Top 10 Digital Marketing Companies in Singapore",
            check3: "online marketing company in Singapore",
            check4: "SEO services Singapore",
            check5: "PPC service Singapore",
            Group105518: "SMM service Singapore",
          }}
        />

        <ServicesCaseStudy />
      </main>
    </>
  );
};

export default digitalMarketing;
