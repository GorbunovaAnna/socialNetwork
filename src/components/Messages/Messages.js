import React from "react";
import styles from "./Messages.module.scss";
import Dialog from "./Dialog/Dialog";
import Letter from "./Letter/Letter";

function Messages(props) {

let dialogsElement = props.dialogsData.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>);

let lettersElement = props.lettersData.map(letter => <Letter key={letter.id} text={letter.text}/>)

  return (
    <>
      <div className={styles.messages}>
        <div className={styles.messagesDialogues}>
          <h2>Dialogues</h2>
          {dialogsElement}
        </div>
        <div className={styles.messagesLetters}>
          {lettersElement}
        </div>
      </div>
    </>
  );
}

export default Messages;
