"use client";
import React from "react";
import Image from "next/image";
import gameBanner from "@/assets/Images/game24.png";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Card, Col, Container, Row } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Experience from "@/components/Experience/Experience";

const gameDev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Product"}
          pageName={"24 Games with Asvayuk"}
          pageHeading={
            "Game Development Solutions by Asvayuk Technologies in Singapore "
          }
          pagePara={
            "Asvayuk Technologies specializes in game development services in Singapore, offering a range of innovative 24 games. Our solutions are designed to enhance user engagement and provide scalable solutions for businesses looking to integrate gaming elements into their strategy."
          }
          pageImg={gameBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                EXCEPTIONAL GAME DEVELOPMENT SERVICES{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN Singapore
                </span>
              </h1>
              <p className="powered_php pt-3">
                <strong>Asvayuk Technologies</strong> is a leading game
                development company in Singapore. We specialize in developing 24
                games that cater to diverse business needs, helping businesses
                improve engagement and reach new audiences with immersive gaming
                experiences.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Game Development Company Singapore">
                      Game Development Company
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom Game Solutions Singapore">
                      Custom Game Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Mobile Game Development">
                      Mobile Game Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="24 Games Development">
                      24 Games Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Game App Development Singapore">
                      Game App Development
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Game Monetization Solutions">
                      Game Monetization Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AR VR Game Development">
                      AR VR Game Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cross-Platform Game Development">
                      Cross-Platform Game Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Game UI/UX Design Singapore">
                      Game UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Interactive Games for Businesses">
                      Interactive Games for Businesses
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2 className="px-5 mx-5">
                Our 24 Games Development Services in Singapore
              </h2>
              <p className="mt-3 pb-3">
                Asvayuk Technologies offers a wide variety of custom 24 games
                designed to engage users and enhance business growth. From
                mobile games to cross-platform development, our services are
                tailored to meet the needs of businesses in Singapore.
              </p>
            </div>

            <div>
              <Row className="gy-4">
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service1}
                    altText="Custom 24 Games Development in Singapore"
                    cardHeading="Custom 24 Games Development"
                    cardPara="We develop custom 24 games tailored to your business needs, enhancing user engagement and interaction."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service2}
                    altText="Mobile Game Development in Singapore"
                    cardHeading="Mobile Game Development"
                    cardPara="High-quality mobile game development services designed for immersive multi-platform user experiences."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service3}
                    altText="Cross-Platform Game Development in Singapore"
                    cardHeading="Cross-Platform Game Development"
                    cardPara="Develop games that run smoothly across all devices, ensuring maximum reach and engagement."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="AR VR Game Development in Singapore"
                    cardHeading="AR/VR Game Development"
                    cardPara="Integrate AR and VR technologies to build immersive gaming experiences that captivate players."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="Game Monetization Services in Singapore"
                    cardHeading="Game Monetization"
                    cardPara="Implement effective monetization strategies including ads, in-app purchases, subscriptions, and more."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="Game UI UX Design in Singapore"
                    cardHeading="Game UI/UX Design"
                    cardPara="We create visually appealing and user-friendly interfaces that elevate the gaming experience."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                ADVANTAGES OF CUSTOM GAME DEVELOPMENT{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  WITH ASVAYUK TECHNOLOGIES
                </span>
              </h1>
              <p className="powered_php pt-3">
                Our custom 24 games offer multiple benefits for businesses in
                Singapore, including enhanced customer engagement, brand
                visibility, and innovative marketing strategies. Trust Asvayuk
                Technologies for all your game development needs.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Engaging Game Development">
                      Engaging Game Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cross-Platform Solutions">
                      Cross-Platform Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Increased User Retention">
                      Increased User Retention
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom Gaming Features">
                      Custom Gaming Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Brand Building with Games">
                      Brand Building with Games
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="AR/VR Integration">
                      AR/VR Integration
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Monetization Features">
                      Monetization Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Advanced Game Analytics">
                      Advanced Game Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom Game Themes">
                      Custom Game Themes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Mobile-Optimized Games">
                      Mobile-Optimized Games
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="supercharge-section">
          <div className="container">
            <div className="row">
              <div className="choice pb-5">
                <h2 className="fw-semibold">
                  Supercharge Your Business with Custom 24 Games from Asvayuk
                  Technologies in Singapore
                </h2>
                <p className="pt-2">
                  Leverage the power of custom 24 games to boost user
                  engagement, enhance brand visibility, and increase revenue.
                  Asvayuk Technologies offers the best game development services
                  to help businesses succeed in the competitive market.
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">Tailored Game Solutions:</span>{" "}
                    Our custom 24 game development solutions are designed
                    specifically to fit your business model and marketing
                    strategy.
                  </li>
                  <li>
                    <span className="fw-bold h6">Scalable and Flexible:</span>{" "}
                    As your business grows, our 24 games solutions can scale to
                    meet increased demands, offering a flexible approach to game
                    development.
                  </li>
                  <li>
                    <span className="fw-bold h6">
                      Enhanced User Engagement:
                    </span>{" "}
                    Our games are designed to maximize user engagement,
                    providing interactive experiences that foster customer
                    loyalty.
                  </li>
                  <li>
                    <span className="fw-bold h6">Robust Security:</span> Asvayuk
                    Technologies ensures that all our game development projects
                    include advanced security measures to protect user data and
                    game integrity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Asvayuk for Game Development in Singapore?"
          point1="Expertise in Game Development"
          pointPara1="Our team specializes in creating custom 24 games for businesses in Singapore."
          point2="Focus on Quality & Innovation"
          pointPara2="We ensure top-quality, innovative solutions for every game development project."
          point3="Tailored Solutions"
          pointPara3="We deliver custom gaming solutions to meet the unique needs of businesses in the region."
          point4="Clear Communication"
          pointPara4="We maintain transparent communication with clients throughout the development process."
          altTags={{
            group1: "Top Game Development Company in Singapore",
            group2: "Best Mobile Game Developers in Singapore",
            group3: "Unity & Unreal Engine Game Development in Singapore",
            group4: "Multiplayer Game Development Company in Singapore",
            mockups: "Cross-Platform Game Development by Asvayuk Technologies",
            whiteLogo: "Custom Game Development Services in Singapore",
          }}
        />

        <ServicesCaseStudy />
        <Industry />
      </main>
    </>
  );
};

export default gameDev;
