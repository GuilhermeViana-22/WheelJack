<template>
  <section id="marcas-veiculos" class="relative py-20 bg-gray-900 overflow-hidden">

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Título com estilo premium -->
      <div class="flex flex-col items-center mb-16" data-aos="fade-up">
        <span class="text-sm font-semibold tracking-wider text-red-500 uppercase mb-2">Parcerias de Excelência</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white text-center">
          <span class="relative">
            Marcas que Confiamos
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 mt-3"></span>
          </span>
        </h2>
        <p class="mt-6 text-gray-300 max-w-3xl text-center">
          Trabalhamos exclusivamente com as principais marcas do mercado automotivo, garantindo qualidade, 
          desempenho e segurança em todos os veículos que oferecemos. Cada modelo em nosso catálogo 
          representa o que há de melhor em engenharia automotiva, combinando tecnologia avançada com 
          o compromisso de excelência que essas marcas consagradas oferecem.
        </p>
      </div>

      <!-- Texto sobre as marcas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" data-aos="fade-up">
        <div>
          <h3 class="text-2xl font-bold text-white mb-4">Compromisso com a Qualidade</h3>
          <p class="text-gray-300 mb-4">
            Nossa seleção rigorosa de marcas reflete nosso compromisso em oferecer apenas veículos 
            que atendam aos mais altos padrões de qualidade. Marcas como Ford, Chevrolet e Volkswagen 
            representam décadas de inovação e confiabilidade no setor automotivo.
          </p>
          <p class="text-gray-300">
            Trabalhamos diretamente com as concessionárias oficiais para garantir que cada veículo 
            em nosso estoque mantenha os padrões originais de fábrica, com todas as revisões e 
            manutenções em dia.
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-white mb-4">Tecnologia e Inovação</h3>
          <p class="text-gray-300 mb-4">
            As marcas que representamos estão na vanguarda da tecnologia automotiva, desde motores 
            eficientes até os mais avançados sistemas de segurança e conectividade.
          </p>
          <p class="text-gray-300">
            Seja um utilitário robusto da Ford, um SUV elegante da Chevrolet ou um veículo elétrico 
            de última geração, cada modelo em nosso portfólio traz o melhor que a indústria automotiva 
            tem a oferecer.
          </p>
        </div>
      </div>

      <!-- Carrossel de marcas -->
      <div class="relative overflow-hidden py-6" data-aos="fade-up">
        <div class="flex animate-marquee space-x-12">
          <div v-for="(brand, index) in brands" :key="index" class="brand-item">
            <img
              :src="brand.logo"
              :alt="brand.name"
              class="brand-logo"
              loading="lazy"
            />
            <span class="brand-name">{{ brand.name }}</span>
          </div>
          <!-- Duplicação para efeito contínuo -->
          <div v-for="(brand, index) in brands" :key="'dup-'+index" class="brand-item">
            <img
              :src="brand.logo"
              :alt="brand.name"
              class="brand-logo"
              loading="lazy"
            />
            <span class="brand-name">{{ brand.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        { 
          name: "Ford", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1200px-Ford_logo_flat.svg.png" 
        },
        { 
          name: "Chevrolet", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chevrolet_logo_2013.png/800px-Chevrolet_logo_2013.png" 
        },
        { 
          name: "Volkswagen", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png" 
        },
        { 
          name: "Toyota", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/2048px-Toyota_carlogo.svg.png" 
        },
        { 
          name: "BMW", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" 
        },
        { 
          name: "Mercedes-Benz", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png" 
        },
        { 
          name: "Audi", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/1200px-Audi-Logo_2016.svg.png" 
        },
        { 
          name: "Honda", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png" 
        }
      ]
    }
  },
  async mounted() {
    // Carrega o AOS apenas no cliente
    await import('aos/dist/aos.css');
    const AOS = await import('aos');
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out'
    });
  }
}
</script>

<style scoped>
/* Animação do carrossel */
.animate-marquee {
  animation: marquee 30s linear infinite;
  display: flex;
  width: 200%;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Estilo dos itens de marca */
.brand-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-width: 180px;
}

.brand-logo {
  width: 120px;
  height: 80px;
  object-fit: contain;
  filter: grayscale(100%) brightness(2);
  transition: all 0.3s ease;
}

.brand-item:hover .brand-logo {
  filter: grayscale(0%) brightness(1) drop-shadow(0 0 8px rgba(220, 38, 38, 0.5));
  transform: scale(1.1);
}

.brand-name {
  color: #9CA3AF;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.brand-item:hover .brand-name {
  color: #F3F4F6;
}

/* Responsividade */
@media (max-width: 768px) {
  .brand-item {
    min-width: 140px;
  }
  
  .brand-logo {
    width: 100px;
    height: 60px;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>