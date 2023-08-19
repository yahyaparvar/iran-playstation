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
    description: "بسیار جوابه",
  },
  {
    name: "گیفت کارد پلی استیشن ریجن آلمان",
    slug: "گیفت-کارد-آلمان",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps-store-credit-image-block-01-en-21oct21?$native$",
    country: "DE",
    description: "بسیار جوابه",
  },
  {
    name: "گیفت کارد پلی استیشن ریجن فرانسه",
    slug: "گیفت-کارد-فرانسه",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps-store-credit-image-block-01-en-21oct21?$native$",
    country: "FR",
    description: "بسیار جوابه",
  },
  {
    name: "گیفت کارد پلی استیشن ریجن امارات",
    slug: "گیفت-کارد-امارات",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps-store-credit-image-block-01-en-21oct21?$native$",
    country: "AE",
    description: "بسیار جوابه",
  },
];
