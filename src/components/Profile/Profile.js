import React from "react";
import Person from "./Person/Person";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";

function Profile() {
  return (
    <>
      <main>
        <Person />
        <CreatePost />
        <Post message="How are you?" />
        <Post message="Hello, word!" />
      </main>
    </>
  );
}

export default Profile;
