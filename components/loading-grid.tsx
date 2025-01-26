import { Card } from "@/components/ui/card";

export default function LoadingGrid() {
  return (
    <div className="space-y-3">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-6">
        <div className="h-8 w-48 bg-muted rounded-md animate-pulse" />
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-9 w-32 bg-muted rounded-md animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Grid Items */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-muted animate-pulse" />
                <div className="h-6 w-32 bg-muted rounded animate-pulse" />
              </div>
              <div className="h-6 w-6 rounded bg-muted animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <div className="h-4 w-16 bg-muted rounded animate-pulse" />
                <div className="h-4 w-12 bg-muted rounded animate-pulse" />
              </div>
              <div className="h-2 bg-muted rounded animate-pulse" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
