import { error } from "@sveltejs/kit";
export async function load({ fetch }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const guides = await res.json();

  if (res.ok) {
    return {
      props: {
        guides,
      },
    };
  }
  throw error(420, "Could not fetch the guides");
}
