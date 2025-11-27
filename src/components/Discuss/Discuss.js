import Link from 'next/link'
import React from 'react'

const Discuss = ({
  heading,btn
}) => {
  return (
    <>
     <section className="readTransform">
            <div className="container">
              <div className="row">
                <div className="readTransform_content text-center">
                  <h2 className="pb-4 mb-0 fw-semibold">
                    {heading}
                  </h2>
                  <button
                    className="btnHome bg-white d-inline-block text-dark px-4 fs-5 rounded-1 fw-medium border-0 outline-0"
                   
                  >
                  <Link href={"/contact-us"}>
                    <p className="pt-3 text-dark fw-semibold">{btn}</p>
                  </Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Discuss
