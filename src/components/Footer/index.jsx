import styles from "./style.module.css"

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <p className="paragraph white center">
               Todos os direitos reservados - João Silva - 2024{" "}
            </p>
         </div>
      </footer>
   );
};
