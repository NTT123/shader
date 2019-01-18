// Import stylesheets
import './style.css';
// import GitHub from 'github-api';

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';
//import * as monaco from 'monaco-editor';


(window as any).MonacoEnvironment = {
  getWorkerUrl: function(moduleId: string, label: string) {
    return './editor.worker.js';
  }
};



import { frag } from './example';

let code = frag;

import { setCookie, getCookie } from './cookie';

const co: string = getCookie("code");
if (co.length > 0) {
  code = co;
} else {
  setCookie("code", code, 365);
}


const urlCode = window.atob(window.location.hash.substr(1));

if (urlCode.length > 0) {
  code = urlCode;
}


/*
(window as any).MonacoEnvironment = {

      getWorkerUrl: function(workerId, label) {
      return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://shader.stackblitz.io/node_modules/monaco-editor/esm'
        };
        importScripts('https://shader.stackblitz.io/node_modules/monaco-editor/esm/vs/editor/editor.worker.js');`
      )}`;
    }

};
*/

/*
        getWorkerUrl: function (moduleId: string, label: string) {
            return 'https://shader.stackblitz.io/node_modules/monaco-editor/esm/vs/editor/editor.worker.js';
        }
    };
*/

import * as shaderLanguage from './cshader';
monaco.languages.register({ id: 'cshader' });
monaco.languages.setLanguageConfiguration('cshader', shaderLanguage.conf);
monaco.languages.setMonarchTokensProvider('cshader', shaderLanguage.language);



const editor = monaco.editor.create(document.getElementById('myeditor'), {
  value: code,
  minimap: {
    enabled: false
  },
  fontSize: "12px",
  wordWrap: "on",
  automaticLayout: true,
  language: 'cshader'
});



/*
    "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
    "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
    "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
    "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
    "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
*/



import * as glslCanvas from 'glslCanvas';

const canvas = document.querySelector("#glCanvas") as HTMLCanvasElement;
const sandbox = new glslCanvas.default(canvas);


let time = performance.now(); //number[] = [];
let fps;

sandbox.trigger = function (msg: string, info) {
  if (msg === "render") {
    const now = performance.now();
    fps = 1000.0 / (now - time);
    time = now;
  }

  if (msg === "error") {
    if (info.type === 35632) {
      const errs: string[] = info.error.split("\n");
      errs.pop();
      console.log(info.error, errs);
      const markets = errs.map((err) => {
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
        }
      });

      monaco.editor.setModelMarkers(editor.getModel(), 'shader', markets)
    }
  }
}

const ctxKey = editor.createContextKey('condition', false)
ctxKey.set(true)
function loadCode(code: string) {

  setCookie("code", code, 365);

  sandbox.width = canvas.width;
  sandbox.height = canvas.height;

  monaco.editor.setModelMarkers(editor.getModel(), 'shader', []);


  try {
    sandbox.load(code);
    sandbox.setUniform("u_time", 0.0);
  }
  catch (e) {
    console.log(e);
  }
}

/*
editor.addCommand(
  monaco.KeyCode.Escape,
  () => {
    const code = editor.getValue();

    loadCode(code);

    return true;

  },
  'condition',
);
*/

editor.addAction({
  // An unique identifier of the contributed action.
  id: 'compile-and-run',

  // A label of the action that will be presented to the user.
  label: 'Compile and Run',

  // An optional array of keybindings for the action.
  keybindings: [
    monaco.KeyCode.Escape,
  ],

  // A precondition for this action.
  precondition: null,

  // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
  keybindingContext: null,

  contextMenuGroupId: 'navigation',

  contextMenuOrder: 1.5,

  // Method that will be executed when the action is triggered.
  // @param editor The editor instance is passed in as a convinience
  run: function (ed) {
    const code = editor.getValue();

    loadCode(code);
    return null;
  }
});

editor.addAction({
  id: 'export url',
  label: 'Get URL Source Code',
  precondition: null,
  keybindingContext: null,
  contextMenuGroupId: 'navigation',
  contextMenuOrder: 1.5,
  run: function (ed) {
    const code = document.URL.replace(/#.+/g, '') + "#" + window.btoa(editor.getValue());
    window.prompt("Please copy the folowing URL", code);
    return null;
  }
});





const fpshtml = document.getElementById("fps");

setInterval(function () {
  fpshtml.innerText = `${Math.round(fps * 10) / 10} fps`;
}, 1000);

setTimeout(() => {
  const code = editor.getValue();

  loadCode(code);
}, 0);

