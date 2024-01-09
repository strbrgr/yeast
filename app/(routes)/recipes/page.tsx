import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import RecipeBadge from "./RecipeBadge";
import Link from "next/link";
import IRecipe from "@/app/lib/types/IRecipe";

export default async function Recipes() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: recipes } = await supabase.from("recipes").select();

  return <>
    <main className="w-max my-24 mx-24">
      <ul className="flex gap-4">
        {recipes && recipes.map((recipe: IRecipe) => <RecipeBadge key={recipe.id} recipe={recipe} />)}
        <Link href="add" className="border-2 rounded w-24 h-24 border-gray-400 p-8">
          Add
        </Link>
      </ul>
    </main>
  </>
}
