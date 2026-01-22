import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-display font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl font-display font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or no longer exists.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
