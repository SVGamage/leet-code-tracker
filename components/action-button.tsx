import { Role } from "@/lib/types";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface IActionButtonProps {
  actionName: string;
  role: Role;
}
export default function ActionButton({ actionName, role }: IActionButtonProps) {
  return (
    <>
      {role === Role.ADMIN && (
        <div className="flex flex-row justify-end">
          <Button variant="outline" size="sm" className={`bg-secondary `}>
            <Plus size={20} />
            {`${actionName}`}
          </Button>
        </div>
      )}
    </>
  );
}
