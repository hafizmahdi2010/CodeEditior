let htmlCode = document.querySelector("#html-code-value");
let cssCode = document.querySelector("#css-code-value");
let jsCode = document.querySelector("#js-code-value");
let output = document.querySelector("#outputIframe");

function updateCode() {
  let html = htmlCode.value;
  let css = cssCode.value;
  let js = jsCode.value;

  // Update HTML
  output.contentDocument.body.innerHTML = html;

  // Update CSS
  let styleElement = output.contentDocument.createElement('style');
  styleElement.innerHTML = css;
  output.contentDocument.head.innerHTML = ''; // Clear previous styles
  output.contentDocument.head.appendChild(styleElement);

  // Update JavaScript
  let scriptElement = output.contentDocument.createElement('script');
  scriptElement.innerHTML = js;
  output.contentDocument.body.appendChild(scriptElement);
}

function changeColor() {
  let color = "red";
  document.body.style.backgroundColor = color;
}

function changeFontSize() {
  let size = document.getElementById("font-size").value;
  document.body.style.fontSize = size;
}