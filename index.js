const html = document.querySelector('html');
const buttons = document.querySelector('.buttons');

//função para trocar classe assim que houver mudança na seleção;
buttons.addEventListener('change',function(){
    html.removeAttribute('class');//remove o atributo classe para limpar classe anterior
    html.classList.toggle(buttons.value)//adicionar a classe recebida na mudança do botão
})


 