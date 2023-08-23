import React from 'react';
import { app_cards, flowCards } from '../utils/constants';
import FlowCard from "./Flow";
import Link from 'next/link';

const AppCard = () => {
  return (
    <div id="apps" className='app_cards_bg sm:py-10 px-6 sm:px-16 py-4'>
      <div className="flex flex-wrap justify-between gap-4 text-white">
        {app_cards.map((card, index) => (
          <div key={index} className="app_card_bg p-4 text-center rounded-[36px] max-w-[400px]">
            <h3 className='text-xl sm:text-2xl block text-center'>{card?.name}</h3>
            <p className="text-base grotesk font-normal leading-[25.5px] tracking-[0.085px] px-6 mt-4">{card.content}</p>
            <div className='flex mt-4 justify-between ml-2'>
              {card?.innerCard.map((innercard, index) => (
                <div key={index} className="grid w-[260px] text-center h-[160px] w-fit text-center bg-[url('../assets/border_app.svg')] pt-5 pb-12 px-5 bg-no-repeat bg-fill tracking-normal">
                  <span className='grotesk'>{innercard?.name}</span>
                  <span className="mt- block">{innercard?.value}</span>
                </div>
              ))}
            </div>
            <Link href={`/app?source=${card?.href}`}>
              <button className='bg-[#CDCFDE] inline-fle py-4 px-9 rounded-2xl justify-center mx-auto text-black' >Launch App</button>
            </Link>
          </div>
        ))}
      </div>

      <div className='text-white'>
        <div className="md:w-[60%] w-full my-4 sm:my-16">
          <h3 className="leading-normal text-center sm:text-start block font-normal tracing-[-0.128px] text-[#CDCFDE] sm:text-[64px] text-[48px]">
            FundFlow Market
          </h3>
          <span className="text-base sm:text-2xl sm:text-start text-center mt-5 sm:mt-4 text-[#CDCFDE] tracking-[0.08px] max-w-[640px] block">
            Integrated interfaces created by the community for the protocol</span>
        </div>

        <div className="flex scrollbar-hide overflow-x-scroll overflow-y-hidden gap-8 flex-nowrap items-center w-full mt-6 sm:mt-0">
          {flowCards?.slice(0, 3)?.map((card, i) => (
            <FlowCard key={i} {...card} />
          ))}
        </div>
        <div className="flex scrollbar-hide mt-10 overflow-x-scroll overflow-y-hidden gap-8 flex-nowrap items-center w-full">
          {flowCards?.slice(3, 6)?.map((card, index) => (
            <FlowCard key={index} {...card} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default AppCard