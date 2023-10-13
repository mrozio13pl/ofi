import path from 'path';
import fastFolderSize from 'fast-folder-size';
import prettyBytes from 'pretty-bytes';

fastFolderSize(path.join(process.cwd(), 'dist'), (err, bytes) => {
    if (err) {
        console.error('Couldn\'t get size of `dist` folder.');
        return;
    }

    console.log('Dist size:', prettyBytes(bytes));
});