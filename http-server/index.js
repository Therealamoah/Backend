const http = require('http');
const PORT = 5000;

const htmlPage = (content) => `
  <html>
    <body style="
      background-color: white;
      font-weight: bold;
      font-family: sans-serif;
      font-size: 22px;
      padding: 60px;
      color: #222;
    ">
      ${content}
    </body>
  </html>
`;

const server = http.createServer((req, res) => {

  const method = req.method;
  const url = req.url;

  // Route 1: Home page → GET /
  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlPage('Welcome to the Home Page!'));

  // Route 2: About page → GET /about
  } else if (method === 'GET' && url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlPage('This is the About Page.'));

  // Route 3: Contact page → GET /contact
  } else if (method === 'GET' && url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlPage('Contact us.'));

  // Route 4: Time → GET /time
  } else if (method === 'GET' && url === '/time') {
    const currentTime = new Date().toLocaleTimeString();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlPage(`Current time is: ${currentTime}`));

  // Route 5: Student API → GET /api/student  
  } else if (method === 'GET' && url === '/api/student') {
    const student = {
      name: 'Collins',
      course: 'Node.js',
      week: 1          
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(student));

  // 404 — Unknown route
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(htmlPage('404 - Page Not Found'));
  }

});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log('─────────────────────────────────────────');
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/about`);
  console.log(`  http://localhost:${PORT}/contact`);
  console.log(`  http://localhost:${PORT}/time`);
  console.log(`  http://localhost:${PORT}/api/student`);
  console.log('─────────────────────────────────────────');
});