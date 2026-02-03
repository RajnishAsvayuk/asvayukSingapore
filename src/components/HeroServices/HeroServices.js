"use client";
import React from 'react'
import BannerButton from '@/components/BannerBtn/BannerButton'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
const HeroServices = ({ home, pageParent, pageName, pageHeading, pagePara, pageImg, pageAlt, showButton = true,  }) => {
    return (
        <>
            <section className="banner-en ">
                <Container>
                    <Row className="align-items-center">
                        <div className="col-lg-6">
                            <div className="banner_textInfo-en pt-lg-5">
                                <Breadcrumb>
                                    <Breadcrumb.Item linkAs={Link} href="/">
                                        {home}
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item linkAs={Link} href="#">
                                        {pageParent}
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>
                                        {pageName}
                                    </Breadcrumb.Item>
                                </Breadcrumb>

                                <h1><Link href="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">{pageHeading}</Link></h1>
                                <p className="py-3">{pagePara}</p>
                                 {showButton && (
                <div className="pb-4">
                  <BannerButton
                    btnTitle="Start Your Project Today"
                    url="/contact-us"
                  />
                </div>
              )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bannerImg">
                                <Image src={pageImg} alt={pageAlt} className='img-fluid' />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HeroServices