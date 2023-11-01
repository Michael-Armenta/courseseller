 
 
 function Heading ( {children, as, className }){
    const def = "text-3xl font-semibold tracking-tight first:mt-0" 
   
    switch (as){
      case "h2":

        return (
         <h2 className="text-3xl font-semibold tracking-tight">
           {children}
        </h2>
        )
        break;

        case "h3":
         return (
            <h3 className="text-2xl font-semibold tracking-tight">
            {children}
         </h3>
         )
         break;

         case "h4":
            return (
               <h4 className="text-xl font-semibold tracking-tight">
               {children}
            </h4>
            )
            break;

         default:
            return (
               <h1 className="text-9xl font-extrabold tracking-tight">{children}</h1>
            )
        }
 }

 export {Heading}