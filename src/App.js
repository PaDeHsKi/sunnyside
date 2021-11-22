import React from 'react'
import './App.css';
import "@fontsource/barlow";

import logo from './Images/logo.svg'
import heroImage from './Images/image-header.jpg'
import downArrow from './Images/icon-arrow-down.svg'
import egg from './Images/image-transform.jpg'
import cup from './Images/image-stand-out.jpg'
import grape from './Images/image-graphic-design.jpg'
import tangerine from './Images/image-photography.jpg'
import emily from './Images/image-emily.jpg'
import thomas from './Images/image-thomas.jpg'
import jennie from './Images/image-jennie.jpg'
import milk from './Images/image-gallery-milkbottles.jpg'
import orange from './Images/image-gallery-orange.jpg'
import iceCream from './Images/image-gallery-cone.jpg'
import sugar from './Images/image-gallery-sugar-cubes.jpg'
import footerLogo from './Images/logo-footer.svg'
import facebook from './Images/icon-facebook.svg'
import instagram from './Images/icon-instagram.svg'
import twitter from './Images/icon-twitter.svg'
import pinterest from './Images/icon-pinterest.svg'


function App() {
  return (
    <div className="w-screen">
      <div className="bg-primary">
        <div className="flex justify-between">
          <div className="p-7">
            <img src = {logo} alt="logo"/>
          </div>
          <div className="p-4 mr-10">
            <ul className="flex text-white">
              <li className="pl-3 pr-3 pt-2 pb-2 hover:bg-blue-200 rounded">
                <a href="#">About</a>
              </li>
              <li className="pl-3 pr-3 pt-2 pb-2 hover:bg-blue-200 rounded">
                <a href="#">Services</a>
              </li>
              <li className="pl-3 pr-3 pt-2 pb-2 hover:bg-blue-200 rounded">
                <a href="#">Projects</a>
              </li>
              <li className="pl-3 pr-3 pt-2 pb-2 hover:bg-blue-200 rounded">
              <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-col justify-center">
          <div>
            <h1 className=" mt-10 text-2xl leading-10 font-extrabold text-center text-white tracking-widest">WE ARE CREATIVES</h1>
          </div>
          <div className="h-full relative">
            <img className=" m-auto relative top-28"  src={downArrow} alt="heroImage"/>
            <img className=" m-auto h-auto w-9/12" src={heroImage} alt="heroImage"/>
          </div>
        </div>
      </div>

      <div className="h-full ">
        <div className="flex h-auto md:text-left xl:bg-red-200 ">
          <div className="p-8 md:p-16 md:w-9/12 w-full lg:w-7/12 xl:w-6/12 xl:mt-20">
            <h1 className="sm:mb-10 w-40 md:w-50 md:ml-8 md:mt-2 md:mb-0 font-extrabold">Transform your brand</h1>
            <p className="text-sm sm:mb-4 md:p-8">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a href="#" className="underline bg-yellow-100 p-1 md:ml-8 md:mb-0 rounded hover:bg-yellow-300 font-bold">Learn More</a>
          </div>
          <div>
            <img className="h-full w-full" src = {egg} alt= "a svg image" />
          </div>
        </div>

        <div className="flex h-auto">
          <div>
            <img className="h-full w-full" src = {cup} alt= "a svg image" />
          </div>
          <div className="p-8 md:p-16 md:w-9/12 w-full lg:w-7/12 xl:w-6/12 xl:mt-20">
            <h1 className="sm:mb-10 w-40 md:w-50 md:ml-8 md:mt-2 md:mb-0 font-extrabold">Stand out to the right audience</h1>
            <p className="text-sm sm:mb-4 md:p-8">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <a href="#" className="underline bg-red-100 p-1 rounded md:ml-8 hover:bg-red-300 font-bold">Learn More</a>
          </div>
        </div>
        <div className="flex">
          <div className="relative">
            <img src = {grape} alt= "a svg image" />
            <div className="absolute bottom-0 p-8 text-center xl:p-28">
              <h1 className="font-bold mb-4">Graphic Design</h1>
              <p className="text-sm">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
          </div>  

          <div className="relative">
            <img src = {tangerine} alt= "a svg image" />
            <div className="absolute bottom-0 p-8 text-center xl:p-28">
            <h1 className="font-bold mb-4">Photography</h1>
            <p className="text-sm">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
          </div>      
        </div>
      </div>
      

      <div className="text-center p-16">
        <h1 className="mb-16 text-2xl leading-10 font-extrabold text-gray-400 tracking-widest">CLIENT TESTIMONIALS</h1>

        <div className="flex sm:flex-col lg:flex-row">
          <div className="mb-10 bg-white hover:bg-gray-100">
            <div>
              <img className="rounded-full m-auto mb-10" src = {emily} alt="emily svg image"/>
              < p className="pr-28 pl-28 mb-10 font-medium lg:p-4">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
              <h2 className="font-extrabold">Emily R.</h2>
              <p className="font-light">Marketing Director</p>
            </div>
          </div>

          <div className="mb-10 bg-white hover:bg-gray-100">
            <div>
              <img className="rounded-full m-auto mb-10" src = {thomas} alt="thomas svg image"/>
              <p className="pr-28 pl-28 mb-10 font-medium lg:p-4">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
              <h2 className="font-extrabold">Thomas S.</h2>
              <p>Chief Operating Officer</p>
            </div>
          </div>

          <div className="mb-10 bg-white hover:bg-gray-100">
            <div>
              <img className="rounded-full m-auto mb-10" src = {jennie} alt="jennie svg image"/>
              <p className="pr-28 pl-28 mb-10 font-medium lg:p-4">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
              <h2 className="font-extrabold">Jennie F.</h2>
              <p>Business Owner</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="flex flex-wrap justify-center">
        <img className="w-72 xl:w-96" src = {milk} alt="milk svg"/>
        <img className="w-72 xl:w-96" src = {orange} alt="orange svg"/>
        <img className="w-72 xl:w-96" src = {iceCream} alt="cone svg"/>
        <img className="w-72 xl:w-96" src = {sugar} alt="sugar svg"/>
      </div>

      <div className="flex-col bg-green-200">
        <img className="m-auto pt-10" src = {footerLogo} alt="logo svg"/>

        <div className="mt-10">
          <ul className="flex justify-center">
              <li className="pr-6 text-green-700 hover:text-white">About</li>
              <li className="pr-6 text-green-700 hover:text-white">Services</li>
              <li className="pr-6 text-green-700 hover:text-white">Projects</li>
            </ul>
        </div>

        <div className="flex mt-4 mb-4 justify-center">
        <img className="m-4" src = {facebook} alt="facebook svg"/>
        <img className="m-4" src = {instagram} alt="instagram svg"/>
        <img className="m-4" src = {twitter} alt="twitter svg"/>
        <img className="m-4" src = {pinterest} alt="pinterest svg"/>
        </div>

      </div>


    </div>
  );
}

export default App;
