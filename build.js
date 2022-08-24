import sass from "sass";
import { promisify } from "util";
import { writeFile } from "fs";
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);

const build = async () => {
  const style = await sassRenderPromise({
    file: `${process.cwd()}/src/styles.sass`,
    outFile: `${process.cwd()}/styles.css`,
    sourceMap: true,
    sourceMapContents: true,
    outputStyle: "compressed",
  });

  await writeFilePromise("styles.css", style.css, "utf8");
  await writeFilePromise("styles.css.map", style.map, "utf8");
}

build();
