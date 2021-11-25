import { useContext } from 'react';
import { Context } from '../Context/DataProvider';

const useData = () => {
    return useContext(Context)
};

export default useData;