let template = `
  <header class="header">
    <div class="container">
      <h1 class="header__title">News</h1>

      <ul class="header-chanels">
        <li class="header-chanels__item">
          <div @click="showChanelsControl" class="header__add"></div>
          <div v-show="openControl" class="chanels-control">
            <div class="chanels-control__content">
              <input v-model="search" ref='search' class="chanels-control__search" type="text" placeholder="search">
              <ul class="chanels-list">
                <li v-for="source in localSources" @click="toggleChanel(source.id)" class="chanels-list__item">
                  <h3 v-text="source.name" class="chanels-list__title"></h3>
                  <p v-text="source.category" class="chanels-list__category"></p>
                  <div v-if="inBasicChanels(source.id)"
                    class="chanels-control__remove"></div>
                  <div v-else
                    class="chanels-control__add"></div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li v-for="chanel in baseChanels" class="header-chanels__item">
          <button @click="showChanel($event, chanel.key)" class="header-chanels__button">{{chanel.name}}</button>
        </li>
      </ul>
    </div>
  </header>
`;

export default template;
