/** @format */

import Image from "next/image";
import { down, ethereum } from "../../../assets";
import childABI from "../../../constant/childABI.json";
import { useEffect, useState } from "react";
import useDeposit from "../../../hooks/useDeposit";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import useFetchUserAccount from "../../../hooks/useFetchUserAccount";
import ERC20 from "../../../constant/ERC20.json";

export default function DepositAsset() {
  const [addr, setAddr] = useState("");
  const [amt, setAmt] = useState();
  const [usrAdr, setUsrAdr] = useState("");
  const [selected, setSelected] = useState("");
  const [openDrop, setOpenDrop] = useState(false);

  const { readData } = useFetchUserAccount();

  const { config } = usePrepareContractWrite({
    address: usrAdr,
    abi: childABI,
    functionName: "deposit",
    args: [addr, amt],
  });
  const { config: approveToken } = usePrepareContractWrite({
    address: addr,
    abi: ERC20,
    functionName: "approve",
    args: [addr, amt],
  });

  const {
    data: cwriteData,
    isLoading: cwriteLoading,
    write: cwriteWrite,
    isSuccess,
  } = useContractWrite(config);

  const { data, isError, isLoading } = useWaitForTransaction({
    hash: cwriteData?.hash,
    onSuccess(data) {
      // console.log('Success', data)
      //   toast.success("Account created");
    },
  });
  const {
    data: cwriteDataAppr,
    isLoading: cwriteLoadingAppr,
    write: cwriteWriteAppr,
    isSuccess: successAppr,
  } = useContractWrite(config);

  const {
    data: dataAppr,
    isError: ApprError,
    isLoading: ApprLoading,
  } = useWaitForTransaction({
    hash: cwriteDataAppr?.hash,
    onSuccess(data) {
      // console.log('Success', data)
      //   toast.success("Account created");
      // cwriteWrite?.();
    },
  });

  // claim faucet: 0x54fcBea987d18E027a827eE25e1943Cf0874Eba8
  const tokens = [
    {
      name: "USDC",
      address: "0x31D3A7711a74b4Ec970F50c3eaf1ee47ba803A95",
    },
    {
      name: "cbETH",
      address: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2",
    },
    {
      name: "WETH",
      address: "0x4200000000000000000000000000000000000006",
    },
  ];

  const handleSupply = (e) => {
    e.preventDefault();
    console.log("het");
    //   cwriteWrite?.();
    cwriteWriteAppr?.();
  };

  useEffect(() => {
    if (addr === "") {
      setAddr("0x31D3A7711a74b4Ec970F50c3eaf1ee47ba803A95");
    }
    setUsrAdr(readData);
  }, [addr, readData]);

  return (
    <main className="absolute w-[100%] top-0 -ml-20">
      <section className="w-[100%] ">
        <div className="w-[35%] bg-[#FEFEFE] mt-[302px] rounded-[36px] mx-auto">
          <div className="w-[90%] mx-auto">
            <h2 className="text-[20px] text-[#02051F] text-center pt-4 pb-2 border-b-[1px] border-[#ACAFC9]">
              Deposit into your Account
            </h2>
            <div
              onClick={() => setOpenDrop(!openDrop)}
              className=" flex  items-center relative gap-2 pt-10 pb-4"
            >
              <div className="w-[36px] h-[36px] rounded-full bg-[#000000] opacity-[60%] flex items-center justify-center ">
                <Image src={ethereum} alt="token logo" height={20} width={20} />
              </div>
              <p className="">{selected === "" ? "USDC" : selected}</p>
              <Image src={down} alt="down arrow" hieght={24} width={24} />
            </div>
            {openDrop && (
              <div className="absolute bg-[#FEFEFE] w-[200px] border-[1px] shadow-lg ">
                <div className="w-[90%] mx-auto pt-4 pb-4 flex flex-col gap-2">
                  {tokens.map((token, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setAddr(token.address);
                        setSelected(token.name);
                        setOpenDrop(false);
                      }}
                      className=""
                    >
                      <p className="">{token.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="pt-4 pb-4 border-t-[1px] border-b-[1px] border-[#ACAFC9]">
              <div className="w-[85%] mx-auto text-[#585E92] flex gap-2 items-center">
                <p className="text-[24px] font-normal">$</p>
                <input
                  type="text"
                  onChange={(e) => setAmt(e.target.value)}
                  placeholder="0.00"
                  className="text-[24px] font-normal border-l-0 outline-none "
                />
              </div>
              <div className="w-[85%] mt-4 mx-auto">
                <p className="font-normal text-[17px] text-[#02051f]">
                  Deposit
                </p>
              </div>
            </div>
            {/* <div className="pt-4 pb-4 border-b-[1px] border-[#ACAFC9]">
                <p className="font-normal text-[17px] text-[#02051f]">Available balance: <span className='text-[24px] font-secondary font-normal text-[#02051f]'>$10.00</span></p>
                </div> */}
            <div className="w-[80%] mx-auto flex gap-6 pt-6 pb-6">
              <button
                onClick={handleSupply}
                className="w-[182px] h-[52px] text-[24px] rounded-2xl bg-[#ACAFC9] font-normal font-secondary leading-9 text-[#040C4D]"
              >
                Deposit
              </button>
              <button className="w-[182px] h-[52px] text-[24px] rounded-2xl bg-[#ACAFC9] font-normal font-secondary leading-9 text-[#040C4D]">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
