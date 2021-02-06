let path =  lisp.buffer_file_name().split('/');
path.pop();

const { foo } = await import(`${path.join('/')}/target/baz.js#${Date.now()}`);
foo("wow, what a boring minimal example how dare you", lisp);

