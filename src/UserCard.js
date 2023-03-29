import "./UserCard.css";
import UserModal from "./UserModal";

const UserCard = ({ userData }) => {
  return (
    <div className="card">
      <div className="card-name">{userData.name}</div>

      <div className="card-body">
        <div className="card-email">
          <i className="fa fa-envelope" /> {userData.email}
        </div>
        <div className="card-phone">
          <i className="fa fa-phone" /> {userData.phone}
        </div>
        <div className="card-website">
          <i className="fa fa-globe" /> {userData.website}
        </div>
        <div className="card-company">
          <i className="fa fa-briefcase" /> {userData.company.name}
        </div>
        <UserModal userData={userData} />
      </div>
    </div>
  );
};

export default UserCard;
