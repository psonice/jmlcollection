function enterFullScreen() {
    return fullscreen === !0 ? !1 : (fullscreen = !0, d.start(), maskEl.style.display = "block", demoEl.style.cursor = "none", void setTimeout(function () {
        d.startMusic(), setTimeout(function () {
            overlay.setImage("jmldstrintro1.png", "contain", "center center")
        }), setTimeout(function () {
            overlay.setImage("jmldstrintro2.png", "contain", "center center")
        }, 3 * beat + offset), setTimeout(function () {
            overlay.setImage("jmldstrintro3.png", "contain", "center center")
        }, 4.5 * beat + offset), setTimeout(function () {
            d.startScene(cubecube), overlay.setImage("jmldstrrobot11.png", "contain", "left bottom")
        }, 8 * beat + offset), setTimeout(function () {
            overlay.setImage("jmldstrrobot12.png", "contain", "left bottom")
        }, 8 * beat + 8 * beat + offset), setTimeout(function () {
            overlay.setImage("jmldstrrobot21.png", "contain", "right bottom")
        }, 16 * beat + 8 * beat + offset), setTimeout(function () {
            overlay.setImage("jmldstrrobot22.png", "contain", "right bottom")
        }, 24 * beat + 8 * beat + offset), setTimeout(function () {
            overlay.setImage("jmldstrrobot23.png", "contain", "right bottom")
        }, 28 * beat + 8 * beat + offset), setTimeout(function () {
            d.endScene(cubecube), d.startScene(hexaTunnel), d.startScene(robot), overlay.setImage("jmldstrcredits.png", "contain", "left center")
        }, 32 * beat + 8 * beat + offset), setTimeout(function () {
            overlay.setImage("jmldstrgreets.png", "contain", "right center")
        }, 48 * beat + 8 * beat + offset), setTimeout(function () {
            d.endScene(hexaTunnel), d.endScene(robot), d.startScene(particleSlinger), overlay.setImage("jmldstrmiddlerobo.png", "cover", "center center")
        }, 64 * beat + 8 * beat + offset), setTimeout(function () {
            overlay.setImage("jmldstrmiddlerobo2.png", "cover", "conter center")
        }, 80 * beat + 8 * beat + offset), setTimeout(function () {
            overlay.setImage("jmldstrend.png", "contain", "center center")
        }, 96 * beat + 8 * beat + offset)
    }, 3e3))
}(window._gsQueue || (window._gsQueue = [])).push(function () {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
                var d = [].slice,
                    e = function (a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = e.prototype.render
                    },
                    f = 1e-10,
                    g = c._internals.isSelector,
                    h = c._internals.isArray,
                    i = e.prototype = c.to({}, .1, {}),
                    j = [];
                e.version = "1.11.4", i.constructor = e, i.kill()._gc = !1, e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf, e.getTweensOf = c.getTweensOf, e.ticker = c.ticker, i.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
                }, i.updateTo = function (a, b) {
                    var d, e = this.ratio;
                    b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted)
                        if (b) this._initted = !1;
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var f = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var g, h = 1 / (1 - e), i = this._firstPT; i;) g = i.s + i.c, i.c *= h, i.s = g - i.c, i = i._next
                    }
                    return this
                }, i.render = function (a, b, c) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var d, e, g, h, i, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
                        o = this._time,
                        p = this._totalTime,
                        q = this._cycle,
                        r = this._duration;
                    if (a >= n ? (this._totalTime = n, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = r, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete"), 0 === r && (m = this._rawPrevTime, (0 === a || 0 > m || m === f) && m !== a && (c = !0, m > f && (e = "onReverseComplete")), this._rawPrevTime = m = !b || a || 0 === m ? a : f)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === r && this._rawPrevTime > f) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === r && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = m = !b || a || 0 === this._rawPrevTime ? a : f)) : this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (h = r + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time), this._time > r ? this._time = r : 0 > this._time && (this._time = 0)), this._easeType ? (i = this._time / r, k = this._easeType, l = this._easePower, (1 === k || 3 === k && i >= .5) && (i = 1 - i), 3 === k && (i *= 2), 1 === l ? i *= i : 2 === l ? i *= i * i : 3 === l ? i *= i * i * i : 4 === l && (i *= i * i * i * i), this.ratio = 1 === k ? 1 - i : 2 === k ? i : .5 > this._time / r ? i / 2 : 1 - i / 2) : this.ratio = this._ease.getRatio(this._time / r)), o === this._time && !c && q === this._cycle) return void(p !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || j)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / r) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0), 0 === p && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || j))), g = this._firstPT; g;) g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._totalTime !== p || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || j)), this._cycle !== q && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || j)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || j), 0 === r && this._rawPrevTime === f && m !== f && (this._rawPrevTime = 0)))
                }, e.to = function (a, b, c) {
                    return new e(a, b, c)
                }, e.from = function (a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new e(a, b, c)
                }, e.fromTo = function (a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new e(a, b, d)
                }, e.staggerTo = e.allTo = function (a, b, f, i, k, l, m) {
                    i = i || 0;
                    var n, o, p, q, r = f.delay || 0,
                        s = [],
                        t = function () {
                            f.onComplete && f.onComplete.apply(f.onCompleteScope || this, arguments), k.apply(m || this, l || j)
                        };
                    for (h(a) || ("string" == typeof a && (a = c.selector(a) || a), g(a) && (a = d.call(a, 0))), n = a.length, p = 0; n > p; p++) {
                        o = {};
                        for (q in f) o[q] = f[q];
                        o.delay = r, p === n - 1 && k && (o.onComplete = t), s[p] = new e(a[p], b, o), r += i
                    }
                    return s
                }, e.staggerFrom = e.allFrom = function (a, b, c, d, f, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, e.staggerTo(a, b, c, d, f, g, h)
                }, e.staggerFromTo = e.allFromTo = function (a, b, c, d, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, e.staggerTo(a, b, d, f, g, h, i)
                }, e.delayedCall = function (a, b, c, d, f) {
                    return new e(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        onCompleteScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        onReverseCompleteScope: d,
                        immediateRender: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                }, e.set = function (a, b) {
                    return new e(a, 0, b)
                }, e.isTweening = function (a) {
                    return c.getTweensOf(a, !0).length > 0
                };
                var k = function (a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(k(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    l = e.getAllTweens = function (b) {
                        return k(a._rootTimeline, b).concat(k(a._rootFramesTimeline, b))
                    };
                e.killAll = function (a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = l(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g.totalDuration()) : g._enabled(!1, !1))
                }, e.killChildTweensOf = function (a, b) {
                    if (null != a) {
                        var f, i, j, k, l, m = c._tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), g(a) && (a = d.call(a, 0)), h(a))
                            for (k = a.length; --k > -1;) e.killChildTweensOf(a[k], b);
                        else {
                            f = [];
                            for (j in m)
                                for (i = m[j].target.parentNode; i;) i === a && (f = f.concat(m[j].tweens)), i = i.parentNode;
                            for (l = f.length, k = 0; l > k; k++) b && f[k].totalTime(f[k].totalDuration()), f[k]._enabled(!1, !1)
                        }
                    }
                };
                var m = function (a, c, d, e) {
                    c = c !== !1, d = d !== !1, e = e !== !1;
                    for (var f, g, h = l(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return e.pauseAll = function (a, b, c) {
                    m(!0, a, b, c)
                }, e.resumeAll = function (a, b, c) {
                    m(!1, a, b, c)
                }, e.globalTimeScale = function (b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || f, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, i.progress = function (a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, i.totalProgress = function (a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, i.time = function (a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, i.duration = function (b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, i.totalDuration = function (a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, i.repeat = function (a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, i.repeatDelay = function (a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, i.yoyo = function (a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, e
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
                var d = function (a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var c, d, e = this.vars;
                        for (d in e) c = e[d], g(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        g(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                    },
                    e = 1e-10,
                    f = c._internals.isSelector,
                    g = c._internals.isArray,
                    h = [],
                    i = function (a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    j = function (a, b, c, d) {
                        a._timeline.pause(a._startTime), b && b.apply(d || a._timeline, c || h)
                    },
                    k = h.slice,
                    l = d.prototype = new b;
                return d.version = "1.11.4", l.constructor = d, l.kill()._gc = !1, l.to = function (a, b, d, e) {
                    return b ? this.add(new c(a, b, d), e) : this.set(a, d, e)
                }, l.from = function (a, b, d, e) {
                    return this.add(c.from(a, b, d), e)
                }, l.fromTo = function (a, b, d, e, f) {
                    return b ? this.add(c.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, l.staggerTo = function (a, b, e, g, h, j, l, m) {
                    var n, o = new d({
                        onComplete: j,
                        onCompleteParams: l,
                        onCompleteScope: m,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = k.call(a, 0)), g = g || 0, n = 0; a.length > n; n++) e.startAt && (e.startAt = i(e.startAt)), o.to(a[n], b, i(e), n * g);
                    return this.add(o, h)
                }, l.staggerFrom = function (a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, l.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, l.call = function (a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, l.set = function (a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function (a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g = new d(a),
                        h = g._timeline;
                    for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
                    return h.add(g, 0), g
                }, l.add = function (e, f, h, i) {
                    var j, k, l, m, n, o;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && g(e)) {
                            for (h = h || "normal", i = i || 0, j = f, k = e.length, l = 0; k > l; l++) g(m = e[l]) && (m = new d({
                                tweens: m
                            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === h ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === h && (m._startTime -= m.delay())), j += i;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), this._gc && !this._paused && this._duration < this.duration())
                        for (n = this, o = n.rawTime() > e._startTime; n._gc && n._timeline;) n._timeline.smoothChildTiming && o ? n.totalTime(n._totalTime, !0) : n._enabled(!0, !1), n = n._timeline;
                    return this
                }, l.remove = function (b) {
                    if (b instanceof a) return this._remove(b, !1);
                    if (b instanceof Array || b && b.push && g(b)) {
                        for (var c = b.length; --c > -1;) this.remove(b[c]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, l._remove = function (a, c) {
                    b.prototype._remove.call(this, a, c);
                    var d = this._last;
                    return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                }, l.append = function (a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, l.insert = l.insertMultiple = function (a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, l.appendMultiple = function (a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, l.addLabel = function (a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, l.addPause = function (a, b, c, d) {
                    return this.call(j, ["{self}", b, c, d], this, a)
                }, l.removeLabel = function (a) {
                    return delete this._labels[a], this
                }, l.getLabelTime = function (a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, l._parseTimeOrLabel = function (b, c, d, e) {
                    var f;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && g(e)))
                        for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
                    if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
                    else {
                        if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
                    }
                    return Number(b) + c
                }, l.seek = function (a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, l.stop = function () {
                    return this.paused(!0)
                }, l.gotoAndPlay = function (a, b) {
                    return this.play(a, b)
                }, l.gotoAndStop = function (a, b) {
                    return this.pause(a, b)
                }, l.render = function (a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, i, j, k = this._dirty ? this.totalDuration() : this._totalDuration,
                        l = this._time,
                        m = this._startTime,
                        n = this._timeScale,
                        o = this._paused;
                    if (a >= k ? (this._totalTime = this._time = k, this._reversed || this._hasPausedChild() || (f = !0, i = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (j = !0, this._rawPrevTime > e && (i = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || 0 === this._rawPrevTime ? a : e, a = k + 1e-4) : 1e-7 > a ? (this._totalTime = this._time = 0, (0 !== l || 0 === this._duration && (this._rawPrevTime > e || 0 > a && this._rawPrevTime >= 0)) && (i = "onReverseComplete", f = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (j = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !b || a || 0 === this._rawPrevTime ? a : e, a = 0, this._initted || (j = !0))) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== l && this._first || c || j) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== l && a > 0 && (this._active = !0), 0 === l && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= l)
                            for (d = this._first; d && (g = d._next, !this._paused || o);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = this._last; d && (g = d._prev, !this._paused || o);)(d._active || l >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), i && (this._gc || (m === this._startTime || n !== this._timeScale) && (0 === this._time || k >= this.totalDuration()) && (f && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || h)))
                    }
                }, l._hasPausedChild = function () {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, l.getChildren = function (a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) e > g._startTime || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, l.getTweensOf = function (a, b) {
                    for (var d = c.getTweensOf(a), e = d.length, f = [], g = 0; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (f[g++] = d[e]);
                    return f
                }, l._contains = function (a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, l.shiftChildren = function (a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, l._kill = function (a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, l.clear = function (a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, l.invalidate = function () {
                    for (var a = this._first; a;) a.invalidate(), a = a._next;
                    return this
                }, l._enabled = function (a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, l.duration = function (a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, l.totalDuration = function (a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, 0 > e._startTime && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                            this._duration = this._totalDuration = d, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
                }, l.usesFrames = function () {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, l.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, d
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
                var d = function (b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    e = 1e-10,
                    f = [],
                    g = new c(null, null, 1, 0),
                    h = d.prototype = new a;
                return h.constructor = d, h.kill()._gc = !1, d.version = "1.11.4", h.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, h.addCallback = function (a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, h.removeCallback = function (a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, h.tweenTo = function (a, c) {
                    c = c || {};
                    var d, e, h, i = {
                        ease: g,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (e in c) i[e] = c[e];
                    return i.time = this._parseTimeOrLabel(a), d = Math.abs(Number(i.time) - this._time) / this._timeScale || .001, h = new b(this, d, i), i.onStart = function () {
                        h.target.paused(!0), h.vars.time !== h.target.time() && d === h.duration() && h.duration(Math.abs(h.vars.time - h.target.time()) / h.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || h, c.onStartParams || f)
                    }, h
                }, h.tweenFromTo = function (a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        onCompleteScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, h.render = function (a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, g, h, i, j, k, l = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        n = this._time,
                        o = this._totalTime,
                        p = this._startTime,
                        q = this._timeScale,
                        r = this._rawPrevTime,
                        s = this._paused,
                        t = this._cycle;
                    if (a >= l ? (this._locked || (this._totalTime = l, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (g = !0, i = "onComplete", 0 === this._duration && (0 === a || 0 > r || r === e) && r !== a && this._first && (j = !0, r > e && (i = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || 0 === this._rawPrevTime ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = m, a = m + 1e-4)) : 1e-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== n || 0 === m && (r > e || 0 > a && r >= 0) && !this._locked) && (i = "onReverseComplete", g = this._reversed), 0 > a ? (this._active = !1, 0 === m && r >= 0 && this._first && (j = !0), this._rawPrevTime = a) : (this._rawPrevTime = m || !b || a || 0 === this._rawPrevTime ? a : e, a = 0, this._initted || (j = !0))) : (0 === m && 0 > r && (j = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (k = m + this._repeatDelay, this._cycle = this._totalTime / k >> 0, 0 !== this._cycle && this._cycle === this._totalTime / k && this._cycle--, this._time = this._totalTime - this._cycle * k, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, a = m + 1e-4) : 0 > this._time ? this._time = a = 0 : a = this._time))), this._cycle !== t && !this._locked) {
                        var u = this._yoyo && 0 !== (1 & t),
                            v = u === (this._yoyo && 0 !== (1 & this._cycle)),
                            w = this._totalTime,
                            x = this._cycle,
                            y = this._rawPrevTime,
                            z = this._time;
                        if (this._totalTime = t * m, t > this._cycle ? u = !u : this._totalTime += m, this._time = n, this._rawPrevTime = 0 === m ? r - 1e-4 : r, this._cycle = t, this._locked = !0, n = u ? 0 : m, this.render(n, b, 0 === m), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f), v && (n = u ? m + 1e-4 : -1e-4, this.render(n, !0, !1)), this._locked = !1, this._paused && !s) return;
                        this._time = z, this._totalTime = w, this._cycle = x, this._rawPrevTime = y
                    }
                    if (!(this._time !== n && this._first || c || j)) return void(o !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== o && a > 0 && (this._active = !0), 0 === o && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), this._time >= n)
                        for (d = this._first; d && (h = d._next, !this._paused || s);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = h;
                    else
                        for (d = this._last; d && (h = d._prev, !this._paused || s);)(d._active || n >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = h;
                    this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), i && (this._locked || this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || f)))
                }, h.getActive = function (a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var d, e, f = [],
                        g = this.getChildren(a, b, c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                    return f
                }, h.getLabelAfter = function (a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, h.getLabelBefore = function (a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (a > b[c].time) return b[c].name;
                    return null
                }, h.getLabelsArray = function () {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function (a, b) {
                        return a.time - b.time
                    }), b
                }, h.progress = function (a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function (a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function (b) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function (a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, h.repeat = function (a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function (a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function (a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, h.currentLabel = function (a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function () {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = function (a, b, c, d) {
                        this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    g = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function (a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    i = function (a, e, f, g, i) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, i ? (t = b[j], u = c[j], v = .25 * (u + t) * e / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - .5 * (l - k) * e, p = l + .5 * (m - l) * e, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = h(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = h(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    j = function (a, d, e, g) {
                        var h, i, j, k, l, m, n = [];
                        if (g)
                            for (a = [g].concat(a), i = a.length; --i > -1;) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = g[d] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new f(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new f(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new f(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    k = function (a, f, h, k, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : g, null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                }
                            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = j(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                        if (!k) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q], d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                        }
                        for (n = w.length, q = h ? 4 : 1; --n > -1;) o = w[n], p = v[o], i(p, f, h, k, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    l = function (a, b, c) {
                        b = b || "soft";
                        var d, e, g, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || q + 1 > a.length) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], g = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new f(d, e, g, h) : new f(d, (2 * e + d) / 3, (2 * e + g) / 3, g);
                            i.length = n
                        }
                        return p
                    },
                    m = function (a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    n = function (a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            n = [];
                        for (c in a) m(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, n[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = n, h[f] = j, i = 0, n = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    o = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function (a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                m = i[0],
                                o = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = o ? o instanceof Array ? o : [
                                ["x", "y", "rotation", o === !0 ? 0 : Number(o) || 0]
                            ] : null;
                            for (d in m) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? k(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : l(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = n(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (o = this._autoRotate)
                                for (o[0] instanceof Array || (this._autoRotate = o = [o]), f = o.length; --f > -1;)
                                    for (g = 0; 3 > g; g++) d = o[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                            return !0
                        },
                        set: function (b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && b >= (this._l2 = k[++e]););
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (this._l1 > b && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && this._l1 > b ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && l.length - 1 > e) {
                                    for (j = l.length - 1; j > e && b >= (this._s2 = l[++e]););
                                    this._s1 = l[e - 1], this._si = e
                                } else if (this._s1 > b && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && this._s1 > b ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = i + (i > 0 ? .5 : -.5) >> 0), n[f] ? o[f](i) : o[f] = i;
                            if (this._autoRotate) {
                                var p, q, r, s, t, u, v, w = this._autoRotate;
                                for (e = w.length; --e > -1;) f = w[e][2], u = w[e][3] || 0, v = w[e][4] === !0 ? 1 : a, g = this._beziers[w[e][0]], p = this._beziers[w[e][1]], g && p && (g = g[c], p = p[c], q = g.a + (g.b - g.a) * h, s = g.b + (g.c - g.b) * h, q += (s - q) * h, s += (g.c + (g.d - g.c) * h - s) * h, r = p.a + (p.b - p.a) * h, t = p.b + (p.c - p.b) * h, r += (t - r) * h, t += (p.c + (p.d - p.c) * h - t) * h, i = Math.atan2(t - r, s - q) * v + u, n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    p = o.prototype;
                o.bezierThrough = k, o.cubicToQuadratic = h, o._autoCSS = !0, o.quadraticToCubic = function (a, b, c) {
                    return new f(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, o._cssRegister = function () {
                    var a = window._gsDefine.globals.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function (a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new o;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    p = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), p[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = p, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x ? [
                                    ["x", "y", "rotation", j, !1]
                                ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, p._roundProps = function (a, b) {
                    for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
                }, p._kill = function (a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
                var c, d, e, f, g = function () {
                        a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    h = {},
                    i = g.prototype = new a("css");
                i.constructor = g, g.version = "1.11.4", g.API = 2, g.defaultTransformPerspective = 0, i = "px", g.suffixMap = {
                    top: i,
                    right: i,
                    bottom: i,
                    left: i,
                    width: i,
                    height: i,
                    fontSize: i,
                    padding: i,
                    margin: i,
                    perspective: i,
                    lineHeight: ""
                };
                var j, k, l, m, n, o, p = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    q = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    r = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    s = /[^\d\-\.]/g,
                    t = /(?:\d|\-|\+|=|#|\.)*/g,
                    u = /opacity *= *([^)]*)/,
                    v = /opacity:([^;]*)/,
                    w = /alpha\(opacity *=.+?\)/i,
                    x = /^(rgb|hsl)/,
                    y = /([A-Z])/g,
                    z = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    B = function (a, b) {
                        return b.toUpperCase()
                    },
                    C = /(?:Left|Right|Width)/i,
                    D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    F = /,(?=[^\)]*(?:\(|$))/gi,
                    G = Math.PI / 180,
                    H = 180 / Math.PI,
                    I = {},
                    J = document,
                    K = J.createElement("div"),
                    L = J.createElement("img"),
                    M = g._internals = {
                        _specialProps: h
                    },
                    N = navigator.userAgent,
                    O = function () {
                        var a, b = N.indexOf("Android"),
                            c = J.createElement("div");
                        return l = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === b || Number(N.substr(b + 8, 1)) > 3), n = l && 6 > Number(N.substr(N.indexOf("Version/") + 8, 1)), m = -1 !== N.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N) && (o = parseFloat(RegExp.$1)), c.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", a = c.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
                    }(),
                    P = function (a) {
                        return u.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    Q = function (a) {
                        window.console && console.log(a)
                    },
                    R = "",
                    S = "",
                    T = function (a, b) {
                        b = b || K;
                        var c, d, e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (S = 3 === d ? "ms" : c[d], R = "-" + S.toLowerCase() + "-", S + a) : null
                    },
                    U = J.defaultView ? J.defaultView.getComputedStyle : function () {},
                    V = g.getStyle = function (a, b, c, d, e) {
                        var f;
                        return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a, null)) ? (a = c.getPropertyValue(b.replace(y, "-$1").toLowerCase()), f = a || c.length ? a : c[b]) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a)
                    },
                    W = function (a, b, c, d, e) {
                        if ("px" === d || !d) return c;
                        if ("auto" === d || !c) return 0;
                        var f, g = C.test(b),
                            h = a,
                            i = K.style,
                            j = 0 > c;
                        return j && (c = -c), "%" === d && -1 !== b.indexOf("border") ? f = c / 100 * (g ? a.clientWidth : a.clientHeight) : (i.cssText = "border:0 solid red;position:" + V(a, "position") + ";line-height:0;", "%" !== d && h.appendChild ? i[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (h = a.parentNode || J.body, i[g ? "width" : "height"] = c + d), h.appendChild(K), f = parseFloat(K[g ? "offsetWidth" : "offsetHeight"]), h.removeChild(K), 0 !== f || e || (f = W(a, b, c, d, !0))), j ? -f : f
                    },
                    X = function (a, b, c) {
                        if ("absolute" !== V(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = V(a, "margin" + d, c);
                        return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(t, "")) || 0)
                    },
                    Y = function (a, b) {
                        var c, d, e = {};
                        if (b = b || U(a, null))
                            if (c = b.length)
                                for (; --c > -1;) e[b[c].replace(z, B)] = b.getPropertyValue(b[c]);
                            else
                                for (c in b) e[c] = b[c];
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 !== e[c] && (e[c.replace(z, B)] = b[c]);
                        return O || (e.opacity = P(a)), d = xa(a, b, !1), e.rotation = d.rotation, e.skewX = d.skewX, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, wa && (e.z = d.z, e.rotationX = d.rotationX, e.rotationY = d.rotationY, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
                    },
                    Z = function (a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(s, "") ? f : 0 : X(a, g), void 0 !== j[g] && (h = new la(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    $ = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    _ = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    aa = function (a, b, c) {
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = $[b],
                            f = e.length;
                        for (c = c || U(a, null); --f > -1;) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ba = function (a, b) {
                        (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                        var c = a.split(" "),
                            d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                            e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                        return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(s, "")), b.oy = parseFloat(e.replace(s, ""))), d + " " + e + (c.length > 2 ? " " + c[2] : "")
                    },
                    ca = function (a, b) {
                        return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
                    },
                    da = function (a, b) {
                        return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a)
                    },
                    ea = function (a, b, c, d) {
                        var e, f, g, h, i = 1e-6;
                        return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), g = Number(f[0].replace(s, "")) * (-1 === a.indexOf("rad") ? 1 : H) - ("=" === a.charAt(1) ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (0 | g / e) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (0 | g / e) * e)), h = b + g), i > h && h > -i && (h = 0), h
                    },
                    fa = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ga = function (a, b, c) {
                        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
                    },
                    ha = function (a) {
                        var b, c, d, e, f, g;
                        return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), fa[a] ? fa[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, 255 & a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(p), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = ga(e + 1 / 3, b, c), a[1] = ga(e, b, c), a[2] = ga(e - 1 / 3, b, c), a) : (a = a.match(p) || fa.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : fa.black
                    },
                    ia = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (i in fa) ia += "|" + i + "\\b";
                ia = RegExp(ia + ")", "gi");
                var ja = function (a, b, c, d) {
                        if (null == a) return function (a) {
                            return a
                        };
                        var e, f = b ? (a.match(ia) || [""])[0] : "",
                            g = a.split(f).join("").match(r) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(p, "") : "";
                        return k ? e = b ? function (a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && F.test(a)) {
                                for (o = a.replace(F, "|").split("|"), n = 0; o.length > n; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(ia) || [f])[0], m = a.split(b).join("").match(r) || [], n = m.length, k > n--)
                                for (; k > ++n;) m[n] = c ? m[0 | (n - 1) / 2] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function (a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && F.test(a)) {
                                for (f = a.replace(F, "|").split("|"), m = 0; f.length > m; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(r) || [], m = b.length, k > m--)
                                for (; k > ++m;) b[m] = c ? b[0 | (m - 1) / 2] : g[m];
                            return h + b.join(j) + i
                        } : function (a) {
                            return a
                        }
                    },
                    ka = function (a) {
                        return a = a.split(","),
                            function (b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    la = (M._setPluginRatio = function (a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h;) b = g[h.v], h.r ? b = b > 0 ? 0 | b + .5 : 0 | b - .5 : i > b && b > -i && (b = 0), h.t[h.p] = b, h = h._next;
                        if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a)
                            for (h = f.firstMPT; h;) {
                                if (c = h.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; c.l > d; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c.e = e
                                    }
                                } else c.e = c.s + c.xs0;
                                h = h._next
                            }
                    }, function (a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    ma = (M._parseToProxy = function (a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = I;
                        for (c._transform = null, I = b, d = k = c.parse(a, b, d, e), I = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (1 >= d.type && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new la(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new la(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, M.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ma || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    na = g.parseComplex = function (a, b, c, d, e, f, g, h, i, k) {
                        c = c || f || "", g = new ma(a, b, 0, 0, g, k ? 2 : 1, null, !1, h, c, d), d += "";
                        var l, m, n, o, r, s, t, u, v, w, y, z, A = c.split(", ").join(",").split(" "),
                            B = d.split(", ").join(",").split(" "),
                            C = A.length,
                            D = j !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(F, ", ").split(" "), B = B.join(" ").replace(F, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), C = A.length), g.plugin = i, g.setRatio = k, l = 0; C > l; l++)
                            if (o = A[l], r = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, ca(r, u), r.replace(q, ""), D && -1 !== r.indexOf("px"), !0);
                            else if (e && ("#" === o.charAt(0) || fa[o] || x.test(o))) z = "," === r.charAt(r.length - 1) ? ")," : ")", o = ha(o), r = ha(r), v = o.length + r.length > 6, v && !O && 0 === r[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l]).join("transparent")) : (O || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], r[0] - o[0], ",", !0, !0).appendXtra("", o[1], r[1] - o[1], ",", !0).appendXtra("", o[2], r[2] - o[2], v ? "," : z, !0), v && (o = 4 > o.length ? 1 : o[3], g.appendXtra("", o, (4 > r.length ? 1 : r[3]) - o, z, !1)));
                        else if (s = o.match(p)) {
                            if (t = r.match(q), !t || t.length !== s.length) return g;
                            for (n = 0, m = 0; s.length > m; m++) y = s[m], w = o.indexOf(y, n), g.appendXtra(o.substr(n, w - n), Number(y), ca(t[m], y), "", D && "px" === o.substr(w + y.length, 2), 0 === m), n = w + y.length;
                            g["xs" + g.l] += o.substr(n)
                        } else g["xs" + g.l] += g.l ? " " + o : o;
                        if (-1 !== d.indexOf("=") && g.data) {
                            for (z = g.xs0 + g.data.s, l = 1; g.l > l; l++) z += g["xs" + l] + g.data["xn" + l];
                            g.e = z + g["xs" + l]
                        }
                        return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
                    },
                    oa = 9;
                for (i = ma.prototype, i.l = i.pr = 0; --oa > 0;) i["xn" + oa] = 0, i["xs" + oa] = "";
                i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function (a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ma(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var pa = function (a, b) {
                        b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || ja(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    qa = M._registerComplexSpecialProp = function (a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; f.length > d; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new pa(f[d], b)
                    },
                    ra = function (a) {
                        if (!h[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            qa(a, {
                                parser: function (a, c, d, e, f, g, i) {
                                    var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                                    return j ? (j._cssRegister(), h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                i = pa.prototype, i.parseComplex = function (a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (F.test(c) || F.test(b) ? (h = b.replace(F, "|").split("|"), i = c.replace(F, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (c = -1 === l ? i : h, c[g] += " " + m));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return na(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, i.parse = function (a, b, c, d, f, g) {
                    return this.parseComplex(a.style, this.format(V(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function (a, b, c) {
                    qa(a, {
                        parser: function (a, d, e, f, g, h) {
                            var i = new ma(a, e, 0, 0, g, 2, e, !1, c);
                            return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i
                        },
                        priority: c
                    })
                };
                var sa = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    ta = T("transform"),
                    ua = R + "transform",
                    va = T("transformOrigin"),
                    wa = null !== T("perspective"),
                    xa = function (a, b, c, d) {
                        if (a._gsTransform && c && !d) return a._gsTransform;
                        var e, f, h, i, j, k, l, m, n, o, p, q, r, s = c ? a._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            t = 0 > s.scaleX,
                            u = 2e-5,
                            v = 1e5,
                            w = 179.99,
                            x = w * G,
                            y = wa ? parseFloat(V(a, va, b, !1, "0 0 0").split(" ")[2]) || s.zOrigin || 0 : 0;
                        for (ta ? e = V(a, ua, b, !0) : a.currentStyle && (e = a.currentStyle.filter.match(D), e = e && 4 === e.length ? [e[0].substr(4), Number(e[2].substr(4)), Number(e[1].substr(4)), e[3].substr(4), s.x || 0, s.y || 0].join(",") : ""), f = (e || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], h = f.length; --h > -1;) i = Number(f[h]), f[h] = (j = i - (i |= 0)) ? (0 | j * v + (0 > j ? -.5 : .5)) / v + i : i;
                        if (16 === f.length) {
                            var z = f[8],
                                A = f[9],
                                B = f[10],
                                C = f[12],
                                E = f[13],
                                F = f[14];
                            if (s.zOrigin && (F = -s.zOrigin, C = z * F - f[12], E = A * F - f[13], F = B * F + s.zOrigin - f[14]), !c || d || null == s.rotationX) {
                                var I, J, K, L, M, N, O, P = f[0],
                                    Q = f[1],
                                    R = f[2],
                                    S = f[3],
                                    T = f[4],
                                    U = f[5],
                                    W = f[6],
                                    X = f[7],
                                    Y = f[11],
                                    Z = Math.atan2(W, B),
                                    $ = -x > Z || Z > x;
                                s.rotationX = Z * H, Z && (L = Math.cos(-Z), M = Math.sin(-Z), I = T * L + z * M, J = U * L + A * M, K = W * L + B * M, z = T * -M + z * L, A = U * -M + A * L, B = W * -M + B * L, Y = X * -M + Y * L, T = I, U = J, W = K), Z = Math.atan2(z, P), s.rotationY = Z * H, Z && (N = -x > Z || Z > x, L = Math.cos(-Z), M = Math.sin(-Z), I = P * L - z * M, J = Q * L - A * M, K = R * L - B * M, A = Q * M + A * L, B = R * M + B * L, Y = S * M + Y * L, P = I, Q = J, R = K), Z = Math.atan2(Q, U), s.rotation = Z * H, Z && (O = -x > Z || Z > x, L = Math.cos(-Z), M = Math.sin(-Z), P = P * L + T * M, J = Q * L + U * M, U = Q * -M + U * L, W = R * -M + W * L, Q = J), O && $ ? s.rotation = s.rotationX = 0 : O && N ? s.rotation = s.rotationY = 0 : N && $ && (s.rotationY = s.rotationX = 0), s.scaleX = (0 | Math.sqrt(P * P + Q * Q) * v + .5) / v, s.scaleY = (0 | Math.sqrt(U * U + A * A) * v + .5) / v, s.scaleZ = (0 | Math.sqrt(W * W + B * B) * v + .5) / v, s.skewX = 0, s.perspective = Y ? 1 / (0 > Y ? -Y : Y) : 0, s.x = C, s.y = E, s.z = F
                            }
                        } else if (!(wa && !d && f.length && s.x === f[4] && s.y === f[5] && (s.rotationX || s.rotationY) || void 0 !== s.x && "none" === V(a, "display", b))) {
                            var _ = f.length >= 6,
                                aa = _ ? f[0] : 1,
                                ba = f[1] || 0,
                                ca = f[2] || 0,
                                da = _ ? f[3] : 1;
                            s.x = f[4] || 0, s.y = f[5] || 0, k = Math.sqrt(aa * aa + ba * ba), l = Math.sqrt(da * da + ca * ca), m = aa || ba ? Math.atan2(ba, aa) * H : s.rotation || 0, n = ca || da ? Math.atan2(ca, da) * H + m : s.skewX || 0, o = k - Math.abs(s.scaleX || 0), p = l - Math.abs(s.scaleY || 0), Math.abs(n) > 90 && 270 > Math.abs(n) && (t ? (k *= -1, n += 0 >= m ? 180 : -180, m += 0 >= m ? 180 : -180) : (l *= -1, n += 0 >= n ? 180 : -180)), q = (m - s.rotation) % 180, r = (n - s.skewX) % 180, (void 0 === s.skewX || o > u || -u > o || p > u || -u > p || q > -w && w > q && !1 | q * v || r > -w && w > r && !1 | r * v) && (s.scaleX = k, s.scaleY = l, s.rotation = m, s.skewX = n), wa && (s.rotationX = s.rotationY = s.z = 0, s.perspective = parseFloat(g.defaultTransformPerspective) || 0, s.scaleZ = 1)
                        }
                        s.zOrigin = y;
                        for (h in s) u > s[h] && s[h] > -u && (s[h] = 0);
                        return c && (a._gsTransform = s), s
                    },
                    ya = function (a) {
                        var b, c, d = this.data,
                            e = -d.rotation * G,
                            f = e + d.skewX * G,
                            g = 1e5,
                            h = (0 | Math.cos(e) * d.scaleX * g) / g,
                            i = (0 | Math.sin(e) * d.scaleX * g) / g,
                            j = (0 | Math.sin(f) * -d.scaleY * g) / g,
                            k = (0 | Math.cos(f) * d.scaleY * g) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, p, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                w = d.x,
                                x = d.y;
                            if (null != d.ox && (n = (d.oxp ? .01 * q * d.ox : d.ox) - q / 2, p = (d.oyp ? .01 * r * d.oy : d.oy) - r / 2, w += n - (n * h + p * i), x += p - (n * j + p * k)), s ? (n = q / 2, p = r / 2, v += ", Dx=" + (n - (n * h + p * i) + w) + ", Dy=" + (p - (n * j + p * k) + x) + ")") : v += ", sizingMethod='auto expand')", l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(E, v) : v + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === v.indexOf("Dx=0, Dy=0") || u.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf("gradient(" && b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                var y, z, A, B = 8 > o ? 1 : -1;
                                for (n = d.ieOffsetX || 0, p = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), oa = 0; 4 > oa; oa++) z = _[oa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : W(this.t, z, parseFloat(y), y.replace(t, "")) || 0, A = c !== d[z] ? 2 > oa ? -d.ieOffsetX : -d.ieOffsetY : 2 > oa ? n - d.ieOffsetX : p - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === oa || 2 === oa ? 1 : B))) + "px"
                            }
                        }
                    },
                    za = function () {
                        var a, b, c, d, e, f, g, h, i, j, k, l, n, o, p, q, r, s, t, u, v, w, x, y = this.data,
                            z = this.t.style,
                            A = y.rotation * G,
                            B = y.scaleX,
                            C = y.scaleY,
                            D = y.scaleZ,
                            E = y.perspective;
                        if (m) {
                            var F = 1e-4;
                            F > B && B > -F && (B = D = 2e-5), F > C && C > -F && (C = D = 2e-5), !E || y.z || y.rotationX || y.rotationY || (E = 0)
                        }
                        if (A || y.skewX) s = Math.cos(A), t = Math.sin(A), a = s, e = t, y.skewX && (A -= y.skewX * G, s = Math.cos(A), t = Math.sin(A)), b = -t, f = s;
                        else {
                            if (!(y.rotationY || y.rotationX || 1 !== D || E)) return void(z[ta] = "translate3d(" + y.x + "px," + y.y + "px," + y.z + "px)" + (1 !== B || 1 !== C ? " scale(" + B + "," + C + ")" : ""));
                            a = f = 1, b = e = 0
                        }
                        k = 1, c = d = g = h = i = j = l = n = o = 0, p = E ? -1 / E : 0, q = y.zOrigin, r = 1e5, A = y.rotationY * G, A && (s = Math.cos(A), t = Math.sin(A), i = k * -t, n = p * -t, c = a * t, g = e * t, k *= s, p *= s, a *= s, e *= s), A = y.rotationX * G, A && (s = Math.cos(A), t = Math.sin(A), u = b * s + c * t, v = f * s + g * t, w = j * s + k * t, x = o * s + p * t, c = b * -t + c * s, g = f * -t + g * s, k = j * -t + k * s, p = o * -t + p * s, b = u, f = v, j = w, o = x), 1 !== D && (c *= D, g *= D, k *= D, p *= D), 1 !== C && (b *= C, f *= C, j *= C, o *= C), 1 !== B && (a *= B, e *= B, i *= B, n *= B), q && (l -= q, d = c * l, h = g * l, l = k * l + q), d = (u = (d += y.x) - (d |= 0)) ? (0 | u * r + (0 > u ? -.5 : .5)) / r + d : d, h = (u = (h += y.y) - (h |= 0)) ? (0 | u * r + (0 > u ? -.5 : .5)) / r + h : h, l = (u = (l += y.z) - (l |= 0)) ? (0 | u * r + (0 > u ? -.5 : .5)) / r + l : l, z[ta] = "matrix3d(" + [(0 | a * r) / r, (0 | e * r) / r, (0 | i * r) / r, (0 | n * r) / r, (0 | b * r) / r, (0 | f * r) / r, (0 | j * r) / r, (0 | o * r) / r, (0 | c * r) / r, (0 | g * r) / r, (0 | k * r) / r, (0 | p * r) / r, d, h, l, E ? 1 + -l / E : 1].join(",") + ")"
                    },
                    Aa = function (a) {
                        var b, c, d, e, f, g = this.data,
                            h = this.t,
                            i = h.style;
                        return g.rotationX || g.rotationY || g.z || g.force3D ? (this.setRatio = za, void za.call(this, a)) : void(g.rotation || g.skewX ? (b = g.rotation * G, c = b - g.skewX * G, d = 1e5, e = g.scaleX * d, f = g.scaleY * d, i[ta] = "matrix(" + (0 | Math.cos(b) * e) / d + "," + (0 | Math.sin(b) * e) / d + "," + (0 | Math.sin(c) * -f) / d + "," + (0 | Math.cos(c) * f) / d + "," + g.x + "," + g.y + ")") : i[ta] = "matrix(" + g.scaleX + ",0,0," + g.scaleY + "," + g.x + "," + g.y + ")")
                    };
                qa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function (a, b, c, d, f, g, h) {
                        if (d._transform) return f;
                        var i, j, k, l, m, n, o, p = d._transform = xa(a, e, !0, h.parseTransform),
                            q = a.style,
                            r = 1e-6,
                            s = sa.length,
                            t = h,
                            u = {};
                        if ("string" == typeof t.transform && ta) k = q.cssText, q[ta] = t.transform, q.display = "block", i = xa(a, null, !1), q.cssText = k;
                        else if ("object" == typeof t) {
                            if (i = {
                                    scaleX: da(null != t.scaleX ? t.scaleX : t.scale, p.scaleX),
                                    scaleY: da(null != t.scaleY ? t.scaleY : t.scale, p.scaleY),
                                    scaleZ: da(t.scaleZ, p.scaleZ),
                                    x: da(t.x, p.x),
                                    y: da(t.y, p.y),
                                    z: da(t.z, p.z),
                                    perspective: da(t.transformPerspective, p.perspective)
                                }, o = t.directionalRotation, null != o)
                                if ("object" == typeof o)
                                    for (k in o) t[k] = o[k];
                                else t.rotation = o;
                            i.rotation = ea("rotation" in t ? t.rotation : "shortRotation" in t ? t.shortRotation + "_short" : "rotationZ" in t ? t.rotationZ : p.rotation, p.rotation, "rotation", u), wa && (i.rotationX = ea("rotationX" in t ? t.rotationX : "shortRotationX" in t ? t.shortRotationX + "_short" : p.rotationX || 0, p.rotationX, "rotationX", u), i.rotationY = ea("rotationY" in t ? t.rotationY : "shortRotationY" in t ? t.shortRotationY + "_short" : p.rotationY || 0, p.rotationY, "rotationY", u)), i.skewX = null == t.skewX ? p.skewX : ea(t.skewX, p.skewX), i.skewY = null == t.skewY ? p.skewY : ea(t.skewY, p.skewY), (j = i.skewY - p.skewY) && (i.skewX += j, i.rotation += j)
                        }
                        for (wa && null != t.force3D && (p.force3D = t.force3D, n = !0), m = p.force3D || p.z || p.rotationX || p.rotationY || i.z || i.rotationX || i.rotationY || i.perspective, m || null == t.scale || (i.scaleZ = 1); --s > -1;) c = sa[s], l = i[c] - p[c], (l > r || -r > l || null != I[c]) && (n = !0, f = new ma(p, c, p[c], l, f), c in u && (f.e = u[c]), f.xs0 = 0, f.plugin = g, d._overwriteProps.push(f.n));
                        return l = t.transformOrigin, (l || wa && m && p.zOrigin) && (ta ? (n = !0, c = va, l = (l || V(a, c, e, !1, "50% 50%")) + "", f = new ma(q, c, 0, 0, f, -1, "transformOrigin"), f.b = q[c], f.plugin = g, wa ? (k = p.zOrigin, l = l.split(" "), p.zOrigin = (l.length > 2 && (0 === k || "0px" !== l[2]) ? parseFloat(l[2]) : k) || 0, f.xs0 = f.e = q[c] = l[0] + " " + (l[1] || "50%") + " 0px", f = new ma(p, "zOrigin", 0, 0, f, -1, f.n), f.b = k, f.xs0 = f.e = p.zOrigin) : f.xs0 = f.e = q[c] = l) : ba(l + "", p)), n && (d._transformType = m || 3 === this._transformType ? 3 : 2), f
                    },
                    prefix: !0
                }), qa("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), qa("borderRadius", {
                    defaultValue: "0px",
                    parser: function (a, b, c, f, g) {
                        b = this.format(b);
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            y = a.style;
                        for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), i = 0; x.length > i; i++) this.p.indexOf("border") && (x[i] = T(x[i])), l = k = V(a, x[i], e, !1, "0px"), -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = W(a, "borderLeft", n, s), v = W(a, "borderTop", n, s), "%" === r ? (l = 100 * (u / p) + "%", k = 100 * (v / q) + "%") : "em" === r ? (w = W(a, "borderLeft", 1, "em"), l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, j = parseFloat(k) + o + r)), g = na(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: ja("0px 0px 0px 0px", !1, !0)
                }), qa("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            p = e || U(a, null),
                            q = this.format((p ? o ? p.getPropertyValue(n + "-x") + " " + p.getPropertyValue(n + "-y") : p.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = V(a, "backgroundImage").replace(A, ""), m && "none" !== m)) {
                            for (h = q.split(" "), i = r.split(" "), L.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - L.width : a.offsetHeight - L.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : 100 * (parseFloat(q) / l) + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ba
                }), qa("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ba
                }), qa("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), qa("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), qa("transformStyle", {
                    prefix: !0
                }), qa("backfaceVisibility", {
                    prefix: !0
                }), qa("userSelect", {
                    prefix: !0
                }), qa("margin", {
                    parser: ka("marginTop,marginRight,marginBottom,marginLeft")
                }), qa("padding", {
                    parser: ka("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), qa("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > o ? (i = a.currentStyle, j = 8 > o ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                    }
                }), qa("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), qa("autoRound,strictUnits", {
                    parser: function (a, b, c, d, e) {
                        return e
                    }
                }), qa("border", {
                    defaultValue: "0px solid #000",
                    parser: function (a, b, c, d, f, g) {
                        return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", e, !1, "0px") + " " + V(a, "borderTopStyle", e, !1, "solid") + " " + V(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
                    },
                    color: !0,
                    formatter: function (a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(ia) || ["#000"])[0]
                    }
                }), qa("borderWidth", {
                    parser: ka("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), qa("float,cssFloat,styleFloat", {
                    parser: function (a, b, c, d, e) {
                        var f = a.style,
                            g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                        return new ma(f, g, 0, 0, e, -1, c, !1, 0, f[g], b)
                    }
                });
                var Ba = function (a) {
                    var b, c = this.t,
                        d = c.filter || V(this.data, "filter"),
                        e = 0 | this.s + this.c * a;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !V(this.data, "filter")) : (c.filter = d.replace(w, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("opacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(u, "opacity=" + e))
                };
                qa("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (a, b, c, d, f, g) {
                        var h = parseFloat(V(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === V(a, "visibility", e) && 0 !== b && (h = 0), O ? f = new ma(i, "opacity", h, b - h, f) : (f = new ma(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ba), j && (f = new ma(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var Ca = function (a, b) {
                        b && (a.removeProperty ? a.removeProperty(b.replace(y, "-$1").toLowerCase()) : a.removeAttribute(b))
                    },
                    Da = function (a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.className = 0 === a ? this.b : this.e;
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Ca(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                qa("className", {
                    parser: function (a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.className,
                            p = a.style.cssText;
                        if (g = f._classNamePT = new ma(a, d, 0, 0, g, 2), g.setRatio = Da, g.pr = -11, c = !0, g.b = o, k = Y(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), f._tween._duration && (a.className = g.e, j = Z(a, k, Y(a), i, m), a.className = o, g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)), g
                    }
                });
                var Ea = function (a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f = this.t.style,
                            g = h.transform.parse;
                        if ("all" === this.e) f.cssText = "", e = !0;
                        else
                            for (b = this.e.split(","), d = b.length; --d > -1;) c = b[d], h[c] && (h[c].parse === g ? e = !0 : c = "transformOrigin" === c ? va : h[c].p), Ca(f, c);
                        e && (Ca(f, ta), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (qa("clearProps", {
                        parser: function (a, b, d, e, f) {
                            return f = new ma(a, d, 0, 0, f, 2), f.setRatio = Ea, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), i = "bezier,throwProps,physicsProps,physics2D".split(","), oa = i.length; oa--;) ra(i[oa]);
                i = g.prototype, i._firstPT = null, i._onInitTween = function (a, b, h) {
                    if (!a.nodeType) return !1;
                    this._target = a, this._tween = h, this._vars = b, j = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = U(a, ""), f = this._overwriteProps;
                    var i, m, o, p, q, r, s, t, u, w = a.style;
                    if (k && "" === w.zIndex && (i = V(a, "zIndex", e), ("auto" === i || "" === i) && (w.zIndex = 0)), "string" == typeof b && (p = w.cssText, i = Y(a, e), w.cssText = p + ";" + b, i = Z(a, i, Y(a)).difs, !O && v.test(b) && (i.opacity = parseFloat(RegExp.$1)), b = i, w.cssText = p), this._firstPT = m = this.parse(a, b, null), this._transformType) {
                        for (u = 3 === this._transformType, ta ? l && (k = !0, "" === w.zIndex && (s = V(a, "zIndex", e), ("auto" === s || "" === s) && (w.zIndex = 0)), n && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : w.zoom = 1, o = m; o && o._next;) o = o._next;
                        t = new ma(a, "transform", 0, 0, null, 2), this._linkCSSP(t, null, o), t.setRatio = u && wa ? za : ta ? Aa : ya, t.data = this._transform || xa(a, e, !0), f.pop()
                    }
                    if (c) {
                        for (; m;) {
                            for (r = m._next, o = p; o && o.pr > m.pr;) o = o._next;
                            (m._prev = o ? o._prev : q) ? m._prev._next = m: p = m, (m._next = o) ? o._prev = m : q = m, m = r
                        }
                        this._firstPT = p
                    }
                    return !0
                }, i.parse = function (a, b, c, f) {
                    var g, i, k, l, m, n, o, p, q, r, s = a.style;
                    for (g in b) n = b[g], i = h[g], i ? c = i.parse(a, n, g, this, c, f, b) : (m = V(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && x.test(n) ? (q || (n = ha(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = na(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (k = parseFloat(m), o = k || 0 === k ? m.substr((k + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (k = aa(a, g, e), o = "px") : "left" === g || "top" === g ? (k = X(a, g, e), o = "px") : (k = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(t, "")) : (l = parseFloat(n), p = q ? n.substr((l + "").length) || "" : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + k : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && (k || 0 === k) && (k = W(a, g, k, o), "%" === p ? (k /= W(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = k + "%")) : "em" === p ? k /= W(a, g, 1, "em") : (l = W(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + k + p)), r && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== s[g] && (n || "NaN" != n + "" && null != n) ? (c = new ma(s, g, l || k || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : Q("invalid " + g + " tween value: " + b[g]) : (c = new ma(s, g, k, l - k, c, 0, g, j !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = na(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
                    return c
                }, i.setRatio = function (a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = b > 0 ? 0 | b + .5 : 0 | b - .5 : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), e = e._next
                }, i._enableTransforms = function (a) {
                    this._transformType = a || 3 === this._transformType ? 3 : 2, this._transform = this._transform || xa(this._target, e, !0)
                }, i._linkCSSP = function (a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next,
                        d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                }, i._kill = function (b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
                };
                var Fa = function (a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Fa(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Fa(f, b, c)
                };
                return g.cascadeTo = function (a, c, d) {
                    var e, f, g, h = b.to(a, c, d),
                        i = [h],
                        j = [],
                        k = [],
                        l = [],
                        m = b._internals.reservedProps;
                    for (a = h._targets || h.target, Fa(a, j, l), h.render(c, !0), Fa(a, k), h.render(0, !0), h._enabled(!0), e = l.length; --e > -1;)
                        if (f = Z(l[e], j[e], k[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) m[g] && (f[g] = d[g]);
                            i.push(b.to(l[e], c, f))
                        }
                    return i
                }, a.activate([g]), g
            }, !0),
            function () {
                var a = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function (a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = a.prototype;
                b._onInitAllProps = function () {
                    for (var a, b, c, d = this._tween, e = d.vars.roundProps instanceof Array ? d.vars.roundProps : d.vars.roundProps.split(","), f = e.length, g = {}, h = d._propLookup.roundProps; --f > -1;) g[e[f]] = 1;
                    for (f = e.length; --f > -1;)
                        for (a = e[f], b = d._firstPT; b;) c = b._next, b.pg ? b.t._roundProps(g, !0) : b.n === a && (this._add(b.t, a, b.s, b.c), c && (c._prev = b._prev), b._prev ? b._prev._next = c : d._firstPT === b && (d._firstPT = c), b._next = b._prev = null, d._propLookup[a] = h), b = c;
                    return !1
                }, b._add = function (a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.2.0",
                init: function (a, b) {
                    var c;
                    if ("function" != typeof a.setAttribute) return !1;
                    this._target = a, this._proxy = {};
                    for (c in b) this._addTween(this._proxy, c, parseFloat(a.getAttribute(c)), b[c], c) && this._overwriteProps.push(c);
                    return !0
                },
                set: function (a) {
                    this._super.setRatio.call(this, a);
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = c[d], this._target.setAttribute(b, this._proxy[b] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                version: "0.2.0",
                init: function (a, b) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var c, d, e, f, g, h, i = b.useRadians === !0 ? 2 * Math.PI : 360,
                        j = 1e-6;
                    for (c in b) "useRadians" !== c && (h = (b[c] + "").split("_"), d = h[0], e = parseFloat("function" != typeof a[c] ? a[c] : a[c.indexOf("set") || "function" != typeof a["get" + c.substr(3)] ? c : "get" + c.substr(3)]()), f = this.finals[c] = "string" == typeof d && "=" === d.charAt(1) ? e + parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) || 0, g = f - e, h.length && (d = h.join("_"), -1 !== d.indexOf("short") && (g %= i, g !== g % (i / 2) && (g = 0 > g ? g + i : g - i)), -1 !== d.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * i) % i - (0 | g / i) * i : -1 !== d.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * i) % i - (0 | g / i) * i)), (g > j || -j > g) && (this._addTween(a, c, e, e + g, c), this._overwriteProps.push(c)));
                    return !0
                },
                set: function (a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function (a) {
                var b, c, d, e = window.GreenSockGlobals || window,
                    f = e.com.greensock,
                    g = 2 * Math.PI,
                    h = Math.PI / 2,
                    i = f._class,
                    j = function (b, c) {
                        var d = i("easing." + b, function () {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    k = a.register || function () {},
                    l = function (a, b, c, d) {
                        var e = i("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return k(e, a), e
                    },
                    m = function (a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    n = function (b, c) {
                        var d = i("easing." + b, function (a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function (a) {
                            return new d(a)
                        }, d
                    },
                    o = l("Back", n("BackOut", function (a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), n("BackIn", function (a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), n("BackInOut", function (a) {
                        return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    p = i("easing.SlowMo", function (a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    q = p.prototype = new a;
                return q.constructor = p, q.getRatio = function (a) {
                    var b = a + (.5 - a) * this._p;
                    return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, p.ease = new p(.7, .7), q.config = p.config = function (a, b, c) {
                    return new p(a, b, c)
                }, b = i("easing.SteppedEase", function (a) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
                }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function (a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
                }, q.config = b.config = function (a) {
                    return new b(a)
                }, c = i("easing.RoughEase", function (b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = .5 * f * f * r) : (f = 2 * (1 - c), e = .5 * f * f * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function (a, b) {
                            return a.x - b.x
                        }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                    this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
                }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function (a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && b.t >= a;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, q.config = function (a) {
                    return new c(a)
                }, c.ease = new c, l("Bounce", j("BounceOut", function (a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), j("BounceIn", function (a) {
                    return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), j("BounceInOut", function (a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), l("Circ", j("CircOut", function (a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), j("CircIn", function (a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), j("CircInOut", function (a) {
                    return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), d = function (b, c, d) {
                    var e = i("easing." + b, function (a, b) {
                            this._p1 = a || 1, this._p2 = b || d, this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
                        return new e(a, b)
                    }, e
                }, l("Elastic", d("ElasticOut", function (a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * g / this._p2) + 1
                }, .3), d("ElasticIn", function (a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2))
                }, .3), d("ElasticInOut", function (a) {
                    return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) + 1
                }, .45)), l("Expo", j("ExpoOut", function (a) {
                    return 1 - Math.pow(2, -10 * a)
                }), j("ExpoIn", function (a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), j("ExpoInOut", function (a) {
                    return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), l("Sine", j("SineOut", function (a) {
                    return Math.sin(a * h)
                }), j("SineIn", function (a) {
                    return -Math.cos(a * h) + 1
                }), j("SineInOut", function (a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), i("easing.EaseLookup", {
                    find: function (b) {
                        return a.map[b]
                    }
                }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
            }, !0)
    }),
    function (a) {
        "use strict";
        var b = a.GreenSockGlobals || a;
        if (!b.TweenLite) {
            var c, d, e, f, g, h = function (a) {
                    var c, d = a.split("."),
                        e = b;
                    for (c = 0; d.length > c; c++) e[d[c]] = e = e[d[c]] || {};
                    return e
                },
                i = h("com.greensock"),
                j = 1e-10,
                k = [].slice,
                l = function () {},
                m = function () {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function (c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                n = {},
                o = function (c, d, e, f) {
                    this.sc = n[c] ? n[c].sc : [], n[c] = this, this.gsClass = null, this.func = e;
                    var g = [];
                    this.check = function (i) {
                        for (var j, k, l, m, p = d.length, q = p; --p > -1;)(j = n[d[p]] || new o(d[p], [])).gsClass ? (g[p] = j.gsClass, q--) : i && j.sc.push(this);
                        if (0 === q && e)
                            for (k = ("com.greensock." + c).split("."), l = k.pop(), m = h(k.join("."))[l] = this.gsClass = e.apply(e, g), f && (b[l] = m, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + c.split(".").join("/"), [], function () {
                                    return m
                                }) : "undefined" != typeof module && module.exports && (module.exports = m)), p = 0; this.sc.length > p; p++) this.sc[p].check()
                    }, this.check(!0)
                },
                p = a._gsDefine = function (a, b, c, d) {
                    return new o(a, b, c, d)
                },
                q = i._class = function (a, b, c) {
                    return b = b || function () {}, p(a, [], function () {
                        return b
                    }, c), b
                };
            p.globals = b;
            var r = [0, 0, 1, 1],
                s = [],
                t = q("easing.Ease", function (a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? r.concat(b) : r
                }, !0),
                u = t.map = {},
                v = t.register = function (a, b, c, d) {
                    for (var e, f, g, h, j = b.split(","), k = j.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                        for (f = j[k], e = d ? q("easing." + f, null, !0) : i.easing[f] || {}, g = l.length; --g > -1;) h = l[g], u[f + "." + h] = u[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for (e = t.prototype, e._calcEnd = !1, e.getRatio = function (a) {
                    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                }, c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], d = c.length; --d > -1;) e = c[d] + ",Power" + d, v(new t(null, null, 1, d), e, "easeOut", !0), v(new t(null, null, 2, d), e, "easeIn" + (0 === d ? ",easeNone" : "")), v(new t(null, null, 3, d), e, "easeInOut");
            u.linear = i.easing.Linear.easeIn, u.swing = i.easing.Quad.easeInOut;
            var w = q("events.EventDispatcher", function (a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            e = w.prototype, e.addEventListener = function (a, b, c, d, e) {
                e = e || 0;
                var h, i, j = this._listeners[a],
                    k = 0;
                for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) h = j[i], h.c === b && h.s === c ? j.splice(i, 1) : 0 === k && e > h.pr && (k = i + 1);
                j.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                }), this !== f || g || f.wake()
            }, e.removeEventListener = function (a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1)
            }, e.dispatchEvent = function (a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c)
            };
            var x = a.requestAnimationFrame,
                y = a.cancelAnimationFrame,
                z = Date.now || function () {
                    return (new Date).getTime()
                },
                A = z();
            for (c = ["ms", "moz", "webkit", "o"], d = c.length; --d > -1 && !x;) x = a[c[d] + "RequestAnimationFrame"], y = a[c[d] + "CancelAnimationFrame"] || a[c[d] + "CancelRequestAnimationFrame"];
            q("Ticker", function (a, b) {
                var c, d, e, h, i, j = this,
                    k = z(),
                    m = b !== !1 && x,
                    n = function (a) {
                        A = z(), j.time = (A - k) / 1e3;
                        var b, f = j.time - i;
                        (!c || f > 0 || a === !0) && (j.frame++, i += f + (f >= h ? .004 : h - f), b = !0), a !== !0 && (e = d(n)), b && j.dispatchEvent("tick")
                    };
                w.call(j), j.time = j.frame = 0, j.tick = function () {
                    n(!0)
                }, j.sleep = function () {
                    null != e && (m && y ? y(e) : clearTimeout(e), d = l, e = null, j === f && (g = !1))
                }, j.wake = function () {
                    null !== e && j.sleep(), d = 0 === c ? l : m && x ? x : function (a) {
                        return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                    }, j === f && (g = !0), n(2)
                }, j.fps = function (a) {
                    return arguments.length ? (c = a, h = 1 / (c || 60), i = this.time + h, void j.wake()) : c
                }, j.useRAF = function (a) {
                    return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m
                }, j.fps(a), setTimeout(function () {
                    m && (!e || 5 > j.frame) && j.useRAF(!1)
                }, 1500)
            }), e = i.Ticker.prototype = new i.events.EventDispatcher, e.constructor = i.Ticker;
            var B = q("core.Animation", function (a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, O) {
                    g || f.wake();
                    var c = this.vars.useFrames ? N : O;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            f = B.ticker = new i.Ticker, e = B.prototype, e._dirty = e._gc = e._initted = e._paused = !1, e._totalTime = e._time = 0, e._rawPrevTime = -1, e._next = e._last = e._onUpdate = e._timeline = e.timeline = null, e._paused = !1;
            var C = function () {
                g && z() - A > 2e3 && f.wake(), setTimeout(C, 2e3)
            };
            C(), e.play = function (a, b) {
                return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1)
            }, e.pause = function (a, b) {
                return arguments.length && this.seek(a, b), this.paused(!0)
            }, e.resume = function (a, b) {
                return arguments.length && this.seek(a, b), this.paused(!1)
            }, e.seek = function (a, b) {
                return this.totalTime(Number(a), b !== !1)
            }, e.restart = function (a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
            }, e.reverse = function (a, b) {
                return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, e.render = function () {}, e.invalidate = function () {
                return this
            }, e.isActive = function () {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
            }, e._enabled = function (a, b) {
                return g || f.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, e._kill = function () {
                return this._enabled(!1, !1)
            }, e.kill = function (a, b) {
                return this._kill(a, b), this
            }, e._uncache = function (a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, e._swapSelfInParams = function (a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, e.eventCallback = function (a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = m(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, e.delay = function (a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, e.duration = function (a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, e.totalDuration = function (a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, e.time = function (a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, e.totalTime = function (a, b, c) {
                if (g || f.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && this.render(a, b, !1)
                }
                return this
            }, e.progress = e.totalProgress = function (a, b) {
                return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
            }, e.startTime = function (a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, e.timeScale = function (a) {
                if (!arguments.length) return this._timeScale;
                if (a = a || j, this._timeline && this._timeline.smoothChildTiming) {
                    var b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = c - (c - this._startTime) * this._timeScale / a
                }
                return this._timeScale = a, this._uncache(!1)
            }, e.reversed = function (a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, e.paused = function (a) {
                if (!arguments.length) return this._paused;
                if (a != this._paused && this._timeline) {
                    g || a || f.wake();
                    var b = this._timeline,
                        c = b.rawTime(),
                        d = c - this._pauseTime;
                    !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !a && this._enabled(!0, !1), this
            };
            var D = q("core.SimpleTimeline", function (a) {
                B.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            e = D.prototype = new B, e.constructor = D, e.kill()._gc = !1, e._first = e._last = null, e._sortChildren = !1, e.add = e.insert = function (a, b) {
                var c, d;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                    for (d = a._startTime; c && c._startTime > d;) c = c._prev;
                return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
            }, e._remove = function (a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
            }, e.render = function (a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, e.rawTime = function () {
                return g || f.wake(), this._totalTime
            };
            var E = q("TweenLite", function (b, c, d) {
                    if (B.call(this, c, d), this.render = E.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : E.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? M[E.defaultOverwrite] : "number" == typeof i ? i >> 0 : M[i], (h || b instanceof Array || b.push && m(b)) && "number" != typeof b[0])
                        for (this._targets = g = k.call(b, 0), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(k.call(f, 0))) : (this._siblings[e] = P(f, this, !1), 1 === i && this._siblings[e].length > 1 && Q(f, this, null, 1, this._siblings[e])) : (f = g[e--] = E.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = P(b, this, !1), 1 === i && this._siblings.length > 1 && Q(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
                }, !0),
                F = function (b) {
                    return b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                },
                G = function (a, b) {
                    var c, d = {};
                    for (c in a) L[c] || c in b && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!I[c] || I[c] && I[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                };
            e = E.prototype = new B, e.constructor = E, e.kill()._gc = !1, e.ratio = 0, e._firstPT = e._targets = e._overwrittenProps = e._startAt = null, e._notifyPluginsOfEnabled = !1, E.version = "1.11.4", E.defaultEase = e._ease = new t(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = f, E.autoSleep = !0, E.selector = a.$ || a.jQuery || function (b) {
                return a.$ ? (E.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
            };
            var H = E._internals = {
                    isArray: m,
                    isSelector: F
                },
                I = E._plugins = {},
                J = E._tweenLookup = {},
                K = 0,
                L = H.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                M = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                N = B._rootFramesTimeline = new D,
                O = B._rootTimeline = new D;
            O._startTime = f.time, N._startTime = f.frame, O._active = N._active = !0, B._updateRoot = function () {
                if (O.render((f.time - O._startTime) * O._timeScale, !1, !1), N.render((f.frame - N._startTime) * N._timeScale, !1, !1), !(f.frame % 120)) {
                    var a, b, c;
                    for (c in J) {
                        for (b = J[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete J[c]
                    }
                    if (c = O._first, (!c || c._paused) && E.autoSleep && !N._first && 1 === f._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || f.sleep()
                    }
                }
            }, f.addEventListener("tick", B._updateRoot);
            var P = function (a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (J[f || (a._gsTweenID = f = "t" + K++)] || (J[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = J[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return J[f].tweens
                },
                Q = function (a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var k, l = b._startTime + j,
                        m = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (k = k || R(b, 0, o), 0 === R(h, k, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                    for (f = n; --f > -1;) h = m[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
                    return g
                },
                R = function (a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * j > f - b ? j : (f += a.totalDuration() / a._timeScale / e) > b + j ? 0 : f - b - j
                };
            e._init = function () {
                var a, b, c, d, e = this.vars,
                    f = this._overwrittenProps,
                    g = this._duration,
                    h = e.immediateRender,
                    i = e.ease;
                if (e.startAt) {
                    if (this._startAt && this._startAt.render(-1, !0), e.startAt.overwrite = 0, e.startAt.immediateRender = !0, this._startAt = E.to(this.target, 0, e.startAt), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== g) return
                } else if (e.runBackwards && 0 !== g)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                    else {
                        c = {};
                        for (d in e) L[d] && "autoCSS" !== d || (c[d] = e[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", this._startAt = E.to(this.target, 0, c), e.immediateRender) {
                            if (0 === this._time) return
                        } else this._startAt.render(-1, !0)
                    }
                if (this._ease = i ? i instanceof t ? e.easeParams instanceof Array ? i.config.apply(i, e.easeParams) : i : "function" == typeof i ? new t(i, e.easeParams) : u[i] || E.defaultEase : E.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], f ? f[a] : null) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, f);
                if (b && E._onPluginEvent("_onInitAllProps", this), f && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), e.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = e.onUpdate, this._initted = !0
            }, e._initProps = function (b, c, d, e) {
                var f, g, h, i, j, k;
                if (null == b) return !1;
                this.vars.css || b.style && b !== a && b.nodeType && I.css && this.vars.autoCSS !== !1 && G(this.vars, b);
                for (f in this.vars) {
                    if (k = this.vars[f], L[f]) k && (k instanceof Array || k.push && m(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                    else if (I[f] && (i = new I[f])._onInitTween(b, this.vars[f], this)) {
                        for (this._firstPT = j = {
                                _next: this._firstPT,
                                t: i,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: f,
                                pg: !0,
                                pr: i._priority
                            }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                        (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = c[f] = j = {
                        _next: this._firstPT,
                        t: b,
                        p: f,
                        f: "function" == typeof b[f],
                        n: f,
                        pg: !1,
                        pr: 0
                    }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                    j && j._next && (j._next._prev = j)
                }
                return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && Q(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : h
            }, e.render = function (a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration;
                if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (g = this._rawPrevTime, (0 === a || 0 > g || g === j) && g !== a && (c = !0, g > j && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || 0 === g ? a : j);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && this._rawPrevTime > j) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === i && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = g = !b || a || 0 === this._rawPrevTime ? a : j)) : this._initted || (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var k = a / i,
                        l = this._easeType,
                        m = this._easePower;
                    (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), this.ratio = 1 === l ? 1 - k : 2 === l ? k : .5 > a / i ? k / 2 : 1 - k / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || s), 0 === i && this._rawPrevTime === j && g !== j && (this._rawPrevTime = 0)))
                }
            }, e._kill = function (a, b) {
                if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : E.selector(b) || b;
                var c, d, e, f, g, h, i, j;
                if ((m(b) || F(b)) && "number" != typeof b[0])
                    for (c = b.length; --c > -1;) this._kill(a, b[c]) && (h = !0);
                else {
                    if (this._targets) {
                        for (c = this._targets.length; --c > -1;)
                            if (b === this._targets[c]) {
                                g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target) return !1;
                        g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (g) {
                        i = a || g, j = a !== d && "all" !== d && a !== g && ("object" != typeof a || !a._tempKill);
                        for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, e.invalidate = function () {
                return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, e._enabled = function (a, b) {
                if (g || f.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = P(d[c], this, !0);
                    else this._siblings = P(this.target, this, !0)
                }
                return B.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
            }, E.to = function (a, b, c) {
                return new E(a, b, c)
            }, E.from = function (a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new E(a, b, c)
            }, E.fromTo = function (a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new E(a, b, d)
            }, E.delayedCall = function (a, b, c, d, e) {
                return new E(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    onCompleteScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    onReverseCompleteScope: d,
                    immediateRender: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, E.set = function (a, b) {
                return new E(a, 0, b)
            }, E.getTweensOf = function (a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : E.selector(a) || a;
                var c, d, e, f;
                if ((m(a) || F(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(E.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else
                    for (d = P(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d
            }, E.killTweensOf = E.killDelayedCallsTo = function (a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = E.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var S = q("plugins.TweenPlugin", function (a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = S.prototype
            }, !0);
            if (e = S.prototype, S.version = "1.10.1", S.API = 2, e._firstPT = null, e._addTween = function (a, b, c, d, e, f) {
                    var g, h;
                    return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                        _next: this._firstPT,
                        t: a,
                        p: b,
                        s: c,
                        c: g,
                        f: "function" == typeof a[b],
                        n: e || b,
                        r: f
                    }, h._next && (h._next._prev = h), h) : void 0
                }, e.setRatio = function (a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = 0 | b + (b > 0 ? .5 : -.5) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
                }, e._kill = function (a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, e._roundProps = function (a, b) {
                    for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
                }, E._onPluginEvent = function (a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, S.activate = function (a) {
                    for (var b = a.length; --b > -1;) a[b].API === S.API && (I[(new a[b])._propName] = a[b]);
                    return !0
                }, p.plugin = function (a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        g = q("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                            S.call(this, c, d), this._overwriteProps = e || []
                        }, a.global === !0),
                        h = g.prototype = new S(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, S.activate([g]), g
                }, c = a._gsQueue) {
                for (d = 0; c.length > d; d++) c[d]();
                for (e in n) n[e].func || a.console.log("GSAP encountered missing dependency: com.greensock." + e)
            }
            g = !1
        }
    }(window);
var Demo = Demo || function () {
    this.currentScenes = [], this.defaultBackground = 3813442
};
Demo.prototype.start = function () {
        var a = this;
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasEl,
            antialias: !0
        }), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.autoClear = !1, this.starttime = (new Date).getTime(), this.clock = new THREE.Clock, window.addEventListener("resize", function () {
            a.renderer.setSize(window.innerWidth, window.innerHeight)
        }), this.animate()
    }, Demo.prototype.startMusic = function () {
        a.getAsset("audio").play()
    }, Demo.prototype.startScene = function (a, b) {
        console.log("start scene", a.id), this.currentScenes.unshift(a), a.start.apply(a, b)
    }, Demo.prototype.endScene = function (a) {
        console.log("end scene", a.id), this.currentScenes = this.currentScenes.filter(function (b) {
            return b !== a
        })
    },
    Demo.prototype.animate = function () {
        var a = (new Date).getTime() - this.starttime;
        if (this.currentScenes.length > 0) {
            var b, c;
            this.renderer.setClearColor("function" == typeof this.currentScenes[0].getBackgroundColor ? new THREE.Color(this.currentScenes[0].getBackgroundColor()) || this.defaultBackground : this.defaultBackground), this.renderer.clear();
            for (c in this.currentScenes) b = this.currentScenes[c], b.animate(a), this.renderer.render(b.getScene(), b.getCamera())
        } else this.renderer.setClearColor(this.defaultBackground), this.renderer.clear();
        var d = this;
        requestAnimationFrame(function () {
            d.animate()
        })
    };
var Assets = Assets || function () {
    var a = this;
    this.assets = {
        mask: new THREE.ImageUtils.loadTexture("jmldstrmask.png"),
        intro1: new THREE.ImageUtils.loadTexture("jmldstrintro1.png"),
        intro2: new THREE.ImageUtils.loadTexture("jmldstrintro2.png"),
        intro3: new THREE.ImageUtils.loadTexture("jmldstrintro3.png"),
        end: new THREE.ImageUtils.loadTexture("jmldstrend.png"),
        credits: new THREE.ImageUtils.loadTexture("jmldstrcredits.png"),
        particle: new THREE.ImageUtils.loadTexture("jmldstrbomb.png"),
        robot11: new THREE.ImageUtils.loadTexture("jmldstrrobot11.png"),
        robot12: new THREE.ImageUtils.loadTexture("jmldstrrobot12.png"),
        robot21: new THREE.ImageUtils.loadTexture("jmldstrrobot21.png"),
        robot22: new THREE.ImageUtils.loadTexture("jmldstrrobot22.png"),
        robot23: new THREE.ImageUtils.loadTexture("jmldstrrobot23.png"),
        middlerobo: new THREE.ImageUtils.loadTexture("jmldstrmiddlerobo.png"),
        middlerobo2: new THREE.ImageUtils.loadTexture("jmldstrmiddlerobo2.png"),
        greets: new THREE.ImageUtils.loadTexture("jmldstrgreets.png"),
        audio: new Audio("jmldstrrobotelectric.mp3")
    };
    var b = new THREE.ColladaLoader;
    b.load("jmldstrrobot_merged.dae", function (b) {
        console.log("collada", b), a.assets.robotModel = b
    })
};
Assets.prototype.getAsset = function (a) {
    return this.assets[a]
};
var Overlays = function (a) {
    this.container = a, this.container.style.backgroundRepeat = "no-repeat"
};
Overlays.prototype.setImage = function (a, b, c) {
    return this.container.style.backgroundImage = "url(" + a + ")", this.container.style.backgroundSize = b || "contain", this.container.style.backgroundPosition = c || "center center", this
}, Overlays.prototype.removeImage = function () {
    this.container.style.backgroundImage = "", this.container.style.backgroundSize = "", this.container.style.backgroundPosition = ""
};
var CubeCube = function () {
    this.id = "cubecube", console.log("init " + this.id);
    var a, b, c, d, e = 500,
        f = 300,
        g = new THREE.BoxGeometry(f, f, f),
        h = new THREE.MeshLambertMaterial({
            color: 14398501,
            shading: THREE.FlatShading
        });
    for (this.backgroundColor = 3813442, this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1e4), this.camera.position.x = 0, this.camera.position.z = 2e3, this.camera.position.y = 400, this.camera.lookAt(new THREE.Vector3(0, 0, 0)), this.scene = new THREE.Scene, this.group = new THREE.Object3D, a = -1; 2 > a; a++)
        for (b = -1; 2 > b; b++)
            for (c = -1; 2 > c; c++) d = new THREE.Mesh(g, h), d.position.x = a * e, d.position.y = b * e, d.position.z = c * e, d.tweens = {}, this.group.add(d);
    this.scene.add(this.group), this.fog = new THREE.Fog(this.backgroundColor, 1e3, 3e3), this.scene.fog = this.fog, this.light = new THREE.PointLight(16777215, 1), this.light.position.set(0, 5e3, 3e3), this.scene.add(this.light)
};
CubeCube.prototype.getBackgroundColor = function () {
    return this.backgroundColor
}, CubeCube.prototype.getScene = function () {
    return this.scene
}, CubeCube.prototype.getCamera = function () {
    return this.camera
}, CubeCube.prototype.start = function () {
    var a, b = this;
    this.camera.position.z = 2e3, this.camera.position.x = -800, a = TweenMax.to(this.group.rotation, 32 * beatS, {
        x: 20,
        y: 20,
        ease: Linear.easeOut,
        overwrite: "none"
    }), setTimeout(function () {
        b.camera.position.x = 800
    }, 16 * beat);
    var c = function () {
        var a = .5 * beatS;
        TweenMax.to(b.group.position, a, {
            z: 500,
            ease: Cubic.easeIn,
            overwrite: "none"
        }), TweenMax.to(b.group.position, 2 * a, {
            z: 0,
            ease: Cubic.easeOut,
            overwrite: "none",
            delay: a
        })
    };
    this.pulseInterval = setInterval(c, 8 * beat - .05 * beat), c()
}, CubeCube.prototype.stop = function () {
    clearInterval(this.pulseInterval)
}, CubeCube.prototype.animate = function () {};
var CubeSea = function () {
    this.id = "cubecube", console.log("init " + this.id);
    var a, b, c, d = 35,
        e = 50,
        f = new THREE.BoxGeometry(e, e, e),
        g = new THREE.MeshPhongMaterial({
            color: 13413981
        }),
        h = new THREE.SubdivisionModifier(1.5);
    for (this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 5e4), this.camera.position.x = -300, this.camera.position.y = 200, this.camera.position.z = 1e3, this.camera.lookAt(new THREE.Vector3(300, -1e3, 0)), this.scene = new THREE.Scene, h.modify(f), this.group = new THREE.Object3D, a = -10; 80 > a; a++)
        for (b = 0; 80 > b; b++) c = new THREE.Mesh(f, g), c.position.x = a * d, c.position.z = b * d, c.tweens = {}, this.group.add(c);
    this.scene.add(this.group), this.light = new THREE.PointLight(16777215, 1), this.light.position.set(0, 5e3, 3e3), this.scene.add(this.light)
};
CubeSea.prototype.getScene = function () {
    return this.scene
}, CubeSea.prototype.getCamera = function () {
    return this.camera
}, CubeSea.prototype.start = function () {
    this.camera.position.z = 2e3, this.camera.position.x = 0
}, CubeSea.prototype.stop = function () {}, CubeSea.prototype.animate = function (a) {
    var b, c, d, e;
    for (this.startTime || (this.startTime = a), e = a - this.startTime, b = 0, c = this.group.children.length; c > b; b++) d = this.group.children[b], d.rotation.x = Math.sin(e / 1e3 + d.position.x), d.rotation.y = Math.cos(e / 1e3 + d.position.y)
};
var ParticleSlinger = function () {
    this.id = "particleslinger", console.log("init " + this.id), this.material = new THREE.SpriteMaterial({
        map: a.getAsset("particle"),
        color: 10367598,
        fog: !0,
        size: 1e3,
        blending: THREE.AdditiveBlending
    }), this.material2 = new THREE.SpriteMaterial({
        map: a.getAsset("particle"),
        color: 13407056,
        fog: !0,
        size: 1e3,
        blending: THREE.AdditiveBlending
    }), this.backgroundColor = 3813442, this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1e4), this.camera.position.x = 0, this.camera.position.z = 2e3, this.camera.position.y = 400, this.camera.lookAt(new THREE.Vector3(0, 0, 0)), this.scene = new THREE.Scene, this.particles = new THREE.Object3D, this.scene.add(this.particles)
};
ParticleSlinger.prototype.getBackgroundColor = function () {
    return this.backgroundColor
}, ParticleSlinger.prototype.getScene = function () {
    return this.scene
}, ParticleSlinger.prototype.getCamera = function () {
    return this.camera
}, ParticleSlinger.prototype.start = function () {
    var a = this;
    setTimeout(function () {
        a.stop = !0
    }, 23 * beat)
}, ParticleSlinger.prototype.stop = function () {}, ParticleSlinger.prototype.animate = function (a) {
    var b, c, d, e, f = 9,
        g = 50,
        h = 40;
    this.startTime || (this.startTime = a);
    var i = a - this.startTime;
    for (c = i / g, this.particles.children.length < c && this.stop !== !0 && (b = new THREE.Sprite(this.particles.children.length % 2 ? this.material : this.material2), b.scale.x = b.scale.y = 64, b.angle = h / 2 - this.particles.children.length % h, b.speed = f, this.particles.add(b)), d = 0, e = this.particles.children.length; e > d; d++) b = this.particles.children[d], b.age++, b.scale.x += 4, b.scale.y += 4, b.speed -= 2e-4, b.speed < 0 ? b.speed = 0 : b.position.set(b.position.x + Math.cos(b.angle) * b.speed, b.position.y + Math.sin(b.angle) * b.speed, 0);
    this.material.rotation += .05, this.material2.rotation += .05
};
var HexaTunnel = function () {
    this.id = "hexatunnel", console.log("init " + this.id);
    var a, b, c = 500,
        d = 2;
    for (this.backgroundColor = 3813442, this.spinSpeed = 1, this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2e4), this.scene = new THREE.Scene, this.tunnel = new THREE.Object3D, this.scene.add(this.tunnel), a = 0; 1e3 > a; a++) b = HexaTunnel.createHexagon(c), b.position.z = 800 * c + (c + d) * -a, this.tunnel.add(b);
    this.fog = new THREE.Fog(this.backgroundColor, 5e3, 2e4), this.scene.fog = this.fog, this.light = new THREE.PointLight(14599218, .8), this.light.position.set(0, 0, -1e3), this.scene.add(this.light), this.light2 = new THREE.PointLight(14599218, 1), this.light2.position.set(0, 0, -5500), this.scene.add(this.light2), this.light2 = new THREE.PointLight(14599218, .8), this.light2.position.set(0, 0, -11e3), this.scene.add(this.light2), this.light2 = new THREE.PointLight(14599218, .6), this.light2.position.set(0, 0, -15500), this.scene.add(this.light2), this.light2 = new THREE.PointLight(14599218, .3), this.light2.position.set(0, 0, -19500), this.scene.add(this.light2), this.light3 = new THREE.PointLight(10367598, 4), this.light3.position.set(0, 0, -3500), this.scene.add(this.light3), this.redLight = new THREE.PointLight(16711680, 0), this.redLight.position.y = 50, this.redLight.position.x = 0, this.redLight.position.z = -100, this.scene.add(this.redLight)
};
HexaTunnel.prototype.getBackgroundColor = function () {
    return this.backgroundColor
}, HexaTunnel.prototype.getScene = function () {
    return this.scene
}, HexaTunnel.prototype.getCamera = function () {
    return this.camera
}, HexaTunnel.prototype.start = function () {
    var a = this;
    this.camera.position.x = 0, this.camera.position.z = 100, this.camera.position.y = 0, this.camera.lookAt(new THREE.Vector3(-30, 20, 0)), this.spinSpeed = 1, setTimeout(function () {
        a.camera.lookAt(new THREE.Vector3(30, 20, 0))
    }, 16 * beat);
    var b = function () {
            a.redLight.intensity = 0 != a.redLight.intensity ? 0 : 4
        },
        c = function () {
            a.spinSpeed = 0, TweenMax.to(a, 4 * beatS, {
                spinSpeed: 1,
                ease: Cubic.easeOut,
                overwrite: "none"
            })
        };
    a.spinterval = setInterval(c, 8 * beat), setTimeout(function () {
        a.blinkterval = setInterval(b, 2 * beat), b()
    }, beat), c()
}, HexaTunnel.prototype.stop = function () {
    clearInterval(this.spinterval), clearInterval(this.blinkterval)
}, HexaTunnel.prototype.animate = function (a) {
    var b, c, d, e;
    for (this.startTime || (this.startTime = a), e = a - this.startTime, c = 0, d = this.tunnel.children.length; d > c; c++) {
        b = this.tunnel.children[c];
        var f = 2 * Math.PI;
        b.rotation.z = f * ((e + 2e3) / 4e3) * (b.offset + this.spinSpeed / 10)
    }
    this.tunnel.position.z -= 15
}, HexaTunnel.createHexagon = function (a) {
    var b, c = new THREE.Object3D,
        d = new THREE.Object3D;
    this.plane = new THREE.PlaneBufferGeometry(1.23 * a, a, 1, 1), this.material = new THREE.MeshLambertMaterial({
        color: 13407056,
        shading: THREE.SmoothShading
    });
    var e = .285;
    b = new THREE.Mesh(this.plane, this.material), b.position.x = -a, b.position.y = -a / 2, b.position.z = -a / 2, b.rotation.y = Math.PI * e, c.add(b), b = new THREE.Mesh(this.plane, this.material), b.position.x = 0, b.position.y = -a / 2, b.position.z = -a, c.add(b), b = new THREE.Mesh(this.plane, this.material), b.position.x = a, b.position.y = -a / 2, b.position.z = -a / 2, b.rotation.y = -Math.PI * e, c.add(b);
    var b = new THREE.Mesh(this.plane, this.material);
    return b.position.x = -a, b.position.y = -a / 2, b.position.z = a / 2, b.rotation.y = Math.PI * (1 - e), c.add(b), b = new THREE.Mesh(this.plane, this.material), b.position.x = 0, b.position.y = -a / 2, b.position.z = a, b.rotation.y = -Math.PI, c.add(b), b = new THREE.Mesh(this.plane, this.material), b.position.x = a, b.position.y = -a / 2, b.position.z = a / 2, b.rotation.y = -Math.PI * (1 - e), c.add(b), c.rotation.x = .5 * -Math.PI, d.add(c), d.offset = .5 * Math.random(), d
};
var Robot = function () {
    this.id = "Robot", this.backgroundColor = 3813442, this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2e4), this.scene = new THREE.Scene
};
Robot.prototype.getBackgroundColor = function () {
    return this.backgroundColor
}, Robot.prototype.getScene = function () {
    return this.scene
}, Robot.prototype.getCamera = function () {
    return this.camera
}, Robot.prototype.start = function () {
    var b = this;
    this.clock = new THREE.Clock, this.camera.position.x = 0, this.camera.position.z = 100, this.camera.position.y = 0, this.camera.lookAt(new THREE.Vector3(-30, 20, 0)), setTimeout(function () {
        b.camera.lookAt(new THREE.Vector3(30, 20, 0))
    }, 16 * beat), this.robotCollada = a.getAsset("robotModel"), this.robotAnimations = this.robotCollada.animations, this.kfAnimations = [], this.kfAnimationsLength = this.robotAnimations.length, this.robotScene = this.robotCollada.scene, this.scene.add(this.robotScene), this.robotScene.position.y = 50, this.robotScene.position.x = 0, this.robotScene.position.z = -100, this.robotScene.rotation.x = -.6, this.robotScene.rotation.z = -.2, this.robotScene.scale.x = this.robotScene.scale.y = this.robotScene.scale.z = 15, this.robotScene.updateMatrix();
    for (var c = 0; c < this.kfAnimationsLength; ++c) {
        var d = this.robotAnimations[c],
            e = new THREE.KeyFrameAnimation(d);
        e.timeScale = .906, this.kfAnimations.push(e);
        for (var f = 0, g = e.hierarchy.length; g > f; f++) {
            var h = e.data.hierarchy[f].keys,
                i = e.data.hierarchy[f].sids,
                j = e.hierarchy[f];
            if (h.length && i) {
                for (var k = 0; k < i.length; k++) {
                    var l = i[k],
                        m = e.getNextKeyWith(l, f, 0);
                    m && m.apply(l)
                }
                j.matrixAutoUpdate = !1, e.data.hierarchy[f].node.updateMatrix(), j.matrixWorldNeedsUpdate = !0
            }
        }
        e.loop = !0, e.play()
    }
    setTimeout(function () {
        b.robotScene.rotation.z = .2
    }, 16 * beat), this.robotLight = new THREE.PointLight(15719536, .7), this.robotLight.position.y = -50, this.robotLight.position.x = 60, this.robotLight.position.z = -50, this.scene.add(this.robotLight), this.robotLight2 = new THREE.PointLight(15719536, .7), this.robotLight2.position.y = -40, this.robotLight2.position.x = -60, this.robotLight2.position.z = -50, this.scene.add(this.robotLight2), this.robotLight3 = new THREE.PointLight(15719536, .7), this.robotLight3.position.y = 110, this.robotLight3.position.x = 0, this.robotLight3.position.z = -50, this.scene.add(this.robotLight3)
}, Robot.prototype.stop = function () {}, Robot.prototype.animate = function () {
    for (var a = this.clock.getDelta(), b = 0; b < this.kfAnimationsLength; ++b) this.kfAnimations[b].update(a)
};
var fullscreen = !1,
    tempo = 130,
    beatS = 60 / tempo,
    beat = 1e3 * beatS,
    offset = 0,
    a = new Assets,
    d = new Demo,
    cubecube = new CubeCube,
    particleSlinger = new ParticleSlinger,
    hexaTunnel = new HexaTunnel,
    robot = new Robot,
    loadingText = document.getElementById("loading"),
    startBtn = document.getElementById("start"),
    demoEl = document.getElementById("demo"),
    canvasEl = document.getElementById("canvas"),
    maskEl = document.getElementById("mask"),
    overlayEl = document.getElementById("overlay"),
    overlay = new Overlays(overlayEl);
// a.getAsset("audio").addEventListener("canplaythrough", function () {
    loadingText.style.display = "none", startBtn.style.display = "inline"
// }), 
a.getAsset("audio").load();
startBtn.addEventListener("click", function () {
    var a = document.getElementById("container");
    a.parentNode.removeChild(a), demoEl.requestFullscreen ? demoEl.requestFullscreen() : canvasEl.msRequestFullscreen ? demoEl.msRequestFullscreen() : canvasEl.mozRequestFullScreen ? demoEl.mozRequestFullScreen() : canvasEl.webkitRequestFullscreen ? demoEl.webkitRequestFullscreen() : enterFullScreen(), document.addEventListener("mozfullscreenchange", enterFullScreen), document.addEventListener("webkitfullscreenchange", enterFullScreen), document.addEventListener("MSFullscreenChange", enterFullScreen), document.addEventListener("fullscreenchange", enterFullScreen)
});