import React from "react";

const PodcastDetail = ({ params }) => {
  console.log(params);
  return <div>Detail of{params.id}</div>;
};

export default PodcastDetail;
