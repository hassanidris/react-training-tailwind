import TopNavigation from '../TopNavigation/TopNavigation'
import { postsData } from '../../data/data'
import Post from './Post'
import BottomBar from './BottomBar'

const ContentContainer = () => {
  return (
    <div className="content-container">
    <TopNavigation />
    <div className='content-list pl-5'>
        {postsData.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <BottomBar />
    </div>
  )
}

export default ContentContainer