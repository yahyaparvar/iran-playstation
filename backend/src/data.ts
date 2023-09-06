import { Product } from "./models/product_model";
import { User } from "./models/user_model";
import bcrypt from "bcryptjs";
export const sampleProducts: Product[] = [
  {
    name: "گیفت کارد پلی استیشن ریجن آمریکا",
    slug: "گیفت-کارد-آمریکا",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps-store-credit-image-block-01-en-21oct21?$native$",
    country: "US",
    priceRange: "$10 - $100",
    benefits: [
      "با خرید این کارت دیگر نیازی به نسخه فیزیکی یا همان CD بازی ها ندارید و میتوانید به محض منتشر شدن یک بازی آن را خریداری کنید",
      "امکان پیش خرید تمامی بازی ها به محض انتشار",
      "امکان خرید انواع DLC ها و اکسپنشن های بازی ها",
      "خرید انواع اشتراک های PS Plus و PS Now",
    ],
    howToUse: [
      "https://www.youtube.com/embed/9ZqXqe8XVj4",
      "/how-to-use/ps-store",
    ],

    description:
      "Playstation store پاسپورت شما برای همه بازی های علاقه شما است. با کارت های هدیه Playstation store ما، می توانید به صورت آنلاین بازی ها و محتوای رسانه ای را برای کنسول بازی Playstation خود خریداری کنید یا هدیه دهید.",
  },
  {
    name: "گیفت کارد پلی استیشن ریجن آلمان",
    slug: "گیفت-کارد-آلمان",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps-store-credit-image-block-01-en-21oct21?$native$",
    country: "DE",
    priceRange: "$10 - $100",
    benefits: [
      "با خرید این کارت دیگر نیازی به نسخه فیزیکی یا همان CD بازی ها ندارید و میتوانید به محض منتشر شدن یک بازی آن را خریداری کنید",
      "امکان پیش خرید تمامی بازی ها به محض انتشار",
      "امکان خرید انواع DLC ها و اکسپنشن های بازی ها",
      "خرید انواع اشتراک های PS Plus و PS Now",
    ],
    howToUse: [
      "https://www.youtube.com/embed/9ZqXqe8XVj4",
      "/how-to-use/ps-store",
    ],
    description:
      "Playstation store پاسپورت شما برای همه بازی های علاقه شما است. با کارت های هدیه Playstation store ما، می توانید به صورت آنلاین بازی ها و محتوای رسانه ای را برای کنسول بازی Playstation خود خریداری کنید یا هدیه دهید.",
  },
  {
    name: "گیفت کارد پلی استیشن ریجن فرانسه",
    slug: "گیفت-کارد-فرانسه",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps-store-credit-image-block-01-en-21oct21?$native$",
    country: "FR",
    priceRange: "$10 - $100",
    benefits: [
      "با خرید این کارت دیگر نیازی به نسخه فیزیکی یا همان CD بازی ها ندارید و میتوانید به محض منتشر شدن یک بازی آن را خریداری کنید",
      "امکان پیش خرید تمامی بازی ها به محض انتشار",
      "امکان خرید انواع DLC ها و اکسپنشن های بازی ها",
      "خرید انواع اشتراک های PS Plus و PS Now",
    ],
    howToUse: [
      "https://www.youtube.com/embed/9ZqXqe8XVj4",
      "/how-to-use/ps-store",
    ],
    description:
      "Playstation store پاسپورت شما برای همه بازی های علاقه شما است. با کارت های هدیه Playstation store ما، می توانید به صورت آنلاین بازی ها و محتوای رسانه ای را برای کنسول بازی Playstation خود خریداری کنید یا هدیه دهید.",
  },
  {
    name: "گیفت کارد پلی استیشن ریجن امارات",
    slug: "گیفت-کارد-امارات",
    priceRange: "$10 - $100",
    benefits: [
      "با خرید این کارت دیگر نیازی به نسخه فیزیکی یا همان CD بازی ها ندارید و میتوانید به محض منتشر شدن یک بازی آن را خریداری کنید",
      "امکان پیش خرید تمامی بازی ها به محض انتشار",
      "امکان خرید انواع DLC ها و اکسپنشن های بازی ها",
      "خرید انواع اشتراک های PS Plus و PS Now",
    ],
    howToUse: [
      "https://www.youtube.com/embed/9ZqXqe8XVj4",
      "/how-to-use/ps-store",
    ],
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps-store-credit-image-block-01-en-21oct21?$native$",
    country: "AE",
    description:
      "Playstation store پاسپورت شما برای همه بازی های علاقه شما است. با کارت های هدیه Playstation store ما، می توانید به صورت آنلاین بازی ها و محتوای رسانه ای را برای کنسول بازی Playstation خود خریداری کنید یا هدیه دهید.",
  },
];
