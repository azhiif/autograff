
import { Link } from 'react-router-dom';

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: '2022 Audi Hybrid gives up nothing with its optimized fuel economy',
      category: 'Classic Cars',
      author: 'sentinel',
      comments: 0,
      date: 'January 3, 2022',
      image: 'https://readdy.ai/api/search-image?query=2022%20Audi%20hybrid%20luxury%20car%20elegant%20design%20modern%20automotive%20photography%20professional%20lighting%20clean%20background%20premium%20vehicle&width=400&height=250&seq=article-1&orientation=landscape'
    },
    {
      id: 2,
      title: '2022 BMW X3 Form-fitting M Sport Seats – available as a standalone option',
      category: 'Car News',
      author: 'sentinel',
      comments: 0,
      date: 'January 3, 2022',
      image: 'https://readdy.ai/api/search-image?query=2022%20BMW%20X3%20luxury%20SUV%20M%20Sport%20interior%20seats%20premium%20automotive%20photography%20professional%20lighting%20clean%20background&width=400&height=250&seq=article-2&orientation=landscape'
    },
    {
      id: 3,
      title: '2022 Carnival Standard blind-spot & forward collision avoidance',
      category: 'Classic Cars',
      author: 'sentinel',
      comments: 0,
      date: 'January 3, 2022',
      image: 'https://readdy.ai/api/search-image?query=2022%20Kia%20Carnival%20luxury%20minivan%20family%20vehicle%20premium%20automotive%20photography%20professional%20lighting%20clean%20background%20modern%20design&width=400&height=250&seq=article-3&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Articles
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="mb-4">
                <Link 
                  to={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded hover:bg-orange-600 transition-colors"
                >
                  {article.category}
                </Link>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <i className="ri-user-line"></i>
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="ri-chat-3-line"></i>
                      <span>{article.comments} Comments</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="ri-calendar-line"></i>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                    <Link to={`/article/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  
                  <Link 
                    to={`/article/${article.id}`}
                    className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors font-medium"
                  >
                    <span>Read More</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
