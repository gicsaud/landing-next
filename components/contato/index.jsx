import Styles from "./contato.module.scss";

const Contato = () => {
    return <div className={Styles.container}>
        <div className={Styles.texts}>
            <span>ENTRE EM CONTATO</span>
            <h1>Aumente seu resultado de vendas e performance</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
        </div>
        <div className={Styles.form}></div>
    </div>
};

export default Contato;