import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

import Akshaya from "../../Assets/clients-logo/akshaya.jpg";
import AnandaBhavan from "../../Assets/clients-logo/Ananda-bhavan.png";
import Arunachala from "../../Assets/clients-logo/Arunachala-logo.png";
import AT from "../../Assets/clients-logo/at.png";
import Ayutha from "../../Assets/clients-logo/Ayutha.png";
import BrandPartners from "../../Assets/clients-logo/Brand-partners.png";
import ClearEye from "../../Assets/clients-logo/Clear-eye.png";
import ColdAir from "../../Assets/clients-logo/Cold-air.png";
import DCS from "../../Assets/clients-logo/dcs.jpg";
import Delano from "../../Assets/clients-logo/Delano.png";
import DigiMart from "../../Assets/clients-logo/Digi-Mart.png";
import FirstLoan from "../../Assets/clients-logo/first-loan.jpg";
import GT from "../../Assets/clients-logo/GT.png";
import Hairways from "../../Assets/clients-logo/Hairways.png";
import HarrisNadar from "../../Assets/clients-logo/Harris Nadar Logo BlaCK.png";
import Karpagam from "../../Assets/clients-logo/karpagam.jpg";
import MarthaGapharma from "../../Assets/clients-logo/marthagapharma.jpg";
import Platez from "../../Assets/clients-logo/Platez.png";
import Pragurp from "../../Assets/clients-logo/Pragurp.jpg";
import RajanCo from "../../Assets/clients-logo/Rajan-co.png";
import Sident from "../../Assets/clients-logo/Sident.png";
import Snowch from "../../Assets/clients-logo/snowch-logo.png";
import Spring from "../../Assets/clients-logo/spring-logo.png";
import TG from "../../Assets/clients-logo/tg-logo.png";
import TGImage from "../../Assets/clients-logo/tg.jpg";
import Thasor from "../../Assets/clients-logo/thasor-logo.png";
import Titan from "../../Assets/clients-logo/Titan.jpg";
import TitanEyePlus from "../../Assets/clients-logo/titaneyeplus.jpg";
import Votto from "../../Assets/clients-logo/votto.jpg";
import YMCA from "../../Assets/clients-logo/ymca.jpg";
import BNi from "../../Assets/clients-logo/Bni.png";
import Varam from "../../Assets/clients-logo/Varam.png";
import Vpr from "../../Assets/clients-logo/vpr-logo.png";
import Gb from "../../Assets/clients-logo/GB.png";
import Fuji from "../../Assets/clients-logo/Fuji.png";
import Jd from "../../Assets/clients-logo/JD Wood.png";

import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

const clients = [
  { src: HarrisNadar, alt: "Harris Nadar" },
  { src: AT, alt: "AT" },
  { src: GT, alt: "GT" },
  { src: Titan, alt: "Titan" },
  { src: TG, alt: "TG" },
  { src: Snowch, alt: "Snowch" },
  { src: Arunachala, alt: "Arunachala" },
  { src: Pragurp, alt: "Pragurp" },
  { src: ColdAir, alt: "Cold Air" },
  { src: Delano, alt: "Delano" },
  { src: DigiMart, alt: "Digi Mart" },
  { src: BNi, alt: "BNI Kanya" },
  { src: Varam, alt: "Varam Hospital" },
  { src: Ayutha, alt: "Ayutha" },
  { src: Hairways, alt: "Hairways" },
  { src: BrandPartners, alt: "Brand Partners" },
  { src: Platez, alt: "Platez" },
  { src: RajanCo, alt: "Rajan Co" },
  { src: Sident, alt: "Sident" },
  { src: ClearEye, alt: "Clear Eye" },
  { src: Thasor, alt: "Thasor" },
  { src: AnandaBhavan, alt: "Ananda Bhavan" },
  { src: TGImage, alt: "TG" },
  { src: DCS, alt: "DCS" },
  { src: Akshaya, alt: "Akshaya" },
  { src: Karpagam, alt: "Karpagam" },
  { src: MarthaGapharma, alt: "Martha Gapharma" },
  { src: TitanEyePlus, alt: "Titan Eye Plus" },
  { src: YMCA, alt: "YMCA" },
  { src: Votto, alt: "Votto" },
  { src: Spring, alt: "Spring" },
  { src: FirstLoan, alt: "First Loan" },

  { src: Vpr, alt: "VPR Construction" },
  { src: Gb, alt: "Greatest Bakery" },
  { src: Jd, alt: "JD Wood " },
  { src: Fuji, alt: "Fuji" },
];

const App = () => {
  const setting1 = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    draggable: false,
  };

  const setting2 = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    pauseOnHover: false,
    arrows: false,
    draggable: false,
  };

  return (
    <div className="mainContainer">
      <h3 className="client-head">Our Trusted Partners</h3>
      <div className="sliders">
        <Slider {...setting1}>
          {clients.map((client, index) => (
            <div key={index} className="client-slider">
              <img src={client.src} width={200} alt={client.alt} />
            </div>
          ))}
        </Slider>

        <Slider {...setting2}>
          {clients.map((client, index) => (
            <div key={index} className="client-slider">
              <img src={client.src} width={200} alt={client.alt} />
            </div>
          ))}
        </Slider>

        {/* <Slider {...setting1}>
          {clients.map((client, index) => (
            <div key={index} className="client-slider">
              <img src={client.src} width={200} alt={client.alt} />
            </div>
          ))}
        </Slider>

        <Slider {...setting2}>
          {clients.map((client, index) => (
            <div key={index} className="client-slider">
              <img src={client.src} width={200} alt={client.alt} />
            </div>
          ))}
        </Slider> */}
      </div>

      <div className="ourclients">
        <div className="clntlink">
          <Link to="/clients" aria-label="View Clients" className="clientlink">
            <div className="cta">
              <span>View all clients</span>
              <RiArrowRightLine className="svg" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
