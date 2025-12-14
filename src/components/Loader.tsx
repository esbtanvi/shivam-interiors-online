import React from "react";
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <h2 className="text-xl font-semibold text-foreground animate-pulse">
          Welcome to Shivam Engineers...
        </h2>
      </div>
    </div>
  );
};

export default Loader;
