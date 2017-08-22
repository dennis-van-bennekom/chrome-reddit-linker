chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', request.url, true);
        xhr.responseType = 'blob';

        console.log(request);
        xhr.onload = function () {
            var reader = new FileReader();

            reader.addEventListener("loadend", function() {
                var dom = document.createElement('html');
                dom.innerHTML = reader.result;

                console.log(dom.querySelector('' +
                    'title').innerHTML);
            });

            reader.readAsText(this.response, 'text/html');
        };

        xhr.send();
    }
);