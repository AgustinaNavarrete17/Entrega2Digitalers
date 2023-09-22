<script>
	// @ts-ignore
	import Comportamiento from './components/Comportamiento.svelte';
    import { Router, Link, Route } from "svelte-routing";
    import Inicio from "./components/Inicio.svelte";
    import Alimentacion from "./components/Alimentacion.svelte";
    import Salud from "./components/Salud.svelte";
</script>

    <Router>
        <header class="bg-rosa-pastel mb-4">
            <div class="flex">
                <div class="justify-start flex basis-1/3">
                    <img
                        src="/assets/iconMichi2-removebg-preview.png"
                        alt=""
                        width="20%"
                    />
                </div>
                <div class="justify-center flex basis-1/3">
                    <h1 class="text-4xl font-bold justify-center flex mt-7">
                        Mundo Gatuno
                    </h1>
                </div>
             <div class="justify-end flex basis-1/3 mt-10 mr-4">
                 <nav class="space-x-3">
                    <Link to="/Entrega2Digitalerss">Inicio</Link>
                    <Link to="/Alimentacion">Alimentación</Link>
                    <Link to="/Salud">Salud</Link>
                    <Link to="/Comportamiento">Comportamiento</Link>
                  </nav> 
             </div>
            </div>
        </header>
    
          <Route path="/Entrega2Digitalerss"><Inicio /></Route>
          <Route path="/Alimentacion"><Alimentacion /></Route>
          <Route path="/Salud"><Salud /></Route>
          <Route path="/Comportamiento"><Comportamiento /></Route>
          <span id="abajo"></span>
    </Router>

    

