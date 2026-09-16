const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  // Overseas hub - globe/world map with Pakistan
  'hub': 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1200&q=80',
  // Why Invest - Pakistan skyline/development
  'why-invest': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80',
  // Investment Guide - calculator/planning
  'investment-guide': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
  // Documentation - papers/passport
  'documentation': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
  // Remote Booking - video call/remote work
  'remote-booking': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
  // Payment Methods - banking/payment
  'payment-methods': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  // Power of Attorney - legal document
  'power-of-attorney': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
  // Overseas Advisor - professional advisor
  'overseas-advisor': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(filepath, () => {}); reject(err); });
  });
}

async function downloadAll() {
  const basePath = path.join(__dirname, 'public', 'images', 'overseas');
  for (const [name, url] of Object.entries(images)) {
    const filepath = path.join(basePath, `${name}.jpg`);
    console.log(`Downloading ${name}.jpg...`);
    try {
      await downloadImage(url, filepath);
      console.log(`  ✓ Saved`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 100));
  }
  console.log('\nDone!');
}

downloadAll().catch(console.error);