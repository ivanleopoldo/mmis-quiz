import { Hono } from "hono";

const test = new Hono();

test.get("/", (c) => c.text("Hello World from test"));

export default test;
