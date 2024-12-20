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
function messageSent() {
  alert("Formulaire enbvoyé !");
}
</script>

<style scoped>
h2 {
  display: block;
  justify-content: center;
  text-align: center;
  color: black;
  background-color: #00b9b1;
  padding: 0.2rem;
}

.contact {
  width: 94.5%;
  display: inline-block;
  justify-content: center;
  margin: auto 5px;
  padding: 1.5rem;
  line-height: 1.5;
}
</style>