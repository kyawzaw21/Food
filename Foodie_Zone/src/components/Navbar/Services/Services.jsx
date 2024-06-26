import React from 'react'
import Img from "../../../assets/biryani.png";
import Img2 from "../../../assets/biryani2.png";
import Img3 from "../../../assets/biryani4.png";



const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: "Biryani",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img: Img2,
      name: "Chiken kari",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
      id: 3,
      img: Img2,
      name: "Cold Cofee",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
  ];

const Services = () => {
  return (
    <>
        <div className="py-10">
            <div className="container">
               
                {/* Card section*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {
                         ServicesData.map(({id,img,name, description}) =>{
                            return <div key={id}
                            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                            >
                                <div className="h-[100px]">
                                   <img 
                                   src={img} 
                                   alt=""
                                   className="max-w-[200px] block mx-auto transform -translate-y-14
                                            group-hover:scale-105 group-hover:rotate-6 duration-300" 
                                   /> 
                                </div>
                                    <div className='p-4 text-center'>
                                    <h1 className="text-xl font-bold">{name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                                    {description}
                  </p>  
                                    </div>
                                </div>
                         })   
                        }
                    </div>
            </div>
        </div>
    </>
  )
}

export default Services
