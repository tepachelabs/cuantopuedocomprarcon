import {ChangeEvent, FC} from 'react';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AmountInput: FC<Props> = ({ onChange, value }) => {

  return (
    <div className="mb-4">
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Cuanto vas a gastar?</label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          value={value}
          type="text"
          name="price"
          id="price"
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"
        />
          <div className="absolute inset-y-0 right-0 flex items-centerhover:cursor-pointer">
            <label htmlFor="currency" className="sr-only">Currency</label>
            <select disabled id="currency" name="currency" className="hover:cursor-not-allowed h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>MX</option>
            </select>
          </div>
      </div>
    </div>
  )
};
