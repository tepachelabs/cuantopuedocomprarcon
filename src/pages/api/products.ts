// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

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
]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products)
};

export default handler;
