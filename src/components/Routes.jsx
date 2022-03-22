import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { Results } from '.';

const Routes = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route path='/' element={<Navigate to='/search' />} />
        <Route path='/search' element={<Results />} />
        <Route path='/images' element={<Results />} />
        <Route path='/news' element={<Results />} />
        <Route path='/videos' element={<Results />} />
      </Switch>
    </div>
  );
};
export default Routes;
