import { BigNumber } from '@ethersproject/bignumber'
import { utils } from 'ethers'
import { FoesContractAddress, FoesContractABI } from '../constants/contract'
import { useContractCall } from '@usedapp/core'

export function useTotalSupply(): BigNumber | undefined {
  const [totalSupply] =
    useContractCall(
      {
        abi: new utils.Interface(FoesContractABI),
        address: FoesContractAddress,
        method: 'totalSupply',
        args: [],
      }
    ) ?? []
  return totalSupply
}
