import * as moment from "moment";
import { memo } from "react";

import { IMG_URL } from "../../../../data";

import { MobileCardStyled, MobileInfo } from "./CardMobile.styled";

export const CardMobile = memo(
  ({ movie: { poster_path, title, overview, release_date } }) => {
    const releaseDate = moment(release_date).format("MMM DD, YYYY");
    return (
      <MobileCardStyled>
        <div>
          {poster_path ? (
            <img src={`${IMG_URL}${poster_path}`} alt={`${title}`} />
          ) : (
            ""
          )}
        </div>
        <MobileInfo>
          <div>
            <h2>{title}</h2>
            <p>{releaseDate}</p>
          </div>
          <div>
            <p>{overview}</p>
          </div>
        </MobileInfo>
      </MobileCardStyled>
    );
  }
);
