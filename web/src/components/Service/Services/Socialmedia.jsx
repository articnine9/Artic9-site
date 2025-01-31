import React from "react";
import "./Socialmedia.css";
import Roadmap from "./Timeline";
import { IoIosArrowForward } from "react-icons/io";
import pic1 from "../../../Assets/seo1.webp";
import pic2 from "../../../Assets/lead2.png";
import { useNavigate } from "react-router-dom";
const SEO = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="seo-main">
      <div className="seo-banner">
        <div className="seo-bnr">
          <div className="seo-gp"></div>
          <h1>Social Media Marketing</h1>
        </div>
      </div>

      <div className="seo">
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
      </div>

      <div className="seo-strategy">
        <div className="seo-strategy-main">
          <div className="seo-strategy-head">
            <h3>Social media marketing</h3>
            <p>
              4.76 billion social media users globally over 59% of the world's
              population.
            </p>
          </div>
          <div className="seo-strategy-cnt">
            <div className="seo-strategy-box">
              <div className="seo-strategy-box-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64px"
                  viewBox="0 -960 960 960"
                  width="64px"
                  fill=" #ffca00"
                >
                  <path d="M280-80q62 0 101.5-31t60.5-91q17-50 32.5-70t71.5-64q62-50 98-113t36-151q0-119-80.5-199.5T400-880q-119 0-199.5 80.5T120-600h80q0-85 57.5-142.5T400-800q85 0 142.5 57.5T600-600q0 68-27 116t-77 86q-52 38-81 74t-43 78q-14 44-33.5 65T280-160q-33 0-56.5-23.5T200-240h-80q0 66 47 113t113 47Zm432-210q59-60 93.5-139.5T840-600q0-92-34.5-172T712-912l-58 56q50 50 78 115.5T760-600q0 74-28 139t-78 115l58 56ZM400-500q42 0 71-29.5t29-70.5q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 41 29 70.5t71 29.5Z" />
                </svg>
                <h4>Observe</h4>
              </div>
              <div className="seo-strategy-box-gap">
                <hr />
              </div>
              <div className="seo-strategy-box-cnt">
                <p>
                  We take a broad approach to studying consumer insights,
                  enabling us to align their brand better with their
                  expectations.
                </p>
              </div>
            </div>
            <div className="seo-strategy-box">
              <div className="seo-strategy-box-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64px"
                  viewBox="0 -960 960 960"
                  width="64px"
                  fill=" #ffca00"
                >
                  <path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z" />
                </svg>
                <h4>Understand</h4>
              </div>
              <div className="seo-strategy-box-gap">
                <hr />
              </div>
              <div className="seo-strategy-box-cnt">
                <p>
                  We combine a deep understanding of brand identity with
                  innovative strategies to help our clients soar to new heights
                  in their business ventures.
                </p>
              </div>
            </div>
            <div className="seo-strategy-box">
              <div className="seo-strategy-box-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64px"
                  viewBox="0 -960 960 960"
                  width="64px"
                  fill=" #ffca00"
                >
                  <path d="M280-80q62 0 101.5-31t60.5-91q17-50 32.5-70t71.5-64q62-50 98-113t36-151q0-119-80.5-199.5T400-880q-119 0-199.5 80.5T120-600h80q0-85 57.5-142.5T400-800q85 0 142.5 57.5T600-600q0 68-27 116t-77 86q-52 38-81 74t-43 78q-14 44-33.5 65T280-160q-33 0-56.5-23.5T200-240h-80q0 66 47 113t113 47Zm432-210q59-60 93.5-139.5T840-600q0-92-34.5-172T712-912l-58 56q50 50 78 115.5T760-600q0 74-28 139t-78 115l58 56ZM400-500q42 0 71-29.5t29-70.5q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 41 29 70.5t71 29.5Z" />
                </svg>
                <h4>Implement</h4>
              </div>
              <div className="seo-strategy-box-gap">
                <hr />
              </div>
              <div className="seo-strategy-box-cnt">
                <p>
                  We use a blend of creative storytelling and customized
                  strategies in posts and videos to drive exceptional results
                  and high engagement.
                </p>
              </div>
            </div>
            <div className="seo-strategy-box">
              <div className="seo-strategy-box-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64px"
                  viewBox="0 -960 960 960"
                  width="64px"
                  fill=" #ffca00"
                >
                  <path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z" />
                </svg>
                <h4>Optimize</h4>
              </div>
              <div className="seo-strategy-box-gap">
                <hr />
              </div>
              <div className="seo-strategy-box-cnt">
                <p>
                  With regular performance checks, we refine our social media
                  methods to ensure they effectively capture and retain audience
                  interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seo1">
        <div className="seo-roadmap">
          <div className="seo-roadmap-head">
            <h2>Discover What Clicks: Competitor Insights </h2>
            <p>
              How Articnine interact with audience leveraging competitor
              analysis and executing brand awareness campaign for effective
              social media marketing
            </p>
          </div>
          <div className="seo-roadmap-cnt">
            <Roadmap />
          </div>
        </div>
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

      <div className="seo2">
        <div className="seo-connect">
          <div className="seo-connect-cnts">
            <div className="seo-connect-head">
              <h4>
                Talk <b>With us</b>
              </h4>
            </div>
            <div className="seo-connect-cnt">
              <p>
                We believe in the power of communication. Whether you have a
                question, need a consultation or just want to discuss the latest
                trends in digital marketing, we're here to help.
              </p>
              <p>
                We're excited to connect with you and explore how we can help
                elevate your digital presence. Let's start the conversation
                today!
              </p>
            </div>
            <button onClick={handleClick}>Say Hi! 👋</button>
          </div>

          <div className="seo-connect-img">
            <img src={pic2} alt="lead" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;
