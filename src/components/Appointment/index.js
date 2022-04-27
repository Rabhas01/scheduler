import React from "react";
import useVisualMode from "hooks/useVisualMode";
import "./style.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE ="CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {

    if (name && interviewer) {
      transition(SAVING);

    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview);
    transition(SHOW);
    }
  }
    function remove() {
      if (mode === SHOW) {
        transition(CONFIRM);
      } else {
        transition(DELETING);
        
      props.cancelInterview(props.id);
      transition(EMPTY);
    }
  }
  
  function edit() {
    transition(EDIT)
  }

  return(
    
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

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

      {mode === SAVING && 
      <Status message="Saving" />}

      {mode === DELETING && (
      <Status message="Deleting"/>)}

      {mode === CONFIRM &&
          (<Confirm
            message="Are you sure you would like to delete?"
            onCancel={back}
            onConfirm={remove} />)}
      { mode === EDIT &&
      <Form
      name={props.interview.student}
      interviewer={props.interview.interviewer.id}
            onSave={save}
            onCancel={back}
            interviewers={props.interviewers}
      />

      }
    </article>
    
  );
}