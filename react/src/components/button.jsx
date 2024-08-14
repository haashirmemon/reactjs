function Button({label,bordercolor ,bgcolor ,txtcolor}){
   return (
      <button className={`border ${bordercolor ? bordercolor : 'border-blue-400' }  ${bgcolor ? bgcolor :  'bg-black'} 
         ${ txtcolor ? txtcolor : " text-white"} rounded-md py-2 px-4 m-4`}>{label}</button>
   )
}

export default Button