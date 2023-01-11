import styles from './style.module.css';

const Projetos = () => {

    return (
        <>
            <form className={styles.form} action="">

                <div className={styles.formInputArea}>
                    <h2>Cadastrar Projeto</h2>
                    <div className={styles.line}></div>
                    <p>Random</p>
                    <input type="text" />
                    <p>Random</p>
                    <input type="text" />
                    <p>Random</p>
                    <input type="text" />
                    <p>Random</p>
                    <input type="text" />
                </div>
            </form>
        </>
    )
}

export default Projetos;