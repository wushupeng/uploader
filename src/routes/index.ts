import * as Router from "koa-router";
import { apiSuccess } from "../utils/apiResult";
import { UploadFile } from "../types/base";
import { Context } from "koa";

/**
 * api路由模块
 */
const router = new Router({
  prefix: "",
});
console.log(router);
router.get("/", (ctx: Context) => {
  ctx.body = "Hi,Koa";
});
router.post("/uploadSVG", (ctx: Context) => {
  console.log("=======uploadSVG=======");
  const file: UploadFile = (ctx.request as any).files["svg"] as any;
  ctx.body = apiSuccess(
    `http://localhost:3000/${file.originalFilename}`,
    "上传成功",
    200
  );
  console.log(file);
});
export default router;
