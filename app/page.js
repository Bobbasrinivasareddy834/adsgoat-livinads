
"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import "./page.module.css"
import YourComponent from './contact/page'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 2500);
    window.addEventListener('load', () => {
      clearTimeout(timeoutId);
      setShowLoader(false);
    });

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {showLoader ? (
        <div className="loader">
          
        </div>
      ) : (
        <div>
          <div className="logoimage12">
            <div className="circularcontainer1"></div>
            <Image src="/logo.png" height={40} width={180} alt="image" className='logoimagepic'/>
          </div>
          <YourComponent />
        </div>
      )}
    </div>
  )
}



// import Image from 'next/image'
// import styles from './page.module.css'
// import YourComponent from './contact/page'
// export default function Home() {
//   return (
//    <div>
//     <YourComponent />
//    </div>
//   )
// }




// "use client"
// import Image from 'next/image'
// import { useState, useEffect } from 'react';
// import "./page.module.css"
// import YourComponent from './contact/page'

// export default function Home() {
//   const [showLoader, setShowLoader] = useState(true);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setShowLoader(false);
//     }, 2500);

//     // Simulating page load completion after 2500 milliseconds
//     window.addEventListener('load', () => {
//       clearTimeout(timeoutId);
//       setShowLoader(false);
//     });

//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <div>
//       {showLoader ? (
//         <div className="loader">
          
//         </div>
//       ) : (
//         <div>
//           <div className="logoimage12">
//             <div className="circularcontainer1"></div>
//             <Image src="/logo.png" height={40} width={180} alt="image" className='logoimagepic'/>
//           </div>
//           <YourComponent />
//         </div>
//       )}
//     </div>
//   )
// }
