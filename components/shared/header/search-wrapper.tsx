import { getAllCategories } from "@/lib/actions/product.actions";
import SearchFormClient from "./search";

// Define the shape of a single category for TypeScript
interface Category {
  name: string;
}

// Define the two possible return types for the action
type CategoryArrayResult = Category[];
type CategoryObjectResult = {
  data: Category[];
};

export default async function SearchWrapper() {
  // We specify that 'categories' will be an array of our Category interface
  let categories: Category[] = [];

  try {
    // Explicitly cast the result to the possible types so TypeScript knows about the '.data' property
    const result = (await getAllCategories()) as
      | CategoryArrayResult
      | CategoryObjectResult;

    // The logic now works because TypeScript knows 'result' might have a 'data' property
    const raw = Array.isArray(result) ? result : (result.data ?? []);

    categories = raw.map((c) => ({ name: c.name, value: c.name }));
  } catch (err) {
    console.error("Failed to fetch categories in wrapper:", err);
    categories = [];
  }

  // Pass the plain data down as props to the Client Component
  return <SearchFormClient categories={categories} />;
}
