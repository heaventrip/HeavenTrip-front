<template>
  <section class="articles-section">
    <div class="d-flex h-100 justify-content-around align-items-center">
      <div v-for="article in articles" :key="article" class="article">
        <a :href="article.link">
          <img class="article__image" :src="article._embedded['wp:featuredmedia']['0'].source_url" rel="preload" />
        </a>
        <div class="article__header__text-content">
          <div class="article__header__title">{{ article.title.rendered }}</div>
          <div class="article__excerpt d-none d-lg-block" v-html="article.excerpt.rendered"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionBottom',
  data() {
    return {
      articles: []
    }
  },
  async created() {
    // fetch last 3
    await this.$axios.get('https://blog.yourheaventrip.com/wp-json/wp/v2/posts?_embed&filter[orderby]=date&order=desc').then((res) => (this.articles = res.data.slice(-3)))
  }
}
</script>

<style scoped>
.articles-section {
  margin-top: 5rem;
  padding-bottom: 2rem;
  height: min-content;
  box-shadow: 0px -1px 4px rgba(41, 47, 54, 0.5);
}
.article {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
}
.article__image {
  width: 100%;
  max-height: calc(40vh * 0.3);
  object-fit: cover;
  border-radius: 1%;
  margin-bottom: 1rem;
}
.article__header__text-content {
  padding: 0 1rem;
}
</style>
