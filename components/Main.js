import React from 'react'

const Main = () => {
  return (
    <>
      <main className=" bg-[#F7F5F9] h-[678px] w-full relative flex">
        <div className="right w-[707px] h-[578px] ml-[100px] absolute mt-[100px]">
          <div className="heading">
            <h1 className='text-4xl font-custom font-semibold italic '>Explore your <span className='text-[#0096C8]'>Hobby</span> or <span className='text-[#8064A2]'>Passion</span> </h1>
          </div>
          <div className='paragraph'>
            <p className='mt-[86px] text-[14px] font-custom font-light leading-[30px] '>
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
            <p className='mt-[16px] text-[14px] font-custom font-light leading-[30px] '>
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <div className="picture mt-[38px]">
            <img width={697.07} height={216} src="/picture.svg" alt="" />
          </div>
        </div>
        <div className="left mt-[103px] ml-[880px] mb-[100px] ">
          <div className="btn mb-7 ">
            <button type="button" className="font-custom text-[#8064A2] text-2xl focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-9 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign In</button>
            <button type="button" className="font-custom text-[#939CA3] text-2xl focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Join In</button>
          </div>
          <div className="oauth font-custom">
            <div className='border border-[#8064A2] rounded-lg m-2'>
              <button type="button" className="text-black  font-semibold rounded-lg text-[14px] text-center inline-flex items-center pt-2 pb-2 pr-20 pl-10 mr-4">
                <svg className="w-24 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className='border border-[#8064A2] rounded-lg m-2 mb-7'>
              <button type="button" className="text-black  font-semibold rounded-lg text-[14px] text-center inline-flex items-center pt-2 pb-2 pr-20 pl-10 mr-4">
                <svg className="w-24 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                Sign in with Facebook
              </button>
            </div>
          </div>
          <div className='flex items-center gap-2 mb-7'>
            <div className='h-[4px] w-[149px] bg-[#CED4DA] '></div>
            <span className='font-custom font-bold text-sm'>Or connect with</span>
            <div className='h-[4px] w-[149px] bg-[#CED4DA] '></div>
          </div>
          <div className="searchbar">
            <div className='mb-5'>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
            </div>
            <div className='mb-5'>
              <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
            </div>
          </div>
          <div className='flex justify-between '>
            <div className=" mb-5">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium font-custom text-gray-900 dark:text-gray-300">Rembember Me</label>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <img src="/lock.svg" alt="" />
              <div className='font-custome font-bold text-sm '>forget password?</div>
            </div>
          </div>
          <div className='border border-[#000000] rounded-lg '>
          <button type="button" className="text-black font-custom font-bold rounded-lg text-[14px] text-center inline-flex items-center pt-2 pb-2 ml-44"> Continue</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
