import { featuresAvailable } from "@/utlis/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@repo/ui/components/ui/card";

export function Feature() {
  return (
    <div className="py-16 space-y-12">
      <div className="space-y-2">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent text-center">
          Powerful Features for Your Workflow
        </h3>

        <p className="text-center text-lg font-medium text-slate-400">
          Everything you need to automate your work and boost productivity
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {featuresAvailable.map((item) => (
          <Card
            key={item.title}
            className="bg-bgCard border border-slate-700 hover:border-slate-400 transition"
          >
            <CardHeader>
              <div className="border border-slate-700 p-2 w-fit rounded-md">
                <item.icon className="text-white" />
              </div>

              <p className="text-slate-100 font-medium text-lg">{item.title}</p>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-slate-400">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
