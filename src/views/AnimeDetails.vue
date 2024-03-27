<script setup>
<<<<<<< HEAD:src/views/MoviesDetails.vue
=======

>>>>>>> ea13c14d09ca189587f693ed2ac2d9afa5788390:src/views/AnimeDetails.vue

</script>

<template>
  <div>
        <div class="film-container">
            <div class="film">
                <div class="film-preview" >
<<<<<<< HEAD:src/views/MoviesDetails.vue
                    <img src='https://static.wikia.nocookie.net/disney/images/3/31/Profile_-_Baloo.jpeg' alt='char' />
                </div>
                <div class="film-info">
                    <h2>Baloo</h2>
                    <span>Tous les films []</span>
=======
                    <img src='https://cdn.myanimelist.net/images/anime/4/19644.jpg' alt='affiche' />
                </div>
                <div class="film-info">
                    <h2>Title</h2>
                    <h6>Release Date</h6>
                    <span>description</span>
>>>>>>> ea13c14d09ca189587f693ed2ac2d9afa5788390:src/views/AnimeDetails.vue
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.film-container {
    font-family: 'Muli', sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
    color:black;
	flex-direction: column;
}

.film {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 700px;
}

.film h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.film h2 {
	letter-spacing: 1px;
	margin: 10px 0;
}

.film-preview {
    background-color: #009879;
	color: #fff;
	padding: 30px;
	max-width: 250px;
}
.film-preview img{
    max-height:250px;
}
.film-preview a {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

.film-info {
	padding: 30px;
	position: relative;
	width: 100%;
}
</style>
