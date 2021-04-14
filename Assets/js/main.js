Vue.config.devtools = true;


var app = new Vue (
  {
    el: "#root",
    data:{
      films: [],
      seriesTv: [],
      indexFilm: 0,
      indexSerieTV: 0,
      title: "",
      startTitle: ['a'],
      randPage: 0,
      api_key: 'ab347fdc17957f58c78a8c947dddb53d',
      site: 'https://api.themoviedb.org/3',
      language: 'it-IT',
      style: 'shiny',
      size: '64.png',
      voteStar: 5,
    },
    mounted() {
      this.randPage = this.createNumber(1,20);
      axios.get(`${this.site}/search/movie?api_key=${this.api_key}&query=${this.startTitle}&language=${this.language}&page=${this.randPage}`)
      .then((response) => {
        this.films = response.data.results;
      });
      axios.get(`${this.site}/search/tv?api_key=${this.api_key}&query=${this.startTitle}&language=${this.language}&page=${this.randPage}`)
      .then((response) => {
        this.seriesTv = response.data.results;
      });
    },
    methods: {
      search: function () {
        axios.get(`${this.site}/search/movie?api_key=${this.api_key}&query=${this.title}&language=${this.language}`)
        .then((response) => {
          this.films = response.data.results;
        });
        axios.get(`${this.site}/search/tv?api_key=${this.api_key}&query=${this.title}&language=${this.language}`)
        .then((response) => {
          this.seriesTv = response.data.results;
        });
      },
      getStars: function (vote) {
        return Math.ceil(vote / 2)
      },
      createNumber: function (min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  }
);
