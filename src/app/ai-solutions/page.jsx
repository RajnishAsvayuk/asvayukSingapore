"use client";
import React, { useState } from "react";
import Image from "next/image";
import chatbotBanner from "@/assets/Images/ai-solutions-2.png";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import AdvancedAIModels from "@/components/AdvancedAIModels";

const services = [
  {
    id: 1,
    title: "Generative AI",
    content:
      "Leverage generative models to create text, images, code, and intelligent automation tailored to your business needs."
  },
  {
    id: 2,
    title: "AI Assistants & Chatbots",
    content:
      "Deploy intelligent conversational AI that understands context, learns from interactions, and provides personalized experiences at scale."
  },
  {
    id: 3,
    title: "AI Product Development",
    content:
      "Build scalable AI-powered products from concept to deployment with enterprise-grade architecture."
  },
  {
    id: 4,
    title: "AI Design",
    content:
      "Enhance user experiences using AI-driven UI/UX design, personalization, and intelligent interfaces."
  },
  {
    id: 5,
    title: "AI Security",
    content:
      "Protect AI systems with advanced threat detection, compliance, and data governance strategies."
  },
  {
    id: 6,
    title: "Automation Solutions",
    content:
      "Streamline workflows and operations using intelligent automation and AI-driven decision engines."
  }
];



const models = [
    {
        title: 'GPT-4',
        desc: 'A powerful language model for generating human-like text and content.',
    },
    {
        title: 'DALL·E',
        desc: 'Transform ideas into stunning visuals with AI-powered image generation.',
    },
    {
        title: 'BERT',
        desc: 'Enhance text understanding and contextual analysis.',
    },
    {
        title: 'Stable Diffusion',
        desc: 'Create high-quality, detailed images from text prompts.',
    },
    {
        title: 'YOLO',
        desc: 'Real-time object detection and tracking.',
    },
    {
        title: 'Whisper',
        desc: 'Automatic speech recognition for accurate transcription.',
    },
    {
        title: 'CLIP',
        desc: 'Bridges the gap between text and images for multimodal applications.',
    },
    {
        title: 'ResNet',
        desc: 'Power image classification with deep convolutional networks.',
    },
    {
        title: 'Transformer Models',
        desc: 'Drive various NLP and sequence-processing tasks.',
    },
    {
        title: 'T5',
        desc: 'Handle diverse text-based tasks with a unified approach.',
    },
];



const aiChatbot = () => {

    
 const [active, setActive] = useState(2);

  const activeService = services.find(s => s.id === active);

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



                <section className="container py-5">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="fw-bold">
          Explore Our <span className="text-success">Artificial Intelligence</span> Services
        </h2>
        <p className="text-muted col-lg-7">
          Transform your business with cutting-edge AI solutions designed for enterprise scale and innovation.
        </p>
      </div>

      <div className="row g-5">
        {/* Left Tabs */}
        <div className="col-lg-4">
          <ul className="list-unstyled ai-tabs">
            {services.map((service) => (
              <li
                key={service.id}
                className={`ai-tab-item ${active === service.id ? "active" : ""}`}
                onClick={() => setActive(service.id)}
              >
                <span className="tab-number">
                  {String(service.id).padStart(2, "0")}
                </span>
                <span className="tab-title">{service.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="col-lg-8">
          <div key={active} className="ai-content-card fade-up">
            <span className="badge bg-light text-success mb-3">
              Service {String(active).padStart(2, "0")}
            </span>

            <h3 className="fw-bold mb-3">{activeService.title}</h3>

            <p className="text-muted mb-4">
              {activeService.content}
            </p>

            <button className="btn btn-success px-4">
              Let’s Discuss →
            </button>
          </div>
        </div>
      </div>
    </section>


                {/* <section className="bg-white py-5">
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
                </section> */}




                <section className="magento_service_card">
                    <Container>
                        <div className="card_heading text-center">
                            <h2 className="px-5 mx-5">
                                Boost Your Business Growth with Our Extensive
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

<AdvancedAIModels/>

               

                <Industry />
                {/* <ServicesCaseStudy /> */}
            </main>
        </>
    );
};


/* Reusable Card */
function ServiceCard({ title, description }) {
    return (
        <div className="ai-card text-white">
            <h3 className="fw-bold mb-3">{title}</h3>
            <p className="mb-4 text-white">{description}</p>
            <Button variant="light" className="fw-semibold">
                Let’s Discuss 💬
            </Button>
        </div>
    );
}

export default aiChatbot;
