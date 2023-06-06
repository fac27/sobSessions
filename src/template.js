export function layout({ title, content }) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
        <link rel="stylesheet" type="text/css" href="/style.css">
        <script src="https://kit.fontawesome.com/de362ee74f.js" crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        </head>
        <body>
            <main>
              ${content}
            </main>
        </body>
      </html>
    `;
}
