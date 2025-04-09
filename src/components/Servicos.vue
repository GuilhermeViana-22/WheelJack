<template>
  <section id="servicos" class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Cabeçalho estilizado -->
      <div class="flex flex-col items-center mb-16">
        <span class="text-sm font-semibold tracking-wider text-[#6e451d] uppercase mb-2">O que fazemos</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          <span class="relative">
            Nossos Serviços
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#183614] mt-2"></span>
          </span>
        </h2>
      </div>

      <!-- Grid de serviços -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services"
          :key="index"
          class="service-card relative overflow-hidden rounded-xl bg-gray-50 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          :data-index="index"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
        >
          <!-- Skeleton loader -->
          <div 
            v-if="!service.loaded && !service.error"
            class="skeleton-loader w-full h-72 bg-gradient-to-r from-gray-200 via-[#6e451d]/10 to-gray-200 animate-pulse"
          ></div>

          <!-- Imagem -->
          <img
            v-show="service.loaded && !service.error"
            :src="service.image"
            :alt="service.title"
            class="service-image w-full h-72 object-cover transition-all duration-500"
            :class="{ 
              'scale-105': activeIndex === index,
              'brightness-90': activeIndex === index
            }"
            @load="handleImageLoad(index)"
            @error="handleImageError(index)"
            loading="lazy"
          />

          <!-- Fallback para erro -->
          <div 
            v-if="service.error"
            class="w-full h-72 bg-gradient-to-br from-[#183614]/10 to-[#6e451d]/10 flex items-center justify-center"
          >
            <svg class="w-12 h-12 text-[#6e451d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>

          <!-- Overlay de informações -->
          <div 
            class="service-overlay absolute inset-0 bg-gradient-to-t from-[#183614]/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex items-end p-6"
            :class="{ 'opacity-100': activeIndex === index }"
          >
            <div class="transform translate-y-4 transition-transform duration-300" :class="{ 'translate-y-0': activeIndex === index }">
              <h3 class="text-xl font-bold text-white mb-2">{{ service.title }}</h3>
              <p class="text-gray-200 text-sm">
                <span v-if="activeIndex === index" class="inline-block bg-[#6e451d] text-white text-xs px-2 py-1 rounded mb-1">Serviço Premium</span><br>
                <template v-if="index % 3 === 0">
                  Qualidade certificada e resultados excepcionais
                </template>
                <template v-else-if="index % 3 === 1">
                  Tempo de entrega recorde no mercado
                </template>
                <template v-else>
                  Excelência comprovada em cada projeto
                </template>
              </p>
              <div v-if="activeIndex === index" class="mt-2 flex items-center">
                <svg class="w-4 h-4 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span class="text-white text-xs">5.0 (100% satisfação)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importe suas imagens diretamente (se estiver usando Vue CLI ou Vite)
import img1 from '../assets/arquivos/1.png'
import img2 from '../assets/arquivos/2.png'
import img3 from '../assets/arquivos/3.png'
import img4 from '../assets/arquivos/4.png'
import img5 from '../assets/arquivos/5.png'
import img6 from '../assets/arquivos/6.png'

export default {
  name: 'ServicosGallery',
  data() {
    return {
      activeIndex: null,
      services: [
        {
          title: 'Assoalhos Nobres',
          description: 'Instalação profissional de assoalhos de madeira de alta qualidade',
          image: img1, // Usando a importação direta
          loaded: false,
          error: false
        },
        {
          title: 'Decks Personalizados',
          description: 'Criação de decks sob medida para áreas externas',
          image: img2,
          loaded: false,
          error: false
        },
        {
          title: 'Tacos Artesanais',
          description: 'Tacos de madeira maciça com acabamento perfeito',
          image: img3,
          loaded: false,
          error: false
        },
        {
          title: 'Forros Elegantes',
          description: 'Forros em madeira para um acabamento sofisticado',
          image: img4,
          loaded: false,
          error: false
        },
        {
          title: 'Painéis Decorativos',
          description: 'Painéis de madeira para divisórias e revestimentos',
          image: img5,
          loaded: false,
          error: false
        },
        {
          title: 'Acabamentos Finos',
          description: 'Serviços de lixamento e aplicação de vernizes ecológicos',
          image: img6,
          loaded: false,
          error: false
        }
      ],
      observers: []
    }
  },
  methods: {
    handleImageLoad(index) {
      this.services[index].loaded = true
      this.services[index].error = false
    },
    handleImageError(index) {
      this.services[index].error = true
      this.services[index].loaded = false
    },
    handleMouseEnter(index) {
      this.activeIndex = index
    },
    handleMouseLeave() {
      this.activeIndex = null
    },
    initIntersectionObserver() {
      if (typeof window === 'undefined') return

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      const callback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index
            setTimeout(() => {
              if (!this.services[index].loaded && !this.services[index].error) {
                this.services[index].loaded = true
              }
            }, 150 * index)
          }
        })
      }

      this.observers = []
      const cards = document.querySelectorAll('.service-card')
      if (cards) {
        cards.forEach(card => {
          const observer = new IntersectionObserver(callback, options)
          observer.observe(card)
          this.observers.push(observer)
        })
      }
    },
    animateCards() {
      if (typeof window === 'undefined') return

      const cards = document.querySelectorAll('.service-card')
      if (cards) {
        cards.forEach((card, index) => {
          card.style.opacity = '0'
          card.style.transform = 'translateY(20px)'
          card.style.transition = `all 0.5s ease ${index * 0.1}s`
          
          setTimeout(() => {
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
          }, 100)
        })
      }
    }
  },
  mounted() {
    this.animateCards()
    this.initIntersectionObserver()
    
    // Verifica se AOS está disponível (caso esteja usando)
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        once: true,
        duration: 800
      })
    }
  },
  beforeUnmount() {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => {
        observer.disconnect()
      })
    }
  }
}
</script>

<style scoped>
.service-card {
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform;
}

.service-image {
  transform-origin: center;
  backface-visibility: hidden;
}

.service-overlay {
  will-change: opacity, transform;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-card {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 0.8; }
  100% { opacity: 0.6; }
}

.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background-size: 200% 100%;
}

.service-card,
.service-image,
.service-overlay {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Efeito de gradiente sutil no hover */
.service-card:hover .service-image:not(.error) {
  filter: brightness(0.95);
}
</style>