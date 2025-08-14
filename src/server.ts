import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export const server = new McpServer({
  name: "date-fns",
  version: "0.1.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});
