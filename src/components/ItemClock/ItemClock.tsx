import { useEffect, useRef } from "react";

export const ItemClock = (props) => {
  const { title, zone } = props;
  const clock = useRef(); 
  console.log('создали компонент', zone)

  let day = new Date();
  let hour = day.getHours() + Number(zone);
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();

  let hrrotation = (30 * hour) + (0.5 * minutes);
  let minrotation = 6 * minutes;
  let secrotation = 6 * seconds;

  useEffect(() => {
    const hr = clock.current?.querySelector('.hr');
    const min = clock.current?.querySelector('.min');
    const sec = clock.current?.querySelector('.sec');

    hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
    min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
    sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;

    const idTimer = setTimeout(function timer() { // таймер
      seconds = (seconds === 59) ? 0 : seconds + 1;
      minutes = (seconds === 0) ? minutes + 1 : minutes;
      hour = (minutes === 60) ? hour + 1 : hour;
      minutes = (minutes === 60) ? 0 : minutes;
      hour = (hour === 24) ? 0 : hour;

      hrrotation = (30 * hour) + (0.5 * minutes);
      minrotation = 6 * minutes;
      secrotation = 6 * seconds;
      hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
      min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
      sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
      setTimeout(timer, 1000);
    }, 1000);

    console.log('создали таймер ', idTimer);

    return () => {
      console.log('закрываем ', idTimer);
      clearTimeout(idTimer);
    }
  }, []) 

  return (
    <div className="clock__item">
      <div className="clock__title">{title}</div>
      <div className="clock" ref={clock}>
        <div className="hr"></div>
        <div className="min"></div>
        <div className="sec"></div>
        <div className="pin"></div>
      </div>
    </div>
  )
}


// function clockTimer(hr, min, sec) {
//   const idTimer = setTimeout(() => {

//   });
// }
