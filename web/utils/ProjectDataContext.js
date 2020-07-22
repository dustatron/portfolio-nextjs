import React, { useState } from 'react';

const ProjectDataContext = React.createContext([{}, () => {}]);

const ProjectDataProvider = (props) => {
  const [state, setState] = useState({});
  console.log('context', props);

  return (
    <ProjectDataContext.Provider value={[state, setState]}>
      {props.children}
    </ProjectDataContext.Provider>
  );
};

export { ProjectDataContext, ProjectDataProvider };
