const loadDiscussAPI = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
        const data = await res.json();
        const posts = data.posts;
        displayDiscuss(posts);
        
        
}

const loadPostsAPI = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    // console.log(data[2].author.name);
}

loadDiscussAPI();
loadPostsAPI();