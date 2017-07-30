let template = `
  <header class="header">
    <div class="container">
      <h1 class="header__title">News</h1>

      <ul class="header-chanels">
        <li v-for="chanel in baseChanels" class="header-chanels__item">
          <button @click="showChanel(chanel.key)" class="header-chanels__button">{{chanel.name}}</button>
        </li>
      </ul>
    </div>
  </header>
`;

export default template;
