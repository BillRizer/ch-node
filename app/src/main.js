const http = require("http");
const dataHelper = require("./data");

const hostname = "0.0.0.0";
const port = 3000;

function getUsers() {
  return new Promise((resolve, reject) => {
    dataHelper
      .query("SELECT * FROM people")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}
async function setUser(name) {
  await dataHelper.insert(name);
}

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;
  if (!url) {
    res.end();
  }
  const pattern = /add\//;
  if (url.match(pattern)) {
    const text = url.replace(pattern, "");
    await setUser(text);
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.write("<h3>saved</h3>");
    res.write('<a href="/">go to list page</a>');
    res.end();
  }

  if (url == "/") {
    const users = await getUsers();

    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.write("<h1>Full Cycle Rocks!</h1>");
    res.write("<ul>");
    for (const user in users) {
      const { id, name } = users[user];
      res.write(`<li id="${id}">${name}</li>`);
    }
    res.write("<ul>");
    res.write(
      "<br/><br/><div> - para salvar novo usuario faça um <code>GET /add/my-new-username </code></div>"
    );
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`server listening on port ${port}`);
});
