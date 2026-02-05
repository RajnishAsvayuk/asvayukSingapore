"use client";
import { Accordion, Container } from "react-bootstrap";

const FaqAccordion = ({ title, faqs }) => {
  return (
    <section className="smart_accordian-section py-1">
      <Container>
        <div className="sec_title text-start pt-5">
          <h2 className="fw-semibold text-capitalize mb-0 fs-1">{title}</h2>
        </div>
        <div className="accourdian my-2 py-4">
          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={index}
                className={`accordian-item item${index + 1}`}
              >
                <Accordion.Header className="bg-transparent faq">
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body>
                  <p>{faq.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FaqAccordion;
