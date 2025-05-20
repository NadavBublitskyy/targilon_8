const Article = require('../models/articles');

exports.getAllArticles = (req, res) => {
  res.json(Article.getAllArticles());
};

exports.getArticle = (req, res) => {
  const id      = req.params.id;
  const article = Article.getArticle(id);
  if (article) {
    return res.json(article);
  }
  res.status(404).json({ error: 'Article not found' });
};


exports.createArticle = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content required' });
  }
  const newArticle = Article.createArticle(title, content);
  res
    .status(201)
    .location(`/api/articles/${newArticle.id}`)
    .end();
};

exports.updateArticle = (req, res) => {
  const id   = req.params.id;
  const data = req.body;
  const updated = Article.updateArticle(id, data);
  if (updated) {
    return res.json(updated);
  }
  res.status(404).json({ error: 'Article not found' });
};

exports.deleteArticle = (req, res) => {
  const id = req.params.id;
  const ok = Article.deleteArticle(id);
  if (ok) {
    return res.status(204).end();
  }
  res.status(404).json({ error: 'Article not found' });
};
