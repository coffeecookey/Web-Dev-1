const postsContainer = document.getElementById('posts-container');
const newPostBtn = document.getElementById('new-post-btn');
const postModal = document.getElementById('post-modal');
const closeModalBtn = document.getElementById('close-modal');
const postForm = document.getElementById('post-form');
const postIdInput = document.getElementById('post-id');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');
const postImageInput = document.getElementById('post-image');

let posts = JSON.parse(localStorage.getItem('posts')) || [];

function renderPosts() {
  postsContainer.innerHTML = '';
  posts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
      <p>${post.content}</p>
      <div class="post-actions">
        <button onclick="editPost(${index})">Edit</button>
        <button onclick="deletePost(${index})">Delete</button>
      </div>
    `;
    postsContainer.appendChild(postElement);
  });
}

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = postIdInput.value;
  const title = postTitleInput.value;
  const content = postContentInput.value;
  const image = postImageInput.files[0]
    ? URL.createObjectURL(postImageInput.files[0])
    : null;

  if (id) {
      posts[id] = { title, content, image };
    } else {
    posts.push({ title, content, image });
  }

  localStorage.setItem('posts', JSON.stringify(posts));
  renderPosts();
  closeModal();
});

function editPost(index) {
  const post = posts[index];
  postIdInput.value = index;
  postTitleInput.value = post.title;
  postContentInput.value = post.content;
  postModal.style.display = 'flex';
}

function deletePost(index) {
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));
  renderPosts();
}

newPostBtn.addEventListener('click', () => {
  postIdInput.value = '';
  postTitleInput.value = '';
  postContentInput.value = '';
  postImageInput.value = '';
  postModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  postModal.style.display = 'none';
}

renderPosts();
