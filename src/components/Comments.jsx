import Comment from './Comment';
{/* comments */}
export default function Comments () {
    return ( 
  <div>
    <h2>Comments</h2>
    <Comment/>
  {/*  {comments.map((comment) => (
      <Comment key={comment.id} name={comment.name} content={comment.content} />
    ))}  */}
  </div>
  );
 }

