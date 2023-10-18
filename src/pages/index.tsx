import {ChangeEvent, useState} from "react";

import { Spinner } from '@/components/spinner';
import { Product } from '@/components/product';
import { AmountInput } from '@/components/amount-input';

import {formatCurrency, cleanMoneyFormat} from '@/utils/money-format';

import { useProducts } from '@/hooks/useProducts';

const DEFAULT_AMOUNT = formatCurrency((10_000).toString());

const Home = () => {
  const { products, isLoading, fetchProducts} = useProducts();

  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    setIsSubmitted(true);
    fetchProducts();
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(formatCurrency(event.target.value));
  };

  if (!isSubmitted) {
    return (
      <div className="w-full max-w-xl">
        <AmountInput
          value={amount}
          onChange={handleAmountChange}
        />
        <button
          onClick={onSubmit}
          className="w-full bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded"
        >
          Aceptar
        </button>
      </div>
    )
  }

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <div className="w-ful pt-20 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="fixed w-full h-20 px-10 top-0 left-0 bg-violet-300 flex justify-center">
        <div className="w-full max-w-xl">
          <AmountInput
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
      </div>
      {products.map((product, index) => (
        <div className="w-full" key={index}>
          <Product
            amount={cleanMoneyFormat(amount)}
            product={product}
          />
        </div>
      ))}
    </div>
  )
};

export default Home;
