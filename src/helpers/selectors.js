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

export function getInterview(state, interview){

  if (interview === null) {
    return null;
  }

  const interviewData = {
    student: interview.student,
    interviewer: {
      id: state.interviewers[interview.interviewer].id, 
      name: state.interviewers[interview.interviewer].name,
      avatar: state.interviewers[interview.interviewer].avatar  
    }
  }
  return interviewData;
}

export function getInterviewersForDay(state, day) {
  const interviewForDay = [];  

  const chosenDay = state.days.length
  if (chosenDay !== 0 ){
    const selectedDay = state.days.find(dayArry => dayArry.name === day);
    if (selectedDay) {
      for (const appt of selectedDay.interviewers){
          interviewForDay.push(state.interviewers[appt])
        }
      }
  }
  return interviewForDay;
}

