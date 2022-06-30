var storeName = "epcit";
var accessToken = "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";
var citrusResponse;
const localStorageKey = 'users';
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" rel="preload" defer="defer"></script> */}
// var citrusResponse = JSON.stringify({ "ads": [ { "id": "display_QqHaKRrKlFm1Wxr9c_DXJN4HSE3NzMzNjM2", "gtin": "6804903788596", "discount": { "amount": 0, "minPrice": 0, "maxPerCustomer": 0 }, "expiry": "2021-05-12T04:17:50.400902957Z", "position": 1 }, { "id": "display_NzsHqP0_iQedlo9VnrO2vqkwi_k3NzMzNjI4", "gtin": "6804253802548", "discount": { "amount": 0, "minPrice": 0, "maxPerCustomer": 0 }, "expiry": "2021-05-12T04:17:50.400908257Z", "position": 2 }, { "id": "display_xNeShqidaMuEqiJ0zNdt-Gzygjs3NzE0MTA3", "gtin": "6804247642164", "discount": { "amount": 0, "minPrice": 0, "maxPerCustomer": 0 }, "expiry": "2021-05-12T04:17:50.400912929Z", "position": 3 } ], "banners": [], "products": [] });
((document) => {
    alert('hello');
    function getLocalStorage() {

        return localStorage.getItem(localStorageKey);

    }

    function hasCustomerIdInStorage(customerId) {

        console.log('hasCustomerIdInStorage', customerId);

        return customerId == getLocalStorage();

    }

    function setLocalStorage(value) {

        console.log('setLocalStorage', value);

        localStorage.setItem(localStorageKey, value);

    }

    function removeLocalStorageValue() {

        localStorage.removeItem(localStorageKey);

    }
    var customerId = null;
    var getCustomerId = function () {
        try {
            let curr = window.ShopifyAnalytics.meta.page.customerId;
            if (curr !== undefined && curr !== null && curr !== "") {
                return curr;
            }
        } catch (e) { }
        try {
            let curr = window.meta.page.customerId;
            if (curr !== undefined && curr !== null && curr !== "") {
                return curr;
            }
        } catch (e) { }
        try {
            let curr = _st.cid;
            if (curr !== undefined && curr !== null && curr !== "") {
                return curr;
            }
        } catch (e) { }
        try {
            let curr = ShopifyAnalytics.lib.user().traits().uniqToken;
            if (curr !== undefined && curr !== null && curr !== "") {
                return curr;
            }
        } catch (e) { }
        return null;
    }




    // function createSmartCollection() {
    //     let url = new URL('https://epcit.myshopify.com/admin/api/2022-04/smart_collections.json');
    //     console.log(url);

    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'X-Shopify-Access-Token': accessToken
    //         },
    //         body: JSON.stringify({
    //             "smart_collection": {
    //                 "title": "Sponsered Ads",
    //                 "rules": [{
    //                     "column": "tag",
    //                     "relation": "equals",
    //                     "condition": "epcit_test"
    //                 }]
    //             }
    //         })
    //     }).then(res => {
    //         // alert("hii result om");  
    //         console.log(res);
    //         res.json()
    //     })
    //         .then(res => {
    //             setLocalStorage(getCustomerId());
    //             console.log(res)
    //         });

    // }


    async function init() {

        const params = new Proxy(new URLSearchParams(window.location.search), {

            get: (searchParams, prop) => searchParams.get(prop),

        });

        console.log('param', params.q);

        if (getCustomerId()) {



            if (!hasCustomerIdInStorage(getCustomerId())) {



                // createSmartCollection();

            } else {

                console.log('hasCustomerIdInStorage', hasCustomerIdInStorage(getCustomerId()))

            }

            // console.log(typeof params.q);

            // console.log(!params.q);

            // var reloading = sessionStorage.getItem("reloading");
            // if (reloading) {
            //     alert("JUST reloading page");
            //     sessionStorage.removeItem("reloading");
            //     // myFunction();
            // } else {
            //     if (!params.q) {
            //         alert("calling citrus");
            //         console.log('Calling home feed!');

            //         const citrusAds = await getCitrusAds();

            //         console.log("product array new", citrusAds);

            //         processCitrusResponse(citrusAds);

            //     } else {
            //         alert("calling citrus search");
            //         console.log('Calling search!');



            //         searchResultsFromCitrus(params.q);

            //     }
            // }


            // if (!params.q) {

            // console.log('Calling home feed!');

            // const citrusAds = await getCitrusAds();

            // console.log("product array new", citrusAds);

            // processCitrusResponse(citrusAds);

            // } else {

            // console.log('Calling search!');



            // searchResultsFromCitrus(params.q);

            // }

        } else {



            removeLocalStorageValue()



        }
        console.log(typeof params.q);

        console.log(!params.q);

        if (!params.q) {
            // alert("calling citrus");
            console.log('Calling home feed!');

            const citrusAds = await getCitrusAds();

            console.log("product array new", citrusAds);

            processCitrusResponse(citrusAds);

        } else {
            // alert("calling citrus search");
            console.log('Calling search!');



            searchResultsFromCitrus(params.q);

        }




    }



    // async function init() {
    //     console.log('user_id====>', getCustomerId());
    //     if (getCustomerId()) {
    //         if (!hasCustomerIdInStorage(getCustomerId())) {

    //             // createSmartCollection();
    //         } else {
    //             console.log('hasCustomerIdInStorage', hasCustomerIdInStorage(getCustomerId()))
    //         }
    //         // const citrusAds = await getCitrusAds();
    //         // console.log("product array new", citrusAds);
    //         // processCitrusResponse(citrusAds);
    //     } else {

    //         removeLocalStorageValue()

    //     }

    //     // call citrus api irrespective of user loged in or not

    function showAlert() {
        alert('listen to shopify theme editor re-render');
    }

    document.addEventListener("shopify:section:load", showAlert);

    //     //uncomment ash ++
    //     const citrusAds = await getCitrusAds();
    //     console.log("product array new", citrusAds);
    //     processCitrusResponse(citrusAds);
    //     //uncomment ash --




    //     //cal citrus API get response & update tags

    //     // getCitrusAds();
    //     //  processCitrusResponse(citrusResponse);
    //     //  const  actOnUser = function(retry, func){
    //     //       if (ShopifyAnalytics && ShopifyAnalytics.lib && ShopifyAnalytics.lib.user) {
    //     //          console.log('ShopifyAnalytics',ShopifyAnalytics);
    //     //          console.log('unique token',ShopifyAnalytics.lib.user().traits().uniqToken); // Do your work here.
    //     //       } else {
    //     //          if (retry > 0) {
    //     //             setTimeout(function() {
    //     //                func(retry - 1, func);
    //     //             }, 1000);
    //     //          }
    //     //          console.log('User not ready'); // Can be removed - just for debug
    //     //       }
    //     //    }
    //     //    console.log('Starting');
    //     //    setTimeout(function() {
    //     //       actOnUser(10, actOnUser);
    //     //    }, 1000);


    //     if (typeof Shopify === 'undefined') { console.log('Error: Shopify object not found') };

    //     console.log('Shopify', Shopify);
    //     // console.log('Shopify auth:',Shopify.Auth.getCookieSessionId());
    //     const searchInputs = document.getElementsByClassName('search__input field__input');

    //     for (const box of searchInputs) {
    //         box.addEventListener('keypress', function (event) {
    //             console.log(this.value);
    //             //  alert("search",this.value);
    //             console.log('User searched for a product', event);
    //             if (event.keyCode === 13) {
    //                 // alert("pressed ENTER", this.value);
    //                 console.log(this.value + " : baba");
    //                 debugger;


    //                 //uncomment ash ++


    //                 searchResultsFromCitrus(this.value);
    //                 //uncomment ash --

    //                 // alert("yesss");
    //             }
    //         });
    //     }
    //     const predictiveSearchLists = document.getElementsByClassName('predictive-search__item-heading')
    //     console.log(predictiveSearchLists);
    //     for (const predictiveSearchList of predictiveSearchLists) {
    //         predictiveSearchList.addEventListener('click', function (event) {
    //             console.log(this.value);
    //             console.log('User selected a product', event);
    //         });
    //     }

    // }



    async function chargeURLPut(url, data) {
        return await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    // window.onload = function () {
    //     var reloading = sessionStorage.getItem("reloading");
    //     if (reloading) {
    //         sessionStorage.removeItem("reloading");
    //         // myFunction();
    //     } else {

    //     }
    // }

    function reloadP() {

        

        fetch('/collections/sponsered-ads')

        .then(res => {
                // debugger;
                // alert("success");
                console.log("dataaaaa")
                console.log(res);
            });   


            function handleResponse() {
                console.log(this.responseText);
                var recommendedProductsHTML = "";
                recommendedProductsHTML += `<div>My Sponsored Ad</div>`;

                $(".sponsored-title").html(recommendedProductsHTML);
        
                // sponsored-title
                // JSON.parse(this.responseText);
              }
              const request = new XMLHttpRequest();
              request.addEventListener('load', handleResponse);
              request.open('GET', '/collections/sponsered-ads', true);
              request.send();


           
                jQuery.getJSON("/collections/sponsered-ads", function(response) {
                    // alert(response);
                    console.log(response);
                    // var recommendedProducts = response.products;
                    // var recommendedProductsHTML = "";
            
                    // for (i = 0; i < recommendedProducts.length; i++) {
                    //     recommendedProductsHTML += `<div>${recommendedProducts[i].title}</div>`;
                    // }
            
                    // $("#recommended_first").html(recommendedProductsHTML);
                });
            


        // sessionStorage.setItem("reloading", "true");
        // setTimeout(function() {document.location.reload(); }, 5000);
        // // document.location.reload();
    }

    // const getProducts = async () => {
    //     const pageNumber = 1;
    //     const response = await fetch(`https://${Shopify.shop}/admin/api/2019-04/themes.json`);
    //     //    console.log('products', response);
    //     let data = {
    //         "asset": {
    //             "key": "templates/index.liquid",
    //             "value": "add your content"
    //         }
    //     }

    //     const themObj = await chargeURLPut(`https://${Shopify.shop}/admin/api/2019-04/themes/#${Shopify.theme.id}/assets.json`, data);
    // }

    //Update product's tag
    //@productMap  Map of productId and tags
    async function updateProductTagsBulk(productMap) {
        // debugger;
        const productIds = [...productMap.keys()];
        return Promise.all(productIds.map((productId) => {
            const updateUrl = new URL(`https://epcit.myshopify.com/admin/api/2022-04/products/${productId}.json`);
            const data = {
                "product": {
                    "id": productId,
                    "tags": productMap.get(productId)
                }
            };
            const headers = {
                'X-Shopify-Access-Token': accessToken,
                'Content-Type': 'application/json'
            }

            return fetch(updateUrl, {
                method: 'PUT',
                'headers': headers,
                body: JSON.stringify(data)
            });
        })).then(response => response)
            .then(responses => {
                console.log('responses', responses);
                // location.reload();
                // alert("rendering section");
                // function handleResponse() {
                //     JSON.parse(this.responseText);
                //   }
                //   const request = new XMLHttpRequest();
                //   request.addEventListener('load', handleResponse);
                //   request.open('GET', 'https://epcit.myshopify.com/collections/sponsered-ads', true);
                //   request.send();
                setTimeout(function () {
                    // alert("Sup!"); 
                    request = new XMLHttpRequest()
                    request.open('GET', 'collections/sponsered-ads')
                    request.send()
                }, 4000);//





                return Promise.all(responses.map(r => r.json()));
            });

    }

    async function getProducts(productIds = null) {
        console.log(productIds);
        
        let url = `https://epcit.myshopify.com/admin/api/2021-10/products.json`;
        if (productIds != null) {
            url = url + '?ids=' + productIds.toString();
        }
        url = new URL(url);
        const products = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Shopify-Access-Token': accessToken
            }
        });
        return products.json();
    }


    function searchResultsFromCitrus(searchTerm) {
        // alert(`calling citrus search with : ${searchTerm}`);
        // debugger;
        // alert(searchTerm);
        let url = new URL(`https://integration.dev.citrusad.com/v1/ads/generate`);

        console.log("searchTerm", searchTerm);
        // debugger;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic sk_0UdLQzrjKRm8gOj-E3BzapIocd43NzI1NDE1Ni1mYjk1LTQzMmMtOTEzOC1iNjhkZjRjOTE0M2Y='
            },
            body: JSON.stringify({

                "placement": "all",

                "catalogId": "bcece48c-ee60-4724-abc5-1fd8d12ef151",

                "searchTerm": searchTerm,

                "options": {

                    "filterMode": "AndOr"

                },

                "maxNumberOfAds": 3

            })
        }).then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            })
            ).then(res => {
                // debugger;
                // alert("success");
                console.log("SEARCH Result from citrus")
                console.log(res);
                citrusResponse = res.data;
                var prodArray = [];
                console.log(citrusResponse);
                var adsArray = citrusResponse ? citrusResponse.ads : [];

                adsArray.forEach(function (item) {
                    console.log(item.gtin);
                    prodArray.push(item.gtin);
                    //updateProductTags(item.gtin);
                });
                // alert(prodArray);
                // alert("citrus Response search");
                // alert(prodArray);
                processCitrusResponse(prodArray);
                // console.log(res.status, res.data)
            }));
    }


    function updateProductWithTag(products) {
        let url = new URL(`https://epcit.myshopify.com/admin/api/2022-04/products.json?ids=` + products.join(','));
        console.log("Update URL", url);

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': accessToken
            }
        }).then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            })
            ).then(res => {
                console.log("All products")
                console.log(res.data.products);
            }));
    }



    async function removeSponsorTag() {
        const products = await getProducts();
        const productMap = new Map();
        for (let [_index, product] of Object.entries(products.products)) {
            const tags = product.tags.length > 1 ? product.tags.split(', ') : [];
            const index = tags.indexOf('Sponsered');
            console.log('Found:', product.id, tags);
            if (index > -1) {
                console.log('products', product.id);
                tags.splice(index, 1); // 2nd parameter means remove one item only
                productMap.set(product.id, tags.join(','));
                console.log('After:', tags);
            }
        }
        console.log('tobe removed productMap', productMap);
        return updateProductTagsBulk(productMap);
    }

    async function processCitrusResponse(citrusData) {

        console.log('Process citrus prods start');
        // await removeSponsorTag();
        const products = await getProducts(citrusData);
        console.log('products', products);

        //creating custom UI
        var sponsoredHTML = "";
        sponsoredHTML += `<div class="color-background-1 isolate gradient">
        <div class="collection section-template--14904022401076__featured_collection-padding">
          
           <div class="sponsored-title collection__title title-wrapper title-wrapper--no-top-margin page-width" style="margin-top:20px"><h2 class="title h2">Sponsored products</h2></div>
           <slider-component class="slider-mobile-gutter page-width page-width-desktop">
              <ul id="Slider-template--14909128572980__1652783649866742de" class="grid product-grid contains-card grid--4-col-desktop grid--2-col-tablet-down" role="list" aria-label="Slider">`;
        for (let [_index, product] of Object.entries(products.products)) {


            // sponsoredHTML += `<div><img src=${ product.image.src} alt=${ product.title} />  ${product.title}</div>`;

            sponsoredHTML += ` <li id="Slide-template--14909128572980__1652783649866742de-1" class="grid__item">
            <div class="card-wrapper underline-links-hover">
               <div class="card
                  card--card
                  card--media
                  color-background-2 gradient
                  " style="--ratio-percent: 100%;">
                  <div class="card__inner  ratio" style="--ratio-percent: 100%;">
                     <div class="card__media">
                        <div class="media media--transparent media--hover-effect">
                           <img src=${product.image.src} sizes="(min-width: 1200px) 267px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)" alt=${ product.title} class="motion-reduce" loading="lazy" width="784" height="634">
                        </div>
                     </div>
                     <div class="card__content">
                        <div class="card__information">
                           <h3 class="card__heading"> 
                              <a href=/products/${product.handle} class="full-unstyled-link">
                               ${product.title}
                              </a>
                           </h3>
                        </div>
                        <div class="card__badge bottom left"><span class="badge badge--bottom-left color-accent-2">Sale</span></div>
                     </div>
                  </div>
                  <div class="card__content">
                     <div class="card__information">
                        <h3 class="card__heading h5" id="title-template--14909128572980__1652783649866742de-6804237746228">
                           <a href=/products/${product.handle} class="full-unstyled-link">
                           ${product.title}
                           </a>
                        </h3>
                        <div class="card-information">
                           <span class="caption-large light"></span>
                           <div class="price  price--on-sale ">
                              <div class="price__container">
                                 <div class="price__regular">
                                    <span class="visually-hidden visually-hidden--inline">Regular price</span>
                                    <span class="price-item price-item--regular">
                                    ${product.variants[0].price}
                                    </span>
                                 </div>
                                 <div class="price__sale">
                                    <span class="visually-hidden visually-hidden--inline">Regular price</span>
                                    <span>
                                   ${product.variants[0].price}
                                    </span>
                                 </div>
                                 <small class="unit-price caption hidden">
                                 <span class="visually-hidden">Unit price</span>
                                 <span class="price-item price-item--last">
                                 <span></span>
                                 <span aria-hidden="true">/</span>
                                 <span class="visually-hidden">&nbsp;per&nbsp;</span>
                                 <span>
                                 </span>
                                 </span>
                                 </small>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card__badge bottom left"><span class="badge badge--bottom-left color-accent-2">Sale</span></div>
                  </div>
               </div>
            </div>
         </li>`
        
        }
        sponsoredHTML += `</ul>
        </slider-component>
     </div>
  </div>`;
        

        $(".recommended_first").html(sponsoredHTML);
            // const tags = product.tags.length > 1 ? product.tags.split(', ') : [];
            // tags.push('Sponsered');
            // let uniqueTags = [...new Set(tags)];
            // productMap.set(product.id, uniqueTags.join(','));
        


        // const productMap = new Map();
        // for (let [_index, product] of Object.entries(products.products)) {
        //     const tags = product.tags.length > 1 ? product.tags.split(', ') : [];
        //     tags.push('Sponsered');
        //     let uniqueTags = [...new Set(tags)];
        //     productMap.set(product.id, uniqueTags.join(','));
        // }
        // console.log('Process citrus prods ends');
        // reloadP();
        // return updateProductTagsBulk(productMap);

    }

    function getCitrusAds() {
        // alert("calling citrus");
        let url = new URL(`https://integration.dev.citrusad.com/v1/ads/generate`);

        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic sk_0UdLQzrjKRm8gOj-E3BzapIocd43NzI1NDE1Ni1mYjk1LTQzMmMtOTEzOC1iNjhkZjRjOTE0M2Y='
            },
            body: JSON.stringify({

                "placement": "all",

                "catalogId": "bcece48c-ee60-4724-abc5-1fd8d12ef151",

                "options": {

                    "filterMode": "AndOr"

                },

                "maxNumberOfAds": 3

            })
        }).then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            })
            ).then(res => {
                console.log("Hi Result from citrus")
                console.log(res);
                citrusResponse = res.data;
                // const citrusAds =  processCitrusResponse();

                var prodArray = [];
                console.log(citrusResponse);
                var adsArray = citrusResponse ? citrusResponse.ads : [];

                adsArray.forEach(function (item) {
                    console.log(item.gtin);
                    prodArray.push(item.gtin);
                    //updateProductTags(item.gtin);
                });
                //   updateProductWithTag(prodArray);
                // alert("citrus Response");
                // alert(prodArray);
                return prodArray;

            }));
    }

    function updateProductTags(productId) {
        let url = new URL(`https://epcit.myshopify.com/admin/api/2022-04/products/${productId}.json`);

        console.log(url);

        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': accessToken
            },
            body: JSON.stringify({
                "product": {
                    "id": `${productId}`,
                    "tags": "epcit"
                }
            })
        }).then(res => {
            //alert("hii result");  
            console.log(res);
            res.json()
        })
            .then(res => console.log(res));
    }

    init();
})(document, window.Resources = window.Resources || {});