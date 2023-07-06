import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import JokesHeader from "~/components/header";
import JokesList from "~/components/jokesList";

import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";

import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="error-container">
        <p>There are no jokes to display.</p>
        <Link to="new">Add your own</Link>
      </div>
    );
  }
  return <div className="error-container">I did a whoopsies.</div>;
}

export const loader = async ({ request }: LoaderArgs) => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    skip: randomRowNumber,
    take: 1,
  });

  const jokeListItems = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true },
    take: 5,
  });
  const user = await getUser(request);
  if (!randomJoke) {
    throw new Response("No random joke found", {
      status: 404,
    });
  }
  return { randomJoke, jokeListItems, user };
};

export default function JokesIndexRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <JokesHeader data={data} />
      <div style={{ display: "flex", gap: "3rem", margin: "3rem" }}>
        <JokesList data={data} />
        <div>
          <p>Here's a random joke:</p>
          <p>{data.randomJoke.content}</p>
          <Link to={data.randomJoke.id}>
            "{data.randomJoke.name}" Permalink
          </Link>
        </div>
      </div>
    </div>
  );
}
