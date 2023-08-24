
import { usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

export default function useDeposit({ABI, fName, arguement, }) {    
    
      const { config } = usePrepareContractWrite({
        address: Factory,
        abi: ABI,
        functionName: fName,
        // args: [ CometAddress ],
        args: {arguement}
      })
    
    
      const {data:cwriteData, isLoading:cwriteLoading, write:cwriteWrite, isSuccess} = useContractWrite(config)
    
      const {data, isError, isLoading, } = useWaitForTransaction({
        hash: cwriteData?.hash,
        onSuccess(data) {
          // console.log('Success', data)
        //   toast.success("Account created");
        },
    
      })
      
      return {cwriteData,cwriteLoading,cwriteWrite , data, isError, isLoading, isSuccess}
}
