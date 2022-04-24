export function getAppointmentsForDay(state, day) {
  const appointmentsForDay = [];  
  const chosenDay = state.days.length
  if (chosenDay !== 0 ){
  const selectedDay = state.days.find(dayArry => dayArry.name === day);
  if (selectedDay) {
    for (const appt of selectedDay.appointments){
      appointmentsForDay.push(state.appointments[appt])
      }
    }
  }
  return appointmentsForDay;
}
