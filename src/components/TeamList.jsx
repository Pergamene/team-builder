import React from 'react';

import TeamMember from './TeamMember.jsx';

const TeamList = props => {
  const { teamList } = props;

  return (
    teamList.map((teamMemberData, index) => {
      return <TeamMember teamMemberData={teamMemberData} key={index} />
    })
  );
};

export default TeamList;
