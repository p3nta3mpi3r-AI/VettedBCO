import re

with open('src/index.css', 'r') as f:
    content = f.read()

new_camo_css = """  .bg-camo {
    background-image: url('/camo.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }"""

content = re.sub(r'\s*\.bg-camo\s*\{[^}]*\}', '\n' + new_camo_css, content)

with open('src/index.css', 'w') as f:
    f.write(content)
