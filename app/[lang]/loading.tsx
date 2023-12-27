'use client';

// import React, { useEffect } from 'react';
// import '@/styles/loading.css';

// export default function Loading() {
//   useEffect(() => {
//     var myElement = document.getElementById('js-spinner')!;
//     if (myElement) {
//       const spinnerClass = myElement.getAttribute('class');
//       if (spinnerClass) {
//         myElement.setAttribute(
//           'class',
//           `${spinnerClass} state-show state-away`,
//         );
//       } else {
//         myElement.setAttribute('class', 'state-show state-away');
//       }
//     }
//   }, []);
//   return (
//     <div className="state-spinner-fixed">
//       <div className="page_wrapper js-wrapper">
//         <div id="js-spinner" className={'spinner'}>
//           <div className="spinner__overlay">
//             <div className="spinner__big_circle"></div>
//             <div className="spinner__all_circles_box">
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--1"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--2"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--3"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--4"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--5"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--6"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--7"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--8"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--9"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--10"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--11"></div>
//               </div>
//               <div className="spinner__circles_box">
//                 <div className="spinner__circle spinner__circle--12"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { PageLoading } from '@ims-view/page-loading';

export default function Loading() {
  return (
    <div style={{ height: 300 }}>
      <PageLoading />
    </div>
  );
}
