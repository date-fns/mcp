import { server } from "../server.ts";

const fns = [
  {
    name: "addDays",
    signature: "addDays(date: Date | number, amount: number): Date",
    description: "Add the specified number of days to the given date.",
  },
  {
    name: "subDays",
    signature: "subDays(date: Date | number, amount: number): Date",
    description: "Subtract the specified number of days from the given date.",
  },
];

server.tool("list_fns", "List available functions", {}, async () => {
  const lines = [
    `# date-fns functions (${fns.length})`,
    ...fns.flatMap((fn) => [
      "",
      `## ${fn.name}`,
      "",
      fn.signature,
      "",
      fn.description,
    ]),
  ];

  return {
    content: [
      {
        type: "text",
        text: lines.join("\n"),
      },
    ],
  };
});
