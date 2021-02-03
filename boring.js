

let timestamp = Date.now();

let path = "put result of M-x pwd here";

const { foo } = await import(`${path}/target/baz.js#${timestamp}`);

const buffer = lisp.get_buffer_create("*Org JSON Export*");

lisp.with_current_buffer(buffer, () => lisp.print(foo("wow, what a boring minimal example how dare you", lisp)));

