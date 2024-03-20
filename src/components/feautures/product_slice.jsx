import { createSlice } from "@reduxjs/toolkit";
import techToteBlack from "../../assets/images/core-essentials/tech-tote-black.webp";
import fitBack3Alive from "../../assets/images/core-essentials/fit-back-3-alive.webp";
import fitBack3AliveHover from "../../assets/images/core-essentials/hover/fit-back-3-alive.webp";
import techToteBlack2 from "../../assets/images/core-essentials/tech-tote-black-2.webp";
import techToteBlack3 from "../../assets/images/core-essentials/tech-tote-black-3.webp";
import techToteBlackHover from "../../assets/images/core-essentials/hover/tech-tote-black.webp";
import washingInstruction from "../../assets/images/core-essentials/washing-instruction.webp";
import slimPouchOlive from "../../assets/images/core-essentials/slim-pouch-olive.webp";
import overwatchDryBag from "../../assets/images/core-essentials/overwatch-dry-bag.webp";
import overwatchDryBag2 from "../../assets/images/core-essentials/overwatch-dry-bag-2.png";
import overwatchDryBag3 from "../../assets/images/core-essentials/overwatch-dry-bag-3.png";
import BicycleBags from "../../assets/images/core-essentials/bicycle-bags.webp";
import BicycleBagsHover from "../../assets/images/core-essentials/hover/bicycle-bags.webp";
import DoppKitGrey from "../../assets/images/core-essentials/dopp-kit-grey.jpg";
import DoppKitGreyHover from "../../assets/images/core-essentials/hover/dopp-kit-grey.jpg";
import TravelPackNavy from "../../assets/images/core-essentials/travel-pack-navy.webp";
import TravelPackNavyHover from "../../assets/images/core-essentials/hover/travel-pack-navy.webp";
import TravelPackNavy2 from "../../assets/images/core-essentials/travel-pack-navy-2.webp";
import TravelPackGray from "../../assets/images/core-essentials/travel-pack-grey.webp";
import TravelPackGrayHover from "../../assets/images/core-essentials/hover/travel-pack-grey.webp";
import OverWatchDryBag4 from "../../assets/images/core-essentials/over-watch-dry-bag-4.png";
import TravelPack2Black from "../../assets/images/best-seller/travel-pack-2-black.webp";
import TravelPack2BlackHover from "../../assets/images/best-seller/hover/trave-pack-2-black.webp";
import UnisexUnderArmourArmy from "../../assets/images/best-seller/unisex-under-armour-army.webp";
import UnisexUnderArmourArmyHover from "../../assets/images/best-seller/hover/unisex-under-armour-army.webp";
import UnisexUnderArmourArmy2 from "../../assets/images/best-seller/unisex-under-armour-black.webp";
import UnisexUnderArmourArmy2Hover from "../../assets/images/best-seller/hover/unisex-under-armour-black.webp";
import CapsulePackMaxNavy from "../../assets/images/best-seller/capsule-pack-max-navy.webp";
import CapsulePackMaxNavyHover from "../../assets/images/best-seller/hover/mens-gym-bag-blue.webp";
import MensGymBagGray from "../../assets/images/best-seller/mens-gym-bag-gray.webp";
import MensGymBagGrayHover from "../../assets/images/best-seller/hover/gym-tote-black.webp";
import GymToteBlack from "../../assets/images/best-seller/gym-tote-black.webp";
import GymToteBlackHover from "../../assets/images/best-seller/hover/gym-tote-black.webp";

