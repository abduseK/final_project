import "./header.css";

export default function Header() {
  return (
    <div className="nav">
      <h3 className="logo">KKTasks</h3>
      <div className="menus">
        <ul className="menu-lists">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  );
}
