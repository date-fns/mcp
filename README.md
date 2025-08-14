# @date-fns/mcp

date-fns documentation MCP server.

🚧 Work in progress, **follow for updates on [Twitter](https://twitter.com/kossnocorp) or [Bluesky](https://bsky.app/profile/koss.nocorp.me)**

## Running

### VS Code

To connect the VS Code, add the following lines to your `.vscode/mcp.json` replacing `npx` with your package manager command (e.g., `pnpm` or `yarn` with the `dlx` argument):

```json
{
  "servers": {
    "date-fns": {
      "type": "stdio",
      "command": "npx",
      "args": ["@date-fns/mcp"]
    }
  }
}
```

If you have `@date-fns/mcp` installed as a dependency, you can use `npx date-fns-mcp` (or `pnpm date-fns-mcp`/`yarn date-fns-mcp`) instead.

Once it's done, the MCP server will be available in the Extensions tab in the Primary Side Bar. Make sure it's started by right-clicking (or using the cog icon) and selecting Start Server in the context menu.

[See the VS Code documentation on MCP servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) for more details.

### Claude Code

To connect the Claude Code, add the following lines to `.mcp.json` replacing `npx` with your package manager command (e.g., `pnpm` or `yarn` with the `dlx` argument):

```json
{
  "mcpServers": {
    "date-fns": {
      "command": "npx",
      "args": ["@date-fns/mcp"]
    }
  }
}
```

If you have `@date-fns/mcp` installed as a dependency, you can use `npx date-fns-mcp` (or `pnpm date-fns-mcp`/`yarn date-fns-mcp`) instead.

Alternatively, you can use CLI to add it to the user scope:

```bash
claude mcp add date-fns --scope user npx @date-fns/mcp
```

### Claude Desktop

To connect the Claude Desktop, add the following lines to the configuration file (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS or `%APPDATA%\Claude\claude_desktop_config.json` on Windows), replacing `npx` with your package manager command (e.g., `pnpx` or `yarn` with `dlx` argument):

```json
{
  "mcpServers": {
    "date-fns": {
      "command": "npx",
      "args": ["@date-fns/mcp"]
    }
  }
}
```

Make sure to restart the app, to apply the changes. You can verify it is connected by going into Settings > Connectors. It should list `date-fns` as a local dev connector.

[See the Claude documentation on MCP servers](https://support.anthropic.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop) for more details.

### Dev Container

When running the project in a dev container, you can use `docker` to run the `stdio` server.

First, get the container name:

```bash
docker ps --format "table {{.Names}}\t{{.Image}}"
```

It would print a table looking like this:

```
NAMES        IMAGE
eager_wing   vsc-date-fns-edf43f8ea15ab083575b80286e19288104a196412032ae9caa7e1f2ad451d6be-uid
```

Grab the container name, then to verify if everything is set up, run the command, replacing `eager_wing` with your container name and `/wrkspc/date-fns-mcp` with the path to the MCP repo:

```bash
docker exec -it eager_wing bash -lc 'cd /wrkspc/date-fns-mcp && eval "$(mise activate bash --shims)" && node ./src/bin.ts'
```

You should see `⭐️ date-fns MCP Server running on stdio`.

If you run [the main date-fns repo](https://github.com/date-fns/date-fns) dev container, the path could be `/wrkspc/date-fns/submodules/mcp` (depending on the repo directory name where you have it cloned):

```bash
docker exec -it eager_wing bash -lc 'cd /wrkspc/date-fns/submodules/mcp && eval "$(mise activate bash --shims)" && node ./src/bin.ts'
```

#### Connecting to Claude Desktop

To connect the Claude Desktop to the MCP running in a dev container, adjust your configuration, replacing the name (i.e., `eager_wing`) and the path to the repo (i.e., `/wrkspc/date-fns-mcp`):

```json
{
  "globalShortcut": "Alt+Ctrl+Space",
  "mcpServers": {
    "date-fns": {
      "command": "docker",
      "args": [
        "exec",
        "-i",
        "eager_wing",
        "bash",
        "-lc",
        "cd /wrkspc/date-fns-mcp && eval \"$(mise activate bash --shims)\" && node ./src/bin.ts"
      ]
    }
  }
}
```

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
