// import React from "react";
// import classNames from "classnames";
// import "components/DayListItem.scss"; 

// export default function DayListItem(props) {
// const DayListItem = classNames('day-list__item', {
//   'day-list__item--selected':props.selected, 'day-list__item--full': props.spots === 0
// });

// function formatSpots(props) {
//   if (props.spots === 0) {
//     return `no spots remaining`
//   }
//   if (props.spots === 1) {
//     return `1 spot remaining`
//   }
//   return `${props.spots} spots remaining`
// }

//   return (
//     <li className={DayListItem} onClick={() => props.setDay(props.name)}>
//       <h2 className="text--regular">{props.name}</h2> 
//       <h3 className="text--light">{formatSpots(props)}</h3>
//       </li>
//   );
// }


import classNames from "classnames";
import React from "react";
import "components/DayListItem.scss"

export default function DayListItem(props) {
  let dayClass = classNames('day-list__item',
  {"day-list__item--selected": props.selected},
  {"day-list__item--full": props.spots === 0})

  let spotsRem = ''

  const formatSpots = () => {
    if (props.spots === 0) {
      spotsRem = 'no spots remaining'
    }
    if (props.spots === 1) {
      spotsRem = '1 spot remaining'
    }
    if (props.spots > 1) {
      spotsRem = props.spots + ' spots remaining'
    }
  }

  formatSpots();

  return (

      <li
      onClick={props.setDay}
      className={dayClass}
      data-testid="day"
      >
        <h2 className="text--regular">{props.name}</h2>
        <h3 className="text--light">{spotsRem}</h3>
      </li>

  );
}