import React from 'react';
import { Redirect, Route } from 'react-router';
import useData from '../Hooks/useData';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading, setIsLoading} = useData()
    if(isLoading){
        return <h1 className="text-center my-5">Loading...</h1>
    }
    return (
        <Route
            {...rest}
            render= {({location}) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: {from: location}
                }}
            >
            </Redirect>     
            }
        >   
        </Route>
    );
};

export default PrivateRoute;