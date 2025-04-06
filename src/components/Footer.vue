<template>
  <footer class="footer relative overflow-hidden">
    <!-- Imagem de fundo do assoalho de madeira -->
    <div class="absolute inset-0 z-0">
      <img 
        src="../assets/arquivos/wood-floor-background.jpg" 
        alt="Assoalho de madeira" 
        class="w-full h-full object-cover opacity-20"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/90"></div>
    </div>

    <div class="container relative z-10">
      <div class="footer-content">
        <!-- Logo e informações da empresa -->
        <div class="company-info">
          <div class="logo mb-4">
            <img src="../assets/arquivos/logo-white.png" alt="Arte Nobre Logo" class="logo-img w-40" />
          </div>
          <p class="company-description text-white/80">
            A Arte Nobre Services se destaca pela excelência, oferecendo soluções personalizadas com profissionalismo e compromisso para garantir a satisfação dos clientes.
          </p>
        </div>

        <!-- Links rápidos -->
        <div class="footer-links">
          <h3 class="text-white font-bold mb-4 text-lg">Links rápidos</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-white/70 hover:text-white transition-colors">Início</router-link></li>
            <li><router-link to="/servicos" class="text-white/70 hover:text-white transition-colors">Serviços</router-link></li>
            <li><router-link to="/produtos" class="text-white/70 hover:text-white transition-colors">Produtos</router-link></li>
            <li><router-link to="/contato" class="text-white/70 hover:text-white transition-colors">Contato</router-link></li>
          </ul>
        </div>

        <!-- Informações de contato -->
        <div class="footer-links">
          <h3 class="text-white font-bold mb-4 text-lg">Contato</h3>
          <ul class="space-y-2">
            <li class="text-white/70 flex items-start">
              <svg class="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              (XX) XXXX-XXXX
            </li>
            <li class="text-white/70 flex items-start">
              <svg class="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              contato@artenobre.com
            </li>
            <li class="text-white/70 flex items-start">
              <svg class="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Av. Exemplo, 123 - Cidade/UF
            </li>
          </ul>
        </div>

        <!-- Redes sociais -->
        <div class="footer-links">
          <h3 class="text-white font-bold mb-4 text-lg">Redes sociais</h3>
          <div class="social-icons flex space-x-4">
            <a href="#" class="text-white/70 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
            <a href="#" class="text-white/70 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.15.353.137.882.3 1.857.344 1.023.047 1.351.058 1.679.058 3.807v.468c0 2.456-.011 2.784-.058 3.807-.045.975-.207 1.504-.344 1.857-.182.467-.4.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041v-.08c0-2.597.01-2.917.058-3.96.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.041-.058h.08c2.597 0 2.917.01 3.96.058.976.045 1.505.207 1.858.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041v.08c0 2.597-.01 2.917-.058 3.96-.045.976-.207 1.505-.344 1.858-.182.467-.4.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041v-.08c0-2.597.01-2.917.058-3.96.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.041-.058h.08z"></path>
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm4.5-6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </a>
            <a href="#" class="text-white/70 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Selos e formas de pagamento -->
      <div class="footer-bottom border-t border-white/10 pt-8 mt-8">
        <div class="certificates">
          <h3 class="text-white font-bold mb-4 text-lg">Selos de qualidade</h3>
          <div class="certificate-logos flex flex-wrap gap-4">
            <img src="../assets/footer/google-badge.png" alt="Google Certificate" class="certificate-img h-12" />
            <!-- Adicione mais selos conforme necessário -->
          </div>
        </div>

        <div class="payment-methods mt-6">
          <h3 class="text-white font-bold mb-4 text-lg">Formas de pagamento</h3>
          <div class="payment-logos flex flex-wrap gap-3">
            <img src="../assets/footer/visa-svgrepo-com.svg" alt="Visa" class="payment-img h-8" />
            <img src="../assets/footer/mastercard-svgrepo-com.svg" alt="Mastercard" class="payment-img h-8" />
            <img src="../assets/footer/hipercard-svgrepo-com.svg" alt="Hipercard" class="payment-img h-8" />
            <img src="../assets/footer/amex-svgrepo-com.svg" alt="American Express" class="payment-img h-8" />
            <img src="../assets/footer/elo-3-svgrepo-com.svg" alt="Elo" class="payment-img h-8" />
            <img src="../assets/footer/pix-svgrepo-com.svg" alt="Pix" class="payment-img h-8" />
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright border-t border-white/10 pt-6 mt-8 text-center text-white/70 text-sm">
        <p>© 2025 Arte Nobre Service. Todos os direitos reservados.</p>
        <p class="mt-1">Desenvolvido por <span class="text-white font-medium">Guilherme Viana</span></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Nenhum script adicional necessário para este componente
</script>

<style scoped>
.footer {
  background-color: #111;
  padding: 4rem 0 2rem;
  position: relative;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.company-info {
  max-width: 300px;
}

.logo-img {
  filter: brightness(0) invert(1);
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

.social-icons a {
  transition: transform 0.3s ease;
}

.social-icons a:hover {
  transform: translateY(-3px);
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
}
</style>