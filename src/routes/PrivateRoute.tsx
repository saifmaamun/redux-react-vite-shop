import { useAppSelector } from '@/redux/hook';
import React from 'react';
import { ReactNode } from 'react';
import { useLocation,Navigate } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}


  export default function PrivateRoute({ children }: IProps) {

  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

    if (isLoading) {

        return <p>Loading...</p>;
}


    if (!user.email && !isLoading) {
  return <Navigate to ='/login' state = {{state:pathname}} />;

}

  return children;

}





