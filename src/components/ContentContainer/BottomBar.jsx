import PlusIcon from "./PlusIcon"

const BottomBar = () => {
  return (
    <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
  )
}

export default BottomBar