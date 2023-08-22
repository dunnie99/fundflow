import React from 'react'
import { app_cards } from '../utils/constants'

const AppCard = () => {
  return (
    <div className='app_cards_bg sm:py-10 px-6 sm:px-16 py-4'>
      <div className="flex flex-wrap justify-between text-white">
        {app_cards.map((card, index) => (
          <div key={index} className="app_card_bg p-4 text-center rounded-[36px] max-w-[400px]">
            <h3 className='text-xl sm:text-2xl block text-center'>{card?.name}</h3>
            <p className="text-base grotesk font-normal leading-[25.5px] tracking-[0.085px] px-6 mt-4">{card.content}</p>
            <div className='flex my-4'>
              {card?.innerCard.map((innercard, index) => (
                <div key={index} className="grid px-4 bg-[url('../assets/border_app.svg')] px-10 py-5 bg-no-repeat tracking-normal">
                  <span className='grotesk'>{innercard?.name}</span>
                  <span>{innercard?.value}</span>
                </div>
              ))}
            </div>
            <button className='bg-[#CDCFDE] inline-flex py-4 px-9 rounded-2xl justify-center mx-auto text-black' >Lunch App</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppCard