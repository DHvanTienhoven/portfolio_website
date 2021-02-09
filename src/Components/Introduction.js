import React from 'react';
import portrait from './img/profielfoto.jpg'

const Introduction=()=> {
    return (
        <div className="introduction">
            <p>Mijn naam is Darya en vanaf half augustus 2020 ben ik bezig met de opleiding Fullstack development bij Winc
            Academy. Het Frontend gedeelte van de opleiding heb ik inmiddels afgerond en ik ben nu met de backend bezig.
            Op deze pagina heb ik de projecten verzameld die ik maakte in het kader van mijn opleiding en ook de projecten
            die ik voor mijn plezier deed of in opdracht van anderen. <br/> Ik had toen ik met de opleiding begon wel het 
            idee dat ik vanwege mijn analytisch denkvermogen goed zou kunnen zijn in programmeren, maar ik vond het verrassend
            hoeveel plezier ik had in het leren programmeren. Ook de creativiteit die nodig is om tot oplossingen te komen verraste
            mij. Ik vind het altijd interessant om mijn werk te vergelijken met het werk van mede-studenten om te zien hoe iedereen
            tot een verschillende oplossing is gekomen voor hetzelfde probleem. Ik houd ervan om 'in- en uit te zoomen' op onderdelen 
            van een project en ik blijf vaak langere tijd aan mijn code 'schaven', 
            tot ik het zelf mooi vind. Wat ik ook heel tof vind aan het programmeren is dat er altijd nieuwe dingen te ontdekken 
            en te leren zijn, nu natuurlijk, omdat ik het letterlijk aan het leren ben, maar ik verwacht dat dat ook in de toekomst
            zo blijft. Omdat er altijd nieuwe ontwikkelingen zijn. <br/> Naast programmeren heb ik vele interesses onder andere 
            geschiedenis, archeologie, politiek, taalwetenschap, design en theater. Ik houd ook van afspreken met vrienden, lezen, yoga, 
            wandelen, schaatsen, hardlopen en podcasts luisteren.
            </p>
            <img src = {portrait} alt = "portret Darya van Tienhoven"  ></img>
        </div>
    )
}

export default Introduction
