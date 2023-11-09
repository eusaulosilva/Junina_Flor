
function abrirModal(src) {
    document.getElementById('modal-imagem').src = src;
    document.getElementById('modal-container').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal-container').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    // Adiciona ouvintes de evento para abrir o modal quando uma imagem da galeria é clicada
    var galeriaImagens = document.getElementsByClassName('galeria');
    for (var i = 0; i < galeriaImagens.length; i++) {
        galeriaImagens[i].addEventListener('click', function () {
            var src = this.getElementsByTagName('img')[0].src;
            abrirModal(src);
        });
    }

    // Adiciona um ouvinte de evento para fechar o modal quando clicar fora da imagem
    window.addEventListener('click', function (event) {
        if (event.target === document.getElementById('modal-container')) {
            fecharModal();
        }
    });
});
