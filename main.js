import {
   intervalToDuration,
   format,
   parseISO
} from "date-fns";

import {UI} from "./UIselectors.js";

UI.BTN.addEventListener('click', (event) => {
   event.preventDefault();

   let countdownDate = format(new Date(UI.DATE_TO_COUNTDOWN.value), 'yyyy, MM, dd, hh, mm, ss'),
       nowDate = format(new Date(), 'yyyy, MM, dd, hh, mm, ss');

   let timer = intervalToDuration({
      start: new Date(...nowDate.split(",")),
      end: new Date(...countdownDate.split(",")),
   });

   UI.NAMES.style.display = 'flex';
   
   UI.YEARS.textContent = timer.years;
   UI.MONTHS.textContent = timer.months;
   UI.DAYS.textContent = timer.days;
   UI.HOURS.textContent = timer.hours;
   UI.MINUTES.textContent = timer.minutes;

});