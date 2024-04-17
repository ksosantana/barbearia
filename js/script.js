document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector('.video');
    var imagem = document.querySelector('.imagem-tabela');

    if (video.canPlayType) {
        // O navegador suporta a reprodução de vídeo
        video.style.display = 'block'; // Exibe o vídeo
        imagem.style.display = 'none'; // Esconde a imagem
    } else {
        // O navegador não suporta a reprodução de vídeo
        video.style.display = 'none'; // Esconde o vídeo
        imagem.style.display = 'block'; // Exibe a imagem
    }
});
