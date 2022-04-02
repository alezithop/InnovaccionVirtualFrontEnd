<template>
    <div>
        <h1>Realiza tu Pedido</h1>
        <form action="pedido.js">
            <h2>Datos personales</h2>
            <label for="Nombre">Danos tu Nombre, Delicios@</label><br>
            <input type="text" placeholder="Nombre" name="Nombre" id="Nombre">

            <br><br>

            <label for="Telefono">Indica tu número de Teléfono a 10 dígitos:</label><br>
            <input type="tel" name="Telefono" id="Telefono" placeholder="1112223333">

            <br><br>

            <label for="Email">E-email</label><br>
            <input type="email" name="Email" id="Email" placeholder="tucorreo@dominio.com">

            <br><br>

            <label for="Notas">Notas</label><br>
            <textarea name="Notas" id="Notas" cols="30" rows="10"></textarea>

            <hr>
            <h2>Detalles del pedido</h2>

            <p>¿De qué sabor será tu pastel?</p>
            <input type="checkbox" id="tresleches" name="tresleches" value="tresleches">
            <label for="tresleches">3 Leches</label><br>
            <input type="checkbox" id="tiramisu" name="tiramisu" value="tiramisu">
            <label for="tiramisu">Tiramisú</label><br>
            <input type="checkbox" id="elote" name="elote" value="elote">
            <label for="elote">Elote</label><br>
            <input type="checkbox" name="selvanegra" id="selvanegra" value="selvanegra">
            <label for="selvanegra">Selva Negra</label><br>
            <input type="checkbox" name="cheesecake" id="cheesecake" value="cheesecake">
            <label for="cheesecake">Cheese Cake</label><br>
            <input type="checkbox" name="zanahoria" id="zanahoria" value="zanahoria">
            <label for="zanahoria">Zanahoria</label><br>
            <input type="checkbox" name="frutas" id="frutas" value="frutas">
            <label for="frutas">Frutas</label><br>
            <input type="checkbox" name="naranja" id="naranja" value="naranja">
            <label for="naranja">Naranja</label><br>
            <input type="checkbox" name="vainilla" id="vainilla" value="vainilla">
            <label for="vainilla">Vainilla</label><br>
            <input type="checkbox" name="chocolate" id="chocolate" value="chocolate">
            <label for="chocolate">Chocolate</label><br>

            <p>Adornos que puedes incluir, selecciona los que desees así como la cantidad.</p>
            <input type="checkbox" id="velascumple" name="velascumple" value="velascumple">
            <label for="velascumple">Velas de Cumpleaños</label>
            <input type="number" id="velascumpleCuantos" name="velascumpleCuantos" placeholder="Cantidad:"><br>
            <input type="checkbox" id="cerpentinas" name="cerpentinas" value="cerpentinas">
            <label for="cerpentinas">Cerpentinas</label>
            <input type="number" id="cerpentinasCuantos" name="cerpentinasCuantos" placeholder="Cantidad:"><br>
            <input type="checkbox" id="figurasfondant" name="figurasfondant" value="figurasfondant">
            <label for="figurasfondant">Fondant con forma de figuras (indicar en las notas las figuras que se
                desean)</label>
            <input type="number" id="figurasfondantCuantos" name="figurasfondantCuantos" placeholder="Cantidad:"><br>
            <input type="checkbox" name="figurasplastico" id="figurasplastico" value="figurasplastico">
            <label for="figurasplastico">Figuras de plastico</label>
            <input type="number" id="figurasplasticoCuantos" name="figurasplasticoCuantos" placeholder="Cantidad:"><br>

            <input type="reset" value="Limpiar selecciones">
            <input type="submit" value="Enviar pedido">
            <br><br>
        </form>
    </div>
</template>

<script>
export default {
    // Revisar el ejemplo del Mission Commander para formularios: https://github.com/LaunchX-InnovaccionVirtual/FrontEnd-Mision/blob/main/05%20-%20VUEJS/programas/VUEX/components/ColorCode.vue
    name: "FormularioPedido"
}
</script>