import React, { useState } from "react";
import "./Client.css";

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
import Tino from "../../Assets/clients-logo/tino-logo-gtm.png";
import BNi from "../../Assets/clients-logo/Bni.png";
import Varam from "../../Assets/clients-logo/Varam.png";
import Vpr from "../../Assets/clients-logo/vpr-logo.png";
import Gb from "../../Assets/clients-logo/GB.png";
import Fuji from "../../Assets/clients-logo/Fuji.png";
import Jd from "../../Assets/clients-logo/JD Wood.png";
import { Link } from "react-router-dom";

const clients = [
  {
    src: HarrisNadar,
    alt: "Harris Nadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
    link: "/harrisnadar",
  },
  {
    src: AT,
    alt: "At Broadband",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: GT,
    alt: "GT Holidyas",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
    link: "/gtholidays",
  },
  {
    src: Titan,
    alt: "Titan World",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: TG,
    alt: "Tony & Guy",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Snowch,
    alt: "Snowch",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Arunachala,
    alt: "Arunachala College",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Pragurp,
    alt: "Pragurp Architecture",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: ColdAir,
    alt: "Cold Air Conditioning",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Delano,
    alt: "Delano Residency",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Fuji,
    alt: "Fuji Otis Monarch",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: DigiMart,
    alt: "Digi Mart",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Jd,
    alt: "JD Wood Industries",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Ayutha,
    alt: "Ayuta Caterer",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Hairways,
    alt: "Hairways Salon",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: BrandPartners,
    alt: "Brand Partners",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Platez,
    alt: "Platez",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: RajanCo,
    alt: "Rajan & Co",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Varam,
    alt: "Varam Hospital",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Gb,
    alt: "Greatest Bakery",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Sident,
    alt: "Si-dent Dental clinic",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: ClearEye,
    alt: "Clear Eye Optics",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Vpr,
    alt: "VPR construction",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Thasor,
    alt: "Thasor Musicals",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: AnandaBhavan,
    alt: "Ananda Bhavan",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: TGImage,
    alt: "Tony & Guy essensuals",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: DCS,
    alt: "DCS Technology",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Akshaya,
    alt: "Akshaya Catering ",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Karpagam,
    alt: "Karpagam Jwellers",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: MarthaGapharma,
    alt: "Marthahan pharma",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: TitanEyePlus,
    alt: "Titan Eye Plus",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: YMCA,
    alt: "YMCA",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Votto,
    alt: "Votto",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Spring,
    alt: "Spring Fertility Centre",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: FirstLoan,
    alt: "First Loan",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
  {
    src: Tino,
    alt: "Tino Engineering",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
    link: "/tinoengineering",
  },
  {
    src: BNi,
    alt: "BNI Kanya",
    link: "/harrisnadar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus maiores odio inventore est adipisci, provident quidem quam fugiat ipsam, delectus explicabo quisquam nesciunt repudiandae nobis excepturi ratione pariatur consequatur dolor! ",
  },
];

const Clients = () => {
  const [tooltip, setTooltip] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (client) => {
    setTooltip(client);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const handleMouseMove = (event) => {
    setTooltipPosition({
      x: event.clientX + window.scrollX + 20,
      y: event.clientY + window.scrollY - -20,
    });
  };
  return (
    <div className="clients-main">
      <h3 className="clients-head">Our Trusted Partners</h3>
      <div className="client-sec">
        {clients.map((client, index) => (
          <Link
            to={client.link}
            key={index}
            className="client-logo"
            onMouseEnter={() => handleMouseEnter(client)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <img src={client.src} alt={client.alt} />
          </Link>
        ))}
        {tooltip && (
          <div
            className="tooltip"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
          >
            <p className="tltip-head">{tooltip.alt}</p>
            <p>{tooltip.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
