function carregaCurriculo(){
    var curriculos={
    CV01:{
        nome:"Dados Pessoais",
        imagem:"https://cdn-icons-png.flaticon.com/256/4392/4392501.png",
        descrição:"Paulista - 34 anos. Inquieta, curiosa, leitora, cinéfila. Fui sempre lembrada pela minha memória e organização, então eu vou ser aquela pessoa que lembra qual é o nome da linha 128 do Excel do evento do ano passado. Hoje em transição de carreira, de produção de eventos para a área de tecnologia, mais precisamente em programação front end e desenvolvimento web.",
    },

CV02:{
    nome:"Estudos",
    imagem:"https://cdn-icons-png.flaticon.com/256/4359/4359757.png",
    descrição:"Graduada Bacharel em Turismo UFSCar, Curso Técnico de Museologia e Produção Cultural ETEC Centro Paula Souza , Curso Livre de Escrita Criativa com Lourenço Mutarelli Sesc Avenida Paulista e Curso Online Front End 01 e 02 PrograMaria.", 
},

CV03:{
    nome:"Experiência Profissional", 
    imagem:"https://cdn-icons-png.flaticon.com/256/4433/4433143.png", 
    descrição:"Experiências em hotelaria, operadora de viagens nacionais e internacionais e eventos esportivos, incluindo a Copa do Mundo do Brasil de 2014. Há 07 anos e atualmente na área de eventos corporativos focada em pré-produção, logística e facilites.",

},

CV04:{
    nome:"Hard Skills",
    imagem:"https://cdn-icons-png.flaticon.com/256/4359/4359739.png",
    descrição:"Inglês, Excel, Power Point, Word, HTLM,CSS e JavaScript.",

},

CV05:{
    nome:"Soft Skills", 
    imagem:"https://cdn-icons-png.flaticon.com/256/4359/4359796.png",
    descrição:"Comunicação Eficaz, Criatividade, Resiliência, Flexibilidade, Colaboração, Flexibilidade e Inteligência Emocional.",
},

CV06:{
    nome:"Canais de Contato", 
    imagem:"https://cdn-icons-png.flaticon.com/256/4359/4359958.png ",
    descrição:"Endereço: Rua Martins Fontes, 390, Centro, São Paulo/SP, Whatsapp: 11 97096 6826,  E-mail: mairafguimaraes@gmail.com, Linkedin:https://www.linkedin.com/in/mairafguimaraes/ ,  Github: https://github.com/mairafguimaraes.", 
    },

}; 

var content = document.getElementById ("content");
for (var cv in curriculos){
    content.innerHTML +=
    '<div class="card">'+
    '<img src="' + curriculos[cv].imagem + '"/>' +
    '<details>' +
    '<summary>' + curriculos[cv].nome + '</summary>' +
    '<p>' +curriculos[cv].descrição + '</p>'+
    '</details>'+
    '</div>'

}
}

carregaCurriculo(); 