import Link from 'next/link'

import Image from "next/image";
import { FaArrowRight, FaComment, FaRegClock, FaRegComment } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';


function CardNews({ singleBlogImg, time,comment, blogTitle, blogPara, CommentNum, viwer, urlSingleBlog }) {
    return (
        <>
            <div className="card card_img_blog">
                <div className="imageBlog overflow-hidden">
                    <Link href={urlSingleBlog}>
                        <Image src={singleBlogImg} className="card-img-top" alt="..." loading="lazy" width={736} height={368}/>
                    </Link>
                </div>
                <div className="card_body p-4">
                    <div className="card-body ps-3">
                        <div className="date text-start d-flex gap-3 mb-4">
                            <span className="d-flex align-items-center gap-2">
                                <FaRegClock />
                                {time}
                            </span>
                            <span className="d-flex align-items-center gap-2">
                               <FaRegComment />
                                {comment}
                            </span>
                        </div>
                        <div className="card_para_1 mt-2">
                            <p className="text-start news-heading">
                                <Link href={urlSingleBlog}>
                                    {blogTitle}
                                </Link>
                            </p>
                        </div>
                        <div className="card_para_2">
                            <p className="text-start">
                                {blogPara}
                            </p>
                        </div>
                        <div className='mt-4'>
                            <Link href={urlSingleBlog}>
                                    <button className='border-0 news-btn'>Read More  <FaArrowRight /> </button >
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardNews
