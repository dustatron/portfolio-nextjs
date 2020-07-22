import React, { useContext } from 'react';
import { ProjectDataContext } from '../utils/ProjectDataContext';
const TestNest = () => {
  const [state, setState] = useContext(ProjectDataContext);
  return (
    <div style={{ fontSize: '25px' }}>
      <button
        onClick={() => setState((state) => ({ ...state, name: 'Clicked!' }))}>
        {state.name}
      </button>
    </div>
  );
};

export default TestNest;
