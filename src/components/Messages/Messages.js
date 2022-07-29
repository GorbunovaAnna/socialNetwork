import React from "react";
import styles from "./Messages.module.scss";
import Dialog from "./Dialog/Dialog";
import Letter from "./Letter/Letter";

function Messages() {
  return (
    <>
      <div className={styles.messages}>
        <div className={styles.messagesDialogues}>
          <h2>Dialogues</h2>
          <Dialog name="Anna" id="1"/>
          <Dialog name="Nik" id="2"/>
          <Dialog name="Jim" id="3"/>
          <Dialog name="Kate" id="4"/>
          <Dialog name="Sem" id="5"/>
          <Dialog name="Maria" id="6"/>
        </div>
        <div className={styles.messagesLetters}>
          <Letter text="Hi!"/>
          <Letter text="What is your name?"/>
          <Letter text="What are you doing?"/>
          <Letter text="Let's go to the park."/>  
        </div>
      </div>
    </>
  );
}

export default Messages;
