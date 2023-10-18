import {ChangeEvent, useState} from "react";

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import { Spinner } from '@/components/spinner';
import { Product } from '@/components/product';
import { AmountInput } from '@/components/amount-input';

import {formatCurrency, cleanMoneyFormat} from '@/utils/money-format';

const DEFAULT_AMOUNT = formatCurrency((10_000).toString());

const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    setIsSubmitted(true);
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
    <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

export const getServerSideProps = (async (context) => {
  const products: Product[] = [
    {
      price: 23,
      title: 'Cheetos Flaming Hot',
    },
    {
      price: 10_000,
      title: 'Laptop',
    },
    {
      price: 23_122,
      title: 'Tacos al pastor',
    },
    {
      price: 23,
      title: 'Cheetos Flaming Hot',
    },
    {
      price: 10_000,
      title: 'Laptop',
    },
    {
      price: 23_122,
      title: 'Tacos al pastor',
    },
    {
      price: 23,
      title: 'Cheetos Flaming Hot',
    },
    {
      price: 10_000,
      title: 'Laptop',
    },
    {
      price: 23_122,
      title: 'Tacos al pastor',
    },
  ];

  return {
    props: {
      products
    },
  };
}) satisfies GetServerSideProps<{
  products: Product[]
}>

export default Home;
