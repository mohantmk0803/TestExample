const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("runs every minute");
});
