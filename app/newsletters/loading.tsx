export default function Loading() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-wide">
        <div className="h-10 w-48 bg-muted animate-pulse rounded mb-8" />

        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="h-8 w-64 bg-muted animate-pulse rounded" />
            <div className="h-10 w-28 bg-muted animate-pulse rounded" />
          </div>
          <div
            className="w-full bg-muted animate-pulse rounded-xl"
            style={{ height: "75vh" }}
          />
        </div>

        <div>
          <div className="h-8 w-32 bg-muted animate-pulse rounded mb-6" />
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
