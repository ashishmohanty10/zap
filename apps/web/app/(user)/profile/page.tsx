import { BackButton } from "@/components/back-button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Button } from "@repo/ui/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto space-y-5">
      <BackButton url="/dashboard" />
      <div className=" flex items-start justify-between">
        <div className="w-1/4 flex items-center justify-center py-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <Card className="w-full border">
          <CardHeader>
            <CardTitle className="text-3xl">Your Profile</CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription className="space-y-5">
              <div className="space-y-2">
                <p className="text-xl">Username</p>
                <p>TestUser1</p>
              </div>
              <div className="space-y-2">
                <p className="text-xl">Email</p>
                <p>testuser1@gmail.com</p>
              </div>
            </CardDescription>
          </CardContent>

          <CardFooter className="flex items-center space-x-4">
            <Button>Update</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
