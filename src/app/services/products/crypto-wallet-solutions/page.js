'use client'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'

import Ar_Vr from '@/assets/Images/CryptoWallet.webp'
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

const page = () => {
    return (
        <>
            {/* Banner Section */}
            <section className="banner-en">
                <Container>
                    <Row className="align-items-center">
                        <div className="col-lg-6">
                            <div className="banner_textInfo-en">
                                {/* <Breadcrumb>
                                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                                        Home
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>
                                        Products
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>
                                        Crypto Wallet Solutions
                                    </Breadcrumb.Item>
                                </Breadcrumb> */}
                                <h1>
                                    <Link href="https://maps.app.goo.gl/6pVt4A9YrFZr1pU48">
                                        Crypto Wallet Solutions in Singapore
                                    </Link>
                                </h1>
                                <p className="py-3">
                                    Discover Asvayuk Technologies’ cutting-edge crypto wallet
                                    solutions in Singapore — the financial hub of Asia.
                                    Experience secure, decentralized, and user-friendly wallet
                                    platforms tailored for individuals, startups, and fintech
                                    enterprises.
                                </p>
                                <BannerButton
                                    btnTitle="Get a Free Consultation"
                                    url="/contact-us"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bannerImg d-flex justify-content-center align-items-center">
                                <img
                                    src={Ar_Vr}
                                    alt="Crypto Wallet Solutions in Singapore"
                                    className="w-100 h-100"
                                />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            {/* Intro Section */}
            <section className="bg-white py-5">
                <Container>
                    <div className="pb-4">
                        <h1 className="fw-bold">
                            Customized Crypto Wallet Solutions{" "}
                            <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                                in Singapore
                            </span>
                        </h1>
                        <p className="powered_php pt-3">
                            At Asvayuk Technologies, we deliver secure, scalable, and
                            regulatory-ready crypto wallet solutions for Singapore’s
                            fast-evolving digital finance ecosystem. Our wallets empower
                            users with complete control, transparency, and blockchain
                            integration.
                        </p>
                    </div>

                    <Row>
                        <Col lg={6}>
                            <ul className="development_links">
                                <li>
                                    <a href="#" title="Crypto Wallet Development in Singapore">
                                        Crypto Wallet Development in Singapore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Blockchain Wallet Integration Singapore">
                                        Blockchain Wallet Integration Singapore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Decentralized Wallet Solutions Singapore">
                                        Decentralized Wallet Solutions Singapore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Cryptocurrency Management Singapore">
                                        Cryptocurrency Asset Management Singapore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Secure Wallet Features Singapore">
                                        Secure Wallet Features Singapore
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={6}>
                            <ul className="development_links">
                                <li>
                                    <a href="#" title="Multi-Currency Wallets Singapore">
                                        Multi-Currency Wallets Singapore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Smart Wallet Technology Singapore">
                                        Smart Wallet Technology Singapore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Blockchain-Based Security Singapore">
                                        Blockchain-Based Security Singapore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Customizable Wallet Solutions Singapore">
                                        Customizable Wallet Solutions Singapore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="User-Friendly Crypto Wallets Singapore">
                                        User-Friendly Crypto Wallets Singapore
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services Section */}
            <section className="magento_service_card">
                <Container>
                    <div className="card_heading text-center">
                        <h2>Crypto Wallet Solutions We Offer in Singapore</h2>
                        <p>
                            From blockchain wallet integration to multi-currency management,
                            Asvayuk Technologies delivers secure crypto wallet development
                            solutions designed for the Singapore fintech ecosystem.
                        </p>
                    </div>

                    <Row className="gy-4">
                        <Col lg={4}>
                            <Magento_service_card
                                cardImg={service1}
                                altText="Crypto Wallet Development Company in Singapore"
                                cardHeading="Crypto Wallet Development"
                                cardPara="Develop secure and scalable crypto wallets for seamless digital asset management."
                            />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card
                                cardImg={service2}
                                altText="Blockchain Wallet Integration in Singapore"
                                cardHeading="Blockchain Wallet Integration"
                                cardPara="Integrate blockchain technology for secure, decentralized wallet systems."
                            />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card
                                cardImg={service3}
                                altText="Multi-Currency Crypto Wallet Singapore"
                                cardHeading="Multi-Currency Support"
                                cardPara="Manage multiple cryptocurrencies in a single, unified wallet."
                            />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card
                                cardImg={service4}
                                altText="Mobile Crypto Wallet Singapore"
                                cardHeading="Mobile Crypto Wallets"
                                cardPara="Access your crypto portfolio securely through mobile-friendly wallets."
                            />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card
                                cardImg={service5}
                                altText="Smart Wallet Features Singapore"
                                cardHeading="Smart Wallet Features"
                                cardPara="Automate transactions and enhance security with smart wallet functionalities."
                            />
                        </Col>
                        <Col lg={4}>
                            <Magento_service_card
                                cardImg={service6}
                                altText="Blockchain Analytics in Singapore"
                                cardHeading="Blockchain Analytics"
                                cardPara="Monitor performance and transactions through blockchain analytics."
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Experience Section */}
            <Experience
                expTitle="Why Choose Asvayuk for Crypto Wallet Solutions in Singapore?"
                point1="Blockchain Expertise"
                pointPara1="Our team specializes in blockchain development tailored for Singapore’s fintech sector."
                point2="Secure and Reliable"
                pointPara2="Enterprise-grade security to safeguard your crypto transactions and user data."
                point3="Regulatory Compliance"
                pointPara3="We ensure compliance with Singapore’s MAS (Monetary Authority of Singapore) regulations for crypto solutions."
                point4="Tailored for Businesses"
                pointPara4="From startups to enterprises, we customize wallets to match your unique financial goals."
                altTags={{
                    group1: "Crypto Wallet Development Company in Singapore",
                    group2: "Blockchain Wallet Integration Singapore",
                    group3: "Secure Crypto Wallets Singapore",
                    group4: "Best Blockchain Wallet Solutions in Singapore",
                    mockups: "Multi-Currency Crypto Wallet Singapore",
                    whiteLogo: "Crypto Wallet Solutions in Singapore",
                }}
            />
        </>
    )
}

export default page