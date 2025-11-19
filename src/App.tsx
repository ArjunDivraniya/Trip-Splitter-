import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import TripOverview from "./pages/TripOverview";
import TripItinerary from "./pages/TripItinerary";
import TripPackingList from "./pages/TripPackingList";
import AddExpense from "./pages/AddExpense";
import SettleUp from "./pages/SettleUp";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/trip/:id" element={<TripOverview />} />
          <Route path="/trip/:id/itinerary" element={<TripItinerary />} />
          <Route path="/trip/:id/packing-list" element={<TripPackingList />} />
          <Route path="/trip/:id/add-expense" element={<AddExpense />} />
          <Route path="/trip/:id/settle-up" element={<SettleUp />} />
          <Route path="/trip/:id/analytics" element={<Analytics />} />
          <Route path="/trip/:id/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
