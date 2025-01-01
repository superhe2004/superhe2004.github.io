var posts=["2025/01/01/新年第一天/","2025/01/01/laping1/","2025/01/01/posts/","2024/12/29/xinceshi/","2024/12/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };