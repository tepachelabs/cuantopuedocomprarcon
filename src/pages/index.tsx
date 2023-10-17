import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import { Product } from '@/components/product';
import { AmountInput } from '@/components/amount-input';
import {ChangeEvent, useState} from "react";

const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
    <main className="p-10 h-full flex items-center justify-center">
      <div className="w-full">
        <AmountInput
          value={amount.toString()}
          onChange={handleAmountChange}
        />
        <button className="w-full bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded">
          Aceptar
        </button>
      </div>
    </main>
  )
};

export const getServerSideProps = (async (context) => {
  const products: Product[] = [
    {
      price: 23,
      title: 'Cheetos Flaming Hot',
    }
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
