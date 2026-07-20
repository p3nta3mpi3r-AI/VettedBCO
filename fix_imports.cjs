const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.tsx', 'utf8');

content = content.replace(
  'import { Plus, Minus, HelpCircle } from "lucide-react";',
  'import { Plus, Minus, HelpCircle, Facebook, Instagram, Twitter, Mail } from "lucide-react";'
);
fs.writeFileSync('src/components/FAQ.tsx', content);
