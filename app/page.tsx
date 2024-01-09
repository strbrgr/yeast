import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers"
import Link from "next/link"
import RecipeBadge from "./_components/RecipeBadge";
import Header from "./_components/Header";

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: recipes } = await supabase.from("recipes").select();
  const { data: user } = await supabase.auth.getUser()

  return (
    <div>
      <main>
        {/* Hero section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <Header />
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Yeast
              </h1>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <ul className="flex gap-4">
                  {recipes && recipes.map((recipe: IRecipe) => <RecipeBadge key={recipe.id} recipe={recipe} />)}
                  <Link href="add" className="border-2 rounded w-64 h-64 border-gray-400 p-8">
                    Add
                  </Link>
                </ul>

              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      {/* <footer aria-labelledby="footer-heading" className="relative"> */}
      {/*   <h2 id="footer-heading" className="sr-only"> */}
      {/*     Footer */}
      {/*   </h2> */}
      {/*   <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8"> */}
      {/*     <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between"> */}
      {/*       <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0"> */}
      {/*         &copy; 2020 Your Company, Inc. All rights reserved. */}
      {/*       </p> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </footer> */}

    </div>
  )
}

