import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cargarDataMembers } from "../conection/api";
import { DataModel } from "./model";

export const MemberData = () => {
  // const { member } = props;
  const { login } = useParams();
  const [member, setMember] = React.useState<DataModel>({
    name: "",
    company: "",
    type: "",
    url: "",
  });

  const listData = async () => {
    let loadData = await cargarDataMembers(login);

    setMember(loadData);
  };
  listData();

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/companyList/app");
  };

  return (
    <>
      <div className="member-table">
        <h3>INFO MEMBER:</h3>
        <span>
          <b>Nombre:</b> {member.name}
        </span>

        <span>
          <b>Company:</b> {member.company}
        </span>

        <span>
          <b>Type:</b> {member.type}
        </span>

        <span>
          <b>Url:</b> {member.url}
        </span>
      </div>
      <button onClick={handleLogin} className="button-back">
        Back to members page
      </button>
    </>
  );
};
