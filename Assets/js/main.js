Vue.config.devtools = true;


var app = new Vue (
  {
    el: "#root",
    data:{
      films: [],
      seriesTv: [],
      index: 0,
      title: "",
      api_key: 'ab347fdc17957f58c78a8c947dddb53d',
      site: 'https://api.themoviedb.org/3',
      language: 'it-IT',
      style: 'shiny',
      size: '64.png'
    },
    mounted() {

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
      }
    }
  }
);
