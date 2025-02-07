'use client';
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import categories from "./industries/[title]/IndustriesData";
import Image from "next/image";
import TeamWork from "../assets/industries/Finance.png";
import Logo from "../assets/industries/logo.jpg";
import { useParams } from "next/navigation";
// Data Objects


const DetailIndustry = () => {
  const {title}= useParams();
  const [HealthCareServices,FinancialServices, TelecomNetworkingServices, AviationAerospaceTechnology, ECommerceRetailTech, CybersecurityDataProtection, EducationELearningTechnology, CloudComputingSaaSSolutions, AutomotiveSmartMobility, BlockchainWeb3Solutions, AIMachineLearningSolutions, ManufacturingIndustrialAutomation  ] = categories;
  console.log(categories[0]);


  // if (!TelecomNetworkingServices) {
  //   return <h2 className="text-center text-red-500">Category not found</h2>;
  // }

  const [category, setCategory] = useState(null);

  // useEffect(() => {
  //   if (title) {
  //     // Find the category based on the title
  //     const foundCategory = categories.find(cat => cat.title.toLowerCase() === title.toLowerCase());
  //     setCategory(foundCategory);
  //   }
  // }, [title]);

  return (
    <div className="max-w-5xl mx-auto p-5">
      {/* <h1 className="text-3xl font-bold text-center mb-6">{category.replace(/([A-Z])/g, " $1").trim()}</h1> */}
      <Image 
        src={TeamWork} 
        alt="Telecom Networking Services" 
        className="w-full h-96 mb-6 rounded-lg shadow-md" 
      />

      {/* Services Section */}
      <section className="mb-9">
       
        <h2 className="text-3xl font-semibold tracking-wide mb-9">Telecom Software Development Services Offered By AonixGlobalAI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TelecomNetworkingServices.services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
               <Image
        src={Logo}
        alt="Telecom Networking Services"
        />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
  

      {/* Industries Section */}
      <section className="mb-6">
        <h2 className="text-3xl tracking-wide font-semibold mb-3">Industries That Can Benefit from Our TelecomNetworking Services</h2>
        <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          {TelecomNetworkingServices.industries.map((industry, index) => (
            <li key={index} className="text-gray-700">{industry}</li>
          ))}
        </ul>
      </section>

   
{/* Trust Factors Section */}
<section className="mb-6">
  <h2 className="text-3xl tracking-wide font-semibold mb-9">Why Trust Us?</h2>
  <div className="grid grid-cols-2 grid-rows-5 gap-4 ">
    {TelecomNetworkingServices.trustFactors.map((factor, index) => (
      <div
        key={index}
        className={`
          p-4 border rounded-lg shadow bg-gray-100
          ${index === 1 ? "col-start-2 row-start-2" : ""} 
          ${index === 2 ? "row-start-3" : ""} 
          ${index === 3 ? "col-start-2 row-start-4" : ""} 
          ${index === 4 ? "row-start-5" : ""}
        `}
      >
        <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
        <p className="text-gray-600">{factor.description}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default DetailIndustry;
