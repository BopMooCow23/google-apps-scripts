function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Title')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```
Run a .html (also deploy as web app)
```
