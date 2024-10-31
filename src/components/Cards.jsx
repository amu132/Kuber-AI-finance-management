// import React from "react";
// import icon from '../assets/icon.png'
// import icon2 from '../assets/icon2.png'
// import icon3 from '../assets/Group.png'

// export default function Cards() {
//     return (
//       <div className="bg-navy-900 min-h-screen flex items-center justify-center p-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
//           <Card
//             icon={<BitcoinIcon />}
//             title={
//               <>
//                 Trade with confidence with{' '}
//                 <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
//                   our AI-based platform
//                 </span>
//               </>
//             }
//             description="Stay up to date and follow a plan specially made for you based on your needs."
//             glowColor="yellow" // Add glow color prop
//           />
//           <Card
//             icon={<AtomIcon />}
//             title={
//               <>
//                 <span className="text-blue-400">24/7</span> access to customer support
//               </>
//             }
//             description="Invest in digital assets with peace of mind. Our secure platform offers industry-leading security to protect your funds."
//             glowColor="blue" // Add glow color prop
//           />
//           <Card
//             icon={<CustomIcon />}
//             title={
//               <>
//                 Our platform offers levels of{' '}
//                 <span className="text-pink-500">security</span> to protect your funds.
//               </>
//             }
//             description="Start investing with confidence. Our team is here to provide you with the guidance and support you need to make the most of your investments."
//             glowColor="pink" // Add glow color prop
//           />
//         </div>
//       </div>
//     );
//   }
  
//   function Card({ icon, title, description, glowColor }) {
//     const glowStyles = {
//       yellow: "shadow-[0_0_30px_10px_rgba(234,179,8,0.3)]",
//       blue: "shadow-[0_0_30px_10px_rgba(59,130,246,0.3)]",
//       pink: "shadow-[0_0_30px_10px_rgba(236,72,153,0.3)]"
//     };

//     return (
//       <div className="bg-navy-800 rounded-lg p-6 flex flex-col items-center text-center">
//         <div className={`rounded-full flex items-center justify-center mb-6 ${glowStyles[glowColor]} transition-all duration-300 hover:scale-105`}>
//           {icon}
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
//           <p className="text-gray-400 text-sm">{description}</p>
//         </div>
//       </div>
//     );
//   }
  
//   function BitcoinIcon() {
//     return (
//       <img src={icon} alt="" className="w-16 h-16" /> // Fixed h-w-16 to h-16
//     );
//   }
  
//   function AtomIcon() {
//     return (
//       <img src={icon2} alt="" className="w-16 h-16" /> // Fixed h-w-16 to h-16
//     );
//   }
  
//   function CustomIcon() {
//     return (
//       <img src={icon3} alt="" className="w-16 h-16" /> // Fixed h-w-16 to h-16
//     );
//   }

// import React from "react";
// import icon from '../assets/icon.png'
// import icon2 from '../assets/icon2.png'
// import icon3 from '../assets/Group.png'

// export default function Cards() {
//     return (
//       <div className="bg-navy-900 min-h-screen flex items-center justify-center p-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
//           <Card
//             icon={<BitcoinIcon />}
//             title={
//               <>
//                 Trade with confidence with{' '}
//                 <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
//                   our AI-based platform
//                 </span>
//               </>
//             }
//             description="Stay up to date and follow a plan specially made for you based on your needs."
//             glowColor="yellow"
//             bgColor="from-yellow-500/10"
//           />
//           <Card
//             icon={<AtomIcon />}
//             title={
//               <>
//                 <span className="text-blue-400">24/7</span> access to customer support
//               </>
//             }
//             description="Invest in digital assets with peace of mind. Our secure platform offers industry-leading security to protect your funds."
//             glowColor="blue"
//             bgColor="from-blue-500/10"
//           />
//           <Card
//             icon={<CustomIcon />}
//             title={
//               <>
//                 Our platform offers levels of{' '}
//                 <span className="text-pink-500">security</span> to protect your funds.
//               </>
//             }
//             description="Start investing with confidence. Our team is here to provide you with the guidance and support you need to make the most of your investments."
//             glowColor="pink"
//             bgColor="from-pink-500/10"
//           />
//         </div>
//       </div>
//     );
//   }
  
