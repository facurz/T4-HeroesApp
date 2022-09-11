import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CheckingAuth } from '../auth/componentes/CheckingAuth';
import { AuthContext } from '../auth/context/AuthContext';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';


export const AppRouter =  () => {

  const {status, checkAuthFireBase} = useContext(AuthContext);

  checkAuthFireBase();

  if (status === 'checking') return <CheckingAuth/>

  return (
    <Routes>
        {
          status === 'authenticated'
          ? <Route path='/*' element={<HeroesRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
        }

        <Route path='/*' element={<Navigate to='/auth/login' />} />

    </Routes>
  )
}
