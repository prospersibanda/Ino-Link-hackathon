import React, { useState } from 'react'
import '../styles/resources.css'
import paint from '../Assets/paint-brush.png'
import board from '../Assets/paint-board.png'
import picture from '../Assets/picture.png'
import mic from '../Assets/mic.png'
import youtube from '../Assets/youtube.png'
import disco from '../Assets/disco.png'
import dev from '../Assets/dev.png'
import spaner from '../Assets/spaner.png'
import search from '../Assets/search.png'


const ExploreResources = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    { name: 'Creative Services', img: paint, link:'https://www.udemy.com/course/painting-for-the-petrified/?audience=Keyword&campaigntype=Search&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54YZ1b-hikL5Clsx8g_vLSYtUGI7VlJbAtwKY6qPpevNxCtYd-3N_sRoCwGkQAvD_BwE&language=EN&matchtype=b&portfolio=BrandTopic&priority=&product=Course&test=&topic=&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_78424287069_._ad_636510910546_._kw_painting+udemy_._de_c_._dm__._pl__._ti_kwd-1889372399661_._li_1028733_._pd__._&couponCode=OF83024F'},
    { name: 'Art & Illustration', img: board, link:'https://www.udemy.com/course/painting-for-the-petrified/?audience=Keyword&campaigntype=Search&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54YZ1b-hikL5Clsx8g_vLSYtUGI7VlJbAtwKY6qPpevNxCtYd-3N_sRoCwGkQAvD_BwE&language=EN&matchtype=b&portfolio=BrandTopic&priority=&product=Course&test=&topic=&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_78424287069_._ad_636510910546_._kw_painting+udemy_._de_c_._dm__._pl__._ti_kwd-1889372399661_._li_1028733_._pd__._&couponCode=OF83024F' },
    { name: 'Photography', img: picture, link:'https://www.udemy.com/course/photography-masterclass-complete-guide-to-photography/?audience=Keyword&campaigntype=Search&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54RmVRe-aeVyQN7duAzRHfyBGeguZgcus3Fdj5r7HE59v-boL9UilVRoCl0UQAvD_BwE&language=EN&matchtype=b&portfolio=BrandTopic&priority=&product=Course&test=&topic=&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_122656852238_._ad_535632655326_._kw_udemy+photography+course_._de_c_._dm__._pl__._ti_kwd-338978099262_._li_1028733_._pd__._&couponCode=OF83024F'},
    { name: 'Music & Audio', img: mic, link:'https://www.udemy.com/topic/Singing/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Branded-Topic_la.EN_cc.ROW&campaigntype=Search&portfolio=BrandTopic&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_77185092365_._ad_636572238680_._kw_udemy%20singing_._de_c_._dm__._pl__._ti_kwd-1886977726063_._li_1028733_._pd__._&matchtype=b&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54dyUIqHGJhgujcvBHuCZMii8u6ezDayPcsgMK1sviyo0ZOub6Ibv2xoCa6AQAvD_BwE'},
    { name: 'Voice Over', img: youtube, link:'https://www.udemy.com/course/hudson-voice-technique-for-voiceovers/?audience=Keyword&campaigntype=Search&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54e0tbOwA-FMaQNTIdN4fIS3cfUsixPyhxmPY2bpEZ9RHyGXCBpr5IRoCMZAQAvD_BwE&language=EN&matchtype=b&portfolio=BrandTopic&priority=&product=Course&test=&topic=&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_87321097828_._ad_636445578132_._kw_voice-over+udemy_._de_c_._dm__._pl__._ti_kwd-1890390371012_._li_1028733_._pd__._' },
    { name: 'Video & animation', img: disco, link:'https://www.udemy.com/course/adobe-premiere-pro-video-editing/?audience=Keyword&campaigntype=Search&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54SAmvD1p9njVQxWOx9VIly6MvVSVB06eyx-GMqqy7yTRv7pXe4w4vRoC_xEQAvD_BwE&language=EN&matchtype=b&portfolio=BrandTopic&priority=&product=Course&test=&topic=&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_84507567568_._ad_636572375726_._kw_video+editing+udemy_._de_c_._dm__._pl__._ti_kwd-1156767761457_._li_1028733_._pd__._https://www.udemy.com/course/adobe-premiere-pro-video-editing/?audience=Keyword&campaigntype=Search&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54SAmvD1p9njVQxWOx9VIly6MvVSVB06eyx-GMqqy7yTRv7pXe4w4vRoC_xEQAvD_BwE&language=EN&matchtype=b&portfolio=BrandTopic&priority=&product=Course&test=&topic=&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_84507567568_._ad_636572375726_._kw_video+editing+udemy_._de_c_._dm__._pl__._ti_kwd-1156767761457_._li_1028733_._pd__._' },
    { name: 'Web Design', img: dev, link:'https://www.udemy.com/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Branded-Topic_la.EN_cc.ROW&campaigntype=Search&portfolio=BrandTopic&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_78904295716_._ad_535757779592_._kw_udemy%20courses_._de_c_._dm__._pl__._ti_kwd-295955963002_._li_1028733_._pd__._&matchtype=b&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54ZFo9erd2TPww7IeWkr2RERjsYe_xT2z-N5YSHmrNnwPhBB2jGZURxoCtVIQAvD_BwE' },
    { name: 'Programming & Tech', img: spaner, link:'https://www.udemy.com/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Branded-Topic_la.EN_cc.ROW&campaigntype=Search&portfolio=BrandTopic&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_78904295716_._ad_535757779592_._kw_udemy%20programming%20courses_._de_c_._dm__._pl__._ti_kwd-307692779968_._li_1028733_._pd__._&matchtype=b&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54cjTTQiow0GULPArzT8yomI7JyoDfWIDvyIWT3SiLnMp3NDTgRjKmxoCugsQAvD_BwE' },
  ];

  const freelancerResources = [
    { name: 'Freelance Toolkit', img: spaner, link:'https://www.twine.net/toolkits/freelancer' },
    { name: 'Freelance Basics', img: spaner, link:'https://www.investopedia.com/terms/f/freelancer.asp#:~:text=A%20freelancer%20is%20an%20independent,a%20better%20work%2Flife%20balance.' },
    { name: 'Freelance Guides', img: spaner, link:'https://coursiv.io/v4?prc_id=18&utm_source=google&utm_medium=cpc&utm_campaign=21646343704&utm_adgroupid=166214643109&utm_keyword=how%20to%20start%20freelancing&utm_type=nonbrand_s&utm_alen=1&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54UcYcurXAYMp8Q8ZqvxSVhQl9O2gMnRuneOlxSv4H23B7tjZ0lfanBoChhQQAvD_BwE' },
    { name: 'Freelance Platforms', img: spaner, link:'https://www.hostinger.com/tutorials/best-freelance-websites' },
    { name: 'Freelance Tips', img: spaner, link:'https://www.shutterstock.com/blog/starting-freelance-business?kw=&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54axLHgypi1AglUpATlMVdDtRaebh4Zx6kw7uK0jdulzMjkgbh7k0FxoCgQEQAvD_BwE' },
    { name: 'Freelance Work', img: spaner, link:'https://www.upwork.com/freelance-jobs/' },
  ];

  const jobReadiness = [
    { name: 'Resume Building Tools', img: search, link:'https://cvgenius.com/cvg/best-cv-builder?utm_source=google&utm_medium=cpc&utm_campaign=21720113683&utm_term=cv%20builder&network=g&device=c&adposition=&adgroupid=170627618827&placement=&adid=714072881438&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54a2jvqdOrhJLYi9hEvWmCi-NQAqu1u4rGg_5u8JbRlqHYn4wInCiwRoCpJoQAvD_BwE' },
    { name: 'Interview Preparation Resources', img: search, link:'https://www.twinkl.co.za/resource/t3-p-131-preparing-for-an-interview-guide?utm_source=google&utm_medium=ppc&utm_campaign=ZA-PMAX&utm_group=Ad-Group-1&campaign_id=21167627444&ad_group_id=&ad_id=&keyword=&match=&network=x&device=c&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54c2xOXXVG5WB4NE5fLrJeNzct42fUqES-HRoJycLBh98pze5Akjb1RoCnFEQAvD_BwEhttps://www.twinkl.co.za/resource/t3-p-131-preparing-for-an-interview-guide?utm_source=google&utm_medium=ppc&utm_campaign=ZA-PMAX&utm_group=Ad-Group-1&campaign_id=21167627444&ad_group_id=&ad_id=&keyword=&match=&network=x&device=c&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54c2xOXXVG5WB4NE5fLrJeNzct42fUqES-HRoJycLBh98pze5Akjb1RoCnFEQAvD_BwE' },
    { name: 'Career Coaching Services', img: search, link:'https://ic3institute.org/donate/?utm_term=free%20career%20counseling%20near%20me&utm_campaign=Boost_DonateEmpower_15+June&utm_source=adwords&utm_medium=ppc&hsa_acc=9565398793&hsa_cam=20277044850&hsa_grp=156057181651&hsa_ad=662764065278&hsa_src=g&hsa_tgt=kwd-443094351587&hsa_kw=free%20career%20counseling%20near%20me&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54V3uihLm-3GZOybs4aRClOAGShuumWn-yeMbWqgjZHhy72tMBEhBmBoCaTwQAvD_BwE' },
  ];

  // Filter function to match the search query with the resource names
  const filterResources = (list) => {
    return list.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return (
<>
<h1 className='res-heading'>Build a successful creative career</h1>

      <div className='search'>
        <input
          type='text'
          placeholder='🔍 Search for resources, services, and more'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
        />
      </div>

      {/* Filtered Creative Services */}
      <div className='resource-buttons'>
        <h1>Explore Creative Services</h1>
        <div className='button-container'>
          {filterResources(resources).map((resource, index) => (
            <button key={index} className='res-option'onClick={() => window.location.href = resource.link} // Redirect on button click
            >
              <img src={resource.img} alt={resource.name} />
              <br />
              {resource.name}
             
            </button>
          ))}
        </div>
        <button className='more-btn'>More</button>
      </div>

      {/* Filtered Freelancer Resources */}
      <div className='resource-buttons'>
        <h1>Freelancer Resources</h1>
        <div className='button-container'>
          {filterResources(freelancerResources).map((resource, index) => (
            <button key={index} className='res-option'>
              <img src={resource.img} alt={resource.name} />
              <br />
              {resource.name}
            </button>
          ))}
        </div>
        <button className='more-btn'>More</button>
      </div>

      {/* Filtered Job Readiness and Career Coaching */}
      <div className='resource-buttons'>
        <h1>Job Readiness and Career Coaching</h1>
        <div className='button-container'>
          {filterResources(jobReadiness).map((resource, index) => (
            <button key={index} className='res-option'>
              <img src={resource.img} alt={resource.name} />
              <br />
              {resource.name}
            </button>
          ))}
        </div>
        <button className='more-btn'>More</button>
      </div>
    </>
  );
};


export default ExploreResources