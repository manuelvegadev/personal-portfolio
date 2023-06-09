import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { createWriteStream, promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileContents = await fs.readFile(
  path.join(__dirname, "..", "json", "profile.json"),
  "utf8"
);
const data = JSON.parse(fileContents);

// Generate the theme from a source color
const theme = themeFromSourceColor(argbFromHex(data["theme-color"]));
const colors = theme.schemes.dark;

// Generate the CSS variables
const cssVars = [];
Object.entries(colors.props).forEach(([key, value]) => {
  // From camelCase to kebab-case
  const cssVarName = key.replace(
    /[A-Z]/g,
    (letter) => `-${letter.toLowerCase()}`
  );
  cssVars.push(`$color-${cssVarName}: ${hexFromArgb(value)};`);
});

// Write the CSS file
const writeStream = createWriteStream(
  __dirname + "/../styles/color-palette.scss"
);
writeStream.write(
  "/*\n * This file is generated by the script 'generatePalette.js'\n" +
    " * and should not be edited manually.\n */\n\n"
);
cssVars.forEach((cssVar) => writeStream.write(cssVar + "\n"));
writeStream.end();
