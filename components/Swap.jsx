import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import MoonLoader from "react-spinners/MoonLoader";

const Swap = () => {
  const [swapMessage, setSwapMessage] = useState("Swap");
  const [currentSwap, setCurrentSwap] = useState(true);
  const [accountBalance, setAccountBalance] = useState('');
  const [balanceERC20, setBalanceERC20] = useState('');
  const { state, dispatch } = useContext(GlobalContext)

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const swapFields = () => {
    // Swap the values of input1 and input2
    const temp = input1;
    setInput1(input2);
    setInput2(temp);
    setValue1(input2)
    setValue2(input1)
    setCurrentSwap(!currentSwap)
  }

  return (
    <div className="z-10 px-6 sm:px-0 h-full">
      <div className=" w-full md:max-w-lg mx-auto pt-10 relative">
        <span className="my-3 block pl-2 text-xl">Swap</span>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="h-24 bg-base-300 rounded-box place-items-center">
            <div className="text-xl focus:outline-1 flex items-center mt-3">
              <input
                type="number"
                value={input1}
                disabled={swapMessage === "Swapping Tokens"}
                style={{ backgroundColor: 'transparent' }}
                onChange={(e) => { setInput1(e.target.value); getOutputs(e.target.value) }}
                className="input input-ghost focus:outline-0 focus:bg-base-300 text-4xl pl-4"
              />
              <span className="p-2 text-base">{currentSwap ? "ETH" : "LGTN"}</span>

            </div>
            <span className="pl-4">
              Balance: {accountBalance === "" ? "N/A" : currentSwap ? state?.balanceETH : 20}
            </span>
          </div>
          <div
            onClick={swapFields}
            className="bg-base-100 rounded-md w-fit p-2 mx-auto my-1 absolute top-40 left-0 right-0 z-10 hover:cursor-pointer hover:bg-base-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 bg-base-300 rounded-md p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>

          <div className="mt-2 h-24 bg-base-300 rounded-box place-items-center">
            <div className="text-xl focus:outline-1 flex items-center mt-3">
              <input
                type="number"
                value={input2}
                disabled
                onChange={(e) => { setInput2(e.target.value) }}
                style={{ backgroundColor: 'transparent' }}
                className="input border-0 input-ghost focus:outline-0 focus:bg-base-300 text-4xl pl-4"
              />
              <span className="p-2 text-base">{!currentSwap ? "ETH" : "ERC"}</span>
            </div>
            <span className="pl-4">
              Balance: {balanceERC20 === "" ? "N/A" : currentSwap ? 20 : state?.balanceETH}
            </span>
          </div>
          {state?.connected &&
            <button onClick={() => swapToken()}
              className="btn btn-primary w-full mt-4 block text-lg flex items-center gap-3"
              disabled={(input1 === "" || Number(input1) === 0) || (value2 === "" || Number(value2) === 0) || swapMessage !== "Swap" || ((currentSwap && Number(input1) > Number(accountBalance))) || ((!currentSwap && Number(input1) > Number(balanceERC20)))}
              color="dark"
            >
              {swapMessage !== "Swap Tokens" && <MoonLoader
                color={"#ffffff"}
                size={20}
                data-testid={id} />}
              <span>
                {swapMessage}
              </span>

            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default Swap