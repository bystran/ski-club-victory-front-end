import React from 'react'
import PerkBox from "../../PerkBox"
import LinkButton from "../../LinkButton"  


//import all Icons
import LyzPriprava from "../../../assets/icons/lyziarska_priprava_icon.svg";
import PohPriprava from "../../../assets/icons/pohyb_priprava_icon.svg";
import BratislavaLogo from "../../../assets/images/logo-bratislavsky-sk.png";
import '../../../saas/components/sections/HomeTwo.scss';

const Section2 = () => {
    console.log(BratislavaLogo);
    return (
        <>
            <div className='partnery'>
                <h1>Partnery</h1>
                <div className='partner-logos'>
                    <a href='https://bratislavskykraj.sk/'>
                        <img src={BratislavaLogo} />
                    </a>
                </div>
            </div> 
            <div className = 'home-section-2'>
 
                <div className = 'section-2-text'>
                    <h2>Lyžiarsky klub</h2>
                    <h1>Naučíme vaše deti športovať </h1>
                    <p>
                        Lyžiarsky klub Victory je jedným z bratislavských
                        lyžiarskych oddielov. Venuje sa športovej a lyžiarskej 
                        príprave <span className='accent-1'>detí a mládeže vo 
                        veku 3 - 15 rokov</span>. Tréningový proces je 
                        zameraný nielen na samotnú <span className='accent-1'>
                        lyžiarsku prípravu, </span> ale aj rozvoj kondície, 
                        koordinácie, obratnosti, rovnováhy,
                        rýchlosti, sily, súťaživosti, a pod...
                    </p>

                    <LinkButton
                        href="/o-nas"
                        >
                        Zisti viacej
                    </LinkButton>

                </div>

                <div className = 'perk-list'>
                    <PerkBox
                        heading = "Lyžiarska príprava"
                        icon= {<LyzPriprava />}
                        >
                        Techniku na lyžiach trénujeme vo voľnej jazde,
                        ako aj v rôznych terénoch - v bubnoch, v hlbokom
                        snehu, či na skokoch. Lyžujeme v malých bránach,
                        sieťovkách, kĺbových tyčiach. Trénujeme techniku 
                        slalomu, obrovského slalomu, tí väčší aj techniku 
                        jazdy super-G a zjazdu. 
                    </PerkBox>
                    <PerkBox
                        heading = "Pohybová príprava"
                        icon= {<PohPriprava />}
                        >
                        Našu pozornosť venujeme aj pohybovému rozvoju 
                        detí, tréningom gymnastiky, atletiky, skokom na
                        trampolíne, korčuľovaniu na kolieskových in line 
                        korčuliach, bicyklovaniu v teréne na horských
                        bicykloch, behu, florbalu, plávaniu, vodnému lyžovaniu
                        , surfovaniu...
                    </PerkBox>
                    <PerkBox
                        heading = "Súťaže a testy"
                        icon= {<LyzPriprava />}
                        >
                        Súčasťou sú špeciálne testy pohybovej výkonnosti. 
                        Zúčastňujeme sa na rôznych detských pretekoch, 
                        či už na Slovensku , alebo na medzinárodných pretekoch 
                        v zahraničí. V lete sa zúčastňujeme pretekov na kolieskových 
                        korčuliach, na horských bicykloch, v slalome na suchu...
                    </PerkBox>
                </div>

            </div>
        </>
    )
}

export default Section2