const initialState = {
  CoreEssentials: [
    {
      id: 1,
      image: overwatchDryBag,
      hover: overwatchDryBag2,
      name: "Overwatch Dry",
      price: 100.0,
      stock: 3,
      viewing: 22,
      color:"black",
      relatedImages: [
        overwatchDryBag,
        overwatchDryBag2,
        overwatchDryBag3,
        OverWatchDryBag4,
      ],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [overwatchDryBag, overwatchDryBag2, overwatchDryBag3],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 2,
      image: DoppKitGrey,
      hover: DoppKitGreyHover,
      name: "Tech Tote Black",
      price: 50.0,
      stock: 449,
      viewing: 22,
      color:"gray",
      relatedImages: [DoppKitGrey, DoppKitGreyHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [DoppKitGrey, DoppKitGreyHover,],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 3,
      image: TravelPackNavy,
      hover: TravelPackNavyHover,
      name: "Travel Pack 2 Navy",
      price: 300.0,
      stock: 449,
      viewing: 22,
      color:"blue",
      relatedImages: [TravelPackNavy, TravelPackNavyHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [TravelPackNavy, TravelPackNavyHover, TravelPackNavy2],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 4,
      image: TravelPackGray,
      hover: TravelPackGrayHover,
      name: "Travel Pack 2 Gray",
      price: 500.0,
      stock: 449,
      viewing: 22,
      color:"gray",
      relatedImages: [TravelPackGray, TravelPackGrayHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [DoppKitGrey, DoppKitGreyHover],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 5,
      image: slimPouchOlive,
      hover: fitBack3AliveHover,
      name: "Tech Tote Black",
      price: 40.0,
      stock: 8,
      viewing: 22,
      color:"brown",
      relatedImages: [fitBack3Alive, fitBack3AliveHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [techToteBlack2, techToteBlack3],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 6,
      image: fitBack3Alive,
      hover: fitBack3AliveHover,
      name: "fit Back 3 Alive",
      price: 600.0,
      stock: 5,
      viewing: 22,
      color:"brown",
      relatedImages: [fitBack3Alive, fitBack3AliveHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [techToteBlack2, techToteBlack3],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 7,
      image: techToteBlack,
      hover: techToteBlackHover,
      name: "Tech Tote Black",
      price: 30.0,
      stock: 0,
      viewing: 22,
      color:"gray",
      relatedImages: [
        techToteBlack,
        techToteBlack2,
        techToteBlack3,
        techToteBlackHover,
      ],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [techToteBlack2, techToteBlack3],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 8,
      image: BicycleBags,
      hover: BicycleBagsHover,
      name: "Tech Tote Black",
      price: 25.0,
      stock: 449,
      viewing: 22,
      color:"gray",
      relatedImages: [BicycleBags],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [techToteBlack2, techToteBlack3],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 9,
      image: TravelPack2Black,
      hover: TravelPack2BlackHover,
      name: "Tech Tote Black",
      price: 33.0,
      stock: 449,
      viewing: 22,
      color:"black",
      relatedImages: [TravelPack2Black, TravelPack2BlackHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [TravelPack2Black],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 10,
      image: UnisexUnderArmourArmy,
      hover: UnisexUnderArmourArmyHover,
      name: "Tech Tote Black",
      price: 23.0,
      stock: 449,
      viewing: 22,
      color:"pattern",
      relatedImages: [UnisexUnderArmourArmy, UnisexUnderArmourArmyHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [UnisexUnderArmourArmy, UnisexUnderArmourArmyHover],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 11,
      image: UnisexUnderArmourArmy2,
      hover: UnisexUnderArmourArmy2Hover,
      name: "Tech Tote Black",
      price: 5000.0,
      stock: 449,
      viewing: 22,
      color:"black",
      relatedImages: [UnisexUnderArmourArmy2, UnisexUnderArmourArmy2Hover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [UnisexUnderArmourArmy2, UnisexUnderArmourArmy2Hover],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 12,
      image: CapsulePackMaxNavy,
      hover: CapsulePackMaxNavyHover,
      name: "Tech Tote Black",
      price: 322.0,
      stock: 449,
      viewing: 22,
      color:"blue",
      relatedImages: [CapsulePackMaxNavy, CapsulePackMaxNavyHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [CapsulePackMaxNavy, CapsulePackMaxNavyHover],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 13,
      image: MensGymBagGray,
      hover: MensGymBagGrayHover,
      name: "Tech Tote Black",
      price: 11.0,
      stock: 449,
      viewing: 22,
      color:"gray",
      relatedImages: [MensGymBagGrayHover, MensGymBagGrayHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [MensGymBagGrayHover, MensGymBagGrayHover],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
    {
      id: 14,
      image: GymToteBlack,
      hover: GymToteBlackHover,
      name: "Tech Tote Black",
      price: 1000.0,
      stock: 449,
      viewing: 22,
      color:"black",
      relatedImages: [GymToteBlack, GymToteBlackHover],
      productDetails: [
        {
          name: "The Iconic Silhouette",
          description:
            "Smart organization for your personal essentials. The Dopp Kit 2 is designed to organize and store your personal items. It features multiple storage pockets, water-resistant materials and fits all your travel-sized essentials in a sleek design.",
          images: [GymToteBlack, GymToteBlackHover],
          features: [
            "900D Ecoya® eco-dyed polyester exterior",
            "YKK® zippers",
            "Interior liner treated with antimicrobial coating to control bacterial odors and growth",
            "Dual compartments for spacious storage",
            "Interior mesh pockets and elastic organizers for smart organization",
            "Quick-access front pocket for small items",
            "Exterior and interior toothbrush holders",
            "Side and back carry handles",
            "Water-resistant interior lining",
            "Imported",
          ],
          dimensions: [
            "Length: 9 (23 cm)",
            "Width: 5 (13 cm)",
            "Depth: 3.75 (10 cm)",
          ],
          weight: "0.5 lbs",
          washingInstructions: [
            {
              image: washingInstruction,
              description:
                "Machine wash, no ironing, don’t dry clean, don’t tumble dry",
            },
          ],
        },
      ],
      shipping: [
        "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.",
        "We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
      ],
    },
  ],
  // We will add best seller in coreessentials using slice.
};

export const productSlice = createSlice({
  name: "products",
  initialState,
});

export default productSlice.reducer;
