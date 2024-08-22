import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, baseSepolia, modeTestnet, hederaTestnet, rootstockTestnet } from 'wagmi/chains'

export const projectId = '59198889d7df78b39ea70d871d0ec131'

if (!projectId) throw new Error('Project ID is not defined')

export const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', 
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [sepolia, rootstockTestnet] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})