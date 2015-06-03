(function () {
    'use strict';
    angular
    .module('mtapp.directives')
    .service('navigationService', naviagtionService)

    function naviagtionService() {
        this.getNavigationMenu = getNavigationMenu;
        function getNavigationMenu() {
            var menuJson = [{
                type: 'section',
                title: 'Promotions'
            }, {
                type: 'menu',
                title: 'Home',
                icon: 'fa-home',
                link: '/Home/Home.aspx'
            }, {
                type: 'submenu',
                title: 'Flashreport',
                icon: 'fa-bolt',
                link: '#',

                items: [{
                    type: 'menu',
                    title: 'Flyers and SOV',
                    icon: 'fa-university',
                    link: '/RecentAds/FlyersSov.aspx'
                }, {
                    type: 'menu',
                    title: 'Promoted Products',
                    icon: 'fa-video-camera',
                    link: '/RecentAds/PromotedProducts.aspx'
                }, {
                    type: 'menu',
                    title: 'Retailer Comparison',
                    icon: 'fa-camera-retro',
                    link: '/RecentAds/RetailerSideBySide.aspx',
                }, {
                    type: 'menu',
                    title: 'Manufacturer Comparison',
                    icon: 'fa-tachometer',
                    link: '/RecentAds/ManufacturerSideBySide.aspx',
                }]
            }, {
                type: 'submenu',
                title: 'Search Ads',
                icon: 'fa-search',
                link: '#',
                items: [{
                    type: 'menu',
                    title: 'Search Ads',
                    icon: 'fa-file-image-o',
                    link: '/SearchAds/SearchAds.aspx'
                }, {
                    type: 'menu',
                    title: 'Calendar',
                    icon: 'fa-calendar-o',
                    link: '/Result/Result.aspx'
                }, {
                    type: 'menu',
                    title: 'Summary',
                    icon: 'fa-suitcase',
                    link: '/Result/Result.aspx'
                }]
            }, {
                type: 'menu',
                title: 'Retailer Activity',
                icon: 'fa-desktop',
                link: '/RetailerVis/RetailerActivity.aspx'
            },

    {
        type: 'menu',
        title: 'Category & Brand Share',
        icon: 'fa-dot-circle-o',
        link: '/CategoryBrandVis/CategoryBrandByManufacturer.aspx'
    }, {
        type: 'submenu',
        title: 'Pricing & Promotions',
        icon: 'fa-bar-chart',
        link: '#',
        items: [{
            type: 'menu',
            title: 'Overview',
            icon: 'fa-credit-card',
            link: '/PricingPromoVis/PricingPromotionalByManufacturer.aspx'
        }, {
            type: 'menu',
            title: 'Market Price Landscape',
            icon: 'fa-book',
            link: '/PricingPromoVis/marketpricelandscape.aspx'
        }, ]
    }, {
        type: 'submenu',
        title: 'Custom Reports',
        icon: 'fa-tasks',
        link: '#',
        items: [{
            type: 'menu',
            title: 'Executive Dashboard',
            icon: 'fa-database',
            link: '/Visualization/ExecutiveDashboard.aspx'
        }, {
            type: 'menu',
            title: 'Ad block analysis',
            icon: 'fa-tags',
            link: '/Visualization/AdBlockAnalysis.aspx'
        }, {
            type: 'menu',
            title: 'Ad Performance summary',
            icon: 'fa-upload',
            link: '/Visualization/AdBlockSummary.aspx'
        }, ]
    }, {
        type: 'section',
        title: 'Additional Resources'
    }, {
        type: 'menu',
        title: 'Online Pricing',
        icon: 'fa-laptop',
        link: '#'
    }, {
        type: 'menu',
        title: 'Brand Protection',
        icon: 'fa-barcode',
        link: '#'
    }, {
        type: 'menu',
        title: 'POS',
        icon: 'fa-mobile',
        link: '#'
    },
            ];

            return menuJson;
        }
    }

})();