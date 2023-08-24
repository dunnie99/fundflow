import Image from 'next/image'


export default function SupplyWithdraw() {
  return (
    <main className='absolute w-[100%] -mt-32 -ml-20'>
        <section className='w-[100%]  h-[200px]'>
            <div className="w-[35%] bg-[#FEFEFE] rounded-[36px] h-8 mx-auto">
            <div className="w-[90%] mx-auto">
                <div className=" flex ">
                <Image src="/../assets/ethereum.svg" height={24} width={24}/>
                <p className="">ETH</p>

                </div>
            </div>

            </div>
            
             </section>
    </main>

  )
}
