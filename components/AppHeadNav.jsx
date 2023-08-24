import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { useContext, useState } from "react"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import factoryABI from "../constant/factoryABI.json" 
import {Factory, CometAddress} from "../constant/address"
import {toast} from "react-toastify"
import { useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi"

export const AppHeadNav = ({ app }) => {
  const { state, dispatch } = useContext(GlobalContext)
  const [currentApp, setCurrentApp] = useState(app)

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeParams = (e) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    // update as necessary
    const value = event.target.value.trim();

    if (!value) {
      current.delete("source");
    } else {
      current.set("source", event.target.value);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };
// const {address} = useContext()

console.log(state.address);
  const { data:readData, isError:readError, isLoading:readLoading, isSuccess:readSuccess } = useContractRead({
    address: Factory,
    abi: factoryABI,
    functionName: "obtainAccountStatus",
    // args: [address],
  });

  // useEffect(() => {
  //   if (isSuccess) {
  //     setDetail(data);
  //   }
  // }, [isSuccess, data]);


  const { config } = usePrepareContractWrite({
    address: Factory,
    abi: factoryABI,
    functionName: 'CreateAccount',
    args: [ CometAddress ],
  })


  const {data:cwriteData, isLoading:cwriteLoading, write:cwriteWrite} = useContractWrite(config)

  const {data, isError, isLoading} = useWaitForTransaction({
    hash: cwriteData?.hash,
    onSuccess(data) {
      // console.log('Success', data)
      toast.success("Account created");
    
    },

  })
  


  const handlesubmit =(e)=>{
    e.preventDefault()

    cwriteWrite?.()
  }

  useEffect(()=>{
    if(isError){
      toast.error("Error Occur, try again")
    }

  }, [isError])

  return (
    <nav
      className="relative flex w-full items-center justify-between bg-[#CDCFDE] py-2 sm:py-5 sm:px-16 px-4"
      data-te-navbar-ref>
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <Link href="/" className="text-md sm:text-3xl geostar_font uppercase text-[#fefefe]">
            Fundflow
          </Link>

          <div
            className="!visible mt-2 hidden mono_font text-2xl items-center md:mt-0 md:!flex md:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item>

            <div
              className="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row text-white"
              data-te-navbar-nav-ref>

              <div
                className="my-4 pl-2 md:my-0 md:pl-2 md:pr-1"
                data-te-nav-item-ref>
                <Link
                  className="md:px-2 "
                  aria-current="page"
                  href="/markets"
                  data-te-nav-link-ref
                >Markets</Link >
              </div>

              <div
                className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1"
                data-te-nav-item-ref>
                <Link
                  className="p-0 transition duration-200 hover:ease-in-out motion-reduce:transition-none md:px-2"
                  href="/swap"
                  data-te-nav-link-ref
                >Swap</Link>
              </div>
            </div>
          </div>
        </div>

        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7">
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>

        <div className="flex bg- items-center text-black gap-5 hidden sm:flex">
          <select value={app} onChange={(e) => { setCurrentApp(e.target.value); changeParams(e) }} data-te-select-init className="rounded-xl bg-transparent border-l border-r focus:border-red-300 py-1 h-[40px] px-3 w-fit">
            <option value="aave" >Aave</option>
            <option value="uniswap">Uniswap</option>
            <option value="baseswap">Baseswap</option>
          </select>
        <button onClick={handlesubmit} className="bg-[#02051F] text-[#CDCFDE] text-[16px] font-normal py-[16px] px-[10px] rounded-2xl">
          {isLoading || cwriteLoading ? 'Creating ...' :"Create Account"}
        </button>

          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account
                &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');
              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <div
                          className="!visible mt-2 hidden bg-[#000] py-3 px-3 rounded-2xl flex-gro basis-[100%] items-center md:mt-0 md:!flex md:basis-auto hover:cursor-pointer"
                          id="navbarSupportedContent3"
                          onClick={openConnectModal}
                          data-te-collapse-item>

                          <div
                            className="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row"
                            data-te-navbar-nav-ref>

                            <div
                              className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1"
                              data-te-nav-item-ref>
                              <span
                                className="p- mono_font text-white text-xl transition duration-200 hover:ease-in-out motion-reduce:transition-none md:px-2"
                                data-te-nav-link-ref> Connect</span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }
                    return (
                      <div style={{ display: 'flex', gap: 12 }} className="border rounded-2xl p-4">
                        <button
                          onClick={openChainModal}
                          style={{ display: 'flex', alignItems: 'center' }}
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? 'Chain icon'}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>
                        <button onClick={openAccountModal} type="button" className="">
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ''}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
          {/* <ConnectButton className="bg-red-400" /> */}
        </div>

      </div>
    </nav>
  )
}