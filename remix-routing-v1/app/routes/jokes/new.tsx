import type { ActionArgs, LinksFunction, LoaderArgs } from "@remix-run/node";
import {
  useActionData,
  isRouteErrorResponse,
  useRouteError,
  Link,
  useLoaderData,
} from "@remix-run/react";
import { json, redirect } from "@remix-run/node";

import { db } from "~/utils/db.server";
import { badRequest } from "~/utils/request.server";
import { requireUserId, getUserId, getUser } from "~/utils/session.server";
import JokesHeader from "~/components/header";
import JokesList from "~/components/jokesList";

import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  const jokeListItems = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true },
    take: 5,
  });
  const user = await getUser(request);
  if (!userId) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return json({ jokeListItems, user });
};

export function ErrorBoundary() {
  const error = useRouteError();
  console.log({ error });

  if (isRouteErrorResponse(error) && error.status === 401) {
    return (
      <div className="error-container">
        <p>You must be logged in to create a joke.</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}

function validateJokeContent(content: string) {
  if (content.length < 10) {
    return "That joke is too short";
  }
}

function validateJokeName(name: string) {
  if (name.length < 3) {
    return "That joke's name is too short";
  }
}

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const content = form.get("content");
  const name = form.get("name");
  if (typeof content !== "string" || typeof name !== "string") {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly.",
    });
  }

  const fieldErrors = {
    content: validateJokeContent(content),
    name: validateJokeName(name),
  };
  const fields = { content, name };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }

  const joke = await db.joke.create({
    data: { ...fields, jokesterId: userId },
  });
  return redirect(`/jokes/${joke.id}`);
};

export default function NewJokeRoute() {
  const actionData = useActionData<typeof action>();
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <JokesHeader data={data} />
      <div style={{ display: "flex", gap: "3rem", margin: "3rem" }}>
        <JokesList />
        <div style={{ flexGrow: 1, maxWidth: "600px" }}>
          <p>Add your own hilarious joke</p>
          <form method="post">
            <div>
              <label>
                Name:{" "}
                <input
                  defaultValue={actionData?.fields?.name}
                  name="name"
                  type="text"
                  aria-invalid={Boolean(actionData?.fieldErrors?.name)}
                  aria-errormessage={
                    actionData?.fieldErrors?.name ? "name-error" : undefined
                  }
                />
              </label>
              {actionData?.fieldErrors?.name ? (
                <p
                  className="form-validation-error"
                  id="name-error"
                  role="alert"
                >
                  {actionData.fieldErrors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label>
                Content:{" "}
                <textarea
                  defaultValue={actionData?.fields?.content}
                  name="content"
                  aria-invalid={Boolean(actionData?.fieldErrors?.content)}
                  aria-errormessage={
                    actionData?.fieldErrors?.content
                      ? "content-error"
                      : undefined
                  }
                />
              </label>
              {actionData?.fieldErrors?.content ? (
                <p
                  className="form-validation-error"
                  id="content-error"
                  role="alert"
                >
                  {actionData.fieldErrors.content}
                </p>
              ) : null}
            </div>
            <div>
              {actionData?.formError ? (
                <p className="form-validation-error" role="alert">
                  {actionData.formError}
                </p>
              ) : null}

              <button
                type="submit"
                className="button"
                style={{ width: "fit-content" }}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
