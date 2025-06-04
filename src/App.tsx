
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster as SonnerToaster } from "sonner";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AuthError from "./pages/AuthError";
import Dashboard from "./pages/Dashboard";
import SubmitDeal from "./pages/SubmitDeal";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import LPLogin from "./pages/LPLogin";
import LPDashboard from "./pages/LPDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/error" element={<AuthError />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/submit-deal" element={<SubmitDeal />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/lp" element={<LPLogin />} />
            <Route path="/lp/dashboard" element={<LPDashboard />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
          <Toaster />
          <SonnerToaster />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
