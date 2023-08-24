import { useAccount, useContractRead } from "wagmi";
import factoryABI from '../constant/factoryABI.json'
import { Factory } from "../constant/address";

export default function useFetchUserAccount() {
    const {address} = useAccount()
    const { data:readData, isError:readError, isLoading:readLoading, isSuccess:readSuccess } = useContractRead({
        address: Factory,
        abi: factoryABI,
        functionName: "obtainUserAccount",
        args: [address],
      });

      return {readData, readError, readLoading, readSuccess}
}
