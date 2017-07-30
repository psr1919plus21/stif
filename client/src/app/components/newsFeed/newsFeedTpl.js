let template = `
  <div class="news">
    <button @click="loadNews">Load news</button>
    <ul class="news-list">
      <li v-for="article in articles" class="news-list__item">
        <h2 v-text="article.title" class="news-list__title"></h2>
        <a :href="article.url" terget="_blank" class="news-list__link">
          <img :src="article.urlToImage" class="news-list__img">
        </a>
        <p v-text="article.description" class="news-list__description"></p>
      </li>
    </ul>
  </div>
`;

export default template;
