import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Zap } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end">
        <Button>
          <Link href="/createzap" className="flex items-center gap-2">
            <Zap className="animate-pulse" />
            Create Zaps
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Zaps</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription></CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
