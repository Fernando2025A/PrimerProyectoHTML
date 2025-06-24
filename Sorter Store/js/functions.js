function HideAll()
{
   document.getElementById("pr").style.display = "none";
}

function Recargar()
{
   let dineroRecargado = prompt("¿Cuánto quiere recargar? (Puede recargar hasta $20, mínimo $5 por recarga)");
   

   if (dineroRecargado != null)
   {
      if (dineroRecargado >= 5)
      {
         if (dineroRecargado <= maxRecarga)
         {
            dinero+=parseInt(dineroRecargado);
           document.getElementById("dinero").textContent = "$" + dinero;
           maxRecarga-=dineroRecargado;
         }
         else
         {
            alert("El máximo que aún puedes recargar es de: " + maxRecarga);
         }
      }
      else
      {
        alert("¡El monto mínimo es de $5!");
      }
   }
   else
   {
      alert("Campo vacío");
   }
}