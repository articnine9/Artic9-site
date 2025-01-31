import React from 'react';
import "../Work.css";

const Card = ({ videoPoster, videoSrc, imgSrc, title, description, link }) => {
  return (
    <div className="card card-column intersected">
      <div className="content">
        <a className="card-video" href={link}>
          {title}
        </a>

        <div className="card-video-inner">
          <video
            poster={videoPoster}
            muted
            preload="metadata"
            loop
            playsInline
            src={videoSrc}
            className="loaded"
          />
          <img
            src={imgSrc}
            alt={`${title} case cover`}
            width="1600"
            height="1200"
            loading="lazy"
          />
        </div>
        <span className="card-link">{title}</span>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const ListBoard = () => {
  const cardsData = [
    {
      title: "Firefox",
      link: "/firefox-brand-redesign/",
      videoPoster: "https://www.datocms-assets.com/22695/1728340476-firefox_preview.jpg",
      videoSrc: "https://www.datocms-assets.com/22695/1728323207-cover-render-1-3.mp4",
      imgSrc: "https://www.datocms-assets.com/22695/1728340476-firefox_preview.jpg",
      description: "Official Firefox rebrand",
    },
    {
      title: "Salesforce",
      link: "https://www.lightningdesignsystem.com/",
      videoPoster: "https://www.datocms-assets.com/22695/1729108084-salesforce-preview-still-1600-1200.jpg",
      videoSrc: "https://www.datocms-assets.com/22695/1729108103-salesforce-preview-animation-1600-1200.mp4",
      imgSrc: "https://www.datocms-assets.com/22695/1729108084-salesforce-preview-still-1600-1200.jpg",
      description: "Developing micro-interactions for the Lightning Design System",
    },
    {
      title: "Clearbit",
      link: "/clearbit-website-transformation/",
      videoPoster: "https://www.datocms-assets.com/22695/1729286827-clearbit-preview-still-1600-1200.jpg",
      videoSrc: "https://www.datocms-assets.com/22695/1729287088-clearbit-preview-animation-1600-1200-2.mp4",
      imgSrc: "https://www.datocms-assets.com/22695/1729286827-clearbit-preview-still-1600-1200.jpg",
      description: "We redesigned Clearbit’s website, boosting engagement and contributing to their $150M acquisition by Hubspot.",
    },
    {
      title: "Turo",
      link: "/support-portal-redesign/",
      videoPoster: "https://www.datocms-assets.com/22695/1731433497-turo-cover-still-mockup-1600-1200.jpg",
      videoSrc: "https://www.datocms-assets.com/22695/1731433517-turo-cover-animation-1600-1200.mp4",
      imgSrc: "https://www.datocms-assets.com/22695/1731433497-turo-cover-still-mockup-1600-1200.jpg",
      description: "Redesign of the support portal and 30% improvement in users’ ability to get the answers they want",
    },
    {
      title: "Netflix",
      link: "",
      videoPoster: "https://www.datocms-assets.com/22695/1730481559-netflix-cover-still-1600-1200.jpg",
      videoSrc: "https://www.datocms-assets.com/22695/1730481564-netflix-cover-animation-1600-1200.mp4",
      imgSrc: "https://www.datocms-assets.com/22695/1730481559-netflix-cover-still-1600-1200.jpg",
      description: "Series of visual concepts for improving the user experience",
    },
    {
      title: "Citrix",
      link: "https://www.citrix.com/",
      videoPoster: "",
      videoSrc: "",
      imgSrc: "https://www.datocms-assets.com/22695/1729108034-citrix_cover.jpg",
      description: "Iconography for a secure workspace software company with over 16 million cloud users",
    },
    {
      title: "Descript",
      link: "/descript-brand-identity-and-web-design/",
      videoPoster: "https://www.datocms-assets.com/22695/1731438713-descript-cover-still-1600-1200.jpg",
      videoSrc: "https://www.datocms-assets.com/22695/1731438766-descript-cover-animation-1600-1200.mp4",
      imgSrc: "https://www.datocms-assets.com/22695/1731438713-descript-cover-still-1600-1200.jpg",
      description: "Our team collaborated with Descript to develop their brand identity and website, driving brand recognition, user engagement and reach.",
    },
    {
      title: "Stripe",
      link: "",
      videoPoster: "https://www.datocms-assets.com/22695/1729873267-stripe-cover-still-1600-1200.png",
      videoSrc: "https://www.datocms-assets.com/22695/1729873277-stripe-cover-animation-1600-1200.mp4",
      imgSrc: "https://www.datocms-assets.com/22695/1729873267-stripe-cover-still-1600-1200.png",
      description: "Iconography design for a payments infrastructure company with 250M+ API requests per day",
    },
  ];

  return (
    <div className="listboard">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          link={card.link}
          videoPoster={card.videoPoster}
          videoSrc={card.videoSrc}
          imgSrc={card.imgSrc}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default ListBoard;
