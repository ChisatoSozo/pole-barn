import { MaterialType } from "./construct";

export const prices: {
  [key in MaterialType]: {
    [key: number]: {
      price: number;
      url: string;
    };
  };
} = {
  post: {
    8: {
      price: 16.72,
      url: "https://www.homedepot.ca/product/micropro-sienna-4-x-4-x-8-pressure-treated-wood-post-suitable-for-ground-contact-/1000790178",
    },
    12: {
      price: 63.72,
      url: "https://www.homedepot.ca/product/micropro-sienna-6-x-6-x-12-pressure-treated-wood-post-suitable-for-ground-contact-/1000790733",
    },
    16: {
      price: 84.96,
      url: "https://www.homedepot.ca/product/micropro-sienna-6-x-6-x-16-pressure-treated-wood-post-suitable-for-ground-contact-/1000790732",
    },
  },
  post3x2x6x16: {
    16: {
      price: 12.46 * 3,
      url: "https://www.homedepot.ca/product/2x6x16-spf-dimension-lumber/1000100167",
    },
  },
  postBase: {
    0: {
      price: 42.82,
      url: "https://www.homedepot.com/p/Simpson-Strong-Tie-CB-Galvanized-Column-Base-for-6x6-Nominal-Lumber-CB66/100375059",
    },
  },
  wood2x6: {
    8: {
      price: 12.46 / 2,
      url: "https://www.homedepot.ca/product/2x6x16-spf-dimension-lumber/1000100167",
    },
    16: {
      price: 12.46,
      url: "https://www.homedepot.ca/product/2x6x16-spf-dimension-lumber/1000100167",
    },
  },
};
