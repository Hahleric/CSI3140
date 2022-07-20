
const addresses = ["Hair salon", "1879 Nepean St", "Ottawa ON", "K9W 2O9","(613)876-5432"];

let text = "";

for (let i = 0; i < 5; i++) {
  text += addresses[i]+"<br>";
}
document.getElementById("address").innerHTML = text;

const hours = ["Monday 9:00a.m-6.00p.m", "Tuesday 9:00a.m-5.00p.m", "Wednesday 9:00a.m-6.00p.m", "Thursday 9:00a.m-6.00p.m","Friday 9:00a.m-7.00p.m","Saturday 9:00a.m-4.00p.m","Sunday 9:00a.m-4.00p.m"];

let texts = "";

for (let i = 0; i < 7; i++) {
  texts += hours[i]+"<br>";
}
document.getElementById("hour").innerHTML = texts;

