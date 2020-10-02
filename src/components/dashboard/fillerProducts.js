import chelsea from "../../media/images/chelsea.jpg";
import chelsea1 from "../../media/images/chelsea1.jpg";
import mutd from "../../media/images/mutd.jpg";

import { v4 as uuidv4 } from "uuid";

const makeProduct = (
  productName,
  price,
  description = null,
  category,
  image = chelsea
) => {
  return { id: uuidv4(), productName, price, description, category, image };
};
export const categories = {
  category1: "category1",
  category2: "category2",
  category3: "category3",
  category4: "category4",
  category5: "category5",
  category6: "category6",
};

export const fillerProducts1 = [
  makeProduct("item1", 2000, "description", categories.category1),
  makeProduct("item1123", 2000, "description", categories.category2),
  makeProduct("item1asd", 2000, "description", categories.category3),
  makeProduct("item1as", 2000, "description", categories.category4),
  makeProduct("item1", 2000, "description", categories.category5),
  makeProduct("item1q", 2000, "description", categories.category6),
  makeProduct("item1ew", 2000, "description", categories.category1),
  makeProduct("item1e", 2000, "description", categories.category2),
  makeProduct("item1wq", 2000, "description", categories.category3),
  makeProduct("item1w", 2000, "description", categories.category4),
  makeProduct("item1weew", 2000, "description", categories.category6),
  makeProduct("item1qw", 2000, "description", categories.category6),
  makeProduct("item1we", 2000, "description", categories.category1),
];

export const fillerProducts2 = [
  makeProduct("item1", 2000, "description", categories.category1, chelsea1),
  makeProduct("item1123", 2000, "description", categories.category2, chelsea1),
  makeProduct("item1asd", 2000, "description", categories.category3, chelsea1),
  makeProduct("item1as", 2000, "description", categories.category4, chelsea1),
  makeProduct("item1", 2000, "description", categories.category5, chelsea1),
  makeProduct("item1q", 2000, "description", categories.category6, chelsea1),
  makeProduct("item1ew", 2000, "description", categories.category1, chelsea1),
  makeProduct("item1e", 2000, "description", categories.category2, chelsea1),
  makeProduct("item1wq", 2000, "description", categories.category3, chelsea1),
  makeProduct("item1w", 2000, "description", categories.category4, chelsea1),
  makeProduct("item1weew", 2000, "description", categories.category6, chelsea1),
  makeProduct("item1qw", 2000, "description", categories.category6, chelsea1),
  makeProduct("item1we", 2000, "description", categories.category1, chelsea1),
];

export const fillerProducts3 = [
  makeProduct("item1", 2000, "description", categories.category1, mutd),
  makeProduct("item1123", 2000, "description", categories.category2, mutd),
  makeProduct("item1asd", 2000, "description", categories.category3, mutd),
  makeProduct("item1as", 2000, "description", categories.category4, mutd),
  makeProduct("item1", 2000, "description", categories.category5, mutd),
  makeProduct("item1q", 2000, "description", categories.category6, mutd),
  makeProduct("item1ew", 2000, "description", categories.category1, mutd),
  makeProduct("item1e", 2000, "description", categories.category2, mutd),
  makeProduct("item1wq", 2000, "description", categories.category3, mutd),
  makeProduct("item1w", 2000, "description", categories.category4, mutd),
  makeProduct("item1weew", 2000, "description", categories.category6, mutd),
  makeProduct("item1qw", 2000, "description", categories.category6, mutd),
  makeProduct("item1we", 2000, "description", categories.category1, mutd),
];
