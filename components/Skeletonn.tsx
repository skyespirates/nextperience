import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Skeletonn() {
  return (
    <div className="w-96">
      <Card className="min-w-md">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-2/3" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
        </CardContent>
      </Card>
    </div>
  );
}
