import type { ActionArgs, LinksFunction, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Link,
  useLoaderData,
  useParams,
  useRouteError,
} from "@remix-run/react";
import JokesHeader from "~/components/header";
import JokesList from "~/components/jokesList";

import { db } from "~/utils/db.server";
import { requireUserId, getUserId, getUser } from "~/utils/session.server";

import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const loader = async ({ params, request }: LoaderArgs) => {
  const userId = await getUserId(request);
  const joke = await db.joke.findUnique({
    where: { id: params.id },
  });

  const jokeListItems = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true },
    take: 5,
  });
  const user = await getUser(request);

  if (!joke) {
    throw new Response("What a joke! Not found.", {
      status: 404,
    });
  }
  return { isOwner: userId === joke.jokesterId, joke, jokeListItems, user };
};

export const action = async ({ params, request }: ActionArgs) => {
  const form = await request.formData();
  // if (request.method !== "DELETE") {
  //   throw new Response(`The intent ${form.get("intent")} is not supported`, {
  //     status: 400,
  //   });
  // }

  if (form.get("intent") !== "delete") {
    throw new Response(`The intent ${form.get("intent")} is not supported`, {
      status: 400,
    });
  }
  const userId = await requireUserId(request);
  const joke = await db.joke.findUnique({
    where: { id: params.id },
  });

  if (!joke) {
    throw new Response("Can't delete what does not exist", {
      status: 404,
    });
  }
  if (joke.jokesterId !== userId) {
    throw new Response("Pssh, nice try. That's not your joke", { status: 403 });
  }
  await db.joke.delete({ where: { id: params.id } });
  return redirect("/jokes");
};

export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <JokesHeader data={data} />
      <div style={{ display: "flex", gap: "3rem", margin: "3rem" }}>
        <JokesList data={data} />
        <div>
          <p>Here's your hilarious joke:</p>
          <p>{data.joke.content}</p>
          <Link to=".">"{data.joke.name}" Permalink</Link>
          {data.isOwner && (
            <form method="post">
              <button
                className="button"
                name="intent"
                type="submit"
                value="delete"
              >
                Delete
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const { id } = useParams();
  const error = useRouteError();
  console.log({ error });

  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      return (
        <div className="error-container">
          What you're trying to do is not allowed.
        </div>
      );
    }
    if (error.status === 403) {
      return (
        <div className="error-container">
          Sorry, but "{id}" is not your joke.
        </div>
      );
    }
    if (error.status === 404) {
      return (
        <div className="error-container">Huh? What the heck is "{id}"?</div>
      );
    }
  }

  return (
    <div className="error-container">
      There was an error loading joke by the id "${id}". Sorry.
    </div>
  );
}
