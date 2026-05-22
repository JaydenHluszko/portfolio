const fs = require('fs');
const path = require('path');

const dir = 'd:/Documents/Jayden/Jayden-Portfolio/pages';

function walk(directory) {
    let files = [];
    const items = fs.readdirSync(directory);
    for (const item of items) {
        const fullPath = path.join(directory, item);
        if (fs.statSync(fullPath).isDirectory()) {
            files = files.concat(walk(fullPath));
        } else if (fullPath.endsWith('.vue')) {
            files.push(fullPath);
        }
    }
    return files;
}

walk(dir).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    if (file.includes('resume.vue')) {
        content = content.replace(/(<h1 class="[^"]*)(")/, (match, p1, p2) => {
            if (!p1.includes('text-on-surface')) {
                return p1 + ' text-on-surface' + p2;
            }
            return match;
        });
    }

    const targetClass = "px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle";
    content = content.split(targetClass).join(targetClass + " text-on-surface");

    if (file.replace(/\\/g, '/').includes('case-studies')) {
        content = content.replace(/(<h2 class="[^"]*)(")/g, (match, p1, p2) => {
            if (!p1.includes('text-on-surface')) {
                return p1 + ' text-on-surface' + p2;
            }
            return match;
        });
    }

    content = content.replace(/font-code-label text-xs(?!\s+text-on-surface)/g, 'font-code-label text-xs text-on-surface');

    content = content.replace(/(<span class="[^"]*)(?=" data-icon="public">)/g, (match, p1) => {
        if (!p1.includes('text-on-surface')) {
            return p1 + ' text-on-surface';
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
