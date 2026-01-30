"use client";
import React from "react";
import Image from "next/image";
import chatbotBanner from "@/assets/Images/aiChatbot.webp";
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

const aiChatbot = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Product"}
          pageName={"AI ChatBot Development"}
          pageHeading={"Best AI Solutions in Singapore"}
          pagePara={
            "Transform customer engagement strategies with AI ChatBots. At Asvayuk Technologies, we specialize in developing AI-driven ChatBots that enhance user experience, automate support, and improve business efficiency, now in Singapore."
          }
          pageImg={chatbotBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                CUSTOM AI CHATBOT SOLUTIONS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  By Asvayuk Technologies in Singapore{" "}
                </span>
              </h1>
              <p className="powered_php pt-3">
                <strong>Asvayuk Technologies</strong> is a leading AI ChatBot
                development company offering custom solutions for businesses in
                Singapore. Our AI-powered ChatBots provide personalized
                responses, helping businesses improve engagement and streamline
                operations.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="AI ChatBot Features">
                      AI ChatBot Features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom AI Bot Development">
                      Custom AI ChatBot Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI ChatBot for Customer Support">
                      AI Customer Support ChatBot
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI ChatBot Integration">
                      ChatBot System Integration
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI Bot Analytics">
                      AI ChatBot Analytics
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="AI NLP for ChatBots">
                      Natural Language Processing (NLP)
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI ChatBot App Development">
                      AI ChatBot Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI ChatBot for E-commerce">
                      E-commerce ChatBot Integration
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI ChatBot Security">
                      Secure AI ChatBot Development
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ChatBot Automation">
                      ChatBot Automation Services
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
                AI ChatBot Solutions We Provide in Singapore
              </h2>
              <p className="mt-3 pb-3">
                Our team at Asvayuk Technologies specializes in creating
                customized AI ChatBots to enhance business performance in
                Singapore, offering services from automated support to
                e-commerce integration.
              </p>
            </div>

            <div>
              <Row className="gy-4">
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service1}
                    altText="AI Chatbot for E-commerce Websites"
                    cardHeading="AI Chatbot for E-commerce Websites"
                    cardPara="Improve the shopping experience with AI-powered ChatBots that assist customers, answer product queries, and process orders."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service2}
                    altText="Custom AI ChatBot Development"
                    cardHeading="Custom AI ChatBot Development"
                    cardPara="Create a fully customized AI ChatBot that suits your business requirements, improving customer service and engagement."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service3}
                    altText="Best AI Solutions in Singapore "
                    cardHeading="Best AI Solutions in Singapore "
                    cardPara="We develop robust AI ChatBots for businesses looking to offer automated support, intelligent interaction, and improved workflow efficiency."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="AI ChatBot for Customer Support"
                    cardHeading="AI ChatBot for Customer Support"
                    cardPara="Build an AI-driven support system capable of answering customer inquiries 24/7, reducing wait times and enhancing satisfaction."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="ChatBot with NLP Capabilities"
                    cardHeading="ChatBot with NLP Capabilities"
                    cardPara="Integrate natural language processing into your ChatBot for a more intelligent and human-like conversation experience."
                  />
                </Col>

                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="ChatBot Integration Services"
                    cardHeading="ChatBot Integration"
                    cardPara="Seamlessly integrate ChatBots into your existing platforms like CRM, websites, and mobile apps for enhanced user experience."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <Industry />
        <ServicesCaseStudy />
      </main>
    </>
  );
};

export default aiChatbot;
