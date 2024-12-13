import { BackButton } from "@/components/back-button";
import { DeleteAccount } from "@/components/profile/delete-account";
import { EditProfile } from "@/components/profile/edit-profile";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

export default async function Profile() {
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

        <Card className="w-full border space-y-5">
          <CardHeader className="flex w-full flex-row items-center justify-between">
            <CardTitle className="text-3xl">My Account</CardTitle>
            <EditProfile />
          </CardHeader>

          <CardContent className="border-b">
            <CardDescription className="space-y-5">
              <div className="space-y-2">
                <p className="text-xl">Display Name</p>
                <p>TestUser1</p>
              </div>
              <div className="space-y-2">
                <p className="text-xl">Email</p>
                <p>sdfsdfsdfsdfsdf@gmail.com</p>
              </div>
            </CardDescription>
          </CardContent>

          <CardFooter className="flex flex-col space-y-5 items-start">
            <p>Danger Zone</p>
            <DeleteAccount />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
