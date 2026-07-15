function pindahHalaman(namaHalaman) {
    // Sembunyikna semua halaman
    document.querySelectorAll('.page-view').forEach(function (el) {
        el.classList.remove('active');
    });

    const target = document.getElementById('page-' + namaHalaman);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link-page').forEach(function (link) {
        const isActive = link.getAttribute('data-page') === namaHalaman;
        link.classList.toggle('active', isActive);
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-white-50', !isActive);
    })

    window.scrollTo({ top: 0, behavior: 'instant' });

    $('#navbarLinks').collapse('hide');

    if (namaHalaman === 'akademik') {
        setTimeout(function () {
            $('[data-spy="scroll"]').each(function () {
                $(this).scrollspy('refresh');
            });
        }, 50);
    }
}

// Pasang event listener ke semua element yang punya data-page
document.querySelectorAll('[data-page]').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        pindahHalaman(this.getAttribute('data-page'));
    });
});