let template = `
  <div class="news">
    <ul class="news-list">
      <li v-for="article in articles" class="news-list__item">
        <a :href="article.url" target="_blank" class="news-list__link-title">
          <h2 v-text="article.title" class="news-list__title"></h2>
        </a>
        <a :href="article.url" target="_blank" class="news-list__link">
          <img :src="article.urlToImage" class="news-list__img">
        </a>
        <p v-text="article.description" class="news-list__description"></p>
      </li>
    </ul>
  </div>
`;

export default template;
