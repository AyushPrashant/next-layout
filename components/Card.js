import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="cards w-[47%] h-[323px] bg-[#FFFFFF] ">
                <div className={`card cursor-pointer hover:bg-[#8064A2] rounded-lg w-[608px] h-[297px] relative border border-[#CED4DA] mt-[100px] ml-[60px]`}>
                    <div className="logo absolute ml-[44px] flex items-center gap-6 mt-[40px]">
                        <img src={props.image} alt="" />
                        <h1 className='font-custom font-semibold text-2xl'>{props.title}</h1>
                    </div>
                    <div className="paragraph p-5 absolute ml-[44px] text-[18px] mt-[98px] font-custom leading-[27px] font-light">
                        {props.description}
                    </div>
                    <div className="btn mt-[210px] ml-12 ">
                        <button type="button" className="text-[#8064A2] bg-white border border-[#8064A2] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-lg text-sm px-9 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-custom font-semibold text-[16px]">{props.btn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
