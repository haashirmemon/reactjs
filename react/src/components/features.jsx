
function  Features({  features  }) {
    return(
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
       
        Master Cleanse Reliac Heirloom
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            FINANCE GURU FEATURES
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
          {features.map((data)=>( 
          <div className="p-4 md:w-1/3">
              <div  key={data.id}    className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
               
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                 {data.icon}
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                {data.title}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                   {data.description}
                  </p>
                 
                </div>
              </div>
            </div>))
      }
      </div>
      
         
      </div></section>
 
  );  
 }
 export default Features
 
 