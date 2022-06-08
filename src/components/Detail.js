import React from "react";

function Detail({ formData }) {
  const { username } = formData
  return <h2>Welcome, {username}!</h2>
}

export default Detail;
