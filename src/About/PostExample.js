import './post.css'
import PollExample from './PollExample';
function PostExample (props) {
  return (
    <div className="post-link">
        {!props.isPoll ? 
        <>
        <div className="post" style={{ backgroundColor: `#D1B2F7` }}>
            <div className='flex-row'>
            <p className="category">Question</p>
            </div>
            <p className={"title"}>Any current INFO students, can you tell me more about Informatics?</p>
            <p className='boardName'>Informatics</p>
            <p className="date">5/3/2023</p>
            <p className={"content"}>Hey all, I was wondering if anyone could tell me a bit more about Informatics.
            I'm planning on applying for this Fall quarter, so it'd be great if anyone could tell me a bit more
            about their experience, their coursework, and their application process in general. Thanks all!</p>
        </div>
        </>:
        <>
        <div className="post" style={{ backgroundColor: `#F4B2B2` }}>
            <div className='flex-row'>
                <p className="category">Question</p>
            </div>
            <PollExample />
        </div>
        </>
        
        }
    </div>

  );
}



export default PostExample;