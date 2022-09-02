import "./styles.css";
import { runCode } from "./exercise";

(async () => {

  let rta = '';

  document.getElementById("app").innerHTML = `
    <h1>Fetch Util</h1>
    <p><input id="input" value="https://api.escuelajs.co/api/v1/categories" type="text" /></p>
    <p><button id="btn">Fetch</button></p>
    <p>Response from <code>runCode</code>
    <pre><code>${rta}</code></pre>
  `;

  document.getElementById("btn").addEventListener("click", async () => {
    const url = document.getElementById("input").value;
    console.log(url);
    rta = await runCode(url);
    document.getElementById("app").innerHTML = `
      <h1>Fetch Util</h1>
      <p><input id="input" value="https://api.escuelajs.co/api/v1/categories" type="text" /></p>
      <p><button id="btn">Fetch</button></p>
      <p>Response from <code>runCode</code>
      <pre><code>${rta}</code></pre>
    `;
  });
})();
