// 1. Rolagem Suave para os Links do Menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o salto brusco padrão
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Ativa o efeito suave
                block: 'start'
            });
        }
    });
});

// 2. Criar e Funcionar o Botão de Modo Escuro
// Cria o botão dinamicamente via JS
const botaoDark = document.createElement('button');
botaoDark.innerText = 'Alternar Modo Escuro';

// Estiliza o botão rapidamente
botaoDark.style.position = 'fixed';
botaoDark.style.bottom = '20px';
botaoDark.style.right = '20px';
botaoDark.style.padding = '10px 15px';
botaoDark.style.backgroundColor = '#1e4629';
botaoDark.style.color = 'white';
botaoDark.style.border = 'none';
botaoDark.style.borderRadius = '20px';
botaoDark.style.cursor = 'pointer';
botaoDark.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
botaoDark.style.fontWeight = 'bold';
botaoDark.style.zIndex = '1000'; // Garante que o botão fique na frente de tudo

// Adiciona o botão ao corpo do site
document.body.appendChild(botaoDark);

// Função que muda as cores do site ao clicar
botaoDark.addEventListener('click', () => {
    const body = document.body;
    const artigos = document.querySelectorAll('article');
    const aside = document.querySelector('aside');

    // Se estiver no modo claro, muda para o escuro, e vice-versa
    if (body.style.backgroundColor === 'rgb(41, 43, 44)') {
        // Modo Claro
        body.style.backgroundColor = '#f4f7f6';
        body.style.color = '#333';
        artigos.forEach(art => art.style.backgroundColor = 'white');
        if (aside) aside.style.backgroundColor = '#e2ebd5';
        botaoDark.style.backgroundColor = '#1e46
