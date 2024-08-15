import { ItemClock } from "../ItemClock/ItemClock";
import { v4 as uuidv4 } from 'uuid';

export const Clock = (props) => {
  const { list, callback }  = props;

  return (
    <>
      {
        list.map((item) => {
          return <ItemClock key={uuidv4()} title={item.title} zone={item.zone} callback={callback} />
        })
      }
    </>
  )
}
