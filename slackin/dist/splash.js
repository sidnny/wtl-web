'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splash;

var _vd = require('vd');

var _vd2 = _interopRequireDefault(_vd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splash(_ref) {
  var path = _ref.path,
      name = _ref.name,
      org = _ref.org,
      coc = _ref.coc,
      logo = _ref.logo,
      active = _ref.active,
      total = _ref.total,
      channels = _ref.channels,
      large = _ref.large,
      iframe = _ref.iframe,
      gcaptcha_sitekey = _ref.gcaptcha_sitekey;

  var div = (0, _vd2.default)('section.splash', (0, _vd2.default)('h1', 'Join us on Slack.'), !iframe && (0, _vd2.default)('.logos',
  // logo && dom('.logo.org'),
  (0, _vd2.default)('.logo.slack')), (0, _vd2.default)('p.status', active ? [(0, _vd2.default)('b.active', active), ' users online now of ', (0, _vd2.default)('b.total', total), ' registered.'] : [(0, _vd2.default)('b.total', total), ' users are registered so far.']), (0, _vd2.default)('form id=invite', channels && (channels.length > 1
  // channel selection when there are multiple
  ? (0, _vd2.default)('select.form-item name=channel', channels.map(function (channel) {
    return (0, _vd2.default)('option', { value: channel, text: channel });
  }))
  // otherwise a fixed channel
  : (0, _vd2.default)('input type=hidden name=channel', { value: channels[0] })), (0, _vd2.default)('input.form-item type=email name=email placeholder=you@yourdomain.com'), (0, _vd2.default)('br'), (0, _vd2.default)('div class="g-recaptcha" data-sitekey="' + gcaptcha_sitekey + '"'), coc && (0, _vd2.default)('.coc', (0, _vd2.default)('label', (0, _vd2.default)('input type=checkbox name=coc value=1'), 'I agree to the ', (0, _vd2.default)('a', { href: coc, target: '_blank' }, 'Code of Conduct'), '.')), (0, _vd2.default)('button.loading', 'Send Invitation')), (0, _vd2.default)('p.signin', 'or ', (0, _vd2.default)('a href=https://' + org + '.slack.com target=_top', 'sign in'), '.'),
  // !iframe && dom('footer',
  //   'powered by ',
  //   dom('a href=http://rauchg.com/slackin target=_blank', 'slackin')
  // ),
  style({ logo: logo, active: active, large: large, iframe: iframe }),
  // xxx: single build
  (0, _vd2.default)('script', '\n      data = {};\n      data.path = ' + JSON.stringify(path) + ';\n    '), (0, _vd2.default)('script src=https://cdn.socket.io/socket.io-1.4.4.js'), (0, _vd2.default)('script src=' + path + 'assets/superagent.js'), (0, _vd2.default)('script src=' + path + 'assets/client.js'));
  return div;
}

var pink = '#E01563';
var violet = '#3E0C64';
var lilac = '#D9D0DC';

function style() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      logo = _ref2.logo,
      active = _ref2.active,
      large = _ref2.large,
      iframe = _ref2.iframe;

  var css = _vd2.default.style();
  css.add('html', {
    'font': 'normal 400 18px/22px minerva-modern, sans-serif'
  });

  css.add('.splash', {
    'text-align': 'center'
  });

  css.add('h1', {
    'font': 'normal 300 20px/24px acme-gothic, sans-serif',
    'text-align': 'center',
    'padding': '60px 0 0',
    'margin': '0 auto',
    'max-width': '295px'
  });

  if (iframe) {
    css.add('body, html', {
      'margin': '0',
      'padding': '0',
      'background': '#FAFAFA',
      'overflow': 'hidden' // ff
    });

    css.add('.splash', {
      'box-sizing': 'border-box'
    });
  }

  css.add('.head', {
    'margin-bottom': '4rem'
  });

  css.add('.logos', {
    'position': 'relative',
    'margin': '0 auto 40px'
  });

  if (!iframe) {
    css.add('.logo', {
      'width': '4.8rem',
      'height': '4.8rem',
      'display': 'inline-block',
      'background-size': 'cover'
    });

    css.add('.logo.slack', {
      'background-image': 'url(assets/slack.svg)',
      'background-size': '200%',
      'background-position': 'center'
    });

    if (logo) {
      var pw = 1; // '+' width in rem
      var lp = 3; // logos separation in rem

      css.add('.logo.org::after', {
        'position': 'absolute',
        'display': 'block',
        'content': '"+"',
        'top': '1.5rem',
        'left': '0',
        'width': '100%',
        'text-align': 'center',
        'color': violet,
        'font-size': '1.5rem'
      });

      css.add('.logo.org', {
        'background-image': 'url(' + logo + ')',
        'margin-right': lp + pw + lp + 'rem'
      });
    }
  }

  css.add('.coc', {
    'font-family': 'acme-gothic',
    padding: '2rem 0'
  });

  if (iframe) {
    css.add('.coc', {
      'font-size': '1.1rem',
      'padding-top': '1rem'
    });

    css.add('.coc input', {
      position: 'relative',
      top: '-.2rem'
    });
  }

  css.add('.coc label', {
    cursor: 'pointer'
  });

  css.add('.coc input', {
    'appearance': 'none',
    '-webkit-appearance': 'none',
    border: 'none',
    'vertical-align': 'middle',
    margin: '0 .5rem 0 0'
  });

  css.add('.coc input::after', {
    content: '""',
    display: 'inline-block',
    width: '1.5rem',
    height: '1.5rem',
    'vertical-align': 'middle',
    background: 'url(assets/checkbox.svg)',
    cursor: 'pointer',
    'background-size': 'cover'
  });

  css.add('.coc input:checked::after', {
    'background-position': 'right'
  });

  css.add('.coc a', {
    color: violet
  });

  css.add('select', {
    'background': 'none'
  });

  css.add('.form-item', {
    'font-size': '1.2rem',
    'margin-top': iframe ? '.5rem' : '1rem',
    'vertical-align': 'middle',
    'display': 'block',
    'text-align': 'center',
    'box-sizing': 'border-box',
    'width': '100%',
    'padding': '.9rem'
  });

  css.add('button', {
    'cursor': 'pointer',
    'appearence': 'none',
    '-webkit-appearence': 'none',
    'outline': '0',
    'transition': 'background-color 150ms ease-in, color 150ms ease-in, border 150ms ease-in, color 150ms ease-in',
    'color': '#D9D0DC',
    'font': 'normal 500 24px/39px acme-gothic, sans-serif',
    'border-radius': '3px',
    'background': '#3e0c64',
    'border': '3px solid #2f084d',
    'box-shadow': '0px 5px 10px rgba(0, 0, 0, 0.73)',
    'display': 'block',
    'margin': '0 auto',
    'width': '260px',
    'text-align': 'center'
  });

  css.add('button:hover', {
    'color': '#fff',
    'background': '#663577',
    'border-color': '#663577'
  });

  css.add('button.loading', {
    'pointer-events': 'none'
  });

  css.add('button:disabled', {
    'color': '#9B9B9B',
    'background-color': '#12041d',
    'cursor': 'default',
    'pointer-events': 'none'
  });

  css.add('button.error', {
    'background-color': '#F4001E',
    'text-transform': 'none'
  });

  css.add('button.success:disabled', {
    'color': '#fff',
    'background-color': '#68C200'
  });

  css.add('button:not(.disabled):active', {
    'background-color': '#7A002F'
  });

  css.add('b', {
    'transition': 'transform 150ms ease-in'
  });

  css.add('b.grow', {
    'transform': 'scale(1.3)'
  });

  css.add('form', {
    'margin-top': iframe ? '1rem' : '2rem',
    'margin-bottom': '0'
  });

  css.add('input', {
    'color': violet,
    'border': '1px solid ' + lilac
  });

  css.add('input:focus', {
    'border-color': '#999',
    'outline': '0'
  });

  if (active) {
    css.add('.active', {
      'color': violet
    });
  }

  css.add('p.signin', {
    'padding': '1rem 0 1rem',
    'font-size': '1.1rem'
  });

  css.add('p.signin a', {
    'color': violet,
    'text-decoration': 'none'
  });

  css.add('p.signin a:hover', {
    'text-decoration': 'underline'
  });

  css.add('.g-recaptcha > div', {
    'margin': '0 auto'
  });

  return css;
}