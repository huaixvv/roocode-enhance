import React, { useState, useEffect } from "react"
import { Trans } from "react-i18next"
import {
	VSCodeButton,
	VSCodeCheckbox,
	VSCodeLink,
	VSCodePanels,
	VSCodePanelTab,
	VSCodePanelView,
} from "@vscode/webview-ui-toolkit/react"

import { McpServer } from "@roo/shared/mcp"

import { vscode } from "@src/utils/vscode"
import { useExtensionState } from "@src/context/ExtensionStateContext"
import { useAppTranslation } from "@src/i18n/TranslationContext"
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@src/components/ui"

import { Tab, TabContent, TabHeader } from "../common/Tab"

import McpToolRow from "./McpToolRow"
import McpResourceRow from "./McpResourceRow"
import McpEnabledToggle from "./McpEnabledToggle"
import { McpErrorRow } from "./McpErrorRow"
import { McpMarketItem, mcpMarketItems } from "./McpMarketItems"

type McpViewProps = {
	onDone: () => void
}

const McpView = ({ onDone }: McpViewProps) => {
	const {
		mcpServers: servers,
		alwaysAllowMcp,
		mcpEnabled,
		enableMcpServerCreation,
		setEnableMcpServerCreation,
	} = useExtensionState()

	const { t } = useAppTranslation()
	const [activeTab, setActiveTab] = useState<string>("servers") // 添加选项卡状态

	return (
		<Tab>
			<TabHeader className="flex justify-between items-center">
				<div className="flex">
					<h3 
						className={`text-vscode-foreground m-0 mr-4 cursor-pointer ${activeTab === "servers" ? "font-bold" : ""}`}
						onClick={() => setActiveTab("servers")}
						style={{ 
							borderBottom: activeTab === "servers" ? "2px solid var(--vscode-button-background)" : "none",
							paddingBottom: "5px"
						}}
					>
						MCP Servers
					</h3>
					<h3 
						className={`text-vscode-foreground m-0 cursor-pointer ${activeTab === "market" ? "font-bold" : ""}`}
						onClick={() => setActiveTab("market")}
						style={{ 
							borderBottom: activeTab === "market" ? "2px solid var(--vscode-button-background)" : "none",
							paddingBottom: "5px",
							color: activeTab === "market" ? "var(--vscode-button-background)" : undefined
						}}
					>
						Market
					</h3>
				</div>
				<Button onClick={onDone}>{t("mcp:done")}</Button>
			</TabHeader>

			<TabContent>
				{activeTab === "servers" && (
					<>
						<div
							style={{
								color: "var(--vscode-foreground)",
								fontSize: "13px",
								marginBottom: "10px",
								marginTop: "5px",
							}}>
							<Trans i18nKey="mcp:description">
								<VSCodeLink href="https://github.com/modelcontextprotocol" style={{ display: "inline" }}>
									Model Context Protocol
								</VSCodeLink>
								<VSCodeLink
									href="https://github.com/modelcontextprotocol/servers"
									style={{ display: "inline" }}>
									community-made servers
								</VSCodeLink>
							</Trans>
						</div>

						<McpEnabledToggle />

						{mcpEnabled && (
							<>
								<div style={{ marginBottom: 15 }}>
									<VSCodeCheckbox
										checked={enableMcpServerCreation}
										onChange={(e: any) => {
											setEnableMcpServerCreation(e.target.checked)
											vscode.postMessage({ type: "enableMcpServerCreation", bool: e.target.checked })
										}}>
										<span style={{ fontWeight: "500" }}>{t("mcp:enableServerCreation.title")}</span>
									</VSCodeCheckbox>
									<p
										style={{
											fontSize: "12px",
											marginTop: "5px",
											color: "var(--vscode-descriptionForeground)",
										}}>
										{t("mcp:enableServerCreation.description")}
									</p>
								</div>

								{/* Server List */}
								{servers.length > 0 && (
									<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
										{servers.map((server) => (
											<ServerRow
												key={`${server.name}-${server.source || "global"}`}
												server={server}
												alwaysAllowMcp={alwaysAllowMcp}
											/>
										))}
									</div>
								)}

								{/* Edit Settings Buttons */}
								<div style={{ marginTop: "10px", width: "100%", display: "flex", gap: "10px" }}>
									<Button
										variant="secondary"
										style={{ flex: 1 }}
										onClick={() => {
											vscode.postMessage({ type: "openMcpSettings" })
										}}>
										<span className="codicon codicon-edit" style={{ marginRight: "6px" }}></span>
										{t("mcp:editGlobalMCP")}
									</Button>
									<Button
										variant="secondary"
										style={{ flex: 1 }}
										onClick={() => {
											vscode.postMessage({ type: "openProjectMcpSettings" })
										}}>
										<span className="codicon codicon-edit" style={{ marginRight: "6px" }}></span>
										{t("mcp:editProjectMCP")}
									</Button>
								</div>
							</>
						)}
					</>
				)}

				{activeTab === "market" && <McpMarketplace />}
			</TabContent>
		</Tab>
	)
}

