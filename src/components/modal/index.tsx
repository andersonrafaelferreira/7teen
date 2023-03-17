import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import iconClose from "../../assets/icon-close-default.svg";
import AppContext from "../../store/app-context";

import styles from "./modal.module.css";

const Modal = (props: any) => {
  const AppCtx = useContext(AppContext);

  const [closeActive, setCloseActive] = useState(false);
  const tipo = AppCtx.modalType;

  const clickTHandler = () => {
    setCloseActive(true);
    setTimeout(() => {
      setCloseActive(false);
      AppCtx.modalTHandler();
    }, 600);
  };

  const clickEHandler = () => {
    setCloseActive(true);
    setTimeout(() => {
      setCloseActive(false);
      AppCtx.modalEHandler();
    }, 600);
  };

  const Backdrop = () => {
    return (
      <div
        className={
          closeActive
            ? `${styles.blur} ${styles.blurDown}`
            : `${styles.blur} ${styles.blurUp}`
        }
      ></div>
    );
  };

  const OverlayT = (props: any) => {
    return (
      <div
        className={
          closeActive
            ? `${styles.main} ${styles.mainDown}`
            : `${styles.main} ${styles.mainUp}`
        }
      >
        <div className={styles["container-close"]}>
          <p>Fechar</p>
          <button className={styles.botaoFechar} onClick={clickTHandler}>
            <img src={iconClose} />
          </button>
        </div>

        <p className={styles.directory}>[Funcionalidade] / [Subcategoria]</p>
        <p className={styles.title}>Comprovativo para Telemóvel</p>

        <p className={styles.message}>
          Confirme ou insira outro número de telemóvel
          <br />
          para o qual pretende enviar o comprovativo.
        </p>
        <div className={styles.input}>
          <label>
            Número de Telemóvel:
            <input className={styles.inputT} value="+244 915 003 234" />
          </label>
        </div>
      </div>
    );
  };

  const OverlayM = (props: any) => {
    return (
      <div
        className={
          closeActive
            ? `${styles.main} ${styles.mainDown}`
            : `${styles.main} ${styles.mainUp}`
        }
      >
        <div className={styles["container-close"]}>
          <p>Fechar</p>
          <button className={styles.botaoFechar} onClick={clickEHandler}>
            <img src={iconClose} />
          </button>
        </div>

        <p className={styles.directory}>[Funcionalidade] / [Subcategoria]</p>
        <p className={styles.title}>Comprovativo para Email</p>

        <p className={styles.message}>
          Confirme ou insira outro endereço de email para
          <br />o qual pretende enviar o comprovativo.
        </p>
        <div className={styles.input}>
          <label>
            Endereço de Email:
            <input className={styles.inputE} value="daniela12345@gmail.com" />
          </label>
        </div>
      </div>
    );
  };

  if (tipo === "T") {
    return (
      <>
        {ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop-modal")!
        )}
        {ReactDOM.createPortal(
          <OverlayT />,
          document.getElementById("overlay-modal")!
        )}
      </>
    );
  } else if (tipo === "E") {
    return (
      <>
        {ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop-modal")!
        )}
        {ReactDOM.createPortal(
          <OverlayM />,
          document.getElementById("overlay-modal")!
        )}
      </>
    );
  }
  return <></>;
};

export default Modal;
