<template>
    <div id="contact">
      <h2>Me contacter</h2>
      <form>
        <label>
          Nom
          <input type="text" name="name" id="sendername">
        </label>
        <label>
          Prénom
          <input type="text" name="prenom" id="senderfirstname">
        </label>
        <label>
          Adresse  e-mail
          <input type="text" name="email" id="senderemail">
        </label>
        <label>
          Message
          <input type="submit" name="email" value="envoyer">
        </label>
          <textarea name="" id="message"></textarea>
      </form>
    </div>
</template> 

<script setup>
document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;

    console.log('Nom:', nom);
    console.log('Prénom:', prénom);
    console.log('Email:', email);
  });

</script>

<style scoped>
h2 {
  color: black;
  background-color: #00b9b1;
}

.contact {
  width: 94.5%;
  display: flex;
  justify-content: space-between;
  margin: auto 5px;
  padding: 3rem;
  line-height: 1.5;
}
</style>