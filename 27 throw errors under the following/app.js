try {
    var height = 250;
    if (height * 2 != height + height) {
        throw 'ENTERED VALUE IS NOT A NUMBER';
    } else if (height <= 70) {
        throw 'Height is too small';
    } else if (height >= 220) {
        throw 'Height is too big';
    } else {
        document.write("OK");
    }
} catch (ERR) {
    document.write(ERR);
}