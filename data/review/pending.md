# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-16**
- 快照日期 / Snapshot date: **2026-08-16 (UTC)**
- 待审核 / Pending: **75**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **5**

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos` 并注明理由
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) with a reason
- Catalog-only (not in the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json`

See [data/review/README.md](./README.md) for the full convention.

| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | --- | --- | --- |
| 1 | [ChangedenCZD/dsh-minimal-turbo](https://github.com/ChangedenCZD/dsh-minimal-turbo) | 26 | 2026-08-15 | 2026-08-16 | Deepseek Harness 极简模式 Windows适配，享用满血Deepseek-V4系列模型 |
| 2 | [mudden2380078550-creator/write-chinese-long-screenplay](https://github.com/mudden2380078550-creator/write-chinese-long-screenplay) | 4 | 2026-07-29 | 2026-08-16 | 中文电影与剧集长剧本写作 skill |
| 3 | [wangzhuo-coding/geo-content-optimizer](https://github.com/wangzhuo-coding/geo-content-optimizer) | 4 | 2026-07-16 | 2026-08-16 | GEO生成式引擎优化智能体 — 7类关键词+七层架构+EE-A-T权威框架+8维度降痕改写 |
| 4 | [GCS-ZHN/mcp-sentinel](https://github.com/GCS-ZHN/mcp-sentinel) | 3 | 2026-07-25 | 2026-08-16 | Harness agent plugin that acts as a sentinel between the AI agent and MCP servers — polling long-running tasks so token-costly status loops never enter the LLM inference path |
| 5 | [LRainner/AgentCat](https://github.com/LRainner/AgentCat) | 3 | 2026-07-24 | 2026-08-16 | A lightweight desktop companion that brings AI agent activity to life through animated pets and real-time status updates / 一款轻量的桌面伴侣，用动画宠物实时呈现 AI Agent 的工作状态 |
| 6 | [remybroun/infographic](https://github.com/remybroun/infographic) | 3 | 2026-08-13 | 2026-08-16 | A Claude Code skill that turns a document or a topic into a designed visual explainer. 52 block forms, an enforced word budget, and guards that fail the build. |
| 7 | [riffkit/skill](https://github.com/riffkit/skill) | 3 | 2026-06-30 | 2026-08-16 | Official Riffkit skill — riff a winning TikTok into your own short video from your AI agent (Claude Code, Cursor) or the browser. Riff the formula, not the video. |
| 8 | [yj060464-commits/dsh-chat-tools](https://github.com/yj060464-commits/dsh-chat-tools) | 3 | 2026-08-13 | 2026-08-16 | DeepSeek Harness headless 终端伴侣工具链：chat.sh 连续对话 REPL（决策点拍板/工作流实时透传/思考档位切换）+ 会话日志自动总结，零依赖纯 bash+Python |
| 9 | [yyyyolo7a79-sketch/claude-conventions-skill](https://github.com/yyyyolo7a79-sketch/claude-conventions-skill) | 3 | 2026-08-06 | 2026-08-16 | Claude Code conventions skill for Chinese users |
| 10 | [Nothree-code/folder-tree-sh](https://github.com/Nothree-code/folder-tree-sh) | 2 | 2026-08-15 | 2026-08-16 | Workspace file-tree panel for the DSH web UI: explore, preview (DOCX / Markdown / PDF / code / CSV), and manage files with a real context menu. |
| 11 | [rayafriandion/deepseek-harness-tui](https://github.com/rayafriandion/deepseek-harness-tui) | 2 | 2026-08-15 | 2026-08-16 | The plugin can use terminal UI like opencode/claude code and other CLI/TUI agents. |
| 12 | [SummerSec/semantic-linter](https://github.com/SummerSec/semantic-linter) | 2 | 2026-04-10 | 2026-08-16 | 一款面向 LLM 指令文件的插件和命令行工具，用于检测语义边界过宽的用词，并提供受保护的 Hook、项目级本地规则注入，以及针对 Skill、Prompt 和 Agent 的语义陷阱检查。 |
| 13 | [TuringCorp-net/mosaic_compress](https://github.com/TuringCorp-net/mosaic_compress) | 2 | 2026-06-08 | 2026-08-16 | Stateless dialogue compression that mimics human memory. LLM conversations stay bounded forever — no session management, no context overflow. |
| 14 | [watericetangcw/academic-research-graph](https://github.com/watericetangcw/academic-research-graph) | 2 | 2026-08-05 | 2026-08-16 | A SKILL that turns one paper into a living research map. |
| 15 | [wjabanjj/aifp-mcp](https://github.com/wjabanjj/aifp-mcp) | 2 | 2026-08-15 | 2026-08-16 | AiFP 记忆感知系统｜MCP 服务，一套记忆全 AI 共享。面向中文的 Agent 感知记忆，支持叙事链、语义纠错、感知链图扩散。兼容 DeepSeek‑Harness、Claude Code、Cursor、Codex等全部 MCP 客户端，数据完全本地存储。 |
| 16 | [zsxh1990/pr-genius](https://github.com/zsxh1990/pr-genius) | 2 | 2026-07-02 | 2026-08-16 | PR Genius — 提交前改进顾问 + 大型开源项目 PR 知识库 |
| 17 | [afa-cloud/desktop-gui-automation-cua](https://github.com/afa-cloud/desktop-gui-automation-cua) | 1 | 2026-08-15 | 2026-08-16 | Cross-platform macOS desktop GUI automation & computer-use skill built on cua-driver: AX→pixel→desktop graceful degradation, vision-based element locating, privacy(automation) handling, and ready-made recipes for WeChat / iPhone Mirroring / QQ. |
| 18 | [AlphaGodzilla/ag-dsh-coding-plugins](https://github.com/AlphaGodzilla/ag-dsh-coding-plugins) | 1 | 2026-08-14 | 2026-08-16 | 围绕软件工程开发的DeekSeek Harness 插件合集 |
| 19 | [awa-123-cw/dsh-update-check](https://github.com/awa-123-cw/dsh-update-check) | 1 | 2026-08-15 | 2026-08-16 | DSH 设置页「关于」栏位 + 一键检测更新插件（About page with update checking for DeepSeek Harness WebUI） |
| 20 | [bpc-oss/chrome-faithful](https://github.com/bpc-oss/chrome-faithful) | 1 | 2026-08-14 | 2026-08-16 | Faithful control of your real, logged-in Chrome profiles: MCP server + MV3 extension + authenticated localhost bridge. No copied profiles, no debug profile, no remote-debugging port, no Edge. |
| 21 | [chenshutian9610/deepseek-harness-web](https://github.com/chenshutian9610/deepseek-harness-web) | 1 | 2026-08-14 | 2026-08-16 | 局域网支持 (伴随一个简单的登录页面和移动端 UI 适配); 去除 DeepseekWebSearch; 去除 openai/anthropic 以外的供应商支持; 去除 sandbox (gpt 会经常因为 sandbox 而报错) |
| 22 | [ChongCyrus/Vibe-Mathematics](https://github.com/ChongCyrus/Vibe-Mathematics) | 1 | 2026-08-02 | 2026-08-16 | Vibe Mathematics —— 多代理数学问题求解与形式化验证框架 |
| 23 | [FQXCS/web-desktop](https://github.com/FQXCS/web-desktop) | 1 | 2026-08-15 | 2026-08-16 | web服务桌面启动器 |
| 24 | [haifeiWu/dsh-deepseek-usage](https://github.com/haifeiWu/dsh-deepseek-usage) | 1 | 2026-08-15 | 2026-08-16 | DSH plugin: real-time DeepSeek token usage, estimated cost and account balance in the DSH Web UI |
| 25 | [jmjmj009gt/vision-toolkit-for-dsh-v0.1-maybe-](https://github.com/jmjmj009gt/vision-toolkit-for-dsh-v0.1-maybe-) | 1 | 2026-08-14 | 2026-08-16 | Zero-dependency vision OCR/Q&A toolkit (CLI + local web GUI) for OpenAI-compatible VLMs: Zhipu GLM, Qwen, OpenAI, OpenRouter, SiliconFlow |
| 26 | [lecutu/DeepSeek-PPT-skill](https://github.com/lecutu/DeepSeek-PPT-skill) | 1 | 2026-07-24 | 2026-08-16 | DeepSeek PPT — AI-native PowerPoint generation. Constraint solver closes the loop so LLMs don't need vision |
| 27 | [nanbujiwanfeng/deepseek-harness-translation](https://github.com/nanbujiwanfeng/deepseek-harness-translation) | 1 | 2026-08-15 | 2026-08-16 | Bidirectional Chinese↔English conversation translation for deepseek-harness: Chinese-speaking users converse in Chinese, each message is auto-translated to English for the agent, and English replies return as Chinese with bilingual rows in the Web Client. |
| 28 | [nnbw-liu/deepseek-ai-dsh-llm-local](https://github.com/nnbw-liu/deepseek-ai-dsh-llm-local) | 1 | 2026-08-15 | 2026-08-16 | 基于本地的ollma的模型推理 |
| 29 | [osmondlee/dsh-shell](https://github.com/osmondlee/dsh-shell) | 1 | 2026-08-15 | 2026-08-16 | just for deepseek harness shell  |
| 30 | [Stu-KatoMegumi/dsh-weixin](https://github.com/Stu-KatoMegumi/dsh-weixin) | 1 | 2026-08-15 | 2026-08-16 | [STU-XIE] 将你的本地dsh接入微信，尝试使用微信进行工作吧，至少比openclaw的体验要好很多 |
| 31 | [twanonymous/agent-dispatch-cli](https://github.com/twanonymous/agent-dispatch-cli) | 1 | 2026-08-11 | 2026-08-16 | Codex-native capability router for delegating bounded tasks to configurable local AI CLIs. |
| 32 | [zbbsdsb/WAM-Framework](https://github.com/zbbsdsb/WAM-Framework) | 1 | 2026-08-06 | 2026-08-16 | Wait a minute |
| 33 | [zeckauh/DSH_Desktop](https://github.com/zeckauh/DSH_Desktop) | 1 | 2026-08-15 | 2026-08-16 | DeepSeek桌面版，支持Windows 10/11（x64）、macOS、Linux（x64）不同操作系统一键安装 |
| 34 | [ZihaoVistonWang/Stata-AI-Skill](https://github.com/ZihaoVistonWang/Stata-AI-Skill) | 1 | 2026-06-13 | 2026-08-16 | Stata AI Skill Native Service: Native localhost HTTP service that lets AI agents run Stata without VS Code, Node.js, or Python on the user side. |
| 35 | [150410awe/consume-plugin](https://github.com/150410awe/consume-plugin) | 0 | 2026-08-15 | 2026-08-16 | 添加了一个“使用情况”视图，显示 token 消耗, 表格, 7 个图表模板(线形图/柱状图/面积图/散点图/柱状线图/堆叠图/仪表图) 18 个指标。可以改改玩. 还有可恶 ds 的在写发布版时无意间偷我 40m token。还把我 web 干崩了。损坏我的计算机浪, 浪费了几块钱喵呜！~ |
| 36 | [30degreesnorthlatitude/-](https://github.com/30degreesnorthlatitude/-) | 0 | 2026-08-15 | 2026-08-16 | 对于命令的描述以及其他地方进行了一些汉化 |
| 37 | [apbigking-cell/dsh-plugin-square](https://github.com/apbigking-cell/dsh-plugin-square) | 0 | 2026-08-15 | 2026-08-16 | DeepSeek Harness 插件广场 + 统筹层：实时同步 GitHub dsh-plugin，支持搜索、翻译、事务安装与启停卸载；按 universal/session/dual 分级治理插件，支持单会话按需激活、自动释放与臃肿审计。 |
| 38 | [AsILAnn/ds-whale-send-button](https://github.com/AsILAnn/ds-whale-send-button) | 0 | 2026-08-15 | 2026-08-16 | jinyu |
| 39 | [dkjsiogu/dsh-path-browser](https://github.com/dkjsiogu/dsh-path-browser) | 0 | 2026-08-15 | 2026-08-16 | DeepSeek Harness plugin: browse host files/folders in the Web composer and insert absolute paths |
| 40 | [eivmosn/dsh-pets](https://github.com/eivmosn/dsh-pets) | 0 | 2026-08-15 | 2026-08-16 | Codex Pets integration for the DeepSeek Harness Web GUI |
| 41 | [existyay/Polaris](https://github.com/existyay/Polaris) | 0 | 2026-08-15 | 2026-08-16 | 北极星 |
| 42 | [fore-vip/skills](https://github.com/fore-vip/skills) | 0 | 2026-03-20 | 2026-08-16 | ForeVIP for AI Agent skills |
| 43 | [gengyueworks/dsh-zhihu](https://github.com/gengyueworks/dsh-zhihu) | 0 | 2026-08-16 | 2026-08-16 | DeepSeek Harness plugin: let the agent read, fetch and parse Zhihu (answers, columns, search). Core of the Zhihu DSH plugin suite. |
| 44 | [GIStudio/SpatialHarness](https://github.com/GIStudio/SpatialHarness) | 0 | 2026-08-15 | 2026-08-16 | SpatialHarness —— 纯本地 WebGIS 工作台：引擎可插拔（OpenLayers v1）、File System Access 直读本地磁盘、自动保存、QGIS 风格现代化 UI |
| 45 | [GitTOU/dsh-tool-gbt9704](https://github.com/GitTOU/dsh-tool-gbt9704) | 0 | 2026-08-15 | 2026-08-16 | DeepSeek Harness 插件：Markdown/Word 一键排版为 GB/T 9704 党政机关公文格式 |
| 46 | [haifeiWu/dsh-courier](https://github.com/haifeiWu/dsh-courier) | 0 | 2026-08-15 | 2026-08-16 | DSH plugin: cross-session messaging with reliable delivery and role addressing (coding/review loop) |
| 47 | [jcaiagent7143-ui/sendpage-mcp](https://github.com/jcaiagent7143-ui/sendpage-mcp) | 0 | 2026-08-02 | 2026-08-16 | MCP server for SendPage — publish an HTML document as a shareable link, with PDF/image/Word export. Streamable HTTP, free, no signup. |
| 48 | [judgeou/dsh-minimal-win](https://github.com/judgeou/dsh-minimal-win) | 0 | 2026-08-15 | 2026-08-16 | DSH agent preset: minimal Windows preset with persistent Git Bash + str_replace_editor |
| 49 | [JunbaoCao/Wealth-device-inspector](https://github.com/JunbaoCao/Wealth-device-inspector) | 0 | 2026-08-15 | 2026-08-16 | 设备监察师（Device Inspector）：一键自检系统/硬件/语言/编码/时区，自动生成设备档案 device-report.md，防止环境错误；含后台守护与 RAG 接入。 |
| 50 | [kikulmj/dsh-jupyter](https://github.com/kikulmj/dsh-jupyter) | 0 | 2026-08-15 | 2026-08-16 | Provide notebook‑style workbench and local shell for DeepSeek Harness Web GUI |
| 51 | [kvuvuv/ecg-research-skill](https://github.com/kvuvuv/ecg-research-skill) | 0 | 2026-08-15 | 2026-08-16 | A DeepSeek Harness research skill for ECG signal processing, experiment design, reproducibility, scientific visualization and paper writing. |
| 52 | [L-mimimi/SnapShot](https://github.com/L-mimimi/SnapShot) | 0 | 2026-08-15 | 2026-08-16 | 一款 Windows 截图工具：截图 · 离线 OCR 文字识别 · 桌面置顶钉图，单文件绿色版，双击即用，无需安装、无需联网。 |
| 53 | [LaplaceYoung/dsh-wexin](https://github.com/LaplaceYoung/dsh-wexin) | 0 | 2026-08-15 | 2026-08-16 | WeChat 皮肤插件 for DSH (DeepSeek Harness)：把 WebUI 改造成微信客户端风格的可切换皮肤（微信绿、灰白会话列表、经典气泡聊天窗） |
| 54 | [lin293387-del/dsh-termux-sandbox](https://github.com/lin293387-del/dsh-termux-sandbox) | 0 | 2026-08-16 | 2026-08-16 | A dsh sandbox plugin that keeps DeepSeek Harness runnable on Android/Termux: honest danger-full-access policy where bwrap and Landlock cannot work. |
| 55 | [MetaVibeCoding/metavibe_dsh](https://github.com/MetaVibeCoding/metavibe_dsh) | 0 | 2026-08-15 | 2026-08-16 | Make AI build masterpieces — every line on the shoulders of software giants. |
| 56 | [MicroHEROX/Mult-Hands-Eyes-MCP](https://github.com/MicroHEROX/Mult-Hands-Eyes-MCP) | 0 | 2026-08-15 | 2026-08-16 | MCP server that gives online LLMs local hands and eyes: OpenAI-compatible local inference (KoboldCpp / Unsloth / llama.cpp / LM Studio / Ollama) for cheap text work and vision work (OCR / image analysis / comparison). |
| 57 | [MkaliezZ/dsh-api-client](https://github.com/MkaliezZ/dsh-api-client) | 0 | 2026-08-15 | 2026-08-16 | Localhost-first HTTP debugging tool for DSH: blocks remote hosts and sensitive request headers by default. |
| 58 | [MkaliezZ/dsh-dev-server](https://github.com/MkaliezZ/dsh-dev-server) | 0 | 2026-08-15 | 2026-08-16 | Long-running development-server lifecycle primitives for DSH; blocks compound shell usage. |
| 59 | [MkaliezZ/dsh-docs](https://github.com/MkaliezZ/dsh-docs) | 0 | 2026-08-15 | 2026-08-16 | Version-aware documentation query with excerpt bounding for DSH; host-supplied lookup, no hard-coded web provider. |
| 60 | [MkaliezZ/dsh-error-explainer](https://github.com/MkaliezZ/dsh-error-explainer) | 0 | 2026-08-15 | 2026-08-16 | Structured stack-trace parsing for DSH: Python, Node.js, Rust, and Java error frames with bounded metadata. |
| 61 | [MkaliezZ/dsh-policy-test](https://github.com/MkaliezZ/dsh-policy-test) | 0 | 2026-08-15 | 2026-08-16 | Deterministic regression tests for DSH policy decisions, evaluated without invoking the protected tool body. |
| 62 | [MkaliezZ/dsh-repo-map](https://github.com/MkaliezZ/dsh-repo-map) | 0 | 2026-08-15 | 2026-08-16 | Lightweight read-only repository structure and symbol map for DSH; complements dsh-context-pack. |
| 63 | [MkaliezZ/dsh-test-runner](https://github.com/MkaliezZ/dsh-test-runner) | 0 | 2026-08-15 | 2026-08-16 | Structured test-result normalization for DSH: pytest, Vitest, Jest, and Cargo summaries into a stable shape. |
| 64 | [nzl153/dsh-preflight](https://github.com/nzl153/dsh-preflight) | 0 | 2026-08-15 | 2026-08-16 | DSH 插件安装前预演冲突、出问题后读日志定位根因，并给出可直接执行的修复命令。 |
| 65 | [PineKings/deepseek-harness-desktop](https://github.com/PineKings/deepseek-harness-desktop) | 0 | 2026-08-15 | 2026-08-16 | 在官方的基础上增加了视觉能力的可选项补充deepseek模型的视觉能力，增加了本地一键安装的桌面支持 |
| 66 | [Ruthless0311/Kun-Like-Pet](https://github.com/Ruthless0311/Kun-Like-Pet) | 0 | 2026-08-15 | 2026-08-16 | .............. |
| 67 | [Selinefieldcrop975/awesome-deepseek-agent](https://github.com/Selinefieldcrop975/awesome-deepseek-agent) | 0 | 2026-06-09 | 2026-08-16 | Discover step-by-step guides to integrate DeepSeek models into top AI agents and coding assistants, with quick setup for V4-Pro and V4-Flash. |
| 68 | [Semidia/dsh-friendly-errors](https://github.com/Semidia/dsh-friendly-errors) | 0 | 2026-08-15 | 2026-08-16 | DSH plugin: Chinese-friendly model error messages in the Web UI (balance, rate limit, auth, timeout, network, context, server) |
| 69 | [SKL-666666/image-analysis-skill](https://github.com/SKL-666666/image-analysis-skill) | 0 | 2026-08-12 | 2026-08-16 | 图片结构化分析技能：双引擎OCR+形状/表格/图标/布局识别，让纯文本模型看懂图片 |
| 70 | [tk-wxy/openin](https://github.com/tk-wxy/openin) | 0 | 2026-08-07 | 2026-08-16 | openin |
| 71 | [YuanyuanMa03/cot-lint](https://github.com/YuanyuanMa03/cot-lint) | 0 | 2026-08-15 | 2026-08-16 | Lint your repo for chain-of-thought leakage — the session-transcript residue AI assistants leave in docs and comments. |
| 72 | [yuzhichenai/dsh-desktop](https://github.com/yuzhichenai/dsh-desktop) | 0 | 2026-08-15 | 2026-08-16 | DSH 桌面端：DeepSeek Harness 官方 Web UI 的 Tauri 桌面壳（新手友好版）。Tauri desktop shell for DeepSeek Harness web UI. |
| 73 | [yzxoi/dsh-holos-research](https://github.com/yzxoi/dsh-holos-research) | 0 | 2026-08-15 | 2026-08-16 | Structured research management for dsh (Cordis): 14 research_* tools, 17 skills, 4 agent prompts, .research/ files as the single source of truth — port of the holos-research Synergy plugin. |
| 74 | [zhangjiabo522/dsh-tool-doc](https://github.com/zhangjiabo522/dsh-tool-doc) | 0 | 2026-08-15 | 2026-08-16 | DeepSeek Harness 文档工具插件：read/create/edit PDF/DOCX/XLSX/PPTX/CSV/Markdown（read_document、create_document、edit_document） |
| 75 | [ZicanC/dsh-git](https://github.com/ZicanC/dsh-git) | 0 | 2026-08-14 | 2026-08-16 | dsh-git lets you manage conversations with an agent the way you use Git. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- codeAnqiang-ma/dsh-superpowers
- Gu-ZT/dsh-auxiliary
- huiliyi37/oh-my-tianshu
- sundusk/dsh-waterball-pet
- syy-shark/dsh-music-plugin
