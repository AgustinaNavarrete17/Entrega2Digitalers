<script lang="ts">
    let visible = false;
    let visible2 = false;
</script>

<body>
    <div>
        <p
            class="text-3xl flex justify-center font-semibold text-lilaTitulo mb-4 mt-4"
        >
            ¿Por qué debemos esterilizar a nuestros gatos?
        </p>
        <div class="card">
            <div class="w-3/5 m-7">
                <p class="font-semibold text-xl">
                    La posibilidad de castrar a tu gato es una de las decisiones
                    más importantes que tendrás que tomar como propietario.
                </p>
                <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                    Ventajas de la esterilización:
                </p>
                <p>
                    La castración tiene muchas ventajas. Lo primero y más
                    importante es que evita el riesgo de embarazos no deseados y
                    ayuda a reducir la población de gatos callejeros. Además,
                    reduce la probabilidad de que tu gato sufra determinadas
                    enfermedades y se comporte de forma poco sociable:
                </p>
                <p class="font-semibold text-xl">Beneficios físicos:</p>
                <ul class="list-disc">
                    <li>
                        En hembras, la castración elimina el riesgo de sufrir
                        enfermedades relacionadas con los ovarios o el útero,
                        como por ejemplo cáncer, piometra, ovarios poliquísticos
                        y metritis. También reduce el riesgo de enfermedades
                        inducidas por hormonas, como por ejemplo cáncer de mama
                        o falsos embarazos.
                    </li>
                    <li>
                        En machos, la castración elimina el riesgo de sufrir
                        enfermedades relacionadas con los testículos, como por
                        ejemplo cáncer, y reduce el riesgo de sufrir
                        enfermedades inducidas por la testosterona, como la
                        prostatitis, adenomas y hernias perianales, e
                        hiperplasia prostática benigna.
                    </li>

                    <li>
                        Tanto en hembras como en machos, la castración también
                        evita la propagación de enfermedades de transmisión
                        genética y la frustración sexual.
                    </li>
                </ul>
                {#if visible == true}
                    <p class="font-semibold text-xl">
                        Beneficios en el comportamiento:
                    </p>
                    <ul class="list-disc">
                        <li>
                            En machos, la castración reduce la probabilidad de
                            que orine donde no debe y presente otros
                            comportamientos territoriales, como que se pelee con
                            otros gatos. Además, reduce la tendencia a vagar
                            lejos de casa.
                        </li>
                        <li>
                            En hembras, la castración puede reducir el interés
                            en los gatos macho y su propensión a mostrarse
                            excesivamente afectivas o agresivas.
                        </li>
                    </ul>
                    <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                        Cuándo esterilizar a mis gatos:
                    </p>
                    <p class="font-semibold text-xl">Gatos machos:</p>
                    <ul class="list-disc">
                        <li>
                            Entre los 7-9 meses de edad, aunque será el
                            veterinario quien tenga la última palabra según las
                            circunstancias de cada gato, pues los hay más
                            precoces o con mayor riesgo sin conviven con gatas
                            enteras. Esto no quiere decir que no podamos
                            castrarlo con posterioridad, solo que a esta edad
                            sería más recomendable para evitar las consecuencias
                            de sucesivos periodos de celo.
                        </li>
                    </ul>
                    <p class="font-semibold text-xl">Gatas hembras:</p>
                    <ul class="list-disc">
                        <li>
                            La recomendación es que la esterilización de las
                            hembras se haga antes de su primer celo. ¿Cuándo
                            tiene una gata su primer celo? Lo cierto es que se
                            ve muy influenciado por las horas de luz solar,
                            entre otros factores, así que la edad exacta va a
                            depender bastante de la época de nacimiento de la
                            gatita, de sus circunstancias vitales,
                            características, etc. Algunas pueden ser tan
                            precoces como los cuatro meses, mientras que otras
                            pueden retrasar el celo hasta los siete o incluso un
                            poco más. En general, suelen operarse sobre los seis
                            meses, aunque será el veterinario quien tenga la
                            última palabra. Al igual que en los machos, esto no
                            quiere decir que no se puedan operar con
                            posterioridad, pero hay que saber que los efectos
                            beneficiosos que la castración tiene sobre las
                            patologías dependientes de las hormonas del ciclo
                            sexual van a verse reducidos cuanto más tiempo
                            tardemos en intervenir. Por ejemplo, si retrasamos
                            la operación años la gata igualmente podrá
                            desarrollar tumores en las mamas.
                        </li>
                    </ul>
                    <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                        ¿Hasta qué edad puedo esterilizar a mi gato?
                    </p>
                    <p>
                        No hay ninguna edad límite para la esterilización.
                        Mientras la salud del animal le permita entrar en
                        quirófano, lo que se valora en función de los resultados
                        de sus pruebas preoperatorias, realizar la
                        esterilización es posible. Eso sí, hay que saber que
                        puede ser tarde para que desaparezcan conductas
                        relacionadas con la reproducción, como el marcaje con
                        orina, o el desarrollo de algunas enfermedades como los
                        tumores mamarios.
                    </p>
                    <button
                        on:click={() => {
                            visible = false;
                        }}
                        class=" bg-lila hover:bg-purple-400 p-2 w-28 my-4 rounded-lg mx-auto block mt-9"
                        >Ver menos ☝</button>
                {/if}
            </div>
            <div class="w-2/5">
                <div class="imgAlimentacion">
                    <img src="/assets/esterilizarGato.jpg" alt="" />
                </div>
                {#if visible == false}
                    <button
                        on:click={() => {
                            visible = true;
                        }}
                        class="btnSalud bg-lila hover:bg-purple-400 p-2 w-24 my-4 rounded-lg mx-auto block mt-6"
                        >Ver más ☟</button
                    >
                {/if}
            </div>
        </div>

        <p
            class="text-3xl flex justify-center font-semibold text-lilaTitulo mb-4 mt-6"
        >
            ¿Cómo determinar el sexo de nuestro gato?
        </p>
        <div class="card">
            <div class="w-3/5 m-7">
                <p class="font-semibold text-xl">
                    Saber si tu gatito es hembra o macho no siempre es una tarea
                    fácil. Las características de un gato macho en comparación
                    con una gata no siempre son evidentes para los nuevos dueños
                    de gatos, y es aún más difícil determinar el sexo de un
                    gatito o de un macho castrado.
                </p>
                <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                    Pasos para determinar el sexo de tu gato:
                </p>
                <ul class="list-disc">
                    <p class="font-semibold text-xl">Gatos machos:</p>
                    <li>
                        Si has establecido una buena relación con el gato,
                        levántalo y levanta su cola. Si el gatito no responde
                        bien, es posible que desee solicitar la ayuda de un
                        amigo o familiar. Si el gato aún no levanta la cola,
                        intente rascarlo donde la parte inferior de la espalda
                        se encuentra con la cola; la mayoría de los gatos
                        levantan la cola si les haces esto.
                    </li>
                    <li>
                        Una vez que la cola esté levantada, debes tener una
                        vista completa de los genitales y el ano del gato. Un
                        macho tendrá una distancia mucho mayor entre los
                        genitales y el ano que las hembras: ½ pulgada de
                        separación en un gatito macho o más de 1 pulgada de
                        separación en un gato macho adulto. Por el contrario, si
                        los dos están casi adyacentes en un gatito o a menos de
                        1/2 pulgada de distancia en un adulto, es una hembra.
                    </li>
                </ul>
                {#if visible2 == true}
                    <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                        ¿Cómo determinar el sexo en gatos castrados?
                    </p>
                    <ul class="list-disc">
                        <p class="font-semibold text-xl">Gatos machos:</p>
                        <li>
                            La mayoría de los gatos machos castrados aún
                            mostrarán los restos vestigiales de un saco
                            testicular, y el ano y el pene aún estarán
                            relativamente juntos. Los gatos castrados no
                            mostrarán comportamientos típicos de machos o
                            hembras. Los machos castrados son generalmente más
                            pasivos que los machos no castrados.
                        </li>
                        <p class="font-semibold text-xl">Gatas hembras:</p>
                        <li>
                            Las gatas esterilizadas seguirán mostrando el «!» al
                            revés, pero si se adopta como adulta, se pueden usar
                            pruebas hormonales para determinar si está
                            esterilizada. Con las gatas, es importante averiguar
                            si han sido esterilizadas o no antes de tener una
                            camada no planificada. Además, destacar que las
                            hembras no entran en celo.
                        </li>
                    </ul>
                    <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                        ¿Se puede determinar el sexo en gatos según la
                        apariencia?
                    </p>
                    <p>
                        Si bien todos los gatos se ven muy similares, algunos
                        colores e indicaciones físicas son exclusivos de un
                        género en particular. Específicamente, es extremadamente
                        raro que un gato macho tenga un pelaje de carey tricolor
                        o naranja y negro. Para aquellos con un gato calicó o
                        tortuga, es muy probable que la mascota sea una hembra.
                        Es poco común que una gata tenga pelaje anaranjado o de
                        color jengibre (o con rayas anaranjadas y blancas). Para
                        aquellos con un gato naranja, hay muchas posibilidades
                        de que sea un macho. Es mucho más probable que una gata
                        que ha dado a luz tenga pezones visibles (aunque tanto
                        los machos como las hembras tienen pezones)
                    </p>
                    <button
                        on:click={() => {
                            visible2 = false;
                        }}
                        class=" bg-lila hover:bg-purple-400 p-2 w-28 my-4 rounded-lg mx-auto block mt-9"
                        >Ver menos ☝</button
                    >
                {/if}
            </div>

            <div class="w-2/5">
                <div class="imgAlimentacion">
                    <img src="/assets/machohembra.webp" alt="" />
                </div>
                {#if visible2 == false}
                    <button
                        on:click={() => {
                            visible2 = true;
                        }}
                        class="btnSalud bg-lila hover:bg-purple-400 p-2 w-24 my-4 rounded-lg mx-auto block mt-6"
                        >Ver más ☟</button
                    >
                {/if}
            </div>
        </div>
    </div>
</body>
