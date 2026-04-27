// import { useState, useEffect } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import FloatingNav from "./components/FloatingNav";
// import Loader from "./components/Loader";
// import ScrollProgress from "./components/ScrollProgress";
// import CustomCursor from "./components/CustomCursor";
// import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/Footer";
// import { Navigate } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Approach from "./pages/Approach";
// import Services from "./pages/Services";
// import BookAndConnect from "./pages/BookAndConnect";
// import Testimonial from "./pages/Testimonial";
// import Blog from "./pages/Blog";
// import NotFound from "./pages/NotFound";
// import AboutMe from "./components/AboutMe";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// const queryClient = new QueryClient();

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay for the initial splash screen
//     const timer = setTimeout(() => setLoading(false), 2500);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     // Preconnect to Calendly domains to reduce loading time when navigating to the booking page
//     const preconnectUrls = ['https://calendly.com', 'https://assets.calendly.com'];
//     preconnectUrls.forEach((url) => {
//       const link = document.createElement('link');
//       link.rel = 'preconnect';
//       link.href = url;
//       link.crossOrigin = 'anonymous';
//       document.head.appendChild(link);

//       const dnsPrefetch = document.createElement('link');
//       dnsPrefetch.rel = 'dns-prefetch';
//       dnsPrefetch.href = url;
//       document.head.appendChild(dnsPrefetch);
//     });
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <AnimatePresence>
//         {loading && (
//           <motion.div
//             key="loader"
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-cream-warm"
//             exit={{ y: "-100vh" }}
//             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <Loader />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <ScrollToTop />
//             {/* <CustomCursor /> */}
//             <ScrollProgress />
//             <FloatingNav />
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/about" element={<AboutMe />} />
//               {/* <Route path="/approach" element={<Approach />} /> */}
//               <Route path="/services" element={<Services />} />
//               <Route path="/connect" element={<BookAndConnect />} />
//               {/* Legacy redirects */}
//               <Route path="/booking" element={<Navigate to="/connect" replace />} />
//               <Route path="/contact" element={<Navigate to="/connect" replace />} />
//               <Route path="/testimonial" element={<Testimonial />} />
//               <Route path="/blog" element={<Blog />} />
//               <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//             <Footer />
//           </BrowserRouter>
//         </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;

import React from 'react'
import SiteDown from './pages/SiteDown'

const App = () => {
  return (
    <div>
      <SiteDown/>
    </div>
  )
}

export default App
