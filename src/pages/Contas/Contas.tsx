import classes from "./Contas.module.css";
import eye from "../../assets/eye.svg";
import { useState, useContext } from "react";
import Account from "./Conta";
import AppContext from "../../store/app-context";
import Header from "../../components/header";
import Stepper from "../../components/Stepper/Stepper";
import Footer from "../../components/footer";

const Contas = () => {
  const AppCtx = useContext(AppContext);

  const [focus, setFocus] = useState("");

  const accSelectHandler = (id: any) => {
    if (focus === id) {
      setFocus("");
    } else {
      setFocus(id);
    }
  };
  return (
    <>
      <Header />
      <Stepper />
      <div className={classes.container}>
        <div className={classes.NavigationTitlesTertiary}>
          <p>Por favor selecione a conta em que pretende fazer o depósito.</p>
        </div>

        <div onClick={AppCtx.onShowBalance} className={classes.containerSaldo}>
          <img className={classes.eye} src={eye} />
          <label className={classes.label}>Ver saldo</label>
        </div>

        <div className={classes.containerAccs}>
          {AppCtx.user.map((conta) =>
            conta.accounts.map((dados) => (
              <Account
                id={dados.id}
                key={dados.id}
                saldo={dados.saldo}
                onSelect={accSelectHandler}
                focus={focus}
              />
            ))
          )}
        </div>
      </div>
      <Footer focus={focus} />
    </>
  );
};
export default Contas;
