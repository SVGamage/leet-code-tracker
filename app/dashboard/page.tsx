import { Brain } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { ModeToggle } from "@/components/mode-toggle";
import { FilterControls } from "@/components/filter-controls";
import { CategoryGrid } from "@/components/category-grid";

export default function Dashboard() {
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
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container py-8 px-4">
        <FilterControls />
        <CategoryGrid />
      </main>
    </div>
  );
}
