import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const now = new Date();
const year = argv.y ?? now.getFullYear();
const month = argv.m ?? now.getMonth() + 1;

function printCalendarHeader(year, month) {
  console.log(`${month}月 ${year}`.padStart(13, ' '));
  console.log(`日 月 火 水 木 金 土`);
}

function printCalendarDays(year, month) {
  // 対象年月の1日目の曜日を初期値として取得
  let dayOfWeek = new Date(year, month - 1, 1).getDay();
  // 対象年月の最終日を取得
  const totalDays = new Date(year, month, 0).getDate();

  // １日目の出力場所を調整
  process.stdout.write(`${' '.repeat(3).repeat(dayOfWeek)}`);

  for (let day = 1; day <= totalDays; day++) {
    let dayString = day.toString().padStart(2, ' ') + ' ';
    if (dayOfWeek === 6) {
      console.log(dayString);
      dayOfWeek = 0;
    } else {
      process.stdout.write(dayString);
      dayOfWeek++;
    }
  }
}

printCalendarHeader(year, month);
printCalendarDays(year, month);
