import React from 'react'

const Work = () => {
    return (
        <div className='mt-12'>

            <div className='text-4xl font-bold ml-24 mb-12'>
                How It Works
            </div>

            <div className='flex items-center justify-center space-x-16'>

                <div className='shadow-lg shadow-blue-600 bg-[#F5FAFF] border-black w-80 p-4 space-y-3'>
                    <div className='flex items-end justify-between'>
                        <p>01</p>
                        <img className='h-24 w-24' src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be724e4823669d982f5e6a_Create.svg" alt="" />
                    </div>

                    <p className='text-3xl text-blue-600'>Create</p>
                    <p className=''>
                        Post reviews, create content and give a shout-out on your social media
                    </p>
                </div>


                <div className='shadow-lg shadow-blue-600 bg-[#F5FAFF] border-black w-80 p-4 space-y-3'>
                    <div className='flex items-end justify-between'>
                        <p>02</p>
                        <img className='h-24 w-24' src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be7696ee573225d8e248f9_Share.svg" alt="" />
                    </div>

                    <p className='text-3xl text-blue-600'>Submit</p>
                    <p className=''>
                        Submit the published URLs with us via chat or email us at wecare@scalenut.com
                    </p>
                </div>

                <div className=' shadow-lg shadow-blue-600 bg-[#F5FAFF]  w-80 p-4 space-y-3'>
                    <div className='flex items-end justify-between'>
                        <p>03</p>
                        <img className='h-24 w-24' src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be769e6c450a783dbd254f_Earn.svg" alt="" />
                    </div>

                    <p className='text-3xl text-blue-600'>Earn</p>
                    <p className=''>
                        We will upgrade your account to the Growth Plan after verification.
                    </p>
                </div>
            </div>

            <div className='  flex items-center justify-center mt-24 p-4 text-white'>
                <div className=' space-y-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500  w-4/5 flex items-center justify-center flex-col h-48'>
                    <p className='text-4xl'>Simple Way to Unlock Growth Plan worth $500</p>
                    <p>Boost your online presence for FREE</p>
                </div>
            </div>
        </div>
    )
}

export default Work
