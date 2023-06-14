import fs from 'fs';

// BEGIN HERE
export function writeFile(path, data, callback) {
    fs.writeFile(path, data, (error) => {
        if (error) {
            console.log(`Ошибка: ${error}`);
        } else {
            callback();
        }
    });
};
export default writeFile;
// END HERE
