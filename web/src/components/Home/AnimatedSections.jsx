import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.css'; // Make sure to import your CSS here.

const AnimatedSections = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const images = document.querySelectorAll('.bg');
    const headings = gsap.utils.toArray('.section-heading');
    const outerWrappers = gsap.utils.toArray('.outer');
    const innerWrappers = gsap.utils.toArray('.inner');
    let currentIndex = -1;
    let animating = false;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    const wrap = gsap.utils.wrap(0, sections.length);

    const gotoSection = (index, direction) => {
      index = wrap(index);
      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => animating = false
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
        yPercent: i => i ? -100 * dFactor : 100 * dFactor
      }, { 
        yPercent: 0 
      }, 0)
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(headings[index], { 
        autoAlpha: 0, 
        yPercent: 150 * dFactor
      }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2"
      }, 0.2);

      currentIndex = index;
    };

    const handleScroll = (event) => {
      if (!animating) {
        if (event.deltaY < 0) {
          gotoSection(currentIndex - 1, -1);
        } else {
          gotoSection(currentIndex + 1, 1);
        }
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleScroll);

    gotoSection(0, 1);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <div>Animated Sections</div>
        <div><a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a></div>
      </header>

      <section className="first">
        <div className="outer">
          <div className="inner">
            <div className="bg one">
              <h2 className="section-heading">Scroll down</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="second">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Animated with GSAP</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="third">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">GreenSock</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Animation platform</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Keep scrolling</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedSections;
