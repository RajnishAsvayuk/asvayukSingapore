'use client'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { FaArrowRightLong } from 'react-icons/fa6'
import CoffeeLogo from '@/assets/Images/49thcoffee_logo.webp'
import caseStu4 from '@/assets/Images/casestudy/caseStu4.webp'
import moonLight from '@/assets/Images/moonlight_logo.webp'
import caseStu2 from '@/assets/Images/casestudy/caseStu2.webp'
import caseStu3 from '@/assets/Images/casestudy/caseStu3.webp'
import kriLogo from '@/assets/Images/kri_logo.webp'
import caseStu5 from '@/assets/Images/casestudy/caseStu5.webp'
import caseStu6 from '@/assets/Images/casestudy/caseStu6.webp'
import service1 from '@/assets/Images/services1.webp'
import service2 from '@/assets/Images/services2.webp'
import service3 from '@/assets/Images/services3.webp'
import service4 from '@/assets/Images/services4.webp'
import service5 from '@/assets/Images/services5.webp'
import service6 from '@/assets/Images/services6.webp'
import Link from 'next/link'
import BannerButton from '@/components/BannerBtn/BannerButton'
import Experience from '@/components/Experience/Experience'
import Magento_service_card from '@/components/ui/Cards/Magento_service_card'

const CRM_ERP = () => {
    return (
        <>
             
            <main>
                <section className="banner-en">
                    <Container>
                        <Row className="align-items-center py-0 py-lg-4 py-md-4">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en">
                                    {/* <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Products</Breadcrumb.Item>
                                        <Breadcrumb.Item active>CRM and ERP Solutions</Breadcrumb.Item>
                                    </Breadcrumb> */}
                                    <h1><Link href="https://maps.app.goo.gl/xXHbE7dEh3PsfSfM7">CRM and ERP Solutions in Singapore</Link></h1>
                                    <p className="py-3">
                                        Enhance your business performance in Singapore with Asvayuk Technologies’ customized CRM and ERP systems. Our integrated solutions simplify business processes, improve data visibility, and help organizations achieve operational excellence.
                                    </p>
                                    <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bannerImg d-flex justify-content-center align-items-center">
                                    <img src={"/Images/Crm.webp"} alt="CRM and ERP Solutions in Singapore" className='w-100 h-100' />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className='bg-white py-5'>
                    <Container>
                        <div className='pb-4'>
                            <h1 className='fw-bold'>
                                Smart CRM and ERP Solutions <span style={{ color: '#2cbe9a' }}>for Singapore Businesses</span>
                            </h1>
                            <p className="powered_php pt-3">
                                <strong>Asvayuk Technologies</strong> provides tailored CRM and ERP systems in Singapore that integrate customer management, accounting, operations, and analytics into one powerful platform — empowering organizations with automation and real-time insights.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="development_links">
                                    <li><a href="#" title="CRM and ERP Features">CRM and ERP Features</a></li>
                                    <li><a href="#" title="ERP System Development">ERP Development</a></li>
                                    <li><a href="#" title="CRM Integration">CRM Integration</a></li>
                                    <li><a href="#" title="ERP for Business Automation">Business Process Automation</a></li>
                                    <li><a href="#" title="ERP Analytics">ERP Data Analytics</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="development_links">
                                    <li><a href="#" title="CRM for Sales Management">CRM for Sales Automation</a></li>
                                    <li><a href="#" title="Mobile CRM Solutions">Mobile CRM Solutions</a></li>
                                    <li><a href="#" title="ERP for Inventory Management">ERP for Inventory Control</a></li>
                                    <li><a href="#" title="CRM Security">Secure CRM Systems</a></li>
                                    <li><a href="#" title="ERP Customization">Custom ERP Development</a></li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className='magento_service_card'>
                    <Container>
                        <div className="card_heading text-center">
                            <h2>CRM and ERP Solutions We Offer in Singapore</h2>
                            <p>We deliver scalable, industry-specific CRM and ERP solutions designed to streamline workflows, reduce costs, and boost efficiency for businesses across Singapore.</p>
                        </div>
                        <div className='magento_cards'>
                            <Row className='gy-4'>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service1} altText='CRM ERP Development Company in Singapore' cardHeading="CRM Development" cardPara="Build a customer-centric CRM system tailored to your Singapore-based business for sales automation and better engagement." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service2} altText='ERP Software Development in Singapore' cardHeading="ERP for Business Automation" cardPara="Automate key processes — finance, HR, supply chain, and operations — with ERP software tailored for Singapore enterprises." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service3} altText='CRM ERP Integration Solutions Singapore' cardHeading="CRM and ERP Integration" cardPara="Unify data across departments by integrating your CRM and ERP systems, ensuring accuracy and operational synergy." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service4} altText='Mobile CRM Solutions Singapore' cardHeading="Mobile CRM Solutions" cardPara="Empower teams with mobile CRM apps to manage customer data and sales pipelines on the go." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service5} altText='ERP Inventory Management Singapore' cardHeading="ERP for Inventory Management" cardPara="Simplify inventory control and reduce overheads using ERP modules customized for Singapore logistics operations." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service6} altText='ERP Data Analytics Singapore' cardHeading="ERP Data Analytics" cardPara="Unlock real-time business insights with ERP-powered analytics dashboards designed for Singapore businesses." />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                <section className='bg-white py-5'>
                    <Container>
                        <div className='pb-4'>
                            <h1 className='fw-bold'>
                                Benefits of <span style={{ color: '#2cbe9a' }}>CRM and ERP Solutions in Singapore</span>
                            </h1>
                            <p className="powered_php pt-3">
                                Our CRM and ERP solutions enable Singaporean enterprises to automate workflows, gain actionable insights, and manage resources effectively — leading to higher efficiency and customer satisfaction.
                            </p>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <ul className="development_links">
                                    <li>CRM Development & Integration</li>
                                    <li>ERP for Operational Efficiency</li>
                                    <li>Sales and Marketing Automation</li>
                                    <li>Business Process Optimization</li>
                                    <li>Secure and Scalable Architecture</li>
                                </ul>
                            </Col>
                            <Col lg={6}>
                                <ul className="development_links">
                                    <li>Cloud-based ERP Systems</li>
                                    <li>CRM for Team Collaboration</li>
                                    <li>Data Analytics and Reporting</li>
                                    <li>Mobile Access</li>
                                    <li>Post-Implementation Support</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="supercharge-section">
                    <div className="container">
                        <div className="choice pb-5">
                            <h2 className="fw-semibold">Digitally Transform Your Singapore Business with Asvayuk’s CRM and ERP Solutions</h2>
                            <p className="pt-2">Asvayuk Technologies empowers Singapore businesses to automate operations, enhance customer relationships, and grow sustainably with advanced CRM and ERP solutions.</p>
                            <ul>
                                <li><strong>Localized Solutions:</strong> Designed to meet the operational and compliance needs of Singaporean companies.</li>
                                <li><strong>Data-Driven Insights:</strong> Real-time dashboards that empower decision-making.</li>
                                <li><strong>Scalability:</strong> Systems that grow with your business.</li>
                                <li><strong>Security First:</strong> Built with enterprise-grade data protection.</li>
                                <li><strong>Dedicated Support:</strong> Continuous post-launch assistance and updates.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Experience
                    expTitle='Why Choose Asvayuk for CRM and ERP Solutions in Singapore?'
                    point1='Local Expertise'
                    pointPara1='Our Singapore-focused CRM and ERP services address the unique business, regulatory, and market requirements of the region.'
                    point2='Tailored Development'
                    pointPara2='We customize CRM and ERP modules to fit your business workflows and growth objectives.'
                    point3='Security & Compliance'
                    pointPara3='We adhere to Singapore’s data protection and cybersecurity standards for all solutions.'
                    point4='End-to-End Support'
                    pointPara4='From consultation to maintenance, we provide complete lifecycle support to your enterprise.'
                    altTags={{
                        group1: "CRM ERP Development Company in Singapore",
                        group2: "CRM and ERP Solutions in Singapore",
                        group3: "ERP Software Development Singapore",
                        group4: "AI-Powered CRM & ERP Solutions Singapore",
                        mockups: "Enterprise Resource Planning Solutions Singapore",
                        whiteLogo: "Custom CRM Software Development Singapore"
                    }}
                />
            </main>
        </>
    )
}

export default CRM_ERP