// MCP Marketplace 组件
const McpMarketplace = () => {
	const { t } = useAppTranslation()
	const [installStatus, setInstallStatus] = useState<Record<string, string | undefined>>({})
	const [debugInfo, setDebugInfo] = useState<string[]>([])
	const [showDebug, setShowDebug] = useState<boolean>(true)
	const [lastInstalledServer, setLastInstalledServer] = useState<string | null>(null)
	const debugInfoRef = React.useRef<HTMLDivElement>(null)
	const { mcpServers: servers } = useExtensionState()
	const [directInstallConfig, setDirectInstallConfig] = useState<string>(`{
  "mcpServers": {
    "direct-test": {
      "command": "echo",
      "args": ["直接安装测试"],
      "type": "stdio",
      "autoApprove": ["all"]
    }
  }
}`);

	// 组件加载时检查已存在的服务
	useEffect(() => {
		if (servers && servers.length > 0) {
			// 检查每个市场项是否已安装
			mcpMarketItems.forEach(item => {
				const foundServer = servers.find(server => server.name === item.name)
				if (foundServer) {
					setInstallStatus(prev => ({ ...prev, [item.name]: "installed" }))
					addDebugInfo(`检测到已安装的服务: ${item.name}`)
				}
			})
		}
	}, [servers])

	// 添加调试信息的函数
	const addDebugInfo = (message: string) => {
		const timestamp = new Date().toLocaleTimeString()
		setDebugInfo(prev => [...prev, `[${timestamp}] ${message}`])
		
		// 滚动到底部
		setTimeout(() => {
			if (debugInfoRef.current) {
				debugInfoRef.current.scrollTop = debugInfoRef.current.scrollHeight
			}
		}, 100)
	}
	
	// 添加消息处理逻辑
	useEffect(() => {
		// 处理来自扩展的消息
		const handleMessage = (event: MessageEvent) => {
			const message = event.data
			
			// 处理MCP设置文件内容
			if (message.type === "mcpSettingsContent") {
				try {
					// 尝试解析JSON
					if (typeof message.text === "string") {
						if (message.text.startsWith("{")) {
							try {
								const jsonObj = JSON.parse(message.text)
								if (jsonObj.success) {
									addDebugInfo(`✅ ${jsonObj.message || "配置保存成功"}`)
									// 设置file-system安装成功
									if (lastInstalledServer === "file-system") {
										setInstallStatus((prev) => ({ ...prev, "file-system": "installed" }))
										addDebugInfo("✅ file-system 安装成功")
									}
								} else if (jsonObj.error) {
									addDebugInfo(`❌ 保存失败: ${jsonObj.error}`)
									if (lastInstalledServer) {
										setInstallStatus((prev) => ({ ...prev, [lastInstalledServer]: "error" }))
									}
								}
							} catch (e) {
								// 不是有效的JSON对象
							}
						}
					}
				} catch (error) {
					// 忽略错误
				}
			}
			
			// 处理MCP服务器列表更新
			if (message.type === "mcpServers") {
				const servers = message.mcpServers || []
				
				// 检查所有已安装或正在安装的服务
				Object.keys(installStatus).forEach(serverName => {
					// 只要服务在列表中就视为安装成功
					const foundServer = servers.find((server: McpServer) => server.name === serverName)
					if (foundServer) {
						// 服务存在，标记为安装成功
						setInstallStatus((prev) => ({ ...prev, [serverName]: "installed" }))
					}
				});
				
				// 检查最后安装的服务
				if (lastInstalledServer) {
					const foundServer = servers.find((server: McpServer) => server.name === lastInstalledServer)
					if (foundServer) {
						// 服务存在，标记为安装成功
						setInstallStatus((prev) => ({ ...prev, [lastInstalledServer]: "installed" }))
						addDebugInfo(`✅ 服务 ${lastInstalledServer} 已成功安装`)
					} else {
						// 服务不在列表中，可能安装失败
						addDebugInfo(`⚠️ 服务 ${lastInstalledServer} 不在服务列表中`)
					}
				}
			}
		}
		
		window.addEventListener("message", handleMessage)
		return () => {
			window.removeEventListener("message", handleMessage)
		}
	}, [lastInstalledServer])

	const handleInstall = async (item: McpMarketItem) => {
		try {
			// 设置安装状态
			setInstallStatus((prev) => ({ ...prev, [item.name]: "installing" }))
			addDebugInfo(`开始安装 ${item.name}...`)

			// 解析安装配置
			const installConfig = JSON.parse(item.install)
			
			// 获取服务名称和配置
			const serverName = Object.keys(installConfig.mcpServers)[0]
			const serverConfig = installConfig.mcpServers[serverName]
			
			// 发送消息到扩展，安装MCP服务
			vscode.postMessage({
				type: "installMcpServer",
				serverName,
				serverConfig,
				source: "global"
			} as any)
			
			// 记录当前安装的服务名称
			setLastInstalledServer(serverName)
			
			// 设置超时处理，如果10秒后仍未收到响应，显示错误
			setTimeout(() => {
				setInstallStatus((prev) => {
					// 如果状态仍然是installing，则表示未收到响应
					if (prev[item.name] === "installing") {
						addDebugInfo(`❌ 安装超时，请检查VSCode输出面板中的日志`)
						return { ...prev, [item.name]: "error" }
					}
					return prev
				})
			}, 10000)
			
		} catch (error: unknown) {
			console.error(`安装 ${item.name} 失败:`, error)
			addDebugInfo(`❌ 安装失败: ${String(error)}`)
			setInstallStatus((prev) => ({ ...prev, [item.name]: "error" }))
		}
	}

	const clearDebugInfo = () => {
		setDebugInfo([])
	}

	return (
		<div style={{ marginTop: "20px" }}>
			<div style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: "10px"
			}}>
				<h3 style={{ 
					fontSize: "14px", 
					fontWeight: "600",
					color: "var(--vscode-foreground)" 
				}}>
					MCP Marketplace
				</h3>
				<div>
					<Button 
						variant="secondary" 
						size="sm" 
						onClick={() => {
							// 刷新服务列表
							vscode.postMessage({ type: "getMcpServers" } as any);
							addDebugInfo("手动刷新服务列表...");
						}}
						style={{ marginRight: "5px" }}
					>
						刷新服务
					</Button>
					<Button 
						variant="secondary" 
						size="sm" 
						onClick={() => setShowDebug(!showDebug)}
						style={{ marginRight: "5px" }}
					>
						{showDebug ? "隐藏调试" : "显示调试"}
					</Button>
					{showDebug && (
						<>
							<Button 
								variant="secondary" 
								size="sm" 
								onClick={clearDebugInfo}
								style={{ marginRight: "5px" }}
							>
								清除调试
							</Button>
						</>
					)}
				</div>
			</div>
			
			{/* 调试信息 */}
			{showDebug && (
				<div 
					ref={debugInfoRef}
					style={{
						padding: "10px",
						marginBottom: "15px",
						backgroundColor: "var(--vscode-textCodeBlock-background)",
						borderRadius: "4px",
						fontSize: "12px",
						color: "var(--vscode-foreground)",
						maxHeight: "400px",
						overflowY: "auto",
						border: "1px solid var(--vscode-widget-border)"
					}}
				>
					<div style={{
						display: "flex", 
						justifyContent: "space-between", 
						alignItems: "center",
						marginBottom: "5px"
					}}>
						<strong>调试信息:</strong>
						<span style={{fontSize: "11px", color: "var(--vscode-descriptionForeground)"}}>
							{debugInfo.length} 条消息
						</span>
					</div>
					{debugInfo.length > 0 ? (
						<pre style={{
							margin: "5px 0 0 0",
							whiteSpace: "pre-wrap",
							wordBreak: "break-word"
						}}>
							{debugInfo.map((info, index) => (
								<div key={index}>{info}</div>
							))}
						</pre>
					) : (
						<div style={{color: "var(--vscode-descriptionForeground)"}}>
							暂无调试信息
						</div>
					)}
				</div>
			)}
			
			<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				{mcpMarketItems.map((item) => (
					<div
						key={item.name}
						style={{
							display: "flex",
							alignItems: "center",
							padding: "10px",
							background: "var(--vscode-textCodeBlock-background)",
							borderRadius: "4px",
						}}>
						<div style={{ fontSize: "24px", marginRight: "10px" }}>{item.icon}</div>
						<div style={{ flex: 1 }}>
							<div style={{ fontWeight: "500" }}>{item.name}</div>
							<div style={{ 
								fontSize: "12px", 
								color: "var(--vscode-descriptionForeground)" 
							}}>
								{item.description}
							</div>
						</div>
						<Button
							style={{
								width: "60px",
								height: "23px",
								fontSize: "10px",
								padding: "0px",
								borderRadius: "4px",
							}}
							variant={installStatus[item.name] === "installed" ? "secondary" : "default"}
							disabled={installStatus[item.name] === "installing" || installStatus[item.name] === "installed"}
							onClick={() => handleInstall(item)}>
							{installStatus[item.name] === "installing" ? "Installing..." : 
							 installStatus[item.name] === "installed" ? "Installed" : 
							 installStatus[item.name] === "error" ? "Re-Install" : "Install"}
						</Button>
						{/* {installStatus[item.name] && (
							<div style={{
								fontSize: "12px",
								color: installStatus[item.name] === "installed" 
									? "var(--vscode-testing-iconPassed)" 
									: installStatus[item.name] === "installing"
										? "var(--vscode-charts-yellow)"
										: "var(--vscode-testing-iconFailed)",
								marginLeft: "8px"
							}}>
								{installStatus[item.name] === "installed" && "✅ 已安装"}
								{installStatus[item.name] === "installing" && "⏳ 正在安装中..."}
								{installStatus[item.name] === "error" && "❌ 安装失败"}
							</div>
						)} */}
					</div>
				))}
			</div>
		</div>
	)
}

