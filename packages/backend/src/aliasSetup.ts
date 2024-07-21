import process from "process";

if (process.env.NODE_ENV === "production") {
  require("module-alias/register");
} else {
  require("tsconfig-paths/register");
}
