<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Logo and company description -->
          <div class="company-info">
            <div class="logo">
              <!-- <img src="/logo.svg" alt="Arte Nobre Logo" class="logo-img" /> -->
               logo
            </div>
            <p class="company-description">
              A Arte Nobre Services se destaca pela excelência, oferecendo soluções personalizadas com profissionalismo e compromisso para garantir a satisfação dos clientes.
            </p>
          </div>
  
          <!-- Quick links -->
          <div class="footer-links">
            <h3>Links rápidos</h3>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Produtos</a></li>
            </ul>
          </div>
  
          <!-- Terms and policies -->
          <div class="footer-links">
            <h3>Termos de Serviços</h3>
            <ul>
              <li><a href="#">Política de privacidade</a></li>
            </ul>
          </div>
  
          <!-- Social networks -->
          <div class="footer-links">
            <h3>Redes</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
  
        <!-- Certificates and payment methods -->
        <div class="footer-bottom">
          <div class="certificates">
            <h3>Selos e certificados</h3>
            <div class="certificate-logos">
              <!-- <img src="/google-badge.svg" alt="Google Certificate" class="certificate-img" /> -->
              logo
            </div>
          </div>
  
          <div class="payment-methods">
            <h3>Formas de pagamento</h3>
            <div class="payment-logos">
              <!-- <img src="/visa.svg" alt="Visa" class="payment-img" />
              <img src="/mastercard.svg" alt="Mastercard" class="payment-img" />
              <img src="/hipercard.svg" alt="Hipercard" class="payment-img" />
              <img src="/amex.svg" alt="American Express" class="payment-img" />
              <img src="/elo.svg" alt="Elo" class="payment-img" />
              <img src="/pix.svg" alt="Pix" class="payment-img" /> -->
            </div>
          </div>
        </div>
  
        <!-- Copyright and credits -->
        <div class="copyright">
          <p>© 2025 Arte Nobre Service. Todos os direitos reservados.</p>
          <p>Desenvolvido por <span class="developer">Guilherme Viana</span></p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // No additional script needed for this component
  </script>
  
  <style scoped>
  .footer {
    background-color: #fff;
    padding: 3rem 0 1.5rem;
    font-family: 'Arial', sans-serif;
    color: #666;
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .company-info {
    max-width: 300px;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .logo-img {
    width: 100px;
    height: auto;
  }
  
  .company-description {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .footer-links h3 {
    color: #333;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links li {
    margin-bottom: 0.5rem;
  }
  
  .footer-links a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: #000;
  }
  
  .footer-bottom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }
  
  .certificates h3,
  .payment-methods h3 {
    color: #333;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .certificate-logos,
  .payment-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }
  
  .certificate-img {
    height: 40px;
    width: auto;
  }
  
  .payment-img {
    height: 30px;
    width: auto;
  }
  
  .copyright {
    border-top: 1px solid #eee;
    padding-top: 1.5rem;
    text-align: left;
    font-size: 0.85rem;
  }
  
  .developer {
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
    }
    
    .footer-bottom {
      grid-template-columns: 1fr;
    }
  }
  </style>