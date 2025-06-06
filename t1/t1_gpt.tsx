// Ответ GPT (текущая бесплатная версия браузерного чата)
/*
комменты от нейронки:

Here is a full implementation of the PricingCard React component in TypeScript using TailwindCSS, based on your specifications and the UI in the provided reference:

*/

import React from "react";

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
      className={`
        w-full max-w-sm 
        flex flex-col justify-between 
        border rounded-xl px-6 py-8 
        ${isFeatured ? "bg-slate-700 text-white shadow-xl" : "bg-white text-slate-800"}
        transition-shadow duration-200 
        hover:shadow-2xl 
        focus-within:ring-4 focus-within:ring-blue-500 
        sm:w-auto
      `}
      tabIndex={0}
    >
      <div className="text-center">
        <h2 className="text-xl font-medium mb-2">{plan}</h2>
        <p className="text-4xl font-bold mb-6">${price}</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="text-sm">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`w-full mt-auto py-2 px-4 rounded-md text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition 
          ${isFeatured ? "bg-white text-slate-800 hover:bg-gray-200" : "bg-slate-700 text-white hover:bg-slate-800"}
        `}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

/*
To stack the cards vertically on small screens and side-by-side on larger screens, use this layout when rendering the PricingCards:
*/

/*<div className="flex flex-col sm:flex-row gap-6 items-center justify-center bg-gray-900 py-12 px-4">
  <PricingCard
    plan="Standard"
    price="100"
    features={["50,000 Requests", "4 contributors", "Up to 3 GB storage space"]}
  />
  <PricingCard
    plan="Pro"
    price="200"
    features={["100,000 Requests", "7 contributors", "Up to 6 GB storage space"]}
    isFeatured
  />
  <PricingCard
    plan="Expert"
    price="500"
    features={["200,000 Requests", "11 contributors", "Up to 10 GB storage space"]}
  />
</div>*/