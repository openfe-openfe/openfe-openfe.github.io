!
function() {
    function t(t, i, s) {
        for (var n = 0,
        o = i.length; n < o; n++) {
            var h = i[n];
            e(t, h, s)
        }
    }
    function e(t, e, i) {
        Object.defineProperty(t, e, {
            get: function() {
                return this["__" + e]
            },
            set: function(t) {
                t !== this["__" + e] && (this["__" + e] = t, i())
            }
        })
    }
    var i = function(t, e, i, s, n, o, h, a, r, l, u, c, p, m, d, T) {
        this.elements = window.Float32Array ? new Float32Array(16) : [];
        var f = this.elements;
        f[0] = void 0 !== t ? t: 1,
        f[4] = e || 0,
        f[8] = i || 0,
        f[12] = s || 0,
        f[1] = n || 0,
        f[5] = void 0 !== o ? o: 1,
        f[9] = h || 0,
        f[13] = a || 0,
        f[2] = r || 0,
        f[6] = l || 0,
        f[10] = void 0 !== u ? u: 1,
        f[14] = c || 0,
        f[3] = p || 0,
        f[7] = m || 0,
        f[11] = d || 0,
        f[15] = void 0 !== T ? T: 1
    };
    i.DEG_TO_RAD = Math.PI / 180,
    i.prototype = {
        set: function(t, e, i, s, n, o, h, a, r, l, u, c, p, m, d, T) {
            var f = this.elements;
            return f[0] = t,
            f[4] = e,
            f[8] = i,
            f[12] = s,
            f[1] = n,
            f[5] = o,
            f[9] = h,
            f[13] = a,
            f[2] = r,
            f[6] = l,
            f[10] = u,
            f[14] = c,
            f[3] = p,
            f[7] = m,
            f[11] = d,
            f[15] = T,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        multiplyMatrices: function(t, e) {
            var i = t.elements,
            s = this.elements,
            n = i[0],
            o = i[4],
            h = i[8],
            a = i[12],
            r = i[1],
            l = i[5],
            u = i[9],
            c = i[13],
            p = i[2],
            m = i[6],
            d = i[10],
            T = i[14],
            f = i[3],
            w = i[7],
            v = i[11],
            y = i[15],
            g = e[0],
            x = e[1],
            _ = e[2],
            M = e[3],
            D = e[4],
            b = e[5],
            A = e[6],
            E = e[7],
            L = e[8],
            S = e[9],
            X = e[10],
            Y = e[11],
            F = e[12],
            k = e[13],
            q = e[14],
            R = e[15];
            return s[0] = n * g + o * D + h * L + a * F,
            s[4] = n * x + o * b + h * S + a * k,
            s[8] = n * _ + o * A + h * X + a * q,
            s[12] = n * M + o * E + h * Y + a * R,
            s[1] = r * g + l * D + u * L + c * F,
            s[5] = r * x + l * b + u * S + c * k,
            s[9] = r * _ + l * A + u * X + c * q,
            s[13] = r * M + l * E + u * Y + c * R,
            s[2] = p * g + m * D + d * L + T * F,
            s[6] = p * x + m * b + d * S + T * k,
            s[10] = p * _ + m * A + d * X + T * q,
            s[14] = p * M + m * E + d * Y + T * R,
            s[3] = f * g + w * D + v * L + y * F,
            s[7] = f * x + w * b + v * S + y * k,
            s[11] = f * _ + w * A + v * X + y * q,
            s[15] = f * M + w * E + v * Y + y * R,
            this
        },
        _rounded: function(t, e) {
            return e = Math.pow(10, e || 15),
            Math.round(t * e) / e
        },
        appendTransform: function(t, e, s, n, o, h, a, r, l, u, c, p, m, d) {
            var T = a * i.DEG_TO_RAD,
            f = this._rounded(Math.cos(T)),
            w = this._rounded(Math.sin(T)),
            v = r * i.DEG_TO_RAD,
            y = this._rounded(Math.cos(v)),
            g = this._rounded(Math.sin(v)),
            x = l * i.DEG_TO_RAD,
            _ = this._rounded(Math.cos(x * -1)),
            M = this._rounded(Math.sin(x * -1));
            return this.multiplyMatrices(this, [1, 0, 0, t, 0, f, w, e, 0, -w, f, s, 0, 0, 0, 1]),
            this.multiplyMatrices(this, [y, 0, g, 0, 0, 1, 0, 0, -g, 0, y, 0, 0, 0, 0, 1]),
            this.multiplyMatrices(this, [_ * n, M * o, 0, 0, -M * n, _ * o, 0, 0, 0, 0, 1 * h, 0, 0, 0, 0, 1]),
            (u || c) && this.multiplyMatrices(this, [this._rounded(Math.cos(u * i.DEG_TO_RAD)), this._rounded(Math.sin(u * i.DEG_TO_RAD)), 0, 0, -1 * this._rounded(Math.sin(c * i.DEG_TO_RAD)), this._rounded(Math.cos(c * i.DEG_TO_RAD)), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
            (p || m || d) && (this.elements[12] -= p * this.elements[0] + m * this.elements[4] + d * this.elements[8], this.elements[13] -= p * this.elements[1] + m * this.elements[5] + d * this.elements[9], this.elements[14] -= p * this.elements[2] + m * this.elements[6] + d * this.elements[10]),
            this
        }
    },
    window.Transform = function(e, s) {
        t(e, ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"],
        function() {
            var t = e.matrix3D.identity().appendTransform(e.translateX, e.translateY, e.translateZ, e.scaleX, e.scaleY, e.scaleZ, e.rotateX, e.rotateY, e.rotateZ, e.skewX, e.skewY, e.originX, e.originY, e.originZ);
            // console.log(t.)
            e.style.transform = e.style.msTransform = e.style.OTransform = e.style.MozTransform = e.style.webkitTransform = (s ? "": "perspective(" + (void 0 === e.perspective ? 500 : e.perspective) + "px) ") + "matrix3d(" + Array.prototype.slice.call(t.elements).join(",") + ")"
        }),
        e.matrix3D = new i,
        s || (t(e, ["perspective"],
        function() {
            e.style.transform = e.style.msTransform = e.style.OTransform = e.style.MozTransform = e.style.webkitTransform = "perspective(" + e.perspective + "px) matrix3d(" + Array.prototype.slice.call(e.matrix3D.elements).join(",") + ")"
        }), e.perspective = 500),
        e.scaleX = e.scaleY = e.scaleZ = 1,
        e.translateX = e.translateY = e.translateZ = e.rotateX = e.rotateY = e.rotateZ = e.skewX = e.skewY = e.originX = e.originY = e.originZ = 0
    }
} (),
function() {
    for (var t = 0,
    e = ["webkit", "moz"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var i = (new Date).getTime(),
        s = Math.max(0, 16 - (i - t)),
        n = window.setTimeout(function() {
            e(i + s)
        },
        s);
        return t = i + s,
        n
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
} ();
var To = function(t, e, i, s, n, o, h) {
    var a = t[e],
    r = i - a,
    l = new Date,
    u = this,
    c = n ||
    function(t) {
        return t
    };
    this.tickID = null;
    var p = function() {
        var n = new Date - l;
        return n >= s ? (t[e] = i, h && h(i), o && o(i), cancelAnimationFrame(u.tickID), void(u.toTick = null)) : (t[e] = r * c(n / s) + a, u.tickID = requestAnimationFrame(p), void(h && h(t[e])))
    };
    p(),
    To.List.push(this)
};
To.List = [],
To.stopAll = function() {
    for (var t = 0,
    e = To.List.length; t < e; t++) cancelAnimationFrame(To.List[t].tickID);
    To.List.length = 0
},
To.stop = function(t) {
    cancelAnimationFrame(t.tickID)
},
function() {
    function t(t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
    }
    function e(t, e) {
        return t.x * e.x + t.y * e.y
    }
    function i(i, s) {
        var n = t(i) * t(s);
        if (0 === n) return 0;
        var o = e(i, s) / n;
        return o > 1 && (o = 1),
        Math.acos(o)
    }
    function s(t, e) {
        return t.x * e.y - e.x * t.y
    }
    function n(t, e) {
        var n = i(t, e);
        return s(t, e) > 0 && (n *= -1),
        180 * n / Math.PI
    }
    function o(t, e) {
        var i = new h(t);
        return i.add(e),
        i
    }
    var h = function(t) {
        this.handlers = [],
        this.el = t
    };
    h.prototype.add = function(t) {
        this.handlers.push(t)
    },
    h.prototype.del = function(t) {
        t || (this.handlers = []);
        for (var e = this.handlers.length; e >= 0; e--) this.handlers[e] === t && this.handlers.splice(e, 1)
    },
    h.prototype.dispatch = function() {
        for (var t = 0,
        e = this.handlers.length; t < e; t++) {
            var i = this.handlers[t];
            "function" == typeof i && i.apply(this.el, arguments)
        }
    };
    var a = function(t, e) {
        this.element = "string" == typeof t ? document.querySelector(t) : t,
        this.start = this.start.bind(this),
        this.move = this.move.bind(this),
        this.end = this.end.bind(this),
        this.cancel = this.cancel.bind(this),
        this.element.addEventListener("touchstart", this.start, !1),
        this.element.addEventListener("touchmove", this.move, !1),
        this.element.addEventListener("touchend", this.end, !1),
        this.element.addEventListener("touchcancel", this.cancel, !1),
        this.preV = {
            x: null,
            y: null
        },
        this.pinchStartLen = null,
        this.zoom = 1,
        this.isDoubleTap = !1;
        var i = function() {};
        this.rotate = o(this.element, e.rotate || i),
        this.touchStart = o(this.element, e.touchStart || i),
        this.multipointStart = o(this.element, e.multipointStart || i),
        this.multipointEnd = o(this.element, e.multipointEnd || i),
        this.pinch = o(this.element, e.pinch || i),
        this.swipe = o(this.element, e.swipe || i),
        this.tap = o(this.element, e.tap || i),
        this.doubleTap = o(this.element, e.doubleTap || i),
        this.longTap = o(this.element, e.longTap || i),
        this.singleTap = o(this.element, e.singleTap || i),
        this.pressMove = o(this.element, e.pressMove || i),
        this.touchMove = o(this.element, e.touchMove || i),
        this.touchEnd = o(this.element, e.touchEnd || i),
        this.touchCancel = o(this.element, e.touchCancel || i),
        this.delta = null,
        this.last = null,
        this.now = null,
        this.tapTimeout = null,
        this.singleTapTimeout = null,
        this.longTapTimeout = null,
        this.swipeTimeout = null,
        this.x1 = this.x2 = this.y1 = this.y2 = null,
        this.preTapPosition = {
            x: null,
            y: null
        }
    };
    a.prototype = {
        start: function(e) {
            if (e.touches) {
                this.now = Date.now(),
                this.x1 = e.touches[0].pageX,
                this.y1 = e.touches[0].pageY,
                this.delta = this.now - (this.last || this.now),
                this.touchStart.dispatch(e),
                null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30),
                this.preTapPosition.x = this.x1,
                this.preTapPosition.y = this.y1,
                this.last = this.now;
                var i = this.preV,
                s = e.touches.length;
                if (s > 1) {
                    this._cancelLongTap(),
                    this._cancelSingleTap();
                    var n = {
                        x: e.touches[1].pageX - this.x1,
                        y: e.touches[1].pageY - this.y1
                    };
                    i.x = n.x,
                    i.y = n.y,
                    this.pinchStartLen = t(i),
                    this.multipointStart.dispatch(e)
                }
                this.longTapTimeout = setTimeout(function() {
                    this.longTap.dispatch(e)
                }.bind(this), 750)
            }
        },
        move: function(e) {
            if (e.touches) {
                var i = this.preV,
                s = e.touches.length,
                o = e.touches[0].pageX,
                h = e.touches[0].pageY;
                if (this.isDoubleTap = !1, s > 1) {
                    var a = {
                        x: e.touches[1].pageX - o,
                        y: e.touches[1].pageY - h
                    };
                    null !== i.x && (this.pinchStartLen > 0 && (e.zoom = t(a) / this.pinchStartLen, this.pinch.dispatch(e)), e.angle = n(a, i), this.rotate.dispatch(e)),
                    i.x = a.x,
                    i.y = a.y
                } else null !== this.x2 ? (e.deltaX = o - this.x2, e.deltaY = h - this.y2) : (e.deltaX = 0, e.deltaY = 0),
                this.pressMove.dispatch(e);
                this.touchMove.dispatch(e),
                this._cancelLongTap(),
                this.x2 = o,
                this.y2 = h,
                s > 1 && e.preventDefault()
            }
        },
        end: function(t) {
            if (t.changedTouches) {
                this._cancelLongTap();
                var e = this;
                t.touches.length < 2 && this.multipointEnd.dispatch(t),
                this.touchEnd.dispatch(t),
                this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (t.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                    e.swipe.dispatch(t)
                },
                0)) : (this.tapTimeout = setTimeout(function() {
                    e.tap.dispatch(t),
                    e.isDoubleTap && (e.doubleTap.dispatch(t), clearTimeout(e.singleTapTimeout), e.isDoubleTap = !1)
                },
                0), e.isDoubleTap || (e.singleTapTimeout = setTimeout(function() {
                    e.singleTap.dispatch(t)
                },
                250))),
                this.preV.x = 0,
                this.preV.y = 0,
                this.zoom = 1,
                this.pinchStartLen = null,
                this.x1 = this.x2 = this.y1 = this.y2 = null
            }
        },
        cancel: function(t) {
            clearTimeout(this.singleTapTimeout),
            clearTimeout(this.tapTimeout),
            clearTimeout(this.longTapTimeout),
            clearTimeout(this.swipeTimeout),
            this.touchCancel.dispatch(t)
        },
        _cancelLongTap: function() {
            clearTimeout(this.longTapTimeout)
        },
        _cancelSingleTap: function() {
            clearTimeout(this.singleTapTimeout)
        },
        _swipeDirection: function(t, e, i, s) {
            return Math.abs(t - e) >= Math.abs(i - s) ? t - e > 0 ? "Left": "Right": i - s > 0 ? "Up": "Down"
        },
        on: function(t, e) {
            this[t] && this[t].add(e)
        },
        off: function(t, e) {
            this[t] && this[t].del(e)
        },
        destroy: function() {
            return this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
            this.tapTimeout && clearTimeout(this.tapTimeout),
            this.longTapTimeout && clearTimeout(this.longTapTimeout),
            this.swipeTimeout && clearTimeout(this.swipeTimeout),
            this.element.removeEventListener("touchstart", this.start),
            this.element.removeEventListener("touchmove", this.move),
            this.element.removeEventListener("touchend", this.end),
            this.element.removeEventListener("touchcancel", this.cancel),
            this.rotate.del(),
            this.touchStart.del(),
            this.multipointStart.del(),
            this.multipointEnd.del(),
            this.pinch.del(),
            this.swipe.del(),
            this.tap.del(),
            this.doubleTap.del(),
            this.longTap.del(),
            this.singleTap.del(),
            this.pressMove.del(),
            this.touchMove.del(),
            this.touchEnd.del(),
            this.touchCancel.del(),
            this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = null,
            null
        }
    },
    "undefined" != typeof module && "object" == typeof exports ? module.exports = a: window.AlloyFinger = a
} (),
!
function() {
    var t = function() {
        function t() {}
        function e(t) {
            return decodeURIComponent(t.replace(/\+/g, " "))
        }
        function i(t, e) {
            var i = t.charAt(0),
            s = e.split(i);
            return i === t ? s: (t = parseInt(t.substring(1), 10), s[t < 0 ? s.length + t: t - 1])
        }
        function s(t, i) {
            for (var s = t.charAt(0), n = i.split("&"), o = [], h = {},
            a = [], r = t.substring(1), l = 0, u = n.length; l < u; l++) if (o = n[l].match(/(.*?)=(.*)/), o || (o = [n[l], n[l], ""]), "" !== o[1].replace(/\s/g, "")) {
                if (o[2] = e(o[2] || ""), r === o[1]) return o[2];
                a = o[1].match(/(.*)\[([0-9]+)\]/),
                a ? (h[a[1]] = h[a[1]] || [], h[a[1]][a[2]] = o[2]) : h[o[1]] = o[2]
            }
            return s === t ? h: h[r]
        }
        return function(e, n) {
            var o, h = {};
            if ("tld?" === e) return t();
            if (n = n || window.location.toString(), !e) return n;
            if (e = e.toString(), o = n.match(/^mailto:([^\/].+)/)) h.protocol = "mailto",
            h.email = o[1];
            else {
                if ((o = n.match(/(.*?)\/#\!(.*)/)) && (n = o[1] + o[2]), (o = n.match(/(.*?)#(.*)/)) && (h.hash = o[2], n = o[1]), h.hash && e.match(/^#/)) return s(e, h.hash);
                if ((o = n.match(/(.*?)\?(.*)/)) && (h.query = o[2], n = o[1]), h.query && e.match(/^\?/)) return s(e, h.query);
                if ((o = n.match(/(.*?)\:?\/\/(.*)/)) && (h.protocol = o[1].toLowerCase(), n = o[2]), (o = n.match(/(.*?)(\/.*)/)) && (h.path = o[2], n = o[1]), h.path = (h.path || "").replace(/^([^\/])/, "/$1"), e.match(/^[\-0-9]+$/) && (e = e.replace(/^([^\/])/, "/$1")), e.match(/^\//)) return i(e, h.path.substring(1));
                if (o = i("/-1", h.path.substring(1)), o && (o = o.match(/(.*?)\.(.*)/)) && (h.file = o[0], h.filename = o[1], h.fileext = o[2]), (o = n.match(/(.*)\:([0-9]+)$/)) && (h.port = o[2], n = o[1]), (o = n.match(/(.*?)@(.*)/)) && (h.auth = o[1], n = o[2]), h.auth && (o = h.auth.match(/(.*)\:(.*)/), h.user = o ? o[1] : h.auth, h.pass = o ? o[2] : void 0), h.hostname = n.toLowerCase(), "." === e.charAt(0)) return i(e, h.hostname);
                t() && (o = h.hostname.match(t()), o && (h.tld = o[3], h.domain = o[2] ? o[2] + "." + o[3] : void 0, h.sub = o[1] || void 0)),
                h.port = h.port || ("https" === h.protocol ? "443": "80"),
                h.protocol = h.protocol || ("443" === h.port ? "https": "http")
            }
            return e in h ? h[e] : "{}" === e ? h: void 0
        }
    } ();
    "function" == typeof window.define && window.define.amd ? window.define("js-url", [],
    function() {
        return t
    }) : ("undefined" != typeof window.jQuery && window.jQuery.extend({
        url: function(t, e) {
            return window.url(t, e)
        }
    }), window.url = t)
} ();