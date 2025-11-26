import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image";

const Process = ({heading,para,col1Img,col1Alt,col2Img,col2Alt,col3Img,col3Alt,col4Img,col4Alt,col5Img,col5Alt,
    col1head,col1para,col2head,col2para,col3head,col3para,col4head,col4para,col5head,col5para
}) => {
  return (
    <>
         <section className="bg-section">
                <Container className='process_container'>
                    <Row className="d-flex flex-column text-center">
                        <div className="main-bg w-100">
                            <div className="inside-main py-5">
                                <h2>{heading}</h2>
                                <div className="work-para mt-2">
                                    <p>
                                    {para}
                                    </p>
                                </div>

                                <Row className="curly-img curley-img mt-5">
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <Image src={col1Img} alt={col1Alt} className='img-fluid' width={100} height={100}/>
                                            <h6 className="mt-4">{col1head}</h6>
                                            <p className="text-light">{col1para}</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <Image src={col2Img} alt={col2Alt} className='img-fluid' width={100} height={100}/>
                                            <h6 className="mt-4">{col2head}</h6>
                                            <p className="text-light">{col2para}</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <Image src={col3Img} alt={col3Alt} className='img-fluid' width={100} height={100}/>
                                            <h6 className="mt-4">{col3head}</h6>
                                            <p className="text-light">{col3para}</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                           <Image src={col4Img} alt={col4Alt} className='img-fluid' width={100} height={100}/>
                                            <h6 className="mt-4">{col4head}</h6>
                                            <p className="text-light">{col4para}</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <Image src={col5Img} alt={col5Alt} className='img-fluid' width={100} height={100}/>
                                            <h6 className="mt-4">{col5head}</h6>
                                            <p className="text-light">{col5para}</p>
                                        </div>
                                    </Col>
                                   
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
    </>
  )
}

export default Process