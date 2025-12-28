var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        var resp = xhr.response;
        if (!resp || !resp.articles) {
            console.error('Invalid JSON structure', resp);
            return;
        }

        var articles = resp.articles;
        var articlesDiv = document.getElementById('articles');
        if (!articlesDiv) {
            console.error("Missing #articles element");
            return;
        }
        articlesDiv.innerHTML = '';

        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title || '';

            var description = document.createElement('p');
            description.textContent = article.description || '';

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement('ul');
            (article.ways_to_achieve || []).forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            (article.benefits || []).forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Request failed with status', xhr.status);
    }
};

xhr.onerror = function() {
    console.error('Network error');
};

xhr.send();