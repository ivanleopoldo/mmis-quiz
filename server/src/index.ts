import { Hono } from "hono";
import test from "@/routers/test.router";
import { connect } from "@/lib/db";
import mongoose from "mongoose";

connect();
const app = new Hono();

app.get("/", (c) => {
  return c.text(mongoose.ConnectionStates[mongoose.connection.readyState]);
});

app.route("/test", test);

export default app;
