import React from "react";
import { MemberEntity } from "./model";
import "/styles.css";

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <tr key={member.id} className="target-container">
      <td className="item-1">
        <img src={member.avatar_url} />
      </td>
      <td className="item-2">
        <span>{member.id}</span>
      </td>
      <td className="item-3">
        <span>{member.login}</span>
      </td>
    </tr>
  );
};
