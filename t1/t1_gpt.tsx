// Ответ GPT (текущая бесплатная версия браузерного чата)
/*
комменты от нейронки (не считая начального "Sure! Here's ..." и предложения создать базовый layout с использованием сего творения):

Features Implemented:
-TypeScript-typed props
-TailwindCSS-only styling
-Responsive stacking (sm:w-80 makes cards stack below 640px)
-Hover elevation on desktop (sm:hover:scale-105, hover:shadow-xl)
-Keyboard focus ring via focus-visible:ring
-isFeatured prop dynamically changes color scheme

*/

import React from 'react';

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      tabIndex={0}
      className={`w-full sm:w-80 rounded-2xl p-6 shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 transition-transform transform ${
        isFeatured ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'
      } hover:shadow-xl sm:hover:scale-105 sm:transition sm:duration-300`}
    >
      <h2 className="text-2xl font-bold mb-2">{plan}</h2>
      <p className="text-3xl font-semibold mb-4">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="h-2 w-2 bg-current rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full px-4 py-2 rounded-lg font-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition ${
          isFeatured
            ? 'bg-white text-blue-600 hover:bg-blue-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};