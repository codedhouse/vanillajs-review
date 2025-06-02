// Dates & Times

// Dates (with & without time)
let date = new Date();
console.log(date); // Sun Jun 01 2025 19:07:15 GMT-0400 (Eastern Daylight Time)
console.log(date.toString()); // Sun Jun 01 2025 19:07:15 GMT-0400 (Eastern Daylight Time)

date = new Date(2012, 5, 27);
console.log(date); // Wed Jun 27 2012 00:00:00 GMT-0400 (Eastern Daylight Time)

date = new Date(1988, 0, 1);
console.log(date); // Fri Jan 01 1988 00:00:00 GMT-0500 (Eastern Standard Time)

date = new Date(2022, 11, 24, 13, 25, 57);
console.log(date); // Sat Dec 24 2022 13:25:57 GMT-0500 (Eastern Standard Time)

date = new Date('1952-04-02T07:30:00');
console.log(date); // Wed Apr 02 1952 07:30:00 GMT-0500 (Eastern Daylight Time)

date = new Date('6/26/2022');
console.log(date); // Sun Jun 26 2022 00:00:00 GMT-0400 (Eastern Daylight Time)

date = new Date('6/26/2022 08:00:00');
console.log(date); // Sun Jun 26 2022 08:00:00 GMT-0400 (Eastern Daylight Time)

date = new Date('12-27-2024');
console.log(date); // Fri Dec 27 2024 00:00:00 GMT-0500 (Eastern Standard Time)

// Can be off by 1 day (known issue)
date = new Date('2024-12-27');
console.log(date); // Thu Dec 26 2024 19:00:00 GMT-0500 (Eastern Standard Time)

// Get parts of the date/time
date = new Date();
let y = date.getFullYear();
let m = date.getMonth();
let d = date.getDate();
let w = date.getDay(); // day of week
console.log(`${y}, ${typeof y}`);
console.log(`${m}, ${typeof m}`); // 0-based
console.log(`${d}, ${typeof d}`);
console.log(`${w}, ${typeof w}`); // 0 = Sunday
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// Tiwestamps (ms that have elapsew since 1970-01-31)
console.log(Date.now());

// Get timestamp for specific date - use getTime() or valueOf()
date = new Date(); // now
console.log(date.getTime());
date = new Date('05-16-25');
console.log(date.getTime()); // 1747368000000
console.log(date.valueOf()); // 1747368000000
date = new Date('5/16/25 16:25:30');
console.log(date.getTime()); // 1747427130000

// Get date from timestamp
date = new Date(1747427130000);
console.log(date); // Fri May 16 2025 16:25:30 GMT-0400 (Eastern Daylight Time)

// Using locales & DateTimeFormat API
console.log(Intl.DateTimeFormat('fr-BE').format(date)); // 16/05/2025
console.log(date.toLocaleDateString('fr-BE')); // newer/shorter version

console.log(Intl.DateTimeFormat('fr-BE', { month: 'long' }).format(date)); // mai
console.log(date.toLocaleString('fr-BE', { month: 'long' })); // mai

// Use default locale
date = new Date();
console.log(Intl.DateTimeFormat('default').format(date));
console.log(date.toLocaleDateString('default'));
console.log(date.toLocaleString('default', { month: 'short' }));
console.log(
  date.toLocaleString('default', {
    month: 'short',
    hour: '2-digit',
    timeZone: 'America/Los_Angeles',
  })
);
