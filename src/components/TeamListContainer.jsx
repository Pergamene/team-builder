import React, { Fragment, useState } from 'react';

import TeamList from './TeamList.jsx';
import Form from './Form.jsx';

const TeamListContainer = () => {
  const [teamList, setTeamList] = useState([{name: 'Austin', email: 'email@gmail.com', role: 'developer'}]);

  const updateTeamList = newTeamMember => {
    setTeamList([...teamList, newTeamMember]);
  }

  console.log('TeamListContainerTeamList', teamList);

  return (
    <Fragment>
      <Form updateTeamList={updateTeamList} />
      <TeamList teamList={teamList} />
    </Fragment>
  );
};

export default TeamListContainer;
