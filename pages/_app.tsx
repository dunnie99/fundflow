import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
// import "tw-elements/dist/css/tw-elements.min.css";
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import GlobalProvider from '../context/GlobalContext'
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  baseGoerli,
  goerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    baseGoerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Fund Flow',
  projectId: '293ec0e04ef0b067e2fdbf402fcc2021',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <GlobalProvider>
        <Component {...pageProps} />
        </GlobalProvider>
        <ToastContainer/>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
