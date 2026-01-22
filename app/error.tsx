"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-display font-bold text-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or contact us if
          the problem persists.
        </p>
        <Button onClick={reset} size="lg">
          Try Again
        </Button>
      </div>
    </div>
  );
}
