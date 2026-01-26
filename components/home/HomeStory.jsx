import ProductStory from "./ProductStory";
import { PRODUCTS } from "./productsData";

export default function HomeStory() {
  return <ProductStory products={PRODUCTS} />;
}
