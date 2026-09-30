import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type TreeItem = string | [string, ...TreeItem[]];

interface TreeNode {
    [key: string]: TreeNode | null;
}

export function convertFilesToTreeItems(
    files: Record<string, string>,
): TreeItem[] {
    const tree: TreeNode = {};
    const sortedPaths = Object.keys(files).sort();

    for (const filePath of sortedPaths) {
        const parts = filePath.split("/");
        let current = tree;

        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i];
            if (!current[part]) {
                current[part] = {};
            }
            current = current[part] as TreeNode;
        }

        const fileName = parts[parts.length - 1];
        current[fileName] = null;
    }

    function buildChildren(node: TreeNode): TreeItem[] {
        const folders: TreeItem[] = [];
        const leaves: TreeItem[] = [];

        for (const [key, value] of Object.entries(node)) {
            if (value === null) {
                leaves.push(key);
            } else {
                folders.push([key, ...buildChildren(value)]);
            }
        }

        return [...folders, ...leaves];
    }

    return buildChildren(tree);
}
