import React from 'react';
import './video.css'
import Video from './video'
import video from './video1.png'
function rec(){
    return(
        <div className="rec">
            <h2>Recommended </h2>
            <div className="videos">
              <Video image="https://cdn-images-1.medium.com/max/1200/1*shSqPkE69QotaKeNHXpUtQ.png"
              title="Learn Python in 5 minuetes"
              channel="clever programmer" 
              views="2.3M views"
              timestamp="3 days ago"/>

            <Video image= "https://www.flixxy.com/amazing-10-year-old-opera-singer-emanne-beasha-americas-got-talent-2019-image10.jpg"
              title="Top 10 talent"
              channel="America's got talent" 
              views="1.2M views"
              timestamp="1 year ago"/>

            <Video image= "https://bulletinmail.com/wp-content/uploads/2020/07/1595481125_One-Direction-solo-careers-ranked-From-Zayn-Malik-to-Harry.jpg"
              title="One direction in the ellen show"
              channel="One Direction" 
              views="1M views"
              timestamp="2 year ago"/>


           <Video image= "https://i.ytimg.com/vi/5urUZUWoTLo/maxresdefault.jpg"
              title="Learn everything in less time"
              channel="Derek Banas" 
              views="1M views"
              timestamp="1 month ago"/>

         <Video image= "https://i.ytimg.com/vi/RKioDWlajvo/maxresdefault.jpg"
              title="Lehenga || Jass Manak"
              channel="T series" 
              views="4M views"
              timestamp="1 month ago"/>

           <Video image= "https://techcrunch.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-17-at-11.12.12-AM.png?w=764"
              title="Old Town road 🔴 Lis nan x"
              channel="T series" 
              views="4M views"
              timestamp="1 month ago"/>
            
            <Video image= "https://i.ytimg.com/vi/5ap2WajueJ4/maxresdefault.jpg"
              title="Technical Guruji  ◼️ Biography"
              channel="Technical Guruji" 
              views="4M views"
              timestamp=" 8 month ago"/>

           <Video image= "https://i.ytimg.com/vi/ygIj9X8jAnU/maxresdefault.jpg"
              title="JavaScript Training"
              channel="Hitesh Choudhary" 
              views="4M views"
              timestamp=" 24 hours ago"/>   

        <Video image= "https://i.ytimg.com/vi/3DTMeiF-0Vk/maxresdefault.jpg"
              title="Fun with Chanachalani"
              channel= "PinkVilla" 
              views="4M views"
              timestamp="1 year ago"/>     

       <Video image= "https://i.ytimg.com/vi/ocPa8w0UHks/maxresdefault.jpg"
              title="Shape of you Live "
              channel= "SoundVilla" 
              views="4M views"
              timestamp="1 year ago"/>   


     <Video image= "https://i.ytimg.com/vi/fmOzQMgFoEo/maxresdefault.jpg"
              title="Whats in my bag wit Deepika "
              channel= "PinkVilla" 
              views="4M views"
              timestamp="1 year ago"/>   


   <Video image= "https://phl17.com/wp-content/uploads/sites/7/2020/07/One-Direction-10th-Anniversary.jpg?w=1080&h=720&crop=1&resize=1280,720"
              title="10 years of One Direction"
              channel= "One Direction" 
              views="4M views"
              timestamp="1 month ago"/>     


          
            
            
            
            
            

            </div>

        
        </div>
    )
}
export default rec;