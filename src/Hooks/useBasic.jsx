import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useBasic = () => {
    const { data: basicUsers = [], refetch, isLoading: loading } = useQuery(['users'], async () => {
        const res = await axios.get('http://localhost:5000/users/basic')
        console.log(res.data);
        return res.data;
    })
    return [basicUsers, refetch, loading]
};

export default useBasic;