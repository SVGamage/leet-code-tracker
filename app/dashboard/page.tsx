"use client";
import { Brain } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { ModeToggle } from "@/components/mode-toggle";
import { FilterControls } from "@/components/filter-controls";
import { CategoryGrid } from "@/components/category-grid";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import LoadingSpinner from "@/components/loading-spinner";
import UserAvatar from "@/components/user-avatar";
import { useEnsureUserInDatabase } from "@/hooks/use-ensure-user-in-database";
import { useGetCurrentUser } from "@/hooks/use-get-current-user";
import { Role } from "@/lib/types";
import { useGetCategories } from "@/hooks/use-get-categories";
import { useProfileStore } from "@/lib/store";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  useEnsureUserInDatabase(user, isAuthenticated as boolean);
  useGetCurrentUser(user);
  const currentUser = useProfileStore((state) => state.profile);
  const categories = useGetCategories(currentUser?.id as number);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6" />
            <h1 className="text-xl font-bold">LeetCode Progress Tracker</h1>
          </div>
          <div className="flex items-center gap-4">
            <SearchBar />
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

      <main className="container py-8 px-4">
        <FilterControls role={currentUser?.role || Role.USER} />
        <CategoryGrid categories={categories} />
      </main>
    </div>
  );
}
