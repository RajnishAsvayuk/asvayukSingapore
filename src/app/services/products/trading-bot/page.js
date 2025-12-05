    // 'use client'
    // import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
    // import Ar_Vr from '@/assets/Images/Crm.webp'
    // import service1 from '@/assets/Images/services1.webp'
    // import service2 from '@/assets/Images/services2.webp'
    // import service3 from '@/assets/Images/services3.webp'
    // import service4 from '@/assets/Images/services4.webp'
    // import service5 from '@/assets/Images/services5.webp'
    // import service6 from '@/assets/Images/services6.webp'
    // import CryptoWalletImg from "@/assets/Images/CryptoWalletImg.webp";
    // import Link from 'next/link'
    // import BannerButton from '@/components/BannerBtn/BannerButton'
    // import Experience from '@/components/Experience/Experience'
    // import Magento_service_card from '@/components/ui/Cards/Magento_service_card'
    // import KeyPointSection from '@/components/KeyPointSection/KeyPointSection'

    // const page = () => {
    // return (
    //     <main>
    //     <section className="banner-en">
    //         <Container>
    //             <Row className="align-items-center">
    //                 <div className="col-lg-6">
    //                     <div className="banner_textInfo-en">
    //                         <Breadcrumb>
    //                             <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
    //                             <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Products</Breadcrumb.Item>
    //                             <Breadcrumb.Item active>Trading Bot Solutions</Breadcrumb.Item>
    //                         </Breadcrumb>
    //                         <h1><Link to="https://maps.app.goo.gl/rHfXhrYcnZEvB2Kz8">Advanced Trading Bot Solutions in Singapore</Link></h1>
    //                         <p className="py-3">
    //                             Leverage Asvayuk Technologies’ cutting-edge trading bot solutions for automated cryptocurrency trading in Singapore. 
    //                             Our bots are built for performance, risk management, and scalability—empowering traders and investors to stay ahead in fast-moving markets, 
    //                             trading 24/7 with precision and reliability.
    //                         </p>
    //                         <BannerButton btnTitle='Get a Free Consultation' url='/contact-us' />
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-6">
    //                     <div className="bannerImg d-flex justify-content-center align-items-center">
    //                         <img src={Ar_Vr} alt="Trading Bot Solutions Singapore" className='w-100 h-100' />
    //                     </div>
    //                 </div>
    //             </Row>
    //         </Container>
    //     </section>

    //     <section className='bg-white py-5'>
    //         <Container>
    //             <div className='pb-4'>
    //                 <h1 className='fw-bold'>
    //                     Customized Trading Bot Solutions <span className="text-uppercase" style={{ color: '#2cbe9a' }}>By Asvayuk Technologies</span> in Singapore
    //                 </h1>
    //                 <p className="powered_php pt-3">
    //                     Asvayuk Technologies specializes in building intelligent trading bots tailored to your cryptocurrency trading strategies in Singapore. 
    //                     Our solutions automate trades, manage risk, and maximize profits while seamlessly integrating with major exchanges and blockchain networks.
    //                 </p>
    //             </div>
    //             <div className="row">
    //                 <div className="col-lg-6">
    //                     <ul className="development_links">
    //                         <li><a href="#" title="Crypto Trading Bot Development">Crypto Trading Bot Development</a></li>
    //                         <li><a href="#" title="Automated Trading Solutions">Automated Trading Solutions</a></li>
    //                         <li><a href="#" title="AI-Powered Trading Bots">AI-Powered Trading Bots</a></li>
    //                         <li><a href="#" title="Risk Management Bots">Risk Management Bots</a></li>
    //                         <li><a href="#" title="Blockchain Trading Integration">Blockchain Trading Integration</a></li>
    //                     </ul>
    //                 </div>
    //                 <div className="col-lg-6">
    //                     <ul className="development_links">
    //                         <li><a href="#" title="24/7 Trading Bots">24/7 Crypto Trading Bots</a></li>
    //                         <li><a href="#" title="Scalable Trading Solutions">Scalable Trading Solutions</a></li>
    //                         <li><a href="#" title="Smart Algorithm Trading Bots">Smart Algorithm Trading Bots</a></li>
    //                         <li><a href="#" title="Customizable Trading Bots">Customizable Trading Bots</a></li>
    //                         <li><a href="#" title="User-Friendly Bot Interfaces">User-Friendly Bot Interfaces</a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </Container>
    //     </section>

    //     <section className='magento_service_card'>
    //         <Container>
    //             <div className="card_heading text-center">
    //                 <h2>Our Trading Bot Solutions in Singapore</h2>
    //                 <p>Asvayuk Technologies provides advanced trading bot solutions in Singapore, designed to automate cryptocurrency trading with high-end analytics, robust security, and unmatched scalability.</p>
    //             </div>
    //             <div className='magento_cards'>
    //                 <Row className='gy-4'>
    //                     <Col lg={4}>
    //                         <Magento_service_card cardImg={service1} altText='Trading Bot Solutions Singapore' cardHeading="Custom Trading Bot Development" cardPara="Automated trading systems tailored to your crypto trading goals and market strategies." />
    //                     </Col>
    //                     <Col lg={4}>
    //                         <Magento_service_card cardImg={service2} altText='AI Trading Bot Singapore' cardHeading="AI-Powered Crypto Bots" cardPara="Leverage artificial intelligence for smarter, more accurate crypto trading." />
    //                     </Col>
    //                     <Col lg={4}>
    //                         <Magento_service_card cardImg={service3} altText='Blockchain Integration Singapore' cardHeading="Blockchain Integration" cardPara="Integrate blockchain protocols for secure and decentralized trading automation." />
    //                     </Col>
    //                     <Col lg={4}>
    //                         <Magento_service_card cardImg={service4} altText='Risk Management Bots Singapore' cardHeading="Risk Management Bots" cardPara="Automate stop-loss and risk management strategies to protect your investments." />
    //                     </Col>
    //                     <Col lg={4}>
    //                         <Magento_service_card cardImg={service5} altText='24/7 Crypto Bot Singapore' cardHeading="24/7 Trading Bots" cardPara="Trade around the clock and capture every market opportunity automatically." />
    //                     </Col>
    //                     <Col lg={4}>
    //                         <Magento_service_card cardImg={service6} altText='Trading Analytics Singapore' cardHeading="Advanced Trading Analytics" cardPara="Analyze real-time data to improve trading performance and decision-making." />
    //                     </Col>
    //                 </Row>
    //             </div>
    //         </Container>
    //     </section>

    //     <KeyPointSection 
    //         style={{ background: '#E3FBF5' }} 
    //         keyHeading="Unlock the Future of Trading with Asvayuk Technologies" 
    //         keyPara="Trade smarter and faster with Asvayuk Technologies’ automated trading bots in Singapore. Our advanced systems maximize returns while effectively managing risks in volatile crypto markets." 
    //         keyPoint1="AI-Driven Market Analysis" 
    //         keyPoint2="Advanced Algorithmic Strategies" 
    //         keyPoint3="Real-Time Performance Tracking" 
    //         keyPoint4="Continuous Monitoring and Support" 
    //         url="/contact-us" 
    //         btnTitle="Request Consultation" 
    //         Group105518={CryptoWalletImg} 
    //     />

    //     <section className='bg-white py-5'>
    //         <Container>
    //             <div className='pb-4'>
    //                 <h1 className='fw-bold'>
    //                     Benefits of Trading Bot Solutions in Singapore
    //                 </h1>
    //                 <p className="powered_php pt-3">
    //                     Our trading bots in Singapore offer numerous advantages, including automated execution, minimized human bias, enhanced accuracy, and continuous operation. 
    //                     Asvayuk’s technology ensures you maintain a competitive edge in both cryptocurrency and traditional trading markets.
    //                 </p>
    //             </div>
    //             <div className="row">
    //                 <div className="col-lg-6">
    //                     <ul className="development_links">
    //                         <li><a href="#" title="Automated Crypto Trading">Automated Crypto Trading</a></li>
    //                         <li><a href="#" title="AI Trading Bots">AI Trading Bots</a></li>
    //                         <li><a href="#" title="Crypto Market Insights">Crypto Market Insights</a></li>
    //                         <li><a href="#" title="Algorithmic Trading Bots">Algorithmic Trading Bots</a></li>
    //                         <li><a href="#" title="Customizable Trading Bots">Customizable Trading Bots</a></li>
    //                     </ul>
    //                 </div>
    //                 <div className="col-lg-6">
    //                     <ul className="development_links">
    //                         <li><a href="#" title="Risk Management in Crypto Trading">Risk Management in Crypto Trading</a></li>
    //                         <li><a href="#" title="Blockchain-Based Trading Automation">Blockchain-Based Trading Automation</a></li>
    //                         <li><a href="#" title="24/7 Trading with Bots">24/7 Trading with Bots</a></li>
    //                         <li><a href="#" title="Seamless Bot Integration">Seamless Bot Integration</a></li>
    //                         <li><a href="#" title="High-Frequency Trading Bots">High-Frequency Trading Bots</a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </Container>
    //     </section>

    //     <section className="supercharge-section">
    //         <div className="container">
    //             <div className="row">
    //                 <div className="choice pb-5">
    //                     <h2 className="fw-semibold">Supercharge Your Crypto Trading with Automated Bots from Asvayuk Technologies in Singapore</h2>
    //                     <p className="pt-2">Maximize your efficiency and profits with Asvayuk’s advanced crypto trading bots in Singapore. 
    //                     Enjoy intelligent automation, live analytics, and real-time market adaptability—perfect for both retail and institutional traders.</p>
    //                     <ul>
    //                         <li><span className="fw-bold h6">AI Trading Bots:</span> Intelligent automation driven by artificial intelligence for optimal trading strategies.</li>
    //                         <li><span className="fw-bold h6">24/7 Automated Trading:</span> Operate non-stop across global markets with zero downtime.</li>
    //                         <li><span className="fw-bold h6">Market Insights and Analytics:</span> Real-time data tracking for better trading decisions.</li>
    //                         <li><span className="fw-bold h6">Risk Management Tools:</span> Built-in stop-loss and predictive risk control modules.</li>
    //                         <li><span className="fw-bold h6">Customizable Trading Strategies:</span> Configure your bot to match your unique goals and trading behavior.</li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>

    //     <Experience
    //         expTitle='Why Choose Asvayuk for Automated Crypto Trading Bots in Singapore?'
    //         point1='Blockchain & AI Expertise'
    //         pointPara1='We develop intelligent crypto bots combining AI and blockchain for next-level automation and accuracy.'
    //         point2='Advanced Risk Management'
    //         pointPara2='Our risk management modules protect your capital from sudden market swings and volatility.'
    //         point3='Custom Solutions'
    //         pointPara3='Every bot is fully customized to align with your strategy and performance objectives.'
    //         point4='Dedicated Support'
    //         pointPara4='Our expert team provides 24/7 technical and operational support to keep your trading smooth.'
    //         altTags={{
    //             group1: "Reliable Trading Automation Services in Singapore",
    //             group2: "Best Crypto Trading Bot in Singapore",
    //             group3: "AI-Powered Trading Bots in Singapore",
    //             group4: "Custom Crypto Trading Bot Development Singapore",
    //             mockups: "Top Trading Bot Development Company Singapore",
    //             whiteLogo: "Crypto Bot Developers Singapore"
    //         }}
    //     />
    // </main>

    // )
    // }

    // export default page

    import React from 'react'
    
    const page = () => {
      return (
        <div>page</div>
      )
    }
    
    export default page