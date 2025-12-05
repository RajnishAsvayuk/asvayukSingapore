import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "@/assets/Images/49thcoffee_logo.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/cs5.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const coffee = () => {
  return (
    <>
      <main>
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#E1FBFC" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={moonLight}
                      alt="Laravel PHP development services in Singapore"
                      style={{
                        mixBlendMode: "darken",
                        height: "unset !important",
                      }}
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
                      Small-batch roasting and always fresh.
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
                    src={AppImages.casestudySliderImg.caseStu4}
                    alt="Laravel website development agency Singapore"
                    width={507}
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
                <h1 className="fw-bold mb-3 ">49thcoffee</h1>
                <p>
                  The website 49thcoffee is dedicated to showcasing 49th
                  Parallel Coffee Roasters, a brand focused on high-quality,
                  direct trade specialty coffee. The site features a wide range
                  of products including coffee, brewing gear, and merchandise,
                  with a strong emphasis on sustainable sourcing and building
                  relationships with coffee growers. It offers subscriptions,
                  detailed brewing guides, and gift options.
                </p>
              </Col>
              <Col lg="6" md="12" xm="12" className="">
                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                  <div className="head">
                    <h4 className="titletext text-white mb-3 border-bottom pb-2">
                      Statement
                    </h4>
                  </div>
                  <div className="content">
                    <p className="text-white">
                      49thcoffee's website offers a visually engaging and
                      easy-to-navigate UI, designed to align with the brand’s
                      modern, elegant ethos.
                    </p>
                    <p className="text-white">
                      Featuring high-quality images and seamless UX, the website
                      ensures a smooth, mobile-friendly shopping experience,
                      enhancing access to products and information.
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
              {/* Card 1 */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={optimization}
                      alt="Laravel web application development Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Seamless User Interface
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Develop an intuitive and streamlined interface with clear
                    categories and smart filters, ensuring users can easily
                    explore products and complete purchases without confusion.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={backlink}
                      alt="Top 10 Software Development Companies In Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Smooth Checkout Flow
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Minimize steps in the checkout process and provide multiple,
                    secure payment options to ensure a fast, seamless, and
                    hassle-free shopping experience.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={technicalseo}
                      alt="CUSTOM SOFTWARE DEVELOPMENT IN Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Cross-Device Compatibility
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Ensure the website performs smoothly on all screen sizes
                    with fully responsive layouts, especially optimized for
                    mobile users.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={content}
                      alt="Best Laravel development company under budget in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Data-Driven Personalization
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Use customer insights and AI-powered tools to deliver
                    personalized product recommendations, enhancing user
                    engagement and boosting conversions.
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
                  The key goals for this Shopify-based project include crafting
                  a highly functional eCommerce site with a sleek and modern
                  design. The focus is on simplifying the customer journey, from
                  browsing to purchase, ensuring the site is mobile-optimized,
                  and enhancing the shopping experience with personalized
                  product suggestions powered by AI.
                </p>
                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0">
                    <div className="pr_goals">
                      <span className="mb-0">User Experience Focus</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0">
                    <div className="pr_goals">
                      <span className="mb-0">Cross-Device Optimization</span>
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
                    <p className="mongo-text">React.js</p>
                  </div>
                  <div className="express">
                    <p className="express-text">HTML/CSS</p>
                  </div>
                  <div className="react">
                    <p className="react-text">JavaScript</p>
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
              After launching the Shopify-powered website, it provides a
              seamless and efficient shopping experience. The mobile-friendly
              design, paired with AI-driven recommendations, offers a
              personalized and engaging customer journey, ultimately boosting
              conversions. Smooth navigation and a modern, luxurious design
              further contribute to the website’s success by strengthening brand
              image and improving customer retention.
            </p>
            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li>
                    <p>
                      <strong>Intuitive Interface:</strong> The clean,
                      user-centric design ensures an easy shopping experience
                      with clear categories and product visuals.
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
                      suggestions increase user engagement, boosting both
                      conversion rates and satisfaction.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <Image
                  src={cs1}
                  alt="web3 android app development"
                  className="img-fluid h-100 object-fit-cover"
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
                  alt="Professional Ecommerce Website Builders in Singapore"
                  width={"100%"}
                />
              </Col>
              <Col lg={8}>
                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                <p className="text-black">
                  In conclusion, combining elegant design, smooth navigation,
                  mobile optimization, and AI-powered personalization ensures
                  that the 49thcoffee website delivers a world-class shopping
                  experience. This holistic approach strengthens customer
                  engagement, builds loyalty, and reflects the luxury image of
                  the brand.
                </p>
                <p>
                  These strategies pave the way for greater conversions,
                  improving brand perception while providing a seamless online
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

export default coffee;
