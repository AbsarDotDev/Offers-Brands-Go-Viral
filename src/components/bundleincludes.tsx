import Image from 'next/image';
import React from 'react';
import { FaGem, FaFileSignature, FaTags, FaBriefcase, FaClipboardList, FaShareAlt } from 'react-icons/fa';

export const BundleIncludes = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 rounded-lg overflow-hidden">
          <Image alt="feature" className="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500" width={460} height={500} />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-8 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <p className="mb-8 text-lg font-normal lg:text-lg">
            This bundle includes everything you need to LAUNCH and GROW a successful beauty brand, including:
          </p>

          {/* Engaging Instagram posts */}
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="bg-bgv-primary w-full pl-5 rounded-full p-2 flex items-center">
              <FaGem className="text-white text-xl mr-2" />
              <h2 className="text-white text-lg title-font font-bold">
                Engaging Instagram posts
              </h2>
            </div>
            <p className="leading-relaxed text-base mt-2">
              These posts will help you promote your brand and products to your target audience.
            </p>
          </div>

          {/* Consent forms */}
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="bg-bgv-primary w-full pl-5 rounded-full p-2 flex items-center">
              <FaFileSignature className="text-white text-xl mr-2" />
              <h2 className="text-white text-lg title-font font-bold">
                Consent forms
              </h2>
            </div>
            <p className="leading-relaxed text-base mt-2">
              These forms will help you comply with all applicable laws.
            </p>
          </div>

          {/* Packaging labels */}
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="bg-bgv-primary w-full pl-5 rounded-full p-2 flex items-center">
              <FaTags className="text-white text-xl mr-2" />
              <h2 className="text-white text-lg title-font font-bold">
                Packaging labels
              </h2>
            </div>
            <p className="leading-relaxed text-base mt-2">
              These labels will help your products look professional, polished, and stand out on the shelf.
            </p>
          </div>

          {/* Business Branding Kit */}
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="bg-bgv-primary w-full pl-5 rounded-full p-2 flex items-center">
              <FaBriefcase className="text-white text-xl mr-2" />
              <h2 className="text-white text-lg title-font font-bold">
                Business Branding Kit
              </h2>
            </div>
            <p className="leading-relaxed text-base mt-2">
              This kit will help you create a cohesive and professional brand identity.
            </p>
          </div>

          {/* Business Planner */}
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="bg-bgv-primary w-full pl-5 rounded-full p-2 flex items-center">
              <FaClipboardList className="text-white text-xl mr-2" />
              <h2 className="text-white text-lg title-font font-bold">
                Business Planner
              </h2>
            </div>
            <p className="leading-relaxed text-base mt-2">
              This will help you manage your business in the most efficient way.
            </p>
          </div>

          {/* Social Media Planner */}
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="bg-bgv-primary w-full pl-5 rounded-full p-2 flex items-center">
              <FaShareAlt className="text-white text-xl mr-2" />
              <h2 className="text-white text-lg title-font font-bold">
                Social Media Planner
              </h2>
            </div>
            <p className="leading-relaxed text-base mt-2">
              This will help you grow your social presence to attract and engage your followers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
