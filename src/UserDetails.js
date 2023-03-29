const UserDetails = ({ userData }) => {
  return (
    <div className="card">
      <div className="card-name">{userData.name}</div>

      <div className="card-body">
        <div className="card-username">
          <i className="fa fa-envelope" /> {userData.username}
        </div>
        <div className="card-email">
          <i className="fa fa-envelope" /> {userData.email}
        </div>
        <div className="card-address">
          <i className="fa fa-envelope" /> {userData.address.street},{" "}
          {userData.address.suite}, {userData.address.city},{" "}
          {userData.address.zipcode}, {userData.address.geo.lat},{" "}
          {userData.address.geo.lng}
        </div>
        <div className="card-phone">
          <i className="fa fa-phone" /> {userData.phone}
        </div>
        <div className="card-website">
          <i className="fa fa-globe" /> {userData.website}
        </div>
        <div className="card-company">
          <i className="fa fa-briefcase" /> {userData.company.name},{" "}
          {userData.company.catchPhrase}, {userData.company.bs}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