//   function Card({ icon, title, description, glowColor, bgColor }) {
//     const glowStyles = {
//       yellow: "shadow-[0_0_30px_10px_rgba(234,179,8,0.3)]",
//       blue: "shadow-[0_0_30px_10px_rgba(59,130,246,0.3)]",
//       pink: "shadow-[0_0_30px_10px_rgba(236,72,153,0.3)]"
//     };

//     return (
//       <div className={`bg-gradient-to-b ${bgColor} to-transparent backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300`}>
//         <div className={`rounded-full flex items-center justify-center mb-6 ${glowStyles[glowColor]} transition-all duration-300 hover:scale-105`}>
//           {icon}
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
//           <p className="text-gray-400 text-sm">{description}</p>
//         </div>
//       </div>
//     );
//   }
  
//   function BitcoinIcon() {
//     return (
//       <img src={icon} alt="" className="w-16 h-16" />
//     );
//   }
  
//   function AtomIcon() {
//     return (
//       <img src={icon2} alt="" className="w-16 h-16" />
//     );
//   }
  
//   function CustomIcon() {
//     return (
//       <img src={icon3} alt="" className="w-16 h-16" />
//     );
//   }
import React from "react";
import icon from '../assets/icon.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/Group.png'

export default function Cards() {
    return (
      <div className="bg-navy-900 min-h-screen flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          <Card
            icon={<BitcoinIcon />}
            title={
              <>
                Trade with confidence with{' '}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                  our AI-based platform
                </span>
              </>
            }
            description="Stay up to date and follow a plan specially made for you based on your needs."
            glowColor="yellow"
            bgColor="bg-gradient-to-b from-yellow-900/50 via-yellow-900/30 to-navy-800"
          />
          <Card
            icon={<AtomIcon />}
            title={
              <>
                <span className="text-blue-400">24/7</span> access to customer support
              </>
            }
            description="Invest in digital assets with peace of mind. Our secure platform offers industry-leading security to protect your funds."
            glowColor="blue"
            bgColor="bg-gradient-to-b from-blue-900/50 via-blue-900/30 to-navy-800"
          />
          <Card
            icon={<CustomIcon />}
            title={
              <>
                Our platform offers levels of{' '}
                <span className="text-pink-500">security</span> to protect your funds.
              </>
            }
            description="Start investing with confidence. Our team is here to provide you with the guidance and support you need to make the most of your investments."
            glowColor="pink"
            bgColor="bg-gradient-to-b from-pink-900/50 via-pink-900/30 to-navy-800"
          />
        </div>
      </div>
    );
  }
  
  function Card({ icon, title, description, glowColor, bgColor }) {
    const glowStyles = {
      yellow: "shadow-[0_0_30px_10px_rgba(234,179,8,0.3)]",
      blue: "shadow-[0_0_30px_10px_rgba(59,130,246,0.3)]",
      pink: "shadow-[0_0_30px_10px_rgba(236,72,153,0.3)]"
    };

    return (
      <div className={`${bgColor} rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 border border-gray-800`}>
        <div className={`rounded-full flex items-center justify-center mb-6 ${glowStyles[glowColor]} transition-all duration-300 hover:scale-105`}>
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  
  function BitcoinIcon() {
    return (
      <img src={icon} alt="" className="w-16 h-16" />
    );
  }
  
  function AtomIcon() {
    return (
      <img src={icon2} alt="" className="w-16 h-16" />
    );
  }
  
  function CustomIcon() {
    return (
      <img src={icon3} alt="" className="w-16 h-16" />
    );
  }