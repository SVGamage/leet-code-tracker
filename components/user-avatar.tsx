import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IAvatarProps {
  name: string;
  email: string;
  src: string;
  fallback: string;
}
export default function UserAvatar({
  name,
  email,
  src,
  fallback,
}: IAvatarProps) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <User
              className="hover:cursor-pointer h-[1.2rem] w-[1.2rem]"
              absoluteStrokeWidth={true}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-1 w-auto items-center justify-center">
          <Avatar>
            <AvatarImage src={src} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <Label className="text-sm font-medium">{name}</Label>
          <Label className="text-xs text-muted-foreground">{email}</Label>
          <LogoutLink className="flex flex-row items-center text-sm text-red-600 gap-1 mt-5 border-1-solid border-red-600">
            <LogOut className="h-4 w-4" />
            Logout
          </LogoutLink>
        </PopoverContent>
      </Popover>
    </>
  );
}
