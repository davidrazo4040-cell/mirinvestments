import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

$w.onReady(function () {
  const RAILWAY_URL = "https://mirinvestements123-production.up.railway.app";

  // Pass current page path so Railway renders the right section
  const path = wixLocation.path.join('/');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; overflow: hidden; }
        iframe {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          border: none;
          z-index: 9999;
        }
      </style>
    </head>
    <body>
      <iframe
        src="${RAILWAY_URL}"
        allowfullscreen
        allow="fullscreen"
        scrolling="yes"
      ></iframe>
    </body>
    </html>
  `;

  try {
    $w('#siteFrame').src = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
    $w('#siteFrame').expand();
  } catch(e) {
    // siteFrame element not yet added in editor
  }
});
