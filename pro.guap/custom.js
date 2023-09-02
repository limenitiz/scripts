function includeCSS(newElementId, href) {
    if (!document.getElementById(newElementId))
    {
        var head = document.getElementsByTagName('head')[0];

        var link = document.createElement('link');
        link.id = newElementId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        link.media = 'all';

        head.appendChild(link);
        console.log(`Successful include link. Id: ${newElementId}, link ${href}`);
    }
    else {
        console.log("Failed include link. Id already exists");
    }
}

function includeJS(newElementId, src) {
    if (!document.getElementById(newElementId))
    {
        var head = document.getElementsByTagName('head')[0];

        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = src;

        head.appendChild(js);

        console.log(`Successful include link. Id: ${newElementId}, link ${src}`);
    }
    else {
        console.log("Failed include link. Id already exists");
    }
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function compareStr (s1, s2) {
    if (s1.length == 19 && s2.length == 19) {
        // compare datetime like  18:27:01 17.02.2023
        let date1 = s1.split(" ")[1].split(".");
        let time1 = s1.split(" ")[0].split(":");
        let date2 = s2.split(" ")[1].split(".");
        let time2 = s2.split(" ")[0].split(":");

        let d1 = new Date(date1[2], date1[1]-1, date1[0], time1[0], time1[1], time1[2]);
        let d2 = new Date(date2[2], date2[1]-1, date2[0], time2[0], time2[1], time2[2]);

        return d1 - d2;

    } else if (s1.length == 10 && s2.length == 10) {
        // compare date like  17.02.2023
        let date1 = s1.split(" ")[0].split(".");
        let date2 = s2.split(" ")[0].split(".");

        let d1 = new Date(date1[2], date1[1]-1, date1[0]);
        let d2 = new Date(date2[2], date2[1]-1, date2[0]);

        return d1 - d2;
    } else {
        return s1.toString().localeCompare(s2);
    }
}

(function() {
    //includeJS('jq', 'https://code.jquery.com/jquery-3.6.3.min.js');
    //includeCSS('datatables_css','https://cdn.datatables.net/1.13.3/css/jquery.dataTables.min.css');
    //includeJS('datatables_js', 'https://cdn.datatables.net/1.13.3/js/jquery.dataTables.min.js');

    waitForElm(".table").then(table => {

        const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

        const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
                                                  v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : compareStr(v1, v2)
                                                 )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));


        for (const th of document.getElementsByTagName('th')) {
            th.outerHTML = `
                <th><span class="float-end">
                    <i class="fa fa-sort"></i>
                </span> ${th.textContent} </th>`;
        }

        document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
            const table = th.closest('table');
            const tbody = table.querySelector('tbody');
            Array.from(tbody.querySelectorAll('tr'))
                .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                .forEach(tr => tbody.appendChild(tr));
        })));
    });

})();
