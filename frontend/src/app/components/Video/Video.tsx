import './Video.css';

function Video() {
  return (
    <div className='videoContainer'>
        <video src="/" controls autoPlay loop muted className='video'></video>
    </div>
  )
}

export default Video