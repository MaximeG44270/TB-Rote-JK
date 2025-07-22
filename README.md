# 📘 SWGOH ROTE – Squad Composition Directory

> An interactive directory of the best squad compositions for the **ROTE (Rise of the Empire)** game mode in **Star Wars: Galaxy of Heroes**.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 🎯 Purpose

This project aims to:

- List the most effective team compositions for each ROTE mission
- Help guilds coordinate and plan deployments efficiently
- Provide a clean, responsive, and easy-to-use interface

---

## ✨ Features

- 🔍 Search by planet, mission, or faction
- 📋 Detailed team breakdowns (relics, mods, zetas, suggested replacements)
- 🧠 Suggestions based on available characters/factions
- 💾 Local storage or backend persistence (TBD)
- 📱 Fully responsive mobile-first interface

---

## 🧱 Tech Stack

| Technology       | Description                         |
|------------------|-------------------------------------|
| React + TypeScript | Modern SPA foundation              |
| Tailwind CSS     | Utility-first styling framework     |
| Zustand          | Lightweight state management        |
| React Router     | Client-side routing                 |
| Shadcn UI        | Pre-styled accessible UI components |

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/swgoh-rote-comps.git
cd swgoh-rote-comps
npm install
npm run dev


src/
├── assets/          → Images, icons, logos
├── components/      → Reusable UI components
├── data/            → Static squad composition data
├── hooks/           → Custom React hooks
├── pages/           → App pages (Home, Mission, etc.)
├── utils/           → Utility functions
├── App.tsx          → Main app wrapper
└── main.tsx         → React entry point



⚙️ Recommended Setup
Node.js ≥ 18

VS Code with:

Tailwind CSS IntelliSense

ESLint + Prettier

TypeScript Hero

