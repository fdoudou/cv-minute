import React, { useState } from 'react';
import template01 from "./assets/template-01.webp";
import template02 from "./assets/template-02.webp";
import template03 from "./assets/template-03.webp";
import om from "./assets/om-logo.webp";
import wave from "./assets/wave-logo.webp";
import creditcard from "./assets/credit-card.svg";
import robot from "./assets/robot.svg";
import usergroup from "./assets/user_group.png";
import Footer from "./components/Footer.jsx";

function Home() {
    return (
    <div className="">
        <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-b- relative">
            {/* <!-- Glow effect --> */}
            <div className="absolute w-96 h-96 bg-blue-600/30 rounded-full blur-3xl top-20 right-20"></div>
            <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-2xl bottom-20 left-20"></div>

            <div className="max-w-2xl relative z-10 grid-c-1 grid-center justify-center items-center">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Un CV <span className="text-primary">Professionnel</span> <br/> pour Booster votre Carriere
                </h1>
                <p className="max-w-md mt-4 text-lg text-gray-300-">Tout ce dont vous avez besoin pour créer, améliorer et optimiser votre CV grâce à une technologie d’IA de pointe.</p>
                <div className="mt-6 flex wrap gap-2 justify-center">
                    <a href="/builder" className="px-6 py-3 btn fmld-round fmld-pdg-8 hover:bg-blue-700 transition">Créer mon CV</a>
                    <a href="/login" className="px-6 py-3 border border-blue-400 text-primary btn- fmld-round fmld-pdg-8 hover:bg-blue-600 transition transparent"> <span className="">Se Connecter</span></a>
                </div>
                <div class="flex items-center gap-4 mt-8 mx-auto text-gray-600"><img alt="" style={{height:"30px"}} class="h-8" src={usergroup}/> Trusted by 0 people</div>
            </div>
        </section>
        
        <section className="py-20 flex flex-col justify-center items-center px-6">
            <div className="max-w-2xl relative grid-c-1 grid-center justify-center items-center">
                <h2 className="text-5xl text-slate-700 font-bold leading-tight text-center">
                    Ton CV professionnel en seulement 3 étapes!
                </h2>
                <p className="mt-4 text-lg text-gray-300- text-center">
                    Obtiens ton CV compatible ATS en moins de 5mins en seulement 3 étapes simples.
                </p>
                <div className="grid md:grid-cols-3 gap-10 mt-4 ">
                    <div className="p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition">
                        <h3 className="font-semibold text-xl text-blue-600- step">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-12 h-12 p-3 text-white rounded-xl" aria-hidden="true" style={{background: "linear-gradient(rgb(18, 183, 172), rgb(8, 182, 206))"}}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                            {/* <img className="inline-block" src="images/rocket-launch.webp" alt="emoji fast" height="28px"  width="28px"/> */}
                            Crée ou importe ton CV</h3>
                        <p className="mt-2 text-gray-600">Visualisez votre site web en temps réel pendant que nous le construisons.</p>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition">
                        <h3 className="font-semibold text-xl text-blue-600- step">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen w-12 h-12 p-3 text-white rounded-xl" aria-hidden="true" style={{background:" linear-gradient(rgb(53, 136, 242), rgb(11, 176, 215))"}}><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
                            {/* <img className="inline-block" src="images/art.webp" alt="emoji palette" height="28px"  width="28px"/> */}
                            Choisis un modele et personnalise</h3>
                        <p className="mt-2 text-gray-600">Quelque soit le design que vous souhaitez, nous le créerons pour vous.</p>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition">
                        <h3 className="font-semibold text-xl text-blue-600- step">
                            <svg class="size-6 stroke-purple-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-12 h-12 p-3 text-white rounded-xl" aria-hidden="true" style={{background:"linear-gradient(rgb(32, 195, 99), rgb(17, 185, 126))"}}><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-12 h-12 p-3 text-white rounded-xl" aria-hidden="true" style={{background:"linear-gradient(rgb(32, 195, 99), rgb(17, 185, 126))"}}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg> */}
                            {/* <img className="inline-block" src="images/calendar.webp" alt="emoji time" height="28px" width="28px"/> */}
                            Telecharge et postule
                        </h3>
                        <p className="mt-2 text-gray-600">Délais d'exécution rapides pour votre entreprise.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 flex flex-col justify-center items-center px-6">
            <div className="max-w-2xl relative grid-c-1 grid-center justify-center items-center">
                <h2 className="text-5xl text-slate-700 font-bold leading-tight text-center">
                    Plusieurs modéles de CV disponibles
                </h2>
                <p className="mt-4 text-lg text-gray-300- text-center">
                    Choisis parmis nos différents modèles personnalisables, conçus avec soin et optimisés ATS et crées ton CV sans attendre.
                </p>
                <div className="mt-6 flex wrap gap-2 justify-center">
                    <div className=''>
                        <img src={template01} width={"100%"} className=''/>
                    </div>
                    <div className=''>
                        <img src={template02} width={"100%"} className=''/>
                    </div>
                    <div className=''>
                        <img src={template03} width={"100%"} className=''/>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 flex flex-col justify-center items-center px-6">
            <div className="max-w-2xl relative grid-c-1 grid-center justify-center items-center">
                <h2 className="text-5xl text-slate-700 font-bold leading-tight">
                    Editeur de CV avec IA intégré
                </h2>
                <p className="mt-4 text-lg text-gray-300-">
                    Notre processus simplifié vous permet de créer un CV professionnel en quelques minutes, grâce à des outils et fonctionnalités intelligents basés sur l’IA.
                </p>
                <div className="mt-6 grid md:grid-cols-2 gap-10">
                    <div className=''>
                        <p className="text-lg text-gray-300- text-justify">
                            Notre processus simplifié vous permet de créer un CV professionnel en quelques minutes, grâce à des outils et fonctionnalités intelligents basés sur l’IA.
                        </p>
                    </div>
                    <div className=''>
                        <img src={robot} width={"100%"} className=''/>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-20 flex flex-col justify-center items-center px-6">
            <div className="max-w-2xl relative grid-c-1 grid-center justify-center items-center">
                <h2 className="text-5xl text-slate-700 font-bold leading-tight">
                Choisissez votre formule
                </h2>
                <p className="mt-4 mb-4 text-lg text-gray-300- text-center">
                Commencez gratuitement et adaptez votre offre à mesure que vous vous développez. Trouvez la formule idéale pour vos besoins en création de contenu.
                </p>
                <div className="grid md:grid-cols-2 gap-10 mt-4">
                    <div className="mt-4 p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition">
                        <h3 className="font-semibold text-xl text-slate-700">
                            Formule gratuit 
                        </h3>
                        <p className="mt-2 text-gray-600">Fonctionnalités essentielles dont vous avez besoin. Toujours gratuit</p>
                        <ul className='px-4 mt-2'>
                            <li className='py-2 feat'>
                                Editeur de CV
                            </li>
                            <li className='py-2 feat'>
                                Dashboard
                            </li>
                            <li className='py-2 feat'>
                                Téléchargement PDF
                            </li>
                            <li className='py-2 feat'>
                                Examen du CV / IA
                            </li>
                            <li className='py-2 feat'>
                                Import de CV
                            </li>
                            <li className='py-2 feat'>
                                Compte gratuit
                            </li>
                        </ul>
                    </div>

                    <div className="mt-4 p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition">
                        <h3 className="font-semibold text-xl text-slate-700">
                            Formule avancée
                        </h3>
                        <p className="mt-2 text-gray-600">Toutes les fonctionnalités de la formule gratuite + onctionnalités exclusives. </p>
                        <ul className='px-4 mt-2'>
                            <li className='py-2 feat'>
                                Editeur de CV
                            </li>
                            <li className='py-2 feat'>
                                Dashboard
                            </li>
                            <li className='py-2 feat'>
                                Téléchargement PDF
                            </li>
                            <li className='py-2 feat'>
                                Examen du CV / IA
                            </li>
                            <li className='py-2 feat'>
                                Import de CV
                            </li>
                            <li className='py-2 feat'>
                                Compte gratuit
                            </li>
                        </ul>
                        <div className="mt-6 flex wrap gap-2 justify-center">
                            <a href="/builder" className="px-6 py-3 btn fmld-round fmld-pdg-8 hover:bg-blue-700 transition">S'abonner</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-20 flex flex-col justify-center items-center px-6">
            <h3 className="font-semibold text-xl text-blue-600-">
                Moyens de paiement 
            </h3>
            <div className="max-w-2xl grid md:grid-cols-3 gap-10 items-center justify-center">
                <img src={wave}/>
                <img src={om}/>
                <img src={creditcard}/>
            </div>
        </section>
        
        <section className="py-20 flex flex-col justify-center items-center px-6">
            <div className="max-w-4xl grid md:grid-cols-2 gap-10 items-center justify-center">
                <p>
                Créez un CV professionnel qui vous permet de vous démarquer et de décrocher un emploi
                </p>
                <div>
                    <a href="/builder" className="px-6 py-3 btn fmld-round- fmld-pdg-8 hover:bg-blue-700 transition">Créer mon CV</a>
                </div>
            </div>
        </section>
        <Footer/>
    </div>)
}

export default Home;
