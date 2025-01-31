import React from "react";
import "./Timeline.css";
import pic from "../../../Assets/seo.jpg";
const Timeline = () => {
  return (
    <div className="containers">
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            {/* Step 1 */}
            <li>
              <div className="steps">
                <h4>Step 1</h4>
              </div>
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src={pic}
                  alt="Step 1"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Identify What Works:</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Study competitors' top-performing posts (likes, shares,
                    comments). Note content themes, tone, and style of expressed
                    view. Try to continuously track the results in Instagram,
                    Facebook, Twitter, and TikTok.
                  </p>
                </div>
              </div>
              <div className="line"></div>
            </li>
            {/* Step 2 */}
            <li className="timeline-inverted">   
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src={pic}
                  alt="Step 2"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="heading">Discover Gaps:</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Identify unmet needs or overlooked topics in their strategy.
                    Use customer insights to create unique, engaging content and
                    what the audience expects from brand owners
                  </p>
                </div>
              </div>
              <div className="line"></div>
              <div className="steps1">
                <h4>Step 2</h4>
              </div>
            </li>
            {/* Step 3 */}
            <li>
              <div className="steps">
                <h4>Step 3</h4>
              </div>
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src={pic}
                  alt="Step 3"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Monitor Engagement Tactics:</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Observe how competitors respond to comments, questions, and
                    reviews. Are they quick, helpful, or interactive?
                  </p>
                </div>
              </div>
              <div className="line"></div>
            </li>
            {/* Step 4 */}
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src={pic}
                  alt="Step 4"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Strong Brand Voice</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    A strong, consistent brand voice makes your communication
                    instantly recognizable and helps build familiarity with your
                    audience and fosters long-term loyalty.
                  </p>
                </div>
              </div>
              <div className="line"></div>
              <div className="steps1">
                <h4>Step 4</h4>
              </div>
            </li>
            {/* Step 5 */}
            <li>
              <div className="steps">
                <h4>Step 5</h4>
              </div>
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src={pic}
                  alt="Step 5"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Content Planning</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Organize your content into Value packed one by creating
                    categories of:-
                    <ul>
                      <li>
                        <b>Informational</b> - tips, how-to-do
                      </li>
                      <li>
                        <b>Entertaining</b> - memes, challenges
                      </li>
                      <li>
                        <b>Promotional</b> - product launches, and offers
                      </li>
                      <li>
                        <b>User-generated content</b> - testimonials, reviews
                      </li>
                      <li>
                        <b> Content calenda</b>
                        r- Outline what type of content will be posted on each
                        platform, specifying themes and formats
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
