let idCounter = 0;
const articles = [];

const getAllArticles = () => articles;

const getArticle = (id) => {
  return articles.find(a => a.id == id);
};

const createArticle = (title, content) => {
  const newArticle = { id: ++idCounter, title, content };
  articles.push(newArticle);
  return newArticle;
};

const updateArticle = (id, data) => {
  const idx = articles.findIndex(a => a.id == id);
  if (idx === -1) return null;
  articles[idx] = { ...articles[idx], ...data };
  return articles[idx];
};

const deleteArticle = (id) => {
  const idx = articles.findIndex(a => a.id == id);
  if (idx === -1) return false;
  articles.splice(idx, 1);
  return true;
};

module.exports = {
  getArticle,  
  getAllArticles,
  createArticle,
  updateArticle,    
  deleteArticle     
};
