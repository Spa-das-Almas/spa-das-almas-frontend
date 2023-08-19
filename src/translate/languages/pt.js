import { MdDescription } from "react-icons/md";

const messages = {
  pt: {
    translations: {
      slogan: "O Seu lugar em Monte Verde",
      select: {
        title: "Selecione o idioma",
      },
      items: {
        home: "Página inicial",
        cottage: "Chalés",
        location: "Localização",
        leisure: "Lazer",
        book: "Reservar",
        services: "Serviços",
      },
      book: {
        check_in: "Entrada",
        check_out: "Saída",
        adults: {
          name: "Adultos",
          one: "1 Adulto",
          two: "2 Adultos",
          three: "3 Adultos",
          for: "4 Adultos",
          five: "5 Adultos",
          six: "6 Adultos",
          seven: "7 Adultos",
          eight: "8 Adultos",
          nine: "9 Adultos",
          ten: "10 Adultos",
        },
        childrens: {
          name: "Crianças",
          zero: "0 Crianças",
          one: "1 Criança",
          two: "2 Crianças",
          three: "3 Crianças",
          for: "4 Crianças",
          five: "5 Crianças",
          six: "6 Crianças",
          seven: "7 Crianças",
          eight: "8 Crianças",
          nine: "9 Crianças",
          ten: "10 Crianças",
          eleven: "11 Crianças",
        },
        submit: "Consultar valores",
      },
      review: {
        from: "review retirado do",
        first: `Amamos a privacidade do chalé, a roupa de cama, a cama, banheiro, banheira, decoração, amenities, chuveiro. Todos os funcionários atenderam-nos super bem, foram prestativos, educados e sempre prontos para qualquer solicitação. Todos de parabéns!`,
        second: `Ambiente muito agradável, tranquilo, limpo e muito bem organizado. Os funcionários são excelentes e muito educados e prestativos. Com certeza voltaria mais vezes.`,
        tertiary: `Muito bom o atendimento. Tirando todas as minhas dúvidas. Muito bom o atendimento. Os funcionários sempre muito atenciosos e auxiliando em tudo que precisávamos.`,
        quartenary: `Atendimento ótimo! Todos os funcionários super prestativos e atenciosos! Parabéns pela equipe! Muito limpo, organizado e tudo novinho! Pretendo voltar mais vezes para aproveitar mais.`,
        quinary: `Amamos o chalé, super confortável, aconchegante e quentinho.`,
      },
      titles: {
        reviews: "O que os nossos hóspedes comentam",
        facilities: "Conheça nossas instalações",
        services: "Serviços",
        location: {
          name: "Localização",
          description:
            "Saindo de São Paulo, utilize a Rod. Fernão Dias (BR-381) sentido Belo Horizonte. Após a Divisa SP/MG siga por mais 30Km passando pelas cidades de Extrema e Itapeva e entrando em Camanducaia para acessar a estrada Camanducaia/M.Verde de 29Km montanha acima. No Km 13 aproximadamente haverá uma ponte. Após esta ponte entre na segunda à direita e siga por mais 17 Km até o até o portal da Cidade Após chegar ao portal, siga pela avenida Monte Verde, que é a continuação da estrada, até a praça do Bradesco. Você pode seguir em frente, contornando a curva em subida á direita no restaurante Chalana na Rua da Represa e seguindo em frente até uma bifurcação onde você deverá subir a esquerda até chegar na pousada Hospedagem Spa da Alma, que fica no final desta rua! Estamos na Rua da Represa, 1477. ",
        },
        differentials: "Nossos diferenciais",
      },
      paragraphs: {
        see_more: "Veja mais",
        see_less: "Veja menos",
      },
      differentials: {
        breakfast: {
          primary: "Café da manhã",
          secundary: "servido no quarto",
        },
        wifi: "Wifi grátis",
        massages: "Massagens",
        pet: "Pet-Friendly",
        fast_checkout: "Fast Checkout",
      },
      footer: {
        social_media: "Nossas redes sociais",
        contact_us: "Entre em contato",
      },
      cottage: {
        name: "Chalé",
        description_title: "Descrição do chalé",
        martigny: {
          name: "martigny",
          description:
            "Decoração estilo rústico e artesanal,  todo envidraçado com vista privilegiada  para a montanha e o pôr do sol.  Sistema de calefação de ambiente e ar condicionado.  Cama kingsize com enxoval de 1000 fios e toalhas felpudas.  Espaço da lareira com sofá-cama grande e Smart TV 4K, com home theater.  Mini cozinha com cooktop, pia, frigobar, microondas,  utensílios básicos, aparelho para fondue e cafeteira Nespresso.  Banheira com hidromassagem para até 3 pessoas e teto solar.  O banheiro com piso aquecido e toalheiro térmico, lavatórios e duchas duplas. Ambiente com escrivaninha e cadeira de escritório. Internet por fibra óptica. ",
        },
        chamonix: {
          name: "chamonix",
          description:
            "Uma suíte ou dois quartos com sala de jantar, lareira e cozinha americana, banheiro com ofurô, lavabo e vista para o bosque de araucárias e pinheiros. ",
        },
        mont_blanc: {
          name: "mont blanc",
          description:
            "Uma Suíte com  hidromassagem dupla no quarto, banheiro e deck panorâmico privativo com vista para o bosque. ",
        },
        monviso: {
          name: "monviso",
          description:
            "Chalé com cinco quartos, que acomodam até doze Pessoas, de frente para a piscina, sala de jantar, sala com lareira e sala de jogos. ",
        },
        cheverny: {
          name: "cheverny",
          description:
            "Uma Suíte com  hidromassagem dupla no quarto, banheiro e baywindow com vista para o pôr-do-sol. ",
        },
        charmey: {
          name: "charmey",
          description:
            "Uma Suíte com  hidromassagem dupla no quarto, banheiro e baywindow com vista para o pôr-do-sol. ",
        },
      },
      leisure: {
        ofuro: {
          name: "Ofurô",
          description:
            "Com hidro e deck privativo em área externa. Nosso ofurô comporta até quarto pessoas, fica situado em local alto com fantástica vista para o pôr-do-sol e possui um deck privativo. A sessão de 1:30h pode ser agendada pelos hóspedes e possui custo adicional devido ao custo operacional (troca da água, higienização, aquecimento etc). Tanto o ofurô quanto seu deck privativo ficam isolados e dedicados ao hóspede que o reserva.",
        },
        pool: {
          name: "Piscina",
          description:
            "Não climatizada e deck para banho de sol de livre acesso a todos os nossos hóspedes. Parte da piscina é rasa (75cm) e a outra parte é funda (2m). Nossa piscina não é vigiada e crianças devem estar acompanhadas de adultos a todo o momento.",
        },
        sauna: {
          name: "Sauna seca e ducha sueca",
          description:
            "Nossa sauna seca fica próxima à piscina e recepção. Hóspedes interessados podem agendar o horário em que desejam utilizar a sauna de forma a prepararmos a mesma de acordo. A utilização da sauna é livre, sem custo extra para nossos hóspedes.",
        },
        woodland: {
          name: "Bosque, fauna e flora",
          description:
            "São 11000m2 de muito verde, pássaros, esquilos e uma linda paisagem do horizonte montanhoso. Acordar pela manhã ao som dos pássaros e do vento entre as árvores “lava” a alma. Caminhar pelo bosque requer cuidados dado a inclinação, mas certamente bem recompensado ao descansar em nosso lindo banco estrategicamente posicionado e construído artesanalmente por nossos funcionários.",
        },
        fireplace: {
          name: "Fogueira ao ar livre",
          description:
            "O que acha de iniciar a noite sob o céu estrelado ao redor da lareira confraternizando com quem gostamos e degustando um bom vinho? Nossa lareira externa fica próxima do chalé Monviso e da piscina e pode ser utilizada por todos os hóspedes.",
        },
      },
    },
  },
};

export { messages };
