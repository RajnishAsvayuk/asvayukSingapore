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
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Generative AI Implementation",
    content:
      "Deploy custom LLMs and creative automation tailored to your brand’s unique voice."
  },
  {
    id: 2,
    title: "Smart Virtual Assistants",
    content:
      "Beyond basic bots—intelligent agents that handle complex customer journeys and internal queries."
  },
  {
    id: 3,
    title: "Scalable AI Product Engineering",
    content:
      "From MVP to enterprise-grade AI applications built on robust architecture."
  },
  {
    id: 4,
    title: "AI-Driven UI/UX Design",
    content:
      "Crafting intuitive interfaces that bridge the gap between human users and complex machine learning data."
  },
  {
    id: 5,
    title: "Enterprise AI Security",
    content:
      "Future-proof your data with advanced threat detection and secure AI governance frameworks."
  },
  {
    id: 6,
    title: "AHyper-Automation Solutions",
    content:
      "Minimise manual overhead with autonomous AI workflows for Singapore SMEs."
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
                    pageName={"AI Solutions"}
                    pageHeading={"Leading Artificial Intelligence Solutions for Singapore Enterprises"}
                    pagePara={
                        "Empower your business with next-generation automation and intelligent decision-making. As a premier AI development company in Singapore, we craft bespoke neural networks and agentic workflows that drive measurable growth and operational excellence."
                    }
                    pageImg={chatbotBanner}
                    pageAlt={"Website Designing Company in Singapore"}
                />



                <section className="container py-5">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="fw-bold">
          Explore Our  <span className="text-success">Full-Stack AI </span> Ecosystem
        </h2>
        <p className="text-muted col-lg-7">
          Accelerate growth with next-generation AI solutions designed for enterprise-scale impact.
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

            <Link href={"/contact-us"} className="btn green-btn px-4">
              Let’s Discuss →
            </Link>
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
                                Scale Smarter with Advanced Machine Learning Capabilities
                            </h2>
                            <p className="mt-3 pb-3">
                                Our Singapore-based technical team specialises in deploying high-performance AI automation for local businesses, ensuring your digital infrastructure is ready for the 2026 tech landscape.
                            </p>
                        </div>

                        <div>
                            <Row className="gy-4">
                                <Col lg={4} className="d-flex">
                                    <Magento_service_card
                                        cardImg={service1}
                                        altText="AI for Smart Retail & E-commerce"
                                        cardHeading="AI for Smart Retail & E-commerce"
                                        cardPara="Optimise the path-to-purchase with predictive product recommendations and 24/7 automated shopping assistance."
                                    />
                                </Col>

                                <Col lg={4} className="d-flex">
                                    <Magento_service_card
                                        cardImg={service2}
                                        altText="Bespoke Neural Network Development"
                                        cardHeading="Bespoke Neural Network Development"
                                        cardPara="Build proprietary algorithms designed to solve your specific industry challenges, from logistics to fintech."
                                    />
                                </Col>

                                <Col lg={4} className="d-flex">
                                    <Magento_service_card
                                        cardImg={service3}
                                        altText="Top AI Consultancy in Singapore "
                                        cardHeading="Top AI Consultancy in Singapore"
                                        cardPara="Expert-led digital transformation strategies that integrate seamlessly with your existing legacy systems."
                                    />
                                </Col>

                                <Col lg={4} className="d-flex">
                                    <Magento_service_card
                                        cardImg={service4}
                                        altText="Next-Gen Customer Support Hubs"
                                        cardHeading="Next-Gen Customer Support Hubs"
                                        cardPara="Reduce response times by 90% with multilingual support systems capable of handling complex Singlish and regional nuances."
                                    />
                                </Col>

                                <Col lg={4} className="d-flex">
                                    <Magento_service_card
                                        cardImg={service5}
                                        altText="Natural Language Processing (NLP)"
                                        cardHeading="Natural Language Processing (NLP)"
                                        cardPara="Extract deep insights from unstructured data through advanced sentiment analysis and context-aware processing."
                                    />
                                </Col>

                                <Col lg={4} className="d-flex">
                                    <Magento_service_card
                                        cardImg={service6}
                                        altText="Unified Platform Integration"
                                        cardHeading="Unified Platform Integration"
                                        cardPara="Connect your AI tools directly into your CRM, ERP, or custom dashboard for a single source of truth."
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
