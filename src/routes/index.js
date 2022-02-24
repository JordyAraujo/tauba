import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { useAuth } from '../hooks/auth';

// import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';


export function Routes() {
  // const { user } = useAuth();

  return (
    <NavigationContainer>
      {/**
       * If the user is logged in, show private routes
       *
        {user.id ? <PrivateRoutes /> : <PublicRoutes />}
      */}
      <PrivateRoutes />
    </NavigationContainer>
  );
}
