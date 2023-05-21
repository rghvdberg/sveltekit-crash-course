import { json } from "@sveltejs/kit";

export function GET(o) {
  const guides = [
    { id: 1, title: "some title 1", body: "Lorem ipsum" },
    { id: 2, title: "some title 2", body: "Lorem ipsum" },
    { id: 3, title: "some title 3", body: "Lorem ipsum" },
    { id: 4, title: "some title 4", body: "Lorem ipsum" },
    { id: 5, title: "some title 5", body: "Lorem ipsum" },
  ];
  const guide = guides.find((g) => g.id == o.params.id);
  if (guide) return json(guide);

  return json();
}
