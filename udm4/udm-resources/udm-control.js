// UDMv4.6 //
///////////////////////////////////////////////////////////////////
//                                                               //
//  ULTIMATE DROP DOWN MENU Version 4.6 by UDM                   //
//  http://www.udm4.com/                                         //
//                                                               //
//  This script may not be used or distributed without license   //
//                                                               //
///////////////////////////////////////////////////////////////////
var umTree = null;
um.ready = 0;
um.pi = function (n) {
    n = parseInt(n, 10);
    return (isNaN(n) ? 0 : n);
};
um.un = 'undefined';
um.m = document;
um.gd = function (n) {
    return um.m.getElementById(n);
};
um.xd = function (n) {
    n.style.display = 'block';
};
um.xn = function (n) {
    n.style.display = 'none';
};
um.xv = function (n) {
    n.style.visibility = 'visible';
};
um.xh = function (n) {
    n.style.visibility = 'hidden';
};
um.ne = function (n) {
    return n.parentNode.className == 'udm';
};
if (typeof um.reset == um.un) {
    um.reset = ['yes', 'yes', 'yes'];
}
if (typeof um.hstrip == um.un) {
    um.hstrip = ['none', 'yes'];
}
if (typeof um.reset[3] == um.un) {
    um.reset[3] = 'no';
}
um.cx = ['orientation', 'list', 'behaviors', 'navbar', 'items', 'menus', 'menuItems', 'menuClasses', 'itemClasses'];
um.ei = 0;
um.e = [];
um.v = [];
um.w = [];
um.vl = 0;
um.wl = 0;
um.ek = 0;
um.im = [];
um.pcv = function (v) {
    if (v && /^[+\-]?[0-9]+$/.test(v)) {
        v = um.pi(v);
        if ((um.ei == 10 || um.ei == 11) && v < 1) {
            v = 1;
        }
    }
    if (v && /\.(gif|png|mng|jpg|jpeg|jpe|bmp)/i.test(v)) {
        um.im[um.ek] = new Image;
        um.im[um.ek++].src = um.baseSRC + v;
    }
    return v;
};
um.d = (typeof um.m.getElementById != um.un && (typeof um.m.createElement != um.un || typeof um.m.createElementNS != um.un) && typeof navigator.IBM_HPR == um.un);
um.u = navigator.userAgent.toLowerCase();
um.o5 = /opera[\/ ][56]/.test(um.u);
um.k = (navigator.vendor == 'KDE');
if (um.o5) {
    um.d = 0;
}
um.b = (um.d || um.o5);
um.o7 = (um.d && typeof window.opera != um.un);
um.o75 = 0;
um.o73 = 0;
um.o71 = 0;
um.o9 = 0;
if (um.o7) {
    um.ova = um.pi(um.u.split(/opera[\/ ]/)[1].match(/[17-9]/)[0]);
    um.ovi = um.pi(um.u.split(/opera[\/ ][17-9]\./)[1].match(/^[0-9]/)[0]);
    um.o9 = (um.ova >= 9 || um.ova == 1);
    um.o75 = (um.ova >= 8 || um.ovi >= 5);
    um.o73 = (um.ova >= 8 || um.ovi >= 3);
    um.o71 = (um.ova == 7 && um.ovi <= 1);
}
um.s = (navigator.vendor == 'Apple Computer, Inc.');
um.s2 = (um.s && typeof XMLHttpRequest != um.un);
um.s3 = (um.s && /applewebkit\/[5-9]/.test(um.u));
um.ggc = (navigator.vendor == 'Google Inc.');
um.k4 = (um.k && /khtml\/[4-9]/.test(um.u));
um.ie9 = /msie 9\.0/.test(um.u);

