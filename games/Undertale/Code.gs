const ASSET_BASE =
  "https://cdn.jsdelivr.net/gh/BopMooCow23/ut-upload-2@main/";

function doGet() {
  return HtmlService
    .createHtmlOutputFromFile("Index")
    .setTitle("UNDERTALE")
    .setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );
}

