import React, { useRef, useEffect } from "react";

import Nextpage from "../Case study/Nextpage";
import tebanner from "../../../Assets/case-study/tino-engineering/banner001.jpg";
import "./CaseStudy.css";

import harris from "../../../Assets/case-study/harris_nadar/harris.jpg";
import abt from "../../../Assets/case-study/harris_nadar/about (3).png";
import case1 from "../../../Assets/case-study/harris_nadar/case01.webp";
import case2 from "../../../Assets/case-study/harris_nadar/case02.webp";
import case3 from "../../../Assets/case-study/harris_nadar/case03.webp";
import case4 from "../../../Assets/case-study/harris_nadar/case04.webp";
import case5 from "../../../Assets/case-study/harris_nadar/case05.webp";
import case6 from "../../../Assets/case-study/harris_nadar/case06.webp";
// import faq1 from "../../../Assets/case-study/harris_nadar/grid-1.png";
// import faq2 from "../../../Assets/case-study/harris_nadar/grid-2.png";
// import faq3 from "../../../Assets/case-study/harris_nadar/grid-4.png";
import video from "../../../Assets/case-study/harris_nadar/video.mov";
const Hn = () => {
  const cases = [case1, case2, case3, case4, case5, case6];

  // const faqImgs = [faq1, faq2, faq3];

  const videos = [
    "https://www.youtube.com/embed/OaVf6K1RI3o?si=3dB1pnnKnh31G9fB",
    "https://www.youtube.com/embed/RgHJ4OXey_w?si=hAzcEIHuphTXcA7g",
    "https://www.youtube.com/embed/SgsneAdmjBY?si=prlpEybalQt_wmLm",
  ];
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);
  return (
    <div className="hn">
      <div className="hn-main">
        <div className="hn-banner">
          <img src={harris} alt="bg-banner" />
          {/* <div className="image"></div> */}
        </div>

        <div className="hn-cnt">
          <div className="hn-cnt-img">
            <img src={abt} alt="about" />
          </div>

          <div className="hn-cntnts">
            <div className="hn-cntnts-head">
              <span>What We Create?</span>
              <h2>Simple! We Create Brand Awareness!</h2>
            </div>
            <div className="hn-cntnt">
              <span>
                We are passionate about our work. Our designers stay ahead of
                the curve to provide engaging and user-friendly website designs
                to make your business stand out with your business pattern.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, est!
              </span>
              <br />
              <br />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                veniam ipsam magnam blanditiis minus maiores excepturi, libero
                eveniet officiis, exercitationem necessitatibus nostrum qui
                corporis optio explicabo! Recusandae illo facilis repellat.
              </span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="hn-gallery">
          {cases.map((caseImg, index) => (
            <div key={index} className="hn-case">
              <img src={caseImg} alt={`case ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        {/* <div className="hn-faq">
          <div className="hn-faq-main">
            <div className="hn-faq-head">
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="hn-faq-img">
              <div className="gp"></div>
              <div className="faq-img">
                <img src={faqImgs[0]} alt="faq" />
              </div>
              <div className="faq-img1">
                <div className="faq-img2">
                  <img src={faqImgs[2]} alt="faq" />
                </div>
                <div className="faq-img2">
                  <img src={faqImgs[1]} alt="faq" />
                </div>
              </div>
              <div className="gp"></div>
            </div>

            <div className="hn-faq-cnts">
              <span>
                We are passionate about our work. Our designers stay ahead of
                the curve to provide engaging and user-friendly website designs
                to make your business stand out with your business pattern.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
        </div> */}
         
        {/* Valentine-sec */}
        <div className="hn-vale">
          <div className="hn-vale-main">
            <div className="hn-vale-sec">
              <div className="hn-vale-img">
                <video width={100} ref={videoRef} src={video} autoPlay loop muted>
                    Your browser does not support the video.
                  </video>
              </div>
            </div>
            <div className="hn-vale-sec1">
              <div className="hn-vale-sec1-quote">
                <h2>
                  "Jewelry is like the perfect spice – it always complements
                  what's already there."
                </h2>
              </div>
              <div className="hn-vale-sec1-person">
                <p>– Diane Von Furstenberg </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="hn-video-sec">
          <div className="hn-video-main">
            {videos.map((videoUrl, index) => (
              <div
                key={index}
                className={`hn-video${index === 0 ? "" : "-min"}`}
              >
                <iframe
                  width="100%"
                  height="315"
                  src={videoUrl}
                  title={`YouTube video player ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
  
        <Nextpage
          title="Tino Engineering"
          imageUrl={tebanner}
          altText="Tino Banner"
          route="/tinoengineering"
        />
      </div>
    </div>
  );
};

export default Hn;
