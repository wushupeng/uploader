const path = require("path");
const Koa = require("koa");
const { koaBody } = require("koa-body");
const serve = require("koa-static");
import router from "./routes";

const app = new Koa();
const staticPath = path.resolve(__dirname, "./public");
app.use(serve(__dirname + "/public"));
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: staticPath,
      onFileBegin: (formName: String, file: any) => {
        console.log("======onFileBegin======");
        file.filepath = path.join(staticPath, file.originalFilename);
      },
    },
  })
);
console.log(router.routes);
app.use(router.routes());

app.listen(3000);
