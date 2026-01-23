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
import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";



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
    return (
        <>
            <main>
                <HeroServices
                    home={"Home"}
                    pageParent={"Product"}
                    pageName={"AI ChatBot Development"}
                    pageHeading={"AI ChatBot Development in Singapore"}
                    pagePara={
                        "Transform customer engagement strategies with AI ChatBots. At Asvayuk Technologies, we specialize in developing AI-driven ChatBots that enhance user experience, automate support, and improve business efficiency, now in Singapore."
                    }
                    pageImg={chatbotBanner}
                    pageAlt={"Website Designing Company in Singapore"}
                />



                <Container className="py-5">
                    <Tab.Container defaultActiveKey="genai">
                        <Row>
                            {/* LEFT TABS */}
                            <h2 className="fw-bold mb-4">
                                Explore Our <span className="" style={{ color: "#2cbe9a" }}>Artificial Intelligence</span> Services
                            </h2>
                            <Col lg={5}>

                                <Nav variant="pills" className="flex-column ai-tabs">
                                    <Nav.Item>
                                        <Nav.Link className="py-3" eventKey="genai">01. Generative AI</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="py-3" eventKey="chatbot">
                                            02. Smart AI Assistants and Chatbot
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="py-3" eventKey="product">03. AI Product Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="py-3" eventKey="design">04. AI Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="py-3" eventKey="security">05. AI Security</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="py-3" eventKey="automation">06. Automation Solutions</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            {/* RIGHT CONTENT */}
                            <Col lg={7}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="genai">
                                        <ServiceCard
                                            title="Generative AI"
                                            description="Leverage state-of-the-art AI models to create high-quality content, innovative designs, and complex code. Whether you need text generation for blogs, realistic image synthesis, or automated code suggestions, generative AI can streamline creativity and production. Perfect for marketers, developers, and designers seeking new ways to enhance their work."
                                        />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="chatbot">
                                        <ServiceCard
                                            title="Smart AI Assistants & Chatbots"
                                            description="Transform your customer service with AI-powered virtual agents capable of handling inquiries, scheduling appointments, and providing personalized recommendations. These assistants can learn from past interactions to continuously improve, delivering faster and more accurate responses that enhance customer satisfaction while freeing up human agents for complex tasks."
                                        />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="product">
                                        <ServiceCard
                                            title="AI Product Development"
                                            description="From brainstorming to deployment, we help businesses build intelligent products that solve real-world problems. This includes integrating AI features like voice recognition, predictive analytics, and personalization into your apps or platforms, turning innovative ideas into market-ready solutions."
                                        />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="design">
                                        <ServiceCard
                                            title="AI Design"
                                            description="Design smarter with AI-driven insights. Our AI design solutions analyze user behavior and preferences to suggest layouts, color palettes, and interface elements that enhance usability and engagement. This streamlines the design process, reducing guesswork and creating more compelling digital experiences."
                                        />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="security">
                                        <ServiceCard
                                            title="AI Security"
                                            description="Protect your business from evolving cyber threats with AI-powered security systems. These systems use machine learning to detect anomalies, flag suspicious activity, and respond to real-time attacks. By continuously learning from new threats, AI security can outpace traditional methods, keeping your data and infrastructure safe."
                                        />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="automation">
                                        <ServiceCard
                                            title="Automation Solutions"
                                            description="Boost efficiency with intelligent automation tools. Whether automating invoice processing, streamlining supply chains, or accelerating decision-making, AI-powered automation reduces human error and speeds up operations. This frees your team to focus on strategic initiatives rather than repetitive manual tasks."
                                        />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>

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
                                        altText="AI Chatbot Development in Singapore "
                                        cardHeading="AI Chatbot Development in Singapore "
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


                <section className="ai-models-section">
                    <Container>
                        {/* Heading */}
                        <div className="text-center mb-5">
                            <h2 className="fw-bold text-white">
                                Advanced AI Models We Leverage
                            </h2>
                            <p className="text-muted mt-3">
                                Unlock new possibilities with state-of-the-art AI models that power our solutions.
                            </p>
                        </div>

                        {/* Grid */}
                        <Row className="ai-models-grid">
                            {models.map((item, index) => (
                                <Col
                                    key={index}
                                    lg={3}
                                    md={6}
                                    className="ai-model-card"
                                >
                                    <h5 className="fw-bold text-white mb-3">{item.title}</h5>
                                    <p className="text-light">{item.desc}</p>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <Industry />
                <ServicesCaseStudy />
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
