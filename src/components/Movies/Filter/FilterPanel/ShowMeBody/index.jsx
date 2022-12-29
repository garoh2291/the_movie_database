import { FilterBody } from "../../Filter.styled";
import { ShowRadioBtn } from "./ShowMe.styled";

export const ShowMeBody = () => {
  return (
    <FilterBody>
      <h3>Show Me</h3>
      <ShowRadioBtn>
        {" "}
        <input
          type="radio"
          name="show_me"
          id="show_me_everything"
          defaultChecked
        />
        <label htmlFor="show_me_everything">Everything</label>
      </ShowRadioBtn>
      <ShowRadioBtn>
        {" "}
        <input
          type="radio"
          name="show_me_not_seen"
          id="show_me_not_seen"
          disabled
        />
        <label htmlFor="show_me_not_seen">Movies I Haven't Seen</label>
      </ShowRadioBtn>
      <ShowRadioBtn>
        {" "}
        <input type="radio" name="show_me_seen" id="show_me_seen" disabled />
        <label htmlFor="show_me_seen">Movies I Have Seen</label>
      </ShowRadioBtn>
    </FilterBody>
  );
};
