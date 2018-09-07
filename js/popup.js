let readText = document.getElementById('readText');


readText.onclick = function(element) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'var elem = document.getElementsByClassName("copyable-text"),\
                        arrToRet = [],\
                        str = null;\
                    for (var i = 0; i < elem.length; i++) {\
                        if (elem[i].getAttribute("data-pre-plain-text")) {\
                            str = elem[i].getAttribute("data-pre-plain-text");\
                            str += elem[i].textContent;\
                            for(var j=0;j<elem[i].getElementsByTagName("img").length;j++){\
                                str += elem[i].getElementsByTagName("img")[j].getAttribute("alt")\
                            }\
                            arrToRet.push(str);\
                        }\
                    }\
                    arrToRet;'
            },
            function(res) {
                console.log("printing in console of ext.");
                console.log(res);
                // $.ajax({
                //     type: 'post',
                //     url: '',
                //     success: function(res) {
                //         console.log(res);
                //     },
                //     error: function(err){
                //         console.log(err);
                //     }
                // });
            });
    });
};