import React from "react";

// IndustryCard Component
const IndustryCard = ({ title, imageSrc, altText, reverseOrder = false }) => (
  <div className="industry-card">
    {reverseOrder ? (
      // If reverseOrder is true, render image first, then title
      <>
        <figure className="wp-block-image size-full industry-img">
          <img
            width="145"
            height="203"
            decoding="async"
            src={imageSrc}
            alt={altText}
            className="wp-image"
          />
        </figure>
        <h4 className="wp-block-heading has-text-align-center">{title}</h4>
      </>
    ) : (
      // Default order: title first, then image
      <>
        <h4 className="wp-block-heading has-text-align-center">{title}</h4>
        <figure className="wp-block-image size-full industry-img">
          <img
            width="145"
            height="203"
            decoding="async"
            src={imageSrc}
            alt={altText}
            className="wp-image"
          />
        </figure>
      </>
    )}
  </div>
);

// Industries Component
const Industries = () => {
  return (
    <div className="industries-container">
      {/* First four cards with default order (title above image) */}
      <IndustryCard
        title="Travel"
        imageSrc="https://www.zinavo.com/images/industry/travel.png"
        altText="Travel and tourism website design and development company in Bangalore"
      />
      <IndustryCard
        title="Logistics"
        imageSrc="https://www.zinavo.com/images/industry/logistics.png"
        altText="Logistics website design and development in Bangalore"
      />
      <IndustryCard
        title="Restaurant"
        imageSrc="https://www.zinavo.com/images/industry/restaurant.png"
        altText="Restaurant web portal development company in Bangalore"
      />
      <IndustryCard
        title="Industries"
        imageSrc="https://www.zinavo.com/images/industry/industries.png"
        altText="Industrial web design and development company in Bangalore"
      />

      {/* Last four cards with image first (using reverseOrder prop) */}
      <IndustryCard
        title="Education"
        imageSrc="https://www.zinavo.com/images/industry/education.png"
        altText="Education website design and development company in Bangalore"
        reverseOrder={true}
      />
      <IndustryCard
        title="Health Care"
        imageSrc="https://www.zinavo.com/images/industry/healthcare.png"
        altText="Healthcare Website Design and portal development company in Bangalore"
        reverseOrder={true}
      />
      <IndustryCard
        title="Entertainment"
        imageSrc="https://www.zinavo.com/images/industry/entertainment.png"
        altText="Entertainment website design and development services in Bangalore"
        reverseOrder={true}
      />
      <IndustryCard
        title="Financial Services"
        imageSrc="https://www.zinavo.com/images/industry/financial.png"
        altText="Finance website design and development company in Bangalore"
        reverseOrder={true}
      />
    </div>
  );
};

export default Industries;
