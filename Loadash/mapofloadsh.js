
import react from 'react'
import { IsEmpty, Map } from "react-lodash"

export default function Mapofloadsh() {
  const dailyExpenses = [4, 7, 3, 5, 6, 4, 7];
  return (
    <IsEmpty
      value={dailyExpenses}
      yes="Empty list"
      no={() => (
        <ul>
          <Map collection={dailyExpenses} iteratee={i => <li key={i}>{i}</li>} />
        </ul>
      )}
    />
  );
}