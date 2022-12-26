import "./styles.css";

export const ShowMeBody = () => {
  return (
    <div className="sort-panel-body">
      <h3>Show Me</h3>
      <label className="radio-wrap">
        {" "}
        <input
          type="radio"
          className="show-radio"
          name="show_me"
          id="show_me_everything"
          defaultChecked
        />
        <label htmlFor="show_me_everything" className="show-label">
          Everything
        </label>
      </label>
      <label className="radio-wrap">
        {" "}
        <input
          type="radio"
          className="show-radio"
          name="show_me_not_seen"
          id="show_me_not_seen"
          disabled
        />
        <label htmlFor="show_me_not_seen" className="show-label">
          Movies I Haven't Seen
        </label>
      </label>
      <label className="radio-wrap">
        {" "}
        <input
          type="radio"
          className="show-radio"
          name="show_me_seen"
          id="show_me_seen"
          disabled
        />
        <label htmlFor="show_me_seen" className="show-label">
          Movies I Have Seen
        </label>
      </label>
    </div>
  );
};
