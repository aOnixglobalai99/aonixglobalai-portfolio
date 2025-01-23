import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import logo from '../assets/images/logo.png';
const header = () => {
  return (
    <div className="">
      <div className="max-w-[1140px] flex items-center justify-between m-auto px-0 py-[50px]">
        <div className="flex items-center gap-[15px]">
          <Image src={logo} alt="headerImg" width={45} height={45} />
          <h1 className="text-3xl font-bold text-[#121a5e]">
            Aonix<span className="text-[#078dd7]">Global</span>
            <span className="text-[#121a5e]">AI</span>
          </h1>
        </div>
        {/* <div>
          <ul className="flex items-center justify-between gap-20">
            <li>
              <Link
                className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
                href=""
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
                href=""
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
                href=""
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
                href=""
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
                href=""
              >
                Why us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-[#078dd7] rounded text-lg font-semibold text-[white] p-2.5 hover:bg-[#077bc8] transition-[0.3s]">
            Call Us
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default header;
