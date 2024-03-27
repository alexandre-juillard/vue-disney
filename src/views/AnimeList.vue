<script setup>
<<<<<<< HEAD:src/views/MoviesList.vue
=======

>>>>>>> ea13c14d09ca189587f693ed2ac2d9afa5788390:src/views/AnimeList.vue

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
                <tr >
<<<<<<< HEAD:src/views/MoviesList.vue
                    <td>ID</td>
                    <td>Name</td>
                    <td ><a href=''>👀</a></td>
=======
                    <td>id</td>
                    <td>anime title</td>
                    <td>Data</td>
                    <td >👀</td>
>>>>>>> ea13c14d09ca189587f693ed2ac2d9afa5788390:src/views/AnimeList.vue
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
