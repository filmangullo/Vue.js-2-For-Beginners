Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});

var app = new Vue({
    el: '#app',
    data: {
        posts: [
            { id: 1, title: 'What is vue.js', content: 'Vue js is a programming language <p>this post <strong>1</strong></p>' },
            { id: 2, title: 'Install vue.js', content: 'You cant see about tutorial on this project <p>this post <strong>2</strong></p>' },
            { id: 3, title: 'Why, me using vue,js', content: 'Why using vue,js not php, or other framwork <p>this post <strong>3</strong></p>' },
        ]
    }
});