function carregaCurriculo() {
    var curriculos = {
        CV01: {
            nome: "Dados Pessoais",
            imagem: "https://cdn-icons-png.flaticon.com/256/4392/4392501.png",
            descrição: "Paulista - 34 anos. Inquieta, curiosa, leitora, cinéfila. Sempre fui reconhecida pela minha memória e organização, muito provavelmente serei aquela pessoa que lembrará qual é o nome da linha 128 do Excel do evento do ano passado. Hoje em transição de carreira, de produção de eventos para a área de tecnologia, mais precisamente em programação front end e desenvolvimento web.",
        },

        CV02: {
            nome: "Estudos",
            imagem: "https://cdn-icons-png.flaticon.com/256/4359/4359757.png",
            descrição: "Graduada Bacharel em Turismo na UFSCar; Curso Técnico de Museologia e Produção Cultural na ETEC Centro Paula Souza; Curso Livre de Escrita Criativa com Lourenço Mutarelli no Sesc Avenida Paulista e Curso Online Front End 01 e 02 na PrograMaria.",
        },

        CV03: {
            nome: "Experiência Profissional",
            imagem: "https://cdn-icons-png.flaticon.com/256/4433/4433143.png",
            descrição: "Experiências em hotelaria, operadora de viagens nacionais e internacionais e eventos esportivos, incluindo a Copa do Mundo do Brasil de 2014. Há 07 anos e atualmente na área de eventos corporativos focada em pré-produção, logística e facilites.",

        },

        CV04: {
            nome: "Hard Skills",
            imagem: "https://cdn-icons-png.flaticon.com/256/4359/4359739.png",
            descrição: "Inglês, Excel, Power Point, Word, HTLM, CSS e JavaScript.",

        },

        CV05: {
            nome: "Soft Skills",
            imagem: "https://cdn-icons-png.flaticon.com/256/4359/4359796.png",
            descrição: "Comunicação Eficaz, Criatividade, Resiliência, Colaboração, Flexibilidade e Inteligência Emocional.",
        },

        CV06: {
            nome: "Canais de Contato",
            imagem: "https://cdn-icons-png.flaticon.com/256/4359/4359958.png",
            descrição: 'Endereço: Centro, São Paulo/SP, entre em contato comigo via Whatsapp, E-mail ou Linkedin.',
        }

    };

    var content = document.getElementById("content");
    for (var cv in curriculos) {
        content.innerHTML +=
            '<div class="card">' +
            '<img src="' + curriculos[cv].imagem + '"/>' +
            '<details>' +
            '<summary>' + curriculos[cv].nome + '</summary>' +
            '<p>' + curriculos[cv].descrição + '</p>' +
            '</details>' +
            '</div>'

    }
}

carregaCurriculo(); 
