<template>
  <div class="message" :class="position">
    <img class="profil-img" src="@/assets/images/ui_faces/4.jpg" />
    <div class="message-container">
      <div class="message-header">
        <h6 class="profil-name">{{ user?.firstName }} {{ user?.lastName }}</h6>
        <span class="message-date">{{ new Date(createdAt).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
      </div>
      <div class="message-content">{{ content }}</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user', 'content', 'createdAt', 'position'],
  data() {
    return {
      url: `https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${this.$props.user?.avatarId}.jpg`
    }
  }
}
</script>

<style>
.profil-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.profil-name {
  color: #292f33;
  font-size: 0.8rem;
}
.message {
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
}
.right {
  flex-direction: row-reverse;
}
.right .message-content {
  background-color: #5a3a5f;
  color: white;
  float: right;
}
.right .message-container {
  margin-right: 15px;
  margin-left: 0px;
}
.right .message-header {
  flex-flow: row-reverse;
  margin-right: 17px;
  margin-left: 0px;
}
.right .message-date {
  margin-left: 0px;
  margin-right: 15px;
}
.message-container {
  margin-left: 15px;
}
.message-date {
  font-weight: 400;
  margin-left: 10px;
  font-size: 0.75rem;
  color: #b4b4b4;
}
.message-header {
  color: #292f33;
  font-size: 0.8rem;
  margin-left: 17px;
  height: 20px;
  display: flex;
}
.message-content {
  width: fit-content;
  max-width: 270px;
  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Muli', sans-serif;
  background-color: #f1f1f1;
  letter-spacing: 0.3px;
  padding: 8px 17px;
  border-radius: 10px;
}
.message-right {
  flex-direction: row-reverse;
}
@media (min-width: 2000px) {
  .message-content {
    max-width: 100%;
  }
}
</style>
