import Image from 'next/image';
import React from 'react';

export default function CompanyProfile() {
  return (
    <section className="bg-white text-gray-900 py-12 px-4">

      <div className="max-w-[1200px] mx-auto">
          <div className="mb-10">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={200} 
            className="w-full h-auto" 
          />
        </div>
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Company Profile
          </h1>
          <p className="text-lg text-gray-700">
            Transforming Business Visions Into Production-Grade Systems.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Federal Certifications */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Federal Certifications</h2>
          <div className="space-y-2 text-gray-700">
            <p>8(A) Certified Small Business</p>
            <p>Economically Disadvantaged Woman Owned Small Business (EDWOSB)</p>
          </div>
        </div>

        {/* State Certifications */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">State Certifications</h3>
          <p className="text-gray-700">
            MBE/DBE : Georgia, Tennessee, Pennsylvania, Missouri, Illinois, Maryland, Massachusetts
          </p>
        </div>

        {/* Contract Vehicles */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Contract Vehicles</h3>
          <div className="space-y-2 text-gray-700">
            <p>GSA MAS Schedule: 47QTCA19D00KK</p>
            <p>Jets 2.0 IDIQ (Subcontractor), Ba STARS III</p>
          </div>
        </div>

        {/* NAICS Codes */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">NAICS Codes</h3>
          <p className="text-gray-700">
            541611 (Primary), 541511, 541641, 423430, 561210, 561990, 562910, 562119
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-1">
            <strong>Activate Windows</strong>
          </p>
          <p>Go to Settings to activate Windows.</p>
        </div>
      </div>
    </section>
  );
}