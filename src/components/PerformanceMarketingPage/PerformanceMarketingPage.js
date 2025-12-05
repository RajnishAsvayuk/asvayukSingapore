"use client";
import React from "react";
import digitalBanner from "@/assets/Images/banners-14.webp";
import C17 from "@/assets/Images/c17.webp";
import c11 from "@/assets/Images/c11.webp";
import c12 from "@/assets/Images/c12.webp";
import c13 from "@/assets/Images/c13.webp";
import c14 from "@/assets/Images/c14.webp";
import c15 from "@/assets/Images/c15.webp";
import c16 from "@/assets/Images/c16.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";

const PerformanceMarketingPage = () => {
  return (
    <>
     <main>
        <HeroServices
          home={"Home"}
          pageParent={"Marketing"}
          pageName={"Performance Marketing"}
          pageHeading={"Top Digital Marketing Services in Singapore"}
          pagePara={
            "Asvayuk Technologies Private Ltd. offers top-tier digital marketing solutions designed specifically for businesses to thrive in the competitive Singapore market. Whether you're a nimble start-up or an established enterprise, our localized and data-driven strategies are crafted to boost your brand visibility in Singapore, generate high-quality leads, and solidify your regional reputation."
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
                          Want to rank on the first page of Google Singapore?
                          Our Best SEO Company in Singapore ensures your website
                          captures organic traffic. We optimize your structure,
                          improve page speed, and implement high-authority link
                          building to dominate search results across the
                          city-state.
                        </>
                      }
                    />
                  </div>

                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="PPC Service Singapore (Pay-Per-Click Advertising)"
                      cardHeading="PPC Service Singapore (Pay-Per-Click Advertising)"
                      cardParaGraph={
                        <>
                          Our PPC service in Singapore helps you attract
                          immediate, high-intent customers through targeted ads
                          on Google Search (SEM), YouTube, and Meta
                          (Facebook/Instagram). We manage sophisticated
                          campaigns effectively, ensuring an exceptional Return
                          on Ad Spend (ROAS).
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
                          Leverage the power of social media with our Singapore
                          Social Media Marketing (SMM) strategies. We create
                          engaging campaigns, run targeted ads, and grow your
                          brand's engaged following on platforms like Facebook,
                          Instagram, LinkedIn, and TikTok, customized for
                          Singaporean users.
                        </>
                      }
                    />
                  </div>

                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="Content Marketing & Strategy"
                      cardHeading="Content Marketing & Strategy"
                      cardParaGraph={
                        <>
                          Quality, relevant content is the foundation of digital
                          success. Our team crafts informative localized blogs,
                          articles, case studies, and website content that
                          establishes your authority and addresses the specific
                          needs of consumers and businesses in Singapore.
                        </>
                      }
                    />
                  </div>

                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Digital marketing experts in Singapore"
                      cardHeading="Online Reputation Management (ORM)"
                      cardParaGraph={
                        <>
                          Your brand's reputation in the SG market is paramount.
                          We actively monitor, manage, and respond to customer
                          reviews on platforms like Google My Business, social
                          channels, and industry directories, ensuring a
                          consistently positive brand image.
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
                          Reach out to your potential clients in Singapore with
                          hyper-personalized email campaigns. We use advanced
                          automation tools to create compelling email sequences
                          that drive customer engagement, build loyalty, and
                          accelerate conversions.
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
          expTitle="Why Partner with Our Digital Marketing Experts in Singapore?"
          ExpPara="At Asvayuk Technologies Private Ltd., we understand the unique demands of the Singapore business landscape. Our team of digital marketing experts creates performance-driven strategies that ensure measurable ROI. With proven experience in the APAC region, we help businesses across key Singapore sectors achieve success through targeted Local SEO, Google Ads (PPC), powerful Social Media Marketing, and high-impact Content Marketing."
          point1="Regional Digital Pioneers"
          pointPara1="Drawing on our years of experience, we specialize in transforming business ideas into exceptional, user-centric digital campaigns and high-performance websites tailored for the Singapore audience."
          point2="Local Expertise, Global Standards"
          pointPara2="Combining deep insights into the Singaporean digital ecosystem with global best practices, we ensure seamless technological excellence and local relevance for your brand."
          point3="Performance-Driven Results"
          pointPara3="Our campaigns are meticulously designed to be visually stunning, deliver seamless, intuitive user experiences, and, most importantly, drive sales and conversions in Singapore."
          point4="Your Growth, Our Partnership"
          pointPara4="We collaborate closely with you to create a digital masterpiece that aligns with your specific goals, ensuring your growth plan meets and exceeds your expectations in Singapore."
          altTags={{
            group1: "Digital Marketing Agency in Singapore",
            group2: "Digital marketing consultant in Singapore",
            group3: "Social media marketing in Singapore",
            group4: "Digital marketing services in Singapore",
            mockups: "100% guaranteed digital marketing services in Singapore.",
            whiteLogo: "Digital Marketers in Singapore",
          }}
        />
        <KeyPointSection
          keyHeading="Unlock the Growth Potential of Your Business in Singapore"
          keyPara="If you are searching for the best digital marketing agency in Singapore, Asvayuk Technologies Private Ltd. is your comprehensive growth partner. Our expert team ensures your business achieves maximum online visibility, sustainable growth, and competitive advantage across the island."
          keyPoint1="Customized Digital Strategies tailored to meet your unique Singapore business objectives and scale."
          keyPoint2="Significant Increase in Brand Awareness and high-quality, targeted website traffic within the SG region."
          keyPoint3="Superior Engagement Rates and a measurable boost in sales and conversions."
          keyPoint4="Performance-Driven Marketing Services for effective, accountable, and guaranteed results in Singapore."
          keyPoint5="Direct Consultation with a Senior Digital Marketing Strategist who understands the Singapore market."
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
  )
}

export default PerformanceMarketingPage
