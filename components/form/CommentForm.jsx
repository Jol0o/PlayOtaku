import React, { useState } from "react";
import supabase from "@/utils/supabase";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

function CommentForm({ session, id }) {
  const [comment, setComment] = useState("");
  const router = useRouter();

  const postComment = async (event) => {
    event.preventDefault(); // Prevent the default form submission and page refresh

    if (session) {
      const { data, error } = await supabase.from("comments").insert({
        anime_name: `${id}`,
        user: `${session.user.email}`,
        comment: `${comment}`,
      });
      setComment("");
    } else {
      router.push("/login");
    }
  };

  return (
    <form onSubmit={postComment} style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Type your comment..."
        name="comment"
        onChange={(e) => setComment(e.target.value)}
        style={{
          padding: "10px 15px",
          width: "300px",
          marginRight: "5px",
          outline: "none",
          border: "1px solid #5C5F66",
          borderRadius: "5px",
        }}
      />
      <Button type="submit" variant="default" color="gray" size="md">
        Submit
      </Button>
    </form>
  );
}

export default CommentForm;
