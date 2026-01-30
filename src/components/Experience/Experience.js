'use client'
import AppImages from "@/config/constant/app.images";
import Image from "next/image";
import services3d from "@/assets/Images/services3d.webp"
function Experience({
    expTitle,
    ExpPara,
    point1,
    pointPara1,
    point2,
    pointPara2,
    point3,
    pointPara3,
    point4,
    pointPara4,
    altTags = {}, // Dynamic alt tags as an object
}) {
    return (
        <>
            <section className="Experience pt-5 position-relative d-none d-md-block">
                <div className="container">
                    <div className="Experienceg_title text-center">
                        <h2 className="fw-bold mb-4">{expTitle}</h2>
                        <p className="mb-0 w-75 mx-auto">{ExpPara}</p>
                    </div>

                    <div className="experience_row row justify-content-center py-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="d-flex flex-column justify-content-xl-between align-items-center h-100">
                                <div className="position-relative">
                                    <div className="experience_img pb-3 pb-lg-0 pb-md-0 py-2">
                                        <Image
                                            src={AppImages.experinece.group1}
                                            alt={altTags.group1 || "null"}
                                            className="img-fluid"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="experience_content text-center w-75 position-absolute top-50 start-50 translate-middle">
                                        <h6>{point1}</h6>
                                        <p className="mb-0">{pointPara1}</p>
                                    </div>
                                </div>

                                <div className="position-relative">
                                    <div className="experience_img pb-3 pb-lg-0 pb-md-0 py-2">
                                        <Image
                                            src={AppImages.experinece.group2}
                                            alt={altTags.group2 || "null"}
                                            className="img-fluid"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="experience_content text-center w-75 position-absolute top-50 start-50 translate-middle">
                                        <h6>{point2}</h6>
                                        <p className="mb-0">{pointPara2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="center_logo_img align-content-center  col-lg-2 d-flex align-items-center justify-content-center d-none d-lg-block">
                            <Image
                                src={AppImages.experinece.Mockups}
                                // src={services3d}
                                alt={altTags.mockups || "null"}
                                className="img-fluid  w-100"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                            <div className="d-flex flex-column justify-content-xl-between h-100">
                                <div className="position-relative">
                                    <div className="experience_img pb-3 pb-lg-0 pb-md-0 py-2 order-1">
                                        <Image
                                            src={AppImages.experinece.group3}
                                            alt={altTags.group3 || "null"}
                                            className="img-fluid"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="experience_content text-center w-75 position-absolute top-50 start-50 translate-middle pt-2">
                                        <h6>{point3}</h6>
                                        <p className="mb-0">{pointPara3}</p>
                                    </div>
                                </div>
                                <div className="position-relative">
                                    <div className="experience_img pb-3 pb-lg-0 pb-md-0 py-2">
                                        <Image
                                            src={AppImages.experinece.group4}
                                            alt={altTags.group4 || "null"}
                                            className="img-fluid"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="experience_content text-center w-75 position-absolute top-50 start-50 translate-middle">
                                        <h6>{point4}</h6>
                                        <p className="mb-0">{pointPara4}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experienceBg">
                    <Image
                        src={AppImages.experinece.WhiteLogo}
                        alt={altTags.whiteLogo || "null"}
                        className="w-100 h-100"
                        width={200}
                        height={200}
                    />
                </div>
            </section>
        </>
    );
}

export default Experience;
