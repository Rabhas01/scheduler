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

// export function getInterviewersForDay(state, day) {
//   const filteredInterviewers = [];

//   if (state.days.length !== 0){
//     const daySelected = state.days.find(daysArr => daysArr.name === day);
//     if (daySelected) {
//       for (const apt of daySelected.interviewers) {
//         filteredInterviewers.push(state.interviewers[apt])
//       }
//     }
//   }
//   return filteredInterviewers;
// } 

// export function getInterviewersForDay(state, day) {
//   // Get only the day for which the name matches the day prop
//   const selectedDay = state.days.filter(d => d.name === day)[0];

//   const interviewersForDay = [];
//   // Init interviewers to return and check if no days were found (skip if so)
//   if (selectedDay) {
//     // Iterate over interviewers list for the selected day, and
//     //   return matching interviewers
//     for (const a of selectedDay.appointments) {
//       const foundInterview = state.appointments[a].interview;
//       const foundInterviewerId = foundInterview ? foundInterview.interviewer : undefined;
//       const foundInterviewer = state.interviewers[foundInterviewerId];
//       if (foundInterviewer) { 
//         interviewersForDay.push(foundInterviewer);
//       }
//     }
//   }

//   return interviewersForDay;
// }