import React from 'react'
import { Form } from 'react-bootstrap'

const ContactFormComp = () => {
  return (
   <>
    <div className="contact_form_info form-container">
        <h2 className='fs-5 text-success pb-0'>Let’s start the discussion.</h2>
                          <Form className="p-0">
                                                    <div className=" pt-0 pt-lg-2 pt-md-3 pb-0 ">
                                                        <div className="form-group col-lg-12 pt-2 pt-lg-0 pt-md-0">
                                                            <input type="text" className="form-control" id="inputName"
                                                                placeholder="Enter your company name" />
                                                        </div>
                                                        <div className="form-group col-lg-12 pt-2 pt-lg-0 pt-md-0">
                                                            <input type="email" className="form-control" id="inputEmail"
                                                                placeholder="Enter your email" />
                                                        </div>
                                                    </div>
                                                    <div className=" pt-0   pb-0 ">
                                                        <div className="form-group col-lg-12  pt-lg-0 pt-md-0">
                                                            <input type="text" className="form-control" id="inputName"
                                                                placeholder="Moible Number" />
                                                        </div>
                                                        <div className="form-group col-lg-12 pt-2 pt-lg-0 pt-md-0">
                                                            <select className="w-100 ">
                                                                <option value="UI UX Design">UI UX Design</option>
                                                                <option value="Mobile App Development">Mobile App Development</option>
                                                                <option value="Social Media Marketing">Social Media Marketing</option>
                                                                <option value="Search Engine Optimization">Search Engine Optimization</option>
                                                                <option value="Website Development">Website Development</option>
                                                                <option value="WooCommerce">WooCommerce</option>
                                                                <option value="Ecommerce Development">Ecommerce Development</option>
                                                                <option value="Block Chain Development">Block Chain Development</option>
                                                                <option value="Magento Development">Magento Development</option>
                                                                <option value="React Native Development">React Native Development</option>
                                                                <option value="Saas Development">Saas Development</option>
                                                                <option value="Shopify Development">Shopify Development</option>
                                                                <option value="Pay Per Click">Pay Per Click</option>
                                                                <option value="Software Development">Software Development</option>
                                                                <option value="Laravel Development">Laravel Development</option>
                                                                <option value="AR/VR Development">AR/VR Development</option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-row message-group w-100 pt-2 pb-0 pb-lg-4 pb-md-4">
                                                        <div className="form-group col-lg-12 py-3 py-lg-0 py-md-0">
                                                            <textarea className="form-control" id="inputMessage" rows="5"
                                                                placeholder="Enter your message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12 ">
                                                            <button type="submit" className="submit_btn">Send Message</button>
                                                        </div>
                                                    </div>
                                                </Form>
                        </div>
   </>
  )
}

export default ContactFormComp
