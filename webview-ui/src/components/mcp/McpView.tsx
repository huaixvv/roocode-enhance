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

// 添加一个动画组件用于显示安装中状态
const LoadingDots = () => {
	const [dots, setDots] = useState('');
	
	useEffect(() => {
		const interval = setInterval(() => {
			setDots(prev => {
				if (prev.length >= 3) return '';
				return prev + '.';
			});
		}, 500);
		
		return () => clearInterval(interval);
	}, []);
	
	return <span>{dots}</span>;
};

// MCP Marketplace 组件
const McpMarketplace = () => {
	const { t } = useAppTranslation()
	const [installStatus, setInstallStatus] = useState<Record<string, string | undefined>>({})
	const [debugInfo, setDebugInfo] = useState<string[]>([])
	const [showDebug, setShowDebug] = useState<boolean>(true)
	const [lastInstalledServer, setLastInstalledServer] = useState<string | null>(null)
	const [dockerDownloadStatus, setDockerDownloadStatus] = useState<Record<string, boolean>>({})
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

	// 添加状态用于跟踪服务器状态轮询
	const [isPollingActive, setIsPollingActive] = useState<boolean>(false);
	const [pollingCount, setPollingCount] = useState<number>(0);
	const [nextPollSeconds, setNextPollSeconds] = useState<number | null>(null);

	// 添加倒计时效果
	useEffect(() => {
		// 只有当轮询活跃且有具体的下次轮询时间时才启动倒计时
		if (isPollingActive && nextPollSeconds !== null && nextPollSeconds > 0) {
			const timer = setInterval(() => {
				setNextPollSeconds(prev => {
					if (prev === null || prev <= 1) return null;
					return prev - 1;
				});
			}, 1000);
			
			return () => clearInterval(timer);
		}
	}, [isPollingActive, nextPollSeconds]);

	// 修复动态轮询间隔的问题
	useEffect(() => {
		// 只有当有正在安装的服务时才启动轮询
		const hasInstallingItems = Object.values(installStatus).some(status => status === "installing");
		
		if (hasInstallingItems && !isPollingActive) {
			// 设置轮询状态为活跃
			setIsPollingActive(true);
			addDebugInfo(`开始轮询服务状态更新...`);
			
			// 初始轮询间隔较短 - 开始时每3秒检查一次，提供更及时的反馈
			let currentInterval = 3000;
			setNextPollSeconds(3); // 初始化倒计时
			let consecutiveNoChange = 0;
			let lastServerCount = 0;
			// 使用Record类型来明确类型定义
			let lastStatusMap: Record<string, string> = {};
			
			// 创建轮询函数
			let pollIntervalId: NodeJS.Timeout;
			
			// 以特定间隔创建轮询
			const createPollInterval = (interval: number) => {
				// 清除现有的轮询
				if (pollIntervalId) {
					clearInterval(pollIntervalId);
				}
				
				// 创建新的轮询，并保存ID
				pollIntervalId = setInterval(pollFunction, interval);
				return pollIntervalId;
			};
			
			// 实际的轮询功能
			const pollFunction = () => {
				// 请求最新的服务器列表
				vscode.postMessage({ type: "getMcpServers" } as any);
				setPollingCount(prev => prev + 1);
				
				// 检查是否所有服务已安装完成或者出错
				const stillInstalling = Object.values(installStatus).some(status => status === "installing");
				if (!stillInstalling) {
					// 如果没有正在安装的服务了，停止轮询
					clearInterval(pollIntervalId);
					setIsPollingActive(false);
					setPollingCount(0);
					setNextPollSeconds(null); // 清除倒计时
					addDebugInfo(`服务状态轮询已停止 - 所有服务已完成安装或出错`);
					return;
				}
				
				// 检查服务列表和状态是否有变化
				if (servers) {
					const currentServerCount = servers.length;
					
					// 创建当前状态的快照
					const currentStatusMap: Record<string, string> = {};
					servers.forEach(server => {
						currentStatusMap[server.name] = server.status;
					});
					
					// 检查是否有状态变化
					let hasStatusChange = false;
					if (lastServerCount !== currentServerCount) {
						hasStatusChange = true;
					} else {
						// 检查现有服务的状态是否有变化
						for (const [name, status] of Object.entries(currentStatusMap)) {
							if (lastStatusMap[name] !== status) {
								hasStatusChange = true;
								break;
							}
						}
					}
					
					// 根据变化调整轮询间隔
					if (hasStatusChange) {
						// 有变化，重置连续无变化计数，并保持快速轮询
						consecutiveNoChange = 0;
						if (currentInterval > 3000) {
							// 如果当前间隔较长，逐步减小到3秒
							currentInterval = 3000;
							setNextPollSeconds(3); // 更新倒计时
							
							// 使用新间隔创建新的轮询
							createPollInterval(currentInterval);
							
							addDebugInfo(`检测到服务状态变化，增加轮询频率`);
						} else {
							// 重置当前倒计时
							setNextPollSeconds(3);
						}
					} else {
						// 没有变化，增加连续无变化计数
						consecutiveNoChange++;
						
						// 如果连续多次无变化，逐步增加轮询间隔，最长到30秒
						if (consecutiveNoChange > 3 && currentInterval < 30000) {
							// 每3次无变化，增加轮询间隔
							currentInterval = Math.min(30000, currentInterval * 1.5);
							const newIntervalSeconds = Math.round(currentInterval / 1000);
							setNextPollSeconds(newIntervalSeconds); // 更新倒计时
							
							// 使用新间隔创建新的轮询
							createPollInterval(currentInterval);
							
							addDebugInfo(`服务状态稳定，减少轮询频率 (${newIntervalSeconds}秒/次)`);
						} else {
							// 重置当前倒计时
							setNextPollSeconds(Math.round(currentInterval / 1000));
						}
					}
					
					// 更新上次的服务数量和状态映射
					lastServerCount = currentServerCount;
					lastStatusMap = currentStatusMap;
				}
				
				// 如果轮询次数过多，自动停止，避免资源浪费 (约10分钟后)
				if (pollingCount > 60) {
					clearInterval(pollIntervalId);
					setIsPollingActive(false);
					setPollingCount(0);
					setNextPollSeconds(null); // 清除倒计时
					addDebugInfo(`服务状态轮询已自动停止 - 超过最大轮询次数 (10分钟)`);
				}
			};
			
			// 启动初始轮询
			pollIntervalId = createPollInterval(currentInterval);
			
			// 清理函数
			return () => {
				clearInterval(pollIntervalId);
				if (isPollingActive) {
					setIsPollingActive(false);
					setPollingCount(0);
					setNextPollSeconds(null); // 清除倒计时
				}
			};
		}
	}, [installStatus, isPollingActive, servers, pollingCount]);

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
				
				// 跟踪当前正在安装的服务的连接状态
				if (lastInstalledServer) {
					const foundServer = servers.find((server: McpServer) => server.name === lastInstalledServer)
					if (foundServer) {
						// 服务存在，检查其连接状态
						if (foundServer.status === "connected") {
							// 服务已连接成功，标记为安装成功
							setInstallStatus((prev) => ({ ...prev, [lastInstalledServer]: "installed" }))
							addDebugInfo(`✅ 服务 ${lastInstalledServer} 已成功连接`)
						} else if (foundServer.status === "connecting") {
							// 服务正在连接中，保持installing状态，但更新提示信息
							addDebugInfo(`⏳ 服务 ${lastInstalledServer} 正在尝试连接...`)
						} else if (foundServer.status === "disconnected" && foundServer.error) {
							// 服务连接失败并有错误信息
							setInstallStatus((prev) => ({ ...prev, [lastInstalledServer]: "error" }))
							addDebugInfo(`❌ 服务 ${lastInstalledServer} 连接失败: ${foundServer.error}`)
						}
					} else {
						// 可能服务还未添加到列表中，保持等待
						addDebugInfo(`⏳ 等待服务 ${lastInstalledServer} 添加到服务列表中...`)
					}
				}
				
				// 更新所有服务状态
				Object.keys(installStatus).forEach(serverName => {
					// 只关注正在安装或已有错误的服务
					if (installStatus[serverName] === "installing" || installStatus[serverName] === "error") {
						const foundServer = servers.find((server: McpServer) => server.name === serverName)
						if (foundServer) {
							if (foundServer.status === "connected") {
								// 修复类型错误 - 正确使用类型检查
								setInstallStatus((prev) => ({ ...prev, [serverName]: "installed" }))
								addDebugInfo(`✅ 服务 ${serverName} 已成功连接`)
							} else if (foundServer.status === "disconnected" && foundServer.error) {
								// 如果服务连接失败且有错误信息，更新为error状态
								setInstallStatus((prev) => ({ ...prev, [serverName]: "error" }))
								addDebugInfo(`❌ 服务 ${serverName} 连接失败: ${foundServer.error}`)
							}
						}
					}
				});
				
				// 初始检查已存在的服务
				mcpMarketItems.forEach(item => {
					// 只检查尚未标记状态的服务
					if (!installStatus[item.name]) {
						const foundServer = servers.find((server: McpServer) => server.name === item.name)
						if (foundServer) {
							if (foundServer.status === "connected") {
								setInstallStatus(prev => ({ ...prev, [item.name]: "installed" }))
								addDebugInfo(`检测到已安装并连接的服务: ${item.name}`)
							} else if (foundServer.status === "connecting") {
								setInstallStatus(prev => ({ ...prev, [item.name]: "installing" }))
								addDebugInfo(`检测到正在连接的服务: ${item.name}`)
							} else if (foundServer.status === "disconnected") {
								// 对于断开连接的服务，不自动标记为error，但添加提示
								addDebugInfo(`检测到已安装但未连接的服务: ${item.name}`)
							}
						}
					}
				});
			}
			
			// 处理终端命令执行结果
			if (message.type === "terminalCommandResult") {
				if (message.success) {
					addDebugInfo(`✅ 终端命令执行成功: ${message.command}`)
					
					// 如果是Docker命令相关，可以更新状态
					mcpMarketItems.forEach(item => {
						if (item.type === 'docker' && item.install && item.install === message.command) {
							// 设置Docker下载状态为完成
							setDockerDownloadStatus(prev => ({ ...prev, [item.name]: false }))
							addDebugInfo(`✅ Docker镜像 ${item.name} 下载完成`)
						}
					})
				} else {
					addDebugInfo(`❌ 终端命令执行失败: ${message.command}`)
					addDebugInfo(`错误信息: ${message.error || '未知错误'}`)
					
					// 如果是Docker命令相关，可以更新状态
					mcpMarketItems.forEach(item => {
						if (item.type === 'docker' && item.install && item.install === message.command) {
							// 设置Docker下载状态为完成但出错
							setDockerDownloadStatus(prev => ({ ...prev, [item.name]: false }))
							setInstallStatus(prev => ({ ...prev, [item.name]: "error" }))
							addDebugInfo(`❌ Docker镜像 ${item.name} 下载失败`)
						}
					})
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

			// 检查是否是Docker类型，需要先执行下载命令
			if (item.type === 'docker' && item.install) {
				addDebugInfo(`检测到Docker类型，需要先执行下载命令: ${item.install}`)
				
				// 设置Docker下载状态为进行中
				setDockerDownloadStatus(prev => ({ ...prev, [item.name]: true }))
				
				try {
					// 发送消息到扩展，执行Docker镜像下载
					vscode.postMessage({
						type: "runTerminalCommand",
						command: item.install,
						shouldWaitForCompletion: true
					} as any)
					
					// 添加下载中的提示
					addDebugInfo(`正在下载Docker镜像，请稍候...`)
					
					// 等待Docker镜像下载完成的信号 (terminalCommandResult消息)
					// 但也设置一个合理的超时时间，以免无限等待
					let downloadTimeout = false
					const timeoutPromise = new Promise<void>((_, reject) => {
						setTimeout(() => {
							downloadTimeout = true
							reject(new Error('Docker镜像下载超时，继续下一步安装。如遇问题，请手动运行下载命令。'));
						}, 30000); // 30秒超时
					});
					
					try {
						// 等待下载完成或超时
						await Promise.race([
							// 实际下载完成的检测应该通过消息事件完成
							// 这里简单模拟等待，实际应用中应该使用event-based的方式
							new Promise<void>(resolve => {
								const checkInterval = setInterval(() => {
									if (!dockerDownloadStatus[item.name]) {
										clearInterval(checkInterval);
										resolve();
									}
								}, 1000);
							}),
							timeoutPromise
						]);
					} catch (error: unknown) {
						// 如果是超时，记录但继续尝试安装
						if (downloadTimeout) {
							if (error instanceof Error) {
								addDebugInfo(`⚠️ ${error.message}`);
							} else {
								addDebugInfo(`⚠️ Docker镜像下载超时`);
							}
							// 重置Docker下载状态
							setDockerDownloadStatus(prev => ({ ...prev, [item.name]: false }));
						} else {
							// 其他错误则抛出
							throw error;
						}
					}
					
					addDebugInfo(`Docker镜像处理完成，继续安装MCP服务`);
				} catch (dockerError: unknown) {
					// Docker下载发生错误，但我们继续尝试安装
					if (dockerError instanceof Error) {
						addDebugInfo(`⚠️ Docker镜像下载过程中出错: ${dockerError.message}`);
					} else {
						addDebugInfo(`⚠️ Docker镜像下载过程中出错`);
					}
					addDebugInfo(`尝试继续安装MCP服务...`);
					
					// 重置Docker下载状态
					setDockerDownloadStatus(prev => ({ ...prev, [item.name]: false }));
				}
			}

			// 解析安装配置
			const installConfig = JSON.parse(item.run_script)
			
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
			
			// 添加安装中提示，不设置超时
			addDebugInfo(`MCP服务安装请求已发送，等待服务启动...`)
			addDebugInfo(`服务启动可能需要一些时间，请耐心等待服务连接成功`)
			
			// 立即请求服务器列表以开始轮询
			vscode.postMessage({ type: "getMcpServers" } as any);
		} catch (error: unknown) {
			console.error(`安装 ${item.name} 失败:`, error)
			addDebugInfo(`❌ 安装失败: ${String(error)}`)
			setInstallStatus((prev) => ({ ...prev, [item.name]: "error" }))
			// 清除Docker下载状态
			if (item.type === 'docker') {
				setDockerDownloadStatus(prev => ({ ...prev, [item.name]: false }))
			}
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
					{isPollingActive && (
						<span style={{ 
							fontSize: "11px", 
							marginLeft: "10px", 
							color: "var(--vscode-charts-yellow)",
							fontWeight: "normal"
						}}>
							(正在监测安装状态{nextPollSeconds !== null ? `...${nextPollSeconds}秒后检查` : '...'})
						</span>
					)}
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
							<div style={{ fontWeight: "500" }}>
								{item.name}
								{item.type === 'docker' && (
									<span style={{ 
										fontSize: "11px", 
										marginLeft: "5px", 
										padding: "1px 6px", 
										backgroundColor: "var(--vscode-badge-background)", 
										color: "var(--vscode-badge-foreground)", 
										borderRadius: "3px" 
									}}>
										docker
									</span>
								)}
							</div>
							<div style={{ 
								fontSize: "12px", 
								color: "var(--vscode-descriptionForeground)" 
							}}>
								{item.description}
							</div>
						</div>
						<Button
							style={{
								width: "80px",
								height: "23px",
								fontSize: "10px",
								padding: "0px",
								borderRadius: "4px",
							}}
							variant={installStatus[item.name] === "installed" ? "secondary" : "default"}
							disabled={installStatus[item.name] === "installing" || installStatus[item.name] === "installed" || dockerDownloadStatus[item.name]}
							onClick={() => handleInstall(item)}>
							{dockerDownloadStatus[item.name] ? "Downloading..." : 
							 installStatus[item.name] === "installing" ? "Installing..." : 
							 installStatus[item.name] === "installed" ? "Installed" : 
							 installStatus[item.name] === "error" ? "Re-Install" : "Install"}
						</Button>
						{(installStatus[item.name] || dockerDownloadStatus[item.name]) && (
							<div style={{
								fontSize: "12px",
								color: installStatus[item.name] === "installed" 
									? "var(--vscode-testing-iconPassed)" 
									: dockerDownloadStatus[item.name]
										? "var(--vscode-charts-orange)"
										: installStatus[item.name] === "installing"
											? "var(--vscode-charts-yellow)"
											: "var(--vscode-testing-iconFailed)",
								marginLeft: "8px",
								minWidth: "120px" // 给状态文本预留固定宽度，防止抖动
							}}>
								{dockerDownloadStatus[item.name] && (
									<>⏳ 正在下载Docker镜像<LoadingDots /></>
								)}
								{!dockerDownloadStatus[item.name] && installStatus[item.name] === "installing" && (
									<>⏳ 正在启动MCP服务<LoadingDots /></>
								)}
								{installStatus[item.name] === "installed" && "✅ 服务已连接成功"}
								{installStatus[item.name] === "error" && "❌ 安装失败"}
							</div>
						)}
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
