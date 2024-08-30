import React from 'react';

const Card = (props) => {
  

  return (
    <div className="cards w-full sm:w-[90%] md:w-[70%] lg:w-[47%] h-auto bg-[#FFFFFF] p-4 sm:p-0 m-2">
      <div
        className={`card cursor-pointer ${props.className} rounded-lg w-full sm:w-[608px] h-auto relative border border-[#CED4DA] mt-6 mx-auto`}
      >
        <div className="logo flex items-center gap-4 sm:gap-6 mt-4 sm:mt-8 ml-4 sm:ml-6">
          <img src={props.image} alt="" className="w-8 sm:w-auto" />
          <h1 className="font-custom font-semibold text-xl sm:text-2xl">
            {props.title}
          </h1>
        </div>
        <div className="paragraph text-[16px] sm:text-[18px] mt-4 sm:mt-6 font-custom leading-[24px] sm:leading-[27px] font-light p-4 sm:ml-6">
          {props.description}
        </div>
        <div className="btn flex justify-center mt-4 sm:mt-6 mb-4">
          <button
            type="button"
            className="text-[#8064A2] bg-white border border-[#8064A2] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-6 sm:px-9 py-2 sm:py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-custom font-semibold text-[14px] sm:text-[16px]"
          >
            {props.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
