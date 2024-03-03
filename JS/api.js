const loadDiscussAPI = async (search) => {
           if (typeof search === 'undefined') {
            const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
            const data = await res.json();
            const posts = data.posts;
            displayDiscuss(posts);
           }
           else {
            const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`);
        const data = await res.json();
        const posts = data.posts;
        displayDiscuss(posts);
        }   
        
}

const loadPostsAPI = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    displayPost(data);
    // console.log(data[2].author.name);
}

loadDiscussAPI();
loadPostsAPI();