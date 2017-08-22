var textareas = $('textarea');

textareas.on('paste', function (e) {
    if (!(e.originalEvent.clipboardData.types.indexOf('text/plain') > -1)) return;

    var url = e.originalEvent.clipboardData.getData('text/plain');

    if (!checkUrl(url)) return;

    chrome.runtime.sendMessage({url: url});

    e.preventDefault();
});

function checkUrl(str) {
    var pattern = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

    return pattern.test(str);
}