const fs = require('fs');

const files = [
  'src/pages/Services.tsx',
  'src/pages/Reflections.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Approach.tsx',
  'src/pages/About.tsx',
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace hardcoded amber text colors
    content = content.replace(/text-amber-(900|950)(\/\d+)?(?!\s*dark:text-)/g, (m, p1, p2) => `${m} dark:text-[#F1E4D1]${p2 || ''}`);
    
    // Success text
    content = content.replace(/text-green-700(?!\s*dark:text-)/g, 'text-green-700 dark:text-green-400');
    
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
