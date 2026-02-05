import Link from 'next/link'

import Image from "next/image";
import { FaRegClock } from 'react-icons/fa';


function CardBlog({ singleBlogImg, time, blogTitle, blogPara, CommentNum,alt, viwer, urlSingleBlog }) {
    return (
        <>
            <div className="card card_img_blog ">
                <div className="imageBlog overflow-hidden">
                    <Link href={urlSingleBlog}>
                        <Image src={singleBlogImg} className="card-img-top" alt={alt} loading="lazy" width={350} height={177}/>
                    </Link>
                </div>
                <div className="card_body">
                    <div className="card-body ps-3">
                        <div className="date text-start">
                            <span>
                                <FaRegClock />
                                {time}
                            </span>
                        </div>
                        <div className="card_para_1 mt-2">
                            <p className="text-start">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBlog
