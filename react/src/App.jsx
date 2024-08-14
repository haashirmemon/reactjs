import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import landingPageData from './constant/webdata'
import Header from './components/header'
import Hero from './components/hero'
import Features from './components/features'

import Footer from './components/footer'

function App() {
  const { header, hero, features, testimonials } = landingPageData;

  return <>
    <Header header={header} />


    <Hero hero={hero} />
   

 
    <Features features={features} />



    {/* testimonials section start */}

    <section className="text-gray-600 body-font">
<h1>Testimonials</h1>
<div className="container px-5 py-24 mx-auto">
<div className="flex flex-wrap -m-4">
        {testimonials.map((data) => (
          <div key={data.id} className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="leading-relaxed mb-6">{data.feedback}</p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={header.logo}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    {data.name}
                  </span>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
</div>
</section>
    {/* testimonials section end*/}
    <Footer header={header} />
  </>
}


export default App





{/* <h1 className=' text-3xl font-medium underline'>hello world!</h1>
  <div>
   
 <Button  
    bordercolor={'border-black-800'} 
    bgcolor={'bg-purple-800'}
     label='login'/>

    <Button 
    label='contact us'
    bordercolor={'border-purple-800'}
    bgcolor={'bg-yellow-500'}
    txtcolor={"text-black"} 
    />
    <Button 
 bordercolor={'border-red-800'}
 bgcolor={'bg-blue-500'}
    txtcolor={"text-black"} 
    label='user profile'/>

    <Button
    bordercolor={'border-red-800'}
    bgcolor={'bg-orange-800'}
     label='products'/>
    <Button 
    label='chat us'
    bordercolor={'border-red-800'}
 bgcolor={'bg-yellow-300'}
    txtcolor={"text-black"}
    />

  </div> */}

//   <div className="flex flex-wrap -m-4">
//       {testimonials.map((data,ind)=>(
//  <div key={data.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//  <div className="h-full text-center">
//    <img

//      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-red-300"
//      src={header.logo}
//    />
//    <p className="leading-relaxed">
//    {data.feedback}
//    </p>
//    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
//    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
// {data.name}
//    </h2>

//  </div>
// </div>
//       )
//       )}


//     </div>
{/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
  viewBox="0 0 24 24"
>
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
</svg>
<span className="ml-3 text-xl">Tailblocks</span>
</a> */}