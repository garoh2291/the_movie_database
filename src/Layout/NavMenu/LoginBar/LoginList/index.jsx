import "./styles.css";

export const LoginList = () => {
  return (
    <nav>
      <ul className="login_list">
        <li>
          <button className="new">
            <i className="bx bx-plus-medical"></i>
          </button>
        </li>
        <li>
          <button className="lang_btn">EN</button>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/">Join TMDB</a>
        </li>
      </ul>
    </nav>
  );
};