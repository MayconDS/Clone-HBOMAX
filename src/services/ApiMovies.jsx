const VITE_API_KEY = "0d0a0a2eaca06b1d8d0b66cb7be22c3c";
const VITE_API_BASE = "https://api.themoviedb.org/3";
const VITE_API_MOVIE = "https://api.themoviedb.org/3/movie/";
const VITE_API_TV = "https://api.themoviedb.org/3/tv/";
const VITE_SEARCH_MOVIE_URL = "http://api.themoviedb.org/3/search/movie";
const VITE_SEARCH_TV_URL = "http://api.themoviedb.org/3/search/tv";

// Requisição da URL themoviedb //

const basicFetch = async (url) => {
  const req = await fetch(`${VITE_API_BASE}${url}`);
  const res = await req.json();
  return res;
};

const FetchSearch = async (url) => {
  const req = await fetch(url);
  const res = await req.json();
  return res;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "gratuitos",
        title: "Episódios gratuitos",
        title2:
          "Curta episódios gratuitos sem custo e sem a necessidade de assinatura",
        items: await basicFetch(
          `/discover/movie?with_genres=9648&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "gameofthores",
        title: "E foi assim que conhecemos os Westeros",
        items: await basicFetch(
          `/discover/movie?with_genres=80&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "embreve",
        title: "Em breve",
        items: await basicFetch(
          `/discover/movie?with_genres=878&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "exclusive",
        title: "Streaming exclusivo da HBO Max",
        items: await basicFetch(
          `/discover/tv?with_network=1024&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "moviesall",
        title: "Filmes para todos os gostos",
        items: await basicFetch(
          `/discover/movie?with_genres=37&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
    ];
  },

  getSearchMovie: async (query) => {
    return [
      {
        slug: "query",
        title: "Filmes",
        items2: await FetchSearch(
          `${VITE_SEARCH_TV_URL}?api_key=${VITE_API_KEY}&query=${query}`
        ),
        items: await FetchSearch(
          `${VITE_SEARCH_MOVIE_URL}?api_key=${VITE_API_KEY}&query=${query}`
        ),
      },
    ];
  },

  // Requisição para seta o banner no inicio da pagina, featured //
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${VITE_API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${VITE_API_KEY}`
          );
      }
    }
    return info;
  },
  getPageMovies: async () => {
    return [
      {
        slug: "filmes_que_voce_precisa_assistir",
        title: "Filmes que você precisa assistir",
        items: await basicFetch(
          `/discover/movie?with_genres=36&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "filmes_em_destaque",
        title: "Filmes em destaque",
        items: await basicFetch(
          `/discover/movie?top_rated&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "do_cinema_para_sua_casa",
        title: "Do cinema para sua casa",
        title2:
          "O melhor do entretenimento das telonas direto para a sua telinha.",
        items: await basicFetch(
          `/discover/movie?with_genres=10770&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "espetaculos_de_ficcao_cientifica",
        title: "Espetáculos de ficção científica",
        items: await basicFetch(
          `/discover/movie?with_genres=878&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "acao_explosiva",
        title: "Ação explosiva",
        title2:
          "Perseguições, tiroteios, lutas de rua, artes marciais, explosões... O que mais você quer?",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "das_paginas_para_as_telas",
        title: "Das páginas para as telas",
        title2:
          "Seus livros favoritos agora se tornaram grande obras do cinema.",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "dramas_em_destaque",
        title: "Drmas em destaque",
        items: await basicFetch(
          `/discover/movie?with_genres=18&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "aqui_moram_as_melhores_comedias",
        title: "Aqui moram as melhores comédias",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "a_noite_do_terror",
        title: "A noite do terror",
        title2:
          "Algumas pessoas dizem que eles são amaldiçoados. Assista por sua conta e risco.",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "tao_grandes_quanto_nova_york",
        title: "Tão grandes quanto Nova York",
        items: await basicFetch(
          `/discover/tv?with_networks=213&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "joias_do_cinema_independente",
        title: "Joias do cinema independente",
        items: await basicFetch(
          `/discover/movie?with_genres=14&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
    ];
  },
  getPageSeries: async () => {
    return [
      {
        slug: "originalHBO",
        title: "Vai ficar de segredinho?",
        items: await basicFetch(
          `/discover/movie?with_genres=10749%2C53&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "para_quem_ama_ler_um_bom_livro",
        title: "Para quem ama ler um bom livro",
        title2:
          "Adaptações que vão agradar aos fãs mais fiéis e também quem esta começando agora",
        items: await basicFetch(
          `/discover/tv?with_genres=99&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "vencedores_do_emmy",
        title: "Vencedores do Emmy? Temos alguns por aqui...",
        items: await basicFetch(
          `/discover/tv?top_rated&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "talk_shows",
        title: "Talk shows que dão o que falar",
        items: await basicFetch(
          `/discover/tv?with_genres=10767&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "as_novelas_mais_intensas",
        title: "As novelas mais intensas",
        title2: "As histórias que nos enchem de vida a cada novo capítulo.",
        items: await basicFetch(
          `/discover/tv?with_genres=10766&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "super_aventuras_para_a_criancada",
        title: "Super aventuras para a criançada!",
        items: await basicFetch(
          `/discover/tv?with_genres=10762&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "velhos_classicos",
        title: "Velhos? Clássicos, isso sim!",
        items: await basicFetch(
          `/discover/movie?with_genres=16%2C53&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "historias_intergalaticas",
        title: "Histórias intergaláticas",
        title2:
          "Não estamos sozinhos no universo e eles precisam de sua ajuda para manter a paz pela galáxia.",
        items: await basicFetch(
          `/discover/tv?with_genres=9648&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
      {
        slug: "lute_com_uma_mulher",
        title: "Lute com uma mulher!",
        items: await basicFetch(
          `/discover/tv?&language=pt-BR&api_key=${VITE_API_KEY}`
        ),
      },
    ];
  },
};
