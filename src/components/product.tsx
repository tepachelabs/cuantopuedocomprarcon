import { FC } from 'react';

interface Props {
 amount: number;
 product: Product;
}

export const Product:FC<Props> = ({ product, amount }) => {

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      Total: {amount / product.price}
    </div>
  )
};