import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className=''>
            <div id='nav-panel' className=''>
                <ul className=''>
                    <li className=''>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li className=''>
                        <Link to={"/templates"}>Templates</Link>
                    </li>
                    <li className=''>
                        <Link to={"/home"}>Compte</Link>
                    </li>
                    <li className=''>
                        <Link to={"/home"}>Abonnement</Link>
                    </li>
                    <li className=''>
                        <Link to={"/home"}>Retourner a l'acceuil</Link>
                    </li>
                </ul>
            </div>
            <div id='main-content' className=''>
            
            </div>
        </div>
    )
}

export default Dashboard;
