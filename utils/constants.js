import { anchorage, avalanche, bitgo, coinbase, ether_flow, ethereum, ledger, tether } from "../assets"

export const glasses = [
  "Ethereum", "Polygon", "Avalanche", "Coinbase", "Arbitrum", "Optimism",
]

export const app_cards = [
  {
    name: "Aave V2",
    href: "aave",
    content: "An optimized gateway to Aave V2 with the same liquidity and risk parameters",
    innerCard: [
      {
        name: "APY Improvement",
        value: "0.78%"
      },
      {
        name: "Supplied Value",
        value: "$124.17M"
      }
    ]
  },
  {
    name: "BaseSwap",
    href: "baseswap",
    content: "An optimized gateway to BaseSwap with the same liquidity and risk parameters",
    innerCard: [
      {
        name: "APY Improvement",
        value: "0.78%"
      },
      {
        name: "Supplied Value",
        value: "$124.17M"
      }
    ]
  },
  {
    name: "Uniswap",
    href: "uniswap",
    content: "An optimized gateway to Uniswap with the same liquidity and risk parameters",
    innerCard: [
      {
        name: "APY Improvement",
        value: "0.78%"
      },
      {
        name: "Supplied Value",
        value: "$124.17M"
      }
    ]
  }
]

export const flowCards = [
  {
    title: "Coinbase",
    content: "Coinbase empowers both newcomers and seasoned enthusiasts to seamlessly delve into the world of cryptocurrencies.",
    image: coinbase
  },
  {
    title: "Avalanche",
    content: "Coinbase empowers both newcomers and seasoned enthusiasts to seamlessly delve into the world of cryptocurrencies.",
    image: avalanche
  },
  {
    title: "Ethereum",
    content: "Coinbase empowers both newcomers and seasoned enthusiasts to seamlessly delve into the world of cryptocurrencies.",
    image: ether_flow
  },
  {
    title: "Ledger",
    content: "Coinbase empowers both newcomers and seasoned enthusiasts to seamlessly delve into the world of cryptocurrencies.",
    image: ledger
  },
  {
    title: "Bitgo",
    content: "Coinbase empowers both newcomers and seasoned enthusiasts to seamlessly delve into the world of cryptocurrencies.",
    image: bitgo
  },
  {
    title: "Anchorage",
    content: "Coinbase empowers both newcomers and seasoned enthusiasts to seamlessly delve into the world of cryptocurrencies.",
    image: anchorage
  },
]

export const coins = [
  {
    symbol: "ETH",
    icon: ethereum
  },
  {
    symbol: "USDT",
    icon: tether
  }
]