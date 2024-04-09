import React from 'react'

const Review = () => {
    return (
        <div className=' mt-12 p-4  flex flex-col items-center justify-center space-y-24'>

            <div className='border border-orange-400 font-bold  w-[80rem] h-80  flex items-center justify-center space-x-10 '>
                <p className='mb-80 mr-[68rem] bg-white absolute p-1'>Review & Earn</p>
                <div className=' w-2/5 shadow-blue-200 shadow-xl space-y-3 p-4'>
                    <img className='h-12 w-12' src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/636bb72d5fe195093fc8ddb5_g2-seeklogo.com.svg" alt="" />
                    <p className='font-bold text-xl'>Free</p>
                    <p className='font-bold text-4xl text-cyan-400 '>1-month</p>
                    <p className='font-bold text-xl'>Grow Plan</p>
                    <p>Write an honest  review of scalenut on G2</p>
                </div>
                <div className=' w-2/5 shadow-blue-200 shadow-xl space-y-3 p-4'>
                    <img className='h-12 w-12' src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be6ab5ee5732ec1fe19bc9_Capterra.svg" alt="" />
                    <p className='font-bold text-xl'>Free</p>
                    <p className='font-bold text-4xl text-cyan-400'>1-month</p>
                    <p className='font-bold text-xl'>Grow Plan</p>
                    <p>Write an honest  review of scalenut on Capterra</p>
                </div>
            </div>


            <div className='border border-orange-400 font-bold  w-[80rem] h-80  flex items-center justify-center space-x-10 '>
                <p className='mb-80 mr-[60rem] bg-white absolute p-1'>Create Long-Form Content</p>
                <div className=' w-2/5 shadow-blue-200 shadow-xl space-y-3 p-4'>
                    <img className='h-12 w-12' src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be70efee57322a20e1e46f_Blog.svg" alt="" />
                    <p className='font-bold text-xl'>Free</p>
                    <p className='font-bold text-4xl text-cyan-400'>2-month</p>
                    <p className='font-bold text-xl'>Grow Plan</p>
                    <p>Write a blog reviewing Scalenut, highlighting its features and your personal experience </p>
                </div>
                <div className=' w-2/5 shadow-blue-200 shadow-xl space-y-3 p-4'>
                    <img className='h-12 w-12' src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/636bb72d5fe195876cc8dda4_icons8-youtube-96.webp" alt="" />
                    <p className='font-bold text-xl'>Free</p>
                    <p className='font-bold text-4xl text-cyan-400'>2-month</p>
                    <p className='font-bold text-xl'>Grow Plan</p>
                    <p>Create a Youtube video reviewing Scalenut, walk-through of its features and functions</p>
                </div>
            </div>
        </div>
    )
}

export default Review
