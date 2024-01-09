import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/')
  }

  const addRecipe = async (formData: FormData) => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);

    const { error } = await supabase
      .from('recipes')
      .insert({ name: formData.get('name'), description: formData.get('desc') })

  }

  return <>
    <form action={signOut}>
      <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        Logout
      </button>
    </form>


    <main className="w-96 mx-auto">
      <p className="text-center">Create a recipe</p>
    </main>

    <form action={addRecipe}>
      <div className="w-96 mx-auto" >
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-100">
          Recipe Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Pizza Margerita"
          />
        </div>
        <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-100">
          Description
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="desc"
            id="desc"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="A classic recipe"
          />
        </div>
        <button className="py-2 px-4 border-2 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Add
        </button>
      </div>
    </form>

  </>
}
