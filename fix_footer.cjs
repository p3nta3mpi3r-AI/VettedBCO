const fs = require('fs');
let lines = fs.readFileSync('src/components/Footer.tsx', 'utf8').split('\n');

while (lines.length > 0 && (lines[lines.length - 1].trim() === '' || lines[lines.length - 1].includes('</footer>') || lines[lines.length - 1].includes(')') || lines[lines.length - 1].includes('}'))) {
    lines.pop();
}

while (lines.length > 0 && lines[lines.length - 1].includes('</div>')) {
    lines.pop();
}

const append_str = `        </div>
      </div>
    </footer>
  );
}`;

fs.writeFileSync('src/components/Footer.tsx', lines.join('\n') + '\n' + append_str);
