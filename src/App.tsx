import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppPanel from "@/components/WhatsAppPanel";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import HomeVisitPage from "@/pages/HomeVisitPage";
import TeamPage from "@/pages/TeamPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostIFT from "@/pages/BlogPostIFT";
import BlogPostBackPain from "@/pages/BlogPostBackPain";
import BlogPostKneePain from "@/pages/BlogPostKneePain";
import BlogPostSurgery from "@/pages/BlogPostSurgery";
import BlogPostWhenToSee from "@/pages/BlogPostWhenToSee";
import ContactPage from "@/pages/ContactPage";
import PhysioInGunturPage from "@/pages/PhysioInGunturPage";
import LocationServicePage from "@/pages/LocationServicePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/home-visit-physiotherapy" element={<HomeVisitPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/what-is-ift-physiotherapy" element={<BlogPostIFT />} />
            <Route path="/blog/best-exercises-for-back-pain" element={<BlogPostBackPain />} />
            <Route path="/blog/how-physiotherapy-helps-knee-pain" element={<BlogPostKneePain />} />
            <Route path="/blog/post-surgery-rehabilitation-tips" element={<BlogPostSurgery />} />
            <Route path="/blog/when-should-you-see-a-physiotherapist" element={<BlogPostWhenToSee />} />
            <Route path="/physio-in-guntur" element={<PhysioInGunturPage />} />
            <Route path="/physiotherapy/:slug" element={<LocationServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppPanel />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
