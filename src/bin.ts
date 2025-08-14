#!/usr/bin/env node

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { server } from "./server.ts";
import "./tools/list.ts";

const transport = new StdioServerTransport();

await server.connect(transport);

// NOTE: We have to print to `stderr` instead of `stdout` to prevent Claude
// Desktop from throwing an `Unexpected token` error.
console.error("⭐️ date-fns MCP Server running on stdio");
