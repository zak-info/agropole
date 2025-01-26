import Image from 'next/image'
import React from 'react'
import AreasSlider from './AreasSlider'
import c from "@/public/images/c.png"
import s from "@/public/images/s.png"
import l from "@/public/images/l.png"

const Ares = () => {
    const areas = [
        { img: "c", h1: "communication et annonces", href: "#", p: "Discussion chat, Envoi et réception des commandes, Envoi  et réception des devis Diffusion des annonces" },
        { img: "s", h1: "Stock ", href: "#", p: "Voir détail de stock,Voir la disponibilité des produits , OPS ( Gestion stock + caisse)" },
        { img: "l", h1: "Livraison et Localisation", href: "#", p: "Demander la livraison et  Localisation des clients et fournisseurs" },
        // { img: "/images/aca.png", h1: "E-learning programs", href: "#", p: "E-learning programs ,Courses in architecture, design and software related to architecture." },
        // { img: "/images/p5.webp", h1: "marketplace", href: "#", p: "A marketplace for construction products (an online marketplace for all construction related products)A marketplace for construction products ,an online marketplace for all construction related products." },
    ]
    return (
        <div  id="services" className='w-full flex flex-col items-center pb-16 pt-8 lg:py-[111px]'>
            <h1 className='text-3xl md:text-4xl text-black font-extrabold'>Domaines de services</h1>
            <p className='w-5/6 text-xs md:text-md  text-center text-neutral-600 font-light mt-[20px]'>Nous avons de l&apos;expérience dans plusieurs domaines, allant de la gestion de magasins à des solutions de niveau entreprise.</p>
            <AreasSlider areas={areas} />     
            <div className='hidden  w-full lg:flex flex-wrap justify-center items-center gap-12 mt-6 '>
                {
                    areas.slice(0, 3).map((area, index) => (
                        <div key={index} className='w-2/3 md:w-2/5 lg:w-[370px] py-[40px] lg:h-[384px] flex flex-col items-center justify-center lg:gap-[30px] c-border rounded-[35px] md:rounded-[27px] shadow-[0_20px_25px_-5px_rgba(0,131,224,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]'>
                            <Image src={area.img == "c" ? c :area.img == "s" ? s :area.img == "l" ? l :"/images/c.png"}  placeholder='blur' alt={area.h1} width={500} height={500} className='w-20 h-20 rounded-[26px]' />
                            <div className='w-4/5 md:w-[240px] lg:w-[310px] flex flex-col items-center gap-[24px] mt-[30px] lg:mt-0 '>
                                <h1 className='text-xl lg:text-2xl'>{area.h1}</h1>
                                <p className='text-center mt-0 text-[#2D2D2D] text-sm lg:text-md font-light'>{area.p}</p>
                            </div>
                            <a href={area.href} className='mt-[6px] lg:mt-0 text-sky-500 0 no-underline flex items-center gap-2 hover:gap-4 transition-all ease-in-out duration-150'>Lear More <i className="ri-arrow-right-line text-lg"></i></a>
                        </div>
                    ))
                }

                <div className='hidden lg:hidden w-2/3 md:w-2/5 lg:w-[370px] py-[40px] lg:h-[384px] md:flex flex-col items-center justify-center lg:gap-[30px] c-border rounded-[35px] md:rounded-[27px] shadow-[0_20px_25px_-5px_rgba(0,131,224,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]'>
                    <Image alt='img' src={"/images/p4.webp"} width={1980} height={1080} className='w-20 h-20 rounded-[26px]' />
                    <div className='w-4/5 md:w-[240px] lg:w-[310px] flex flex-col items-center gap-[24px] mt-[30px] lg:mt-0 '>
                        <h1 className='text-2xl lg:text-3xl'>appartments</h1>
                        <p className='text-center mt-0 text-[#2D2D2D] text-sm lg:text-md font-light'>No need to worry about screen size. Anima&apos;s Landing Page Ul Kit adapts to any screen size, from desktop to mobile.</p>
                    </div>
                    <a href={"#"} className='mt-[6px] lg:mt-0 text-teal-600 no-underline flex items-center gap-2 hover:gap-4 transition-all ease-in-out duration-150'>Lear More <i className="ri-arrow-right-line text-lg"></i></a>
                </div>

                {/* <div className='hidden lg:hidden w-2/3 md:w-2/5 lg:w-[370px] lg:h-[384px] md:flex flex-col items-center justify-center p-6 py-8 gap-4 c-border rounded-[35px] md:rounded-[27px] shadow-[0_20px_25px_-5px_rgba(0,131,224,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]'>
                    <Image src={"/images/p4.jpg"} width={1980} height={1080} className='w-20 h-20 rounded-[26px]' />
                    <h1 className='text-2xl lg:text-3xl'>appartments</h1>
                    <p className='text-center mt-0 text-[#2D2D2D] text-sm lg:text-md font-light'>No need to worry about screen size. Anima's Landing Page Ul Kit adapts to any screen size, from desktop to mobile.</p>
                    <a href={"#"} className='mt-0 text-teal-600 no-underline flex items-center gap-2 hover:gap-4 transition-all ease-in-out duration-150'>Lear More <i className="ri-arrow-right-line text-lg"></i></a>
                </div> */}


            </div>

        </div>
    )
}

export default Ares