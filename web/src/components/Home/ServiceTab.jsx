  import React, { useState } from "react";
import "./Home.css";
import Boy from "../../Assets/why-choose.png";
const ServiceTab = () => {
  const sections = [
    {
      id: "value",
      title: "Our Values",
      content: [
        {
          bold: "Excellence:",
          text: " Excellence is not just a goal; it's our standard. We believe that delivering exceptional results requires a relentless pursuit of quality, innovation, and continuous improvement.",
        },
        {
          bold: "Collaboration:",
          text: " We know that we can achieve more together than we can alone. Our collaborative approach ensures that we harness the collective strength of our team and our clients to create innovative, effective, and lasting solutions.",
        },
        {
          bold: "Accountability:",
          text: " Accountability is more than a value; it's a commitment we make to ourselves, our team, and our clients. We believe that by being accountable, we build trust, drive excellence, and achieve outstanding results.",
        },
      ],
    },
    {
      id: "goal",
      title: "Our Goal",
      content: [
        {
          bold: "Maximizing ROI:",
          text: " Maximizing ROI is not just a goal, it's our commitment to you. We combine strategic planning, targeted campaigns, continuous optimization, and transparent reporting to ensure that your investment yields the highest possible returns.",
        },
        {
          bold: "Brand Awareness:",
          text: " We understand that brand awareness is crucial for your business's growth and long-term success. Our comprehensive approach to building brand awareness ensures that your brand stands out in a crowded marketplace and resonates with your target audience.",
        },
        {
          bold: "Enhancing Customer Engagement:",
          text: " We believe that meaningful customer engagement is the key to building lasting relationships and driving business success. Our approach to enhancing customer engagement focuses on creating valuable, personalized interactions that resonate with your audience.",
        },
      ],
    },
    {
      id: "approach",
      title: "Our Approach",
      content: [
        {
          bold: "Strategic Planning:",
          text: " Strategic planning is at the core of what we do. Our thorough, data-driven approach ensures that every aspect of your digital marketing is aligned with your business goals and optimized for success.",
        },
        {
          bold: "Multichannel Integration:",
          text: " We are dedicated to delivering a seamless and integrated multichannel strategy that drives results. By harmonizing various digital marketing channels, we ensure that your message is consistent, your audience is engaged, and your goals are achieved.",
        },
        {
          bold: "Personalized Solutions:",
          text: " Personalized solutions are at the heart of what we do. By tailoring our strategies to meet your unique needs and preferences, we deliver highly relevant and effective marketing initiatives.",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(sections[0].id);

  return (
    <section id="service-tab" className="service-tab-section">
      <div className="container">
        <div className="service-tab-content">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-details-img">
                <img
                  src={Boy}
                  style={{ paddingTop: "30px" }}
                  width="500"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-tab-wrapper">
                <div className="section-title headline">
                  <div className="td-faq-body td-faq-body-sub-content">
                    <b style={{ fontWeight: 600, marginBottom: 40 }}>
                      The Reason
                    </b>
                    <br />
                    <p style={{ marginTop: 20 }}> Why Should Choose Us</p>
                  </div>
                </div>
                <div className="service-tab-area">
                  <div className="service-tab-btn state_tab clearfix ul-li">
                    <ul className="nav text-center reason-title">
                      {sections.map((section) => (
                        <li
                          key={section.id}
                          onClick={() =>
                            setActiveTab(
                              activeTab === section.id ? null : section.id
                            )
                          }
                          className={`nav-item ${
                            activeTab === section.id ? "active" : ""
                          }`}
                          style={{ cursor: "pointer", marginBottom: "10px" }}
                        >
                          <span className="sec-title">
                            {section.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tab-content">
                    {activeTab &&
                      sections
                        .filter((section) => section.id === activeTab)
                        .map((section) => (
                          <div key={section.id} className="td-faq-body-content">
                            <ul>
                              {section.content.map((item, index) => (
                                <li
                                  key={index}
                                  style={{
                                    cursor: "pointer",
                                    marginBottom: "20px",
                                  }}
                                >
                                  <b>{item.bold}</b> {item.text}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTab;
