$(document).ready(function () {
    var apiKey = '7dc4a77622144fe3a654cf62627974e8';
    var newsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=3`;

    function fetchNews() {
        $.get(newsApiUrl, function (data) {
            var articles = data.articles;
            var newsContainer = $('#news-container');
            newsContainer.empty(); // Clear existing content

            articles.forEach(function (article) {
                var newsItem = `
                    <div class="col-md-4 col-sm-6">
                        <div class="news-box">
                            <div class="news-details">
                                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                                <ul class="list-inline meta">
                                    <li><i class="fa fa-user"></i> <a href="#">${article.author || 'Unknown'}</a></li>
                                    <li><i class="fa fa-calendar"></i> ${new Date(article.publishedAt).toLocaleDateString()}</li>
                                </ul>
                                <p>${article.description || 'No description available.'}</p>
                                <a class='btn btn-default blue' href='${article.url}' target='_blank'>Read More <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>`;
                newsContainer.append(newsItem);
            });
        }).fail(function() {
            alert('Failed to fetch news. Please try again later.');
        });
    }

    // Initial fetch
    fetchNews();

    // Load more news on button click (Optional)
    $('#load-more-news').on('click', function (e) {
        e.preventDefault();
        var nextPage = newsApiUrl.match(/&page=\d+/) ? parseInt(newsApiUrl.match(/&page=(\d+)/)[1]) + 1 : 2;
        newsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=3&page=${nextPage}`;
        fetchNews();
    });
});
