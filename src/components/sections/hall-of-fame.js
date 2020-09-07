import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import NextArrow from '../../assets/icons/next_arrow.svg';
import PrevArrow from '../../assets/icons/prev_arrow.svg';
import Medal from '../../assets/icons/medal.svg';
import Trophy from '../../assets/icons/trophy.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import '../../saas/components/sections/HallOfFame.scss';
import BlueMtnBg from '../BlueMountainBg';

const query =  graphql`
 {
    data:allStrapiUspech {
      nodes {
        Level
        Meno
        Titul
        TitulKategoria
        id
      }
    }
  }
`

const FameCard = (props) => {
    const { name, title, subtitle, level} = props;

    return (
        <div className={`fame-card ${level === 'velky' ? 'trophy':'meal'}`}>
            { level === "velky" ? <Trophy /> : <Medal /> }
            <h2 className="white">{ name }</h2>
            <h3 className="white">{ title }</h3>
            <h4 className="white">{ subtitle }</h4>            
        </div>
    )
}
const HallOfFame = () => {
    const {data:{nodes}} = useStaticQuery(query);
    const settings = {
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        centerMode: true,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 730,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      };
    return (
        <BlueMtnBg 
            className='hall-of-fame'
        >
            <h1 className="white">Sieň Slávy</h1>
            <div className="hall-of-fame-velky-holder">
                {
                    nodes.filter(node => node.Level === 'velky')
                        .map( node => 
                            <FameCard
                                key= {node.id} 
                                name = {node.Meno}
                                title = {node.Titul}
                                subtitle = {node.TitulKategoria}
                                level = { node.Level }
                            />
                        )
                }
                
            </div>
            <div className="hall-of-fame-maly-holder">
                <Slider
                    {...settings}
                >
                    {
                        nodes.filter(node => node.Level === 'maly')
                            .map( node => 
                                <FameCard
                                    key= {node.id} 
                                    name = {node.Meno}
                                    title = {node.Titul}
                                    subtitle = {node.TitulKategoria}
                                    level = { node.Level }
                                />
                            )
                    }
                </Slider>
    

            </div>

        </BlueMtnBg>
    )
}

export default HallOfFame
