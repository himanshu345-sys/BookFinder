function findBook(){
    var userSearch = document.getElementById('userInput').value;
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType: "JSON",
        success: function(book){
            console.log(book);
            for(var i = 0; book.items.length; i++){

                var wrapperdiv = document.createElement('div');
                wrapperdiv.className = 'media';

                // create img element for images
                var image = document.createElement('img');
                image.className = 'mr-3';
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail;

                // create div element with class of media-body     
                var div = document.createElement('div');
                div.className = 'media-body';

                // create h5 element with class of mt-0
                var h5 = document.createElement('h5');
                h5.className = 'mt-0';
                h5.innerHTML = book.items[i].volumeInfo.title;

                // append header to body
                div.appendChild(h5);


                
                wrapperdiv.appendChild(image);
                wrapperdiv.appendChild(div);

                // create h6 element for author
                var author = document.createElement('h6');
                author.innerHTML = book.items[i].volumeInfo.authors;
                div.appendChild(author);

                // create paragraph for country
                var country = document.createElement('p');
                country.innerHTML = 'Country:' + ' ' + book.items[i].accessInfo.country;
                div.appendChild(country);

                // create element for discription
                var desc = document.createElement('p');
                desc.innerHTML = book.items[i].volumeInfo.description;
                div.appendChild(desc);

                // create hr to separate every books info
                var line = document.createElement('hr');

                 // make every elements as children element of bookResult
                bookResult.appendChild(wrapperdiv);
                bookResult.appendChild(line);
            }

        }
    });
}