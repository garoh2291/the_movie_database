import { LEADER_BOARD } from "./data/leader-board-data.js";

export function getLeaders() {
  const $leadersBoard = document.querySelector(".leaders_board_content");
  for (let i = 0; i < LEADER_BOARD.length; i++) {
    const item = LEADER_BOARD[i];
    $leadersBoard.innerHTML += `<div class="leaderboard_item">
    ${
      item.img
        ? `<div class="leader_item_name" style="background-image:url(${item.img})"></div>`
        : `<div
          class="leader_item_name"
          style="background-color:rgba(var(--accountYellow), 1);"
        >
          <p>${item.name[0].toUpperCase()}</p>
        </div>`
    }
        <div class="leaders_activities">
            <h3>${item.name}</h3>
            <div class="activity">
                <div class="all_time activity_indicator" style="width:${getSizeAllTime(
                  item.totalEdits
                )}%"></div>
                <span>${item.totalEdits}<span>
            </div>
            <div class="activity">
                <div class="week activity_indicator" style="width:${getSizeWeekly(
                  item.weeklyEdits
                )}%"></div>
                <span>${item.weeklyEdits}<span>
            </div>

        </div>
    </div>`;
  }
}

function getSizeWeekly(count) {
  if (count > 10000) {
    return 100;
  } else {
    return Math.floor(count / 100);
  }
}

function getSizeAllTime(count) {
  if (count > 1000000) {
    return 100;
  } else {
    return Math.floor(count / 10000);
  }
}
