// import Image from "next/image"

// const OurPartner = () => {



//   return (
//     <div className="px-0 md:px-12 lg:px-24 py-12">
//       <div className="max-width grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
//         <div className="flex group cursor-pointer items-center border-r border-b w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 1 */}
//         <div className="flex group cursor-pointer items-center border-r-0 md:border-r border-b w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 2 */}
//         <div className="flex group cursor-pointer items-center border-r border-b w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 3 */}
//         <div className="flex group cursor-pointer items-center md:border-r-0 lg:border-r border-b w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 4 */}
//         <div className="flex group cursor-pointer items-center border-r border-b w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 5 */}
//         <div className="flex group cursor-pointer items-center md:border-r lg:border-r-0 border-b w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 6 */}
//         <div className="flex group cursor-pointer items-center border-r lg:border-b-0 border-b w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 7 */}
//         <div className="flex group cursor-pointer items-center md:border-r-0 lg:border-r lg:border-b-0 border-b w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 8 */}
//         <div className="flex group cursor-pointer items-center border-b md:border-b-0 lg:border-b-0 border-r w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 9 */}
//         <div className="flex group cursor-pointer items-center border-r-0 md:border-r border-b md:border-b-0 lg:border-b-0 w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 10 */}
//         <div className="flex group cursor-pointer items-center border-r w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 11 */}
//         <div className="flex group cursor-pointer items-center lg:border-r-0 w-full h-[140px] justify-center">
//           <Image
//             className="w-20 grayscale transition-all duration-1000 group-hover:grayscale-0"
//             alt="partner image"
//             src={"/ict.png"}
//             width={5000}
//             height={5000}
//           />
//         </div>
//         {/* 12 */}
//       </div>
//     </div>

//   )
// }

// export default OurPartner


import Image from 'next/image'
import React from 'react'

const OurPartner = () => {
  return (
    <div className='w-full min-h-[40vh] flex-wrap flex gap-4 md:gap-6 lg:gap-12 items-center justify-center '>
      <div className="flex p-4 group cursor-pointer items-center md:border-r w-fit h-[140px] justify-center">
        <Image
          className="w-[140px] grayscale transition-all duration-1000 group-hover:grayscale-0"
          alt="partner image"
          src={"/ict.png"}
          width={5000}
          height={5000}
        />
      </div>
      <div className="flex group cursor-pointer items-center p-4 md:border-r w-fit h-[140px] justify-center">
        <Image
          className="w-[140px] grayscale transition-all duration-1000 group-hover:grayscale-0"
          alt="partner image"
          src={"/ict.png"}
          width={5000}
          height={5000}
        />
      </div>
      <div className="flex group cursor-pointer p-4 items-center md:border-r w-fit h-[140px] justify-center">
        <Image
          className="w-[140px] grayscale transition-all duration-1000 group-hover:grayscale-0"
          alt="partner image"
          src={"/ict.png"}
          width={5000}
          height={5000}
        />
      </div>
      <div className="flex group cursor-pointer items-center md:border-r-0 w-fit h-[140px] justify-center">
        <Image
          className="w-[140px] grayscale transition-all duration-1000 group-hover:grayscale-0"
          alt="partner image"
          src={"/ict.png"}
          width={5000}
          height={5000}
        />
      </div>
    </div>
  )
}

export default OurPartner
