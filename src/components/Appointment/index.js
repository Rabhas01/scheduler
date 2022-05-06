import React, { Fragment } from "react";
import useVisualMode from "hooks/useVisualMode";
import "./style.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import Form from "./Form";
import Confirm from "./Confirm";
import Error from "./Error";



export default function Appointment(props) {

// All Mode transiotions of the app
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE ="CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //function to get and save name and interviewer
  function save(name, interviewer) {
      const interview = {
      student: name,
      interviewer
    };
    
    if (name && interviewer) {
      transition(SAVING);

    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true));
    }
  }
  
  //Delete interview function
    function remove() {
      if (mode === SHOW) {
        transition(CONFIRM);
      } else {
        transition(DELETING);
        
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
    }
  }
  
  function edit() {
    transition(EDIT)
  }

  return(
    <Fragment>
      <Header time={props.time} />
    <article className="appointment">
     
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && 
      <Status message = "Saving" />}

      {mode === DELETING && <Status message="Deleting" />}

      {mode === CONFIRM &&
          (<Confirm
            message="Are you sure you would like to delete?"
            onCancel={back}
            onConfirm={remove} />)}

      {mode === SHOW && (
       <Show
       student={props.interview.student}
       interviewer={props.interview.interviewer}
       onDelete={remove}
       onEdit={edit}
       /> 
       )}

      {mode === CREATE && (
        <Form
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
        />
      )}

     
      { mode === EDIT &&
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          onSave={save}
          onCancel={back}
          interviewers={props.interviewers}
      />}
      {mode === ERROR_SAVE &&
      <Error 
      onClose ={back}
      message = "Sorry appointment could not be saved" />}

      {mode === ERROR_DELETE &&
      <Error
      onClose = {back}
      message = "Sorry appointment could not be deleted"/>}
    </article>
    </Fragment>
  );
}