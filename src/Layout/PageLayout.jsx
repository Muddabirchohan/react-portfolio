import { Outlet } from 'react-router-dom';

const PageLayout = () => (
  <div >  
    <div >
      <Outlet />
    </div>     
  </div>
);

export default PageLayout