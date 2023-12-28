import { useState } from "react";
import { Link } from "react-router-dom";
import Contracts from "./Contracts";
import RentLogs from "./RentLogs";
import Units from "./Units";
import "../../styles/LDashboard.css";

/* LANDLORD DASHBOARD
1. Dashboard should be the "opening" page after a successful login
2. Dashboard should have landlord and building information
3. Dashboard should *potentially* have a "reminders" modal on the side (stretch goal)
*/

export default function LDashboard() {
  const [activeTab, setActiveTab] = useState("units");
  const [childProps, setChildProps] = useState(null);

  // added start
  // const [isEditMode, setIsEditMode] = useState(false);
  // const [unitsData, setUnitsData] = useState([{unitsData}]);
  // const [contractsData, setContractsData] = useState([{contractsData}]);
  // const [rentLogsData, setrentLogsData] = useState([{rentLogsData}]);
  // added end

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setChildProps(null); // Resetting the details on the right
  };

  const getChildProps = (props) => {
    setChildProps(props);
  };

  console.log(childProps);

  // added start

  // const toggleEditMode = () => {
  //   setIsEditMode(!isEditMode);
  // };

  // const handleDataChange = (newData) => {
  //   setUnitsData(newData);
  // };

  // const saveChanges = () => {
  //   toggleEditMode();
  // };

  // added end

  return (
    <>
      <nav>
        <Link to="/" className="home-link">
          <h1>TenantTracker</h1>
        </Link>
        <div className="nav-links">
          <Link to="/auth/login">Login</Link>
        </div>
      </nav>
      <div className="ldash-background">
        <section className="ldash-section">
          <h2>Landlord Dashboard</h2>
          <button
            onClick={() => handleTabClick("units")}
            className="ldash-button">
            Units
          </button>
          <button
            onClick={() => handleTabClick("contracts")}
            className="ldash-button">
            Contracts
          </button>
          <button
            onClick={() => handleTabClick("rentLogs")}
            className="ldash-button">
            Rent Logs
          </button>
          {/* added start */}
          {/* <button onClick={toggleEditMode}>
        {isEditMode ? 'Save Changes' : 'Edit'}
      </button>
      {isEditMode && <button onClick={saveChanges}>Save</button>} */}
          {/* added end */}

          <div className="ldash-modal">
            <div className="ldash-left">
              {/* edit active tabs to this format */}
              {/* {activeTab === 'units' && <Units
            data={unitsData}
            onEdit={handleDataChange}
            editing={isEditMode}
          />} */}
              {activeTab === "units" && <Units getChildProps={getChildProps} />}
              {activeTab === "contracts" && (
                <Contracts getChildProps={getChildProps} />
              )}
              {activeTab === "rentLogs" && (
                <RentLogs getChildProps={getChildProps} />
              )}
            </div>
            <div className="ldash-right">
              <div className="ldash-div > div">{childProps}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
