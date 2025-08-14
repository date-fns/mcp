# @date-fns/mcp

date-fns documentation MCP server.

🚧 Work in progress, **follow for updates on [Twitter](https://twitter.com/kossnocorp) or [Bluesky](https://bsky.app/profile/koss.nocorp.me)**

## Running

### VS Code

To connect the VS Code, add following lines to your `.vscode/mcp.json` replacing `npx` with your package manager command (e.g., `pnpm` or `yarn`):

```json
{
  "servers": {
    "dateFnsMcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["date-fns-mcp"]
    }
  }
}
```

Once it's done, the MCP server will be available in the Extensions tab in the Primary Side Bar. Make sure it's started by right-clicking (or using the cog icon) and selecting Start Server in the context menu.

[See the VS Code documentation on MCP servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) for more details.

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

Grab the container name, then run the command, replacing `eager_wing` with your container name and `/wrkspc/date-fns-mcp` with the path to the MCP repo:

```bash
docker exec -it eager_wing bash -lc 'cd /wrkspc/date-fns-mcp && eval "$(mise activate bash --shims)" && node ./src/bin.ts'
```

If you run [the main date-fns repo](https://github.com/date-fns/date-fns) dev container, the path could be `/wrkspc/date-fns/submodules/mcp` (depending on the repo directory name where you have it cloned):

```bash
docker exec -it eager_wing bash -lc 'cd /wrkspc/date-fns/submodules/mcp && eval "$(mise activate bash --shims)" && node ./src/bin.ts'
```

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
