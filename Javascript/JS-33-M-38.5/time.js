const hour = new Date().getHours()
const minute = new Date().getMinutes()



const hourDoc = document.getElementById('hour').innerText = hour
const minuteDoc = document.getElementById('minute').innerText = minute

setInterval(() => {
   const second = new Date().getSeconds()
   const secondDoc = document.getElementById('second')
   secondDoc.innerText = second
}, 1000);

setInterval(() => {
   const miliSecond = new Date().getMilliseconds()
   const miliSecondDoc = document.getElementById('miliSecond')
   miliSecondDoc.innerText = miliSecond
}, 1);



