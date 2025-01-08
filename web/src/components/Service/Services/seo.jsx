import React from "react";
import "./seo.css";
import { IoIosArrowForward } from "react-icons/io";
import pic1 from "../../../Assets/seo1.webp";
const SEO = () => {
  return (
    <div className="seo-main">
      <div className="seo">
        <div className="seo-banner"></div>

        <div className="seo-content1">
          <div className="seo-cnt">
            <div className="seo-smry">
              <div className="seo-smry-head">
                <h2>Award-Winning Agency in Nagercoil!</h2>
              </div>
              <div className="seo-smry-cnt">
                <p>
                  Our agency takes the extra mile to ensure your business
                  receives the attention it deserves. We strongly believe if
                  Content is King, then SEO is the queen of any website that is
                  trying to produce organic traffic. Both factors are
                  interdependent and essential for any successful SEO results.
                </p>
                <p>
                  The key to achieving long-lasting visibility, ranking and
                  organic traffic is Search Engine Optimization(SEO). We excel
                  in providing not only a user-friendly experience but also
                  scale-up revenue and conversions for our clients.
                </p>
                <p>
                  Any Digital Marketing Strategy involves SEO as its top
                  priority for inbound marketing objectives and we are here to
                  bridge that gap. 75% of the audience never scrolls past the
                  first page of search results. The only effective way to rank
                  on the first page is by creating an SEO-optimized website for
                  your business.
                </p>
              </div>
            </div>
            <div className="seo-smry-img">
              <img src={pic1} alt="seo" />
            </div>
          </div>

          <div className="seo-cnt">
            <div className="seo-smry-img">
              <img src={pic1} alt="seo" />
            </div>
            <div className="seo-smry">
              <div className="seo-smry-head">
                <h2>SEO Company in Chennai with expertise and guidance</h2>
              </div>
              <div className="seo-smry-cnt">
                <ul>
                  <li>
                    <IoIosArrowForward className="icn" />
                    Our in-depth analysis of your website is aimed at
                    identifying and correcting any SEO errors, leading to
                    improved visibility, traffic, and rankings through our
                    top-notch SEO services.
                  </li>
                  <li>
                    <IoIosArrowForward className="icn" />
                    We stay vigilant by regularly monitoring your website and
                    conducting frequent SEO assessments to prevent any
                    ranking-damaging flaws.
                  </li>
                  <li>
                    <IoIosArrowForward className="icn" />
                    As a leading <b>SEO Agency in Nagercoil</b>, we offer
                    SEO-optimized website content and blogs to keep your website
                    up-to-date with the latest industry updates.
                  </li>
                  <li>
                    <IoIosArrowForward className="icn" />
                    Our efforts to raise and maintain your domain authority will
                    help expand your business and online presence.
                  </li>
                  <li>
                    <IoIosArrowForward className="icn" />
                    Our successful client base is a testament to our
                    effectiveness, with many experiencing increased growth,
                    profits, and conversions through our SEO services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="seo-strategy"></div>
        <div className="seo-roadmap">
            <div className="seo-roadmap-head">
            <h2>How Artic'ans collate SEO Services </h2>

            </div>
        </div>

        <div className="seo-connect"></div>
      </div>

      <div className="seo-know">
        <div className="seo-know-img">
            <b>Do you know ?</b>
        </div>
        <div className="seo-know-cnts">
          <div className="seo-know-cnt">
            <div className="seo-know-percent">
              <span>61%</span>
            </div>
            <div className="seo-know-desc">
              of Google search results come through mobile devices.
            </div>
          </div>
          <div className="seo-know-cnt">
            <div className="seo-know-percent">
              <span>88%</span>
            </div>
            <div className="seo-know-desc">
              of Google search intent towards the local market.
            </div>
          </div>
          <div className="seo-know-cnt">
            <div className="seo-know-percent">
              <span>69%</span>
            </div>
            <div className="seo-know-desc">
              of the audience interacts with the local vendor within 24 hours of
              searching on their mobile device.
            </div>
          </div>
          <div className="seo-know-cnt">
            <div className="seo-know-percent">
              <span>100%</span>
            </div>
            <div className="seo-know-desc">
              of Small Business websites don't use the H1 tags. This is a big
              flaw based on SEO Perspective!!!
            </div>
          </div>
          <div className="seo-know-cnt">
            <div className="seo-know-percent">
              <span>46%</span>
            </div>
            <div className="seo-know-desc">
              of Smartphone users buy from a website that provides a simplified
              experience to their users.
            </div>
          </div>
          <div className="seo-know-cnt">
            <div className="seo-know-percent">
              <span>35%</span>
            </div>
            <div className="seo-know-desc">
              of the audience trusts companies that have mobile-optimized
              websites.
            </div>
          </div>
          <div className="seo-know-cnt">
            <div className="seo-know-percent">
              <span>55%</span>
            </div>
            <div className="seo-know-desc">
              The terms “Where to buy” and “Near me” searches have grown by
              200%, did you ensure your online presence yet?
            </div>
          </div>
          <div className="seo-know-cnt">
            <div className="seo-know-percent">
              <span>73%</span>
            </div>
            <div className="seo-know-desc">
              of Websites that make it to Google's first page have an average of
              1,447 words per page.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;
