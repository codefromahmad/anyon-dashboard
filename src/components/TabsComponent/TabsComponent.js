import "./tabscomponent.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function TabsComponent({ data }) {
  const dispatch = useDispatch();
  const profileComp = useSelector((state) => state.page.profileComp);
  const handleTabClick = (path) => {
    dispatch({ type: "setProfileComp", payload: path });
    console.log("profileComp", profileComp);
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
                tab.path === profileComp ? "grid-active" : "grid-nonactive"
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
          className={tab.path === profileComp ? "block" : "hidden"}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
