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
import Header from "@/components/header";
import PopupForm from "@/components/popup-form";
import { AddCategoryForm } from "@/components/add-category-form";
import { AddDataStructureForm } from "@/components/add-datastructure-form";

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
        {currentUser?.role === Role.ADMIN && (
          <>
            <PopupForm actionName="Category" Form={AddCategoryForm} />
            <PopupForm
              actionName="Data Structure"
              Form={AddDataStructureForm}
            />
          </>
        )}
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
