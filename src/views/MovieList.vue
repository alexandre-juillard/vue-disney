<script setup>
import {ref} from 'vue';
import {RouterLink} from 'vue-router';

const localCharacters = ref([]);

async function afficherFilms() {
  const reponse    = await fetch("https://api.disneyapi.dev/character");
  const characters = await reponse.json();
  localCharacters.value = characters.data
  console.log(localCharacters.value);
}

afficherFilms();

</script>

<template>
  <div class="container">
  
        <table class="styled-table">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Voir</th>
                </tr>
            </thead> 
            <tbody>
                <tr v-for="perso in localCharacters" :key="perso._id">
                    <td>{{perso._id}}</td>
                    <td>{{perso.name}}</td>
                    <td ><RouterLink :to="{name: 'charDetails', params:{id: perso._id}}">👀</RouterLink></td>
                </tr>
            </tbody>
        </table>

        
    </div>
</template>

<style>
div.container{
    font-family: 'Muli', sans-serif;
	display: flex;
	align-items: center;
}

.styled-table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 920px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;

}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

</style>