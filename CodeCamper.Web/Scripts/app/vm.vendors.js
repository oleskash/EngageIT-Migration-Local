/// <reference path="../knockout-3.4.1.js" />


define('vm.vendors',
    ['ko', 'underscore', 'datacontext', 'config', 'router', 'messenger', 'filter.speakers', 'sort', 'store'],
    function (ko, _, datacontext, config, router, messenger,
        SpeakerFilter,
        sort, store) {
        var
           // speakerFilter = new SpeakerFilter(),
            vendors = ko.observableArray(),
            //todo analyze what stateKey is
            stateKey = { searchText: 'vm.vendors.searchText' },
            tmplName = 'vendors.view',
            
            activate = function (routeData, callback) {
                messenger.publish.viewModelActivated({ canleaveCallback: canLeave });
                refresh(callback);
            },

            canLeave = function () {
                return true;
            },

            clearFilter = function () {
               // speakerFilter.searchText('');
            },

            forceRefreshCmd = ko.asyncCommand({
                execute: function (complete) {
                    datacontext.vendorSessions.forceDataRefresh()
                        .done(refresh)
                        .always(complete);
                }
            }),

            getVendors = function (callback) {
                //datacontext.speakerSessions.getLocalSpeakers(speakers, {
                //    //filter: speakerFilter,
                //    sortFunction: sort.speakerSort
                //});
                //if (_.isFunction(callback)) { callback(); }
            },

            gotoDetails = function (selectedSpeaker) {
                if (selectedSpeaker && selectedSpeaker.id()) {
                    router.navigateTo(config.hashes.speakers + '/' + selectedSpeaker.id());
                }
            },

            onFilterChange = function (val) {
                store.save(stateKey.searchText, val);
                refresh();
            },

            refresh = function (callback) {
                restoreFilter();
                getVendors(callback);
            },

            restoreFilter = function () {
                var val = store.fetch(stateKey.searchText);
                //if (val !== speakerFilter.searchText()) {
                //    speakerFilter.searchText(store.fetch(stateKey.searchText));
                //}
            },

            init = function () {
                //speakerFilter.searchText.subscribe(onFilterChange);
            };

        init();
        return {
            activate: activate,
            canLeave: canLeave,
            clearFilter: clearFilter,
            forceRefreshCmd: forceRefreshCmd,
            gotoDetails: gotoDetails,
            //speakerFilter: speakerFilter,
            vendors: vendors,
            tmplName: tmplName
        };
    });