<script lang="ts">
    let visible = false;
    let visible2 = false;
</script>

<body>
    <div>
        <p
            class="text-3xl flex justify-center font-semibold text-lilaTitulo mb-4 mt-4"
        >
            ¿Qué nos dice el lenguaje corporal de nuestro gato?
        </p>
        <div class="card">
            <div class="w-3/5 m-7">
                <p class="font-semibold text-xl">
                    Si bien los gatos pueden parecer misteriosos para algunos,
                    para otros, entender a un gato es simplemente una cuestión
                    de prestar atención, observar el lenguaje corporal del gato
                    y responder en consecuencia. Los gatos utilizan diversas
                    formas de comunicar sus sentimientos, necesidades y deseos.
                </p>
                <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                    ¿Cómo usa su cola para comunicarse?
                </p>
                <ul class="list-disc">
                    <li class="text-lg">
                        Cola arriba: este es un gato feliz y alegre que
                        probablemente sea accesible.
                    </li>
                    <li class="text-lg">
                        Cola hacia abajo: esto puede indicar que un gato está
                        asustado o amenazado.
                    </li>
                    <li class="text-lg">
                        Cola se mueve rápidamente hacia adelante y hacia atrás:
                        el movimiento de la cola de un gato no es lo mismo que
                        el gesto feliz de un perro. "Una cola que golpea
                        rápidamente es un buen indicador de que un gato está
                        agitado y debe dejarse en paz"
                    </li>
                </ul>
                {#if visible == true}
                    <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                        ¿Cómo usa sus orejas para comunicarse?
                    </p>
                    <ul class="list-disc">
                        <li class="text-lg">
                            Orejas hacia adelante: es probable que un gato con
                            las orejas ligeramente hacia adelante se sienta
                            contento o incluso juguetón.
                        </li>
                        <li class="text-lg">
                            Orejas hacia arriba: cuando un gato está alerta , es
                            probable que sus orejas también estén firmes.
                        </li>
                        <li class="text-lg">
                            Orejas vueltas hacia atrás: Es posible que se sienta
                            irritado o demasiado estimulado, por lo que
                            probablemente sea una buena idea dejarlo en paz.
                        </li>
                        <li class="text-lg">
                            Orejas hacia atrás y planas contra la cabeza: esta
                            es una señal segura de que un gato está asustado y
                            se siente a la defensiva. Las orejas pegadas a la
                            cabeza también pueden indicar un gato enojado o
                            agresivo. De cualquier manera, ¡las orejas contra la
                            cabeza significan que no te metas con este tipo!
                        </li>
                    </ul>
                    <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                        ¿Cómo usa sus ojos para comunicarse?
                    </p>
                    <ul class="list-disc">
                        <li class="text-lg">
                            Pupilas dilatadas: las pupilas de un gato pueden
                            dilatarse cuando se sorprende, se asusta o se
                            estimula.
                        </li>
                        <li class="text-lg">
                            Pupilas contraídas: las pupilas contraídas pueden
                            significar que su gato está tenso o posiblemente se
                            sienta agresivo. Por supuesto, hay que tener en
                            cuenta la luz disponible.
                        </li>
                        <li class="text-lg">
                            Parpadeo lento: el parpadeo lento es lo opuesto a la
                            mirada fija. Esto indica que tu gato se siente
                            seguro, cómodo y confía en ti.
                        </li>
                        <li class=" text-lg">
                            Medio cerrado: los párpados caídos indican un gatito
                            relajado y confiado.
                        </li>
                    </ul>
                    <button
                        on:click={() => {
                            visible = false;
                        }}
                        class=" bg-lila hover:bg-purple-400 p-2 w-28 my-4 rounded-lg mx-auto block mt-9"
                        >Ver menos ☝</button
                    >
                {/if}
            </div>
            <div class="w-2/5">
                <div class="imgAlimentacion">
                    <img src="/assets/comportamiento.jpg" alt="" />
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
            ¿Por qué amasan los gatos?
        </p>
        <div class="card">
            <div class="w-3/5 m-7">
                <p class="font-semibold text-xl">
                    Los gatos son animales misteriosos y fascinantes, y una de las cosas más curiosas que hacen es amasar. Esta actividad implica que el gato empuje sus patas hacia adentro y hacia afuera contra una superficie suave. Parece que amasar es una actividad relajante para los gatos: muchos ronronean contentos, se “desconectan” y algunos incluso pueden babear mientras lo hacen. ¿Pero por qué les calma? ¿Y qué instinto impulsa la acción en primer lugar?
                </p>
                <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                   Teorías de por qué nuestro gato amasa
                </p>
                <ul class="list-disc">
                    <li class="text-lg">
                        Amasar para mostrar satisfacción o aliviar el estrés. Cualquiera que sea la razón precisa para amasar, una cosa es segura: un gato amasado es un gato feliz. Si bien es posible que no sepamos la razón exacta por la que a los gatos les resulta placentero amasar, todos parecen estar de acuerdo en que es algo que disfrutan, y tal vez la razón por la que los gatos amasan sea tan simple como eso.
                    </li>
                </ul>
                    {#if visible2 == true}
                    <ul class="list-disc">
                    <li class="text-lg">
                        Amasar para crear un lugar suave para dormir. Otra hipótesis es que los ancestros salvajes de los gatos amasaban la hierba para crear un lugar suave para dormir. Después de todo, los gatos tienden a amasar antes de dormir. Esto, por cierto, es similar a la teoría de que los perros giran en círculos antes de acostarse porque sus ancestros lobos lo hacían para aplanar la hierba en sus lugares de descanso.
                    </li>
                    <li class="text-lg">
                        Amasar para generar alimento Otra creencia, es que amasar es un vestigio de la infancia, cuando los gatitos se amasaban contra su madre mientras mamaban. Una teoría bastante anticuada proclama que los gatos que amasan fueron separados o destetados de su madre demasiado pronto y, por lo tanto, continúan con el comportamiento gatito hasta la edad adulta; sin embargo, casi todos los gatos adultos amasan, independientemente de cómo o cuándo fueron destetados.
                    </li>
                    <li class="text-lg">
                        Amasando para marcar su territorio. Los gatos tienen glándulas odoríferas en sus patas y, cuando un gato amasa, su olor inevitablemente llega a la superficie en la que trabajan sus patas. Los conductistas animales especulan que un gato adulto amasa para mostrar satisfacción, para calmarse cuando se siente ansioso o para marcar a una persona u objeto con el olor de las glándulas sudoríparas de sus patas.
                    </li>
                </ul>
                <p class="font-semibold text-2xl text-lilaTitulo mt-5 mb-2">
                    ¿Cómo evitar que nuestro gato nos lastime al amasar en nuestro regazo?
                 </p>
                 <ul class="list-disc">
                    <li class="text-lg">
                        Mantenga las garras de su gato recortadas (sin cortarlas por debajo de las vivas).
                    </li>
                    <li class="text-lg">
                        Entrénela para que mueva su amasado a otra parte retirándola suavemente de su regazo cada vez que comience.
                    </li>
                    <li class="text-lg">
                        Distráela de amasar acariciándola o dándole un juguete.
                    </li>
                    <li class="text-lg">
                        Déjala en tu regazo sólo una vez que te hayas cubierto con una colcha o manta gruesa.
                    </li>
                </ul>
                <button
                on:click={() => {
                    visible2 = false;
                }}
                class=" bg-lila hover:bg-purple-400 p-2 w-28 my-4 rounded-lg mx-auto block mt-9"
                >Ver menos ☝</button>
                {/if}   
        </div>
        <div class="w-2/5">
            <div class="imgAlimentacion">
                <img src="/assets/gatos-amasando.webp" alt="" />
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
</body>
