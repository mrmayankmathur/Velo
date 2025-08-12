import { openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    // Creating a new agent with a system prompt (we can add optional tools, too)
    const summarizer = createAgent({
      name: "summarizer",
      system:
        "You are an expert Next.JS Developer. You write readable, maintainable code. You write simple Next.JS and React snippets.",
      model: openai({
        model: "gpt-4o",
        apiKey: process.env.GITHUB_TOKEN,
        baseUrl: "https://models.github.ai/inference",
      }),
    });

    const { output } = await summarizer.run(
      `Write the following snippet: ${event.data.value}`
    );

    return { output };
  }
);
