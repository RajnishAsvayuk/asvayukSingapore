import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "@/assets/Images/caseLogo1.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/cs2.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const quadlock = () => {
  return (
    <>
      <main>
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#dae7e1" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={moonLight}
                      alt="Digital Marketing Companies in Singapore"
                      style={{ mixBlendMode: "darken" }}
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
                      EVERY DAY, EVERY ADVENTURE.
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
                    src={AppImages.casestudySliderImg.caseStu}
                    alt="Crypto Token Development Company in Singapore"
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
                <h1 className="fw-bold mb-3 ">Quad Lock</h1>
                <p>
                  Whether you're cycling, motorcycling, or hiking, Quad Lock
                  offers the most reliable and secure phone mount system on the
                  market. Our range of rugged, mountable cases and accessories
                  ensures your phone stays in place, even in the most extreme
                  conditions. Experience hands-free convenience, no matter where
                  the adventure takes you.
                </p>
                <p>
                  Quad Lock cases are designed not only to protect your phone
                  from the elements but to integrate seamlessly with our diverse
                  mounting solutions. Built with military-grade durability, our
                  cases shield your device from drops and impacts, so you can
                  focus on what matters—your next adventure.
                </p>
              </Col>
              <Col lg="6" md="12" xm="12" className="">
                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                  <div className="head">
                    <h4 className="titletext text-white mb-3 border-bottom pb-2">
                      Statement
                    </h4>
                  </div>
                  <div className="content ">
                    <p className="text-white">
                      With a Quad Lock system, every mount works with your
                      phone, no matter what you're using it for. Whether it's
                      for your bike, car, or gym, our mounting solutions
                      integrate easily, allowing for a smooth, secure
                      experience. Stay connected while keeping your hands free
                      for the journey ahead.
                    </p>
                    <p className="text-white">
                      We believe in listening to our customers. Every Quad Lock
                      product is a result of customer feedback and real-world
                      testing. We understand the unique needs of our diverse
                      customer base, and we design our products to meet the
                      demands of active users like you. Thank you for making us
                      a part of your journey.
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
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={optimization}
                      alt="Shopify website development Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    User-Centric Design
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Use Shopify’s customizable themes to develop a visually
                    aligned, minimalistic layout that showcases collections
                    prominently, ensuring an elegant and intuitive design that
                    aligns with the brand’s luxury aesthetic.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={backlink}
                      alt="Digital marketing services in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">Smooth Navigation</h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Implement sticky menus, well-placed filters, and consistent
                    calls-to-action to guide users effortlessly from product
                    discovery to purchase, ensuring a streamlined and accessible
                    shopping experience.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image
                      src={technicalseo}
                      alt="Digital Marketing Companies in Singapore"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Mobile Optimization
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Leverage Shopify’s responsive design templates to ensure a
                    flawless shopping experience across all devices, catering to
                    mobile users and offering a seamless on-the-go experience.
                  </p>
                </div>
              </div>

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
                    Personalization & AI Integration
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Integrate Shopify’s AI-driven recommendations and smart
                    search functionality to improve product discovery, providing
                    personalized experiences that increase user engagement and
                    conversions.
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
                  Quad Lock's project goals focus on delivering a superior
                  customer experience by creating an intuitive and engaging
                  platform. The aim is to provide seamless navigation, easy
                  product discovery, and smooth checkout processes. Building
                  customer trust is a priority, with an emphasis on showcasing
                  the durability and reliability of the products. Expanding
                  brand awareness and increasing user engagement through
                  customer feedback, testimonials, and interactive features are
                  key objectives. Ultimately, Quad Lock strives to become the
                  trusted mobile accessory brand for active, on-the-go users.
                </p>
                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0">
                    <div className="pr_goals">
                      <span className="mb-0">User-Centric Design</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0">
                    <div className="pr_goals">
                      <span className="mb-0">Mobile Optimization</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0">
                    <div className="pr_goals">
                      <span className="mb-0">Personalization</span>
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
                    <p className="mongo-text">JS</p>
                  </div>
                  <div className="express">
                    <p className="express-text">CSS</p>
                  </div>
                  <div className="react">
                    <p className="react-text">Html</p>
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
              Results after Creating This Site
            </h2>
            <p>
              The final outcome of the Shopify-based project is a polished,
              user-centric eCommerce website that conveys Quad Lock's premium
              branding. With a modern, minimal design, the site delivers a
              seamless, mobile-optimized experience that engages customers
              through intuitive navigation and AI-driven personalized
              recommendations. The integration of brand storytelling strengthens
              emotional connections, enhancing user loyalty and driving
              conversions, making the website a key asset in Quad Lock’s digital
              strategy.
            </p>
            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li>
                    <p>
                      <strong>Elegant and Intuitive Design:</strong> A clean,
                      minimal interface that showcases products through
                      high-quality visuals, enhancing the brand’s aesthetic and
                      offering an inviting layout.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Smooth Navigation and Accessibility:</strong>{" "}
                      Streamlined menus, well-placed filters, and consistent
                      calls-to-action guide users effortlessly from product
                      discovery to purchase.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Mobile-Optimized Experience:</strong> Responsive
                      designs ensure a flawless shopping experience on all
                      devices, catering to the needs of on-the-go customers.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Enhanced Storytelling:</strong> Integrates brand
                      narratives with product details, enhancing the luxury feel
                      and creating emotional engagement with customers.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Personalization and AI Integration:</strong>{" "}
                      Personalized recommendations and smart search
                      functionalities improve product discovery, catering to
                      individual user preferences and increasing conversions.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <Image
                  src={cs1}
                  alt="high rank seo website creator in Singapore"
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
                  alt="professional Software Consultants in Singapore"
                  width={356}
                />
              </Col>
              <Col lg={8}>
                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                <p className="text-black">
                  In conclusion, the combination of elegant design, smooth
                  navigation, mobile responsiveness, and AI-powered
                  personalization offers a sophisticated shopping experience for
                  Quad Lock’s customers. These strategies not only maintain the
                  brand’s luxury feel but also foster customer loyalty,
                  positioning Quad Lock for continued success in the competitive
                  online market.
                </p>
                <p>
                  With these strategies, Quad Lock can create an engaging online
                  presence that resonates with its target audience, increasing
                  both conversions and customer loyalty while maintaining its
                  status as a high-end luxury brand.
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

export default quadlock;
