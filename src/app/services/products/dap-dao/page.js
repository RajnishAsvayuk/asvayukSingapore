'use client'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'

import Ar_Vr from '@/assets/Images/Crm.webp'
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

const page = () => {
    return (
        <>

            <section className="banner-en">
                <Container>
                    <Row className="align-items-center py-0 py-lg-4 py-md-4">
                        <div className="col-lg-6">
                            <div className="banner_textInfo-en">
                                {/* <Breadcrumb>
                                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Solutions</Breadcrumb.Item>
                                    <Breadcrumb.Item active>DAP and DAO Solutions</Breadcrumb.Item>
                                </Breadcrumb> */}
                                <h1><Link href="https://maps.app.goo.gl/3N8TfGgV2yAXQXvL9">DAP and DAO Solutions in Singapore</Link></h1>
                                <p className="py-3">
                                    Transform your business in Singapore with Asvayuk Technologies' DAP and DAO solutions. We specialize in developing decentralized applications and autonomous organizations that drive transparency, security, and independence.
                                </p>
                                <BannerButton btnTitle='Get a Free Consultation' url='/contact-us' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bannerImg d-flex justify-content-center align-items-center">
                                <img src={Ar_Vr} alt="DAP and DAO Solutions in Singapore" className='w-100 h-100' />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='bg-white py-5'>
                <Container>
                    <div className='pb-4'>
                        <h1 className='fw-bold'>
                            Custom DAP and DAO Solutions in Singapore <span className="text-uppercase" style={{ color: '#2cbe9a' }}>By Asvayuk Technologies</span>
                        </h1>
                        <p className="powered_php pt-3">
                            <strong>Asvayuk Technologies</strong> provides advanced decentralized application (DAP) and decentralized autonomous organization (DAO) development in Singapore. We help businesses leverage blockchain to enhance transparency, automate governance, and ensure operational integrity.
                        </p>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <ul className="development_links">
                                <li><a href="#" title="DAP Development">Decentralized Application (DAP) Development</a></li>
                                <li><a href="#" title="DAO System Design">DAO System Design</a></li>
                                <li><a href="#" title="Blockchain Integration">Blockchain Integration</a></li>
                                <li><a href="#" title="Smart Contract Development">Smart Contract Development</a></li>
                                <li><a href="#" title="DAO Governance Systems">DAO Governance Systems</a></li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <ul className="development_links">
                                <li><a href="#" title="Secure DAP Solutions">Secure DAP Solutions</a></li>
                                <li><a href="#" title="Customized DAO Models">Customized DAO Models</a></li>
                                <li><a href="#" title="Smart Contract Auditing">Smart Contract Auditing</a></li>
                                <li><a href="#" title="Blockchain-based DAP Analytics">Blockchain-based Analytics</a></li>
                                <li><a href="#" title="Scalable DAO Platforms">Scalable DAO Platforms</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='magento_service_card'>
                <Container>
                    <div className="card_heading text-center">
                        <h2>DAP and DAO Solutions We Offer in Singapore</h2>
                        <p>Asvayuk Technologies delivers enterprise-grade DAP and DAO solutions in Singapore, empowering businesses with decentralized infrastructure for transparency, security, and autonomy.</p>
                    </div>
                    <Row className='gy-4'>
                        <Col lg={4}>
                            <Magento_service_card cardImg={service1} altText='DAP Development Company in Singapore' cardHeading="DAP Development in Singapore" cardPara="Build powerful decentralized applications for secure and scalable business operations in Singapore." />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card cardImg={service2} altText='DAO Development Singapore' cardHeading="DAO for Business Governance in Singapore" cardPara="Implement DAO systems to enable self-governing business models and transparent operations in Singapore." />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card cardImg={service3} altText='Blockchain-Powered DApp Solutions' cardHeading="DAP and DAO Integration in Singapore" cardPara="Integrate DAP and DAO systems for enhanced security, governance, and workflow automation." />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card cardImg={service4} altText='Mobile DApp Development' cardHeading="Mobile DAP Solutions" cardPara="Develop mobile-first decentralized applications for seamless user experiences on-the-go." />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card cardImg={service5} altText='Smart Contract DAO Development' cardHeading="Smart Contracts for DAOs" cardPara="Design and deploy smart contracts that automate DAO governance and enforce compliance." />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card cardImg={service6} altText='Blockchain Analytics Singapore' cardHeading="Blockchain Analytics for DAP and DAO" cardPara="Get real-time analytics for DAPs and DAOs to make informed business decisions in Singapore." />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Experience
                expTitle='Why Choose Asvayuk for DAP and DAO Solutions in Singapore?'
                point1='Blockchain Expertise'
                pointPara1='Our expert team has in-depth experience developing secure and scalable DAP and DAO systems.'
                point2='Transparency and Security'
                pointPara2='We ensure your operations remain decentralized, transparent, and tamper-proof.'
                point3='Tailored to Singapore Businesses'
                pointPara3='Solutions designed to support Singapore’s tech-driven business ecosystem.'
                point4='Continuous Support'
                pointPara4='End-to-end technical and maintenance support for your decentralized systems.'
                altTags={{
                    group1: "DApp Development Company in Singapore",
                    group2: "Blockchain-Powered DApp Solutions",
                    group3: "DAO Development in Singapore",
                    group4: "Smart Contract-Based DAO Services",
                    mockups: "Web3 Solutions in Singapore",
                    whiteLogo: "DAO Governance Singapore"
                }}
            />
        </>
    )
}

export default page