import React from 'react';

const About = () => {
    return (
        <div id="about"className='mb-5'>
           <h1 className="text-white text-center my-5">ABOUT <span className="text-danger">US</span></h1>
           <div className="d-flex justify-content-center align-items-center">
               <div>
                   <img style={{height: '400px' , width: '500px'}} src="https://www.advancedeyecarefl.com/wp-content/uploads/group_-web.png" alt="" />
               </div>
               <div>
                   <p className="text-white ms-5">Eye Care is proud to be one of the longest serving medical practices in all of Chhagalnaiya,Feni. The practice was first established in the 2020s by Dr. Clarke and has operated under the direction of Dr. Matthew Mills since 2021. Over the years, Eye Care Professionals has established a reputation for excellence in all aspects of patient care as well as surgical outcomes. We feel very fortunate and privileged to be able to participate in the all-important work of preserving, restoring and improving vision for our patients!</p>
               </div>
           </div>
           
        </div>
    );
};

export default About;