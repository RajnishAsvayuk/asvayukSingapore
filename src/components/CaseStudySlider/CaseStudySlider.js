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
                                                <Link href="/case-studies/fortunenft"><Image src={AppImages.casestudySliderImg.caseStu1} alt="best web development in chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/fortunenft">Website Development</Link></p>
                                                <h5><Link href="/case-studies/fortunenft">Fortune NFT</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/aryans-group-of-colleges"><Image src={AppImages.casestudySliderImg.caseStu2} alt="website development provider chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/aryans-group-of-colleges">Website Development</Link></p>
                                                <h5><Link href="/case-studies/aryans-group-of-colleges">Aryans Group of Colleges</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/layerextech"><Image src={AppImages.casestudySliderImg.caseStu3} alt="Web developers for website portal development in chandigarh" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/layerextech">Website Development</Link></p>
                                                <h5><Link href="/case-studies/layerextech">Layerex Tech</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/kamcon"><Image src={AppImages.casestudySliderImg.caseStu4} alt="Chandigarh's Most Trusted Mobile App Development Company" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/kamcon">Website Development</Link></p>
                                                <h5><Link href="/case-studies/kamcon">Kamcon Design and Build</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/s5podcaststudio"><Image src={AppImages.casestudySliderImg.caseStu5} alt="Chandigarh's Most Trusted Mobile App Development Company" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/s5podcaststudio">Website Development</Link></p>
                                                <h5><Link href="/case-studies/s5podcaststudio">S5 Podcast Studio</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/wibiz"><Image src={AppImages.casestudySliderImg.caseStu6} alt="Chandigarh's Most Trusted Mobile App Development Company" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/wibiz">Website Development</Link></p>
                                                <h5><Link href="/case-studies/wibiz">wibiz</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link href="/case-studies/wibiz"><Image src={AppImages.casestudySliderImg.caseStu5} alt="Chandigarh's Most Trusted Mobile App Development Company" className="img-fluid w-100" width={200} height={200} /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link href="/case-studies/wibiz">Website Development</Link></p>
                                                <h5><Link href="/case-studies/wibiz">S5 Podcast Studio</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide> */}
                                    
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