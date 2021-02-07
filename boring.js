const autogen = true; // Set this to false to prevent
                      // auto-refresh

const refresh = async (filename, ts) => {
    let text = await Deno.readTextFile(filename);
    let now = Date.now();
    let lines = text.split('\n');
    for (const line of lines) {
	if (line.includes('goog.')
	    || line.includes('cljs.')
	    || line.includes('clojure.')) {
	    continue;
	}

	text = text.replace(line, line.replace(`.js";`, `.js#${now}";`));
    }
    await Deno.writeTextFile(filename, text);
};

const cljsImport = async (fn) => {
    const fileInfo = await Deno.lstat(fn);
    const time = fileInfo.mtime;
    if (autogen) {
	await refresh(fn, time);
    }

    const filename = `${fn}#${time}`;
    let result = await import(filename);
    // A little bit of a hack.
    let oldProvide = goog.provide;
    goog.provide = (...args) => {
	try {
	    oldProvide(...args);
	    goog.provide = oldProvide;
	} catch (e) {
	    // Drop it on purpose...
	}
    };

    return result;
}

let path =  lisp.buffer_file_name().split('/');
path.pop();
const base = `${path.join('/')}/target`;
const fn = `${base}/baz.js`;
const { cljsprint, addl, addx } = await cljsImport(fn);
cljsprint("wow, what a boring minimal example how dare you");
lisp.print(addx(5, 20))


