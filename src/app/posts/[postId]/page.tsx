"use client";

const MyPostId = ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  console.log("params", params);

  return (
    <div>
      <h1>my post id is : {params.postId}</h1>
    </div>
  );
};

export default MyPostId;
