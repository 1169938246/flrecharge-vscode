const fs = require("fs");
const path = require("path");

// 获取 snippets 目录下所有 .code-snippets 文件的绝对路径
const snippetFiles = fs
  .readdirSync("./snippets")

const snippetsConfig = snippetFiles.map((file) => {
  
  const language = "javascript";
  const pathFile = "./snippets/" + file
  console.log(language,'snippetFiles')
  return {
    language: language,
    path:pathFile,
  };
});

// 读取并更新 package.json
const packageJsonPath = "./package.json";
const packageJson = require(packageJsonPath);

// 添加或更新 snippets 配置
if (!packageJson.contributes) packageJson.contributes = {};
if (!packageJson.contributes.snippets) packageJson.contributes.snippets = [];
packageJson.contributes.snippets = snippetsConfig
// 写回 package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf-8");
