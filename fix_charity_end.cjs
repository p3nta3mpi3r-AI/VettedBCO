const fs = require('fs');
let content = fs.readFileSync('src/components/CharityFactor.tsx', 'utf8');

const target = `      {/* Iframe Modal */}
      {activeIframeUrl && (`;

const replacement = `      </div>
      {/* Iframe Modal */}
      {activeIframeUrl && (`;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/CharityFactor.tsx', content);
