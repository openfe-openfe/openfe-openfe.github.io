function ready(e) {
    "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
}
var loaded = 1,
params = url("?") || {};
ready(function() {
    function e(e) {
        return 1 - Math.pow(1 - e, 2.5)
    }
    function t(e, t) {
        var a = e.length;
        for (var n in e) {
            var o = new Image;
            o.onload = function() {
                o = null,
                --a || t()
            },
            o.src = e[n]
        }
    }
    var a = document.body.clientHeight,
    n = document.body.clientWidth;
    var o = document.querySelector("#scroll-screen"),
    r = 0,
    l = setTimeout(function() {
        document.querySelector(".next").style.display = "block"
    },
    900);
    Transform(o);
    var c = 0,
    u = 0,
    s = 0,
    i = 0,
    d = 0,
    p = 0,
    f = 600;
    new AlloyFinger(o, {
        touchMove: function(e) {
            e.preventDefault()
        },
        touchStart: function(e) {
            return e.preventDefault(),
            i = 0,
            s || o.translateY == -a * r ? void(s < 100 && !M && !d && (c = 0, u = 0, i = 1)) : void(o.translateY = -a * r)
        },
        pressMove: function(t) {
            t.preventDefault(),
            s > 50 || !i || d || (c += t.deltaX, u += t.deltaY, Math.abs(u) > Math.abs(c) && (p = 1), Math.abs(c) > Math.abs(u) && (d = 1), Math.abs(u) >= Math.abs(c) && (0 == r && u > 0 ? o.translateY = -a * r + u / 4 : 4 == r && u < 0 ? o.translateY = -a * r + u / 4 : o.translateY = -a * r + u / 2, u < -60 ? r < 4 && (s = 100, r++, new To(o, "translateY", -a * r, f, e,
            function() {
                s = 0
            }), i = 0, setTimeout(function() {
                s = 50
            },
            .6 * f), clearTimeout(l), r < 4 && (l = setTimeout(function() {
                document.querySelector(".next").style.display = "block"
            },
            f + 100)), document.querySelector(".next").style.display = "none") : u > 60 && r > 0 && (s = 100, r--, new To(o, "translateY", -a * r, f, e,
            function() {
                s = 0
            }), i = 0, setTimeout(function() {
                s = 50
            },
            .6 * f), clearTimeout(l), r < 4 && (l = setTimeout(function() {
                document.querySelector(".next").style.display = "block"
            },
            f + 100)), document.querySelector(".next").style.display = "none")))
        },
        touchEnd: function() {
            if (d = 0, p = 0, !s && i) {
                i = 0,
                s = 100;
                var t = Math.abs(o.translateY + a * r) / a * f + 250;
                new To(o, "translateY", -a * r, t, e,
                function() {
                    s = 0
                }),
                setTimeout(function() {
                    s = 50
                },
                .3 * t)
            }
        }
    });
    for (var m = .7 * n,
    h = .15 * n,
    y = document.querySelectorAll(".feature li"), v = 0; v < y.length; v++) y[v].style.width = m + "px";
    document.querySelector(".feature li").style.marginLeft = h + "px",
    document.querySelector(".feature").style.width = 7 * m + 40 + 2 * h + "px";
    var b = document.querySelector("#feature"),
    g = 0,
    w = 0,
    M = 0,
    T = 0;
    Transform(b),
    new AlloyFinger(b, {
        touchStart: function(e) {
            e.preventDefault(),
            !M && s < 100 && !p && (w = b.translateX, T = 1)
        },
        pressMove: function(e) {
            e.preventDefault(),
            M || !T || p || Math.abs(e.deltaY) > Math.abs(e.deltaX) || (0 == g && e.deltaX > 0 ? b.translateX += e.deltaX / 2.5 : 2 == g && e.deltaX < 0 ? b.translateX += e.deltaX / 2.5 : b.translateX += e.deltaX, e.preventDefault())
        },
        touchEnd: function(t) {
            if (t.preventDefault(), !M && T) {
                var a = b.translateX - w,
                n = 300;
                a < 0 ? g < 5 && a < -20 ? (new To(b, "translateX", w - m - 20, n, e), g++) : (n = Math.abs(n * (w - b.translateX) / (m + 20)) + 200, new To(b, "translateX", w, n, e)) : g > 0 && a > 20 ? (new To(b, "translateX", w + m + 20, n, e), g--) : (n = Math.abs(n * (b.translateX - w) / (m + 20)) + 200, new To(b, "translateX", w, n, e)),
                M = 1,
                setTimeout(function() {
                    M = 0,
                    T = 0
                },
                .6 * n)
            }
        }
    });
    for ( q = document.querySelectorAll(".btn"), v = 0; v < q.length; v++) new AlloyFinger(q[v], {
        tap: function() {
            var e = navigator.userAgent.toLowerCase();
            return "micromessenger" == e.match(/MicroMessenger/i) ? location.href = "http://d.icloudcity.cn/app": void(/iphone|ipad|ipod/.test(e) ? location.href = "http://d.icloudcity.cn/app": /android/.test(e) ? location.href = X: location.href = X)
        }
    })
});