<template>
    <div>
      <!-- WhatsApp Button -->
      <div
        v-show="showChat"
        @click="openChat"
        class="whatsapp-btn fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
      >
        <i class="fab fa-whatsapp fa-2x"></i>
      </div>
  
      <!-- Chat Box -->
      <div
        v-show="showForm"
        class="chat-box fixed bottom-24 right-6 bg-white p-6 rounded-lg shadow-xl w-72"
      >
        <h3 class="text-xl font-semibold mb-4">Como podemos te ajudar?</h3>
        <textarea
          v-model="message"
          rows="4"
          class="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Escreva sua mensagem..."
        ></textarea>
        <button
          @click="sendMessage"
          class="w-full bg-green-500 text-white py-2 rounded-md"
        >
          Enviar
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showChat = ref(true); // Para mostrar o ícone do WhatsApp
  const showForm = ref(false); // Para mostrar o formulário de chat
  const message = ref(''); // Armazena a mensagem digitada pelo usuário
  
  // Função para abrir o formulário de chat
  const openChat = () => {
    showForm.value = true; // Exibe o formulário
  };
  
  // Função para enviar a mensagem para o WhatsApp
  const sendMessage = () => {
    if (message.value.trim()) {
      const phoneNumber = '5511999999999'; // Substitua com o número de WhatsApp desejado
      const encodedMessage = encodeURIComponent(message.value); // Codifica a mensagem
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank'); // Abre o WhatsApp no navegador
      message.value = ''; // Limpa o campo de mensagem após o envio
      showForm.value = false; // Fecha o formulário após enviar
    } else {
      alert('Por favor, digite uma mensagem.');
    }
  };
  </script>
  
  <style scoped>
  /* Botão flutuante do WhatsApp */
  .whatsapp-btn {
    position: fixed;
    bottom: 6rem;
    right: 1.5rem;
    z-index: 1000;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  
  .whatsapp-btn:hover {
    transform: scale(1.1);
  }
  
  /* Caixa de chat */
  .chat-box {
    position: fixed;
    bottom: 6rem;
    right: 1.5rem;
    z-index: 999;
    display: none; /* Escondido por padrão */
  }
  
  .chat-box.show {
    display: block; /* Exibe o formulário */
  }
  
  .w-72 {
    width: 18rem;
  }
  
  textarea {
    resize: none;
  }
  
  /* Animação para o botão asdasdasdasd*/
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  .whatsapp-btn:hover {
    animation: bounce 0.5s ease-in-out infinite;
  }
  </style>
  