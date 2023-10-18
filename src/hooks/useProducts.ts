import {useState} from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = () => {
    setIsLoading(true);

    fetch('/api/products')
      .then((res) => {
        if (!res.ok) {
          console.log('not okay :(')
        }

        return res.json();
      })
      .then((res: Product[]) => {
        setProducts(res);
      })
      .catch(() => {
        console.log('boom');
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  return { products, isLoading, fetchProducts };
};
