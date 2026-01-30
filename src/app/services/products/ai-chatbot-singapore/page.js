'use client';
import BannerButton from '@/components/BannerBtn/BannerButton';
import Magento_service_card from '@/components/ui/Cards/Magento_service_card';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'react-bootstrap';


import service1 from '@/assets/Images/services1.webp'
import service2 from '@/assets/Images/services2.webp'
import service3 from '@/assets/Images/services3.webp'
import service4 from '@/assets/Images/services4.webp'
import service5 from '@/assets/Images/services5.webp'
import service6 from '@/assets/Images/services6.webp'

const page = () => {
    return (
        <>
            <section className="banner-en">
                <Container>
                    <Row className="align-items-center">
                        <div className="col-lg-6">
                            <div className="banner_textInfo-en">
                                {/* <Breadcrumb>
                            <BreadcrumbItem linkAs={Link} linkProps={{ href: "/" }}>Home</BreadcrumbItem>
                            <BreadcrumbItem linkAs={Link} linkProps={{ href: "#" }}>Services</BreadcrumbItem>
                            <BreadcrumbItem active>AI ChatBot Development</BreadcrumbItem>
                        </Breadcrumb> */}
                                <h1><Link href="https://maps.app.goo.gl/3DnK7WYuYJzXw8eK7">Best AI Solutions in Singapore</Link></h1>
                                <p className="py-3">
                                    Revolutionize your business communication with AI ChatBots. At Asvayuk Technologies, we build intelligent AI-driven ChatBots that automate customer interactions, streamline operations, and deliver seamless digital experiences for businesses across Singapore.
                                </p>
                                <BannerButton btnTitle='Get Free Consultation' url='/contact-us' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bannerImg d-flex justify-content-center align-items-center">
                                <img src={"/Images/Crm.webp"} alt="Best AI Solutions in Singapore" className='w-100 h-100 image-bounce' />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='bg-white py-5'>
                <Container>
                    <div className='pb-4'>
                        <h1 className='fw-bold'>
                            CUSTOM AI CHATBOT SOLUTIONS <span className="text-uppercase" style={{ color: '#2cbe9a' }}>By Asvayuk Technologies in Singapore</span>
                        </h1>
                        <p className="powered_php pt-3">
                            <strong>Asvayuk Technologies</strong> is a trusted AI ChatBot development company in Singapore. We design and deploy advanced ChatBots that enhance customer support, automate workflows, and offer personalized experiences to your clients.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="development_links">
                                <li><a href="#" title="AI ChatBot Features">AI ChatBot Features</a></li>
                                <li><a href="#" title="Custom AI Bot Development">Custom AI ChatBot Solutions</a></li>
                                <li><a href="#" title="AI ChatBot for Customer Support">AI Customer Support ChatBot</a></li>
                                <li><a href="#" title="AI ChatBot Integration">ChatBot System Integration</a></li>
                                <li><a href="#" title="AI Bot Analytics">AI ChatBot Analytics</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="development_links">
                                <li><a href="#" title="AI NLP for ChatBots">Natural Language Processing (NLP)</a></li>
                                <li><a href="#" title="AI ChatBot App Development">AI ChatBot Mobile App</a></li>
                                <li><a href="#" title="AI ChatBot for E-commerce">E-commerce ChatBot Integration</a></li>
                                <li><a href="#" title="AI ChatBot Security">Secure AI ChatBot Development</a></li>
                                <li><a href="#" title="ChatBot Automation">ChatBot Automation Services</a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='magento_service_card'>
                <Container>
                    <div className="card_heading text-center">
                        <h2>AI ChatBot Solutions We Provide in Singapore</h2>
                        <p>Asvayuk Technologies offers cutting-edge AI ChatBot solutions in Singapore, designed to improve business efficiency and customer interaction across industries such as retail, healthcare, finance, and education.</p>
                    </div>
                    <div className='magento_cards'>
                        <Row className='gy-4'>
                            <Col lg={4}>
                                <Magento_service_card cardImg={service1} altText='Best AI Solutions in Singapore' cardHeading="Custom AI ChatBot Development" cardPara="Develop fully customized AI ChatBots that fit your business goals, ensuring improved customer engagement and faster support." />
                            </Col>
                            <Col lg={4}>
                                <Magento_service_card cardImg={service2} altText='AI Chatbot for Businesses in Singapore' cardHeading="AI ChatBot for Customer Support" cardPara="Build 24/7 AI support ChatBots that handle customer queries efficiently and reduce human workload." />
                            </Col>
                            <Col lg={4}>
                                <Magento_service_card cardImg={service3} altText='NLP Chatbot Development Singapore' cardHeading="ChatBot with NLP Capabilities" cardPara="Empower your ChatBot with Natural Language Processing for smarter, human-like interactions." />
                            </Col>
                            <Col lg={4}>
                                <Magento_service_card cardImg={service4} altText='AI Chatbot for E-commerce Singapore' cardHeading="AI ChatBot for E-commerce" cardPara="Deliver personalized shopping experiences through AI-powered ChatBots for Singapore’s growing eCommerce market." />
                            </Col>
                            <Col lg={4}>
                                <Magento_service_card cardImg={service5} altText='AI Chatbot Integration Services Singapore' cardHeading="ChatBot Integration" cardPara="Integrate ChatBots with your CRM, website, or apps to enhance communication and operational efficiency." />
                            </Col>
                            <Col lg={4}>
                                <Magento_service_card cardImg={service6} altText='AI Chatbot Analytics Singapore' cardHeading="AI ChatBot Analytics" cardPara="Gain insights with ChatBot performance analytics to continuously improve engagement and conversion rates." />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default page