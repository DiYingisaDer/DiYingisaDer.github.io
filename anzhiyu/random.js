var posts=["2024/10/19/hello-world/","2024/10/21/Markdown-Grammar-2/","2024/10/20/Markdown-Grammar-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };