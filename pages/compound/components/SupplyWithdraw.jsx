import Image from 'next/image'


export default function SupplyWithdraw() {
  return (
    <main className='absolute w-[100%] -mt-32 -ml-20'>
        <section className='w-[100%] '>
            <div className="w-[35%] bg-[#FEFEFE] rounded-[36px] mx-auto">
            <div className="w-[90%] mx-auto">
                <div className=" flex  pt-10 pb-4">
                <Image src="/../assets/ethereum.svg" height={24} width={24}/>
                <p className="">ETH</p>
                </div>
                <div className="pt-4 pb-4 border-t-[1px] border-b-[1px] border-[#ACAFC9]">
                  <div className="w-[85%] mx-auto text-[#585E92] flex gap-2 items-center">
                  <p className="text-[24px] font-normal">$</p>
                  <input type="text" placeholder='0.00' className='text-[24px] font-normal border-l-0 outline-none '/>
                  </div>
                  <div className="w-[85%] mt-4 mx-auto">

                  <p className="font-normal text-[17px] text-[#02051f]">supply</p>
                  </div>
                </div>
                <div className="pt-4 pb-4 border-b-[1px] border-[#ACAFC9]">
                <p className="font-normal text-[17px] text-[#02051f]">Available balance: <span className='text-[24px] font-secondary font-normal text-[#02051f]'>$10.00</span></p>
                </div>
                <div className="w-[80%] mx-auto flex gap-6 pt-6 pb-6">
                  <button className='w-[182px] h-[52px] text-[24px] rounded-2xl bg-[#ACAFC9] font-normal font-secondary leading-9 text-[#040C4D]'>Supply</button>
                  <button className='w-[182px] h-[52px] text-[24px] rounded-2xl bg-[#ACAFC9] font-normal font-secondary leading-9 text-[#040C4D]'>Withdraw</button>
                </div>
            </div>

            </div>
            
             </section>
    </main>

  )
}
