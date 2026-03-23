/* IC2AI 2027 — shared.js */

// ── Countdown to conference ──────────────────────────────────
(function () {
    const CONF_DATE = new Date("Mar 17, 2027 08:00:00").getTime();

    function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

    function tick() {
        const diff = CONF_DATE - Date.now();
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        document.querySelectorAll('.count-days').forEach(el => el.textContent = pad(d));
        document.querySelectorAll('.count-hours').forEach(el => el.textContent = pad(h));
        document.querySelectorAll('.count-mins').forEach(el => el.textContent = pad(m));
        document.querySelectorAll('.count-secs').forEach(el => el.textContent = pad(s));
    }

    tick();
    setInterval(tick, 1000);
})();

// ── Mark active nav link by current page ────────────────────
(function () {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar a.nav-link, .navbar a.dropdown-item').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === current || (current === '' && href === 'index.html')) {
            link.classList.add('active');
            // Also open the parent dropdown toggle if nested
            const parentMenu = link.closest('.dropdown-menu');
            if (parentMenu) {
                const toggle = parentMenu.previousElementSibling;
                if (toggle) toggle.classList.add('active');
            }
        }
    });
})();
