import { Hono } from "hono";
import test from "@/routers/test.router";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/test", test);

export default app;
