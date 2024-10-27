// Definindo a array de times
const teams = [

  {nome: "Athletico-PR",
   likes_insta:   28, likes_tiktok:   24, likes_youtube:   10, likes_twitter:    2, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 3, comments_youtube: 1, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Athletico_PR.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Athletico-PR/"},

  
  {nome: "Atletico-GO",         
   likes_insta:   24, likes_tiktok:   14, likes_youtube:    6, likes_twitter:    4, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 4, comments_youtube: 0, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   1, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Atletico_GO.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Atletico-GO/"},
  
  
  {nome: "Atletico-MG",         
    likes_insta:   41, likes_tiktok:   31, likes_youtube:   12, likes_twitter:    1, likes_facebook:    1, likes_threads:    0, 
    comments_insta: 0, comments_tiktok: 6, comments_youtube: 0, comments_twitter: 1, comments_facebook: 0, comments_threads: 0, 
                                                                shares_twitter:   0, shares_facebook:   1, shares_threads:   0,

   image: "imagens/mascotes/Atletico_MG.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Atletico-MG/"},
  
  
  {nome: "Bahia",               
   likes_insta:   22, likes_tiktok:   11, likes_youtube:   28, likes_twitter:    3, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 1, comments_tiktok: 3, comments_youtube: 1, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0, 
   image: "imagens/mascotes/Bahia.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Bahia/"},
  
  
  {nome: "Botafogo",            
    likes_insta:   30, likes_tiktok:   25, likes_youtube:   43, likes_twitter:    2, likes_facebook:    1, likes_threads: 0, 
    comments_insta: 3, comments_tiktok: 7, comments_youtube: 2, comments_twitter: 1, comments_facebook: 0, comments_threads: 0, 
                                                                shares_twitter:   0, shares_facebook:   2, shares_threads: 0, 
   image: "imagens/mascotes/Botafogo.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Botafogo/"},
  
 
  {nome: "Bragantino",          
   likes_insta:   19, likes_tiktok:   14, likes_youtube:    9, likes_twitter:    1, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 1, comments_youtube: 0, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Bragantino.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Bragantino-RB/"},
  
 
  {nome: "Corinthians",         
   likes_insta:   19, likes_tiktok:   21, likes_youtube:   21, likes_twitter:    1, likes_facebook:    1, likes_threads:    0, 
   comments_insta: 2, comments_tiktok: 5, comments_youtube: 1, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   2, shares_threads:   0,
   image: "imagens/mascotes/Corinthians.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Corinthians/"},
  
 
  {nome: "Criciuma",          
  likes_insta:   14, likes_tiktok:   31, likes_youtube:   11, likes_twitter:    1, likes_facebook:    0, likes_threads:    0, 
  comments_insta: 0, comments_tiktok: 3, comments_youtube: 0, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                              shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Criciuma.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Criciuma/"},
  

  {nome: "Cruzeiro",          
    likes_insta:   26, likes_tiktok:   23, likes_youtube:   21, likes_twitter:    2,    likes_facebook: 3,    likes_threads: 0, 
    comments_insta: 0, comments_tiktok: 7, comments_youtube: 5, comments_twitter: 0, comments_facebook: 1, comments_threads: 0, 
                                                                shares_twitter:   1,   shares_facebook: 2,   shares_threads: 0, 
   image: "imagens/mascotes/Cruzeiro.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Cruzeiro/"},
  

  {nome: "Cuiaba",           
   likes_insta:   19, likes_tiktok:   13, likes_youtube:    7, likes_twitter:    3, likes_facebook:    1, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 2, comments_youtube: 0, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Cuiaba.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Cuiaba/"},
  
 
  {nome: "Flamengo",     
   likes_insta:   19, likes_tiktok:   27, likes_youtube:   19, likes_twitter:    2, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 4, comments_youtube: 1, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Flamengo.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Flamengo/"},
  

  {nome: "Fluminense",      
   likes_insta:   27, likes_tiktok:    26, likes_youtube:   16, likes_twitter:    3, likes_facebook:    2, likes_threads:    0, 
   comments_insta: 4, comments_tiktok: 10, comments_youtube: 0, comments_twitter: 0, comments_facebook: 1, comments_threads: 0, 
                                                                shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Fluminense.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Fluminense/"},
  

  {nome: "Fortaleza",        
   likes_insta:   19, likes_tiktok:   13, likes_youtube:    9, likes_twitter:    2, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 1, comments_youtube: 1, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0, 
   image: "imagens/mascotes/Fortaleza.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Fortaleza/"},
  

  {nome: "Gremio",        
   likes_insta:   25, likes_tiktok:    33, likes_youtube:   21, likes_twitter:    4, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 2, comments_tiktok: 44, comments_youtube: 0, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                                shares_twitter:   0, shares_facebook:   1, shares_threads:   0,

   image: "imagens/mascotes/Gremio.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Gremio/"},
  

  {nome: "Internacional",    
   likes_insta:   29, likes_tiktok:   26, likes_youtube:   15, likes_twitter:    2, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 1, comments_youtube: 0, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Internacional.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Internacional/"},
  

  {nome: "Juventude",      
   likes_insta:   23, likes_tiktok:   22, likes_youtube:    5, likes_twitter:    2, likes_facebook:    1, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 2, comments_youtube: 0, comments_twitter: 1, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Juventude.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Juventude/"},
  

  {nome: "Palmeiras",       
   likes_insta:   29, likes_tiktok:   47, likes_youtube:   18, likes_twitter:    2, likes_facebook:    1, likes_threads:    1, 
   comments_insta: 1, comments_tiktok: 4, comments_youtube: 2, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Palmeiras.png",
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Palmeiras/"},
  

  {nome: "Sao-Paulo",       
   likes_insta:   33, likes_tiktok:   33, likes_youtube:   12, likes_twitter:    3, likes_facebook:    2, likes_threads:    0, 
   comments_insta: 7, comments_tiktok: 5, comments_youtube: 1, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Sao_Paulo.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Sao-Paulo/"},

  
  {nome: "Vasco",              
   likes_insta:   27, likes_tiktok:   40, likes_youtube:   87, likes_twitter:    1, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 3, comments_youtube: 3, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Vasco.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Vasco/"},
  
  {nome: "Vitoria",            
   likes_insta:   22, likes_tiktok:   21, likes_youtube:   18, likes_twitter:    1, likes_facebook:    0, likes_threads:    0, 
   comments_insta: 0, comments_tiktok: 1, comments_youtube: 0, comments_twitter: 0, comments_facebook: 0, comments_threads: 0, 
                                                               shares_twitter:   0, shares_facebook:   1, shares_threads:   0,
   image: "imagens/mascotes/Vitoria.png", 
   link:"https://ilustraja1.github.io/DisputaDeMascotes2024-Vitoria/"}
  
];

// Função para calcular os totais de likes, comments e shares
function calculateTotals(team) {
    return {
        likes: team.likes_insta + team.likes_tiktok + team.likes_youtube + team.likes_twitter + team.likes_facebook + team.likes_threads,
        comments: team.comments_insta + team.comments_tiktok + team.comments_youtube + team.comments_twitter + team.comments_facebook + team.comments_threads,
        shares: team.shares_twitter + team.shares_facebook + team.shares_threads
    };
}



// Ordenando os times pelo critério de desempate (Likes, Comments, Shares)
teams.sort((a, b) => {
    const totalA = calculateTotals(a);
    const totalB = calculateTotals(b);

    if (totalA.likes !== totalB.likes) {
        return totalB.likes - totalA.likes;
    } else if (totalA.comments !== totalB.comments) {
        return totalB.comments - totalA.comments;
    } else {
        return totalB.shares - totalA.shares;
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

function generateListItem(position, team) {
  if (position == 1){
    return `
  
    <img class="gold-medal" src="imagens/medalha-de-ouro.png" />
    <a href="${team.link}" >
      <img src="${team.image}" alt="${team.nome}" class="team-image">
    </a>
    <!--<p class="team-info">Nome: ${team.nome}</p>-->
    <p class="team-info-likes">Likes: ${totals.likes}</p>
    <p class="team-info-comments">Comments: ${totals.comments}</p>
    <p class="team-info-shares">Shares: ${totals.shares}</p>
  `;
  }
  else if(position == 2){
    return `
  
    <img class="silver-medal" src="imagens/medalha-de-prata.png" />
    <a href="${team.link}" >
      <img src="${team.image}" alt="${team.nome}" class="team-image">
    </a>
    <!--<p class="team-info">Nome: ${team.nome}</p>-->
    <p class="team-info-likes">Likes: ${totals.likes}</p>
    <p class="team-info-comments">Comments: ${totals.comments}</p>
    <p class="team-info-shares">Shares: ${totals.shares}</p>
  `;
  }
  else if(position == 3){
    return `
  
    <img class="bronze-medal" src="imagens/medalha-de-bronze.png" />
    <a href="${team.link}" >
      <img src="${team.image}" alt="${team.nome}" class="team-image">
    </a>
    <!--<p class="team-info">Nome: ${team.nome}</p>-->
    <p class="team-info-likes">Likes: ${totals.likes}</p>
    <p class="team-info-comments">Comments: ${totals.comments}</p>
    <p class="team-info-shares">Shares: ${totals.shares}</p>
  `;
  }
  else{
    return `
  
    <p class="team-position">${position}º</p>
    <a href="${team.link}" >
      <img src="${team.image}" alt="${team.nome}" class="team-image">
    </a>
    <!--<p class="team-info">Nome: ${team.nome}</p>-->
    <p class="team-info-likes">Likes: ${totals.likes}</p>
    <p class="team-info-comments">Comments: ${totals.comments}</p>
    <p class="team-info-shares">Shares: ${totals.shares}</p>
  `;
  } 
}

