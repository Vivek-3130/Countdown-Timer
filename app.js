const countDown = ()=>{
    const comingDate = new Date('December 31, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = comingDate - now;

    //how does time works
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

   //Calculte the gaping of time
   const textDay = Math.floor(gap/day);
   const textHour = Math.floor((gap%day)/hour);
   const textMinute = Math.floor((gap%hour)/minute);
   const textSecond = Math.floor((gap%minute)/second);

   //Updating html
   document.querySelector('.day').innerText = textDay;
   document.querySelector('.hour').innerText = textHour;
   document.querySelector('.minute').innerText = textMinute;
   document.querySelector('.second').innerText = textSecond;

   if(gap === 0 ){
    document.getElementById('coming').innerHTML="Hurray🎉🎉We Are Open Now❤"
   }
}

setInterval(countDown,1000);