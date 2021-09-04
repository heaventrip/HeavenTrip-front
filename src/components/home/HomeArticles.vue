<template>
  <section class="articles-section">
    <div class="d-flex flex-column align-items-center" style="margin-bottom: 4rem" :style="[inNav ? 'color: #292f33' : '']">
      <span>Notre blog</span>
      <div class="text-uppercase" style="font-size: 1.5rem; margin-bottom: 1rem">
        <span>derniers &nbsp;</span>
        <span class="text--bold">articles</span>
      </div>
    </div>
    <div class="d-flex h-100 justify-content-center">
      <div v-for="(article, index) in articles" :key="article" class="article" :style="[index === 1 ? 'margin: 0 3rem' : '']">
        <a :href="article.link" style="position: relative">
          <img class="article__image" :src="article._embedded['wp:featuredmedia']['0'].source_url" rel="preload" />
          <div class="bg-pink text-white text-uppercase px-3" style="position: absolute; bottom: 0; left: 0; height: 2rem; line-height: 2rem">{{ article._embedded['wp:term']['0']['0'].name }}</div>
        </a>
        <div class="article__header__text-content">
          <div class="article__header__title">{{ article.title.rendered }}</div>
          <div class="article__small-infos">{{ new Date(article.date).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeArticles',
  data() {
    return {
      articles: []
    }
  },
  props: ['in-nav'],
  created() {
    this.$axios.get('https://blog.yourheaventrip.com/wp-json/wp/v2/posts?_embed&filter[orderby]=date&order=desc').then((res) => (this.articles = res.data.slice(-3)))
  },
  activated() {
    console.log('activvvvvvvvvvvvvvvvvvvvvv')
  }
}
</script>

<style scoped>
.articles-section {
  margin: 6rem 0;
  height: min-content;
}
.article {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
}
.article__image {
  width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 3%;
}
.article__header__text-content {
  max-width: 300px;
}
.article__header__title {
  margin-top: 1rem;
  color: #292f33;
  font-weight: 800;
}
.article__small-infos {
  margin-top: 0.5rem;
  font-size: 0.75rem;
}
</style>
