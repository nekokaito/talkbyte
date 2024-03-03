const displayDiscuss = (posts) => {
    const discussPost = document.getElementById('d-content');
     
      posts.forEach(post => {
        
               const card = document.createElement('div');
            
               card.innerHTML = `<div id="post-${post.id}" class="flex mx-4 mt-6 bg-[#F3F3F5] p-10 rounded-3xl gap-4 relative">
               <div class="max-w-20 rounded-xl">
                   <div class="flex justify-end">
                       <span
                       id="status-id" class="dot bg-green-500 h-3 w-3 inline-block rounded-full border-2 border-white"
                    ></span>
                   </div>
                   
                   <img
                     class="w-full rounded-xl"
                     src="${post.image}"
                     alt=""
                   />
                   
                 </div>
                 <div class="space-y-4">
                   <div class="flex flex-col lg:flex-row gap-4">
                     <h3 class="font-bold text-[#12132D99]">#${post.category}</h3>
                     <h3 class="font-bold text-[#12132D99]">Author : ${post.author.name}</h3>
                     
                   </div>
                   <h1 class="lg:text-2xl font-extrabold">
                   ${post.title}
                   </h1>
                   <p class="text-[#12132D99]">
                   ${post.description}
                   </p>
                   <hr class="border-gray-300 border-dashed" />
                   <div class="flex gap-4">
                     <div>
                       <h4 class="text-[#12132D99]"><i class="fa-regular fa-message mr-2"></i>${post.comment_count}</h1>
                     </div>
                     <div>
                       <h4 class="text-[#12132D99]"><i class="fa-regular fa-eye mr-2"></i> ${post.view_count}</h1>
                     </div>
                     <div>
                       <h4 class="text-[#12132D99]"><i class="fa-regular fa-clock mr-2"></i>${post.posted_time} min</h1>
                     </div>
                   </div>
                  <div class="flex justify-end absolute bottom-7 right-8">
                   <button
                   onclick="addRead(${post.id},'${(post.title).replace("'","’")}',${post.view_count})" class="btn rounded-full bg-green-300"
                   > <i class="fa-solid fa-envelope-open text-white"></i>
                   </button>
                  </div>
                 </div>
           </div>
               `
               discussPost.appendChild(card);
               
               
      });
      
}
const addRead = (id,title,views) => {
    
     
     
    const readPost = document.getElementById('readPost');
     const addPost = document.createElement('div');
    addPost.classList.add = 'bg-white rounded-xl p-2 mt-2  flex gap-2 justify-between font-bold font-mulish';
    addPost.innerHTML = `  <div id="readPost-${id}" class="bg-white rounded-xl p-2 mt-2  flex gap-2 justify-between font-bold font-mulish">
    <div><p class="text-sm">${title}</p></div>
    <div class="flex gap-1"><i class="fa-regular fa-eye"></i><p>${views}</p></div>
</div>
    `
    
    readPost.appendChild(addPost);
    
    
}
