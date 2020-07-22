import React from 'react';
import { ProjectDataProvider } from '../utils/ProjectDataContext';

import TestNest from '../components/TestNest';

const test = () => {
  return (
    <ProjectDataProvider>
      <h1 style={{ fontSize: '25px' }}>Test</h1>
      <TestNest />
    </ProjectDataProvider>
  );
};

export default test;
