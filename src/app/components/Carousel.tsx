import React from 'react';
<<<<<<< HEAD
import Image from 'next/image';
import client1 from '../assets/images/client-1.png';
import client2 from '../assets/images/client-2.png';
import client3 from '../assets/images/client-3.png';
import client4 from '../assets/images/client-4.png';
=======
>>>>>>> master

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carouselItems">
<<<<<<< HEAD
        <div className="carouselItem flex flex-col gap-[30px]">
          <div className="pl-[10%] pr-[10%]">
            "Working with AonixGlobalAI has significantly boosted our online
            sales. Their robust e-commerce solutions have optimized our store,
            providing a seamless shopping experience for our customers."
          </div>
          <Image
            src={client1}
            alt="Client 1"
            className="h-[150px] w-[150px] rounded-[50%]"
          />
          <div className="clientDetails">
            <p className="clientName">John Doe</p>
            <p className="clientTitle">Real Estate Consultant</p>
            <p className="clientCompany">Prime Realty Co</p>
          </div>
        </div>
        <div className="carouselItem flex flex-col gap-[30px]">
          <div className="pl-[10%] pr-[10%]">
            "Thanks to AonixGlobalAI, our real estate business now runs smoothly
            with a powerful platform that simplifies property listings, client
            management, and transactions, driving our success in a competitive
            market."
          </div>
          {/* <img
            src="https://www.shutterstock.com/image-photo/handsome-30s-businessman-employee-head-260nw-2156291093.jpg"
          /> */}
          <Image
            src={client2}
            alt="Client 2"
            // className="fixed top-[0] left-[0]"
            className="h-[150px] w-[150px] rounded-[50%]"
          />
          <div className="clientDetails">
            <p className="clientName">Jane Smith</p>
            <p className="clientTitle">Real Estate Consultant</p>
            <p className="clientCompany">Prime Realty Co</p>
          </div>
        </div>
        <div className="carouselItem flex flex-col gap-[30px]">
          <div className="pl-[10%] pr-[10%]">
            "The student management system built by AonixGlobalAI has
            revolutionized how we track progress and manage administrative
            tasks. It’s user-friendly, efficient, and has improved communication
            across all departments."
          </div>
          <Image
            src={client3}
            alt="Client 3"
            // className="fixed top-[0] left-[0]"
            className="h-[150px] w-[150px] rounded-[50%]"
          />
          {/* <img
            src="https://www.shutterstock.com/image-photo/handsome-30s-businessman-employee-head-260nw-2156291093.jpg"
          /> */}
          <div className="clientDetails">
            <p className="clientName">Alice Brown</p>
            <p className="clientTitle">Principal</p>
            <p className="clientCompany">Future Scholars Academy</p>
          </div>
        </div>
        <div className="carouselItem flex flex-col gap-[30px]">
          <div className="pl-[10%] pr-[10%]">
            "With AonixGlobalAI’s travel booking solutions, our customers enjoy
            a faster, more intuitive booking process. Their technology has
            streamlined our operations and enhanced the travel experience for
            our clients."
          </div>
          <Image
            src={client4}
            alt="Client 4"
            // className="fixed top-[0] left-[0]"
            className="h-[150px] w-[150px] rounded-[50%]"
          />
          {/* <img
            src="https://www.shutterstock.com/image-photo/handsome-30s-businessman-employee-head-260nw-2156291093.jpg"
          /> */}
          <div className="clientDetails">
            <p className="clientName">Michael Green</p>
            <p className="clientTitle">Travel Agency Owner</p>
            <p className="clientCompany">Wanderlust Travels</p>
          </div>
=======
        <div className="carouselItem">
          Vero eos et accusamus et iusto odio dignissimos ducimus qui{' '}
        </div>
        <div className="carouselItem">
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint
        </div>
        <div className="carouselItem">
          {' '}
          quos dolores et quas molestias excepturi sint
>>>>>>> master
        </div>
      </div>
    </div>
  );
};

export default Carousel;
