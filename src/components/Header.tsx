import React from 'react'
const Header = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500  text-white space-y-10 h-[34rem] rounded-b-full flex flex-col items-center justify-center '>
            <div className=' font text-3xl'>
                Scalenut
            </div>
            <div className='text-3xl font-bold'>
                6 Months Growth Plan Giveaway
            </div>
            <div className=' w-2/5 flex items-center justify-center '>
                Get more out of Scalenut with our Rewards program. Free Growth Plan and referral credits  up for grabs to maximize your savings.
            </div>
            <div className='bg-[#CEFDF3] px-6 text-gray-300 flex  flex-col items-center justify-center rounded-xl h-32'>
                <p className='text-3xl'>Referal Friend</p>
                <p>Earn Credits with friends , relative and people you know</p>
            </div>
        </div>
    )
}

export default Header
