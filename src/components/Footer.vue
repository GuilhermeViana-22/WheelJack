<template>
  <footer class="footer relative overflow-hidden bg-black">
    <!-- Conteúdo principal do footer -->
    <div class="container relative z-10 pb-16">

        <!-- Logo e informações da empresa -->
   <!-- Logo e informações da concessionária -->
   <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <div class="logo mb-6">
            <span class="text-3xl font-bold text-red-600">FUEL</span>
            <p class="text-gray-400 mt-2 text-sm">Concessionária Premium de Veículos</p>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            A FUEL é referência em veículos premium, oferecendo as melhores marcas com atendimento personalizado e condições exclusivas.
          </p>
        </div>

        <!-- Links rápidos -->
        <div>
          <h3 class="text-white font-bold mb-6 text-lg uppercase tracking-wider">Menu</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-red-600 transition-colors duration-300 flex items-center">
                <span class="inline-block w-2 h-2 bg-red-600 mr-2 rounded-full"></span>
                Veículos Novos
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-red-600 transition-colors duration-300 flex items-center">
                <span class="inline-block w-2 h-2 bg-red-600 mr-2 rounded-full"></span>
                Veículos Usados
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-red-600 transition-colors duration-300 flex items-center">
                <span class="inline-block w-2 h-2 bg-red-600 mr-2 rounded-full"></span>
                Financiamento
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-red-600 transition-colors duration-300 flex items-center">
                <span class="inline-block w-2 h-2 bg-red-600 mr-2 rounded-full"></span>
                Contato
              </a>
            </li>
          </ul>
        </div>

        <!-- Contato -->
        <div>
          <h3 class="text-white font-bold mb-6 text-lg uppercase tracking-wider">Contato</h3>
          <ul class="space-y-4">
            <li class="text-gray-400 flex items-start group">
              <div class="icon-container mr-3 mt-0.5">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p>(11) 9999-9999</p>
                <p class="text-xs text-gray-500">Seg-Sex: 9h-18h</p>
              </div>
            </li>
            <li class="text-gray-400 flex items-start group mt-4">
              <div class="icon-container mr-3 mt-0.5">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span>contato@fuelveiculos.com.br</span>
            </li>
            <li class="text-gray-400 flex items-start group mt-4">
              <div class="icon-container mr-3 mt-0.5">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <span>Av. das Automóveis, 1234 - São Paulo/SP</span>
            </li>
          </ul>
        </div>

        <!-- Redes sociais -->
        <div>
          <h3 class="text-white font-bold mb-6 text-lg uppercase tracking-wider">Redes Sociais</h3>
          <div class="social-icons flex space-x-4 mb-6">
            <a href="#" class="social-icon bg-gray-800 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
            <a href="#" class="social-icon bg-gray-800 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041v-.08c0-2.597.01-2.917.058-3.96.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.041-.058h.08c2.597 0 2.917.01 3.96.058.976.045 1.505.207 1.858.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041v.08c0 2.597-.01 2.917-.058 3.96-.045.976-.207 1.505-.344 1.858-.182.467-.4.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041v-.08c0-2.597.01-2.917.058-3.96.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.041-.058h.08z"></path>
              </svg>
            </a>
            <a href="#" class="social-icon bg-gray-800 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
          
          <div class="opening-hours">
            <h4 class="text-white font-semibold mb-2">Horário de Funcionamento</h4>
            <p class="text-gray-400 text-sm">Segunda a Sexta: 09:00 às 18:00</p>
            <p class="text-gray-400 text-sm">Sábado: 09:00 às 14:00</p>
          </div>
        </div>
      </div>

      <!-- Selos e formas de pagamento -->
      <div class="footer-bottom border-t border-white/10 pt-8 mt-8">
        <div class="flex flex-col md:flex-row justify-between gap-8">
          <div class="certificates">
            <h3 class="text-white font-bold mb-4 text-lg">Selos de qualidade</h3>
            <div class="certificate-logos flex flex-wrap gap-4">
              <img src="../assets/footer/google-badge.png" alt="Google Certificate" class="certificate-img h-12" />
              <!-- Adicione mais selos conforme necessário -->
            </div>
          </div>

          <div class="payment-methods">
            <h3 class="text-white font-bold mb-4 text-lg">Formas de pagamento</h3>
            <div class="payment-logos flex flex-wrap gap-3">
  <img src="../assets/footer/visa-svgrepo-com.svg" alt="Visa" class="payment-img h-8" />
  <img src="../assets/footer/mastercard-svgrepo-com.svg" alt="Mastercard" class="payment-img h-8" />
  <img src="../assets/footer/hipercard-svgrepo-com.svg" alt="Hipercard" class="payment-img h-8" />
  <img src="../assets/footer/amex-svgrepo-com.svg" alt="American Express" class="payment-img h-8" />
  <img src="../assets/footer/elo-3-svgrepo-com.svg" alt="Elo" class="payment-img h-8" />
  
  <!-- SVG Pix inline, mesmo tamanho das outras logos -->
  <div class="payment-img h-8 w-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="h-full w-auto">
      <path fill="#37c6d0" d="M19.262,44.037l-8.04-8.04L11,35l-1.777-1.003l-5.26-5.26c-2.617-2.617-2.617-6.859,0-9.475	l5.26-5.26L11,13l0.223-0.997l8.04-8.04c2.617-2.617,6.859-2.617,9.475,0l8.04,8.04L37,13l1.777,1.003l5.26,5.26	c2.617,2.617,2.617,6.859,0,9.475l-5.26,5.26L37,35l-0.223,0.997l-8.04,8.04C26.121,46.653,21.879,46.653,19.262,44.037z"></path>
      <path d="M35.79,11.01c-1.76,0.07-3.4,0.79-4.63,2.04l-6.81,6.77c-0.09,0.1-0.22,0.15-0.35,0.15s-0.25-0.05-0.35-0.15l-6.8-6.76c-1.24-1.26-2.88-1.98-4.64-2.05L8.22,15h3.68c0.8,0,1.55,0.31,2.12,0.88l6.8,6.78c0.85,0.84,1.98,1.31,3.18,1.31s2.33-0.47,3.18-1.31l6.79-6.78C34.55,15.31,35.3,15,36.1,15h3.68L35.79,11.01z M36.1,33c-0.8,0-1.55-0.31-2.12-0.88l-6.8-6.78c-0.85-0.84-1.98-1.31-3.18-1.31s-2.33,0.47-3.18,1.31l-6.79,6.78C13.45,32.69,12.7,33,11.9,33H8.22l3.99,3.99c1.76-0.07,3.4-0.79,4.63-2.04l6.81-6.77c0.09-0.1,0.22-0.15,0.35-0.15s0.25,0.05,0.35,0.15l6.8,6.76c1.24,1.26,2.88,1.98,4.64,2.05L39.78,33H36.1z" opacity=".05"></path>
      <path d="M36.28,11.5H36.1c-1.74,0-3.38,0.68-4.59,1.91l-6.8,6.77c-0.19,0.19-0.45,0.29-0.71,0.29s-0.52-0.1-0.71-0.29l-6.79-6.77c-1.22-1.23-2.86-1.91-4.6-1.91h-0.18l-3,3h3.18c0.93,0,1.81,0.36,2.48,1.02l6.8,6.78c0.75,0.76,1.75,1.17,2.82,1.17s2.07-0.41,2.82-1.17l6.8-6.77c0.67-0.67,1.55-1.03,2.48-1.03h3.18L36.28,11.5z M36.1,33.5c-0.93,0-1.81-0.36-2.48-1.02l-6.8-6.78c-0.75-0.76-1.75-1.17-2.82-1.17s-2.07,0.41-2.82,1.17l-6.8,6.77c-0.67,0.67-1.55,1.03-2.48,1.03H8.72l3,3h0.18c1.74,0,3.38-0.68,4.59-1.91l6.8-6.77c0.19-0.19,0.45-0.29,0.71-0.29s0.52,0.1,0.71,0.29l6.79,6.77c1.22,1.23,2.86,1.91,4.6,1.91h0.18l3-3H36.1z" opacity=".07"></path>
      <path fill="#fff" d="M38.78,14H36.1c-1.07,0-2.07,0.42-2.83,1.17l-6.8,6.78c-0.68,0.68-1.58,1.02-2.47,1.02s-1.79-0.34-2.47-1.02l-6.8-6.78C13.97,14.42,12.97,14,11.9,14H9.22l2-2h0.68c1.6,0,3.11,0.62,4.24,1.76l6.8,6.77c0.59,0.59,1.53,0.59,2.12,0l6.8-6.77C32.99,12.62,34.5,12,36.1,12h0.68L38.78,14z M36.1,34c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l2,2h0.68c1.6,0,3.11-0.62,4.24-1.76l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36h0.68l2-2H36.1z"></path>
    </svg>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright e links inferiores -->
    <div class="copyright-bar bg-black py-4 relative z-20 border-t border-white/10">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-white/70 text-sm text-center md:text-left">
          © 2025 Arte Nobre Service. Todos os direitos reservados.
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#" class="text-white/70 hover:text-white text-sm transition-colors duration-300">Política de Privacidade</a>
          <span class="text-white/30">|</span>
          <a href="#" class="text-white/70 hover:text-white text-sm transition-colors duration-300">Termos de Uso</a>
          <span class="text-white/30">|</span>
          <div class="text-white/70 text-sm">
            Desenvolvido por <span class="text-white font-medium">Guilherme Viana</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Imagem de fundo do assoalho de madeira APÓS o conteúdo -->
    <div class="wood-background absolute w-full h-32 bottom-0 left-0 z-0">
      <img 
        src="../assets/arquivos/wood-floor-background.png" 
        alt="Assoalho de madeira" 
        class="w-full h-full object-cover object-top opacity-40"
      />
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
  padding-top: 5rem;
  position: relative;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.wood-background {
  pointer-events: none;
  user-select: none;
}


.company-description {
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  transition: color 0.3s ease;
}

.social-icon {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.social-icon:hover {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .company-info {
    max-width: 100%;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 2rem;
  }
  
  .wood-background {
    height: 24px;
  }
}

/* Efeitos de hover avançados */
.icon-container {
  position: relative;
}

.icon-container::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}

.icon-container:hover::after {
  opacity: 1;
  transform: scale(1.2);
}
</style>