if (um.ggc || um.k4) {
    um.s = 1;
    um.s2 = 1;
    um.s3 = 1;
}
um.wie = (um.d && typeof um.m.all != um.un && typeof window.opera == um.un && !um.k);
um.mie = (um.wie && um.u.indexOf('mac') > 0);
um.mx = 0;
um.omie = 0;
if (um.mie) {
    um.wie = 0;
    um.iev = um.u;
    um.iev = um.iev.split('msie ');
    um.iev[1] = um.iev[1].split(';');
    um.iev = parseFloat(um.iev[1][0], 10);
    um.omie = (um.iev < 5.2);
}
um.ie = (um.wie || um.mie);
um.wie5 = (um.wie && um.u.indexOf('msie 5') > 0);
um.wie55 = (um.wie && um.u.indexOf('msie 5.5') > 0);
um.wie50 = (um.wie5 && !um.wie55);
um.wie6 = (um.wie && um.u.indexOf('msie 6') > 0);
if (um.wie6) {
    um.wie55 = 1;
}
um.wie7 = (um.wie && typeof XMLHttpRequest != um.un);
um.wie8 = (um.wie && um.u.indexOf('msie 8') > 0);
um.q = (um.wie5 || um.mie || ((um.wie6 || um.wie7 || um.o7) && um.m.compatMode != 'CSS1Compat'));
um.og = 0;
um.dg = 0;
if (navigator.product == 'Gecko' && !um.s) {
    um.sub = um.pi(navigator.productSub);
    um.og = (um.sub < 20030312);
    um.dg = (um.sub < 20030208);
}
if (um.b) {
    var i = 0;
    do {
        if (um.cx[i].indexOf('Classes') < 0) {
            um.cxl = um[um.cx[i]].length;
            var j = 0;
            do {
                if (typeof um[um.cx[i]][j] != um.un) {
                    um.pv = um.pcv(um[um.cx[i]][j]);
                    um.e[um.ei] = um.pv;
                    um.ei++;
                }
                j++;
            } while (j < um.cxl);
        } else {
            for (j in um[um.cx[i]]) {
                if (typeof um[um.cx[i]][j] != 'function') {
                    um.cxl = um[um.cx[i]][j].length;
                    var k = 0;
                    do {
                        if (typeof um[um.cx[i]][j][k] != um.un) {
                            um.pcv(um[um.cx[i]][j][k]);
                        }
                        k++;
                    } while (k < um.cxl);
                    if (um.cx[i] == 'menuClasses') {
                        um.v[j] = um[um.cx[i]][j];
                        um.vl++;
                    } else {
                        um.w[j] = um[um.cx[i]][j];
                        um.wl++;
                    }
                }
            }
        }
        i++;
    } while (i < 9);
    um.kb = (typeof um.keys != um.un && !(um.mie || um.o7 || (um.k && !um.k4) || (um.s && !um.s2)));
    um.skb = (um.kb || (typeof um.keys != um.un && ((um.o7 && !um.o71) || (um.k && !um.k4))));
    um.sp = (typeof um.speech != um.un && um.wie);
    if (typeof um.speech != um.un) {
        um.e[12] = 'no';
        um.e[0] = 'vertical';
    }
    um.rp = (um.e[3] == 'relative');
    if (um.wie50 && um.rp) {
        um.e[12] = 'no';
    }
    um.dir = 'left';
    if (um.e[1] == 'rtl') {
        um.dir = 'right';
        um.e[1] = 'right';
    }
    um.e[13] = (um.e[13] == 'yes') ? 'default' : (um.e[13] == 'no') ? 'iframe' : um.e[13];
    um.hz = (um.wie50 && um.e[13] == 'default') || (um.wie && um.e[13] == 'hide');
    um.h = um.e[0] == 'horizontal';
    i = 4;
    do {
        if (parseFloat(um.e[i], 10) < 0) {
            um.e[i] = '0';
        }
        i++
    } while (i < 6);
    if (um.h && um.dir == 'right') {
        um.e[4] = '-' + um.e[4];
    }
    um.p = um.e[0] == 'popup';
    if (um.p) {
        um.va = ['left', 'top', 'absolute', '-2000px', '-2000px'];
        i = 0;
        do {
            um.e[i + 1] = um.va[i];
            i++
        } while (i < 5);
        um.e[14] = 0;
        um.e[15] = 0;
    }
    um.ep = 0;
    if (um.e[0] == 'expanding') {
        um.ep = 1;
        um.e[0] = 'vertical';
    }
    um.a = (um.e[1] == 'right');
    um.rg = (um.h && um.e[7] == 'rigid' && um.dir != 'right');
    um.fe = false;
    if (um.e[3] == 'allfixed') {
        um.e[3] = 'fixed';
        if (um.wie5 || um.wie6) {
            um.fe = true;
        }
    }
    um.f = (um.e[3] == 'fixed' && !(um.wie5 || um.wie6 || um.og));
    um.nc = (um.e[17] == 0 && um.e[19] == 'collapse');
    um.mc = (um.e[61] == 0 && um.e[63] == 'collapse');
    um.nm = ((um.og && um.rp) || (um.omie && um.h) || ((um.dg || um.wie50) && um.dir == 'right'));
    um.nr = (um.nm || um.mie);
    um.ns = (um.dg || um.o71 || (um.wie50 && um.rp) || (um.o7 && um.f) || um.mie);
    um.cns = (typeof um.m.createElementNS != um.un);
    um.ss = (um.cns && typeof um.m.styleSheets != um.un && !(um.s || um.k));
    if (um.kb) {
        i = 0;
        do {
            um.keys[i] = um.pi(um.keys[i]);
            i++
        } while (i < 5);
        if (um.keys[6] != 'none') {
            um.keys[6] = um.pi(um.keys[6]);
        } else {
            um.keys[6] = -1;
        }
    }
    um.ni = /(gif|png|mng|jpg|jpeg|jpe|bmp)/i.test(um.e[45]);
    um.mi = /(gif|png|mng|jpg|jpeg|jpe|bmp)/i.test(um.e[89]);
}
um.rn = 0;
um.rv = [];
um.addReceiver = function (f, c) {
    um.rv[um.rn++] = [f, c];
};
um.gp = function (n) {
    return n ? um.vn(n.nodeName).toLowerCase() == 'li' ? n : this.gp(n.parentNode) : null;
};
um.createElement = function (n, a) {
    um.el = (um.cns) ? um.m.createElementNS('http://www.w3.org/1999/xhtml', n) : um.m.createElement(n);
    if (typeof a != um.un) {
        for (var i in a) {
            switch (i) {
                case 'text':
                    um.el.appendChild(um.m.createTextNode(a[i]));
                    break;
                case 'class':
                    um.el.className = a[i];
                    break;
                default:
                    um.el.setAttribute(i, '');
                    um.el[i] = a[i];
                    break;
            }
        }
    }
    return um.el;
};