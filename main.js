import {
   intervalToDuration,
   format,
   parseISO
} from "date-fns";

const UI = {
   DATE_TO_COUNTDOWN: document.querySelector('.countdown__input'),
   BTN: document.querySelector('.countdown__btn')
};

UI.BTN.addEventListener('click', (event) => {
   event.preventDefault();

   let countdownDate = format(new Date(UI.DATE_TO_COUNTDOWN.value), 'yyyy, MM, dd, hh, mm, ss'),
       nowDate = format(new Date(), 'yyyy, MM, dd, hh, mm, ss');
   
      

   let timer = intervalToDuration({
      start: new Date(...nowDate.split(",")),
      end: new Date(...countdownDate.split(",")),
   });

   // let timer2 = intervalToDuration({
   //    start: new Date(1929, 0, 15, 12, 0, 0),
   //    end: new Date(1968, 3, 4, 19, 5, 0)
   //  })

   console.log(nowDate);
   console.log(countdownDate);
   console.log(timer);
   console.log(timer.days);

});