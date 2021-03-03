import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { ValorAtual } from '../components/ValorAtual';
import { ContextValorProvider } from '../Contexts/ContextValor';
import { Buttons } from '../components/Buttons';

export default function Home() {

  return (
    <ContextValorProvider>
      <div className={styles.container}>
        <Head>
          <title>Context Api</title>
        </Head>

            <section>
            
              <ValorAtual />

              <Buttons />

            </section>
      </div>
    </ContextValorProvider>
  )
}
