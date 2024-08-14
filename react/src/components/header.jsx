
import Button from "./button";
function Header({header}) {
   return(
    

  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={header.logo} 
      className='h-20 w-20 rounded-full'
      /> 
         
     
        <span className="ml-3 text-xl">{header.title}</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">ABOUT US</a>
        <a className="mr-5 hover:text-gray-900">CONTACT US</a>
        <a className="mr-5 hover:text-gray-900">SERVICES</a>
        {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
      </nav>
      <Button 
      label='login'
      bordercolor={'border-purple-800'}
      bgcolor={'bg-red-600'} />
 
    </div>
  </header>

 );  
}
export default Header


