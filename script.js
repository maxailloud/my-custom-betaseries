(async function() {
    "use strict";
    // Function to wait for an element to be in the page, from https://stackoverflow.com/a/61511955
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });

            // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }


    const header = await waitForElm('.-mx-gutter');
    header.remove();

    const title = await waitForElm('.w-full .mb-8');
    title.remove();

    const contentLayout = await waitForElm('#content_layout');
    contentLayout.classList.add('mt-4');

    const firstShow = await waitForElm('.flex.flex-col.relative.bg-dark-bg.text-profile-secondary');
    console.log(firstShow);

    // Had to wait for the first show to be there os the list is not going to change
    const showList = await waitForElm('.grid.grid-col-1.mb-2.gap-2');
    console.log(showList);
    console.log(showList.children);
})();
