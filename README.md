# ChatGPT Plugin Starter TypeScript NextJS

In the world of AI development, there are plenty of Python examples but far fewer in Typescript/Javascript.

This is a clone of the [OpenAI plugins quickstart](https://github.com/openai/plugins-quickstart) using NextJS and TypeScript. It uses the new Next 13 app routes, which are still "beta" so use at your own risk!

## ChatGPT Plugins

ChatGPT Plugins are an alpha feature pf ChapGPT and you need to join the [waitlist](https://openai.com/waitlist/plugins) to get access. Once granted access you'll get an email from OpenAI and the plugins interface will be available to you in ChatGPT. While not ideal, you can however begin developing plugins without access.

OpenAI plugins connect ChatGPT to third-party applications. These plugins enable ChatGPT to interact with APIs, enhancing ChatGPT's capabilities and allowing it to perform a wide range of actions. Developing ChatGPT plugins involves building an API accompanied by a standardized manifest file and an OpenAPI specification. These define the plugin's functionality, allowing ChatGPT to make calls to you API routes. ChatGPT plugin APIs follow the OpenAPI specification (OpenAPI, aka Swagger, not OpenAI!), which allows ChatGPT to automatically generate a UI for the plugin. This UI is used to configure the plugin and to display the plugin's output. For more information on ChatGPT plugins, see the [documentation](https://platform.openai.com/docs/plugins/introduction).

## Getting started

Like the OpenAI Python starter, this is a simple ToDo app, meant to jumpstart your own efforts building a nextJS based API. To get started:

### 1. Clone (or fork) the repo and install dependencies

```sh
gh repo clone gannonh/chatgpt-plugin-starter-nextjs

cd chatgpt-plugin-starter-nextjs

npm install
```

### 2. Build and run the API

```sh
npm run build
npm run start
```

> ⚠️ In dev mode (`npm run dev`) I had issues with memory/state persistence, so I recommend running in production mode

### 3. Register your plugin for local access/development

- In ChatGPT select "Plugins ALPHA" from the Model dropdown, and then "plugin store" from the Plugins dropdown.
- Click "Develop your own plugin" (not install unverified plugin)
- Enter localhost for the URL (eg, http://localhost:3000)

## Usage

Here are some commands you can try

- What are my todos?
- Add build a chatgpt plugin to my todos
- How many open todos do I?

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgannonh%2Fchatgpt-plugin-starter-nextjs)
