<template>
  <div class="relative w-full bg-black py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center text-white mb-12">
        <h1 class="text-5xl font-extrabold text-red-700 mb-4">
          Encontre Seu Próximo Carro
        </h1>
        <p class="text-lg text-gray-400">
          Explore nossa seleção premium de veículos esportivos, SUVs e sedans de luxo.
        </p>
      </div>
      <div class="bg-gradient-to-br from-black to-gray-900 p-8 rounded-xl shadow-2xl border border-red-900 backdrop-blur-lg bg-opacity-80">
        <form class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input type="text" placeholder="Marca ou Modelo" class="w-full py-3 px-4 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-700 transition-all duration-300 transform hover:scale-105" />
          <select class="w-full py-3 px-4 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-700 transition-all duration-300 transform hover:scale-105">
            <option>Selecione o Ano</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <button type="submit" class="w-full py-3 px-4 bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-800 shadow-lg hover:shadow-2xl">
            Buscar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleSearchForm',
};
</script>

<style scoped>
body {
  background-color: #0d0d0d;
}

/* Efeito premium 2025 */
input, select, button {
  transition: all 0.3s ease-in-out;
  border-radius: 1.5rem;
}

input:hover, select:hover, button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(255, 0, 0, 0.8);
}
</style>