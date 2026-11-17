import React, { useState } from 'react';

function Home() {
    return (
    <div className="">
        {/* <!-- Glow effect --> */}
        <div className="fmld-absolute w-96 h-96 bg-blue-600/30 fmld-round blur-3xl top-20 right-20"></div>
        <div className="fmld-absolute w-72 h-72 bg-blue-400/20 fmld-round blur-2xl bottom-20 left-20"></div>

        <div className="max-w-2xl relative z-10 grid-c-1 grid-center justify-center items-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Site Web <span id="typewriter" className="text-blue-400">Professionnel</span><span id="cursor" className=""></span> <br/> pour Votre Entreprise
            </h1>
            <p className="mt-4 text-lg text-gray-300">Je crée des sites web pour les indépendants, les startups, PME et les marques en pleine croissance. Livraison rapide, entièrement personnalisée et à des prix imbattables.</p>
            <div className="mt-6 flex wrap gap-2 justify-center">
                <a href="/builder" className="px-6 py-3 btn fmld-round fmld-pdg-8 hover:bg-blue-700 transition">Creer mon CV</a>
                <a href="/login" className="px-6 py-3 border- bg-green-500 btn fmld-round fmld-pdg-8 hover:bg-green-600 transition"> <span className="">Creer un compte</span></a>
            </div>
        </div>
        
    </div>)
}

export default Home;
