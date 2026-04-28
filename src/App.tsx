// import { useState, useEffect } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// // UI Components
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";

// // App Components
// import FloatingNav from "./components/FloatingNav";
// import Loader from "./components/Loader";
// import ScrollProgress from "./components/ScrollProgress";
// import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/Footer";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import AboutMe from "./components/AboutMe";

// // Pages
// import Index from "./pages/Index";
// import Services from "./pages/Services";
// import BookAndConnect from "./pages/BookAndConnect";
// import Testimonial from "./pages/Testimonial";
// import Blog from "./pages/Blog";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => {
//   // 1. Initialize loading state
//   const [loading, setLoading] = useState(true);

//   // 2. Handle the loading timeout
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Adjust time as needed (e.g., 2000ms = 2 seconds)

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       {/* 3. Framer Motion Loader Logic */}
//       <AnimatePresence mode="wait">
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
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <ScrollToTop />
//           {/* <CustomCursor /> */}
//           <ScrollProgress />
//           <FloatingNav />

//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/about" element={<AboutMe />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/connect" element={<BookAndConnect />} />

//             {/* Legacy redirects */}
//             <Route path="/booking" element={<Navigate to="/connect" replace />} />
//             <Route path="/contact" element={<Navigate to="/connect" replace />} />

//             <Route path="/testimonial" element={<Testimonial />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>

//           <Footer />
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;

import React from 'react'
import SiteDown from './pages/SiteDown'

function App() {
  return (
    <div>
      <SiteDown />
    </div>
  )
}

export default App