# AI Knowledge Base

个人 AI 知识库，用来沉淀 AI 使用、Agent 实践、项目复盘、技术学习和想法。

这个仓库计划推送到 `zhubn123.github.io`，作为 GitHub Pages 个人根站点使用，访问地址为：

```text
https://zhubn123.github.io/
```

如果启用 GitHub Pages，发布后的站点内容会公开可访问。请只把适合公开的内容放进 `docs/`，把私密草稿放进 `private/`。

## 本地使用方式

本地默认只关注内容，不需要安装依赖，也不需要启动项目。

日常流程：

```bash
# 1. 编辑 docs/ 或 private/ 下的 Markdown
# 2. 查看变更
git status

# 3. 提交并推送
git add .
git commit -m "docs: update notes"
git push
```

推送后，GitHub Actions 会在云端安装依赖、构建 VitePress，并发布到 GitHub Pages。

## 目录

- `docs/`：会发布到 VitePress / GitHub Pages 的公开内容
- `docs/ai/`：AI 工具、提示词、使用方法、经验
- `docs/agent/`：Agent 工作流、Codex 实践、自动化经验
- `docs/projects/`：项目复盘、架构记录、开发日志
- `docs/tech/`：Java、Spring、前端、数据库、工程化等学习笔记
- `docs/ideas/`：可公开的想法、产品点子、灵感
- `private/`：私有草稿和不想发布的内容，不参与 VitePress 构建

## 可选本地预览

只有需要在本地看站点效果时，再安装依赖并启动预览：

```bash
npm install
npm run docs:dev
```

本地构建检查也只是可选项：

```bash
npm run docs:build
npm run docs:preview
```

## GitHub Pages

仓库推到 GitHub 后，在仓库设置中把 Pages source 设置为 `GitHub Actions`。

注意：`zhubn123.github.io` 是个人根站点仓库，VitePress 的 `base` 已配置为 `/`。

## 内容边界

- `docs/` 中的内容默认视为可公开发布。
- `private/` 用于个人草稿、未整理内容、敏感信息和不适合公开的记录。
- 不要提交密钥、密码、token 或真实敏感数据。
- 首版不添加 `LICENSE`，默认保留个人内容版权。
