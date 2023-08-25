import React from 'react'
import ERC20 from '../../../constant/ERC20.json'
import { useContractRead } from 'wagmi';

export default function SingleBorrow({ tokenBorrowed, Amount, PaybackAmount, index, useContractRead }) {

  const { data, isError, isLoading, isSuccess } = useContractRead({
    address: tokenBorrowed,
    abi: ERC20,
    functionName: "name",
  });

  return (
    <main key={index}>
      <section className="text-[20px] leading-7 mt-3">
        <div className="grid grid-cols-4 justify-between items-end">

          <div className=" flex items-center gap-1">
            <span className='bg-[#9B9B9B] w-[36px] h-[36px] rounded-full'></span>
            <p className="text-[#FEFEFE]">{data}</p>
          </div>
          <p className="text-[#56aafe] text-center">{Amount}</p>
          <p className="text-[#56aafe] text-center">{PaybackAmount}</p>
          <p className="text-[#56aafe]  text-right" >3.65%</p>
        </div>
      </section>
    </main>
  )
}
