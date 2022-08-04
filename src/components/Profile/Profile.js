import React from "react";
import Person from "./Person/Person";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";

function Profile(props) {

const postElement = props.postsDate.map(post => <Post message={post.message} />)

  return (
    <>
      <main>
        <Person />
        <CreatePost />
        {postElement}
      </main>
    </>
  );
}

export default Profile;
