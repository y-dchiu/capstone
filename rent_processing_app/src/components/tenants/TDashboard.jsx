import { useState } from "react";
import Contract from "./Contract";
import History from "./History";
import PayBill from "./PayBill";
import AccountOverview from "./AccountOverview";
import "../../styles/TDashboard.css";
import { Link } from "react-router-dom";
import { tenant, propertyInfo, landlord, contract } from "../../dummyData";

export default function TDashboard() {
  const [counter, setCounter] = useState(0);
  // const [activeTab, setActiveTab] = useState('accountOverview');

  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName);
  //   setChildProps(null);
  // };

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
      <body className="tdash-background">
    <section className="tdash-section">
      <h2>Tenant Dashboard</h2>
      {/* <button onClick={() => handleTabClick('accountOverview')} className="tdash-button">Account Overview</button>
      <button onClick={() => handleTabClick('contract')} className="tdash-button">Contract</button>
      <button onClick={() => handleTabClick('history')} className="tdash-button">History</button> */}
      <button onClick={() => setCounter(0)} className="tdash-button">Account Overview</button>
      <button onClick={() => setCounter(1)} className="tdash-button">Contract</button>
      <button onClick={() => setCounter(2)} className="tdash-button">History</button>

      <div className="tdash-modal">
        <div className="tdash-left">
          {counter === 0 && <AccountOverview tenant={tenant} />}
          {counter === 1 && (
            <Contract
              contract={contract}
              propertyInfo={propertyInfo}
              landlord={landlord}
            />
          )}
          {counter === 2 && <History />}
          {/* {activeTab === 'accountOverview' && <AccountOverview getChildProps={getChildProps} />}
          {activeTab === 'contract' && <Contract getChildProps={getChildProps} />}
          {activeTab === 'history' && <History getChildProps={getChildProps} />} */}
        </div>
        <div className="tdash-right">
          <div>
          <PayBill contract={contract} />
          </div>
        </div>
      </div>
    </section>
    </body>
    </>
  );
}
