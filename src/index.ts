// Import stylesheets
// import './style.css';
// import GitHub from 'github-api';

import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';
//import 'monaco-editor';

(window as any).MonacoEnvironment = {
  getWorkerUrl: function(moduleId: string, label: string) {
    if (label === 'json') {
      return './json.worker.js';
    }
    if (label === 'css') {
      return './css.worker.js';
    }
    if (label === 'html') {
      return './html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './typescript.worker.js';
    }
    return './editor.worker.js';
  }
};

// import * as monaco from 'monaco-editor';

let code = `/**
 *  Press "Esc" to save, compile and run your program
 */

#ifdef GL_ES
precision mediump float;
#endif
// uniform vec2 u_mouse;   
uniform vec2 u_resolution; 
uniform float u_time;

vec4 render(vec4 coord) {
  vec2 c = coord.xy / u_resolution * 2.0 - 1.0; // [-1, 1]^2
  c.x *= u_resolution.x / u_resolution.y;

  float d = length(c);
  float g = smoothstep(0.51, 0.50, d + 0.1*sin(2.*u_time));
  return vec4(1.0, 1.0, 0.0, 1.0) *g  + (1. - g) *vec4(1.0);
}

void main(){
  gl_FragColor = render(gl_FragCoord);
}
`;

import { setCookie, getCookie } from './cookie';

const co: string = getCookie('code');
if (co.length > 0) {
  code = co;
} else {
  setCookie('code', code, 365);
}

const editor = monaco.editor.create(document.getElementById('myeditor'), {
  value: code,
  automaticLayout: true,
  language: 'cpp'
});

/*
    "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
    "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
    "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
    "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
    "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',


(window as any).MonacoEnvironment = {
        getWorkerUrl: function (moduleId: string, label: string) {
            if (label === 'json') {
                return '../node_modules/monaco-editor/esm/vs/language/json/json.worker.js';
            }
            if (label === 'css') {
                return '../node_modules/monaco-editor/esm/vs/language/css/css.worker.js';
            }
            if (label === 'html') {
                return './html.worker.js';
            }
            if (label === 'typescript' || label === 'javascript') {
                return '../node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js';
            }
            return '../node_modules/monaco-editor/esm/vs/editor/editor.worker.js';
        }
    };
*/

import * as glslCanvas from 'glslCanvas';

const canvas = document.querySelector('#glCanvas') as HTMLCanvasElement;
const sandbox = new glslCanvas.default(canvas);

sandbox.trigger = function(error: string, info) {
  if (error === 'error') {
    if (info.type === 35632) {
      const errs: string[] = info.error.split('\n');
      errs.pop();
      console.log(info.error, errs);
      const markets = errs.map(err => {
        const re = new RegExp('[^0-9]+ ([0-9]+):([0-9]+):');
        const rl = err.match(re);

        const pos = parseInt(rl[1]);
        const lin = parseInt(rl[2]);
        return {
          startLineNumber: lin,
          startColumn: pos,
          endLineNumber: lin,
          endColumn: 1000,
          message: err,
          severity: monaco.MarkerSeverity.Error
        };
      });

      monaco.editor.setModelMarkers(editor.getModel(), 'shader', markets);
    }
  }
};

const ctxKey = editor.createContextKey('condition', false);
ctxKey.set(true);
function loadCode(code: string) {
  setCookie('code', code, 365);

  sandbox.width = canvas.width;
  sandbox.height = canvas.height;

  monaco.editor.setModelMarkers(editor.getModel(), 'shader', []);

  try {
    sandbox.load(code);
  } catch (e) {
    console.log(e);
  }
}

editor.addCommand(
  monaco.KeyCode.Escape,
  () => {
    const code = editor.getValue();

    loadCode(code);

    return true;
  },
  'condition'
);

const times = [];
let fps;

function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    refreshLoop();
  });
}

refreshLoop();
const fpshtml = document.getElementById('fps');

setInterval(function() {
  fpshtml.innerHTML = `${fps} fps`;
}, 1000);

setTimeout(() => {
  const code = editor.getValue();

  loadCode(code);
}, 0);
