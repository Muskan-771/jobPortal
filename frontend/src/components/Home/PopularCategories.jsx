import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      // subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
        link: "https://www.udemy.com/course/graphic-design-masterclass-everything-you-need-to-know/?utm_source=bing&utm_medium=udemyads&utm_campaign=BG-Search_Keyword_Beta_Prof_la.EN_cc.India&campaigntype=Search&portfolio=Bing-India&language=EN&product=Course&test=&audience=Keyword&topic=Graphic_Design&priority=Beta&utm_content=deal4584&utm_term=_._ag_1324913899912315_._ad__._kw_graphic+design+courses_._de_c_._dm__._pl__._ti_kwd-82808243944959%3Aloc-90_._li_149233_._pd__._&matchtype=e&msclkid=9d9c30d3e1c41b56248158e8a4677577&couponCode=IND21PM",
    },
    {
      id: 2,
      title: "Mobile App Development",
      // subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
       link:"https://www.coursera.org/learn/introduction-to-mobile-app-development",
    },
    {
      id: 3,
      title: "Frontend Web Development",
      // subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
        link:"https://www.coursera.org/professional-certificates/meta-front-end-developer?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_meta-front-end-developer_meta_ftcof_professional-certificates_cx_dr_tt_gg_sem_pr_in_all_m_hyb_25-04_sbetest&campaignid=22464280725&adgroupid=177066874223&device=m&keyword=front%20end%20certification%20courses&matchtype=b&network=g&devicemodel=&creativeid=696893433118&assetgroupid=&targetid=kwd-1410374709515&extensionid=&placement=&gad_source=1&gad_campaignid=22464280725&gbraid=0AAAAADdKX6ZbTD8qr-Z2nUIAln0lkwloP&gclid=Cj0KCQjw0erBBhDTARIsAKO8iqRcEMvmxzXDgSfv2gegVEqseH2uwU8qM_R_ofUY3bvmeYDEKa34NJsaArPFEALw_wcB",
    },
    {
      id: 4,
      title: "MERN STACK Development",
      // subTitle: "1000+ Open Postions",
      icon: <FaReact />,
       link:"https://www.udemy.com/course/fullstack-web-development-course-projects-base/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Beta_Prof_la.EN_cc.India&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=DSA&topic=&priority=Beta&utm_content=deal4584&utm_term=_._ag_160270535505_._ad_696202838331_._kw__._de_m_._dm__._pl__._ti_dsa-1677053911088_._li_9050483_._pd__._&matchtype=&gad_source=1&gad_campaignid=21178559974&gbraid=0AAAAADROdO0up3oa7flXC1qX5YNIRAf2T&gclid=Cj0KCQjw0erBBhDTARIsAKO8iqT-KQzB8aMBVefWdSQ90dA50vatXjDrhnvngdjpdRC688uhxE5zRl8aAqBzEALw_wcB",
    },
    {
      id: 5,
      title: "Account & Finance",
      // subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
         link:"https://www.coursera.org/courses?query=accounting",
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      // subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
        link:"https://aiskillsnavigator.microsoft.com/en-us?OCID=AID2200904_PSOC_AISkillsNavigator_GA_GeneralSkillsIN_RSA&gad_source=1&gad_campaignid=22582511489&gbraid=0AAAAAqiz72B8X83g_H1-DEBhxeHfbbwsD&gclid=Cj0KCQjw0erBBhDTARIsAKO8iqQlDTDn78PwbXK1k9puNK4uowFqsfR1dK3roqnC0m_1ToY3GQH-xYAaAq4nEALw_wcB",
    },
    
    {
      id: 7,
      title: "Video Animation",
      // subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
         link:"https://www.udemy.com/topic/animation/?deal_code=UDEAFNULP0324&utm_term=Homepage&utm_content=Textlink&utm_campaign=NewUserLP0324&utm_source=aff-campaign&utm_medium=udemyads&LSNPUBID=znpz0s2okgU&ranMID=47901&ranEAID=znpz0s2okgU&ranSiteID=znpz0s2okgU-hXF7jTQhcT8LsgomWJDo7g&gad_source=1",
    },
    {
      id: 8,
      title: "Game Development",
      // subTitle: "80 Open Positions",
      icon: <IoGameController />,
        link:"https://www.coursera.org/courses?query=game%20development",
    },
  ];
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                {/* <p>{element.subTitle}</p> */}
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-link"

                >
                Explore Courses
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
