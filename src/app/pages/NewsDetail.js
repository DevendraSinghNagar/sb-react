import Loader from '../shared/Loader'
import useFetchWithReducer from '../services/useFetch';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    // const location = useLocation();
    const params = useParams();
    // console.log(location, params);
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${params.newsId}`;
    const { loading, error, data } = useFetchWithReducer(API_URL);

    return (
        <>
            {loading && <Loader />}
            {error && <h2> {error.message}</h2>}
            {data && <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {data.title}</h5>
                    <p className="card-text">{data.body}</p>
                </div>
            </div>}
        </>
    )
}

export default NewsDetail
