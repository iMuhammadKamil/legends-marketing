const https = require('https');
const fs = require('fs');
const path = require('path');
const url = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80';
const fp = path.join(__dirname, 'public', 'images', 'overseas', 'hub.jpg');
const file = fs.createWriteStream(fp);
https.get(url, (r) => { r.pipe(file); file.on('finish', () => { file.close(); console.log('hub.jpg saved'); }); }).on('error', (e) => console.error(e.message));