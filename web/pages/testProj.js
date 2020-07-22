import React, { useContext } from 'react';
import { ProjectDataContext } from '../utils/ProjectDataContext';

const testProj = () => {
  const [state, setState] = useContext(ProjectDataContext);
  console.log(state);
  return (
    <div style={{ fontSize: '25px' }}>
      <h1 style={{ fontSize: '25px' }}>Test Proj</h1>
      {state.length}

      {state.length > 0
        ? state.map((item) => {
            return <div>{item.title}</div>;
          })
        : 'no State'}
    </div>
  );
};

export default testProj;
