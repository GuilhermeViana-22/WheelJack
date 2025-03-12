<template>
    <div class="grid grid-cols-1 md:grid-cols-2 items-center p-6 gap-6">
      <!-- Logo -->
      <div class="flex justify-center md:justify-start">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Logo" 
          class="w-32 h-auto md:w-48"
        />
      </div>
  
      <!-- Texto -->
      <div class="text-center md:text-left">
        <h1 class="text-4xl font-bold text-gray-800">Arte Nobre Service</h1>
        <p class="mt-2 text-lg text-gray-600">A <strong>Arte Nobre Service </strong>é uma empresa especializada na venda e instalação de assoalhos, tacos, decks e forros, oferecendo soluções de alto padrão para residências, empresas e espaços comerciais. Nosso compromisso é garantir qualidade, durabilidade e sofisticação em cada projeto, utilizando materiais nobres e técnicas avançadas de instalação.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResponsiveLogoText'
  };
  </script>
  
  <style scoped>
  /* Aqui você pode adicionar estilos específicos, mas o Tailwind já cuida da maior parte */
  </style>
  