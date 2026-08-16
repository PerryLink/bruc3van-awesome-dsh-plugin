# data/review — 数据约定与审核合并流程 / Data convention & review-merge workflow

本目录是「原始数据 → 人工核实 → 用户可见页面」流水线的审核环节。**脚本只负责抓取原始数据；用户能看到的页面（CATALOG.md、TOP200.md）里的每一个新仓库，都经过维护者核实后才进入。**

This directory is the review stage of the "raw data → human verification → user-facing pages" pipeline. **Scripts only fetch raw data; every new repository that appears on the user-facing pages (CATALOG.md, TOP200.md) has been verified by the maintainer first.**

## 数据文件 / Data files

| 文件 / File | 谁写 / Written by | 作用 / Role |
| --- | --- | --- |
| `data/repositories.json` | 脚本（`scripts/update.mjs`，每日） | 原始快照：`dsh-plugin` Topic 下的全部仓库，无过滤、无审核 |
| `data/approved.json` | 维护者 / AI 审核 | 核实通过的仓库清单，`"owner/name": "YYYY-MM-DD"`。**用户可见页面的门控** |
| `data/curated.json` | 维护者 / AI 审核 | 编辑部裁决：`excluded_repos`（剔除 + 理由）、`leaderboard_exclusions`（只进目录不进榜单）、`market_exclusions`（可进目录/榜单、不进下游市场）、`category_overrides`（分类） |
| `data/review/pending.json` / `pending.md` | 脚本（`scripts/update.mjs`，每日） | 待审核队列：新增到 Topic、带简介、尚未核实的仓库（自动生成，勿手改） |
| `data/market.json` | 脚本（`scripts/market.mjs`，每日 cron 与 curation 合并后） | 下游市场（dsh-desktop-safe-market）消费的精选文件：快照 + curation 的纯投影，按类目均衡发牌、≤300 条、≤500 KB。**不受 `approved.json` 门控**（只按排除名单过滤），接口约定见下游 `docs/market-json-spec.md` |
| `CATALOG.md`、`TOP200.md` | `scripts/merge.mjs`（仅审核合并时） | 用户可见页面；**脚本不会自动更新它们** |

## 工作流 / Workflow

1. **每日自动化**（`.github/workflows/update-catalog.yml`）运行 `scripts/update.mjs`：抓取快照写 `data/repositories.json`，刷新待审核队列 `data/review/pending.*`，随后重建并提交 `data/market.json`。它**不修改任何用户可见页面**——蹭热度的仓库只会出现在待审核队列里，进不了 CATALOG 和榜单。
2. **审核**：维护者（或 AI 助手）审阅 `data/review/pending.md`，对每个新仓库做决定：
   - **通过** → 加入 `data/approved.json`（`"owner/name": "2026-08-16"` 这样的日期值）
   - **剔除** → 加入 `data/curated.json` 的 `excluded_repos`，理由写明（照抄现有条目风格）
   - **只进目录、不进榜单** → 同时加入 `approved.json` 与 `curated.json` 的 `leaderboard_exclusions`
   - **非插件形态（桌面壳/启动器、Docker 部署、手册教程、VS Code 扩展等）**：可留在目录与榜单，但加入 `curated.json` 的 `market_exclusions` 以免进入下游市场文件
3. **合并**：运行 `node scripts/merge.mjs`，重新生成 `CATALOG.md`、`TOP200.md` 与待审核队列，然后提交。

## AI 一句话审核 / One-line AI review

对 AI 助手说：**「按 data/review/README.md 的约定，审核 data/review/pending.md 里的新仓库并合并」**——AI 应逐仓核实（README 是否真是 DSH 插件、是否有 `dsh plugin` 安装路径、是否蹭 Topic），更新 `approved.json` / `curated.json`（含 `market_exclusions`），运行 `node scripts/merge.mjs`，并提交改动。

Tell the AI assistant: **"Review the new repositories in data/review/pending.md per the convention in data/review/README.md, then merge"** — it should verify each repository (real DSH plugin? `dsh plugin` install path? topic rider?), update `approved.json` / `curated.json`, run `node scripts/merge.mjs`, and commit.

## 命令速查 / Commands

```bash
node scripts/update.mjs                 # 抓快照 + 刷新待审核队列（需 GITHUB_TOKEN）
node scripts/update.mjs --from-snapshot # 仅用现有快照刷新待审核队列
node scripts/merge.mjs                  # 审核合并：重新生成 CATALOG.md / TOP200.md / 队列
node scripts/top.mjs                    # 单独重新生成 TOP200.md（同样受 approved 门控）
node scripts/market.mjs --from-snapshot # 重建 data/market.json（下游市场文件）
node scripts/validate-market.mjs        # 校验 data/market.json（§8 全项检查）
node --test scripts/test-market.mjs     # market 管线单测（含熔断）
node scripts/validate-curated.mjs       # 校验 curated.json / approved.json / 自荐区
```

注意：`data/review/pending.json` 里的 `first_seen` 会跨日保留（队列重写时继承），方便看到每个仓库等了多久。`pending.md` 末尾的「从快照消失的已核准仓库」列出已核准但已删除/改名的仓库，核实后从 `approved.json` 移除或改名。
