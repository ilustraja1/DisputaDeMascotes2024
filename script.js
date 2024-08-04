// Definindo a array de times
const teams = [

    {nome: "Athletico-PR",        likes: 30, comments: 2, shares: 1, image: "imagens/mascotes/Athletico_PR.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Athletico-PR/"},

    {nome: "Atletico-GO",         likes: 23, comments: 4, shares: 2, image: "imagens/mascotes/Atletico_GO.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Atletico-GO/"},
    
    {nome: "Atletico-MG",         likes: 36, comments: 5, shares: 1, image: "imagens/mascotes/Atletico_MG.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Atletico-MG/"},
    
    {nome: "Bahia",               likes: 19, comments: 3, shares: 1, image: "imagens/mascotes/Bahia.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Bahia/"},
    
    {nome: "Botafogo",            likes: 25, comments: 4, shares: 1, image: "imagens/mascotes/Botafogo.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Botafogo/"},
    
    {nome: "Bragantino",          likes: 21, comments: 1, shares: 1, image: "imagens/mascotes/Bragantino.png", link:"https://www.instagram.com/p/CqzN6ByMk9n/?hl=pt-br"},
    
    {nome: "Corinthians",         likes: 38, comments: 3, shares: 2, image: "imagens/mascotes/Corinthians.png", link:"https://www.instagram.com/p/CqzNox1MxTs/?hl=pt-br"},
    
    {nome: "Criciuma",            likes: 27, comments: 1, shares: 2, image: "imagens/mascotes/Criciuma.png", link:"https://www.instagram.com/p/CqzNMtssPei/?hl=pt-br"},
    
    {nome: "Cruzeiro",            likes: 33, comments: 4, shares: 2, image: "imagens/mascotes/Cruzeiro.png", link:"https://www.instagram.com/p/CqzM2_ZsiIQ/?hl=pt-br"},
    
    {nome: "Cuiaba",              likes: 25, comments: 1, shares: 1, image: "imagens/mascotes/Cuiaba.png", link:"https://www.instagram.com/p/CqzMsXgM08u/?hl=pt-br"},
    
    {nome: "Flamengo",            likes: 44, comments: 4, shares: 2, image: "imagens/mascotes/Flamengo.png", link:"https://ilustraja1.github.io/ilustraja1-DisputaDeMascotes2024-Flamengo/"},
    
    {nome: "Fluminense",          likes: 39, comments: 4, shares: 1, image: "imagens/mascotes/Fluminense.png", link:"https://www.instagram.com/p/CqzMNTosrVf/?hl=pt-br"},
    
    {nome: "Fortaleza",           likes: 24, comments: 1, shares: 1, image: "imagens/mascotes/Fortaleza.png", link:"https://www.instagram.com/p/CqzMB5VsQKT/?hl=pt-br"},
    
    {nome: "Gremio",              likes: 42, comments: 2, shares: 1, image: "imagens/mascotes/Gremio.png", link:"https://www.instagram.com/p/CqzLyi3sz2x/?hl=pt-br"},
    
    {nome: "Internacional",       likes: 36, comments: 1, shares: 1, image: "imagens/mascotes/Internacional.png", link:"https://www.instagram.com/p/CqzLirOskoR/?hl=pt-br"},
    
    {nome: "Juventude",           likes: 25, comments: 2, shares: 2, image: "imagens/mascotes/Juventude.png", link:"https://www.instagram.com/p/CqzLTzlsN-y/?hl=pt-br"},
    
    {nome: "Palmeiras",           likes: 48, comments: 2, shares: 2, image: "imagens/mascotes/Palmeiras.png", link:"https://www.instagram.com/p/CqzLCGZsjAX/?hl=pt-br"},
    
    {nome: "Sao-Paulo",           likes: 52, comments: 4, shares: 2, image: "imagens/mascotes/Sao_Paulo.png", link:"https://www.instagram.com/p/CqzKxgXMPRS/?hl=pt-br"},
    
    {nome: "Vasco",               likes: 89, comments: 3, shares: 2, image: "imagens/mascotes/Vasco.png", link:"https://www.instagram.com/p/CqzKdb-sCxv/?hl=pt-br"},
    
    {nome: "Vitoria",             likes: 39, comments: 1, shares: 1, image: "imagens/mascotes/Vitoria.png", link:"https://www.instagram.com/p/CqzKMDNMHJX/?hl=pt-br"}
  ];
  
  // Ordenando os times pelo critério de desempate (Likes, Coments, Shares)
  teams.sort((a, b) => {
    if (a.likes !== b.likes) {
      return b.likes - a.likes;
    } else if (a.comments !== b.comments) {
      return b.comments - a.comments;
    } else {
      return b.shares - a.shares;
    }
  });
  
  // Selecionando os elementos das posições do ranking
  const colocado01 = document.getElementById('colocado-01');
  const colocado02 = document.getElementById('colocado-02');
  const colocado03 = document.getElementById('colocado-03');
  const colocado04 = document.getElementById('colocado-04');
  const colocado05 = document.getElementById('colocado-05');
  const colocado06 = document.getElementById('colocado-06');
  const colocado07 = document.getElementById('colocado-07');
  const colocado08 = document.getElementById('colocado-08');
  const colocado09 = document.getElementById('colocado-09');
  const colocado10 = document.getElementById('colocado-10');
  const colocado11 = document.getElementById('colocado-11');
  const colocado12 = document.getElementById('colocado-12');
  const colocado13 = document.getElementById('colocado-13');
  const colocado14 = document.getElementById('colocado-14');
  const colocado15 = document.getElementById('colocado-15');
  const colocado16 = document.getElementById('colocado-16');
  const colocado17 = document.getElementById('colocado-17');
  const colocado18 = document.getElementById('colocado-18');
  const colocado19 = document.getElementById('colocado-19');
  const colocado20 = document.getElementById('colocado-20');
  
  // Preenchendo as informações de cada posição do ranking
  colocado01.innerHTML = generateListItem(1, teams[0]);
  colocado02.innerHTML = generateListItem(2, teams[1]);
  colocado03.innerHTML = generateListItem(3, teams[2]);
  colocado04.innerHTML = generateListItem(4, teams[3]);
  colocado05.innerHTML = generateListItem(5, teams[4]);
  colocado06.innerHTML = generateListItem(6, teams[5]);
  colocado07.innerHTML = generateListItem(7, teams[6]);
  colocado08.innerHTML = generateListItem(8, teams[7]);
  colocado09.innerHTML = generateListItem(9, teams[8]);
  colocado10.innerHTML = generateListItem(10, teams[9]);
  colocado11.innerHTML = generateListItem(11, teams[10]);
  colocado12.innerHTML = generateListItem(12, teams[11]);
  colocado13.innerHTML = generateListItem(13, teams[12]);
  colocado14.innerHTML = generateListItem(14, teams[13]);
  colocado15.innerHTML = generateListItem(15, teams[14]);
  colocado16.innerHTML = generateListItem(16, teams[15]);
  colocado17.innerHTML = generateListItem(17, teams[16]);
  colocado18.innerHTML = generateListItem(18, teams[17]);
  colocado19.innerHTML = generateListItem(19, teams[18]);
  colocado20.innerHTML = generateListItem(20, teams[19]);
  
  // Função para gerar o conteúdo de cada <li>
  function generateListItem(position, team) {
    if (position == 1){
      return `
    
      <img class="gold-medal" src="imagens/medalha-de-ouro.png" />
      <a href="${team.link}" >
        <img src="${team.image}" alt="${team.nome}" class="team-image">
      </a>
      <!--<p class="team-info">Nome: ${team.nome}</p>-->
      <p class="team-info-likes">Likes: ${team.likes}</p>
      <p class="team-info-comments">Coments: ${team.comments}</p>
      <p class="team-info-shares">Shares: ${team.shares}</p>
    `;
    }
    else if(position == 2){
      return `
    
      <img class="silver-medal" src="imagens/medalha-de-prata.png" />
      <a href="${team.link}" >
        <img src="${team.image}" alt="${team.nome}" class="team-image">
      </a>
      <!--<p class="team-info">Nome: ${team.nome}</p>-->
      <p class="team-info-likes">Likes: ${team.likes}</p>
      <p class="team-info-comments">Coments: ${team.comments}</p>
      <p class="team-info-shares">Shares: ${team.shares}</p>
    `;
    }
    else if(position == 3){
      return `
    
      <img class="bronze-medal" src="imagens/medalha-de-bronze.png" />
      <a href="${team.link}" >
        <img src="${team.image}" alt="${team.nome}" class="team-image">
      </a>
      <!--<p class="team-info">Nome: ${team.nome}</p>-->
      <p class="team-info-likes">Likes: ${team.likes}</p>
      <p class="team-info-comments">Coments: ${team.comments}</p>
      <p class="team-info-shares">Shares: ${team.shares}</p>
    `;
    }
    else{
      return `
    
      <p class="team-position">${position}º</p>
      <a href="${team.link}" >
        <img src="${team.image}" alt="${team.nome}" class="team-image">
      </a>
      <!--<p class="team-info">Nome: ${team.nome}</p>-->
      <p class="team-info-likes">Likes: ${team.likes}</p>
      <p class="team-info-comments">Coments: ${team.comments}</p>
      <p class="team-info-shares">Shares: ${team.shares}</p>
    `;
    } 
  }
  
