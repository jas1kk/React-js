import React, { useState } from 'react';

type Article = {
  title: string;
  content: string;
  category: string;
};

type HelpProps = {
  articles: Article[];
};

const Help: React.FC<HelpProps> = ({ articles }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
//@ts-ignore
  const categories = ['Все', ...new Set(articles.map((article) => article.category))];

  const filteredArticles = selectedCategory === 'Все' 
    ? articles 
    : articles.filter((article) => article.category === selectedCategory);

  return (
    <div>
      <h1>Помощь</h1>
      <nav>
        {categories.map((category) => (
          <a key={category} href="#" onClick={() => setSelectedCategory(category)}>
            {category}
          </a>
        ))}
      </nav>
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Help;
