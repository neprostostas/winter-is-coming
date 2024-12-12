/*! For license information please see main.min.js.LICENSE.txt */
!(function () {
    "use strict";
    function t(t, n) {
        for (var e = 0; e < n.length; e++) {
            var i = n[e];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    var n = "(prefers-reduced-motion: reduce)",
        e = 4,
        i = 5,
        o = { CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: e, SCROLLING: i, DRAGGING: 6, DESTROYED: 7 };
    function r(t) {
        t.length = 0;
    }
    function u(t, n, e) {
        return Array.prototype.slice.call(t, n, e);
    }
    function a(t) {
        return t.bind.apply(t, [null].concat(u(arguments, 1)));
    }
    var c = setTimeout,
        s = function () {};
    function f(t) {
        return requestAnimationFrame(t);
    }
    function l(t, n) {
        return typeof n === t;
    }
    function d(t) {
        return !m(t) && l("object", t);
    }
    var v = Array.isArray,
        p = a(l, "function"),
        h = a(l, "string"),
        g = a(l, "undefined");
    function m(t) {
        return null === t;
    }
    function y(t) {
        try {
            return t instanceof (t.ownerDocument.defaultView || window).HTMLElement;
        } catch (t) {
            return !1;
        }
    }
    function b(t) {
        return v(t) ? t : [t];
    }
    function w(t, n) {
        b(t).forEach(n);
    }
    function E(t, n) {
        return t.indexOf(n) > -1;
    }
    function S(t, n) {
        return t.push.apply(t, b(n)), t;
    }
    function x(t, n, e) {
        t &&
        w(n, function (n) {
            n && t.classList[e ? "add" : "remove"](n);
        });
    }
    function C(t, n) {
        x(t, h(n) ? n.split(" ") : n, !0);
    }
    function P(t, n) {
        w(n, t.appendChild.bind(t));
    }
    function L(t, n) {
        w(t, function (t) {
            var e = (n || t).parentNode;
            e && e.insertBefore(t, n);
        });
    }
    function k(t, n) {
        return y(t) && (t.msMatchesSelector || t.matches).call(t, n);
    }
    function A(t, n) {
        var e = t ? u(t.children) : [];
        return n
            ? e.filter(function (t) {
                return k(t, n);
            })
            : e;
    }
    function _(t, n) {
        return n ? A(t, n)[0] : t.firstElementChild;
    }
    var M = Object.keys;
    function D(t, n, e) {
        return (
            t &&
            (e ? M(t).reverse() : M(t)).forEach(function (e) {
                "__proto__" !== e && n(t[e], e);
            }),
                t
        );
    }
    function O(t) {
        return (
            u(arguments, 1).forEach(function (n) {
                D(n, function (e, i) {
                    t[i] = n[i];
                });
            }),
                t
        );
    }
    function z(t) {
        return (
            u(arguments, 1).forEach(function (n) {
                D(n, function (n, e) {
                    v(n) ? (t[e] = n.slice()) : d(n) ? (t[e] = z({}, d(t[e]) ? t[e] : {}, n)) : (t[e] = n);
                });
            }),
                t
        );
    }
    function I(t, n) {
        w(n || M(t), function (n) {
            delete t[n];
        });
    }
    function T(t, n) {
        w(t, function (t) {
            w(n, function (n) {
                t && t.removeAttribute(n);
            });
        });
    }
    function N(t, n, e) {
        d(n)
            ? D(n, function (n, e) {
                N(t, e, n);
            })
            : w(t, function (t) {
                m(e) || "" === e ? T(t, n) : t.setAttribute(n, String(e));
            });
    }
    function F(t, n, e) {
        var i = document.createElement(t);
        return n && (h(n) ? C(i, n) : N(i, n)), e && P(e, i), i;
    }
    function j(t, n, e) {
        if (g(e)) return getComputedStyle(t)[n];
        m(e) || (t.style[n] = "" + e);
    }
    function R(t, n) {
        j(t, "display", n);
    }
    function W(t) {
        (t.setActive && t.setActive()) || t.focus({ preventScroll: !0 });
    }
    function q(t, n) {
        return t.getAttribute(n);
    }
    function X(t, n) {
        return t && t.classList.contains(n);
    }
    function G(t) {
        return t.getBoundingClientRect();
    }
    function H(t) {
        w(t, function (t) {
            t && t.parentNode && t.parentNode.removeChild(t);
        });
    }
    function B(t) {
        return _(new DOMParser().parseFromString(t, "text/html").body);
    }
    function Y(t, n) {
        t.preventDefault(), n && (t.stopPropagation(), t.stopImmediatePropagation());
    }
    function U(t, n) {
        return t && t.querySelector(n);
    }
    function K(t, n) {
        return n ? u(t.querySelectorAll(n)) : [];
    }
    function J(t, n) {
        x(t, n, !1);
    }
    function V(t) {
        return t.timeStamp;
    }
    function Q(t) {
        return h(t) ? t : t ? t + "px" : "";
    }
    var Z = "splide",
        $ = "data-" + Z;
    function tt(t, n) {
        if (!t) throw new Error("[" + Z + "] " + (n || ""));
    }
    var nt = Math.min,
        et = Math.max,
        it = Math.floor,
        ot = Math.ceil,
        rt = Math.abs;
    function ut(t, n, e) {
        return rt(t - n) < e;
    }
    function at(t, n, e, i) {
        var o = nt(n, e),
            r = et(n, e);
        return i ? o < t && t < r : o <= t && t <= r;
    }
    function ct(t, n, e) {
        var i = nt(n, e),
            o = et(n, e);
        return nt(et(i, t), o);
    }
    function st(t) {
        return +(t > 0) - +(t < 0);
    }
    function ft(t, n) {
        return (
            w(n, function (n) {
                t = t.replace("%s", "" + n);
            }),
                t
        );
    }
    function lt(t) {
        return t < 10 ? "0" + t : "" + t;
    }
    var dt = {};
    function vt(t) {
        return "" + t + lt((dt[t] = (dt[t] || 0) + 1));
    }
    function pt() {
        var t = [];
        function n(t, n, e) {
            w(t, function (t) {
                t &&
                w(n, function (n) {
                    n.split(" ").forEach(function (n) {
                        var i = n.split(".");
                        e(t, i[0], i[1]);
                    });
                });
            });
        }
        return {
            bind: function (e, i, o, r) {
                n(e, i, function (n, e, i) {
                    var u = "addEventListener" in n,
                        a = u ? n.removeEventListener.bind(n, e, o, r) : n.removeListener.bind(n, o);
                    u ? n.addEventListener(e, o, r) : n.addListener(o), t.push([n, e, i, o, a]);
                });
            },
            unbind: function (e, i, o) {
                n(e, i, function (n, e, i) {
                    t = t.filter(function (t) {
                        return !!(t[0] !== n || t[1] !== e || t[2] !== i || (o && t[3] !== o)) || (t[4](), !1);
                    });
                });
            },
            dispatch: function (t, n, e) {
                var i;
                return "function" == typeof CustomEvent ? (i = new CustomEvent(n, { bubbles: true, detail: e })) : (i = document.createEvent("CustomEvent")).initCustomEvent(n, true, !1, e), t.dispatchEvent(i), i;
            },
            destroy: function () {
                t.forEach(function (t) {
                    t[4]();
                }),
                    r(t);
            },
        };
    }
    var ht = "mounted",
        gt = "ready",
        mt = "move",
        yt = "moved",
        bt = "click",
        wt = "active",
        Et = "inactive",
        St = "visible",
        xt = "hidden",
        Ct = "refresh",
        Pt = "updated",
        Lt = "resize",
        kt = "resized",
        At = "scroll",
        _t = "scrolled",
        Mt = "destroy",
        Dt = "arrows:mounted",
        Ot = "navigation:mounted",
        zt = "autoplay:play",
        It = "autoplay:pause",
        Tt = "lazyload:loaded",
        Nt = "sk",
        Ft = "sh",
        jt = "ei";
    function Rt(t) {
        var n = t ? t.event.bus : document.createDocumentFragment(),
            e = pt();
        return (
            t && t.event.on(Mt, e.destroy),
                O(e, {
                    bus: n,
                    on: function (t, i) {
                        e.bind(n, b(t).join(" "), function (t) {
                            i.apply(i, v(t.detail) ? t.detail : []);
                        });
                    },
                    off: a(e.unbind, n),
                    emit: function (t) {
                        e.dispatch(n, t, u(arguments, 1));
                    },
                })
        );
    }
    function Wt(t, n, e, i) {
        var o,
            r,
            u = Date.now,
            a = 0,
            c = !0,
            s = 0;
        function l() {
            if (!c) {
                if (((a = t ? nt((u() - o) / t, 1) : 1), e && e(a), a >= 1 && (n(), (o = u()), i && ++s >= i))) return d();
                r = f(l);
            }
        }
        function d() {
            c = !0;
        }
        function v() {
            r && cancelAnimationFrame(r), (a = 0), (r = 0), (c = !0);
        }
        return {
            start: function (n) {
                n || v(), (o = u() - (n ? a * t : 0)), (c = !1), (r = f(l));
            },
            rewind: function () {
                (o = u()), (a = 0), e && e(a);
            },
            pause: d,
            cancel: v,
            set: function (n) {
                t = n;
            },
            isPaused: function () {
                return c;
            },
        };
    }
    var qt = "Arrow",
        Xt = qt + "Left",
        Gt = qt + "Right",
        Ht = qt + "Up",
        Bt = qt + "Down",
        Yt = "ttb",
        Ut = { width: ["height"], left: ["top", "right"], right: ["bottom", "left"], x: ["y"], X: ["Y"], Y: ["X"], ArrowLeft: [Ht, Gt], ArrowRight: [Bt, Xt] };
    function Kt(t, n, e) {
        return {
            resolve: function (t, n, i) {
                var o = "rtl" !== (i = i || e.direction) || n ? (i === Yt ? 0 : -1) : 1;
                return (
                    (Ut[t] && Ut[t][o]) ||
                    t.replace(/width|left|right/i, function (t, n) {
                        var e = Ut[t.toLowerCase()][o] || t;
                        return n > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e;
                    })
                );
            },
            orient: function (t) {
                return t * ("rtl" === e.direction ? 1 : -1);
            },
        };
    }
    var Jt = "role",
        Vt = "tabindex",
        Qt = "aria-",
        Zt = Qt + "controls",
        $t = Qt + "current",
        tn = Qt + "selected",
        nn = Qt + "label",
        en = Qt + "labelledby",
        on = Qt + "hidden",
        rn = Qt + "orientation",
        un = Qt + "roledescription",
        an = Qt + "live",
        cn = Qt + "busy",
        sn = Qt + "atomic",
        fn = [Jt, Vt, "disabled", Zt, $t, nn, en, on, rn, un],
        ln = Z + "__",
        dn = "is-",
        vn = Z,
        pn = ln + "track",
        hn = ln + "list",
        gn = ln + "slide",
        mn = gn + "--clone",
        yn = gn + "__container",
        bn = ln + "arrows",
        wn = ln + "arrow",
        En = wn + "--prev",
        Sn = wn + "--next",
        xn = ln + "pagination",
        Cn = xn + "__page",
        Pn = ln + "progress" + "__bar",
        Ln = ln + "toggle",
        kn = ln + "sr",
        An = dn + "initialized",
        _n = dn + "active",
        Mn = dn + "prev",
        Dn = dn + "next",
        On = dn + "visible",
        zn = dn + "loading",
        In = dn + "focus-in",
        Tn = dn + "overflow",
        Nn = [_n, On, Mn, Dn, zn, In, Tn],
        Fn = { slide: gn, clone: mn, arrows: bn, arrow: wn, prev: En, next: Sn, pagination: xn, page: Cn, spinner: ln + "spinner" };
    var jn = "touchstart mousedown",
        Rn = "touchmove mousemove",
        Wn = "touchend touchcancel mouseup click";
    var qn = "slide",
        Xn = "loop",
        Gn = "fade";
    function Hn(t, n, o, r) {
        var u,
            c = Rt(t),
            s = c.on,
            f = c.emit,
            l = c.bind,
            d = t.Components,
            v = t.root,
            p = t.options,
            h = p.isNavigation,
            g = p.updateOnMove,
            m = p.i18n,
            y = p.pagination,
            b = p.slideFocus,
            w = d.Direction.resolve,
            E = q(r, "style"),
            S = q(r, nn),
            C = o > -1,
            P = _(r, "." + yn);
        function L() {
            var e = t.splides
                .map(function (t) {
                    var e = t.splide.Components.Slides.getAt(n);
                    return e ? e.slide.id : "";
                })
                .join(" ");
            N(r, nn, ft(m.slideX, (C ? o : n) + 1)), N(r, Zt, e), N(r, Jt, b ? "button" : ""), b && T(r, un);
        }
        function k() {
            u || A();
        }
        function A() {
            if (!u) {
                var o = t.index;
                (a = M()) !== X(r, _n) && (x(r, _n, a), N(r, $t, (h && a) || ""), f(a ? wt : Et, D)),
                    (function () {
                        var n = (function () {
                                if (t.is(Gn)) return M();
                                var n = G(d.Elements.track),
                                    e = G(r),
                                    i = w("left", !0),
                                    o = w("right", !0);
                                return it(n[i]) <= ot(e[i]) && it(e[o]) <= ot(n[o]);
                            })(),
                            o = !n && (!M() || C);
                        t.state.is([e, i]) || N(r, on, o || "");
                        N(K(r, p.focusableNodes || ""), Vt, o ? -1 : ""), b && N(r, Vt, o ? -1 : 0);
                        n !== X(r, On) && (x(r, On, n), f(n ? St : xt, D));
                        if (!n && document.activeElement === r) {
                            var u = d.Slides.getAt(t.index);
                            u && W(u.slide);
                        }
                    })(),
                    x(r, Mn, n === o - 1),
                    x(r, Dn, n === o + 1);
            }
            var a;
        }
        function M() {
            var e = t.index;
            return e === n || (p.cloneStatus && e === o);
        }
        var D = {
            index: n,
            slideIndex: o,
            slide: r,
            container: P,
            isClone: C,
            mount: function () {
                C || ((r.id = v.id + "-slide" + lt(n + 1)), N(r, Jt, y ? "tabpanel" : "group"), N(r, un, m.slide), N(r, nn, S || ft(m.slideLabel, [n + 1, t.length]))),
                    l(r, "click", a(f, bt, D)),
                    l(r, "keydown", a(f, Nt, D)),
                    s([yt, Ft, _t], A),
                    s(Ot, L),
                g && s(mt, k);
            },
            destroy: function () {
                (u = !0), c.destroy(), J(r, Nn), T(r, fn), N(r, "style", E), N(r, nn, S || "");
            },
            update: A,
            style: function (t, n, e) {
                j((e && P) || r, t, n);
            },
            isWithin: function (e, i) {
                var o = rt(e - n);
                return C || (!p.rewind && !t.is(Xn)) || (o = nt(o, t.length - o)), o <= i;
            },
        };
        return D;
    }
    var Bn = "http://www.w3.org/2000/svg",
        Yn = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
    var Un = $ + "-interval";
    var Kn = { passive: !1, capture: !0 };
    var Jn = { Spacebar: " ", Right: Gt, Left: Xt, Up: Ht, Down: Bt };
    function Vn(t) {
        return (t = h(t) ? t : t.key), Jn[t] || t;
    }
    var Qn = "keydown";
    var Zn = $ + "-lazy",
        $n = Zn + "-srcset",
        te = "[" + Zn + "], [" + $n + "]";
    var ne = [" ", "Enter"];
    var ee = Object.freeze({
            __proto__: null,
            Media: function (t, e, i) {
                var o = t.state,
                    r = i.breakpoints || {},
                    u = i.reducedMotion || {},
                    a = pt(),
                    c = [];
                function s(t) {
                    t && a.destroy();
                }
                function f(t, n) {
                    var e = matchMedia(n);
                    a.bind(e, "change", l), c.push([t, e]);
                }
                function l() {
                    var n = o.is(7),
                        e = i.direction,
                        r = c.reduce(function (t, n) {
                            return z(t, n[1].matches ? n[0] : {});
                        }, {});
                    I(i), d(r), i.destroy ? t.destroy("completely" === i.destroy) : n ? (s(!0), t.mount()) : e !== i.direction && t.refresh();
                }
                function d(n, e, r) {
                    z(i, n), e && z(Object.getPrototypeOf(i), n), (!r && o.is(1)) || t.emit(Pt, i);
                }
                return {
                    setup: function () {
                        var t = "min" === i.mediaQuery;
                        M(r)
                            .sort(function (n, e) {
                                return t ? +n - +e : +e - +n;
                            })
                            .forEach(function (n) {
                                f(r[n], "(" + (t ? "min" : "max") + "-width:" + n + "px)");
                            }),
                            f(u, n),
                            l();
                    },
                    destroy: s,
                    reduce: function (t) {
                        matchMedia(n).matches && (t ? z(i, u) : I(i, M(u)));
                    },
                    set: d,
                };
            },
            Direction: Kt,
            Elements: function (t, n, e) {
                var i,
                    o,
                    u,
                    a = Rt(t),
                    c = a.on,
                    s = a.bind,
                    f = t.root,
                    l = e.i18n,
                    d = {},
                    v = [],
                    h = [],
                    g = [];
                function m() {
                    (i = w("." + pn)),
                        (o = _(i, "." + hn)),
                        tt(i && o, "A track/list element is missing."),
                        S(v, A(o, "." + gn + ":not(." + mn + ")")),
                        D({ arrows: bn, pagination: xn, prev: En, next: Sn, bar: Pn, toggle: Ln }, function (t, n) {
                            d[n] = w("." + t);
                        }),
                        O(d, { root: f, track: i, list: o, slides: v }),
                        (function () {
                            var t = f.id || vt(Z),
                                n = e.role;
                            (f.id = t), (i.id = i.id || t + "-track"), (o.id = o.id || t + "-list"), !q(f, Jt) && "SECTION" !== f.tagName && n && N(f, Jt, n);
                            N(f, un, l.carousel), N(o, Jt, "presentation");
                        })(),
                        b();
                }
                function y(t) {
                    var n = fn.concat("style");
                    r(v), J(f, h), J(i, g), T([i, o], n), T(f, t ? n : ["style", un]);
                }
                function b() {
                    J(f, h), J(i, g), (h = E(vn)), (g = E(pn)), C(f, h), C(i, g), N(f, nn, e.label), N(f, en, e.labelledby);
                }
                function w(t) {
                    var n = U(f, t);
                    return n &&
                    (function (t, n) {
                        if (p(t.closest)) return t.closest(n);
                        for (var e = t; e && 1 === e.nodeType && !k(e, n); ) e = e.parentElement;
                        return e;
                    })(n, "." + vn) === f
                        ? n
                        : void 0;
                }
                function E(t) {
                    return [t + "--" + e.type, t + "--" + e.direction, e.drag && t + "--draggable", e.isNavigation && t + "--nav", t === vn && _n];
                }
                return O(d, {
                    setup: m,
                    mount: function () {
                        c(Ct, y),
                            c(Ct, m),
                            c(Pt, b),
                            s(
                                document,
                                jn + " keydown",
                                function (t) {
                                    u = "keydown" === t.type;
                                },
                                { capture: !0 }
                            ),
                            s(f, "focusin", function () {
                                x(f, In, !!u);
                            });
                    },
                    destroy: y,
                });
            },
            Slides: function (t, n, e) {
                var i = Rt(t),
                    o = i.on,
                    u = i.emit,
                    c = i.bind,
                    s = n.Elements,
                    f = s.slides,
                    l = s.list,
                    d = [];
                function v() {
                    f.forEach(function (t, n) {
                        m(t, n, -1);
                    });
                }
                function g() {
                    x(function (t) {
                        t.destroy();
                    }),
                        r(d);
                }
                function m(n, e, i) {
                    var o = Hn(t, e, i, n);
                    o.mount(),
                        d.push(o),
                        d.sort(function (t, n) {
                            return t.index - n.index;
                        });
                }
                function S(t) {
                    return t
                        ? A(function (t) {
                            return !t.isClone;
                        })
                        : d;
                }
                function x(t, n) {
                    S(n).forEach(t);
                }
                function A(t) {
                    return d.filter(
                        p(t)
                            ? t
                            : function (n) {
                                return h(t) ? k(n.slide, t) : E(b(t), n.index);
                            }
                    );
                }
                return {
                    mount: function () {
                        v(), o(Ct, g), o(Ct, v);
                    },
                    destroy: g,
                    update: function () {
                        x(function (t) {
                            t.update();
                        });
                    },
                    register: m,
                    get: S,
                    getIn: function (t) {
                        var i = n.Controller,
                            o = i.toIndex(t),
                            r = i.hasFocus() ? 1 : e.perPage;
                        return A(function (t) {
                            return at(t.index, o, o + r - 1);
                        });
                    },
                    getAt: function (t) {
                        return A(t)[0];
                    },
                    add: function (t, n) {
                        w(t, function (t) {
                            if ((h(t) && (t = B(t)), y(t))) {
                                var i = f[n];
                                i ? L(t, i) : P(l, t),
                                    C(t, e.classes.slide),
                                    (o = t),
                                    (r = a(u, Lt)),
                                    (s = K(o, "img")),
                                    (d = s.length)
                                        ? s.forEach(function (t) {
                                            c(t, "load error", function () {
                                                --d || r();
                                            });
                                        })
                                        : r();
                            }
                            var o, r, s, d;
                        }),
                            u(Ct);
                    },
                    remove: function (t) {
                        H(
                            A(t).map(function (t) {
                                return t.slide;
                            })
                        ),
                            u(Ct);
                    },
                    forEach: x,
                    filter: A,
                    style: function (t, n, e) {
                        x(function (i) {
                            i.style(t, n, e);
                        });
                    },
                    getLength: function (t) {
                        return t ? f.length : d.length;
                    },
                    isEnough: function () {
                        return d.length > e.perPage;
                    },
                };
            },
            Layout: function (t, n, e) {
                var i,
                    o,
                    r,
                    u = Rt(t),
                    c = u.on,
                    s = u.bind,
                    f = u.emit,
                    l = n.Slides,
                    v = n.Direction.resolve,
                    p = n.Elements,
                    h = p.root,
                    g = p.track,
                    m = p.list,
                    y = l.getAt,
                    b = l.style;
                function w() {
                    (i = e.direction === Yt), j(h, "maxWidth", Q(e.width)), j(g, v("paddingLeft"), S(!1)), j(g, v("paddingRight"), S(!0)), E(!0);
                }
                function E(t) {
                    var n = G(h);
                    (t || o.width !== n.width || o.height !== n.height) &&
                    (j(
                        g,
                        "height",
                        (function () {
                            var t = "";
                            i && (tt((t = C()), "height or heightRatio is missing."), (t = "calc(" + t + " - " + S(!1) + " - " + S(!0) + ")"));
                            return t;
                        })()
                    ),
                        b(v("marginRight"), Q(e.gap)),
                        b("width", e.autoWidth ? null : Q(e.fixedWidth) || (i ? "" : P())),
                        b("height", Q(e.fixedHeight) || (i ? (e.autoHeight ? null : P()) : C()), !0),
                        (o = n),
                        f(kt),
                    r !== (r = D()) && (x(h, Tn, r), f("overflow", r)));
                }
                function S(t) {
                    var n = e.padding,
                        i = v(t ? "right" : "left");
                    return (n && Q(n[i] || (d(n) ? 0 : n))) || "0px";
                }
                function C() {
                    return Q(e.height || G(m).width * e.heightRatio);
                }
                function P() {
                    var t = Q(e.gap);
                    return "calc((100%" + (t && " + " + t) + ")/" + (e.perPage || 1) + (t && " - " + t) + ")";
                }
                function L() {
                    return G(m)[v("width")];
                }
                function k(t, n) {
                    var e = y(t || 0);
                    return e ? G(e.slide)[v("width")] + (n ? 0 : M()) : 0;
                }
                function A(t, n) {
                    var e = y(t);
                    if (e) {
                        var i = G(e.slide)[v("right")],
                            o = G(m)[v("left")];
                        return rt(i - o) + (n ? 0 : M());
                    }
                    return 0;
                }
                function _(n) {
                    return A(t.length - 1) - A(0) + k(0, n);
                }
                function M() {
                    var t = y(0);
                    return (t && parseFloat(j(t.slide, v("marginRight")))) || 0;
                }
                function D() {
                    return t.is(Gn) || _(!0) > L();
                }
                return {
                    mount: function () {
                        var t, n, e;
                        w(),
                            s(
                                window,
                                "resize load",
                                ((t = a(f, Lt)),
                                    (e = Wt(n || 0, t, null, 1)),
                                    function () {
                                        e.isPaused() && e.start();
                                    })
                            ),
                            c([Pt, Ct], w),
                            c(Lt, E);
                    },
                    resize: E,
                    listSize: L,
                    slideSize: k,
                    sliderSize: _,
                    totalSize: A,
                    getPadding: function (t) {
                        return parseFloat(j(g, v("padding" + (t ? "Right" : "Left")))) || 0;
                    },
                    isOverflow: D,
                };
            },
            Clones: function (t, n, e) {
                var i,
                    o = Rt(t),
                    u = o.on,
                    a = n.Elements,
                    c = n.Slides,
                    s = n.Direction.resolve,
                    f = [];
                function l() {
                    u(Ct, d),
                        u([Pt, Lt], p),
                    (i = h()) &&
                    (!(function (n) {
                        var i = c.get().slice(),
                            o = i.length;
                        if (o) {
                            for (; i.length < n; ) S(i, i);
                            S(i.slice(-n), i.slice(0, n)).forEach(function (r, u) {
                                var s = u < n,
                                    l = (function (n, i) {
                                        var o = n.cloneNode(!0);
                                        return C(o, e.classes.clone), (o.id = t.root.id + "-clone" + lt(i + 1)), o;
                                    })(r.slide, u);
                                s ? L(l, i[0].slide) : P(a.list, l), S(f, l), c.register(l, u - n + (s ? 0 : o), r.index);
                            });
                        }
                    })(i),
                        n.Layout.resize(!0));
                }
                function d() {
                    v(), l();
                }
                function v() {
                    H(f), r(f), o.destroy();
                }
                function p() {
                    var t = h();
                    i !== t && (i < t || !t) && o.emit(Ct);
                }
                function h() {
                    var i = e.clones;
                    if (t.is(Xn)) {
                        if (g(i)) {
                            var o = e[s("fixedWidth")] && n.Layout.slideSize(0);
                            i = (o && ot(G(a.track)[s("width")] / o)) || (e[s("autoWidth")] && t.length) || 2 * e.perPage;
                        }
                    } else i = 0;
                    return i;
                }
                return { mount: l, destroy: v };
            },
            Move: function (t, n, i) {
                var o,
                    r = Rt(t),
                    u = r.on,
                    a = r.emit,
                    c = t.state.set,
                    s = n.Layout,
                    f = s.slideSize,
                    l = s.getPadding,
                    d = s.totalSize,
                    v = s.listSize,
                    p = s.sliderSize,
                    h = n.Direction,
                    m = h.resolve,
                    y = h.orient,
                    b = n.Elements,
                    w = b.list,
                    E = b.track;
                function S() {
                    n.Controller.isBusy() || (n.Scroll.cancel(), x(t.index), n.Slides.update());
                }
                function x(t) {
                    C(A(t, !0));
                }
                function C(e, i) {
                    if (!t.is(Gn)) {
                        var o = i
                            ? e
                            : (function (e) {
                                if (t.is(Xn)) {
                                    var i = k(e),
                                        o = i > n.Controller.getEnd();
                                    (i < 0 || o) && (e = P(e, o));
                                }
                                return e;
                            })(e);
                        j(w, "transform", "translate" + m("X") + "(" + o + "px)"), e !== o && a(Ft);
                    }
                }
                function P(t, n) {
                    var e = t - M(n),
                        i = p();
                    return (t -= y(i * (ot(rt(e) / i) || 1)) * (n ? 1 : -1));
                }
                function L() {
                    C(_(), !0), o.cancel();
                }
                function k(t) {
                    for (var e = n.Slides.get(), i = 0, o = 1 / 0, r = 0; r < e.length; r++) {
                        var u = e[r].index,
                            a = rt(A(u, !0) - t);
                        if (!(a <= o)) break;
                        (o = a), (i = u);
                    }
                    return i;
                }
                function A(n, e) {
                    var o = y(
                        d(n - 1) -
                        (function (t) {
                            var n = i.focus;
                            return "center" === n ? (v() - f(t, !0)) / 2 : +n * f(t) || 0;
                        })(n)
                    );
                    return e
                        ? (function (n) {
                            i.trimSpace && t.is(qn) && (n = ct(n, 0, y(p(!0) - v())));
                            return n;
                        })(o)
                        : o;
                }
                function _() {
                    var t = m("left");
                    return G(w)[t] - G(E)[t] + y(l(!1));
                }
                function M(t) {
                    return A(t ? n.Controller.getEnd() : 0, !!i.trimSpace);
                }
                return {
                    mount: function () {
                        (o = n.Transition), u([ht, kt, Pt, Ct], S);
                    },
                    move: function (t, n, i, r) {
                        var u, s;
                        t !== n && ((u = t > i), (s = y(P(_(), u))), u ? s >= 0 : s <= w[m("scrollWidth")] - G(E)[m("width")]) && (L(), C(P(_(), t > i), !0)),
                            c(e),
                            a(mt, n, i, t),
                            o.start(n, function () {
                                c(3), a(yt, n, i, t), r && r();
                            });
                    },
                    jump: x,
                    translate: C,
                    shift: P,
                    cancel: L,
                    toIndex: k,
                    toPosition: A,
                    getPosition: _,
                    getLimit: M,
                    exceededLimit: function (t, n) {
                        n = g(n) ? _() : n;
                        var e = !0 !== t && y(n) < y(M(!1)),
                            i = !1 !== t && y(n) > y(M(!0));
                        return e || i;
                    },
                    reposition: S,
                };
            },
            Controller: function (t, n, o) {
                var r,
                    u,
                    c,
                    s,
                    f = Rt(t),
                    l = f.on,
                    d = f.emit,
                    v = n.Move,
                    p = v.getPosition,
                    m = v.getLimit,
                    y = v.toPosition,
                    b = n.Slides,
                    w = b.isEnough,
                    E = b.getLength,
                    S = o.omitEnd,
                    x = t.is(Xn),
                    C = t.is(qn),
                    P = a(D, !1),
                    L = a(D, !0),
                    k = o.start || 0,
                    A = k;
                function _() {
                    (u = E(!0)), (c = o.perMove), (s = o.perPage), (r = I());
                    var t = ct(k, 0, S ? r : u - 1);
                    t !== k && ((k = t), v.reposition());
                }
                function M() {
                    r !== I() && d(jt);
                }
                function D(t, n) {
                    var e = c || (j() ? 1 : s),
                        i = O(k + e * (t ? -1 : 1), k, !(c || j()));
                    return -1 === i && C && !ut(p(), m(!t), 1) ? (t ? 0 : r) : n ? i : z(i);
                }
                function O(n, e, i) {
                    if (w() || j()) {
                        var a = (function (n) {
                            if (C && "move" === o.trimSpace && n !== k) for (var e = p(); e === y(n, !0) && at(n, 0, t.length - 1, !o.rewind); ) n < k ? --n : ++n;
                            return n;
                        })(n);
                        a !== n && ((e = n), (n = a), (i = !1)),
                            n < 0 || n > r ? (n = c || (!at(0, n, e, !0) && !at(r, e, n, !0)) ? (x ? (i ? (n < 0 ? -(u % s || s) : u) : n) : o.rewind ? (n < 0 ? r : 0) : -1) : T(N(n))) : i && n !== e && (n = T(N(e) + (n < e ? -1 : 1)));
                    } else n = -1;
                    return n;
                }
                function z(t) {
                    return x ? (t + u) % u || 0 : t;
                }
                function I() {
                    for (var t = u - (j() || (x && c) ? 1 : s); S && t-- > 0; )
                        if (y(u - 1, !0) !== y(t, !0)) {
                            t++;
                            break;
                        }
                    return ct(t, 0, u - 1);
                }
                function T(t) {
                    return ct(j() ? t : s * t, 0, r);
                }
                function N(t) {
                    return j() ? nt(t, r) : it((t >= r ? u - 1 : t) / s);
                }
                function F(t) {
                    t !== k && ((A = k), (k = t));
                }
                function j() {
                    return !g(o.focus) || o.isNavigation;
                }
                function R() {
                    return t.state.is([e, i]) && !!o.waitForTransition;
                }
                return {
                    mount: function () {
                        _(), l([Pt, Ct, jt], _), l(kt, M);
                    },
                    go: function (t, n, e) {
                        if (!R()) {
                            var i = (function (t) {
                                    var n = k;
                                    if (h(t)) {
                                        var e = t.match(/([+\-<>])(\d+)?/) || [],
                                            i = e[1],
                                            o = e[2];
                                        "+" === i || "-" === i ? (n = O(k + +("" + i + (+o || 1)), k)) : ">" === i ? (n = o ? T(+o) : P(!0)) : "<" === i && (n = L(!0));
                                    } else n = x ? t : ct(t, 0, r);
                                    return n;
                                })(t),
                                o = z(i);
                            o > -1 && (n || o !== k) && (F(o), v.move(i, o, A, e));
                        }
                    },
                    scroll: function (t, e, i, o) {
                        n.Scroll.scroll(t, e, i, function () {
                            var t = z(v.toIndex(p()));
                            F(S ? nt(t, r) : t), o && o();
                        });
                    },
                    getNext: P,
                    getPrev: L,
                    getAdjacent: D,
                    getEnd: I,
                    setIndex: F,
                    getIndex: function (t) {
                        return t ? A : k;
                    },
                    toIndex: T,
                    toPage: N,
                    toDest: function (t) {
                        var n = v.toIndex(t);
                        return C ? ct(n, 0, r) : n;
                    },
                    hasFocus: j,
                    isBusy: R,
                };
            },
            Arrows: function (t, n, e) {
                var i,
                    o,
                    r = Rt(t),
                    u = r.on,
                    c = r.bind,
                    s = r.emit,
                    f = e.classes,
                    l = e.i18n,
                    d = n.Elements,
                    v = n.Controller,
                    p = d.arrows,
                    h = d.track,
                    g = p,
                    m = d.prev,
                    y = d.next,
                    b = {};
                function w() {
                    !(function () {
                        var t = e.arrows;
                        !t || (m && y) || ((g = p || F("div", f.arrows)), (m = k(!0)), (y = k(!1)), (i = !0), P(g, [m, y]), !p && L(g, h));
                        m &&
                        y &&
                        (O(b, { prev: m, next: y }),
                            R(g, t ? "" : "none"),
                            C(g, (o = bn + "--" + e.direction)),
                        t && (u([ht, yt, Ct, _t, jt], A), c(y, "click", a(x, ">")), c(m, "click", a(x, "<")), A(), N([m, y], Zt, h.id), s(Dt, m, y)));
                    })(),
                        u(Pt, E);
                }
                function E() {
                    S(), w();
                }
                function S() {
                    r.destroy(), J(g, o), i ? (H(p ? [m, y] : g), (m = y = null)) : T([m, y], fn);
                }
                function x(t) {
                    v.go(t, !0);
                }
                function k(t) {
                    return B(
                        '<button class="' +
                        f.arrow +
                        " " +
                        (t ? f.prev : f.next) +
                        '" type="button"><svg xmlns="' +
                        Bn +
                        '" viewBox="0 0 ' +
                        "40 " +
                        '40" width="' +
                        '40" height="' +
                        '40" focusable="false"><path d="' +
                        (e.arrowPath || Yn) +
                        '" />'
                    );
                }
                function A() {
                    if (m && y) {
                        var n = t.index,
                            e = v.getPrev(),
                            i = v.getNext(),
                            o = e > -1 && n < e ? l.last : l.prev,
                            r = i > -1 && n > i ? l.first : l.next;
                        (m.disabled = e < 0), (y.disabled = i < 0), N(m, nn, o), N(y, nn, r), s("arrows:updated", m, y, e, i);
                    }
                }
                return { arrows: b, mount: w, destroy: S, update: A };
            },
            Autoplay: function (t, n, e) {
                var i,
                    o,
                    r = Rt(t),
                    u = r.on,
                    a = r.bind,
                    c = r.emit,
                    s = Wt(e.interval, t.go.bind(t, ">"), function (t) {
                        var n = l.bar;
                        n && j(n, "width", 100 * t + "%"), c("autoplay:playing", t);
                    }),
                    f = s.isPaused,
                    l = n.Elements,
                    d = n.Elements,
                    v = d.root,
                    p = d.toggle,
                    h = e.autoplay,
                    g = "pause" === h;
                function m() {
                    f() && n.Slides.isEnough() && (s.start(!e.resetProgress), (o = i = g = !1), w(), c(zt));
                }
                function y(t) {
                    void 0 === t && (t = !0), (g = !!t), w(), f() || (s.pause(), c(It));
                }
                function b() {
                    g || (i || o ? y(!1) : m());
                }
                function w() {
                    p && (x(p, _n, !g), N(p, nn, e.i18n[g ? "play" : "pause"]));
                }
                function E(t) {
                    var i = n.Slides.getAt(t);
                    s.set((i && +q(i.slide, Un)) || e.interval);
                }
                return {
                    mount: function () {
                        h &&
                        (!(function () {
                            e.pauseOnHover &&
                            a(v, "mouseenter mouseleave", function (t) {
                                (i = "mouseenter" === t.type), b();
                            });
                            e.pauseOnFocus &&
                            a(v, "focusin focusout", function (t) {
                                (o = "focusin" === t.type), b();
                            });
                            p &&
                            a(p, "click", function () {
                                g ? m() : y(!0);
                            });
                            u([mt, At, Ct], s.rewind), u(mt, E);
                        })(),
                        p && N(p, Zt, l.track.id),
                        g || m(),
                            w());
                    },
                    destroy: s.cancel,
                    play: m,
                    pause: y,
                    isPaused: f,
                };
            },
            Cover: function (t, n, e) {
                var i = Rt(t).on;
                function o(t) {
                    n.Slides.forEach(function (n) {
                        var e = _(n.container || n.slide, "img");
                        e && e.src && r(t, e, n);
                    });
                }
                function r(t, n, e) {
                    e.style("background", t ? 'center/cover no-repeat url("' + n.src + '")' : "", !0), R(n, t ? "none" : "");
                }
                return {
                    mount: function () {
                        e.cover && (i(Tt, a(r, !0)), i([ht, Pt, Ct], a(o, !0)));
                    },
                    destroy: a(o, !1),
                };
            },
            Scroll: function (t, n, e) {
                var o,
                    r,
                    u = Rt(t),
                    c = u.on,
                    s = u.emit,
                    f = t.state.set,
                    l = n.Move,
                    d = l.getPosition,
                    v = l.getLimit,
                    p = l.exceededLimit,
                    h = l.translate,
                    g = t.is(qn),
                    m = 1;
                function y(t, e, u, c, v) {
                    var h = d();
                    if ((E(), u && (!g || !p()))) {
                        var y = n.Layout.sliderSize(),
                            S = st(t) * y * it(rt(t) / y) || 0;
                        t = l.toPosition(n.Controller.toDest(t % y)) + S;
                    }
                    var x = ut(h, t, 1);
                    (m = 1), (e = x ? 0 : e || et(rt(t - h) / 1.5, 800)), (r = c), (o = Wt(e, b, a(w, h, t, v), 1)), f(i), s(At), o.start();
                }
                function b() {
                    f(3), r && r(), s(_t);
                }
                function w(t, n, i, o) {
                    var u,
                        a,
                        c = d(),
                        s = (t + (n - t) * ((u = o), (a = e.easingFunc) ? a(u) : 1 - Math.pow(1 - u, 4)) - c) * m;
                    h(c + s), g && !i && p() && ((m *= 0.6), rt(s) < 10 && y(v(p(!0)), 600, !1, r, !0));
                }
                function E() {
                    o && o.cancel();
                }
                function S() {
                    o && !o.isPaused() && (E(), b());
                }
                return {
                    mount: function () {
                        c(mt, E), c([Pt, Ct], S);
                    },
                    destroy: E,
                    scroll: y,
                    cancel: S,
                };
            },
            Drag: function (t, n, o) {
                var r,
                    u,
                    a,
                    c,
                    f,
                    l,
                    v,
                    p,
                    h = Rt(t),
                    g = h.on,
                    m = h.emit,
                    y = h.bind,
                    b = h.unbind,
                    w = t.state,
                    E = n.Move,
                    S = n.Scroll,
                    x = n.Controller,
                    C = n.Elements.track,
                    P = n.Media.reduce,
                    L = n.Direction,
                    A = L.resolve,
                    _ = L.orient,
                    M = E.getPosition,
                    D = E.exceededLimit,
                    O = !1;
                function z() {
                    var t = o.drag;
                    H(!t), (c = "free" === t);
                }
                function I(t) {
                    if (((l = !1), !v)) {
                        var n = G(t);
                        (r = t.target),
                            (u = o.noDrag),
                        k(r, "." + Cn + ", ." + wn) ||
                        (u && k(r, u)) ||
                        (!n && t.button) ||
                        (x.isBusy() ? Y(t, !0) : ((p = n ? C : window), (f = w.is([e, i])), (a = null), y(p, Rn, T, Kn), y(p, Wn, N, Kn), E.cancel(), S.cancel(), j(t)));
                    }
                    var r, u;
                }
                function T(n) {
                    if ((w.is(6) || (w.set(6), m("drag")), n.cancelable))
                        if (f) {
                            E.translate(r + R(n) / (O && t.is(qn) ? 5 : 1));
                            var e = W(n) > 200,
                                i = O !== (O = D());
                            (e || i) && j(n), (l = !0), m("dragging"), Y(n);
                        } else
                            (function (t) {
                                return rt(R(t)) > rt(R(t, !0));
                            })(n) &&
                            ((f = (function (t) {
                                var n = o.dragMinThreshold,
                                    e = d(n),
                                    i = (e && n.mouse) || 0,
                                    r = (e ? n.touch : +n) || 10;
                                return rt(R(t)) > (G(t) ? r : i);
                            })(n)),
                                Y(n));
                }
                function N(e) {
                    w.is(6) && (w.set(3), m("dragged")),
                    f &&
                    (!(function (e) {
                        var i = (function (n) {
                                if (t.is(Xn) || !O) {
                                    var e = W(n);
                                    if (e && e < 200) return R(n) / e;
                                }
                                return 0;
                            })(e),
                            r = (function (t) {
                                return M() + st(t) * nt(rt(t) * (o.flickPower || 600), c ? 1 / 0 : n.Layout.listSize() * (o.flickMaxPages || 1));
                            })(i),
                            u = o.rewind && o.rewindByDrag;
                        P(!1), c ? x.scroll(r, 0, o.snap) : t.is(Gn) ? x.go(_(st(i)) < 0 ? (u ? "<" : "-") : u ? ">" : "+") : t.is(qn) && O && u ? x.go(D(!0) ? ">" : "<") : x.go(x.toDest(r), !0);
                        P(!0);
                    })(e),
                        Y(e)),
                        b(p, Rn, T),
                        b(p, Wn, N),
                        (f = !1);
                }
                function F(t) {
                    !v && l && Y(t, !0);
                }
                function j(t) {
                    (a = u), (u = t), (r = M());
                }
                function R(t, n) {
                    return X(t, n) - X(q(t), n);
                }
                function W(t) {
                    return V(t) - V(q(t));
                }
                function q(t) {
                    return (u === t && a) || u;
                }
                function X(t, n) {
                    return (G(t) ? t.changedTouches[0] : t)["page" + A(n ? "Y" : "X")];
                }
                function G(t) {
                    return "undefined" != typeof TouchEvent && t instanceof TouchEvent;
                }
                function H(t) {
                    v = t;
                }
                return {
                    mount: function () {
                        y(C, Rn, s, Kn), y(C, Wn, s, Kn), y(C, jn, I, Kn), y(C, "click", F, { capture: !0 }), y(C, "dragstart", Y), g([ht, Pt], z);
                    },
                    disable: H,
                    isDragging: function () {
                        return f;
                    },
                };
            },
            Keyboard: function (t, n, e) {
                var i,
                    o,
                    r = Rt(t),
                    u = r.on,
                    a = r.bind,
                    s = r.unbind,
                    f = t.root,
                    l = n.Direction.resolve;
                function d() {
                    var t = e.keyboard;
                    t && ((i = "global" === t ? window : f), a(i, Qn, h));
                }
                function v() {
                    s(i, Qn);
                }
                function p() {
                    var t = o;
                    (o = !0),
                        c(function () {
                            o = t;
                        });
                }
                function h(n) {
                    if (!o) {
                        var e = Vn(n);
                        e === l(Xt) ? t.go("<") : e === l(Gt) && t.go(">");
                    }
                }
                return {
                    mount: function () {
                        d(), u(Pt, v), u(Pt, d), u(mt, p);
                    },
                    destroy: v,
                    disable: function (t) {
                        o = t;
                    },
                };
            },
            LazyLoad: function (t, n, e) {
                var i = Rt(t),
                    o = i.on,
                    u = i.off,
                    c = i.bind,
                    s = i.emit,
                    f = "sequential" === e.lazyLoad,
                    l = [yt, _t],
                    d = [];
                function v() {
                    r(d),
                        n.Slides.forEach(function (t) {
                            K(t.slide, te).forEach(function (n) {
                                var i = q(n, Zn),
                                    o = q(n, $n);
                                if (i !== n.src || o !== n.srcset) {
                                    var r = e.classes.spinner,
                                        u = n.parentElement,
                                        a = _(u, "." + r) || F("span", r, u);
                                    d.push([n, t, a]), n.src || R(n, "none");
                                }
                            });
                        }),
                        f ? m() : (u(l), o(l, p), p());
                }
                function p() {
                    (d = d.filter(function (n) {
                        var i = e.perPage * ((e.preloadPages || 1) + 1) - 1;
                        return !n[1].isWithin(t.index, i) || h(n);
                    })).length || u(l);
                }
                function h(t) {
                    var n = t[0];
                    C(t[1].slide, zn), c(n, "load error", a(g, t)), N(n, "src", q(n, Zn)), N(n, "srcset", q(n, $n)), T(n, Zn), T(n, $n);
                }
                function g(t, n) {
                    var e = t[0],
                        i = t[1];
                    J(i.slide, zn), "error" !== n.type && (H(t[2]), R(e, ""), s(Tt, e, i), s(Lt)), f && m();
                }
                function m() {
                    d.length && h(d.shift());
                }
                return {
                    mount: function () {
                        e.lazyLoad && (v(), o(Ct, v));
                    },
                    destroy: a(r, d),
                    check: p,
                };
            },
            Pagination: function (t, n, e) {
                var i,
                    o,
                    c = Rt(t),
                    s = c.on,
                    f = c.emit,
                    l = c.bind,
                    d = n.Slides,
                    v = n.Elements,
                    p = n.Controller,
                    h = p.hasFocus,
                    g = p.getIndex,
                    m = p.go,
                    y = n.Direction.resolve,
                    b = v.pagination,
                    w = [];
                function E() {
                    i && (H(b ? u(i.children) : i), J(i, o), r(w), (i = null)), c.destroy();
                }
                function S(t) {
                    m(">" + t, !0);
                }
                function x(t, n) {
                    var e = w.length,
                        i = Vn(n),
                        o = P(),
                        r = -1;
                    i === y(Gt, !1, o) ? (r = ++t % e) : i === y(Xt, !1, o) ? (r = (--t + e) % e) : "Home" === i ? (r = 0) : "End" === i && (r = e - 1);
                    var u = w[r];
                    u && (W(u.button), m(">" + r), Y(n, !0));
                }
                function P() {
                    return e.paginationDirection || e.direction;
                }
                function L(t) {
                    return w[p.toPage(t)];
                }
                function k() {
                    var t = L(g(!0)),
                        n = L(g());
                    if (t) {
                        var e = t.button;
                        J(e, _n), T(e, tn), N(e, Vt, -1);
                    }
                    if (n) {
                        var o = n.button;
                        C(o, _n), N(o, tn, !0), N(o, Vt, "");
                    }
                    f("pagination:updated", { list: i, items: w }, t, n);
                }
                return {
                    items: w,
                    mount: function n() {
                        E(), s([Pt, Ct, jt], n);
                        var r = e.pagination;
                        b && R(b, r ? "" : "none"),
                        r &&
                        (s([mt, At, _t], k),
                            (function () {
                                var n = t.length,
                                    r = e.classes,
                                    u = e.i18n,
                                    c = e.perPage,
                                    s = h() ? p.getEnd() + 1 : ot(n / c);
                                C((i = b || F("ul", r.pagination, v.track.parentElement)), (o = xn + "--" + P())), N(i, Jt, "tablist"), N(i, nn, u.select), N(i, rn, P() === Yt ? "vertical" : "");
                                for (var f = 0; f < s; f++) {
                                    var g = F("li", null, i),
                                        m = F("button", { class: r.page, type: "button" }, g),
                                        y = d.getIn(f).map(function (t) {
                                            return t.slide.id;
                                        }),
                                        E = !h() && c > 1 ? u.pageX : u.slideX;
                                    l(m, "click", a(S, f)),
                                    e.paginationKeyboard && l(m, "keydown", a(x, f)),
                                        N(g, Jt, "presentation"),
                                        N(m, Jt, "tab"),
                                        N(m, Zt, y.join(" ")),
                                        N(m, nn, ft(E, f + 1)),
                                        N(m, Vt, -1),
                                        w.push({ li: g, button: m, page: f });
                                }
                            })(),
                            k(),
                            f("pagination:mounted", { list: i, items: w }, L(t.index)));
                    },
                    destroy: E,
                    getAt: L,
                    update: k,
                };
            },
            Sync: function (t, n, e) {
                var i = e.isNavigation,
                    o = e.slideFocus,
                    u = [];
                function c() {
                    var n, e;
                    t.splides.forEach(function (n) {
                        n.isParent || (f(t, n.splide), f(n.splide, t));
                    }),
                    i && ((n = Rt(t)), (e = n.on)(bt, d), e(Nt, v), e([ht, Pt], l), u.push(n), n.emit(Ot, t.splides));
                }
                function s() {
                    u.forEach(function (t) {
                        t.destroy();
                    }),
                        r(u);
                }
                function f(t, n) {
                    var e = Rt(t);
                    e.on(mt, function (t, e, i) {
                        n.go(n.is(Xn) ? i : t);
                    }),
                        u.push(e);
                }
                function l() {
                    N(n.Elements.list, rn, e.direction === Yt ? "vertical" : "");
                }
                function d(n) {
                    t.go(n.index);
                }
                function v(t, n) {
                    E(ne, Vn(n)) && (d(t), Y(n));
                }
                return {
                    setup: a(n.Media.set, { slideFocus: g(o) ? i : o }, !0),
                    mount: c,
                    destroy: s,
                    remount: function () {
                        s(), c();
                    },
                };
            },
            Wheel: function (t, n, i) {
                var o = Rt(t).bind,
                    r = 0;
                function u(o) {
                    if (o.cancelable) {
                        var u = o.deltaY,
                            a = u < 0,
                            c = V(o),
                            s = i.wheelMinThreshold || 0,
                            f = i.wheelSleep || 0;
                        rt(u) > s && c - r > f && (t.go(a ? "<" : ">"), (r = c)),
                        (function (o) {
                            return !i.releaseWheel || t.state.is(e) || -1 !== n.Controller.getAdjacent(o);
                        })(a) && Y(o);
                    }
                }
                return {
                    mount: function () {
                        i.wheel && o(n.Elements.track, "wheel", u, Kn);
                    },
                };
            },
            Live: function (t, n, e) {
                var i = Rt(t).on,
                    o = n.Elements.track,
                    r = e.live && !e.isNavigation,
                    u = F("span", kn),
                    c = Wt(90, a(s, !1));
                function s(t) {
                    N(o, cn, t), t ? (P(o, u), c.start()) : (H(u), c.cancel());
                }
                function f(t) {
                    r && N(o, an, t ? "off" : "polite");
                }
                return {
                    mount: function () {
                        r && (f(!n.Autoplay.isPaused()), N(o, sn, !0), (u.textContent = "…"), i(zt, a(f, !0)), i(It, a(f, !1)), i([yt, _t], a(s, !0)));
                    },
                    disable: f,
                    destroy: function () {
                        T(o, [an, sn, cn]), H(u);
                    },
                };
            },
        }),
        ie = {
            type: "slide",
            role: "region",
            speed: 400,
            perPage: 1,
            cloneStatus: !0,
            arrows: !0,
            pagination: !0,
            paginationKeyboard: !0,
            interval: 5e3,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            resetProgress: !0,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            drag: !0,
            direction: "ltr",
            trimSpace: !0,
            focusableNodes: "a, button, textarea, input, select, iframe",
            live: !0,
            classes: Fn,
            i18n: {
                prev: "Previous slide",
                next: "Next slide",
                first: "Go to first slide",
                last: "Go to last slide",
                slideX: "Go to slide %s",
                pageX: "Go to page %s",
                play: "Start autoplay",
                pause: "Pause autoplay",
                carousel: "carousel",
                slide: "slide",
                select: "Select a slide to show",
                slideLabel: "%s of %s",
            },
            reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
        };
    function oe(t, n, e) {
        var i = n.Slides;
        function o() {
            i.forEach(function (t) {
                t.style("transform", "translateX(-" + 100 * t.index + "%)");
            });
        }
        return {
            mount: function () {
                Rt(t).on([ht, Ct], o);
            },
            start: function (t, n) {
                i.style("transition", "opacity " + e.speed + "ms " + e.easing), c(n);
            },
            cancel: s,
        };
    }
    function re(t, n, e) {
        var i,
            o = n.Move,
            r = n.Controller,
            u = n.Scroll,
            c = n.Elements.list,
            s = a(j, c, "transition");
        function f() {
            s(""), u.cancel();
        }
        return {
            mount: function () {
                Rt(t).bind(c, "transitionend", function (t) {
                    t.target === c && i && (f(), i());
                });
            },
            start: function (n, a) {
                var c = o.toPosition(n, !0),
                    f = o.getPosition(),
                    l = (function (n) {
                        var i = e.rewindSpeed;
                        if (t.is(qn) && i) {
                            var o = r.getIndex(!0),
                                u = r.getEnd();
                            if ((0 === o && n >= u) || (o >= u && 0 === n)) return i;
                        }
                        return e.speed;
                    })(n);
                rt(c - f) >= 1 && l >= 1 ? (e.useScroll ? u.scroll(c, l, !1, a) : (s("transform " + l + "ms " + e.easing), o.translate(c, !0), (i = a))) : (o.jump(n), a());
            },
            cancel: f,
        };
    }
    var ue = (function () {
            function n(t, e) {
                var i;
                (this.event = Rt()),
                    (this.Components = {}),
                    (this.state =
                        ((i = 1),
                            {
                                set: function (t) {
                                    i = t;
                                },
                                is: function (t) {
                                    return E(b(t), i);
                                },
                            })),
                    (this.splides = []),
                    (this._o = {}),
                    (this._E = {});
                var o = h(t) ? U(document, t) : t;
                tt(o, o + " is invalid."), (this.root = o), (e = z({ label: q(o, nn) || "", labelledby: q(o, en) || "" }, ie, n.defaults, e || {}));
                try {
                    z(e, JSON.parse(q(o, $)));
                } catch (t) {
                    tt(!1, "Invalid JSON");
                }
                this._o = Object.create(z({}, e));
            }
            var e,
                i,
                o,
                a = n.prototype;
            return (
                (a.mount = function (t, n) {
                    var e = this,
                        i = this.state,
                        o = this.Components;
                    return (
                        tt(i.is([1, 7]), "Already mounted!"),
                            i.set(1),
                            (this._C = o),
                            (this._T = n || this._T || (this.is(Gn) ? oe : re)),
                            (this._E = t || this._E),
                            D(O({}, ee, this._E, { Transition: this._T }), function (t, n) {
                                var i = t(e, o, e._o);
                                (o[n] = i), i.setup && i.setup();
                            }),
                            D(o, function (t) {
                                t.mount && t.mount();
                            }),
                            this.emit(ht),
                            C(this.root, An),
                            i.set(3),
                            this.emit(gt),
                            this
                    );
                }),
                    (a.sync = function (t) {
                        return this.splides.push({ splide: t }), t.splides.push({ splide: this, isParent: !0 }), this.state.is(3) && (this._C.Sync.remount(), t.Components.Sync.remount()), this;
                    }),
                    (a.go = function (t) {
                        return this._C.Controller.go(t), this;
                    }),
                    (a.on = function (t, n) {
                        return this.event.on(t, n), this;
                    }),
                    (a.off = function (t) {
                        return this.event.off(t), this;
                    }),
                    (a.emit = function (t) {
                        var n;
                        return (n = this.event).emit.apply(n, [t].concat(u(arguments, 1))), this;
                    }),
                    (a.add = function (t, n) {
                        return this._C.Slides.add(t, n), this;
                    }),
                    (a.remove = function (t) {
                        return this._C.Slides.remove(t), this;
                    }),
                    (a.is = function (t) {
                        return this._o.type === t;
                    }),
                    (a.refresh = function () {
                        return this.emit(Ct), this;
                    }),
                    (a.destroy = function (t) {
                        void 0 === t && (t = !0);
                        var n = this.event,
                            e = this.state;
                        return (
                            e.is(1)
                                ? Rt(this).on(gt, this.destroy.bind(this, t))
                                : (D(
                                    this._C,
                                    function (n) {
                                        n.destroy && n.destroy(t);
                                    },
                                    !0
                                ),
                                    n.emit(Mt),
                                    n.destroy(),
                                t && r(this.splides),
                                    e.set(7)),
                                this
                        );
                    }),
                    (e = n),
                (i = [
                    {
                        key: "options",
                        get: function () {
                            return this._o;
                        },
                        set: function (t) {
                            this._C.Media.set(t, !0, !0);
                        },
                    },
                    {
                        key: "length",
                        get: function () {
                            return this._C.Slides.getLength(!0);
                        },
                    },
                    {
                        key: "index",
                        get: function () {
                            return this._C.Controller.getIndex();
                        },
                    },
                ]) && t(e.prototype, i),
                o && t(e, o),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    n
            );
        })(),
        ae = ue;
    (ae.defaults = {}), (ae.STATES = o);
    function ce(t, n, e) {
        return Array.prototype.slice.call(t, n, e);
    }
    function se(t) {
        return t.bind.apply(t, [null].concat(ce(arguments, 1)));
    }
    function fe(t) {
        return requestAnimationFrame(t);
    }
    function le(t, n) {
        return typeof n === t;
    }
    var de = Array.isArray;
    function ve(t) {
        return de(t) ? t : [t];
    }
    function pe(t, n) {
        ve(t).forEach(n);
    }
    se(le, "function"), se(le, "string"), se(le, "undefined");
    var he = Object.keys;
    function ge(t) {
        return (
            ce(arguments, 1).forEach(function (n) {
                !(function (t, n, e) {
                    if (t) {
                        var i = he(t);
                        i = e ? i.reverse() : i;
                        for (var o = 0; o < i.length; o++) {
                            var r = i[o];
                            if ("__proto__" !== r && !1 === n(t[r], r)) break;
                        }
                    }
                })(n, function (e, i) {
                    t[i] = n[i];
                });
            }),
                t
        );
    }
    var me = Math.min;
    var ye = "move",
        be = "moved",
        we = "updated",
        Ee = "drag",
        Se = "dragged",
        xe = "scroll",
        Ce = "scrolled",
        Pe = "destroy";
    function Le(t) {
        var n = t ? t.event.bus : document.createDocumentFragment(),
            e = (function () {
                var t = [];
                function n(t, n, e) {
                    pe(t, function (t) {
                        t &&
                        pe(n, function (n) {
                            n.split(" ").forEach(function (n) {
                                var i = n.split(".");
                                e(t, i[0], i[1]);
                            });
                        });
                    });
                }
                return {
                    bind: function (e, i, o, r) {
                        n(e, i, function (n, e, i) {
                            var u = "addEventListener" in n,
                                a = u ? n.removeEventListener.bind(n, e, o, r) : n.removeListener.bind(n, o);
                            u ? n.addEventListener(e, o, r) : n.addListener(o), t.push([n, e, i, o, a]);
                        });
                    },
                    unbind: function (e, i, o) {
                        n(e, i, function (n, e, i) {
                            t = t.filter(function (t) {
                                return !!(t[0] !== n || t[1] !== e || t[2] !== i || (o && t[3] !== o)) || (t[4](), !1);
                            });
                        });
                    },
                    dispatch: function (t, n, e) {
                        var i;
                        return "function" == typeof CustomEvent ? (i = new CustomEvent(n, { bubbles: !0, detail: e })) : (i = document.createEvent("CustomEvent")).initCustomEvent(n, !0, !1, e), t.dispatchEvent(i), i;
                    },
                    destroy: function () {
                        t.forEach(function (t) {
                            t[4]();
                        }),
                            (t.length = 0);
                    },
                };
            })();
        return (
            t && t.event.on(Pe, e.destroy),
                ge(e, {
                    bus: n,
                    on: function (t, i) {
                        e.bind(n, ve(t).join(" "), function (t) {
                            i.apply(i, de(t.detail) ? t.detail : []);
                        });
                    },
                    off: se(e.unbind, n),
                    emit: function (t) {
                        e.dispatch(n, t, ce(arguments, 1));
                    },
                })
        );
    }
    function ke(t, n, e, i) {
        var o,
            r,
            u = Date.now,
            a = 0,
            c = !0,
            s = 0;
        function f() {
            if (!c) {
                if (((a = t ? me((u() - o) / t, 1) : 1), e && e(a), a >= 1 && (n(), (o = u()), i && ++s >= i))) return l();
                fe(f);
            }
        }
        function l() {
            c = !0;
        }
        function d() {
            r && cancelAnimationFrame(r), (a = 0), (r = 0), (c = !0);
        }
        return {
            start: function (n) {
                !n && d(), (o = u() - (n ? a * t : 0)), (c = !1), fe(f);
            },
            rewind: function () {
                (o = u()), (a = 0), e && e(a);
            },
            pause: l,
            cancel: d,
            set: function (n) {
                t = n;
            },
            isPaused: function () {
                return c;
            },
        };
    }
    var Ae = "slide";
    function _e(t, n, e) {
        return Array.prototype.slice.call(t, n, e);
    }
    function Me(t) {
        return t.bind(null, ..._e(arguments, 1));
    }
    function De(t, n) {
        return typeof n === t;
    }
    function Oe(t) {
        return !Te(t) && De("object", t);
    }
    const ze = Array.isArray;
    Me(De, "function"), Me(De, "string");
    const Ie = Me(De, "undefined");
    function Te(t) {
        return null === t;
    }
    function Ne(t, n) {
        var e;
        ((e = t), ze(e) ? e : [e]).forEach(n);
    }
    const Fe = Object.keys;
    function je(t, n, e) {
        if (t) {
            let i = Fe(t);
            i = e ? i.reverse() : i;
            for (let e = 0; e < i.length; e++) {
                const o = i[e];
                if ("__proto__" !== o && !1 === n(t[o], o)) break;
            }
        }
        return t;
    }
    function Re(t) {
        return (
            _e(arguments, 1).forEach((n) => {
                je(n, (e, i) => {
                    t[i] = n[i];
                });
            }),
                t
        );
    }
    function We(t, n, e) {
        Oe(n)
            ? je(n, (n, e) => {
                We(t, e, n);
            })
            : Ne(t, (t) => {
                Te(e) || "" === e
                    ? (function (t, n) {
                        Ne(t, (t) => {
                            Ne(n, (n) => {
                                t && t.removeAttribute(n);
                            });
                        });
                    })(t, n)
                    : t.setAttribute(n, String(e));
            });
    }
    const { min: qe, max: Xe, floor: Ge, ceil: He, abs: Be } = Math;
    const Ye = { speed: 1, autoStart: !0, pauseOnHover: !0, pauseOnFocus: !0 },
        Ue = { startScroll: "Start auto scroll", pauseScroll: "Pause auto scroll" };
    function Ke(t, n, e) {
        const { on: i, off: o, bind: r, unbind: u } = Le(t),
            { translate: a, getPosition: c, toIndex: s, getLimit: f } = n.Move,
            { setIndex: l, getIndex: d } = n.Controller,
            { orient: v } = n.Direction,
            { toggle: p } = n.Elements,
            { Live: h } = n,
            { root: g } = t,
            m = (function (t, n) {
                var e;
                return function () {
                    e ||
                    (e = ke(
                        n || 0,
                        function () {
                            t(), (e = null);
                        },
                        null,
                        1
                    )).start();
                };
            })(n.Arrows.update, 500);
        let y,
            b,
            w,
            E,
            S,
            x,
            C = {};
        function P() {
            t.is("fade") ||
            y ||
            !1 === e.autoScroll ||
            ((y = ke(0, D)),
                (function () {
                    C.pauseOnHover &&
                    r(g, "mouseenter mouseleave", (t) => {
                        (w = "mouseenter" === t.type), M();
                    });
                    C.pauseOnFocus &&
                    r(g, "focusin focusout", (t) => {
                        (E = "focusin" === t.type), M();
                    });
                    C.useToggleButton &&
                    r(p, "click", () => {
                        b ? A() : _();
                    });
                    i(we, k),
                        i([ye, Ee, xe], () => {
                            (S = !0), _(!1);
                        }),
                        i([be, Se, Ce], () => {
                            (S = !1), M();
                        });
                })(),
            C.autoStart && ("complete" === document.readyState ? A() : r(window, "load", A)));
        }
        function L() {
            y && (y.cancel(), (y = null), (x = void 0), o([ye, Ee, xe, be, Ce]), u(g, "mouseenter mouseleave focusin focusout"), u(p, "click"));
        }
        function k() {
            const { autoScroll: t } = e;
            !1 !== t ? ((C = Re({}, C, Oe(t) ? t : {})), P()) : L(), y && !Ie(x) && a(x);
        }
        function A() {
            z() && (y.start(!0), h.disable(!0), (E = w = b = !1), O());
        }
        function _(t = !0) {
            b || ((b = t), O(), z() || (y.pause(), h.disable(!1)));
        }
        function M() {
            b || (w || E || S ? _(!1) : A());
        }
        function D() {
            const i = c(),
                o = (function (n) {
                    const e = C.speed || 1;
                    (n += v(e)),
                    t.is(Ae) &&
                    (n = (function (t, n, e) {
                        const i = qe(n, e),
                            o = Xe(n, e);
                        return qe(Xe(i, t), o);
                    })(n, f(!1), f(!0)));
                    return n;
                })(i);
            i !== o
                ? (a(o),
                    (function (i) {
                        const { length: o } = t,
                            r = (s(i) + o) % o;
                        r !== d() && (l(r), n.Slides.update(), n.Pagination.update(), "nearby" === e.lazyLoad && n.LazyLoad.check());
                    })((x = c())))
                : (_(!1), C.rewind && t.go(C.speed > 0 ? 0 : n.Controller.getEnd())),
                m();
        }
        function O() {
            if (p) {
                const o = b ? "startScroll" : "pauseScroll";
                (n = "is-active"),
                    (i = !b),
                (t = p) &&
                Ne(n, (n) => {
                    n && t.classList[i ? "add" : "remove"](n);
                }),
                    We(p, "aria-label", e.i18n[o] || Ue[o]);
            }
            var t, n, i;
        }
        function z() {
            return !y || y.isPaused();
        }
        return {
            setup: function () {
                const { autoScroll: t } = e;
                C = Re({}, Ye, Oe(t) ? t : {});
            },
            mount: P,
            destroy: L,
            play: A,
            pause: _,
            isPaused: z,
        };
    }
    document.addEventListener("DOMContentLoaded", function (t) {
        document.querySelector("html").classList.add("is-loaded"),
            new ae(".s-reviews-splide", {
                focus: "center",
                type: "loop",
                autoWidth: !0,
                clones: 4,
                arrows: !1,
                pagination: !1,
                gap: 24,
                pauseOnHover: !0,
                drag: "ontouchstart" in window || navigator.maxTouchPoints > 0,
                speed: 1e3,
                breakpoints: { 560: { autoWidth: !1, perPage: 1 } },
            }).mount({ AutoScroll: Ke });
        var n = document.querySelector(".timer-days"),
            e = document.querySelector(".timer-minutes"),
            i = document.querySelector(".timer-seconds"),
            o = document.querySelector(".event-timer"),
            r = o.getAttribute("data-timer-day"),
            u = o.getAttribute("data-timer-time"),
            a = new Date("".concat(r, "T").concat(u));
        function c() {
            var t = new Date(),
                o = a - t;
            if (o <= 0) return (n.textContent = "00"), (e.textContent = "00"), (i.textContent = "00"), void clearInterval(s);
            var r = Math.floor(o / 864e5),
                u = Math.floor((o % 36e5) / 6e4),
                c = Math.floor((o % 6e4) / 1e3);
            (n.textContent = r.toString().padStart(2, "0")), (e.textContent = u.toString().padStart(2, "0")), (i.textContent = c.toString().padStart(2, "0"));
        }
        var s = setInterval(c, 1e3);
        c();


        const startCountdown = () => {
            const targetDate = new Date("2024-12-17T12:00:00+02:00"); // Target date and time in Kyiv timezone
            const updateTimer = () => {
                const now = new Date();
                const timeRemaining = targetDate - now;

                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    document.querySelector(".event-timer-title").textContent = "The event has ended!";
                    return;
                }

                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                document.querySelector(".timer-days").textContent = days.toString().padStart(2, "0");
                document.querySelector(".timer-hours").textContent = hours.toString().padStart(2, "0");
                document.querySelector(".timer-minutes").textContent = minutes.toString().padStart(2, "0");
                document.querySelector(".timer-seconds").textContent = seconds.toString().padStart(2, "0");
            };

            updateTimer();
            const timerInterval = setInterval(updateTimer, 1000);
        };

        startCountdown();





    });
})();
