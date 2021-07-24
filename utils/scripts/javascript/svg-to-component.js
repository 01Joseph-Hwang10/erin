// import { readFileSync } from "fs";
// import { open } from "fs";
// import { ROOT } from "./constants";
// import { fileIds } from "../../../assets/stickers/utils/file_ids";
// import svgr from "@svgr/core";

const { readFileSync, writeFileSync } = require("fs"); // eslint-disable-line
const svgr = require("@svgr/core").default; // eslint-disable-line
const { ROOT } = require("./constants"); // eslint-disable-line
const { fileIds } = require("./file-ids"); // eslint-disable-line

const svgRoot = `${ROOT}/assets/stickers/stickers-svg`;
const svgDist = `${ROOT}/assets/stickers/stickers-components`;

const svgComponentConfig = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
  native: true,
  typescript: true,
  ext: "tsx"
};


fileIds.forEach(
  (fileId) => {
    const filePath = `${svgRoot}/${fileId}.svg`;
    const svgSource = readFileSync(filePath, "utf-8");
    svgr(
      svgSource,
      svgComponentConfig,
      { componentName: `Sticker${fileId.replace("-", "D")}` }
    )
      .then(async componentSource => {
        await writeFileSync(
          `${svgDist}/Sticker${fileId.replace("-", "D")}.tsx`,
          componentSource,
          { encoding: "utf-8" }
        );
      });
  }
);

