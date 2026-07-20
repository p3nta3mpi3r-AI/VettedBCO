const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.tsx', 'utf8');

// Remove Social Icons & Copyright Centered
content = content.replace(
  /        \{\/\* Social Icons & Copyright Centered \*\/\}[\s\S]*?(?=\s*<\/div>\s*<\/section>)/g,
  ''
);

fs.writeFileSync('src/components/FAQ.tsx', content);
