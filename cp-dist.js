const fs = require('fs-extra');

(async() => {

    const src = './build';
    const copy = './dist/browser';

    await fs.remove(copy);
    await fs.copy(src, copy);
    await fs.remove(src);

})();