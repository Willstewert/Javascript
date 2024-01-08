const week = ["sun", "mon", "tue", "wed", "thi", "fri", "sat"];

const monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const monthIndex = date.getMonth();
const month = monthsName[monthIndex];
console.log(month);
document.getElementById("month").innerHTML = month;

const year = (document.getElementById("year").innerText = date.getFullYear());
console.log(year);

week.map((day) => {
  const callendar = document.getElementById("callendar");
  const div = document.createElement("div");
  div.className = "cell";
  callendar.appendChild(div).innerHTML = day;
});
const d = 1;

for (let i = 1; i <= d; i++) {
  let list = document.getElementById("callendar");
  let li = document.createElement("div");
  list.appendChild(li).innerHTML = i.innerHTML = " ";
}
const allMonth =
  "January" ||
  "March" ||
  "May" ||
  "July" ||
  "September" ||
  "November" ||
  "December";

const oddMonth = "February";

const monthDays = month === allMonth ? 31 : month === oddMonth ? 29 : 30;

for (let i = 1; i <= monthDays; i++) {
  const list = document.getElementById("callendar");
  const li = document.createElement("div");
  list.appendChild(li).innerHTML = i;
  li.className = "cell";
  const date = new Date();
  const days = date.getDate();
  if (i === days) {
    const index = list.appendChild(li);
    index.id = "current-day";
    console.log(index);
  }
}

setInterval(() => {
  const dat = new Date();
  const time = dat.toLocaleTimeString();
  document.getElementById("time").innerText = time;
}, 1000);
