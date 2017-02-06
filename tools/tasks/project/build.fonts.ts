import * as gulp from 'gulp';
import Config from '../../config';

export = () => {
    // console.log('BUILDING FONTS...', Config.FONTS_SRC, Config.FONTS_DEST);

    return gulp.src(Config.FONTS_SRC)
        .pipe(gulp.dest(Config.FONTS_DEST));
};
