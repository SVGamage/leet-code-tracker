import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import UserAvatar from "./user-avatar";
import { Brain } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface IProps {
  user: KindeUser | null;
}
export default function Header({ user }: IProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="flex w-full h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6" />
          <h1 className="text-xl font-bold">LeetCode Progress Tracker</h1>
        </div>
        <div className="flex items-center gap-4">
          <UserAvatar
            name={user?.given_name as string}
            email={user?.email as string}
            src={user?.picture as string}
            fallback={user?.given_name?.[0] as string}
          />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
