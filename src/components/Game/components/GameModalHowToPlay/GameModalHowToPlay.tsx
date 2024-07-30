//Styles
import styles from "./GameModalHowToPlay.module.scss";

export default function GameModalHowToPlay() {
    return (
        <div className={styles["content"]}>
            <p>
                <span>1. Apresentação das Espécies: </span>O jogo apresenta 9 &quot;tipos de espécies&ldquo; no início.
                E, a cada rodada, uma espécie específica é mostrada ao jogador.
            </p>

            <p>
                <span>2. Tentativa de Adivinhação: </span>O jogador deve tentar adivinhar o tipo da espécie atual entre
                os 9 tipos de espécies disponíveis.
            </p>

            <p>
                <span>3. Tipos Múltiplos: </span>
                Algumas espécies podem corresponder a mais de um tipo. No entanto, fique atento! Isso não significa que
                a espécie apresentada corresponda a uma das alternativas de tipos, podem ser apresentadas espécies de
                tipos não inclusos ao jogo.
            </p>

            <p>
                <span>4. Respostas Erradas: </span>
                Se a tentativa de resposta estiver errada, a rodada atual é perdida e o jogo segue para a próxima.
            </p>

            <p>
                <span>5. Respostas Certas: </span>
                Se a tentativa de resposta estiver correta, a respectiva alternativa será marcada como
                &quot;concluída&ldquo; e o jogo segue para a próxima rodada.
            </p>

            <p>
                <span>6.Objetivo do Jogo: </span>O jogador deve concluir todos os 9 tipos de espécies para vencer o
                jogo, antes que as rodadas acabem.
            </p>

            <p className={styles["content__footer"]}>Divirta-se!</p>
        </div>
    );
}
