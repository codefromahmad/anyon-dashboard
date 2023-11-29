import "./tabscomponent.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function TabsComponent({ openTab, setOpenTab, data }) {
  const dispatch = useDispatch();
  const handleTabClick = (path) => {
    setOpenTab(path);
    if (path === "/accountinformation") {
      dispatch({
        type: "setAccountInformation",
        payload: "accountInformation",
      });
    } else if (path === "/payment") {
      dispatch({ type: "setAddBank", payload: false });
    } else if (path === "/privacysecurity") {
      dispatch({ type: "setChangePassword", payload: false });
    }
  };
  return (
    <div>
      <div className="grid-container">
        <ul className="grid">
          {data.map((tab) => (
            <Link
              to={tab.path}
              onClick={() => handleTabClick(tab.path)}
              className={`item-name ${
                tab.path === openTab ? "grid-active" : "grid-nonactive"
              }`}
            >
              <li className={`grid-item `}>{tab.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      {data.map((tab) => (
        <div
          key={tab.name}
          className={tab.path === openTab ? "block" : "hidden"}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
