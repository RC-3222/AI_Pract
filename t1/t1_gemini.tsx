// Ответ GEMINI (https://aistudio.google.com/)

import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  // Base classes for all cards
  const cardBaseClasses =
    'flex flex-col text-center p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform';
  
  // Desktop hover effect (applies to all cards on desktop screens 'sm' and up)
  const hoverEffectClasses = 'sm:hover:shadow-2xl sm:hover:-translate-y-1';

  // Styles specific to whether the card is featured or standard
  const currentStyles = isFeatured
    ? {
        card: 'bg-slate-700 text-white relative z-10 sm:scale-105', // Featured: dark bg, white text, slightly larger on desktop, on top
        planText: 'text-white',
        priceText: 'text-white',
        featureText: 'text-slate-300', // Slightly dimmer white for features compared to main text
        borderColor: 'border-slate-600', // Darker border for contrast on dark background
        subscribeText: 'text-white',
        focusRing: 'focus:ring-sky-400 focus:ring-offset-slate-700', // Focus ring optimized for dark background
      }
    : {
        card: 'bg-white text-slate-800', // Standard: white background, dark text
        planText: 'text-gray-600', // Muted text color for plan name
        priceText: 'text-slate-900', // Dark, prominent text for price
        featureText: 'text-gray-700', // Standard feature text color
        borderColor: 'border-gray-200', // Light border for light background
        subscribeText: 'text-slate-700', // Dark text for subscribe button
        focusRing: 'focus:ring-sky-500 focus:ring-offset-white', // Focus ring optimized for light background
      };

  return (
    <div className={`${cardBaseClasses} ${currentStyles.card} ${hoverEffectClasses}`}>
      {/* Plan Name */}
      <h3 className={`text-xl font-semibold ${currentStyles.planText} mb-2`}>
        {plan}
      </h3>

      {/* Price */}
      <div className="mb-6 sm:mb-8">
        <span className={`text-5xl sm:text-6xl font-bold ${currentStyles.priceText}`}>
          {price}
        </span>
        {/* Placeholder for potential '/month' or similar text, not in current spec
        <span className={`text-sm ${currentStyles.featureText}`}>/month</span> 
        */}
      </div>

      {/* Features List */}
      {/* 'flex-grow' allows this section to take up available vertical space,
          pushing the 'Subscribe' button to the bottom of the card. */}
      <ul className="w-full flex-grow"> 
        {features.map((feature) => (
          <li
            key={feature} // Assuming features are unique strings for keys
            // Each feature list item has a top border, creating separation lines.
            // The first feature's top border separates it from the price section.
            className={`py-3 text-sm ${currentStyles.featureText} ${currentStyles.borderColor} border-t`}
          >
            {feature}
          </li>
        ))}
      </ul>

      {/* Subscribe Action */}
      {/* 'mt-auto' pushes this div to the bottom of the flex container if 'ul' doesn't use all space.
          'pt-6 sm:pt-8' provides spacing between the last feature and the subscribe button. */}
      <div className="mt-auto pt-6 sm:pt-8"> 
        <button
          type="button" // Standard practice for buttons not submitting a form
          className={`
            font-semibold text-xs sm:text-sm tracking-wider uppercase 
            ${currentStyles.subscribeText}
            focus:outline-none focus:ring-2 focus:ring-offset-2 
            ${currentStyles.focusRing}
            rounded-md // Adds rounded corners to the focus ring for better aesthetics
          `}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default PricingCard;

