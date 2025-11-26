'use client'
import AppImages from '../../config/constant/app.images';
import Link from 'next/link';
import React from 'react'
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const CaseStudySlider = () => {
    return (
        <>
            <section className="caseStuides d-none d-lg-block d-md-block">
                <Container>
                    <div className="caseStuides_content">
                        <h5>Case Studies</h5>
                        <Row className="align-items-start">
                            <div className="col-8">
                                <h2 className="fw-semibold fs-1"> Practical Solutions That Revolutionized Industries!</h2>
                            </div>
                            <div className="col-lg-4 text-end fw-bold">
                                <Link href="/case-studies" >View All Case Studies <span className='chevronicon'><FaChevronRight /></span> </Link>
                                {/* <div className="d-flex justify-content-end">
                                        <div className="casestu_button position-relative mt-4 d-flex gap-5">
                                            <div className="swiper-button-prev mt-0"></div>
                                            <div className="swiper-button-next mt-0 "></div>
                                        </div>
                                    </div> */}
                            </div>
                        </Row>
                    </div>
                    <div className="container_extraWidth">
                        <Row>
                            <div className="col-lg-12 projectCase">
                                <Swiper
                                    key={"ltr"}
                                    dir="ltr"
                                    modules={[Navigation, Scrollbar, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={4.3}
                                    navigation={false}
                                    pagination={false}
                                    scrollbar={{ draggable: true }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        1400: {
                                            slidesPerView: 4.5,
                                        },
                                        1440: {
                                            slidesPerView: 4.5,
                                        },
                                    }}
                                    className='mySwiper1'
                                >
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/spicetribe"><Image src={AppImages.casestudySliderImg.caseStu1} alt="best web development in chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/spicetribe">Website Development</Link></p>
                                                <h5><Link href="/case-studies/spicetribe">Spicetribe</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/moonlightconcept"><Image src={AppImages.casestudySliderImg.caseStu2} alt="website development provider chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/moonlightconcept">Website Development</Link></p>
                                                <h5><Link href="/case-studies/moonlightconcept">Moonlight Concept</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/themodernshop"><Image src={AppImages.casestudySliderImg.caseStu3} alt="Web developers for website portal development in chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/themodernshop">Website Development</Link></p>
                                                <h5><Link href="/case-studies/themodernshop">The Modern Shop</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/49thcoffee"><Image src={AppImages.casestudySliderImg.caseStu4} alt="Chandigarh's Most Trusted Mobile App Development Company" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/49thcoffee">Website Development</Link></p>
                                                <h5><Link href="/case-studies/49thcoffee">49th Parallel</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/krishnapearlsandjewellers"><Image src={AppImages.casestudySliderImg.caseStu6} alt="best WooCommerce Developers in Chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/krishnapearlsandjewellers">Website Development</Link></p>
                                                <h5><Link href="/case-studies/krishnapearlsandjewellers">Krishna Pearls & Jewellers</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/bookmytask"><Image src={AppImages.casestudySliderImg.caseStu8} alt="Professional Ecommerce Website Builders in Chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/bookmytask">Website Development</Link></p>
                                                <h5><Link href="/case-studies/bookmytask">Book My Task</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/quadlock"><Image src={AppImages.casestudySliderImg.caseStu9} alt="Affordable Magento Development Chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/quadlock">Website Development</Link></p>
                                                <h5><Link href="/case-studies/quadlock">Quadlockcase</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/layerx"><Image src={AppImages.casestudySliderImg.layerx} alt="Affordable Magento Development Chandigarh" className="img-fluid layerX-img" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/leyerx">Website Development</Link></p>
                                                <h5><Link href="/case-studies/layerx">LayerX</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/opensea"><Image src={AppImages.casestudySliderImg.btCash} alt="Affordable Magento Development Chandigarh" className="img-fluid layerX-img" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/opensea">Website Development</Link></p>
                                                <h5><Link href="/case-studies/opensea">Openseacap</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default CaseStudySlider