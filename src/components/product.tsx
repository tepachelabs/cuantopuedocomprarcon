import { FC } from 'react';

interface Props {
 amount: number;
 product: Product;
}

export const Product:FC<Props> = ({ product, amount }) => {
  const total = (amount / product.price).toFixed(2);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full object-cover" src="https://picsum.photos/1000/1000" alt="Random Picture" />
      <div className="p-4">
        <h5 className="mb-2 text-2  xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Precio por unidad: {product.price}
        </p>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="p-4">
        <h4 className="font-bold">Puedes comprar:</h4>
        <p>{total}</p>
      </div>
    </div>

  )
};