import Image from 'next/image'
import { down, ethereum } from '../../../assets'
import childABI from '../../../constant/childABI.json'
import { useEffect, useState } from 'react';
import useDeposit from '../../../hooks/useDeposit';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import useFetchUserAccount from '../../../hooks/useFetchUserAccount';
import { toast } from 'react-toastify';
// import { ethers } from 'ethers';
import * as ethers from 'ethers';

export default function BorrowWithdraw() {
  
  const [addr, setAddr]=useState("");
  const [amt, setAmt]=useState("");
  const [usrAdr, setUsrAdr] = useState("");
  const [selected, setSelected] = useState(""); 
  const [openDrop, setOpenDrop] = useState(false)
 

const {readData} = useFetchUserAccount();

console.log(readData);


  
 
  // const { cwriteLoading, cwriteWrite , data, isError, isLoading, isSuccess} = useDeposit(childABI, fName, arguement, usrAdr);


  const { config } = usePrepareContractWrite({
    address: usrAdr,
    abi: childABI,
    functionName: "repayLoan",
    // args: [ CometAddress ],
    args: [addr, ethers?.utils?.parseEther(`${amt}`)]
  })
  
 
  const {data:cwriteData, isLoading:cwriteLoading, write:cwriteWrite, isSuccess} = useContractWrite(config)

  const {data, isError, isLoading, } = useWaitForTransaction({
    hash: cwriteData?.hash,
    onSuccess(data) {
      // console.log('Success', data)
      toast.success(`$${amt} was payed`);
    },

  })


  // borrow
  const { config:borrowConfig } = usePrepareContractWrite({
    address: usrAdr,
    abi: childABI,
    functionName: "borrow",
    args: [addr, ethers.utils.parseEther("100")]
  })
  

  const {data:borrowData, isLoading:borrowLoading, write:borrowWrite, isSuccess:borrowSuccess} = useContractWrite(borrowConfig)


  const {data:borrowWaitData, isError:borrowWaitError, isLoading:borrowWaitLoading, } = useWaitForTransaction({
    hash: borrowData?.hash,
    onSuccess(data) {
      // console.log('Success', data)
      toast.success(`$${amt} was borrowed `);
    },

  })


	// claim faucet: 0x54fcBea987d18E027a827eE25e1943Cf0874Eba8	
const tokens = [
  {
    name: "USDC",
    address: "0x31D3A7711a74b4Ec970F50c3eaf1ee47ba803A95"
  },
  {
    name: "cbETH",
    address: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2"
  },
  {
    name: "WETH",
    address: "0x4200000000000000000000000000000000000006"
  }
];


const handlePayback = (e) =>{
  e.preventDefault()
  console.log("het");
  cwriteWrite?.();
}

const handleBorrow = (e) =>{
  e.preventDefault()
  borrowWrite?.()
}

useEffect(()=>{
  if(addr===""){
    setAddr("0x31D3A7711a74b4Ec970F50c3eaf1ee47ba803A95")
  }
  if(isError){
    toast.error("Error occur while depositing")
  }
  if(borrowWaitError){
    toast.error("Error occur while depositing")
  }
  setAmt(0)
  console.log(amt);
  setUsrAdr(readData);
},[addr, readData,  isError, borrowWaitError])

  return (
    <main className='absolute w-[100%] top-0 -ml-20'>
        <section className='w-[100%] '>
            <div className="w-[35%] bg-[#FEFEFE] mt-[302px] rounded-[36px] mx-auto">
            <div className="w-[90%] mx-auto">
                <div onClick={()=>setOpenDrop(!openDrop)} className=" flex  items-center relative gap-2 pt-10 pb-4">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#000000] opacity-[60%] flex items-center justify-center ">
                <Image src={ethereum} alt="token logo" height={20} width={20}/>
                  </div>
                <p className="">{selected === "" ?"USDC" : selected}</p>
                <Image src={down} alt='down arrow' hieght={24} width={24} />
                </div>
                {
                  openDrop &&
                <div className="absolute bg-[#FEFEFE] w-[200px] border-[1px] shadow-lg ">
                  <div className="w-[90%] mx-auto pt-4 pb-4 flex flex-col gap-2">
                  { tokens.map((token, index)=>(
                    <div key={index} onClick={()=>{setAddr(token.address); setSelected(token.name); setOpenDrop(false)}} className="">
                      <p className="">{token.name}</p>
                    </div>
                  ))

                  }
                  </div>
                </div>

                }
                <div className="pt-4 pb-4 border-t-[1px] border-b-[1px] border-[#ACAFC9]">
                  <div className="w-[85%] mx-auto text-[#585E92] flex gap-2 items-center">
                  <p className="text-[24px] font-normal">$</p>
                  <input type="text" onChange={(e)=> setAmt(e.target.value)} placeholder='0.00' className='text-[24px] font-normal border-l-0 outline-none '/>
                  </div>
                  <div className="w-[85%] mt-4 mx-auto">

                  <p className="font-normal text-[17px] text-[#02051f]">borrow/payback</p>
                  </div>
                </div>
                {/* <div className="pt-4 pb-4 border-b-[1px] border-[#ACAFC9]">
                <p className="font-normal text-[17px] text-[#02051f]">Available balance: <span className='text-[24px] font-secondary font-normal text-[#02051f]'>$10.00</span></p>
                </div> */}
                <div className="w-[80%] mx-auto flex gap-6 pt-6 pb-6">
                  <button onClick={ handleBorrow} className='w-[182px] h-[52px] text-[24px] rounded-2xl bg-[#ACAFC9] font-normal font-secondary leading-9 text-[#040C4D]'>{borrowWaitLoading || borrowLoading?"Borrow ...": "Borrow"}</button>
                  <button onClick={handlePayback} className='w-[182px] h-[52px] text-[24px] rounded-2xl bg-[#ACAFC9] font-normal font-secondary leading-9 text-[#040C4D]'>{  isLoading || cwriteLoading?"Payback ..." : "Payback"}</button>
                </div>
            </div>

            </div>
            
             </section>
    </main>

  )
}
