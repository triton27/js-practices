var argv = require('minimist')(process.argv.slice(2));
const now = new Date();
const year = argv['y'] == null ? now.getFullYear() : (argv['y'])
const month = argv['m'] == null ? now.getMonth() + 1 : (argv['m'])
// 対象年月の1日目の曜日を取得
let dayOfWeek = new Date(year, month - 1, 1).getDay();
// 対象年月の最終日を取得
const days = new Date(year, month, 0).getDate();

const week = ['日', '月', '火', '水', '木', '金', '土']
const SPACE = ' ';

console.log(`${month}月 ${year}`.padStart(13, SPACE));
console.log(week.join(SPACE));

// 初日のスペース出力
process.stdout.write(`${SPACE.repeat(3).repeat(dayOfWeek)}`);

for (let day = 1; day <= days; day++) {
    let dayString = day.toString().padStart(2, SPACE) + SPACE;
        if (dayOfWeek == 6) {
            console.log(dayString);
            dayOfWeek = 0;
        } else {
            process.stdout.write(dayString);
            dayOfWeek++;
        }
}
