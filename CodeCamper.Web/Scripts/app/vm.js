define('vm',
[
        'vm.favorites',
        'vm.session',
        'vm.sessions',
        'vm.shell',
        'vm.vendors',
        'vm.speaker',
        'vm.speakers'
],
    function (favorites, session, sessions, shell, vendors, speaker, speakers) {
        return {
            favorites: favorites,
            session: session,
            sessions: sessions,
            shell: shell,
            vendors: vendors,
            speaker: speaker,
            speakers: speakers
        };
    });