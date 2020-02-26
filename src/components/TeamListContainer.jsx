import React, { Fragment, useState } from 'react';

import TeamList from './TeamList.jsx';
import Form from './Form.jsx';

const TeamListContainer = () => {
  const [teamList, setTeamList] = useState([]);

  const updateTeamList = newTeamList => {
    setTeamList(newTeamList);
  }

  return (
    <Fragment>
      <TeamList teamList={teamList} />
      <Form updateTeamList={updateTeamList} />
    </Fragment>
  );
}

export default TeamListContainer;
