import { Link } from "react-router-dom";

function Home({ productData }) {
  //final
  const newCategory = [];
  //remove duplicate
  const categories = [...new Set(productData.map(product => product.category))];

  for (let i = 0; i < categories.length; i++) {
    const str = categories[i];

    const removeDash = str.replace("-", " ");
    const modifiedString =
      removeDash.charAt(0).toUpperCase() + removeDash.slice(1);

    const capitalFirstLetter = modifiedString
      .split(" ") // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join the words back into a string

    newCategory.push(capitalFirstLetter);
  }

  return (
    <div className="banner">
      <div>
        {newCategory.map((category, index) => (
          <li key={index}>
            <Link>{category}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Home;
