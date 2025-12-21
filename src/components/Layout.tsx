import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: {
        url: string;
      }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
    };
  }
}

export const Layout = ({ children }: LayoutProps) => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const openCalendly = () => {
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/shivamengineers2003/30min?hide_gdpr_banner=1&'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating Calendly Button */}
      <button
        onClick={openCalendly}
        className="fixed bottom-6 right-6 bg-[#FAFAFA] text-primary px-6 py-3 rounded-full shadow-lg transition-all duration-250 z-50 flex items-center gap-2 hover:scale-105 hover:shadow-xl"
        aria-label="Schedule Appointment"
        style={{
          animation: 'heartbeat-glow 1.5s ease-in-out infinite',
        }}
      >
        <Calendar className="w-5 h-5" />
        <span className="text-sm font-semibold tracking-wide">
          BOOK NOW
        </span>
      </button>

      {/* Heartbeat glow animation */}
      <style>{`
        @keyframes heartbeat-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(34, 64, 181, 0.4), 
                        0 0 10px rgba(34, 64, 181, 0.3), 
                        0 0 15px rgba(34, 64, 181, 0.2);
            transform: scale(1);
          }
          70% {
            box-shadow: 0 0 10px rgba(34, 64, 181, 0.6), 
                        0 0 20px rgba(34, 64, 181, 0.5), 
                        0 0 30px rgba(34, 64, 181, 0.4),
                        0 0 40px rgba(34, 64, 181, 0.2);
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};