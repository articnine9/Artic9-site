import React from "react";
import "./CaseStudy.css";
import Counter from "../Case study/Counter";
import Nextpage from "../Case study/Nextpage";
import gtbanner from "../../../Assets/case-study/gt-holidays/gt-banner.jpg";
import abtpic from "../../../Assets/case-study/gt-holidays/about-gt.webp";
import secimage1 from "../../../Assets/case-study/gt-holidays/identity-img.webp";
import secimage2 from "../../../Assets/case-study/gt-holidays/identity-img2.webp";
import post1 from "../../../Assets/case-study/gt-holidays/instagram01.webp";
import post2 from "../../../Assets/case-study/gt-holidays/instagram02.webp";
import post3 from "../../../Assets/case-study/gt-holidays/instagram03.webp";
import hnbanner from "../../../Assets/harris2.png";
const Gt = () => {
  return (
    <div className="gt">
      <div className="gt-main">
        <div className="gt-banner">
          <img src={gtbanner} alt="banner" />
          <div className="gt-video">
            <div className="video-div">
              <iframe
                className="videos"
                src="https://www.youtube.com/embed/EJPlq41Yfck?si=k0Z_EAHzJRSFRSjO&controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video-div">
              <iframe
                className="videos"
                src="https://www.youtube.com/embed/Orh3rWsLZF4?si=A1-FkT3g7_6Ou2dJ&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-div">
              <iframe
                className="videos"
                src="https://www.youtube.com/embed/LxVT5G5NZN0?si=ey2FwCFkBIxmEfOw&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="gt-abt-section">
          <div className="gt-abt">
            <div className="gt-abt-img zoom-in-out-box">
              <img src={abtpic} alt="gt" />
            </div>
            <div className="gt-abt-cnt">
              <div className="gt-abt-cnt-head">
                <h2>About GT Holidays</h2>
              </div>
              <div className="gt-cnt">
                <p>
                  Established in 1968, GT Holidays is owned and managed by the
                  Sangam Group of Hotels. The Sangam Group is recognized as one
                  of the largest hotel chains in Tamil Nadu. Along with the
                  Group, the GT Holidays strives hard for ultimate success and
                  innovation.
                </p>
                <p>
                  We are an ISO 9001: 2008 certified company that aims to set
                  clear goals, fix priorities, and organize the resources
                  effectively. GT Holidays enables you to discover a new
                  destination and offers unique ideas for your travel.
                </p>
                <p>
                  Our travel company offers a complete business travel
                  environment for MICE (Meetings, Incentives, Conferences, and
                  Events) services at an affordable cost. We provide a wide
                  range of holiday tour packages for all domestic and
                  international destinations worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="gt-section">
          <div className="gt-sec-cnt">
            <h2>
              We Register Brand Identity To Get Unique
              <b>
                <hr />
              </b>
            </h2>

            <div className="gt-sec-image">
              <div className="gt-img">
                <img src={secimage1} alt="sec-image" />
              </div>
              <div className="gt-img">
                <img src={secimage2} alt="sec-image" />
              </div>
            </div>

            <div className="gt-blog">
              <h5>Organic Traffic Growth:</h5>
              <p>
                Over the past month, we have seen a significant increase in
                organic traffic to your website. Our targeted SEO strategies and
                optimizations have resulted in a growth in organic sessions
                compared to the previous month.
              </p>
              <br />

              <h5>Keyword Ranking Improvements:</h5>
              <p>
                Our team has been diligently working on improving your website's
                search engine rankings. We're delighted to report your target
                keywords have experienced positive movements, with 2 keywords
                ranking on the first page of search results.
              </p>
              <br />

              <h5>Content Updates:</h5>
              <p>
                Content continues to play a crucial role in SEO success. In Nov
                2023, we published high-quality blog posts and optimized pages
                on your website. These efforts have contributed to improved
                search visibility and user engagement.
              </p>
              <br />

              <h5>Backlink Acquisition:</h5>
              <p>
                Our link-building efforts have been fruitful, with a lot of
                high-quality backlinks acquired from authoritative websites.
                These backlinks enhance your website's authority and credibility
                in the eyes of search engines.
              </p>
              <br />

              <h5>Technical SEO Enhancements:</h5>
              <p>
                We have conducted a comprehensive audit and made necessary
                technical SEO improvements to ensure your website's optimal
                performance. This includes addressing issues related to site
                speed, mobile-friendliness, and site architecture.
              </p>
            </div>

            <div className="gt-post">
              <div className="post-img">
                <img src={post1} alt="post" />
              </div>
              <div className="post-img">
                <img src={post2} alt="post" />
              </div>
              <div className="post-img">
                <img src={post3} alt="post" />
              </div>
            </div>
          </div>
        </div>

        <Counter />

        <Nextpage
          title="Harris Nadar"
          imageUrl={hnbanner}
          altText="Harris Nadar Banner"
          route="/harrisnadar"
        />
      </div>
    </div>
  );
};

export default Gt;