const ServerRow = ({ server, alwaysAllowMcp }: { server: McpServer; alwaysAllowMcp?: boolean }) => {
	const { t } = useAppTranslation()
	const [isExpanded, setIsExpanded] = useState(false)
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
	const [timeoutValue, setTimeoutValue] = useState(() => {
		const configTimeout = JSON.parse(server.config)?.timeout
		return configTimeout ?? 60 // Default 1 minute (60 seconds)
	})

	const timeoutOptions = [
		{ value: 15, label: t("mcp:networkTimeout.options.15seconds") },
		{ value: 30, label: t("mcp:networkTimeout.options.30seconds") },
		{ value: 60, label: t("mcp:networkTimeout.options.1minute") },
		{ value: 300, label: t("mcp:networkTimeout.options.5minutes") },
		{ value: 600, label: t("mcp:networkTimeout.options.10minutes") },
		{ value: 900, label: t("mcp:networkTimeout.options.15minutes") },
		{ value: 1800, label: t("mcp:networkTimeout.options.30minutes") },
		{ value: 3600, label: t("mcp:networkTimeout.options.60minutes") },
	]

	const getStatusColor = () => {
		switch (server.status) {
			case "connected":
				return "var(--vscode-testing-iconPassed)"
			case "connecting":
				return "var(--vscode-charts-yellow)"
			case "disconnected":
				return "var(--vscode-testing-iconFailed)"
		}
	}

	const handleRowClick = () => {
		if (server.status === "connected") {
			setIsExpanded(!isExpanded)
		}
	}

	const handleRestart = () => {
		vscode.postMessage({
			type: "restartMcpServer",
			text: server.name,
			source: server.source || "global",
		})
	}

	const handleTimeoutChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const seconds = parseInt(event.target.value)
		setTimeoutValue(seconds)
		vscode.postMessage({
			type: "updateMcpTimeout",
			serverName: server.name,
			source: server.source || "global",
			timeout: seconds,
		})
	}

	const handleDelete = () => {
		vscode.postMessage({
			type: "deleteMcpServer",
			serverName: server.name,
			source: server.source || "global",
		})
		setShowDeleteConfirm(false)
	}

	return (
		<div style={{ marginBottom: "10px" }}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					padding: "8px",
					background: "var(--vscode-textCodeBlock-background)",
					cursor: server.status === "connected" ? "pointer" : "default",
					borderRadius: isExpanded || server.status === "connected" ? "4px" : "4px 4px 0 0",
					opacity: server.disabled ? 0.6 : 1,
				}}
				onClick={handleRowClick}>
				{server.status === "connected" && (
					<span
						className={`codicon codicon-chevron-${isExpanded ? "down" : "right"}`}
						style={{ marginRight: "8px" }}
					/>
				)}
				<span style={{ flex: 1 }}>
					{server.name}
					{server.source && (
						<span
							style={{
								marginLeft: "8px",
								padding: "1px 6px",
								fontSize: "11px",
								borderRadius: "4px",
								background: "var(--vscode-badge-background)",
								color: "var(--vscode-badge-foreground)",
							}}>
							{server.source}
						</span>
					)}
				</span>
				<div
					style={{ display: "flex", alignItems: "center", marginRight: "8px" }}
					onClick={(e) => e.stopPropagation()}>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setShowDeleteConfirm(true)}
						style={{ marginRight: "8px" }}>
						<span className="codicon codicon-trash" style={{ fontSize: "14px" }}></span>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={handleRestart}
						disabled={server.status === "connecting"}
						style={{ marginRight: "8px" }}>
						<span className="codicon codicon-refresh" style={{ fontSize: "14px" }}></span>
					</Button>
					<div
						role="switch"
						aria-checked={!server.disabled}
						tabIndex={0}
						style={{
							width: "20px",
							height: "10px",
							backgroundColor: server.disabled
								? "var(--vscode-titleBar-inactiveForeground)"
								: "var(--vscode-button-background)",
							borderRadius: "5px",
							position: "relative",
							cursor: "pointer",
							transition: "background-color 0.2s",
							opacity: server.disabled ? 0.4 : 0.8,
						}}
						onClick={() => {
							vscode.postMessage({
								type: "toggleMcpServer",
								serverName: server.name,
								source: server.source || "global",
								disabled: !server.disabled,
							})
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault()
								vscode.postMessage({
									type: "toggleMcpServer",
									serverName: server.name,
									source: server.source || "global",
									disabled: !server.disabled,
								})
							}
						}}>
						<div
							style={{
								width: "6px",
								height: "6px",
								backgroundColor: "var(--vscode-titleBar-activeForeground)",
								borderRadius: "50%",
								position: "absolute",
								top: "2px",
								left: server.disabled ? "2px" : "12px",
								transition: "left 0.2s",
							}}
						/>
					</div>
				</div>
				<div
					style={{
						width: "8px",
						height: "8px",
						borderRadius: "50%",
						background: getStatusColor(),
						marginLeft: "8px",
					}}
				/>
			</div>

			{server.status === "connected" ? (
				isExpanded && (
					<div
						style={{
							background: "var(--vscode-textCodeBlock-background)",
							padding: "0 10px 10px 10px",
							fontSize: "13px",
							borderRadius: "0 0 4px 4px",
						}}>
						<VSCodePanels style={{ marginBottom: "10px" }}>
							<VSCodePanelTab id="tools">
								{t("mcp:tabs.tools")} ({server.tools?.length || 0})
							</VSCodePanelTab>
							<VSCodePanelTab id="resources">
								{t("mcp:tabs.resources")} (
								{[...(server.resourceTemplates || []), ...(server.resources || [])].length || 0})
							</VSCodePanelTab>
							<VSCodePanelTab id="errors">
								{t("mcp:tabs.errors")} ({server.errorHistory?.length || 0})
							</VSCodePanelTab>

							<VSCodePanelView id="tools-view">
								{server.tools && server.tools.length > 0 ? (
									<div
										style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
										{server.tools.map((tool) => (
											<McpToolRow
												key={`${tool.name}-${server.name}-${server.source || "global"}`}
												tool={tool}
												serverName={server.name}
												serverSource={server.source || "global"}
												alwaysAllowMcp={alwaysAllowMcp}
											/>
										))}
									</div>
								) : (
									<div style={{ padding: "10px 0", color: "var(--vscode-descriptionForeground)" }}>
										{t("mcp:emptyState.noTools")}
									</div>
								)}
							</VSCodePanelView>

							<VSCodePanelView id="resources-view">
								{(server.resources && server.resources.length > 0) ||
								(server.resourceTemplates && server.resourceTemplates.length > 0) ? (
									<div
										style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
										{[...(server.resourceTemplates || []), ...(server.resources || [])].map(
											(item) => (
												<McpResourceRow
													key={"uriTemplate" in item ? item.uriTemplate : item.uri}
													item={item}
												/>
											),
										)}
									</div>
								) : (
									<div style={{ padding: "10px 0", color: "var(--vscode-descriptionForeground)" }}>
										{t("mcp:emptyState.noResources")}
									</div>
								)}
							</VSCodePanelView>

							<VSCodePanelView id="errors-view">
								{server.errorHistory && server.errorHistory.length > 0 ? (
									<div
										style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
										{[...server.errorHistory]
											.sort((a, b) => b.timestamp - a.timestamp)
											.map((error, index) => (
												<McpErrorRow key={`${error.timestamp}-${index}`} error={error} />
											))}
									</div>
								) : (
									<div style={{ padding: "10px 0", color: "var(--vscode-descriptionForeground)" }}>
										{t("mcp:emptyState.noErrors")}
									</div>
								)}
							</VSCodePanelView>
						</VSCodePanels>

						{/* Network Timeout */}
						<div style={{ padding: "10px 7px" }}>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									marginBottom: "8px",
								}}>
								<span>{t("mcp:networkTimeout.label")}</span>
								<select
									value={timeoutValue}
									onChange={handleTimeoutChange}
									style={{
										flex: 1,
										padding: "4px",
										background: "var(--vscode-dropdown-background)",
										color: "var(--vscode-dropdown-foreground)",
										border: "1px solid var(--vscode-dropdown-border)",
										borderRadius: "2px",
										outline: "none",
										cursor: "pointer",
									}}>
									{timeoutOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
							<span
								style={{
									fontSize: "12px",
									color: "var(--vscode-descriptionForeground)",
									display: "block",
								}}>
								{t("mcp:networkTimeout.description")}
							</span>
						</div>
					</div>
				)
			) : (
				<div
					style={{
						fontSize: "13px",
						background: "var(--vscode-textCodeBlock-background)",
						borderRadius: "0 0 4px 4px",
						width: "100%",
					}}>
					<div
						style={{
							color: "var(--vscode-testing-iconFailed)",
							marginBottom: "8px",
							padding: "0 10px",
							overflowWrap: "break-word",
							wordBreak: "break-word",
						}}>
						{server.error &&
							server.error.split("\n").map((item, index) => (
								<React.Fragment key={index}>
									{index > 0 && <br />}
									{item}
								</React.Fragment>
							))}
					</div>
					<VSCodeButton
						appearance="secondary"
						onClick={handleRestart}
						disabled={server.status === "connecting"}
						style={{ width: "calc(100% - 20px)", margin: "0 10px 10px 10px" }}>
						{server.status === "connecting" ? "Retrying..." : "Retry Connection"}
					</VSCodeButton>
				</div>
			)}

			{/* Delete Confirmation Dialog */}
			<Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{t("mcp:deleteDialog.title")}</DialogTitle>
						<DialogDescription>
							{t("mcp:deleteDialog.description", { serverName: server.name })}
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
							{t("mcp:deleteDialog.cancel")}
						</Button>
						<Button variant="default" onClick={handleDelete}>
							{t("mcp:deleteDialog.delete")}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default McpView
