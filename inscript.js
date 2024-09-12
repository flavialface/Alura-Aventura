const avanca = documento.querySelectorA11('.btn-proximo');

avanca.forEach(button => { 
    button.addEventiListener('clik', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
