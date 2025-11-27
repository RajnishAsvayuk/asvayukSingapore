import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import moonLight from "/public/Images/moonlight_logo.webp";
import optimization from "/public/Images/optimization.png";
import technicalseo from "/public/Images/technicalseo.png";
import backlink from "/public/Images/backlink.png";
import content from "/public/Images/content.png";
import cs1 from "/public/Images/cs1.png";
import conclusion from "/public/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const monnlight = () => {
  return (
    <>
      <main>
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#e4e5e0" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={moonLight}
                      alt="Affordable React Native developers Singapore"
                      style={{ mixBlendMode: "darken" }}
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2 className="fw-semibold lh-base fs-1">
                      IT TAKES A CREATIVE MIND TO BE IN THE FASHION BUSINESS.
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
                    src={AppImages.casestudySliderImg.caseStu2}
                    alt="blockchain development experts Singapore"
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
                <h1 className="fw-bold mb-3 ">Moonlight Concept</h1>
                <p>
                  Moonlight Concept is a luxury Qatari fashion brand
                  specializing in women’s apparel, with an emphasis on
                  individuality and high-quality craftsmanship. It offers a
                  range of collections that blend elegance and innovation,
                  including haute couture, abayas, and seasonal collections like
                  “Spectrum of Hues” and “Morrisian Whispers.” Designs focus on
                  unique materials, intricate details, and rich color palettes,
                  catering to women seeking both modern and timeless styles. The
                  brand embodies refined sophistication, celebrating cultural
                  heritage and artistry.
                </p>
              </Col>
              <Col lg="6" md="12" xm="12" className="">
                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                  <div className="head">
                    <h4 className="titletext text-white mb-3 border-bottom pb-2">
                      Problem Statement
                    </h4>
                  </div>
                  <div className="content ">
                    <p className="text-white">
                      Moonlight Concept&#39;s website UI (User Interface) is
                      clean and modern, designed to reflect the elegance of the
                      brand.
                    </p>
                    <p className="text-white">
                      The homepage features a minimalistic layout with
                      high-quality images of their collections, making
                      navigation intuitive and visually engaging. The UX (User
                      Experience) emphasizes ease of access, with clear menu
                      options guiding visitors through collections, lookbooks,
                      and purchasing options. Smooth transitions and a
                      mobile-friendly design ensure an effortless shopping
                      experience, highlighting the brand’s luxurious and
                      culturally rich aesthetic.
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
                  The project goals for the Shopify-based website focus on
                  providing a seamless user experience, enhancing brand
                  aesthetics, and increasing conversions. The primary goals
                  include creating a visually appealing layout that reflects the
                  brand’s luxury image, ensuring smooth and easy navigation for
                  users, optimizing the site for mobile responsiveness, and
                  incorporating personalization features through AI to boost
                  customer engagement.
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
              The final results of the Shopify-based project are a visually
              stunning, user-friendly eCommerce website with a luxury feel. The
              site features a clean, minimal design, optimized for mobile
              devices, and includes AI-powered personalized recommendations.
              Customers experience smooth navigation, with well-integrated brand
              storytelling that fosters emotional engagement. The combination of
              these elements ensures a seamless shopping experience, increases
              conversions, and strengthens customer loyalty, making the website
              a valuable asset for Moonlight Concept&#39;s online presence.
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
                  alt="Magento Web development provider in Singapore"
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
                  alt="Shopify website design company in Singapore"
                  width={"100%"}
                />
              </Col>
              <Col lg={8}>
                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                <p className="text-black">
                  In conclusion, the integration of elegant and intuitive
                  design, smooth navigation, mobile optimization, enhanced
                  storytelling, and personalization with AI through Shopify
                  offers a seamless and luxurious shopping experience for users.
                  Each element not only ensures that the aesthetics of the brand
                  are maintained but also enhances user satisfaction, ultimately
                  fostering emotional connections with the customers.
                </p>
                <p>
                  {" "}
                  With these strategies, Moonlight Concept can create an
                  engaging online presence that resonates with its target
                  audience, increasing both conversions and customer loyalty
                  while maintaining its status as a high-end luxury brand.
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

export default monnlight;
