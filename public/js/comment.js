const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#blog-desc').value;
    const blog_id = document.querySelector('#blog_id').textContent;
  
     if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('yee')
        document.location.reload();
      } else {
        alert(response.JSON(statusText));
      }
    }
  };
  document.querySelector('.new-blog-form').addEventListener('click', newFormHandler);