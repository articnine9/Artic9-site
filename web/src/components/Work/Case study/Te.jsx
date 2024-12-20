import React from "react";
import Counter from "./Counter";
import Nextpage from "./Nextpage";
import "./CaseStudy.css";
import tino from "../../../Assets/case-study/tino-engineering/banner001.jpg";
import abt from "../../../Assets/case-study/tino-engineering/about-tino.webp";
import prcss1 from "../../../Assets/case-study/tino-engineering/process01.png";
import prcss2 from "../../../Assets/case-study/tino-engineering/process02.png";
import prcss3 from "../../../Assets/case-study/tino-engineering/process03.png";
import prcss4 from "../../../Assets/case-study/tino-engineering/process04.png";
import hnbanner from '../../../Assets/harris2.png'

const Te = () => {
  return (
    <div className="te">
      <div className="te-main">
        <div className="te-banner">
          <img src={tino} alt="bg-banner" />
        </div>

        <div className="te-cnt">
          <div className="te-cnt-img">
            <img src={abt} alt="about" />
          </div>

          <div className="te-cntnts">
            <div className="te-cntnts-head">
              <span>Let's Lookup</span>
              <h2>About Tino Engineering</h2>
            </div>
            <div className="te-cntnt">
              <span>
                TINO® ENGINEERING PVT. LTD, founded in 1997 in Nagercoil (Tamil
                Nadu, India), is a well-known manufacturer and supplier of
                high-quality panel boards such as PLC AND SCADA, LT Panel
                Fabricators, Harmonic Filter Panels, Automatic Capacitor Panels,
                and Electrical Panel Boards.
              </span>
              <br />
              <br />
              <span>
                The products are produced with quality raw materials that
                reflect our integrity and reliability in the market, by
                international standards of excellence.
              </span>
            </div>
          </div>
        </div>

        <div className="te-section">
          <div className="te-sec-cnt">
            <h2>
              We Register Brand Identity To Get Unique
              <b>
                <hr />
              </b>
            </h2>

            <div className="te-blog">
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

            <div className="te-post">
              <div className="te-post-img">
                <img src={prcss1} alt="post" />
              </div>
              <div className="te-post-img">
                <img src={prcss2} alt="post" />
              </div>
              <div className="te-post-img">
                <img src={prcss3} alt="post" />
              </div>
              <div className="te-post-img">
                <img src={prcss4} alt="post" />
              </div>
            </div>
          </div>
        </div>

        <Counter />

        <Nextpage
          title="Harris Nadar"
          imageUrl={hnbanner}
          altText="Harris Nadar Banner"
          route='/gtholidays'
        />
      </div>
    </div>
  );
};

export default Te;
