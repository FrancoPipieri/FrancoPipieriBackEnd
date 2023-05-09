import {
  json,
  opine,
  request,
  response,
  Router,
  urlencoded,
} from "https://deno.land/x/opine@2.3.4/mod.ts";

import React from "https://esm.sh/react@17.0.2";
import ReactDOMServer from "https://esm.sh/react-dom@17.0.2/server";

const app = opine();
app.use(json());
app.use(urlencoded());

const colors: string[] = [];

app.get("/", (request, response) => {
  const colorList = colors.map((color) => (
    <li key={color} style={{ color: color }}>
      {color}
    </li>
  ));

  const html = ReactDOMServer.renderToString(
    <html>
      <head>
        <title>Color Form</title>
      </head>
      <body style={{ backgroundColor: "white", color: "black" }}>
        <h1>Color Form</h1>
        <form action="/colors" method="post">
          <label htmlFor="colorInputlabel">Enter a color:</label>
          <input type="text" id="colorInput" name="color" />
          <button type="submit">Submit</button>
        </form>
        <ul>{colorList}</ul>
      </body>
    </html>,
  );

  response.type("text/html").send(html);
});

app.post("/colors", async (request, response) => {
  const { color } = request.body;
  console.log(color);
  colors.push(color);
  response.redirect("/");
});

app.listen(3000);
console.log("Server running on http://localhost:3000");
