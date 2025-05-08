<template>
  <section id="ofertas-veiculos" class="relative py-20 bg-gray-900 overflow-hidden">
 
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Título com estilo premium -->
      <div class="flex flex-col items-center mb-16" data-aos="fade-up">
        <span class="text-sm font-semibold tracking-wider text-red-500 uppercase mb-2">Ofertas Exclusivas</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white text-center">
          <span class="relative">
            Destaques da Semana
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 mt-3"></span>
          </span>
        </h2>
        <p class="mt-6 text-gray-300 max-w-3xl text-center">
          Confira nossos veículos em destaque com condições especiais. Todos os modelos passam por rigorosa 
          inspeção técnica e estão prontos para entrega imediata.
        </p>
      </div>

      <!-- Grid de veículos em destaque -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card de veículo -->
        <div 
          v-for="(vehicle, index) in featuredVehicles"
          :key="vehicle.id"
          class="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="100 + (index * 50)"
        >
          <!-- Badge de oferta -->
          <div class="absolute top-4 left-4 z-10">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white">
              Oferta Especial
            </span>
          </div>

          <!-- Imagem do veículo -->
          <div class="h-64 overflow-hidden">
            <img 
              :src="vehicle.image" 
              :alt="vehicle.model" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
          </div>

          <!-- Informações do veículo -->
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold text-white">{{ vehicle.brand }} {{ vehicle.model }}</h3>
              <span class="text-sm font-medium text-red-400">{{ vehicle.year }}</span>
            </div>

            <div class="flex flex-wrap gap-2 mb-4">
              <span class="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300">
                <svg class="w-3 h-3 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ vehicle.mileage }} km
              </span>
              <span class="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300">
                <svg class="w-3 h-3 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ vehicle.transmission }}
              </span>
              <span class="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300">
                <svg class="w-3 h-3 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                {{ vehicle.fuel }}
              </span>
            </div>

            <div class="flex items-center justify-between mt-4">
              <div>
                <span class="text-sm text-gray-400 line-through mr-2" v-if="vehicle.originalPrice">{{ vehicle.originalPrice }}</span>
                <span class="text-2xl font-bold text-red-500">{{ vehicle.price }}</span>
              </div>
              <button 
                @click="openModal(vehicle)"
                class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Detalhes
              </button>
            </div>
          </div>

          <!-- Efeito hover -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div>
              <h4 class="text-white font-bold mb-1">{{ vehicle.brand }} {{ vehicle.model }}</h4>
              <p class="text-gray-300 text-sm mb-3">{{ vehicle.description }}</p>
              <button 
                @click="openModal(vehicle)"
                class="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Ver Oferta
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal de detalhes do veículo -->
      <transition name="fade">
        <div v-if="modalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeModal"></div>
          
          <div class="relative bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700">
            <!-- Imagens do veículo -->
            <div class="h-96 bg-gray-900 overflow-hidden relative">
              <img 
                :src="selectedVehicle?.image" 
                :alt="selectedVehicle?.model" 
                class="w-full h-full object-cover"
              >
              <button 
                @click="closeModal"
                class="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <!-- Detalhes do veículo -->
            <div class="p-8">
              <div class="flex flex-col lg:flex-row gap-8">
                <div class="lg:w-2/3">
                  <h3 class="text-3xl font-bold text-white mb-2">{{ selectedVehicle?.brand }} {{ selectedVehicle?.model }}</h3>
                  <p class="text-gray-300 mb-6">{{ selectedVehicle?.fullDescription }}</p>
                  
                  <div class="grid grid-cols-2 gap-4 mb-8">
                    <div class="bg-gray-700/50 p-4 rounded-lg">
                      <span class="block text-sm text-gray-400 mb-1">Ano</span>
                      <span class="text-lg font-medium text-white">{{ selectedVehicle?.year }}</span>
                    </div>
                    <div class="bg-gray-700/50 p-4 rounded-lg">
                      <span class="block text-sm text-gray-400 mb-1">Quilometragem</span>
                      <span class="text-lg font-medium text-white">{{ selectedVehicle?.mileage }} km</span>
                    </div>
                    <div class="bg-gray-700/50 p-4 rounded-lg">
                      <span class="block text-sm text-gray-400 mb-1">Câmbio</span>
                      <span class="text-lg font-medium text-white">{{ selectedVehicle?.transmission }}</span>
                    </div>
                    <div class="bg-gray-700/50 p-4 rounded-lg">
                      <span class="block text-sm text-gray-400 mb-1">Combustível</span>
                      <span class="text-lg font-medium text-white">{{ selectedVehicle?.fuel }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="lg:w-1/3">
                  <div class="bg-gray-700/30 border border-gray-700 rounded-xl p-6">
                    <h4 class="text-xl font-bold text-white mb-4">Valor</h4>
                    <div class="mb-4">
                      <span class="text-sm text-gray-400 line-through" v-if="selectedVehicle?.originalPrice">{{ selectedVehicle?.originalPrice }}</span>
                      <span class="block text-3xl font-bold text-red-500">{{ selectedVehicle?.price }}</span>
                    </div>
                    
                    <div class="space-y-4">
                      <button 
                        @click="contactWhatsApp"
                        class="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                      >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Falar com Consultor
                      </button>
                      
                      <button 
                        @click="scheduleTestDrive"
                        class="w-full py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                      >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Agendar Test Drive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OfertasVeiculos',
  data() {
    return {
      modalOpen: false,
      selectedVehicle: null,
      featuredVehicles: [
        {
          id: 1,
          brand: 'BMW',
          model: 'Série 3',
          year: '2022',
          price: '45.990 €',
          originalPrice: '49.990 €',
          mileage: '12.500',
          transmission: 'Automático',
          fuel: 'Gasolina',
          description: 'Série 3 em excelente estado, com apenas um ano de uso e garantia de fábrica.',
          fullDescription: 'O BMW Série 3 2022 é a combinação perfeita entre desempenho e luxo. Com motor 2.0 TwinPower Turbo de 255cv, este veículo oferece uma experiência de condução esportiva com o conforto que só a BMW pode proporcionar. Inclui pacote M Sport, teto solar panorâmico, bancos em couro Dakota e sistema de navegação profissional com tela de 10.25".',
          image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          brand: 'Audi',
          model: 'Q5',
          year: '2021',
          price: '39.990 €',
          originalPrice: '42.500 €',
          mileage: '18.200',
          transmission: 'Automático',
          fuel: 'Diesel',
          description: 'SUV premium com acabamento em couro e sistema de navegação completo.',
          fullDescription: 'O Audi Q5 2021 é um SUV médio que combina elegância, tecnologia e desempenho. Equipado com motor 2.0 TDI de 190cv e câmbio S tronic de 7 velocidades, oferece ótimo consumo sem abrir mão do desempenho. O interior conta com acabamento em couro Valcona, bancos elétricos com memória, sistema MMI Navigation plus com tela de 8.3" e teto solar panorâmico.',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 3,
          brand: 'Tesla',
          model: 'Model 3',
          year: '2023',
          price: '49.990 €',
          mileage: '5.000',
          transmission: 'Automático',
          fuel: 'Elétrico',
          description: 'Elétrico com autonomia de 500km, carregamento rápido e tecnologia avançada.',
          fullDescription: 'O Tesla Model 3 2023 é o sedan elétrico que redefine o conceito de mobilidade. Com autonomia de 491km (WLTP), aceleração de 0-100km/h em apenas 4.4 segundos e tecnologia de ponta, incluindo piloto automático avançado e tela touchscreen central de 15". O carro vem com acesso supercharger gratuito por 1 ano e garantia de 8 anos ou 160.000km para a bateria.',
          image: 'https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  },
  methods: {
    openModal(vehicle) {
      this.selectedVehicle = vehicle;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    contactWhatsApp() {
      const phone = "5511999999999";
      const message = `Olá, gostaria de mais informações sobre o ${this.selectedVehicle.brand} ${this.selectedVehicle.model} (${this.selectedVehicle.year}) anunciado por ${this.selectedVehicle.price}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    },
    scheduleTestDrive() {
      const phone = "5511999999999";
      const message = `Olá, gostaria de agendar um test drive para o ${this.selectedVehicle.brand} ${this.selectedVehicle.model}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
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
/* Efeitos personalizados */
.group:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(220, 38, 38, 0.15);
}

/* Animação fade-in */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Transições suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Efeitos de hover */
.group:hover .bg-gradient-to-t {
  opacity: 1;
}

.group:hover img {
  transform: scale(1.05);
}

/* Scrollbar personalizada para modal */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
}
</style>