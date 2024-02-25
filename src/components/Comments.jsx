import {useEffect,useState} from 'react'
import {fetchingData} from '../utils/fetchApi'
import CommentCard from './CommentCard'

const Comments = ({video}) => {
  const [comments, setComments] = useState([])
    useEffect(()=> {
        const fetchApi = async () => {
            const data = await fetchingData(video[0]?.id , 'comment');
            setComments(data);
        }
        fetchApi()
    }, [video])
    
    console.log(comments.items);
  return (
    <div className='mt-5'>
      <p className='text-2xl text-white font-semibold'>{video[0]?.statistics?.commentCount} Comments</p>

      <CommentCard comments={comments} />
    </div>
  )
}

export default Comments