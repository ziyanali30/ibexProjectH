const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 0.8 },
  { url: '/about', changefreq: 'weekly', priority: 0.5 },
  { url: '/services', changefreq: 'weekly', priority: 0.5 },
  { url: '/contact', changefreq: 'weekly', priority: 0.5 },
  { url: '/services/IT', changefreq: 'weekly', priority: 0.5 },
  { url: '/services/bpo', changefreq: 'weekly', priority: 0.5 },
  { url: '/home', changefreq: 'weekly', priority: 0.5 },
  // Add all your routes here
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.aximosolutions.net' });
  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);
  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap); // Ensure sitemap is fully written
  console.log('Sitemap generated successfully');
}

generateSitemap();
