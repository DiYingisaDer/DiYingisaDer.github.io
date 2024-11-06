var posts=["2024/10/20/Markdown-Grammar-1/","2024/10/21/Markdown-Grammar-2/","2024/10/22/WangWenXieZuo-1/","2024/10/23/WangWenXieZuo-2/","2024/10/24/WangWenXieZuo-3/","2024/10/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };