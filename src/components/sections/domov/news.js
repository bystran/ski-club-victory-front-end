import React from 'react';
import useFacebookData from '../../../hooks/useFacebookData';
import moment from 'moment/min/moment-with-locales';
import '../../../saas/components/sections/News.scss';
import FbIcon from '../../../assets/icons/awe-fb.svg';
import InstaIcon from'../../../assets/icons/awe-insta.svg'; 

moment.locale("sk");

const NewsCard = (props) =>{
    const { full_picture, created_time, message, permalink_url } = props
    
    return (
        <div className="news-card">
            <div 
                className='img'
                style={{
                    backgroundImage:`url(${full_picture})`
                }}
            >
                <span className='news-tag'>Facebook</span>
                
            </div>
            <div className="text">
                
                
                <p>{message}</p>
                
                <div className="bottom-row-text">
                    <a href={permalink_url}>Čítaj viacej</a>

                    <span className='date'>{moment(created_time).fromNow()}</span>
                </div>
            </div>


        </div>
    )

}

const News = () => {
    const fbData = useFacebookData();
    return (
        <div className="news-section">
            <h1><span className='accent-color'>Novinky</span> Victory</h1>
            <div className="content-holder">
                <div className='left-news-holder'>
                    {
                        fbData && fbData.news ?
                        fbData.news.slice(0,6).map( n => 
                            <NewsCard
                                key={n.id}
                                {...n}
                            >

                            </NewsCard>
                        ):''
                    }
                </div>
                <div className='right-side-holder'>
             
                    {
                        fbData && fbData.img_of_the_week ?
                        <div 
                            className="foto-tyzdna"
                            style={{
                                background:`
                                linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.17) 68.61%, rgba(0, 0, 0, 0.97) 94.13%, #000 100%),
                                url(${fbData.img_of_the_week.full_picture})
                                center center/cover no-repeat
                                `
                            }}
                            
                            
                        > 
                            <span className="ht">#fotkatyzdna</span>
                        </div>: ''
                    }
                    <a href="http://facebook.com/skiclubvictory">
                        <div className="social-net-box fb"><span>Sledujte Náš FB </span><FbIcon /></div>
                    </a>
                    <a href="https://instagram.com/skiclubvictory">
                        <div className="social-net-box insta"><span>Pozrite si náš Instagram</span><InstaIcon /></div>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default News
