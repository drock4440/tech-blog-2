const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-name').value.trim()
    const content = document.querySelector('#blog-desc').value.trim()
    const id = document.querySelector('#blog-id').textContent;
    console.log(title, content, id)
     if (title && content && id) {
      let response = await fetch(`/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title , content, id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('yee')
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  document.querySelector('#edit-blog-form').addEventListener('click', editFormHandler);