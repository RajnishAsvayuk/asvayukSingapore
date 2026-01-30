import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import 'swiper/css';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from 'react-icons/fa6';
import AppImages from '@/config/constant/app.images';
const FullCaseStudy = () => {
    return (
        <>
            <section className="fullCaseStudy">
                <div className="conianer-fluid">
                    <Swiper
                        key={"ltr"}
                        dir="ltr"
                        modules={[Navigation, Scrollbar, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={false}
                        scrollbar={{ draggable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        <SwiperSlide className='slider_bg3 slider_bg'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                    <div className="fullcase_details">
                                        <div className="fullCaseStudy_slider_logo">
                                            <Image src={AppImages.fullCase.coffee} alt="Best UI UX designers in Chandigarh" className='slider_bg3_logo' width={100} height={100} />
                                        </div>
                                        <div className="fullCaseStudy_textContent py-4">
                                            <h2 className="fw-semibold lh-base">IT TAKES A STRATEGIC VISION TO DESIGN WORKPLACES THAT PERFORM.</h2>
                                            <div className="subfullCaseStudy d-flex gap-1 gap-md-3 py-4">
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Workspace Solutions</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Design & Build</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Wordpress</span>
                                                </div>
                                            </div>
                                            <p className="fullcase_para pb-4">Kamcon is a corporate interior design and build firm specializing in modern, functional, and acoustically optimized workspaces. We partner with businesses to design environments that enhance productivity, reflect brand identity, and support seamless day-to-day operations. From concept to execution, every detail is engineered for performance, comfort, and long-term value.</p>
                                            <Link href="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                <FaArrowRightLong className='mx-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                    <div className="fullCaseStudy_img">
                                        <Image src={AppImages.casestudySliderImg.caseStu4} alt="Saas App Development provider in panchkula and Mohali" className="img-fluid" width={600} height={520} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider_bg1 slider_bg'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                    <div className="fullcase_details">
                                        <div className="fullCaseStudy_slider_logo">
                                            <Image src={AppImages.fullCase.moonlight} alt="UI UX development company in Chandigarh" width={100} height={100} />
                                        </div>
                                        <div className="fullCaseStudy_textContent py-4">
                                            <h2 className="fw-semibold lh-base">IT TAKES A VISIONARY APPROACH TO BUILD MODERN EDUCATION PLATFORMS.</h2>
                                            <div className="subfullCaseStudy d-flex gap-1 gap-md-3 py-4">
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>UI/UX</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Education Website</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>WordPress Development</span>
                                                </div>
                                            </div>
                                            <p className="fullcase_para pb-4">Aryans Group of Colleges is a leading educational institution in India, offering a wide range of undergraduate and postgraduate programs. The website was designed and developed on WordPress with a strong focus on clarity, accessibility, and student engagement. From program discovery to admission applications, the platform delivers a seamless digital experience for students, parents, and faculty.</p>
                                            <Link href="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                <FaArrowRightLong className='mx-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                    <div className="fullCaseStudy_img">
                                        <Image src={AppImages.casestudySliderImg.caseStu2} alt="Top Software Development Companies in Chandigarh" className="w-100" width={600} height={520} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider_bg2 slider_bg'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                    <div className="fullcase_details">
                                        <div className="fullCaseStudy_slider_logo">
                                            <Image src={AppImages.fullCase.lxtechlogo} alt="UI UX development company in Chandigarh" width={100} height={100} />
                                        </div>
                                        <div className="fullCaseStudy_textContent py-4 text-white">
                                            <h2 className="fw-semibold lh-base">WHEN ERP & CRM MEET AI, ENTERPRISE OPERATIONS SCALE FASTER.</h2>
                                            <div className="subfullCaseStudy d-flex gap-1 gap-md-3 py-4">
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>AI-Driven ERP</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Fintech Ecosystem</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Next Js</span>
                                                </div>
                                            </div>
                                            <p className="fullcase_para pb-4 text-white">Layerex is a technology-driven ecosystem that integrates AI, ERP, and CRM to power next-generation fintech and enterprise solutions. Designed to automate the complete business lifecycle—from lead management and sales to project execution, invoicing, reporting, and intelligent decision-making—Layerex enables organizations to operate smarter, faster, and at scale across lending, SaaS deployment, IoT, and smart-city initiatives.</p>
                                            <Link href="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                <FaArrowRightLong className='mx-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                    <div className="fullCaseStudy_img">
                                        <Image src={AppImages.casestudySliderImg.caseStu3} alt="Digital marketing experts in Chandigarh" className="w-100" width={600} height={520} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider_bg4 slider_bg'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                    <div className="fullcase_details">
                                        <div className="fullCaseStudy_slider_logo">
                                            <Image src={AppImages.fullCase.s5logo} alt="Shopify website design company in Chandigarh" className='slider_bg3_logo img-fluid' width={100} height={100} />
                                        </div>
                                        <div className="fullCaseStudy_textContent py-4">
                                            <h2 className="fw-semibold lh-base">IT TAKES A PROFESSIONAL SETUP TO CREATE CONTENT THAT CONNECTS.  </h2>
                                            <div className="subfullCaseStudy d-flex gap-1 gap-md-3 py-4">
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>UI/UX</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Studio Booking Platform</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Wordpress</span>
                                                </div>
                                            </div>
                                            <p className="fullcase_para pb-4">S5 Podcast Studio is a modern, broadcast-standard podcast and media production studio based in Brampton, Ontario, serving creators and businesses across the Greater Toronto Area. The website was designed to showcase the studio’s professional capabilities while making it easy for clients to explore services, understand rental options, and book studio time with confidence.

                                                Built around clarity and conversion, the platform highlights studio features, production services, and flexible rental models—supporting everything from self-operated recordings to fully managed, end-to-end media production.</p>
                                            <Link href="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                <FaArrowRightLong className='mx-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                    <div className="fullCaseStudy_img">
                                        <Image src={AppImages.casestudySliderImg.caseStu5} alt="Web portal development services in chandigarh" className="w-100" width={600} height={520} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider_bg5 slider_bg'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                    <div className="fullcase_details">
                                        <div className="fullCaseStudy_slider_logo">
                                            <Image src={AppImages.fullCase.wibizlogo} alt="Magento Web development provider in chandigarh" className='slider_bg3_logo' width={100} height={100} />
                                        </div>
                                        <div className="fullCaseStudy_textContent py-4">
                                            <h2 className="fw-semibold lh-base">DESIGNING CONVERSATIONAL AI FOR BUSINESS GROWTH.</h2>
                                            <div className="subfullCaseStudy d-flex gap-1 gap-md-3 py-4">
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Product UX</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>AI-Driven SaaS</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Lead Automation</span>
                                                </div>
                                            </div>
                                            <p className="fullcase_para pb-4">For WiBiz, we designed a scalable SaaS experience that simplifies how businesses deploy and manage AI-driven customer conversations. The platform unifies messaging, voice, and chat channels into a single intelligent workflow—improving response times, conversion rates, and customer satisfaction.</p>
                                            <Link href="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                <FaArrowRightLong className='mx-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                    <div className="fullCaseStudy_img">
                                        <Image src={AppImages.casestudySliderImg.caseStu6} alt="blockchain app development services chandigarh" className="w-100" width={600} height={520} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                       

                        {/* <SwiperSlide className='slider_bg6 slider_bg'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                    <div className="fullcase_details">
                                        <div className="fullCaseStudy_slider_logo">
                                            <Image src={AppImages.fullCase.layerLogo} alt="Magento Web development provider in chandigarh" className='slider_bg3_logo' width={100} height={100} />
                                        </div>
                                        <div className="fullCaseStudy_textContent py-4">
                                            <h2 className="fw-semibold lh-base">Welcome To LayerEx – Your Gateway To Seamless Crypto Trading!</h2>
                                            <div className="subfullCaseStudy d-flex gap-1 gap-md-3 py-4">
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>UI/UX</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>E-commerce</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Shopify</span>
                                                </div>
                                            </div>
                                            <p className="fullcase_para pb-4">Take your first step into the future of finance—sign up today and start trading!</p>
                                            <Link href="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                <FaArrowRightLong className='mx-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                    <div className="fullCaseStudy_img">
                                        <Image src={AppImages.fullCase.layerX} alt="blockchain app development services chandigarh" className="w-100" width={600} height={520} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='slider_bg7 slider_bg'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                    <div className="fullcase_details">
                                        <div className="fullCaseStudy_slider_logo">
                                            <Image src={AppImages.fullCase.rel} alt="Magento Web development provider in chandigarh" className='slider_bg3_logo' width={600} height={520} />
                                        </div>
                                        <div className="fullCaseStudy_textContent py-4">
                                            <h2 className="fw-semibold lh-base">MTHT Token Listing</h2>
                                            <div className="subfullCaseStudy d-flex gap-1 gap-md-3 py-4">
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>UI/UX</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>E-commerce</span>
                                                </div>
                                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                    <span>Shopify</span>
                                                </div>
                                            </div>
                                            <p className="fullcase_para pb-4">Be part of the next big leap in decentralized finance – MTHT goes live! Unlock premium opportunities with OpenSeaCap.</p>
                                            <Link href="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                <FaArrowRightLong className='mx-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                    <div className="fullCaseStudy_img">
                                        <Image src={AppImages.fullCase.btCash} alt="blockchain app development services chandigarh" className="w-100" width={600} height={520} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default FullCaseStudy