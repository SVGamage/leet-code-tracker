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
import { useEffect } from "react";
import { useRehydrate } from "@/hooks/use-rehydrated";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import ActionButton from "@/components/action-button";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  useEnsureUserInDatabase(user, isAuthenticated as boolean);
  useGetCurrentUser(user);
  useRehydrate();
  const currentUser = useProfileStore((state) => state.profile);
  const { categories, loading } = useGetCategories(currentUser?.id as number);

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
      <Header user={user} />
      <div className="flex flex-row justify-end gap-4 m-4">
        <ActionButton actionName="Category" role={currentUser?.role as Role} />
        <ActionButton
          actionName="Data Structure"
          role={currentUser?.role as Role}
        />
      </div>
      <main className="container py-8 px-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <CategoryGrid categories={categories} />
        )}
      </main>
    </div>
  );
}
