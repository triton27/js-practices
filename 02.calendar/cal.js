#!/usr/bin/env node

import minimist from "minimist";

function printCalendarHeader(year, month) {
  console.log(`${month}月 ${year}`.padStart(13, " "));
  console.log(`日 月 火 水 木 金 土`);
}

function printCalendarDays(year, month) {
  let firstDayOfWeek = new Date(year, month - 1, 1).getDay();
  const totalDays = new Date(year, month, 0).getDate();

  process.stdout.write(`${" ".repeat(Math.max(0, 3 * firstDayOfWeek - 1))}`);

  for (let day = 1; day <= totalDays; day++) {
    let dayOfWeek = new Date(year, month - 1, day).getDay();
    if (dayOfWeek === 6) {
      console.log(day.toString().padStart(3, " "));
    } else if (dayOfWeek === 0) {
      process.stdout.write(day.toString().padStart(2, " "));
    } else {
      process.stdout.write(day.toString().padStart(3, " "));
    }
  }
  console.log();
}

function main() {
    const argv = minimist(process.argv.slice(2));
    const now = new Date();
    const year = argv.y ?? now.getFullYear();
    const month = argv.m ?? now.getMonth() + 1;
    
    printCalendarHeader(year, month);
    printCalendarDays(year, month);
}

main();
