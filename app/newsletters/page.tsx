import type { Metadata } from "next";
import { getNewsletters } from "@/lib/notion";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletters",
  description:
    "Read the latest International Friends newsletters and browse our archive of past editions.",
};

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function NewslettersPage() {
  const newsletters = await getNewsletters();
  const latest = newsletters[0];
  const past = newsletters.slice(1);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container-wide">
        <div className="mb-12">
          <div className="accent-line">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 pt-4">
              Newsletters
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stay connected with the International Friends community through our seasonal newsletters.
          </p>
        </div>

        {latest && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-warm-50 via-transparent to-sand-100/50 rounded-3xl p-8 md:p-10 border border-warm-200/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Latest Edition
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold">
                    {latest.title}
                  </h2>
                </div>
                <Button size="lg" className="shrink-0" asChild>
                  <a href={latest.path} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4" />
                    View PDF
                  </a>
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border bg-background">
                <iframe
                  title="Latest newsletter"
                  className="w-full"
                  style={{ height: "70vh" }}
                  src={latest.path}
                />
              </div>
            </div>
          </div>
        )}

        {past.length > 0 && (
          <div>
            <h2 className="text-2xl font-display font-semibold mb-8">
              Archive
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {past.map((newsletter, i) => (
                <a
                  key={newsletter.path}
                  href={newsletter.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col p-5 rounded-2xl bg-card border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center mb-4 group-hover:bg-warm-200 transition-colors">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {newsletter.title}
                  </span>
                  <span className="mt-2 text-sm text-muted-foreground flex items-center gap-1">
                    View Newsletter
                    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
