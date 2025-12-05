import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "@/assets/Images/kre.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/cs6.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const kreshya = () => {
  return (
    <>
      <main>
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#C3CAEB" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={moonLight}
                      alt="Shopify Development Company Singapore"
                      style={{ mixBlendMode: "darken" }}
                      width={200}
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2
                      className="fw-semibold fs-1"
                      style={{
                        textTransform: "uppercase",
                        lineHeight: "3.2rem",
                      }}
                    >
                      Explore our exquisite collection of pearls jewellery and
                      find your perfect piece today!
                    </h2>
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
                  <Image
                    src={AppImages.casestudySliderImg.caseStu6}
                    alt="Shopify development services in Singapore"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section style={{ background: "#ECFFFA" }}>
          <Container className="py-5">
            <Row>
              <Col lg={6}>
                <h1 className="fw-bold mb-3">Kreshya</h1>
                <p>
                  Kreshya is a well-known jewelry brand, primarily famous for
                  its exquisite collections of pearls, diamonds, and gold
                  jewelry. Based in India, the brand has a long-standing
                  reputation for offering high-quality pearls, particularly
                  South Sea and freshwater varieties, alongside traditional and
                  contemporary jewelry designs. Their offerings include a wide
                  range of jewelry items such as necklaces, earrings, bracelets,
                  and rings, catering to different tastes and occasions. Kreshya
                  is particularly popular in cities like Hyderabad, where the
                  brand has established a strong presence in the jewelry market.
                </p>
              </Col>
              <Col lg="6" md="12" xm="12" className="">
                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                  <div className="head">
                    <h4 className="titletext text-white mb-3 border-bottom pb-2">
                      Problem Statement
                    </h4>
                  </div>
                  <div className="content">
                    <p className="text-white">
                      Kreshya’ website showcases a refined and user-friendly
                      design, perfectly reflecting the brand’s elegant and
                      timeless appeal. With high-quality visuals and an
                      intuitive interface, it offers a smooth and
                      mobile-optimized shopping experience, making it easy for
                      customers to explore a wide range of exquisite jewelry and
                      detailed information. The seamless user experience
                      enhances accessibility, ensuring a hassle-free journey for
                      both browsing and purchasing.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
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
              {/* Card 1 — Seamless User Interface */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={optimization}
                      alt="100% guaranteed digital marketing services in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Seamless User Interface
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Develop a sleek and intuitive user interface that showcases
                    Kreshya’s collection with easy-to-navigate categories and
                    filters, ensuring a smooth and enjoyable shopping
                    experience.
                  </p>
                </div>
              </div>

              {/* Card 2 — Smooth Checkout Flow */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={backlink}
                      alt="social media marketing agency in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Smooth Checkout Flow
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Streamline the checkout process by reducing steps and
                    offering multiple secure payment options to ensure quick and
                    hassle-free order completion.
                  </p>
                </div>
              </div>

              {/* Card 3 — Cross-Device Compatibility */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={technicalseo}
                      alt="high rank seo website creator in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Cross-Device Compatibility
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Ensure the website performs flawlessly across all screen
                    sizes, especially on mobile devices, with responsive layouts
                    that adapt seamlessly to users’ needs.
                  </p>
                </div>
              </div>

              {/* Card 4 — Data-Driven Personalization */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={content}
                      alt="SaaS Application Development Services in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Data-Driven Personalization
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Leverage user data and AI-driven tools to deliver
                    personalized product recommendations, increasing engagement
                    and enhancing each customer’s shopping experience.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section>
          <Container className="py-5">
            <Row>
              <Col lg={7}>
                <h2 className="sectitle mb-3 fw-bold">Project Goals</h2>
                <p>
                  The key goals for the Kreshya website include creating a
                  visually stunning, highly functional eCommerce platform with
                  seamless navigation, mobile optimization, and personalized
                  product recommendations powered by AI, all while reflecting
                  the brand's luxury image.
                </p>
                <p>
                  The focus is also on maximizing the accessibility of the
                  website across all devices, ensuring that the luxury of
                  Kreshya is easily accessible, no matter the platform. These
                  goals emphasize the brand’s commitment to both aesthetic and
                  functional excellence, offering an effortless, elegant online
                  shopping experience for customers.
                </p>
                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0">
                    <div className="pr_goals">
                      <span className="mb-0">User Experience Focus</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0">
                    <div className="pr_goals">
                      <span className="mb-0">Device Optimization</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0">
                    <div className="pr_goals">
                      <span className="mb-0">Personalization and AI</span>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col
                lg={5}
                className="Tech_stack overflow-hidden d-none d-lg-block"
              >
                <h2 className="fw-bold text-center">Tech Stack</h2>
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
                    <p className="node-text">Shopify</p>
                  </div>
                  <div className="circle"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container className="py-5">
            <h2 className="sectitle mb-3 fw-bold">
              Results After Implementation
            </h2>
            <p>
              After launching the Kreshya website, the seamless mobile-optimized
              design combined with AI-driven personalized recommendations has
              created an engaging and luxurious customer experience. This has
              resulted in increased customer retention, higher conversion rates,
              and a stronger brand image.
            </p>
            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li>
                    <p>
                      <strong>Intuitive Interface:</strong> The clean,
                      user-centric design provides an easy and enjoyable
                      shopping experience with clear categories and product
                      visuals.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Smooth Checkout Flow:</strong> Quick and easy
                      checkout process with minimal steps, enhancing the overall
                      user experience.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Responsive Design:</strong> The site performs
                      flawlessly on all devices, ensuring an optimal experience
                      for mobile and tablet users.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>AI-Powered Recommendations:</strong> Personalized
                      suggestions boost user engagement, increasing both
                      conversion rates and satisfaction.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <Image
                  src={AppImages.casestudySliderImg.caseStu6}
                  alt="Best UI UX designers in Singapore"
                  className="img-fluid  object-fit-cover"
                  width={500}
                  height={300}
                />
              </div>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="py-5">
            <Row>
              <Col lg={4}>
                <Image
                  src={conclusion}
                  alt="React Native development agency Singapore"
                  width={"100%"}
                />
              </Col>
              <Col lg={8}>
                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                <p className="text-black">
                  In conclusion, by combining elegant design, seamless
                  navigation, mobile optimization, and AI-powered
                  personalization, the Kreshya website delivers a premier online
                  shopping experience. This holistic approach has fostered
                  stronger customer engagement, loyalty, and aligns with the
                  luxurious brand image.
                </p>
                <p>
                  These strategies pave the way for greater conversions,
                  enhanced brand perception, and provide a flawless online
                  experience that resonates with customers.
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

export default kreshya;
