import minimist from 'minimist';

var argv = minimist(process.argv.slice(2));
const now = new Date();
const year = argv['y'] || now.getFullYear();
const month = argv['m'] || now.getMonth() + 1;

const SPACE = ' ';

function printCalendarHeader(year, month) {
  const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
  console.log(`${month}月 ${year}`.padStart(13, SPACE));
  console.log(weekDays.join(SPACE));
}

function printCalendarDays(year, month) {
  // 対象年月の1日目の曜日を初期値として取得
  let dayOfWeek = getDayOfWeek(year, month);
  // 対象年月の最終日を取得
  const totalDays = getTotalDays(year, month);

  // １日目の出力場所を調整
  process.stdout.write(`${SPACE.repeat(3).repeat(dayOfWeek)}`);

  for (let day = 1; day <= totalDays; day++) {
    let dayString = day.toString().padStart(2, SPACE) + SPACE;
    if (dayOfWeek == 6) {
      console.log(dayString);
      dayOfWeek = 0;
    } else {
      process.stdout.write(dayString);
      dayOfWeek++;
    }
  }
}

function getDayOfWeek(year, month) {
  return new Date(year, month - 1, 1).getDay();
}

function getTotalDays(year, month) {
  return new Date(year, month, 0).getDate();
}

printCalendarHeader(year, month);
printCalendarDays(year, month);
