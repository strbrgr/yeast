import IRecipe from "@/app/lib/types/IRecipe"

export default function RecipeBadge({
  recipe
}: {
  recipe: IRecipe
}) {
  return <>
    <li className="border-2 rounded w-64 h-64 border-gray-200">
      {recipe.name}
    </li>
  </>
}
