# tRPC - monorepo - solid.js - express - vite

In this repo I want to learn all of these concepts at the same time.

## Yarn workspaces

I'm using yarn workspaces to create my monorepo app.

`$. touch package.json`

```json
{
    "private": true,
    "name": "trpc-monorepo-solid",
    "workspaces": [],
    "scripts": {}
}
```

Create a React project and add it to your workspace list.

In this step, we will create a new React project and add it to the list of packages inside the root workspace.

First, let’s create a folder called packages where we will add the different projects we will create in the tutorial:

`$. mkdir packages`

now cd packages and create a project called client in this folder and create your client solid vite app inside of it. and the add client to the workspace list of package.json.

And then create a express project `packages/server` and add it to the list of workspaces.
