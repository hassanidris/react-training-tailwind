

const Post = ({ name, timestamp, text }) => {
    const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
    <div className='avatar-wrapper'>
        
      <img src={`https://xsgames.co/randomusers/avatar.php?g=male`} alt='' className='avatar' />
    </div>

    <div className='post-content'>
      <p className='post-owner'>
        {name}
        <small className='timestamp'>{timestamp}</small>
      </p>
      <p className='post-text'>{text}</p>
    </div>
  </div>
  )
}

export default Post