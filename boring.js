let path =  lisp.buffer_file_name().split('/');
path.pop();

const { cljsprint } = await import(`${path.join('/')}/target/baz.js#${Date.now()}`);
cljsprint("wow, what a boring minimal example how dare you");
