import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

const JokesList = ({ data }: any) => {
  return (
    <main className="jokes-main">
      <div className="">
        <div className="jokes-list">
          <Link to=".">Get a random joke</Link>
          <p>Here are a few more jokes to check out:</p>
          <ul>
            {data?.jokeListItems?.map(({ id, name }: any) => (
              <li key={id}>
                <Link to={`/jokes/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/jokes/new" className="button">
            Add your own
          </Link>
        </div>
        {/* <div className="jokes-outlet"></div> */}
      </div>
    </main>
  );
};
export default JokesList;
