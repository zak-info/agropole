import Image from 'next/image'
import React from 'react'
import map from "@/public/images/map.png"

const Map = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-6 bg-slate-50 py-16'>
            <Image src={map} placeholder='blur' alt='map' width={500} height={500} className='shadow-[0_20px_25px_-5px_rgba(0,131,224,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]' />
            <div className='p-4 bg-white rounded-xl shadow-[0_20px_25px_-5px_rgba(0,131,224,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]'>
                <div className="mx-auto max-w-md  text-center text-base leading-relaxed text-slate-800">
                    <span className='t font-bold'>Tout votre réseau en un clic Avec Agropole</span>
                    <ul className='w-full flex flex-col items-start text-start gap-4 text-xs list-disc list-inside mt-12'>
                        <li> connectez-vous facilement à votre quartier : <strong>citoyens</strong> ,<strong>magasins</strong> ,<strong>grossistes</strong> et bien plus encore</li>
                        <li>Simplifiez vos achats, vos commandes et vos collaborations.</li>
                        <li>Une solution rapide, pratique et accessible pour tous.</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Map