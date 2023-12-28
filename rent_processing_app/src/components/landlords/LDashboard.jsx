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
  // const [counter, setCounter] = useState(0);
  const [activeTab, setActiveTab] = useState('units');
  const [childProps, setChildProps] = useState(null)

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setChildProps(null); // Resetting the details on the right
  };

  const getChildProps = (props) => {
    setChildProps(props)
  }

  console.log(childProps)

  // const handleCounter = (i) => {

  // setCounter(i)
  // }

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
      <body className="ldash-background">
      <section className="ldash-section">
      <h2>Landlord Dashboard</h2>
      {/* <button onClick={() => handleCounter(0)}>Units</button>
      <button onClick={() => handleCounter(1)}>Contracts</button>
      <button onClick={() => handleCounter(2)}>Rent Logs</button> */}
      <button onClick={() => handleTabClick('units')} className="ldash-button">Units</button>
      <button onClick={() => handleTabClick('contracts')} className="ldash-button">Contracts</button>
      <button onClick={() => handleTabClick('rentLogs')} className="ldash-button">Rent Logs</button>


      <div className="ldash-modal">
        
        <div className="ldash-left">
          {/* {counter === 0 && <Units getChildProps={getChildProps}/>}
          {counter === 1 && (
            <Contracts getChildProps={getChildProps}/>
          )}
          {counter === 2 && <RentLogs getChildProps={getChildProps}/>} */}
          
          {activeTab === 'units' && <Units getChildProps={getChildProps} />}
          {activeTab === 'contracts' && <Contracts getChildProps={getChildProps} />}
          {activeTab === 'rentLogs' && <RentLogs getChildProps={getChildProps} />}

        </div>
        <div className="ldash-right">
        <div className="ldash-div > div">
              {childProps}
        </div>
        </div>
      </div>
      </section>
      </body>
    </>
  );
}
