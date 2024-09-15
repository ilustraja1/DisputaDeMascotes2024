// Definindo a array de times
const teams = [

  {nome: "Athletico-PR",        likes: 54, comments: 5, shares: 1, image: "imagens/mascotes/Athletico_PR.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Athletico-PR/"},

  {nome: "Atletico-GO",         likes: 42, comments: 4, shares: 2, image: "imagens/mascotes/Atletico_GO.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Atletico-GO/"},
  
  {nome: "Atletico-MG",         likes: 59, comments: 7, shares: 1, image: "imagens/mascotes/Atletico_MG.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Atletico-MG/"},
  
  {nome: "Bahia",               likes: 51, comments: 3, shares: 2, image: "imagens/mascotes/Bahia.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Bahia/"},
  
  {nome: "Botafogo",            likes: 71, comments: 10, shares: 2, image: "imagens/mascotes/Botafogo.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Botafogo/"},
  
  {nome: "Bragantino",          likes: 37, comments: 1, shares: 1, image: "imagens/mascotes/Bragantino.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Bragantino-RB/"},
  
  {nome: "Corinthians",         likes: 56, comments: 7, shares: 2, image: "imagens/mascotes/Corinthians.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Corinthians/"},
  
  {nome: "Criciuma",            likes: 47, comments: 2, shares: 2, image: "imagens/mascotes/Criciuma.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Criciuma/"},
  
  {nome: "Cruzeiro",            likes: 58, comments: 5, shares: 3, image: "imagens/mascotes/Cruzeiro.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Cruzeiro/"},
  
  {nome: "Cuiaba",              likes: 39, comments: 2, shares: 1, image: "imagens/mascotes/Cuiaba.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Cuiaba/"},
  
  {nome: "Flamengo",            likes: 61, comments: 4, shares: 2, image: "imagens/mascotes/Flamengo.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Flamengo/"},
  
  {nome: "Fluminense",          likes: 63, comments: 14, shares: 1, image: "imagens/mascotes/Fluminense.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Fluminense/"},
  
  {nome: "Fortaleza",           likes: 35, comments: 2, shares: 1, image: "imagens/mascotes/Fortaleza.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Fortaleza/"},
  
  {nome: "Gremio",              likes: 69, comments: 41, shares: 1, image: "imagens/mascotes/Gremio.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Gremio/"},
  
  {nome: "Internacional",       likes: 67, comments: 1, shares: 1, image: "imagens/mascotes/Internacional.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Internacional/"},
  
  {nome: "Juventude",           likes: 48, comments: 4, shares: 2, image: "imagens/mascotes/Juventude.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Juventude/"},
  
  {nome: "Palmeiras",           likes: 83, comments: 3, shares: 2, image: "imagens/mascotes/Palmeiras.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Palmeiras/"},
  
  {nome: "Sao-Paulo",           likes: 71, comments: 11, shares: 2, image: "imagens/mascotes/Sao_Paulo.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Sao-Paulo/"},
  
  {nome: "Vasco",               likes: 127, comments: 3, shares: 1, image: "imagens/mascotes/Vasco.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Vasco/"},
  
  {nome: "Vitoria",             likes: 56, comments: 1, shares: 1, image: "imagens/mascotes/Vitoria.png", link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Vitoria/"}
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
    <p class="team-info-comments">Comments: ${team.comments}</p>
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
    <p class="team-info-comments">Comments: ${team.comments}</p>
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
    <p class="team-info-comments">Comments: ${team.comments}</p>
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
    <p class="team-info-comments">Comments: ${team.comments}</p>
    <p class="team-info-shares">Shares: ${team.shares}</p>
  `;
  } 
}

