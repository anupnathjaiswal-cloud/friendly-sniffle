import { Template, defaultBuildLogger } from "e2b";
import { template as nextJSTemplate } from "./template";
import dotenv from "dotenv";
// import "dotenv/config";
dotenv.config({
    path: "../../.env",
});

// console.log("cwd:", process.cwd());

// console.log("#e2b\t".repeat(10));
// console.log("E2B_API_KEY: ", process.env.E2B_API_KEY);
// console.log("#e2b\t".repeat(10));
// console.log("Inngest: ", process.env.INNGEST_DEV);

Template.build(nextJSTemplate, "code-builder", {
    cpuCount: 4,
    memoryMB: 4096,
    onBuildLogs: defaultBuildLogger(),
    // apiKey:"e2b_bf8e535c13c02ee0355eaee8255e06bebd54d593"
    apiKey: process.env.E2B_API_KEY,
});
