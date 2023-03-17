import Navigate from "../navigate/Navigate";

import Keyboard from "../keyboard/Keyboard";

function Container(props: any) {
  return (
    <div>
      <div className="keyboard">
        <Navigate focus={props.focus} />
      </div>
      <Keyboard
        value={props.amount}
        hideHandler={() => props.hideHandler()}
        hide={props.hide}
        amount={props.amount}
        setAmount={props.setAmount}
      />
    </div>
  );
}

export default Container;
