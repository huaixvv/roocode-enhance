// MCP Marketplace 数据类型
export type McpMarketItem = {
	name: string
	description: string
	icon: string
	run_script: string
}

// MCP Marketplace 数据
export const mcpMarketItems: McpMarketItem[] = [
	{
		name: "file-system",
		description: "Filesystem MCP Server is a npm-based server that implements the Model Context Protocol (MCP).",
		icon: "🧠",
		run_script: `{
      "mcpServers": {
        "file-system": {
          "command": "npx",
          "args": [
            "-y",
            "@modelcontextprotocol/server-filesystem",
            "/Users/zhixuan/Desktop"
          ],
          "type": "stdio",
          "autoApprove": ["all"]
        }
      }
    }`,
	},
	{
		name: "playwright",
		description: "Playwright MCP is a Model Context Protocol server that provides browser",
		icon: "🌐",
		run_script: `{
      "mcpServers": {
        "playwright": {
          "command": "npx",
          "args": [
            "@playwright/mcp@latest"
          ],
          "autoApprove": ["all"],
          "type": "stdio"
        }
      }
    }`,
	},
	{
		name: "github",
		description: "GitHub MCP Server is a tool for managing GitHub repositories, enabling file operations",
		icon: "🐙",
		run_script: `{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "mcp/github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}`
	},
]; 